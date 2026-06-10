#!/usr/bin/env node

/**
 * Check what categories are actually in the database
 */

const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkCategories() {
  console.log('🔍 Checking existing media_assets categories...\n')

  // Get all distinct categories from existing records
  const { data: existingMedia, error } = await supabase
    .from('media_assets')
    .select('category')
    .limit(100)

  if (error) {
    console.error('❌ Error fetching media:', error.message)
    return
  }

  const categories = [...new Set(existingMedia.map(m => m.category))].filter(Boolean)

  console.log('✅ Found these categories in use:')
  categories.forEach(cat => console.log(`   - "${cat}"`))

  console.log('\n📋 Testing which categories work...\n')

  // Test common category names
  const testCategories = [
    'Gallery',
    'Exterior',
    'Interior',
    'Floor Plan',
    'Master Plan',
    'Recreation Zone',
    'Amenity',
    'Other',
    'general',
    'image',
    'photo'
  ]

  for (const testCat of testCategories) {
    const { error: testError } = await supabase
      .from('media_assets')
      .insert({
        filename: 'test.jpg',
        original_filename: 'test.jpg',
        file_path: 'test/test.jpg',
        file_url: 'https://test.com/test.jpg',
        file_type: 'image/jpeg',
        file_size: 1000,
        category: testCat,
        is_active: false
      })
      .select()

    if (!testError) {
      console.log(`✅ "${testCat}" - VALID`)
      // Delete the test record
      await supabase.from('media_assets').delete().eq('filename', 'test.jpg')
    } else if (testError.message.includes('category_check')) {
      console.log(`❌ "${testCat}" - INVALID (constraint violation)`)
    } else {
      console.log(`⚠️  "${testCat}" - Error: ${testError.message}`)
    }
  }
}

checkCategories()
