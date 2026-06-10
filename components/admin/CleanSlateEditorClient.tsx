'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface Step {
  id: string
  step_number: string
  title: string
  body: string
  features: string[] | null
  display_order: number
  is_active: boolean
}

interface CleanSlateEditorClientProps {
  initialSteps: Step[]
}

export default function CleanSlateEditorClient({ initialSteps }: CleanSlateEditorClientProps) {
  const [steps, setSteps] = useState<Step[]>(initialSteps)
  const [editingStep, setEditingStep] = useState<Step | null>(null)
  const [newFeature, setNewFeature] = useState('')
  const router = useRouter()

  const handleUpdateStep = async (id: string, updates: Partial<Step>) => {
    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('clean_slate_steps')
        .update(updates)
        .eq('id', id)

      if (error) throw error

      toast.success('Step updated!')
      setEditingStep(null)
      router.refresh()

      setSteps(steps.map(s => s.id === id ? { ...s, ...updates } : s))
    } catch (error: any) {
      toast.error(error.message || 'Update failed')
    }
  }

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    await handleUpdateStep(id, { is_active: !currentStatus })
  }

  const handleAddFeature = () => {
    if (!editingStep || !newFeature.trim()) return

    const updatedFeatures = [
      ...(editingStep.features || []),
      newFeature.trim()
    ]

    setEditingStep({ ...editingStep, features: updatedFeatures })
    setNewFeature('')
  }

  const handleRemoveFeature = (index: number) => {
    if (!editingStep) return

    const updatedFeatures = (editingStep.features || []).filter((_, i) => i !== index)
    setEditingStep({ ...editingStep, features: updatedFeatures })
  }

  return (
    <div>
      <Toaster position="top-right" />

      {/* Steps List */}
      <div className="space-y-4">
        {steps.map(step => (
          <div key={step.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-2xl font-bold text-gray-400">{step.step_number}</span>
                  <h3 className={`text-xl font-bold ${step.is_active ? 'text-gray-900' : 'text-gray-400'}`}>
                    {step.title}
                  </h3>
                  {!step.is_active && (
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded">Inactive</span>
                  )}
                </div>
                <p className="text-gray-600 mb-3">{step.body}</p>

                {step.features && step.features.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700 mb-2">Features:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {step.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-600">{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex space-x-2 ml-4">
                <button
                  onClick={() => setEditingStep(step)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleToggleActive(step.id, step.is_active)}
                  className={`px-4 py-2 ${step.is_active ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-green-600 hover:bg-green-700'} text-white rounded text-sm`}
                >
                  {step.is_active ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Step Modal */}
      {editingStep && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Edit Step {editingStep.step_number}</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={editingStep.title}
                  onChange={(e) => setEditingStep({ ...editingStep, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Body Text</label>
                <textarea
                  value={editingStep.body}
                  onChange={(e) => setEditingStep({ ...editingStep, body: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Features (Optional)</label>

                {editingStep.features && editingStep.features.length > 0 && (
                  <div className="mb-3 space-y-2">
                    {editingStep.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <span className="flex-1 text-sm text-gray-700">{feature}</span>
                        <button
                          onClick={() => handleRemoveFeature(i)}
                          className="px-2 py-1 text-xs bg-red-600 hover:bg-red-700 text-white rounded"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    placeholder="Add a feature..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && handleAddFeature()}
                  />
                  <button
                    onClick={handleAddFeature}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-sm"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => handleUpdateStep(editingStep.id, {
                    title: editingStep.title,
                    body: editingStep.body,
                    features: editingStep.features
                  })}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => {
                    setEditingStep(null)
                    setNewFeature('')
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
    </div>
  )
}
