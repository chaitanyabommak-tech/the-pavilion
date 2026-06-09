'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast from 'react-hot-toast'
import Image from 'next/image'

interface VisualEditorProps {
  galleryItems: any[]
  villas: any[]
  sections: any
  ctaSettings: any
}

export default function VisualEditor({ galleryItems, villas, sections, ctaSettings }: VisualEditorProps) {
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [editMode, setEditMode] = useState<string | null>(null)
  const [previewData, setPreviewData] = useState({
    gallery: galleryItems,
    villas: villas,
    sections: sections,
    cta: ctaSettings,
  })

  const supabase = createClient()

  const websiteSections = [
    { id: 'hero', name: 'Hero Section', icon: '🏠' },
    { id: 'gallery', name: 'Gallery', icon: '🎨', count: previewData.gallery.length },
    { id: 'villas', name: 'Villa Inventory', icon: '🏘️', count: previewData.villas.length },
    { id: 'clean_slate', name: 'Clean Slate', icon: '📝' },
    { id: 'recreation_zone', name: 'Recreation Zone', icon: '🏊' },
    { id: 'east_facing', name: 'East Facing', icon: '🌅' },
    { id: 'west_facing', name: 'West Facing', icon: '🌄' },
    { id: 'location', name: 'Location', icon: '📍' },
    { id: 'contact', name: 'Contact/CTA', icon: '📞' },
  ]

  const handleSaveSection = async (sectionKey: string, data: any) => {
    try {
      const { error } = await supabase
        .from('website_sections')
        .update(data)
        .eq('section_key', sectionKey)

      if (error) throw error

      toast.success('Section updated! Refresh live site to see changes.')
      setEditMode(null)
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className="flex h-[calc(100vh-57px)]">
      {/* Left Sidebar - Section Navigator */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 overflow-y-auto">
        <div className="p-4">
          <h2 className="text-sm font-semibold text-gray-400 uppercase mb-4">
            Website Sections
          </h2>
          <div className="space-y-1">
            {websiteSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{section.icon}</span>
                  <span className="text-sm font-medium">{section.name}</span>
                </div>
                {section.count !== undefined && (
                  <span className="text-xs bg-gray-900 px-2 py-1 rounded">
                    {section.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Center - Live Preview */}
      <div className="flex-1 bg-gray-900 overflow-y-auto">
        <div className="p-6">
          <div className="bg-white rounded-lg shadow-xl">
            {/* Preview Header */}
            <div className="border-b border-gray-200 px-6 py-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">
                  Live Preview: {websiteSections.find(s => s.id === activeSection)?.name}
                </h3>
                <span className="text-xs text-gray-500">
                  This is how it appears on bommakugroup.com
                </span>
              </div>
            </div>

            {/* Preview Content */}
            <div className="p-6">
              {activeSection === 'gallery' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Gallery Preview</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {previewData.gallery.map((item: any, idx: number) => (
                      <div
                        key={item.id}
                        className="relative group cursor-pointer border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 transition-colors"
                      >
                        <div className="aspect-square bg-gray-100 flex items-center justify-center">
                          <span className="text-4xl">🖼️</span>
                        </div>
                        <div className="p-3 bg-white">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-gray-500">
                              {String(idx + 1).padStart(2, '0')} / {String(previewData.gallery.length).padStart(2, '0')}
                            </span>
                            <button
                              onClick={() => setEditMode(`gallery-${item.id}`)}
                              className="text-xs text-blue-600 hover:text-blue-800"
                            >
                              Edit
                            </button>
                          </div>
                          <p className="font-semibold text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'villas' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Villa Inventory Preview</h2>
                  <div className="grid grid-cols-4 gap-4">
                    {previewData.villas.slice(0, 20).map((villa: any) => (
                      <div
                        key={villa.id}
                        className="border-2 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer"
                        style={{ borderColor: villa.status_color }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xl font-bold">{villa.villa_id}</span>
                          <span
                            className="px-2 py-1 text-xs font-semibold rounded text-white"
                            style={{ backgroundColor: villa.status_color }}
                          >
                            {villa.status}
                          </span>
                        </div>
                        <div className="text-sm space-y-1">
                          <p className="text-gray-600">Block {villa.block}</p>
                          <p className="text-gray-600">{villa.plot_size_sqyd} sq.yd</p>
                          <p className="text-gray-600">{villa.facing || 'N/A'} Facing</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {['clean_slate', 'recreation_zone', 'east_facing', 'west_facing'].includes(activeSection) && (
                <div>
                  {previewData.sections[activeSection] ? (
                    <div className="max-w-4xl">
                      <div className="mb-6">
                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                          {previewData.sections[activeSection].eyebrow || 'Section'}
                        </p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                          {previewData.sections[activeSection].headline || 'Headline'}
                        </h2>
                        <p className="text-xl text-gray-600 mb-4">
                          {previewData.sections[activeSection].subheadline || 'Subheadline'}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {previewData.sections[activeSection].body_copy || 'Body copy text...'}
                        </p>
                      </div>
                      <button
                        onClick={() => setEditMode(activeSection)}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                      >
                        Edit This Section
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500">No content for this section yet</p>
                      <button
                        onClick={() => setEditMode(activeSection)}
                        className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                      >
                        Add Content
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeSection === 'contact' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact & CTA Settings</h2>
                  <div className="space-y-4 max-w-2xl">
                    <div className="p-4 border rounded-lg">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Primary Phone
                      </label>
                      <p className="text-lg font-semibold">{previewData.cta.primary_phone || 'Not set'}</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        WhatsApp Number
                      </label>
                      <p className="text-lg font-semibold">{previewData.cta.whatsapp_number || 'Not set'}</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Enquiry Email
                      </label>
                      <p className="text-lg font-semibold">{previewData.cta.enquiry_email || 'Not set'}</p>
                    </div>
                    <button
                      onClick={() => setEditMode('contact')}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                    >
                      Edit Contact Settings
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'hero' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Hero Section Preview</h2>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-lg text-white">
                    <h1 className="text-5xl font-bold mb-4">The Pavilion</h1>
                    <p className="text-xl mb-6">Luxury Villas in Boduppal, Hyderabad</p>
                    <button className="px-8 py-3 bg-blue-600 rounded-lg">
                      {previewData.cta.book_site_visit_label || 'Book Site Visit'}
                    </button>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p>Hero section is typically managed through theme settings.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Edit Panel */}
      <div className="w-96 bg-gray-800 border-l border-gray-700 overflow-y-auto">
        <div className="p-6">
          <h2 className="text-lg font-bold text-white mb-6">
            {editMode ? 'Edit Content' : 'Select an element to edit'}
          </h2>

          {editMode && editMode.startsWith('gallery-') && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  defaultValue="Gallery Item Title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Caption
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  defaultValue="Gallery Item Caption"
                />
              </div>
              <button className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                Save Changes
              </button>
              <button
                onClick={() => setEditMode(null)}
                className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          )}

          {!editMode && (
            <div className="text-gray-400 text-sm space-y-4">
              <p>Click on any element in the preview to edit it.</p>
              <div className="border-t border-gray-700 pt-4">
                <h3 className="font-semibold text-white mb-2">Quick Stats</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Gallery Images:</span>
                    <span className="text-white">{previewData.gallery.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Villas:</span>
                    <span className="text-white">{previewData.villas.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available:</span>
                    <span className="text-green-400">
                      {previewData.villas.filter((v: any) => v.status === 'Available').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sold Out:</span>
                    <span className="text-red-400">
                      {previewData.villas.filter((v: any) => v.status === 'Sold Out').length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
