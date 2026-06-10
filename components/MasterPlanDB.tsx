import { createClient } from '@/lib/supabase/server'
import MasterPlan from './MasterPlan'

// Force fresh data on every request
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function MasterPlanDB() {
  const supabase = await createClient()

  // Fetch all villas with status
  const { data: villas } = await supabase
    .from('villas')
    .select('*')
    .order('villa_id', { ascending: true })

  // Pass villa data to MasterPlan for status-based color coding
  return <MasterPlan villas={villas || []} />
}
