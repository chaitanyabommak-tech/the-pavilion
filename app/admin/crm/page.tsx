import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import CRMClient from '@/components/admin/CRMClient'

export default async function CRMPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Fetch all leads
  const { data: leads } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  // Get stats
  const [
    { count: totalLeads },
    { count: newLeads },
    { count: contactedLeads },
    { count: todayLeads },
  ] = await Promise.all([
    supabase.from('leads').select('*', { count: 'exact', head: true }),
    supabase.from('leads').select('*', { count: 'exact', head: true }).eq('status', 'New'),
    supabase.from('leads').select('*', { count: 'exact', head: true }).eq('status', 'Contacted'),
    supabase.from('leads').select('*', { count: 'exact', head: true }).gte('created_at', new Date().toISOString().split('T')[0]),
  ])

  const stats = {
    total: totalLeads || 0,
    new: newLeads || 0,
    contacted: contactedLeads || 0,
    today: todayLeads || 0,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CRM - Lead Management</h1>
          <p className="text-gray-600">
            Manage customer leads from website forms
          </p>
        </div>

        <CRMClient initialLeads={leads || []} stats={stats} />
      </div>
    </div>
  )
}
