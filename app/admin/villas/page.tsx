import { createClient } from '@/lib/supabase/server'
import VillaManager from '@/components/admin/VillaManager'
import { Toaster } from 'react-hot-toast'

export default async function AdminVillasPage() {
  const supabase = await createClient()

  const { data: villas } = await supabase
    .from('villas')
    .select('*')
    .order('block', { ascending: true })
    .order('plot_number', { ascending: true })

  return (
    <div>
      <Toaster position="top-right" />

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Villa Inventory</h1>
        <p className="text-gray-600 mt-2">
          Manage villa status, pricing, and availability. Changes reflect on master plan immediately.
        </p>
      </div>

      <VillaManager initialVillas={villas || []} />
    </div>
  )
}
