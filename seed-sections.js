const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://sgzhxgfspmsurrymcuvz.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function seedSections() {
  console.log('🌱 Seeding website sections with current content...\n');

  const sections = [
    {
      section_key: 'hero',
      title: 'Hero Section',
      eyebrow: 'BOMMAKU GROUP PRESENTS',
      headline: 'The Pavilion',
      subheadline: 'Luxury Villa Community in Boduppal, Hyderabad',
      body_copy: 'Experience elevated living with premium G+1+Penthouse villas featuring world-class amenities.',
      cta_label: 'Book Site Visit',
      cta_url: '#contact',
      is_visible: true,
      is_published: true,
      display_order: 1,
    },
    {
      section_key: 'clean_slate',
      title: 'Clean Slate',
      eyebrow: 'YOUR VISION, OUR EXPERTISE',
      headline: 'Clean Slate',
      subheadline: 'Customize Your Dream Villa',
      body_copy: 'Complete freedom to customize every aspect of your home - from layout and elevations to interiors and finishes.',
      cta_label: 'Learn More',
      cta_url: '#contact',
      is_visible: true,
      is_published: true,
      display_order: 2,
    },
    {
      section_key: 'recreation_zone',
      title: 'Bommaku Recreation Zone',
      eyebrow: 'AMENITIES',
      headline: 'Bommaku Recreation Zone',
      subheadline: '30,000 SFT of World-Class Amenities',
      body_copy: 'Infinity pool, sports courts, fitness center, and more. Exclusively for villa owners.',
      cta_label: 'Explore Amenities',
      cta_url: '#recreation',
      is_visible: true,
      is_published: true,
      display_order: 3,
    },
    {
      section_key: 'east_facing',
      title: 'East Facing Villas',
      eyebrow: 'VASTU COMPLIANT',
      headline: 'East Facing Villas',
      subheadline: 'Welcome the Morning Sun',
      body_copy: 'Designed for optimal natural light and positive energy flow with traditional Vastu principles.',
      is_visible: true,
      is_published: true,
      display_order: 4,
    },
    {
      section_key: 'west_facing',
      title: 'West Facing Villas',
      eyebrow: 'MODERN DESIGN',
      headline: 'West Facing Villas',
      subheadline: 'Sunset Views & Elegance',
      body_copy: 'Stunning sunset views with energy-efficient design and contemporary architecture.',
      is_visible: true,
      is_published: true,
      display_order: 5,
    },
    {
      section_key: 'location',
      title: 'Location Advantages',
      eyebrow: 'PRIME LOCATION',
      headline: 'Boduppal, East Hyderabad',
      subheadline: 'Strategic Connectivity',
      body_copy: 'Close to IT corridors, schools, hospitals, and shopping with excellent connectivity.',
      cta_label: 'View on Map',
      cta_url: 'https://maps.app.goo.gl/R1nc9T4BruaWa8N57',
      is_visible: true,
      is_published: true,
      display_order: 6,
    },
  ];

  try {
    for (const section of sections) {
      const { data: existing } = await supabase
        .from('website_sections')
        .select('id')
        .eq('section_key', section.section_key)
        .single();

      if (existing) {
        console.log(`✅ Section "${section.title}" already exists`);
      } else {
        const { error } = await supabase
          .from('website_sections')
          .insert(section);

        if (error) {
          console.error(`❌ Error inserting ${section.title}:`, error.message);
        } else {
          console.log(`✅ Inserted: ${section.title}`);
        }
      }
    }

    console.log('\n✅ All sections seeded!');
    console.log('Edit at: https://bommakugroup.com/admin/cms/sections\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

seedSections();
