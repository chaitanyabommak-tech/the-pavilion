#!/usr/bin/env node

/**
 * Test if your Supabase key is correct
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🔍 SUPABASE KEY CHECKER\n');
console.log('This will help you verify if you have the correct service_role key.\n');

rl.question('Paste your service_role key here: ', (key) => {
  const trimmedKey = key.trim();

  console.log('\n📊 KEY ANALYSIS:\n');
  console.log('Length:', trimmedKey.length, 'characters');
  console.log('Starts with:', trimmedKey.substring(0, 10) + '...');
  console.log('Format:', trimmedKey.includes('.') ? 'JWT (has dots)' : 'Other format');

  // Check if it's a JWT token
  if (trimmedKey.startsWith('eyJ')) {
    console.log('\n✅ CORRECT FORMAT - This looks like a valid JWT token!');
    console.log('\nThis key should work. Let me know and I\'ll add it to Vercel.');
  } else if (trimmedKey.startsWith('sb_secret_')) {
    console.log('\n❌ WRONG KEY - This is NOT the service_role API key');
    console.log('\nWhat you pasted:', trimmedKey);
    console.log('\nThis appears to be:');
    console.log('  • Database password, OR');
    console.log('  • Project secret, OR');
    console.log('  • Some other credential');
    console.log('\n📍 WHERE TO FIND THE CORRECT KEY:\n');
    console.log('1. Go to: https://supabase.com/dashboard/project/sgzhxgfspmsurrymcuvz/settings/api');
    console.log('2. Look for section titled "Project API keys" (NOT "Project secrets" or "Database")');
    console.log('3. Find the row labeled "service_role" with badge "secret"');
    console.log('4. Click the EYE icon (👁️) to reveal');
    console.log('5. Click COPY icon');
    console.log('6. Run this script again and paste that key');
    console.log('\nThe correct key will:');
    console.log('  ✅ Start with: eyJ');
    console.log('  ✅ Be 200-300+ characters long');
    console.log('  ✅ Have dots (.) separating 3 parts');
    console.log('  ✅ Look like: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3M...');
  } else {
    console.log('\n⚠️  UNKNOWN FORMAT');
    console.log('\nThis doesn\'t match expected patterns.');
    console.log('Expected: JWT token starting with "eyJ"');
    console.log('You provided:', trimmedKey.substring(0, 50) + (trimmedKey.length > 50 ? '...' : ''));
  }

  console.log('\n');
  rl.close();
});
