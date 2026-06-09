import { createClient } from '@/lib/supabase/server'
import RecreationZone from './RecreationZone'

export default async function RecreationZoneDB() {
  const supabase = await createClient()

  // Fetch recreation zone features from database
  const { data: features } = await supabase
    .from('recreation_zone_features')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  // Group features by category
  const amenityGroups = features?.reduce((acc: any[], feature) => {
    const existingGroup = acc.find(g => g.label === feature.category)
    if (existingGroup) {
      existingGroup.items.push(feature.feature_name)
    } else {
      acc.push({
        label: feature.category,
        items: [feature.feature_name]
      })
    }
    return acc
  }, [])

  return <RecreationZone amenityGroups={amenityGroups?.length ? amenityGroups : undefined} />
}
