const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// You need to add your SUPABASE_SERVICE_ROLE_KEY to .env.local first!
const supabaseUrl = 'https://sgzhxgfspmsurrymcuvz.supabase.co';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!serviceRoleKey) {
  console.error('❌ ERROR: SUPABASE_SERVICE_ROLE_KEY not found in environment variables!');
  console.log('\n📋 TO FIX THIS:');
  console.log('1. Go to: https://supabase.com/dashboard/project/sgzhxgfspmsurrymcuvz/settings/api');
  console.log('2. Find "service_role" key under "Project API keys"');
  console.log('3. Copy the key');
  console.log('4. Add to .env.local:');
  console.log('   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here');
  console.log('\n⚠️  WARNING: Never commit this key to git! Keep it secret!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function setupDatabase() {
  console.log('🚀 Starting database setup...\n');

  try {
    // Read migration file
    console.log('📖 Reading migration file...');
    const migrationPath = path.join(__dirname, 'supabase', 'migrations', '001_initial_schema.sql');
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8');

    console.log('✅ Migration file loaded');
    console.log(`   Size: ${(migrationSQL.length / 1024).toFixed(2)} KB`);
    console.log(`   Lines: ${migrationSQL.split('\n').length}`);

    // Execute migration
    console.log('\n⚙️  Executing migration (this may take 30-60 seconds)...');
    const { data: migrationResult, error: migrationError } = await supabase.rpc('exec', {
      sql: migrationSQL
    });

    if (migrationError) {
      console.error('❌ Migration failed:', migrationError.message);
      console.log('\n📋 MANUAL SETUP REQUIRED:');
      console.log('Please run the migration manually in Supabase SQL Editor:');
      console.log('1. Go to: https://supabase.com/dashboard/project/sgzhxgfspmsurrymcuvz/editor');
      console.log('2. Copy contents of: supabase/migrations/001_initial_schema.sql');
      console.log('3. Paste and click "Run"');
      throw migrationError;
    }

    console.log('✅ Migration completed successfully!');

    // Read seed file
    console.log('\n📖 Reading seed data file...');
    const seedPath = path.join(__dirname, 'supabase', 'seed.sql');
    const seedSQL = fs.readFileSync(seedPath, 'utf8');

    console.log('✅ Seed file loaded');

    // Execute seed data
    console.log('\n⚙️  Inserting seed data...');
    const { data: seedResult, error: seedError } = await supabase.rpc('exec', {
      sql: seedSQL
    });

    if (seedError) {
      console.error('❌ Seed data failed:', seedError.message);
      console.log('\nYou can add seed data manually later.');
    } else {
      console.log('✅ Seed data inserted successfully!');
    }

    // Verify tables exist
    console.log('\n🔍 Verifying database setup...');
    const { count: villasCount } = await supabase
      .from('villas')
      .select('*', { count: 'exact', head: true });

    const { count: settingsCount } = await supabase
      .from('cta_settings')
      .select('*', { count: 'exact', head: true });

    console.log('\n✅ DATABASE SETUP COMPLETE!');
    console.log('\n📊 Verification:');
    console.log(`   - Villas table: ${villasCount} rows`);
    console.log(`   - CTA Settings: ${settingsCount} rows`);

    console.log('\n🎉 SUCCESS! Your database is ready!');
    console.log('\n📋 NEXT STEPS:');
    console.log('1. Create your admin user:');
    console.log('   a. Go to: https://supabase.com/dashboard/project/sgzhxgfspmsurrymcuvz/auth/users');
    console.log('   b. Click "Add User" → "Create new user"');
    console.log('   c. Enter email and password');
    console.log('   d. Check "Auto Confirm User"');
    console.log('   e. Copy the User ID');
    console.log('   f. Run this SQL in SQL Editor:');
    console.log('');
    console.log("      INSERT INTO admin_users (id, email, role, full_name, is_active)");
    console.log("      VALUES (");
    console.log("        'paste-user-id-here',");
    console.log("        'your@email.com',");
    console.log("        'super_admin',");
    console.log("        'Your Name',");
    console.log("        true");
    console.log("      );");
    console.log('');
    console.log('2. Then visit: http://localhost:3000/admin');
    console.log('3. Login with your credentials');
    console.log('4. Start managing your website! 🚀');

  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
    console.log('\n📋 MANUAL SETUP INSTRUCTIONS:');
    console.log('Follow the guide in: docs/ADMIN-DASHBOARD-SETUP.md');
    process.exit(1);
  }
}

setupDatabase();
