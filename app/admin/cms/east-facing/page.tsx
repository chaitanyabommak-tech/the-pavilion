import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import FacadeEditorClient from '@/components/admin/FacadeEditorClient'

export default async function EastFacingEditorPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Fetch East Facing section content
  const { data: section } = await supabase
    .from('facade_sections')
    .select('*')
    .eq('section_type', 'east_facing')
    .single()

  // Fetch East Facing images
  const { data: images } = await supabase
    .from('facade_images')
    .select(`
      *,
      image:media_assets!facade_images_image_id_fkey(*)
    `)
    .eq('section_type', 'east_facing')
    .order('display_order', { ascending: true })

  // Fetch all media assets for image selection
  const { data: mediaAssets } = await supabase
    .from('media_assets')
    .select('*')
    .in('file_type', ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'])
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">East Facing Villas Editor</h1>
          <p className="text-gray-600">
            Manage East Facing section content and images. Changes appear on bommakugroup.com.
          </p>
        </div>

        <FacadeEditorClient
          sectionType="east_facing"
          initialSection={section}
          initialImages={images || []}
          mediaAssets={mediaAssets || []}
        />
      </div>
    </div>
  )
}
