import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import RecreationZoneEditorClient from '@/components/admin/RecreationZoneEditorClient'

export default async function RecreationZoneEditorPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Fetch all recreation zone features
  const { data: features } = await supabase
    .from('recreation_zone_features')
    .select('*')
    .order('display_order', { ascending: true })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Recreation Zone Editor</h1>
          <p className="text-gray-600">
            Manage recreation zone amenities and features. Changes appear on bommakugroup.com.
          </p>
        </div>

        <RecreationZoneEditorClient initialFeatures={features || []} />
      </div>
    </div>
  )
}
