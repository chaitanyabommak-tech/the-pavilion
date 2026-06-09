import { createClient } from '@/lib/supabase/server'
import FloatingCTA from './FloatingCTA'

export default async function FloatingCTADB() {
  const supabase = await createClient()

  const { data: ctaSettings } = await supabase
    .from('cta_settings')
    .select('*')

  // Convert to key-value format
  const settings = ctaSettings?.reduce((acc, setting) => {
    acc[setting.setting_key] = setting.setting_value
    return acc
  }, {} as Record<string, string>) || {}

  // FloatingCTA will use its existing implementation
  // CTA settings are now available in database for future use
  return <FloatingCTA />
}
