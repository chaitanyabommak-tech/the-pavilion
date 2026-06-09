import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import MediaLibraryClient from '@/components/admin/MediaLibraryClient'

export default async function MediaLibraryPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Fetch all media assets
  const { data: mediaAssets } = await supabase
    .from('media_assets')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Media Library</h1>
          <p className="text-gray-600">Upload and manage all website images and files</p>
        </div>

        <MediaLibraryClient initialMedia={mediaAssets || []} />
      </div>
    </div>
  )
}
