import { createClient } from '@/lib/supabase/server'
import LeadsManager from '@/components/admin/LeadsManager'
import { Toaster } from 'react-hot-toast'

export default async function AdminLeadsPage() {
  const supabase = await createClient()

  const { data: leads } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  // Get stats
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
    <div>
      <Toaster position="top-right" />

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Lead Management</h1>
        <p className="text-gray-600 mt-2">
          View and manage all leads from enquiry forms, site visit requests, and other sources.
        </p>
      </div>

      <LeadsManager initialLeads={leads || []} stats={stats} />
    </div>
  )
}
