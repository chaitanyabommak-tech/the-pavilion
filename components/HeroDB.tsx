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

  // Fetch CTA settings
  const { data: ctaSettings } = await supabase
    .from('cta_settings')
    .select('*')

  const ctaData = ctaSettings?.reduce((acc, setting) => {
    acc[setting.setting_key] = setting.setting_value
    return acc
  }, {} as Record<string, string>) || {}

  // If no CMS data, use defaults
  const heroData = heroSection || {
    headline: 'The Pavilion',
    subheadline: 'Luxury Villa Community in Boduppal, Hyderabad',
    eyebrow: 'BOMMAKU GROUP PRESENTS',
    cta_primary_label: 'Book Site Visit',
    cta_secondary_label: 'Download Brochure',
  }

  return <Hero cmsData={heroData} ctaSettings={ctaData} />
}
