'use client'

import { useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast from 'react-hot-toast'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'

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
  const [uploadingImage, setUploadingImage] = useState(false)
  const [newImagePreview, setNewImagePreview] = useState<string | null>(null)
  const [newImageFile, setNewImageFile] = useState<File | null>(null)

  const supabase = createClient()

  const handleEdit = (item: GalleryItem) => {
    setEditingItem(item)
    setShowEditModal(true)
    setNewImagePreview(null)
    setNewImageFile(null)
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast.error('Please upload an image file (JPG, PNG, WebP)')
        return
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('Image must be less than 10MB')
        return
      }

      setNewImageFile(file)
      setNewImagePreview(URL.createObjectURL(file))
      toast.success('Image selected. Click Save to upload.')
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp'],
    },
    maxFiles: 1,
    multiple: false,
  })

  const handleRemoveNewImage = () => {
    if (newImagePreview) {
      URL.revokeObjectURL(newImagePreview)
    }
    setNewImagePreview(null)
    setNewImageFile(null)
  }

  const handleUploadAndSave = async () => {
    if (!editingItem) return

    try {
      setUploadingImage(true)

      // If there's a new image, upload it first
      let newImageId = editingItem.image?.id

      if (newImageFile) {
        const formData = new FormData()
        formData.append('file', newImageFile)
        formData.append('category', 'Gallery')
        formData.append('alt_text', editingItem.alt_text || editingItem.title)
        formData.append('caption', editingItem.caption || '')

        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        if (!uploadResponse.ok) {
          const errorData = await uploadResponse.json()
          throw new Error(errorData.error || 'Upload failed')
        }

        const uploadResult = await uploadResponse.json()
        newImageId = uploadResult.media.id

        toast.success('Image uploaded successfully!')
      }

      // Update gallery item
      const { error } = await supabase
        .from('gallery_items')
        .update({
          title: editingItem.title,
          caption: editingItem.caption,
          alt_text: editingItem.alt_text,
          is_active: editingItem.is_active,
          is_published: editingItem.is_published,
          image_id: newImageId,
          updated_at: new Date().toISOString(),
        })
        .eq('id', editingItem.id)

      if (error) throw error

      toast.success('Gallery item updated and live on website!')

      // Refresh the page to show updated data
      window.location.reload()
    } catch (error: any) {
      toast.error(error.message || 'Failed to update gallery item')
    } finally {
      setUploadingImage(false)
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

                {/* Current Image */}
                {editingItem.image?.file_url && !newImagePreview && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Image
                    </label>
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-3">
                      <Image
                        src={editingItem.image.file_url}
                        alt={editingItem.alt_text}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* New Image Preview */}
                {newImagePreview && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Image Preview
                    </label>
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-3">
                      <Image
                        src={newImagePreview}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <button
                      onClick={handleRemoveNewImage}
                      className="text-sm text-red-600 hover:text-red-800 font-medium"
                    >
                      ✕ Remove selected image
                    </button>
                  </div>
                )}

                {/* Upload / Replace Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {editingItem.image?.file_url ? 'Replace Image' : 'Upload Image'}
                  </label>
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                      isDragActive
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400 bg-gray-50'
                    }`}
                  >
                    <input {...getInputProps()} />
                    <div className="space-y-2">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {isDragActive ? (
                        <p className="text-sm text-gray-600">Drop the image here...</p>
                      ) : (
                        <>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium text-blue-600 hover:text-blue-500">
                              Click to upload
                            </span>
                            {' or drag and drop'}
                          </p>
                          <p className="text-xs text-gray-500">
                            JPG, PNG, or WebP up to 10MB
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6 pt-6 border-t">
                <button
                  onClick={() => {
                    setShowEditModal(false)
                    setEditingItem(null)
                    handleRemoveNewImage()
                  }}
                  disabled={uploadingImage}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUploadAndSave}
                  disabled={uploadingImage}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                >
                  {uploadingImage ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Uploading...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
