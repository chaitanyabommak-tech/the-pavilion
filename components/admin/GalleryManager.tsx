'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast from 'react-hot-toast'
import Image from 'next/image'

interface GalleryItem {
  id: string
  title: string
  caption: string
  alt_text: string
  display_order: number
  is_active: boolean
  is_published: boolean
  image: any
  thumbnail: any
}

interface MediaAsset {
  id: string
  filename: string
  file_url: string
  alt_text: string | null
  category: string | null
}

interface GalleryManagerProps {
  initialGalleryItems: GalleryItem[]
  mediaAssets: MediaAsset[]
}

export default function GalleryManager({
  initialGalleryItems,
  mediaAssets,
}: GalleryManagerProps) {
  const [galleryItems, setGalleryItems] = useState(initialGalleryItems)
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null)
  const [showEditModal, setShowEditModal] = useState(false)

  const supabase = createClient()

  const handleEdit = (item: GalleryItem) => {
    setEditingItem(item)
    setShowEditModal(true)
  }

  const handleSave = async () => {
    if (!editingItem) return

    try {
      const { error } = await supabase
        .from('gallery_items')
        .update({
          title: editingItem.title,
          caption: editingItem.caption,
          alt_text: editingItem.alt_text,
          is_active: editingItem.is_active,
          is_published: editingItem.is_published,
          updated_at: new Date().toISOString(),
        })
        .eq('id', editingItem.id)

      if (error) throw error

      // Update local state
      setGalleryItems(
        galleryItems.map((item) =>
          item.id === editingItem.id ? editingItem : item
        )
      )

      toast.success('Gallery item updated successfully')
      setShowEditModal(false)
      setEditingItem(null)
    } catch (error: any) {
      toast.error(error.message || 'Failed to update gallery item')
    }
  }

  const handleTogglePublish = async (item: GalleryItem) => {
    try {
      const newPublishState = !item.is_published

      const { error } = await supabase
        .from('gallery_items')
        .update({
          is_published: newPublishState,
          published_at: newPublishState ? new Date().toISOString() : null,
        })
        .eq('id', item.id)

      if (error) throw error

      setGalleryItems(
        galleryItems.map((i) =>
          i.id === item.id ? { ...i, is_published: newPublishState } : i
        )
      )

      toast.success(
        newPublishState ? 'Gallery item published' : 'Gallery item unpublished'
      )
    } catch (error: any) {
      toast.error(error.message || 'Failed to toggle publish state')
    }
  }

  const moveItem = async (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === galleryItems.length - 1)
    ) {
      return
    }

    const newIndex = direction === 'up' ? index - 1 : index + 1
    const newItems = [...galleryItems]
    const [movedItem] = newItems.splice(index, 1)
    newItems.splice(newIndex, 0, movedItem)

    // Update display_order for affected items
    const updates = newItems.map((item, idx) => ({
      id: item.id,
      display_order: idx,
    }))

    try {
      for (const update of updates) {
        await supabase
          .from('gallery_items')
          .update({ display_order: update.display_order })
          .eq('id', update.id)
      }

      setGalleryItems(newItems)
      toast.success('Gallery order updated')
    } catch (error: any) {
      toast.error('Failed to reorder gallery')
    }
  }

  return (
    <div>
      {/* Gallery Items List */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title / Caption
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {galleryItems.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex flex-col">
                        <button
                          onClick={() => moveItem(index, 'up')}
                          disabled={index === 0}
                          className="text-gray-400 hover:text-gray-600 disabled:opacity-30"
                        >
                          ▲
                        </button>
                        <button
                          onClick={() => moveItem(index, 'down')}
                          disabled={index === galleryItems.length - 1}
                          className="text-gray-400 hover:text-gray-600 disabled:opacity-30"
                        >
                          ▼
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.image?.file_url && (
                      <div className="relative w-20 h-12 rounded overflow-hidden">
                        <Image
                          src={item.image.file_url}
                          alt={item.alt_text}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500">{item.caption}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-1">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded ${
                          item.is_published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {item.is_published ? 'Published' : 'Draft'}
                      </span>
                      {item.is_active && (
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded bg-blue-100 text-blue-800">
                          Active
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleTogglePublish(item)}
                      className="text-green-600 hover:text-green-800 font-medium"
                    >
                      {item.is_published ? 'Unpublish' : 'Publish'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Edit Gallery Item
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={editingItem.title}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, title: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Caption
                  </label>
                  <input
                    type="text"
                    value={editingItem.caption}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, caption: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alt Text (for SEO & accessibility)
                  </label>
                  <textarea
                    value={editingItem.alt_text}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, alt_text: e.target.value })
                    }
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={editingItem.is_active}
                      onChange={(e) =>
                        setEditingItem({
                          ...editingItem,
                          is_active: e.target.checked,
                        })
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Active</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={editingItem.is_published}
                      onChange={(e) =>
                        setEditingItem({
                          ...editingItem,
                          is_published: e.target.checked,
                        })
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Published
                    </span>
                  </label>
                </div>

                {editingItem.image?.file_url && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Image
                    </label>
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <Image
                        src={editingItem.image.file_url}
                        alt={editingItem.alt_text}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-3 mt-6 pt-6 border-t">
                <button
                  onClick={() => {
                    setShowEditModal(false)
                    setEditingItem(null)
                  }}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
