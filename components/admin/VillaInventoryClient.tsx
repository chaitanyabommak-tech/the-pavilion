'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

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
  is_visible: boolean
  admin_notes: string | null
}

interface VillaInventoryClientProps {
  initialVillas: Villa[]
  stats: {
    total: number
    available: number
    sold: number
    reserved: number
    hold: number
  }
}

const STATUS_OPTIONS = [
  { value: 'Available', label: 'Available', color: '#C5A572' },
  { value: 'Sold Out', label: 'Sold Out', color: '#DC2626' },
  { value: 'Reserved', label: 'Reserved', color: '#F59E0B' },
  { value: 'Hold', label: 'Hold', color: '#6B7280' },
]

export default function VillaInventoryClient({ initialVillas, stats }: VillaInventoryClientProps) {
  const [villas, setVillas] = useState<Villa[]>(initialVillas)
  const [filterStatus, setFilterStatus] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [editingVilla, setEditingVilla] = useState<Villa | null>(null)
  const router = useRouter()

  const handleQuickStatusChange = async (villaId: string, newStatus: string) => {
    try {
      const supabase = createClient()

      const statusColor = STATUS_OPTIONS.find(s => s.value === newStatus)?.color || '#C5A572'

      const { error } = await supabase
        .from('villas')
        .update({
          status: newStatus,
          status_color: statusColor,
        })
        .eq('id', villaId)

      if (error) throw error

      toast.success(`Villa status updated to ${newStatus}!`)
      router.refresh()

      // Update local state
      setVillas(villas.map(v =>
        v.id === villaId ? { ...v, status: newStatus, status_color: statusColor } : v
      ))
    } catch (error: any) {
      toast.error(error.message || 'Update failed')
    }
  }

  const handleUpdateVilla = async (villaId: string, updates: Partial<Villa>) => {
    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('villas')
        .update(updates)
        .eq('id', villaId)

      if (error) throw error

      toast.success('Villa updated successfully!')
      setEditingVilla(null)
      router.refresh()

      // Update local state
      setVillas(villas.map(v =>
        v.id === villaId ? { ...v, ...updates } : v
      ))
    } catch (error: any) {
      toast.error(error.message || 'Update failed')
    }
  }

  const filteredVillas = villas.filter(villa => {
    const matchesStatus = filterStatus === 'All' || villa.status === filterStatus
    const matchesSearch = villa.villa_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         villa.block.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <div>
      <Toaster position="top-right" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
          <div className="text-sm text-gray-600">Total Villas</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-green-600">{stats.available}</div>
          <div className="text-sm text-gray-600">Available</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-red-600">{stats.sold}</div>
          <div className="text-sm text-gray-600">Sold Out</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-yellow-600">{stats.reserved}</div>
          <div className="text-sm text-gray-600">Reserved</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-2xl font-bold text-gray-600">{stats.hold}</div>
          <div className="text-sm text-gray-600">On Hold</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by Villa ID or Block..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilterStatus('All')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filterStatus === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All ({stats.total})
            </button>
            {STATUS_OPTIONS.map(status => (
              <button
                key={status.value}
                onClick={() => setFilterStatus(status.value)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  filterStatus === status.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.label} ({villas.filter(v => v.status === status.value).length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Villa Grid */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">
          Villas ({filteredVillas.length})
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredVillas.map((villa) => (
            <div
              key={villa.id}
              className="border-2 rounded-lg p-4 hover:shadow-lg transition-shadow"
              style={{ borderColor: villa.status_color }}
            >
              {/* Villa ID */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-gray-900">{villa.villa_id}</h3>
                <span
                  className="px-2 py-1 text-xs font-semibold rounded text-white"
                  style={{ backgroundColor: villa.status_color }}
                >
                  {villa.status}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-1 text-sm text-gray-600 mb-4">
                <div>Block: <span className="font-medium text-gray-900">{villa.block}</span></div>
                <div>Plot: <span className="font-medium text-gray-900">{villa.plot_size_sqyd} sq.yd</span></div>
                {villa.facing && (
                  <div>Facing: <span className="font-medium text-gray-900">{villa.facing}</span></div>
                )}
                {villa.configuration && (
                  <div>Config: <span className="font-medium text-gray-900">{villa.configuration}</span></div>
                )}
              </div>

              {/* Quick Status Actions */}
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {STATUS_OPTIONS.map(status => (
                    <button
                      key={status.value}
                      onClick={() => handleQuickStatusChange(villa.id, status.value)}
                      disabled={villa.status === status.value}
                      className="px-2 py-1 text-xs font-medium rounded disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity text-white"
                      style={{ backgroundColor: status.color }}
                    >
                      {status.label}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setEditingVilla(villa)}
                  className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium"
                >
                  Edit Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredVillas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No villas found</p>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingVilla && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Edit Villa {editingVilla.villa_id}</h3>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Villa ID
                  </label>
                  <input
                    type="text"
                    value={editingVilla.villa_id}
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Block
                  </label>
                  <input
                    type="text"
                    value={editingVilla.block}
                    onChange={(e) => setEditingVilla({ ...editingVilla, block: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Plot Size (sq.yd)
                  </label>
                  <input
                    type="number"
                    value={editingVilla.plot_size_sqyd}
                    onChange={(e) => setEditingVilla({ ...editingVilla, plot_size_sqyd: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Facing
                  </label>
                  <select
                    value={editingVilla.facing || ''}
                    onChange={(e) => setEditingVilla({ ...editingVilla, facing: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select Facing</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Built-up Area (sft)
                  </label>
                  <input
                    type="number"
                    value={editingVilla.built_up_area_sft || ''}
                    onChange={(e) => setEditingVilla({ ...editingVilla, built_up_area_sft: parseInt(e.target.value) || null })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Configuration
                  </label>
                  <input
                    type="text"
                    value={editingVilla.configuration || ''}
                    onChange={(e) => setEditingVilla({ ...editingVilla, configuration: e.target.value })}
                    placeholder="e.g., 3BHK Duplex"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={editingVilla.status}
                    onChange={(e) => {
                      const newStatus = e.target.value
                      const statusColor = STATUS_OPTIONS.find(s => s.value === newStatus)?.color || '#C5A572'
                      setEditingVilla({ ...editingVilla, status: newStatus, status_color: statusColor })
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    {STATUS_OPTIONS.map(status => (
                      <option key={status.value} value={status.value}>{status.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Visibility
                  </label>
                  <select
                    value={editingVilla.is_visible ? 'true' : 'false'}
                    onChange={(e) => setEditingVilla({ ...editingVilla, is_visible: e.target.value === 'true' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="true">Visible</option>
                    <option value="false">Hidden</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admin Notes (Internal Only)
                </label>
                <textarea
                  value={editingVilla.admin_notes || ''}
                  onChange={(e) => setEditingVilla({ ...editingVilla, admin_notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Internal notes about this villa..."
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => handleUpdateVilla(editingVilla.id, {
                    block: editingVilla.block,
                    plot_size_sqyd: editingVilla.plot_size_sqyd,
                    facing: editingVilla.facing,
                    built_up_area_sft: editingVilla.built_up_area_sft,
                    configuration: editingVilla.configuration,
                    status: editingVilla.status,
                    status_color: editingVilla.status_color,
                    is_visible: editingVilla.is_visible,
                    admin_notes: editingVilla.admin_notes,
                  })}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditingVilla(null)}
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
