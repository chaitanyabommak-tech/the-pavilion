import { createClient } from '@/lib/supabase/server'
import Footer from './Footer'

export default async function FooterDB() {
  const supabase = await createClient()

  const { data: ctaSettings } = await supabase
    .from('cta_settings')
    .select('*')

  const settings = ctaSettings?.reduce((acc, setting) => {
    acc[setting.setting_key] = setting.setting_value
    return acc
  }, {} as Record<string, string>) || {}

  // Footer will use its existing implementation
  // Contact details are available in database
  return <Footer />
}
