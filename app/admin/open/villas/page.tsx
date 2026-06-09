import { createClient } from '@/lib/supabase/server'
import VillaManager from '@/components/admin/VillaManager'
import { Toaster } from 'react-hot-toast'

export default async function OpenVillasPage() {
  const supabase = await createClient()

  const { data: villas } = await supabase
    .from('villas')
    .select('*')
    .order('block', { ascending: true })
    .order('plot_number', { ascending: true })

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />

      <div className="bg-white shadow mb-6">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <a href="/admin/open" className="text-blue-600 hover:text-blue-800 mb-2 inline-block">
            ← Back to Dashboard
          </a>
          <h1 className="text-3xl font-bold text-gray-900">Villa Inventory</h1>
          <p className="text-gray-600 mt-1">
            Manage villa status, pricing, and availability
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <VillaManager initialVillas={villas || []} />
      </div>
    </div>
  )
}
