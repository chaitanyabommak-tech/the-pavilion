'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface WebsiteSection {
  id: string
  section_key: string
  section_name: string
  page_key: string
  eyebrow: string | null
  headline: string | null
  subheadline: string | null
  body_copy: string | null
  cta_primary_label: string | null
  cta_primary_url: string | null
  cta_secondary_label: string | null
  cta_secondary_url: string | null
  is_visible: boolean
  status: string
}

interface CTASetting {
  id: string
  setting_key: string
  setting_value: string
}

interface SectionEditorClientProps {
  initialSections: WebsiteSection[]
  ctaSettings: CTASetting[]
}

export default function SectionEditorClient({ initialSections, ctaSettings }: SectionEditorClientProps) {
  const [sections, setSections] = useState<WebsiteSection[]>(initialSections)
  const [editingSection, setEditingSection] = useState<WebsiteSection | null>(null)
  const [editingCTA, setEditingCTA] = useState(false)
  const [ctaValues, setCTAValues] = useState<Record<string, string>>(
    ctaSettings.reduce((acc, setting) => {
      acc[setting.setting_key] = setting.setting_value
      return acc
    }, {} as Record<string, string>)
  )
  const router = useRouter()

  const sectionGroups = [
    {
      name: 'Hero Section',
      key: 'hero',
      description: 'Main homepage banner',
    },
    {
      name: 'Clean Slate',
      key: 'clean_slate',
      description: 'Customization process section',
    },
    {
      name: 'Recreation Zone',
      key: 'recreation_zone',
      description: 'Bommaku Recreation Zone content',
    },
    {
      name: 'East Facing',
      key: 'east_facing',
      description: 'East-facing villa information',
    },
    {
      name: 'West Facing',
      key: 'west_facing',
      description: 'West-facing villa information',
    },
    {
      name: 'Location',
      key: 'location',
      description: 'Location advantages section',
    },
  ]

  const handleUpdateSection = async (sectionId: string, updates: Partial<WebsiteSection>) => {
    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('website_sections')
        .update(updates)
        .eq('id', sectionId)

      if (error) throw error

      toast.success('Section updated! Update public components to see changes on live site.')
      setEditingSection(null)
      router.refresh()

      setSections(sections.map(s => s.id === sectionId ? { ...s, ...updates } : s))
    } catch (error: any) {
      toast.error(error.message || 'Update failed')
    }
  }

  const handleCreateSection = async (sectionKey: string, sectionName: string) => {
    try {
      const supabase = createClient()

      const { data, error } = await supabase
        .from('website_sections')
        .insert({
          section_key: sectionKey,
          section_name: sectionName,
          page_key: 'home',
          eyebrow: '',
          headline: '',
          subheadline: '',
          body_copy: '',
          is_visible: true,
          status: 'draft',
        })
        .select()
        .single()

      if (error) throw error

      toast.success('Section created!')
      router.refresh()

      if (data) {
        setSections([...sections, data])
        setEditingSection(data)
      }
    } catch (error: any) {
      toast.error(error.message || 'Create failed')
    }
  }

  const handleUpdateCTA = async () => {
    try {
      const supabase = createClient()

      // Update each CTA setting
      for (const [key, value] of Object.entries(ctaValues)) {
        const { error } = await supabase
          .from('cta_settings')
          .update({ setting_value: value })
          .eq('setting_key', key)

        if (error) throw error
      }

      toast.success('CTA settings updated!')
      setEditingCTA(false)
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || 'Update failed')
    }
  }

  return (
    <div>
      <Toaster position="top-right" />

      {/* CTA Settings */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">CTA & Contact Settings</h2>
          <button
            onClick={() => setEditingCTA(true)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold"
          >
            Edit Settings
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Primary Phone</label>
            <p className="text-lg font-semibold">{ctaValues.primary_phone || 'Not set'}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">WhatsApp Number</label>
            <p className="text-lg font-semibold">{ctaValues.whatsapp_number || 'Not set'}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Enquiry Email</label>
            <p className="text-lg font-semibold">{ctaValues.enquiry_email || 'Not set'}</p>
          </div>
        </div>
      </div>

      {/* Website Sections */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-6">Website Sections</h2>

        <div className="space-y-4">
          {sectionGroups.map(group => {
            const section = sections.find(s => s.section_key === group.key)

            return (
              <div key={group.key} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">{group.name}</h3>
                    <p className="text-sm text-gray-600">{group.description}</p>
                  </div>
                  {section ? (
                    <button
                      onClick={() => setEditingSection(section)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
                    >
                      Edit Content
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCreateSection(group.key, group.name)}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm"
                    >
                      Create Section
                    </button>
                  )}
                </div>

                {section && (
                  <div className="mt-3 text-sm text-gray-700 bg-gray-50 p-3 rounded">
                    {section.headline && (
                      <p className="font-semibold mb-1">{section.headline}</p>
                    )}
                    {section.subheadline && (
                      <p className="text-gray-600 mb-1">{section.subheadline}</p>
                    )}
                    {section.body_copy && (
                      <p className="text-gray-600 line-clamp-2">{section.body_copy}</p>
                    )}
                    {!section.headline && !section.subheadline && !section.body_copy && (
                      <p className="text-gray-500 italic">No content yet</p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Edit Section Modal */}
      {editingSection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Edit: {editingSection.section_name}</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Eyebrow Text (small text above headline)
                </label>
                <input
                  type="text"
                  value={editingSection.eyebrow || ''}
                  onChange={(e) => setEditingSection({ ...editingSection, eyebrow: e.target.value })}
                  placeholder="e.g., LUXURY LIVING"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Headline
                </label>
                <input
                  type="text"
                  value={editingSection.headline || ''}
                  onChange={(e) => setEditingSection({ ...editingSection, headline: e.target.value })}
                  placeholder="Main heading"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subheadline
                </label>
                <input
                  type="text"
                  value={editingSection.subheadline || ''}
                  onChange={(e) => setEditingSection({ ...editingSection, subheadline: e.target.value })}
                  placeholder="Supporting headline"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Body Copy
                </label>
                <textarea
                  value={editingSection.body_copy || ''}
                  onChange={(e) => setEditingSection({ ...editingSection, body_copy: e.target.value })}
                  placeholder="Main content text..."
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Primary CTA Label
                  </label>
                  <input
                    type="text"
                    value={editingSection.cta_primary_label || ''}
                    onChange={(e) => setEditingSection({ ...editingSection, cta_primary_label: e.target.value })}
                    placeholder="e.g., Book Site Visit"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Primary CTA URL
                  </label>
                  <input
                    type="text"
                    value={editingSection.cta_primary_url || ''}
                    onChange={(e) => setEditingSection({ ...editingSection, cta_primary_url: e.target.value })}
                    placeholder="/contact"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={editingSection.is_visible}
                    onChange={(e) => setEditingSection({ ...editingSection, is_visible: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium text-gray-700">Visible on website</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={editingSection.status === 'published'}
                    onChange={(e) => setEditingSection({ ...editingSection, status: e.target.checked ? 'published' : 'draft' })}
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium text-gray-700">Published</span>
                </label>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => handleUpdateSection(editingSection.id, {
                    eyebrow: editingSection.eyebrow,
                    headline: editingSection.headline,
                    subheadline: editingSection.subheadline,
                    body_copy: editingSection.body_copy,
                    cta_primary_label: editingSection.cta_primary_label,
                    cta_primary_url: editingSection.cta_primary_url,
                    is_visible: editingSection.is_visible,
                    status: editingSection.status,
                  })}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditingSection(null)}
                  className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit CTA Modal */}
      {editingCTA && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Edit CTA & Contact Settings</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Primary Phone Number
                </label>
                <input
                  type="text"
                  value={ctaValues.primary_phone || ''}
                  onChange={(e) => setCTAValues({ ...ctaValues, primary_phone: e.target.value })}
                  placeholder="+91 1234567890"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  value={ctaValues.whatsapp_number || ''}
                  onChange={(e) => setCTAValues({ ...ctaValues, whatsapp_number: e.target.value })}
                  placeholder="+91 1234567890"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enquiry Email
                </label>
                <input
                  type="email"
                  value={ctaValues.enquiry_email || ''}
                  onChange={(e) => setCTAValues({ ...ctaValues, enquiry_email: e.target.value })}
                  placeholder="info@bommakugroup.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp Message Template
                </label>
                <textarea
                  value={ctaValues.whatsapp_message || ''}
                  onChange={(e) => setCTAValues({ ...ctaValues, whatsapp_message: e.target.value })}
                  placeholder="Hi, I'm interested in The Pavilion..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  onClick={handleUpdateCTA}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                >
                  Save Settings
                </button>
                <button
                  onClick={() => setEditingCTA(false)}
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
