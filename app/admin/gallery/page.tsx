import { createClient } from '@/lib/supabase/server'
import GalleryManager from '@/components/admin/GalleryManager'
import { Toaster } from 'react-hot-toast'

export default async function AdminGalleryPage() {
  const supabase = await createClient()

  // Fetch gallery items with media
  const { data: galleryItems } = await supabase
    .from('gallery_items')
    .select(`
      *,
      image:media_assets!gallery_items_image_id_fkey(*),
      thumbnail:media_assets!gallery_items_thumbnail_id_fkey(*)
    `)
    .order('display_order', { ascending: true })

  // Fetch all media for selection
  const { data: mediaAssets } = await supabase
    .from('media_assets')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  return (
    <div>
      <Toaster position="top-right" />

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Gallery Manager</h1>
        <p className="text-gray-600 mt-2">
          Manage gallery carousel slides. Drag to reorder, click to edit.
        </p>
      </div>

      <GalleryManager
        initialGalleryItems={galleryItems || []}
        mediaAssets={mediaAssets || []}
      />
    </div>
  )
}
