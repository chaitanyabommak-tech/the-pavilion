#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function checkAdmin() {
  const { data: users } = await supabase.auth.admin.listUsers()
  const adminUser = users?.users?.find(u => u.email === 'admin@bommakugroup.com')

  if (adminUser) {
    console.log('✅ Found auth user:', adminUser.id)
    console.log('Email:', adminUser.email)

    const { data: adminRecord } = await supabase
      .from('admin_users')
      .select('*')
      .eq('id', adminUser.id)
      .single()

    if (adminRecord) {
      console.log('✅ Admin record exists!')
      console.log('\n═══════════════════════════════════════')
      console.log('📧 Email: admin@bommakugroup.com')
      console.log('🔑 Password: Pavilion@2026')
      console.log('═══════════════════════════════════════')
      console.log('\n🌐 Login at: http://localhost:3000/admin/login')
    } else {
      console.log('⚠️  Creating admin record...')
      await supabase.from('admin_users').insert({
        id: adminUser.id,
        email: adminUser.email,
        role: 'super_admin',
        full_name: 'Bommaku Admin',
        is_active: true,
      })
      console.log('✅ Admin record created!')
      console.log('\n═══════════════════════════════════════')
      console.log('📧 Email: admin@bommakugroup.com')
      console.log('🔑 Password: Pavilion@2026')
      console.log('═══════════════════════════════════════')
    }
  } else {
    console.log('❌ No admin user found')
  }
}

checkAdmin()
