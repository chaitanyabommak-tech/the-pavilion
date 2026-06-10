import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import SettingsClient from '@/components/admin/SettingsClient'

export default async function SettingsPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Fetch CTA settings
  const { data: ctaSettings } = await supabase
    .from('cta_settings')
    .select('*')

  // Convert to key-value object
  const settings = ctaSettings?.reduce((acc, setting) => {
    acc[setting.setting_key] = setting.setting_value
    return acc
  }, {} as Record<string, string>) || {}

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Website Settings</h1>
          <p className="text-gray-600">
            Manage contact information, CTAs, and site configuration
          </p>
        </div>

        <SettingsClient initialSettings={settings} />
      </div>
    </div>
  )
}
