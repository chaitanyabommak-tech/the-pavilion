const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://sgzhxgfspmsurrymcuvz.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function setupStorage() {
  console.log('🗄️  Setting up Supabase Storage...\n');

  try {
    // Create storage bucket
    const { data: bucket, error: bucketError } = await supabase.storage.createBucket('website-media', {
      public: true,
      fileSizeLimit: 10485760, // 10MB
      allowedMimeTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'application/pdf'],
    });

    if (bucketError) {
      if (bucketError.message.includes('already exists')) {
        console.log('✅ Storage bucket already exists\n');
      } else {
        throw bucketError;
      }
    } else {
      console.log('✅ Storage bucket created\n');
    }

    console.log('Storage setup complete!');
    console.log('\nYou can now upload files through the Media Library at:');
    console.log('https://bommakugroup.com/admin/cms/media\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

setupStorage();
