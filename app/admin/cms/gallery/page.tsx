import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import GalleryManagerClient from '@/components/admin/GalleryManagerClient'

export default async function GalleryManagerPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Fetch gallery items with their images
  const { data: galleryItems } = await supabase
    .from('gallery_items')
    .select(`
      *,
      image:media_assets!gallery_items_image_id_fkey(*)
    `)
    .order('display_order', { ascending: true })

  // Fetch all media assets for image selection
  const { data: mediaAssets } = await supabase
    .from('media_assets')
    .select('*')
    .eq('file_type', 'image/jpeg')
    .or('file_type.eq.image/png,file_type.eq.image/webp,file_type.eq.image/jpg')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gallery Manager</h1>
          <p className="text-gray-600">
            Manage the homepage gallery carousel. Changes appear on bommakugroup.com immediately.
          </p>
        </div>

        <GalleryManagerClient
          initialGallery={galleryItems || []}
          mediaAssets={mediaAssets || []}
        />
      </div>
    </div>
  )
}
