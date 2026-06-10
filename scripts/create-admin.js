#!/usr/bin/env node

/**
 * Script to create an admin user
 * Usage: node scripts/create-admin.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing environment variables!')
  console.error('Make sure .env.local has:')
  console.error('  - NEXT_PUBLIC_SUPABASE_URL')
  console.error('  - SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

async function createAdminUser() {
  const email = 'admin@bommakugroup.com'
  const password = 'Pavilion@2026'
  const fullName = 'Bommaku Admin'

  console.log('\n🔐 Creating admin user...')
  console.log(`Email: ${email}`)
  console.log(`Password: ${password}`)
  console.log('')

  try {
    // Step 1: Create auth user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
      email_confirm: true,
      user_metadata: {
        full_name: fullName,
      },
    })

    if (authError) {
      if (authError.message.includes('already registered')) {
        console.log('⚠️  User already exists in auth, checking admin_users table...')

        // Try to get existing user
        const { data: existingUsers } = await supabase.auth.admin.listUsers()
        const existingUser = existingUsers?.users?.find(u => u.email === email)

        if (existingUser) {
          // Check if already in admin_users
          const { data: adminUser } = await supabase
            .from('admin_users')
            .select('*')
            .eq('id', existingUser.id)
            .single()

          if (adminUser) {
            console.log('✅ Admin user already exists and is configured!')
            console.log(`\n📧 Email: ${email}`)
            console.log(`🔑 Password: ${password}`)
            console.log(`\n🌐 Login at: http://localhost:3000/admin/login`)
            return
          }

          // Add to admin_users
          const { error: insertError } = await supabase.from('admin_users').insert({
            id: existingUser.id,
            email: email,
            role: 'super_admin',
            full_name: fullName,
            is_active: true,
          })

          if (insertError && !insertError.message.includes('duplicate')) {
            throw insertError
          }

          console.log('✅ Added existing user to admin_users table!')
          console.log(`\n📧 Email: ${email}`)
          console.log(`🔑 Password: ${password}`)
          console.log(`\n🌐 Login at: http://localhost:3000/admin/login`)
          return
        }
      }

      throw authError
    }

    if (!authData.user) {
      throw new Error('No user data returned')
    }

    console.log('✅ Auth user created:', authData.user.id)

    // Step 2: Add to admin_users table
    const { error: adminError } = await supabase.from('admin_users').insert({
      id: authData.user.id,
      email: email,
      role: 'super_admin',
      full_name: fullName,
      is_active: true,
    })

    if (adminError) {
      console.error('❌ Failed to create admin record:', adminError.message)
      throw adminError
    }

    console.log('✅ Admin user created successfully!')
    console.log('')
    console.log('═══════════════════════════════════════')
    console.log('📧 Email: ' + email)
    console.log('🔑 Password: ' + password)
    console.log('═══════════════════════════════════════')
    console.log('')
    console.log('🌐 Login at: http://localhost:3000/admin/login')
    console.log('🚀 Or after deployment: https://bommakugroup.com/admin/login')
    console.log('')
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

createAdminUser()
