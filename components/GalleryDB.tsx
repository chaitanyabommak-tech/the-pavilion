import { createClient } from '@/lib/supabase/server'
import GalleryClient from './GalleryClient'

export default async function GalleryDB() {
  const supabase = await createClient()

  // Fetch published gallery items from database
  const { data: galleryItems } = await supabase
    .from('gallery_items')
    .select(`
      *,
      image:media_assets!gallery_items_image_id_fkey(file_url, alt_text)
    `)
    .eq('is_published', true)
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  // Transform to match expected format
  const images = galleryItems?.map(item => ({
    src: item.image?.file_url || '/images/placeholder.jpg',
    alt: item.alt_text || item.image?.alt_text || item.title,
    caption: item.caption
  })) || []

  // Fallback to hardcoded if database is empty
  const fallbackImages = [
    { src: "/images/pavilion/entrance/NEW-CLEAN-ENTRANCE.jpg", alt: "The Pavilion villa community grand entrance gate by Bommaku Group", caption: "Grand Entrance" },
    { src: "/images/pavilion/recreation-zone/aerial-view-01.jpg", alt: "Bommaku Recreation Zone aerial with infinity pool and sports facilities", caption: "Recreation Zone" },
    { src: "/images/pavilion/exteriors/villa-street-view-02.jpg", alt: "The Pavilion villa community with contemporary design language", caption: "Villa Community" },
    { src: "/images/pavilion/recreation-zone/sports-courts-aerial.jpg", alt: "Sports courts and wellness facilities aerial view", caption: "Sports & Wellness" },
    { src: "/images/pavilion/exteriors/corner-villa-view.jpg", alt: "Premium corner villa with landscaping and architectural lighting", caption: "Corner Villa" },
    { src: "/images/pavilion/exteriors/villa-street-view-03.jpg", alt: "Villa row at evening with warm interior lighting", caption: "Evening View" },
    { src: "/images/pavilion/interiors/living-room-02.jpg", alt: "Contemporary living room interior with premium furnishings", caption: "Living Space" },
    { src: "/images/pavilion/interiors/kitchen-02.jpg", alt: "Luxury kitchen with wooden cabinetry and premium fittings", caption: "Gourmet Kitchen" },
    { src: "/images/pavilion/interiors/master-bedroom-02.jpg", alt: "Spacious master bedroom with modern design", caption: "Master Suite" },
  ]

  return <GalleryClient images={images.length > 0 ? images : fallbackImages} />
}
