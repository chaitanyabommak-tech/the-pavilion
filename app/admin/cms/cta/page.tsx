import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import CTASettingsClient from '@/components/admin/CTASettingsClient'

export default async function CTASettingsPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Fetch CTA settings
  const { data: settings } = await supabase
    .from('cta_settings')
    .select('*')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CTA & Contact Settings</h1>
          <p className="text-gray-600">
            Manage phone numbers, WhatsApp, email, and CTA buttons. Changes appear on bommakugroup.com.
          </p>
        </div>

        <CTASettingsClient initialSettings={settings || []} />
      </div>
    </div>
  )
}
