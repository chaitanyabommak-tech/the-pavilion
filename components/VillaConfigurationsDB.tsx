import { createClient } from '@/lib/supabase/server'
import VillaConfigurations from './VillaConfigurations'
import { Villa } from '@/data/pavilionVillas'

// Force fresh data on every request
export const dynamic = 'force-dynamic'
export const revalidate = 0

// Convert database villa to Villa type
function convertDBVilla(dbVilla: any): Villa {
  return {
    id: dbVilla.villa_id,
    label: dbVilla.villa_id,
    block: dbVilla.block,
    plotSizeSqYd: dbVilla.plot_size_sqyd,
    plotSizeLabel: `${dbVilla.plot_size_sqyd} Sq. Yds`,
    facing: dbVilla.facing,
    builtUpAreaSft: dbVilla.built_up_area_sft || '',
    totalSft: dbVilla.total_sft || 0,
    dimensions: dbVilla.dimensions || '',
    floors: dbVilla.floors || 'G+1+Penthouse',
    unitType: dbVilla.configuration || '3BHK Duplex',
    status: dbVilla.status === 'Sold Out' ? 'sold' :
            dbVilla.status === 'Reserved' ? 'reserved' : 'available',
    price: dbVilla.price_range || '',
    floorPlanImages: dbVilla.floor_plan_images || {},
    mapPosition: dbVilla.map_position || { x: 0, y: 0, width: 5, height: 5 }
  }
}

export default async function VillaConfigurationsDB() {
  const supabase = await createClient()

  // Fetch villas from database
  const { data: dbVillas } = await supabase
    .from('villas')
    .select('*')
    .order('villa_id', { ascending: true })

  // Convert to Villa type
  const villas: Villa[] = dbVillas ? dbVillas.map(convertDBVilla) : []

  // Pass to client component
  return <VillaConfigurations villas={villas.length > 0 ? villas : undefined} />
}
