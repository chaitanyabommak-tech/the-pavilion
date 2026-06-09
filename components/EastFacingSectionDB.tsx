import { createClient } from '@/lib/supabase/server'
import EastFacingSection from './EastFacingSection'

export default async function EastFacingSectionDB() {
  const supabase = await createClient()

  const { data: section } = await supabase
    .from('website_sections')
    .select('*')
    .eq('section_key', 'east_facing')
    .eq('is_published', true)
    .single()

  return <EastFacingSection />
}
