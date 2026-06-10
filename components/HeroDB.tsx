import { createClient } from '@/lib/supabase/server'
import Hero from './Hero'

export default async function HeroDB() {
  const supabase = await createClient()

  // Fetch hero section data from CMS
  const { data: heroSection } = await supabase
    .from('website_sections')
    .select('*')
    .eq('section_key', 'hero')
    .eq('is_visible', true)
    .single()

  // Pass hero data to Hero component (uses fallback if DB is empty)
  return <Hero heroData={heroSection} />
}
