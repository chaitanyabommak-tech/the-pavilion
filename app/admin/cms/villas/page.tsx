import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import VillaInventoryClient from '@/components/admin/VillaInventoryClient'

export default async function VillaInventoryPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Fetch all villas
  const { data: villas } = await supabase
    .from('villas')
    .select('*')
    .order('villa_id', { ascending: true })

  // Get status counts
  const [
    { count: totalVillas },
    { count: availableCount },
    { count: soldCount },
    { count: reservedCount },
    { count: holdCount },
  ] = await Promise.all([
    supabase.from('villas').select('*', { count: 'exact', head: true }),
    supabase.from('villas').select('*', { count: 'exact', head: true }).eq('status', 'Available'),
    supabase.from('villas').select('*', { count: 'exact', head: true }).eq('status', 'Sold Out'),
    supabase.from('villas').select('*', { count: 'exact', head: true }).eq('status', 'Reserved'),
    supabase.from('villas').select('*', { count: 'exact', head: true }).eq('status', 'Hold'),
  ])

  const stats = {
    total: totalVillas || 0,
    available: availableCount || 0,
    sold: soldCount || 0,
    reserved: reservedCount || 0,
    hold: holdCount || 0,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Villa Inventory Manager</h1>
          <p className="text-gray-600">
            Manage villa status, details, and availability. A1 is marked as Sold Out.
          </p>
        </div>

        <VillaInventoryClient initialVillas={villas || []} stats={stats} />
      </div>
    </div>
  )
}
