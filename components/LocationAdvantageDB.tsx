import { createClient } from '@/lib/supabase/server'
import LocationAdvantage from './LocationAdvantage'

export default async function LocationAdvantageDB() {
  const supabase = await createClient()

  const { data: section } = await supabase
    .from('website_sections')
    .select('*')
    .eq('section_key', 'location')
    .eq('is_published', true)
    .single()

  return <LocationAdvantage />
}
