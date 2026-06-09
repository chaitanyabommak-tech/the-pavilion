'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast, { Toaster } from 'react-hot-toast'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface MediaAsset {
  id: string
  filename: string
  file_url: string
  alt_text: string | null
  caption: string | null
}

interface GalleryItem {
  id: string
  title: string
  caption: string
  image_id: string
  alt_text: string | null
  display_order: number
  is_active: boolean
  is_published: boolean
  image?: MediaAsset
}

interface GalleryManagerClientProps {
  initialGallery: GalleryItem[]
  mediaAssets: MediaAsset[]
}

export default function GalleryManagerClient({ initialGallery, mediaAssets }: GalleryManagerClientProps) {
  const [gallery, setGallery] = useState<GalleryItem[]>(initialGallery)
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null)
  const [selectingImage, setSelectingImage] = useState(false)
  const router = useRouter()

  const handleUpdateGalleryItem = async (id: string, updates: Partial<GalleryItem>) => {
    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('gallery_items')
        .update(updates)
        .eq('id', id)

      if (error) throw error

      toast.success('Gallery item updated! Check live website.')
      setEditingItem(null)
      setSelectingImage(false)
      router.refresh()

      // Update local state
      setGallery(gallery.map(item =>
        item.id === id ? { ...item, ...updates } : item
      ))
    } catch (error: any) {
      toast.error(error.message || 'Update failed')
    }
  }

  const handleReplaceImage = async (galleryItemId: string, newImageId: string) => {
    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('gallery_items')
        .update({ image_id: newImageId, thumbnail_id: newImageId })
        .eq('id', galleryItemId)

      if (error) throw error

      toast.success('Image replaced! Refresh live website to see changes.')
      setSelectingImage(false)
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || 'Failed to replace image')
    }
  }

  const handleReorder = async (fromIndex: number, direction: 'up' | 'down') => {
    const toIndex = direction === 'up' ? fromIndex - 1 : fromIndex + 1

    if (toIndex < 0 || toIndex >= gallery.length) return

    try {
      const supabase = createClient()

      // Swap display_order values
      const item1 = gallery[fromIndex]
      const item2 = gallery[toIndex]

      await supabase
        .from('gallery_items')
        .update({ display_order: item2.display_order })
        .eq('id', item1.id)

      await supabase
        .from('gallery_items')
        .update({ display_order: item1.display_order })
        .eq('id', item2.id)

      toast.success('Gallery reordered!')
      router.refresh()

      // Update local state
      const newGallery = [...gallery]
      ;[newGallery[fromIndex], newGallery[toIndex]] = [newGallery[toIndex], newGallery[fromIndex]]
      setGallery(newGallery)
    } catch (error: any) {
      toast.error(error.message || 'Reorder failed')
    }
  }

  const handleTogglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('gallery_items')
        .update({
          is_published: !currentStatus,
          published_at: !currentStatus ? new Date().toISOString() : null
        })
        .eq('id', id)

      if (error) throw error

      toast.success(currentStatus ? 'Unpublished' : 'Published!')
      router.refresh()

      setGallery(gallery.map(item =>
        item.id === id ? { ...item, is_published: !currentStatus } : item
      ))
    } catch (error: any) {
      toast.error(error.message || 'Failed to update')
    }
  }

  return (
    <div>
      <Toaster position="top-right" />

      {/* Gallery Items Grid */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">
            Gallery Items ({gallery.length})
          </h2>
          <a
            href="/"
            target="_blank"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold"
          >
            Preview Live Site ↗
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div
              key={item.id}
              className={`border-2 rounded-lg p-4 ${
                item.is_published ? 'border-green-500' : 'border-gray-300'
              }`}
            >
              {/* Image */}
              <div className="aspect-video bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
                {item.image?.file_url ? (
                  <Image
                    src={item.image.file_url}
                    alt={item.alt_text || item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl">🖼️</span>
                  </div>
                )}

                {/* Order Badge */}
                <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  #{index + 1}
                </div>

                {/* Published Badge */}
                {item.is_published && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    LIVE
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="space-y-2 mb-4">
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.caption}</p>
                {item.alt_text && (
                  <p className="text-xs text-gray-500">Alt: {item.alt_text}</p>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleReorder(index, 'up')}
                    disabled={index === 0}
                    className="flex-1 px-3 py-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-300 text-white rounded text-sm"
                  >
                    ↑ Move Up
                  </button>
                  <button
                    onClick={() => handleReorder(index, 'down')}
                    disabled={index === gallery.length - 1}
                    className="flex-1 px-3 py-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-300 text-white rounded text-sm"
                  >
                    ↓ Move Down
                  </button>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingItem(item)}
                    className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setEditingItem(item)
                      setSelectingImage(true)
                    }}
                    className="flex-1 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm"
                  >
                    Replace Image
                  </button>
                </div>

                <button
                  onClick={() => handleTogglePublish(item.id, item.is_published)}
                  className={`w-full px-3 py-2 rounded text-sm font-semibold ${
                    item.is_published
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {item.is_published ? 'Unpublish' : 'Publish'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {editingItem && !selectingImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Edit Gallery Item</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  defaultValue={editingItem.title}
                  onChange={(e) => {
                    setEditingItem({ ...editingItem, title: e.target.value })
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Caption
                </label>
                <input
                  type="text"
                  defaultValue={editingItem.caption}
                  onChange={(e) => {
                    setEditingItem({ ...editingItem, caption: e.target.value })
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alt Text (for SEO)
                </label>
                <input
                  type="text"
                  defaultValue={editingItem.alt_text || ''}
                  onChange={(e) => {
                    setEditingItem({ ...editingItem, alt_text: e.target.value })
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => handleUpdateGalleryItem(editingItem.id, {
                    title: editingItem.title,
                    caption: editingItem.caption,
                    alt_text: editingItem.alt_text,
                  })}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditingItem(null)}
                  className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Selection Modal */}
      {editingItem && selectingImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Select New Image for "{editingItem.title}"</h3>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-4">
              {mediaAssets.map((asset) => (
                <button
                  key={asset.id}
                  onClick={() => handleReplaceImage(editingItem.id, asset.id)}
                  className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:ring-4 hover:ring-blue-500 transition-all relative"
                >
                  <Image
                    src={asset.file_url}
                    alt={asset.alt_text || asset.filename}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 25vw"
                  />
                </button>
              ))}
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setSelectingImage(false)}
                className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
              >
                Cancel
              </button>
              <a
                href="/admin/cms/media"
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center"
              >
                Upload New Image
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
