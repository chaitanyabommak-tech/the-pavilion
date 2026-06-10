import { createClient } from '@/lib/supabase/server'
import CleanSlate from './CleanSlate'

// Force fresh data on every request
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function CleanSlateDB() {
  const supabase = await createClient()

  // Fetch clean slate steps from database
  const { data: dbSteps } = await supabase
    .from('clean_slate_steps')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  // Convert database format to component format
  const steps = dbSteps?.map(step => ({
    step: step.step_number,
    title: step.title,
    body: step.body,
    features: step.features as string[] | undefined
  }))

  return <CleanSlate steps={steps?.length ? steps : undefined} />
}
