import { createClient } from '@/lib/supabase/server'
import LeadsManager from '@/components/admin/LeadsManager'
import { Toaster } from 'react-hot-toast'

export default async function OpenLeadsPage() {
  const supabase = await createClient()

  const { data: leads } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  const { count: totalLeads } = await supabase
    .from('leads')
    .select('*', { count: 'exact', head: true })

  const { count: newLeads } = await supabase
    .from('leads')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'New')

  const { count: contactedLeads } = await supabase
    .from('leads')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'Contacted')

  const stats = {
    total: totalLeads || 0,
    new: newLeads || 0,
    contacted: contactedLeads || 0,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />

      <div className="bg-white shadow mb-6">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <a href="/admin/open" className="text-blue-600 hover:text-blue-800 mb-2 inline-block">
            ← Back to Dashboard
          </a>
          <h1 className="text-3xl font-bold text-gray-900">Lead Management</h1>
          <p className="text-gray-600 mt-1">
            View and manage all leads
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <LeadsManager initialLeads={leads || []} stats={stats} />
      </div>
    </div>
  )
}
