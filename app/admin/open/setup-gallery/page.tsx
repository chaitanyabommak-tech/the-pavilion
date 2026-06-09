'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast, { Toaster } from 'react-hot-toast'

export default function SetupGalleryPage() {
  const [loading, setLoading] = useState(false)

  const setupGallery = async () => {
    setLoading(true)

    try {
      const supabase = createClient()

      // Default gallery images from the website
      const defaultImages = [
        { title: "Grand Entrance", caption: "Grand Entrance", alt_text: "The Pavilion villa community grand entrance gate by Bommaku Group", file_url: "/images/pavilion/entrance/NEW-CLEAN-ENTRANCE.jpg", order: 1 },
        { title: "Recreation Zone", caption: "Recreation Zone", alt_text: "Bommaku Recreation Zone aerial with infinity pool and sports facilities", file_url: "/images/pavilion/recreation-zone/aerial-view-01.jpg", order: 2 },
        { title: "Villa Community", caption: "Villa Community", alt_text: "The Pavilion villa community with contemporary design language", file_url: "/images/pavilion/exteriors/villa-street-view-02.jpg", order: 3 },
        { title: "Sports & Wellness", caption: "Sports & Wellness", alt_text: "Sports courts and wellness facilities aerial view", file_url: "/images/pavilion/recreation-zone/sports-courts-aerial.jpg", order: 4 },
        { title: "Corner Villa", caption: "Corner Villa", alt_text: "Premium corner villa with landscaping and architectural lighting", file_url: "/images/pavilion/exteriors/corner-villa-view.jpg", order: 5 },
        { title: "Evening View", caption: "Evening View", alt_text: "Villa row at evening with warm interior lighting", file_url: "/images/pavilion/exteriors/villa-street-view-03.jpg", order: 6 },
        { title: "Living Space", caption: "Living Space", alt_text: "Contemporary living room interior with premium furnishings", file_url: "/images/pavilion/interiors/living-room-02.jpg", order: 7 },
        { title: "Gourmet Kitchen", caption: "Gourmet Kitchen", alt_text: "Luxury kitchen with wooden cabinetry and premium fittings", file_url: "/images/pavilion/interiors/kitchen-02.jpg", order: 8 },
        { title: "Master Suite", caption: "Master Suite", alt_text: "Spacious master bedroom with modern design", file_url: "/images/pavilion/interiors/master-bedroom-02.jpg", order: 9 },
      ]

      for (const img of defaultImages) {
        // First create a media asset
        const { data: media, error: mediaError } = await supabase
          .from('media_assets')
          .insert({
            filename: img.file_url.split('/').pop(),
            original_filename: img.file_url.split('/').pop(),
            file_path: img.file_url,
            file_url: img.file_url,
            file_type: 'image/jpeg',
            file_size: 0,
            alt_text: img.alt_text,
            caption: img.caption,
            category: 'gallery',
            is_active: true,
          })
          .select()
          .single()

        if (mediaError) {
          console.error('Media error:', mediaError)
          continue
        }

        // Then create gallery item
        const { error: galleryError } = await supabase
          .from('gallery_items')
          .insert({
            title: img.title,
            caption: img.caption,
            image_id: media.id,
            thumbnail_id: media.id,
            alt_text: img.alt_text,
            display_order: img.order,
            is_active: true,
            is_published: true,
            published_at: new Date().toISOString(),
          })

        if (galleryError) {
          console.error('Gallery error:', galleryError)
        }
      }

      toast.success('Gallery setup complete! Visit the homepage to see it.')
    } catch (error: any) {
      toast.error(error.message || 'Setup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />

      <div className="bg-white shadow mb-6">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <a href="/admin/open" className="text-blue-600 hover:text-blue-800 mb-2 inline-block">
            ← Back to Dashboard
          </a>
          <h1 className="text-3xl font-bold text-gray-900">Setup Gallery</h1>
          <p className="text-gray-600 mt-1">
            Populate gallery with current website images
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Gallery Database Setup</h2>
          <p className="text-gray-700 mb-6">
            This will add the current 9 gallery images from your website into the database.
            Once done, you can manage them from the admin dashboard and changes will appear live!
          </p>

          <button
            onClick={setupGallery}
            disabled={loading}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors"
          >
            {loading ? 'Setting up gallery...' : 'Setup Gallery Now'}
          </button>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">What happens next:</h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-800">
              <li>9 gallery images will be added to the database</li>
              <li>Gallery on homepage will load from database</li>
              <li>You can edit/reorder from /admin/open/gallery</li>
              <li>Changes in admin will appear live on bommakugroup.com</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
