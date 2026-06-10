'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface CTASetting {
  id: string
  setting_key: string
  setting_value: string
}

interface CTASettingsClientProps {
  initialSettings: CTASetting[]
}

export default function CTASettingsClient({ initialSettings }: CTASettingsClientProps) {
  const [settings, setSettings] = useState<Record<string, string>>(
    initialSettings.reduce((acc, s) => {
      acc[s.setting_key] = s.setting_value
      return acc
    }, {} as Record<string, string>)
  )
  const router = useRouter()

  const handleSave = async () => {
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

      toast.success('Settings saved! Changes will appear on website.')
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || 'Save failed')
    }
  }

  return (
    <div>
      <Toaster position="top-right" />

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>

        <div className="space-y-6">
          {/* Primary Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Phone Number
            </label>
            <input
              type="tel"
              value={settings.primary_phone || ''}
              onChange={(e) => setSettings({ ...settings, primary_phone: e.target.value })}
              placeholder="+91 1234567890"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg"
            />
            <p className="text-sm text-gray-500 mt-1">Used in floating CTA and contact sections</p>
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              WhatsApp Number
            </label>
            <input
              type="tel"
              value={settings.whatsapp_number || ''}
              onChange={(e) => setSettings({ ...settings, whatsapp_number: e.target.value })}
              placeholder="919676077142"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg"
            />
            <p className="text-sm text-gray-500 mt-1">
              Format: Country code + number (no + or spaces). Example: 919676077142
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enquiry Email
            </label>
            <input
              type="email"
              value={settings.enquiry_email || ''}
              onChange={(e) => setSettings({ ...settings, enquiry_email: e.target.value })}
              placeholder="info@bommakugroup.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg"
            />
            <p className="text-sm text-gray-500 mt-1">Email for general enquiries</p>
          </div>

          {/* WhatsApp Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              WhatsApp Default Message
            </label>
            <textarea
              value={settings.whatsapp_message || ''}
              onChange={(e) => setSettings({ ...settings, whatsapp_message: e.target.value })}
              placeholder="Hi, I'm interested in The Pavilion villas..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
            <p className="text-sm text-gray-500 mt-1">Pre-filled message for WhatsApp clicks</p>
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <button
              onClick={handleSave}
              className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg"
            >
              Save All Settings
            </button>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Preview</h2>

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-gray-700">{settings.primary_phone || 'Not set'}</span>
          </div>

          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-gray-700">{settings.whatsapp_number || 'Not set'}</span>
          </div>

          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-700">{settings.enquiry_email || 'Not set'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
