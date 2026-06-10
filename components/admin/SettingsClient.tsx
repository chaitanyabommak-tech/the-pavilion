'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface SettingsClientProps {
  initialSettings: Record<string, string>
}

export default function SettingsClient({ initialSettings }: SettingsClientProps) {
  const [settings, setSettings] = useState(initialSettings)
  const [saving, setSaving] = useState(false)
  const router = useRouter()

  const handleUpdate = (key: string, value: string) => {
    setSettings({ ...settings, [key]: value })
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const supabase = createClient()

      // Update each setting
      for (const [key, value] of Object.entries(settings)) {
        const { error } = await supabase
          .from('cta_settings')
          .update({ setting_value: value })
          .eq('setting_key', key)

        if (error) throw error
      }

      toast.success('Settings saved! Public website updated.')
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || 'Failed to save settings')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <Toaster position="top-right" />

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Phone Number
              </label>
              <input
                type="tel"
                value={settings.primary_phone || ''}
                onChange={(e) => handleUpdate('primary_phone', e.target.value)}
                placeholder="+91 1234567890"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                WhatsApp Number
              </label>
              <input
                type="tel"
                value={settings.whatsapp_number || ''}
                onChange={(e) => handleUpdate('whatsapp_number', e.target.value)}
                placeholder="+91 1234567890"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                WhatsApp Default Message
              </label>
              <textarea
                value={settings.whatsapp_message || ''}
                onChange={(e) => handleUpdate('whatsapp_message', e.target.value)}
                placeholder="Hi, I'm interested in The Pavilion..."
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enquiry Email
              </label>
              <input
                type="email"
                value={settings.enquiry_email || ''}
                onChange={(e) => handleUpdate('enquiry_email', e.target.value)}
                placeholder="info@bommakugroup.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Site Information */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Site Information</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Name
              </label>
              <input
                type="text"
                value={settings.project_name || 'The Pavilion'}
                onChange={(e) => handleUpdate('project_name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Developer Name
              </label>
              <input
                type="text"
                value={settings.developer_name || 'Bommaku Constructions'}
                onChange={(e) => handleUpdate('developer_name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Google Maps URL
              </label>
              <input
                type="url"
                value={settings.google_maps_url || ''}
                onChange={(e) => handleUpdate('google_maps_url', e.target.value)}
                placeholder="https://maps.google.com/..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brochure URL
              </label>
              <input
                type="url"
                value={settings.brochure_url || ''}
                onChange={(e) => handleUpdate('brochure_url', e.target.value)}
                placeholder="/brochure.pdf"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* CTA Labels */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">CTA Labels</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary CTA Label
              </label>
              <input
                type="text"
                value={settings.primary_cta_label || 'Book Site Visit'}
                onChange={(e) => handleUpdate('primary_cta_label', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Secondary CTA Label
              </label>
              <input
                type="text"
                value={settings.secondary_cta_label || 'Enquire Now'}
                onChange={(e) => handleUpdate('secondary_cta_label', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex space-x-4 pt-4 border-t">
          <button
            onClick={handleSave}
            disabled={saving}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
              saving
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {saving ? 'Saving...' : 'Save All Settings'}
          </button>
          <a
            href="/"
            target="_blank"
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold text-center"
          >
            Preview Live Site
          </a>
        </div>
      </div>

      {/* Preview */}
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Preview</h2>
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-medium text-gray-700">Phone:</span>{' '}
            <span className="text-gray-900">{settings.primary_phone || 'Not set'}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">WhatsApp:</span>{' '}
            <span className="text-gray-900">{settings.whatsapp_number || 'Not set'}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Email:</span>{' '}
            <span className="text-gray-900">{settings.enquiry_email || 'Not set'}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Project:</span>{' '}
            <span className="text-gray-900">{settings.project_name || 'Not set'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
