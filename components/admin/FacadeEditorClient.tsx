'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface FacadeSection {
  id: string
  section_type: string
  eyebrow: string | null
  headline: string | null
  subheadline: string | null
  body_copy: string | null
  is_active: boolean
}

interface FacadeImage {
  id: string
  section_type: string
  image_type: string
  image_id: string | null
  caption: string | null
  alt_text: string | null
  display_order: number
  is_active: boolean
  image?: {
    file_url: string
    alt_text: string | null
  }
}

interface MediaAsset {
  id: string
  file_url: string
  file_name: string
  alt_text: string | null
}

interface FacadeEditorClientProps {
  sectionType: 'east_facing' | 'west_facing'
  initialSection: FacadeSection | null
  initialImages: FacadeImage[]
  mediaAssets: MediaAsset[]
}

export default function FacadeEditorClient({
  sectionType,
  initialSection,
  initialImages,
  mediaAssets
}: FacadeEditorClientProps) {
  const [section, setSection] = useState<FacadeSection | null>(initialSection)
  const [images, setImages] = useState<FacadeImage[]>(initialImages)
  const [selectingImageFor, setSelectingImageFor] = useState<string | null>(null)
  const router = useRouter()

  const displayName = sectionType === 'east_facing' ? 'East Facing' : 'West Facing'

  const handleUpdateSection = async () => {
    if (!section) return

    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('facade_sections')
        .update({
          eyebrow: section.eyebrow,
          headline: section.headline,
          subheadline: section.subheadline,
          body_copy: section.body_copy
        })
        .eq('id', section.id)

      if (error) throw error

      toast.success('Section content updated!')
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || 'Update failed')
    }
  }

  const handleAddImage = async (imageType: 'exterior' | 'interior') => {
    try {
      const supabase = createClient()

      const maxOrder = Math.max(...images.map(img => img.display_order), 0)

      const { error } = await supabase
        .from('facade_images')
        .insert({
          section_type: sectionType,
          image_type: imageType,
          display_order: maxOrder + 1,
          is_active: true
        })

      if (error) throw error

      toast.success('Image slot added!')
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || 'Failed to add image')
    }
  }

  const handleSelectImage = async (facadeImageId: string, mediaAssetId: string) => {
    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('facade_images')
        .update({ image_id: mediaAssetId })
        .eq('id', facadeImageId)

      if (error) throw error

      toast.success('Image updated!')
      setSelectingImageFor(null)
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || 'Update failed')
    }
  }

  const handleDeleteImage = async (id: string) => {
    if (!confirm('Delete this image?')) return

    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('facade_images')
        .delete()
        .eq('id', id)

      if (error) throw error

      toast.success('Image deleted!')
      router.refresh()
      setImages(images.filter(img => img.id !== id))
    } catch (error: any) {
      toast.error(error.message || 'Delete failed')
    }
  }

  const exteriorImages = images.filter(img => img.image_type === 'exterior')
  const interiorImages = images.filter(img => img.image_type === 'interior')

  return (
    <div>
      <Toaster position="top-right" />

      {/* Section Content */}
      {section && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Section Content</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Eyebrow Text</label>
              <input
                type="text"
                value={section.eyebrow || ''}
                onChange={(e) => setSection({ ...section, eyebrow: e.target.value })}
                placeholder="VASTU COMPLIANT"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
              <input
                type="text"
                value={section.headline || ''}
                onChange={(e) => setSection({ ...section, headline: e.target.value })}
                placeholder="East Facing Villas"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subheadline</label>
              <input
                type="text"
                value={section.subheadline || ''}
                onChange={(e) => setSection({ ...section, subheadline: e.target.value })}
                placeholder="Welcome the Morning Sun"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Body Copy</label>
              <textarea
                value={section.body_copy || ''}
                onChange={(e) => setSection({ ...section, body_copy: e.target.value })}
                rows={4}
                placeholder="Detailed description of the villas..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <button
              onClick={handleUpdateSection}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
            >
              Save Section Content
            </button>
          </div>
        </div>
      )}

      {/* Exterior Images */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Exterior Images</h2>
          <button
            onClick={() => handleAddImage('exterior')}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm"
          >
            + Add Exterior Image
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {exteriorImages.map(img => (
            <div key={img.id} className="border border-gray-200 rounded-lg p-4">
              {img.image?.file_url ? (
                <div className="relative aspect-video mb-3">
                  <Image
                    src={img.image.file_url}
                    alt={img.alt_text || 'Exterior'}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gray-100 rounded mb-3 flex items-center justify-center">
                  <span className="text-gray-400">No image</span>
                </div>
              )}

              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectingImageFor(img.id)}
                  className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
                >
                  {img.image ? 'Replace' : 'Select'} Image
                </button>
                <button
                  onClick={() => handleDeleteImage(img.id)}
                  className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interior Images */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Interior Images</h2>
          <button
            onClick={() => handleAddImage('interior')}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm"
          >
            + Add Interior Image
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {interiorImages.map(img => (
            <div key={img.id} className="border border-gray-200 rounded-lg p-4">
              {img.image?.file_url ? (
                <div className="relative aspect-video mb-3">
                  <Image
                    src={img.image.file_url}
                    alt={img.alt_text || 'Interior'}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gray-100 rounded mb-3 flex items-center justify-center">
                  <span className="text-gray-400">No image</span>
                </div>
              )}

              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectingImageFor(img.id)}
                  className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
                >
                  {img.image ? 'Replace' : 'Select'} Image
                </button>
                <button
                  onClick={() => handleDeleteImage(img.id)}
                  className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Selection Modal */}
      {selectingImageFor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Select Image from Media Library</h3>
              <button
                onClick={() => setSelectingImageFor(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="mb-4">
              <a
                href="/admin/cms/media"
                target="_blank"
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                Upload new images in Media Library →
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mediaAssets.map(asset => (
                <button
                  key={asset.id}
                  onClick={() => handleSelectImage(selectingImageFor, asset.id)}
                  className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:ring-4 hover:ring-blue-500 transition-all relative"
                >
                  <Image
                    src={asset.file_url}
                    alt={asset.alt_text || asset.file_name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
