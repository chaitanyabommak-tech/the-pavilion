import { createClient } from '@/lib/supabase/server'
import WestFacingSection from './WestFacingSection'

export default async function WestFacingSectionDB() {
  const supabase = await createClient()

  const { data: section } = await supabase
    .from('website_sections')
    .select('*')
    .eq('section_key', 'west_facing')
    .eq('is_published', true)
    .single()

  return <WestFacingSection />
}
