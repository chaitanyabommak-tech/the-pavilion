/**
 * Fix spelling: Pavilion → Pavillion (double L)
 * Run with: npx tsx scripts/fix-spelling.ts
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vffpgwkeyxqnzagkzvri.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmZnBnd2tleXhxbnphZ2t6dnJpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTU5MDcxMSwiZXhwIjoyMDk3MTY2NzExfQ.D6NzHBdKufDT888phQXb07q2QB3JhFpBJwvx8xWMrwQ';

const supabase = createClient(supabaseUrl, supabaseKey);

async function fixSpelling() {
  console.log('🔧 Fixing spelling: Pavilion → Pavillion\n');

  // Get all website sections
  const { data: sections, error } = await supabase
    .from('website_sections')
    .select('*');

  if (error) {
    console.error('❌ Error fetching sections:', error);
    return;
  }

  if (!sections || sections.length === 0) {
    console.log('ℹ️  No sections found in database');
    return;
  }

  let updatedCount = 0;

  for (const section of sections) {
    let updated = false;
    const updates: any = {};

    // Check and update title
    if (section.title && section.title.includes('Pavilion')) {
      updates.title = section.title.replace(/Pavilion/g, 'Pavillion');
      updated = true;
    }

    // Check and update subtitle
    if (section.subtitle && section.subtitle.includes('Pavilion')) {
      updates.subtitle = section.subtitle.replace(/Pavilion/g, 'Pavillion');
      updated = true;
    }

    // Check and update description
    if (section.description && section.description.includes('Pavilion')) {
      updates.description = section.description.replace(/Pavilion/g, 'Pavillion');
      updated = true;
    }

    // Check and update content JSON
    if (section.content) {
      const contentStr = JSON.stringify(section.content);
      if (contentStr.includes('Pavilion')) {
        const fixedContent = JSON.parse(contentStr.replace(/Pavilion/g, 'Pavillion'));
        updates.content = fixedContent;
        updated = true;
      }
    }

    if (updated) {
      const { error: updateError } = await supabase
        .from('website_sections')
        .update(updates)
        .eq('id', section.id);

      if (updateError) {
        console.error(`❌ Failed to update section ${section.section_key}:`, updateError);
      } else {
        console.log(`✅ Updated section: ${section.section_key}`);
        updatedCount++;
      }
    }
  }

  console.log(`\n🎉 Done! Updated ${updatedCount} section(s)`);
  console.log('\n✨ Your website now shows "Pavillion" (double L) everywhere!');
  console.log('\n📱 Refresh https://bommakugroup.com to see changes!');
}

fixSpelling().catch(console.error);
