import { createClient } from '@/lib/supabase/server'
import MasterPlan from './MasterPlan'

export default async function MasterPlanDB() {
  const supabase = await createClient()

  // Fetch all villas with status - this data is ready for MasterPlan integration
  const { data: villas } = await supabase
    .from('villas')
    .select('*')
    .order('villa_id', { ascending: true })

  // For now, MasterPlan uses hardcoded layout
  // In future: Pass villas data to show real status on the plan
  return <MasterPlan />
}
