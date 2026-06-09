import { createClient } from '@/lib/supabase/server'
import CleanSlate from './CleanSlate'

export default async function CleanSlateDB() {
  const supabase = await createClient()

  const { data: section } = await supabase
    .from('website_sections')
    .select('*')
    .eq('section_key', 'clean_slate')
    .eq('is_published', true)
    .single()

  // Component will use its existing hardcoded content as fallback
  // or we can pass the data as props if we modify CleanSlate component
  return <CleanSlate />
}
