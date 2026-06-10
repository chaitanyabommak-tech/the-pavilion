import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const category = formData.get('category') as string
    const altText = formData.get('alt_text') as string
    const caption = formData.get('caption') as string

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'application/pdf']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 })
    }

    // Use authenticated user's session
    const supabase = await createClient()

    // Check if user is authenticated
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized - please login again' }, { status: 401 })
    }

    // Generate unique filename
    const timestamp = Date.now()
    const fileName = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
    const filePath = `media/${fileName}`

    // Convert File to ArrayBuffer then to Buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('website-media')
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: false,
      })

    if (uploadError) {
      console.error('Upload error:', uploadError)
      return NextResponse.json({ error: uploadError.message }, { status: 500 })
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('website-media')
      .getPublicUrl(filePath)

    // Save to media_assets table
    // Valid categories from database constraint (lowercase):
    // hero, gallery, grand_entrance, recreation_zone, east_facing_exteriors,
    // west_facing_exteriors, interiors, floor_plans, master_plan, location, brochure, logos, misc
    const validCategory = (category || 'gallery').toLowerCase()
    const { data: mediaAsset, error: dbError } = await supabase
      .from('media_assets')
      .insert({
        filename: fileName,
        original_filename: file.name,
        file_path: filePath,
        file_url: publicUrl,
        file_type: file.type,
        file_size: file.size,
        alt_text: altText || file.name,
        caption: caption || null,
        category: validCategory,
        is_active: true,
      })
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      // Try to delete uploaded file if DB insert fails
      await supabase.storage.from('website-media').remove([filePath])
      return NextResponse.json({ error: dbError.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      media: mediaAsset,
      url: publicUrl,
    })
  } catch (error: any) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: error.message || 'Upload failed' },
      { status: 500 }
    )
  }
}
