import { createClient } from '@/lib/supabase/server'
import RecreationZone from './RecreationZone'

export default async function RecreationZoneDB() {
  const supabase = await createClient()

  const { data: section } = await supabase
    .from('website_sections')
    .select('*')
    .eq('section_key', 'recreation_zone')
    .eq('is_published', true)
    .single()

  return <RecreationZone />
}
