import { createClient } from '@/lib/supabase/server'
import Hero from './Hero'

export default async function HeroDB() {
  const supabase = await createClient()

  // Fetch hero section data from CMS (for future use)
  const { data: heroSection } = await supabase
    .from('website_sections')
    .select('*')
    .eq('section_key', 'hero')
    .eq('is_visible', true)
    .single()

  // TODO: Pass heroSection data to Hero component once Hero accepts props
  return <Hero />
}
