import { createClient } from '@/lib/supabase/server'
import { Toaster } from 'react-hot-toast'

export default async function OpenGalleryPage() {
  const supabase = await createClient()

  const { data: galleryItems } = await supabase
    .from('gallery_items')
    .select('*')
    .order('display_order', { ascending: true })

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />

      <div className="bg-white shadow mb-6">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <a href="/admin/open" className="text-blue-600 hover:text-blue-800 mb-2 inline-block">
            ← Back to Dashboard
          </a>
          <h1 className="text-3xl font-bold text-gray-900">Gallery Manager</h1>
          <p className="text-gray-600 mt-1">
            Manage gallery carousel slides
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {galleryItems && galleryItems.length > 0 ? (
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-700">Found {galleryItems.length} gallery items</p>
            <div className="mt-4 space-y-2">
              {galleryItems.map((item) => (
                <div key={item.id} className="p-3 bg-gray-50 rounded">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <span className="text-3xl mr-4">ℹ️</span>
              <div>
                <h3 className="text-lg font-bold text-yellow-900 mb-2">No Gallery Items Yet</h3>
                <p className="text-yellow-800">
                  The gallery is empty. You can add images through the Media Library first, then create gallery items.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
