'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface Feature {
  id: string
  category: string
  feature_name: string
  display_order: number
  is_active: boolean
}

interface RecreationZoneEditorClientProps {
  initialFeatures: Feature[]
}

const CATEGORIES = ['Recreation', 'Sports', 'Wellness', 'Community', 'Convenience', 'Landscape']

export default function RecreationZoneEditorClient({ initialFeatures }: RecreationZoneEditorClientProps) {
  const [features, setFeatures] = useState<Feature[]>(initialFeatures)
  const [editingFeature, setEditingFeature] = useState<Feature | null>(null)
  const [addingFeature, setAddingFeature] = useState(false)
  const [newFeature, setNewFeature] = useState({
    category: 'Recreation',
    feature_name: '',
  })
  const router = useRouter()

  const handleAddFeature = async () => {
    if (!newFeature.feature_name.trim()) {
      toast.error('Feature name is required')
      return
    }

    try {
      const supabase = createClient()

      const maxOrder = Math.max(...features.map(f => f.display_order), 0)

      const { error } = await supabase
        .from('recreation_zone_features')
        .insert({
          category: newFeature.category,
          feature_name: newFeature.feature_name,
          display_order: maxOrder + 1,
          is_active: true
        })

      if (error) throw error

      toast.success('Feature added!')
      setAddingFeature(false)
      setNewFeature({ category: 'Recreation', feature_name: '' })
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || 'Failed to add feature')
    }
  }

  const handleUpdateFeature = async (id: string, updates: Partial<Feature>) => {
    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('recreation_zone_features')
        .update(updates)
        .eq('id', id)

      if (error) throw error

      toast.success('Feature updated!')
      setEditingFeature(null)
      router.refresh()

      setFeatures(features.map(f => f.id === id ? { ...f, ...updates } : f))
    } catch (error: any) {
      toast.error(error.message || 'Update failed')
    }
  }

  const handleDeleteFeature = async (id: string) => {
    if (!confirm('Delete this feature?')) return

    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('recreation_zone_features')
        .delete()
        .eq('id', id)

      if (error) throw error

      toast.success('Feature deleted!')
      router.refresh()

      setFeatures(features.filter(f => f.id !== id))
    } catch (error: any) {
      toast.error(error.message || 'Delete failed')
    }
  }

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    await handleUpdateFeature(id, { is_active: !currentStatus })
  }

  // Group features by category
  const groupedFeatures = features.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = []
    }
    acc[feature.category].push(feature)
    return acc
  }, {} as Record<string, Feature[]>)

  return (
    <div>
      <Toaster position="top-right" />

      {/* Add Feature Button */}
      <div className="mb-6">
        <button
          onClick={() => setAddingFeature(true)}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
        >
          + Add Feature
        </button>
      </div>

      {/* Features by Category */}
      <div className="space-y-6">
        {CATEGORIES.map(category => (
          <div key={category} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{category}</h2>

            <div className="space-y-2">
              {groupedFeatures[category]?.map(feature => (
                <div key={feature.id} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                  <div className="flex items-center space-x-4 flex-1">
                    <span className={`text-sm ${feature.is_active ? 'text-gray-900' : 'text-gray-400 line-through'}`}>
                      {feature.feature_name}
                    </span>
                    {!feature.is_active && (
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">Inactive</span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => setEditingFeature(feature)}
                      className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleToggleActive(feature.id, feature.is_active)}
                      className={`px-3 py-1 text-xs ${feature.is_active ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-green-600 hover:bg-green-700'} text-white rounded`}
                    >
                      {feature.is_active ? 'Hide' : 'Show'}
                    </button>
                    <button
                      onClick={() => handleDeleteFeature(feature.id)}
                      className="px-3 py-1 text-xs bg-red-600 hover:bg-red-700 text-white rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )) || <p className="text-gray-500 text-sm italic">No features in this category</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Add Feature Modal */}
      {addingFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Add New Feature</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={newFeature.category}
                  onChange={(e) => setNewFeature({ ...newFeature, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Feature Name</label>
                <input
                  type="text"
                  value={newFeature.feature_name}
                  onChange={(e) => setNewFeature({ ...newFeature, feature_name: e.target.value })}
                  placeholder="e.g., Infinity Pool with Sunset View"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddFeature}
                  className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
                >
                  Add Feature
                </button>
                <button
                  onClick={() => {
                    setAddingFeature(false)
                    setNewFeature({ category: 'Recreation', feature_name: '' })
                  }}
                  className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Feature Modal */}
      {editingFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Edit Feature</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={editingFeature.category}
                  onChange={(e) => setEditingFeature({ ...editingFeature, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Feature Name</label>
                <input
                  type="text"
                  value={editingFeature.feature_name}
                  onChange={(e) => setEditingFeature({ ...editingFeature, feature_name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => handleUpdateFeature(editingFeature.id, {
                    category: editingFeature.category,
                    feature_name: editingFeature.feature_name
                  })}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditingFeature(null)}
                  className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold"
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
