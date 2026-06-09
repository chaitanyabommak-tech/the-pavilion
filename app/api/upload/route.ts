import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

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

    // Create Supabase client with service role
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

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
        category: category || 'Miscellaneous',
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
