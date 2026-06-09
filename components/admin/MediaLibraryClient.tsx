'use client'

import { useState, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast, { Toaster } from 'react-hot-toast'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface MediaAsset {
  id: string
  filename: string
  original_filename: string
  file_url: string
  file_type: string
  file_size: number
  alt_text: string | null
  caption: string | null
  category: string | null
  is_active: boolean
  created_at: string
}

interface MediaLibraryClientProps {
  initialMedia: MediaAsset[]
}

export default function MediaLibraryClient({ initialMedia }: MediaLibraryClientProps) {
  const [media, setMedia] = useState<MediaAsset[]>(initialMedia)
  const [uploading, setUploading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [editingMedia, setEditingMedia] = useState<MediaAsset | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const categories = [
    'All',
    'Hero',
    'Gallery',
    'Grand Entrance',
    'Recreation Zone',
    'East Facing',
    'West Facing',
    'Interiors',
    'Floor Plans',
    'Master Plan',
    'Location',
    'Brochure',
    'Logos',
    'Miscellaneous',
  ]

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('category', selectedCategory === 'All' ? 'Miscellaneous' : selectedCategory)
      formData.append('alt_text', file.name)
      formData.append('caption', '')

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Upload failed')
      }

      toast.success('File uploaded successfully!')
      router.refresh()

      // Add new media to list
      setMedia([result.media, ...media])
    } catch (error: any) {
      console.error('Upload error:', error)
      toast.error(error.message || 'Upload failed')
    } finally {
      setUploading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handleUpdateMedia = async (id: string, updates: Partial<MediaAsset>) => {
    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('media_assets')
        .update(updates)
        .eq('id', id)

      if (error) throw error

      toast.success('Media updated!')
      setEditingMedia(null)
      router.refresh()

      // Update local state
      setMedia(media.map(m => m.id === id ? { ...m, ...updates } : m))
    } catch (error: any) {
      toast.error(error.message || 'Update failed')
    }
  }

  const handleDeleteMedia = async (id: string, filePath: string) => {
    if (!confirm('Are you sure you want to delete this file?')) return

    try {
      const supabase = createClient()

      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('website-media')
        .remove([filePath])

      if (storageError) throw storageError

      // Delete from database
      const { error: dbError } = await supabase
        .from('media_assets')
        .delete()
        .eq('id', id)

      if (dbError) throw dbError

      toast.success('File deleted!')
      router.refresh()

      // Remove from local state
      setMedia(media.filter(m => m.id !== id))
    } catch (error: any) {
      toast.error(error.message || 'Delete failed')
    }
  }

  const filteredMedia = selectedCategory === 'All'
    ? media
    : media.filter(m => m.category === selectedCategory)

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  return (
    <div>
      <Toaster position="top-right" />

      {/* Upload Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Upload New File</h2>
        <div className="flex items-center space-x-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            {categories.filter(c => c !== 'All').map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp,application/pdf"
            onChange={handleUpload}
            disabled={uploading}
            className="hidden"
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-semibold"
          >
            {uploading ? 'Uploading...' : 'Choose File'}
          </button>

          <span className="text-sm text-gray-500">
            Allowed: JPG, PNG, WEBP, PDF (max 10MB)
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-2 text-sm">
                  ({media.filter(m => m.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Media Grid */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">
          Media Files ({filteredMedia.length})
        </h2>

        {filteredMedia.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No files in this category</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 transition-colors"
              >
                {/* Image Preview */}
                {item.file_type.startsWith('image/') ? (
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
                    <Image
                      src={item.file_url}
                      alt={item.alt_text || item.filename}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-4xl">📄</span>
                  </div>
                )}

                {/* File Info */}
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {item.original_filename}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(item.file_size)}
                  </p>
                  {item.category && (
                    <p className="text-xs text-blue-600">{item.category}</p>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-3 flex space-x-2">
                  <button
                    onClick={() => setEditingMedia(item)}
                    className="flex-1 px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => navigator.clipboard.writeText(item.file_url)}
                    className="flex-1 px-3 py-1 text-xs bg-gray-600 hover:bg-gray-700 text-white rounded"
                  >
                    Copy URL
                  </button>
                  <button
                    onClick={() => handleDeleteMedia(item.id, item.file_url)}
                    className="px-3 py-1 text-xs bg-red-600 hover:bg-red-700 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Edit Media</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alt Text
                </label>
                <input
                  type="text"
                  defaultValue={editingMedia.alt_text || ''}
                  onChange={(e) => {
                    setEditingMedia({ ...editingMedia, alt_text: e.target.value })
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
                  defaultValue={editingMedia.caption || ''}
                  onChange={(e) => {
                    setEditingMedia({ ...editingMedia, caption: e.target.value })
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  defaultValue={editingMedia.category || ''}
                  onChange={(e) => {
                    setEditingMedia({ ...editingMedia, category: e.target.value })
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  {categories.filter(c => c !== 'All').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => handleUpdateMedia(editingMedia.id, {
                    alt_text: editingMedia.alt_text,
                    caption: editingMedia.caption,
                    category: editingMedia.category,
                  })}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditingMedia(null)}
                  className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
