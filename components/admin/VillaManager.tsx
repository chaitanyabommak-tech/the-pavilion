'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast from 'react-hot-toast'

interface Villa {
  id: string
  villa_id: string
  block: string
  plot_number: number
  plot_size_sqyd: number
  facing: string | null
  built_up_area_sft: number | null
  configuration: string | null
  status: string
  status_color: string
  price: number | null
  is_published: boolean
  is_visible: boolean
}

interface VillaManagerProps {
  initialVillas: Villa[]
}

const statusOptions = [
  { value: 'Available', color: '#C5A572', label: 'Available' },
  { value: 'Reserved', color: '#F59E0B', label: 'Reserved' },
  { value: 'Sold Out', color: '#DC2626', label: 'Sold Out' },
  { value: 'Hold', color: '#9CA3AF', label: 'Hold' },
]

export default function VillaManager({ initialVillas }: VillaManagerProps) {
  const [villas, setVillas] = useState(initialVillas)
  const [editingVilla, setEditingVilla] = useState<Villa | null>(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [filterStatus, setFilterStatus] = useState<string>('all')

  const supabase = createClient()

  const handleQuickStatusChange = async (villa: Villa, newStatus: string) => {
    const statusOption = statusOptions.find((s) => s.value === newStatus)
    if (!statusOption) return

    try {
      const { error } = await supabase
        .from('villas')
        .update({
          status: newStatus,
          status_color: statusOption.color,
          updated_at: new Date().toISOString(),
        })
        .eq('id', villa.id)

      if (error) throw error

      setVillas(
        villas.map((v) =>
          v.id === villa.id
            ? { ...v, status: newStatus, status_color: statusOption.color }
            : v
        )
      )

      toast.success(`${villa.villa_id} marked as ${newStatus}`)
    } catch (error: any) {
      toast.error(error.message || 'Failed to update status')
    }
  }

  const handleEdit = (villa: Villa) => {
    setEditingVilla(villa)
    setShowEditModal(true)
  }

  const handleSave = async () => {
    if (!editingVilla) return

    try {
      const { error } = await supabase
        .from('villas')
        .update({
          plot_size_sqyd: editingVilla.plot_size_sqyd,
          facing: editingVilla.facing,
          built_up_area_sft: editingVilla.built_up_area_sft,
          configuration: editingVilla.configuration,
          status: editingVilla.status,
          status_color: editingVilla.status_color,
          price: editingVilla.price,
          is_published: editingVilla.is_published,
          is_visible: editingVilla.is_visible,
          updated_at: new Date().toISOString(),
        })
        .eq('id', editingVilla.id)

      if (error) throw error

      setVillas(villas.map((v) => (v.id === editingVilla.id ? editingVilla : v)))
      toast.success('Villa updated successfully')
      setShowEditModal(false)
      setEditingVilla(null)
    } catch (error: any) {
      toast.error(error.message || 'Failed to update villa')
    }
  }

  const filteredVillas =
    filterStatus === 'all'
      ? villas
      : villas.filter((v) => v.status === filterStatus)

  return (
    <div>
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6 border border-gray-200">
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-700">Filter by Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Villas ({villas.length})</option>
            {statusOptions.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label} ({villas.filter((v) => v.status === status.value).length})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Villa Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredVillas.map((villa) => (
          <div
            key={villa.id}
            className="bg-white rounded-lg shadow-md p-5 border-2 hover:shadow-lg transition-shadow"
            style={{ borderColor: villa.status_color }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{villa.villa_id}</h3>
                <p className="text-sm text-gray-600">
                  Block {villa.block} · Plot {villa.plot_number}
                </p>
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: villa.status_color }}
              >
                {villa.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Plot:</span> {villa.plot_size_sqyd} sq.yd
              </p>
              {villa.built_up_area_sft && (
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Built-up:</span> {villa.built_up_area_sft} sft
                </p>
              )}
              {villa.facing && (
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Facing:</span> {villa.facing}
                </p>
              )}
              {villa.configuration && (
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Config:</span> {villa.configuration}
                </p>
              )}
            </div>

            {/* Quick Status Change */}
            <div className="mb-3">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Quick Status Change:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {statusOptions.map((status) => (
                  <button
                    key={status.value}
                    onClick={() => handleQuickStatusChange(villa, status.value)}
                    className="px-2 py-1 text-xs font-medium rounded transition-colors"
                    style={{
                      backgroundColor:
                        villa.status === status.value ? status.color : '#f3f4f6',
                      color: villa.status === status.value ? '#ffffff' : '#374151',
                    }}
                  >
                    {status.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleEdit(villa)}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Edit Details
            </button>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {showEditModal && editingVilla && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Edit Villa {editingVilla.villa_id}
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Plot Size (sq.yd) *
                    </label>
                    <input
                      type="number"
                      value={editingVilla.plot_size_sqyd}
                      onChange={(e) =>
                        setEditingVilla({
                          ...editingVilla,
                          plot_size_sqyd: parseFloat(e.target.value),
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Built-up Area (sft)
                    </label>
                    <input
                      type="number"
                      value={editingVilla.built_up_area_sft || ''}
                      onChange={(e) =>
                        setEditingVilla({
                          ...editingVilla,
                          built_up_area_sft: e.target.value
                            ? parseFloat(e.target.value)
                            : null,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Facing
                    </label>
                    <select
                      value={editingVilla.facing || ''}
                      onChange={(e) =>
                        setEditingVilla({
                          ...editingVilla,
                          facing: e.target.value || null,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select...</option>
                      <option value="East">East</option>
                      <option value="West">West</option>
                      <option value="North East">North East</option>
                      <option value="North West">North West</option>
                      <option value="North">North</option>
                      <option value="South">South</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Configuration
                    </label>
                    <input
                      type="text"
                      value={editingVilla.configuration || ''}
                      onChange={(e) =>
                        setEditingVilla({
                          ...editingVilla,
                          configuration: e.target.value || null,
                        })
                      }
                      placeholder="e.g., 3BHK / 4BHK possible"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status *
                    </label>
                    <select
                      value={editingVilla.status}
                      onChange={(e) => {
                        const status = statusOptions.find(
                          (s) => s.value === e.target.value
                        )
                        setEditingVilla({
                          ...editingVilla,
                          status: e.target.value,
                          status_color: status?.color || '#C5A572',
                        })
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      {statusOptions.map((status) => (
                        <option key={status.value} value={status.value}>
                          {status.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price (optional)
                    </label>
                    <input
                      type="number"
                      value={editingVilla.price || ''}
                      onChange={(e) =>
                        setEditingVilla({
                          ...editingVilla,
                          price: e.target.value ? parseFloat(e.target.value) : null,
                        })
                      }
                      placeholder="Price in INR"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={editingVilla.is_visible}
                      onChange={(e) =>
                        setEditingVilla({
                          ...editingVilla,
                          is_visible: e.target.checked,
                        })
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Visible</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={editingVilla.is_published}
                      onChange={(e) =>
                        setEditingVilla({
                          ...editingVilla,
                          is_published: e.target.checked,
                        })
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Published</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6 pt-6 border-t">
                <button
                  onClick={() => {
                    setShowEditModal(false)
                    setEditingVilla(null)
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
