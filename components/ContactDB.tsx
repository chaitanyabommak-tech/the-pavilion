import { createClient } from '@/lib/supabase/server'
import Contact from './Contact'

export default async function ContactDB() {
  const supabase = await createClient()

  const { data: ctaSettings } = await supabase
    .from('cta_settings')
    .select('*')

  const settings = ctaSettings?.reduce((acc, setting) => {
    acc[setting.setting_key] = setting.setting_value
    return acc
  }, {} as Record<string, string>) || {}

  return <Contact settings={settings} />
}
