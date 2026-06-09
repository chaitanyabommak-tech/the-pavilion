const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://sgzhxgfspmsurrymcuvz.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function populateGallery() {
  console.log('🎨 Populating gallery...\n');

  const defaultImages = [
    { title: "Grand Entrance", caption: "Grand Entrance", alt_text: "The Pavilion villa community grand entrance gate by Bommaku Group", file_url: "/images/pavilion/entrance/NEW-CLEAN-ENTRANCE.jpg", order: 1 },
    { title: "Recreation Zone", caption: "Recreation Zone", alt_text: "Bommaku Recreation Zone aerial with infinity pool and sports facilities", file_url: "/images/pavilion/recreation-zone/aerial-view-01.jpg", order: 2 },
    { title: "Villa Community", caption: "Villa Community", alt_text: "The Pavilion villa community with contemporary design language", file_url: "/images/pavilion/exteriors/villa-street-view-02.jpg", order: 3 },
    { title: "Sports & Wellness", caption: "Sports & Wellness", alt_text: "Sports courts and wellness facilities aerial view", file_url: "/images/pavilion/recreation-zone/sports-courts-aerial.jpg", order: 4 },
    { title: "Corner Villa", caption: "Corner Villa", alt_text: "Premium corner villa with landscaping and architectural lighting", file_url: "/images/pavilion/exteriors/corner-villa-view.jpg", order: 5 },
    { title: "Evening View", caption: "Evening View", alt_text: "Villa row at evening with warm interior lighting", file_url: "/images/pavilion/exteriors/villa-street-view-03.jpg", order: 6 },
    { title: "Living Space", caption: "Living Space", alt_text: "Contemporary living room interior with premium furnishings", file_url: "/images/pavilion/interiors/living-room-02.jpg", order: 7 },
    { title: "Gourmet Kitchen", caption: "Gourmet Kitchen", alt_text: "Luxury kitchen with wooden cabinetry and premium fittings", file_url: "/images/pavilion/interiors/kitchen-02.jpg", order: 8 },
    { title: "Master Suite", caption: "Master Suite", alt_text: "Spacious master bedroom with modern design", file_url: "/images/pavilion/interiors/master-bedroom-02.jpg", order: 9 },
  ];

  for (const img of defaultImages) {
    console.log(`Adding: ${img.title}...`);

    const { data: media, error: mediaError } = await supabase
      .from('media_assets')
      .insert({
        filename: img.file_url.split('/').pop(),
        original_filename: img.file_url.split('/').pop(),
        file_path: img.file_url,
        file_url: img.file_url,
        file_type: 'image/jpeg',
        file_size: 0,
        alt_text: img.alt_text,
        caption: img.caption,
        category: 'gallery',
        is_active: true,
      })
      .select()
      .single();

    if (mediaError) {
      console.error(`  ❌ Media error:`, mediaError.message);
      continue;
    }

    const { error: galleryError } = await supabase
      .from('gallery_items')
      .insert({
        title: img.title,
        caption: img.caption,
        image_id: media.id,
        thumbnail_id: media.id,
        alt_text: img.alt_text,
        display_order: img.order,
        is_active: true,
        is_published: true,
        published_at: new Date().toISOString(),
      });

    if (galleryError) {
      console.error(`  ❌ Gallery error:`, galleryError.message);
    } else {
      console.log(`  ✅ Added successfully`);
    }
  }

  console.log('\n✅ Gallery populated! Visit https://bommakugroup.com to see it!');
}

populateGallery();
