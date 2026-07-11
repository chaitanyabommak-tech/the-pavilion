const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../public/assets/pavilion-hero.png');
const outputPath = path.join(__dirname, '../public/assets/pavilion-hero.webp');
const backupPath = path.join(__dirname, '../public/assets/pavilion-hero-original.png');

async function optimizeHeroImage() {
  try {
    console.log('🖼️  Starting hero image optimization...\n');

    // Get original file size
    const originalStats = fs.statSync(inputPath);
    const originalSizeMB = (originalStats.size / 1024 / 1024).toFixed(2);
    console.log(`📊 Original size: ${originalSizeMB} MB`);

    // Backup original
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
      console.log('✅ Backed up original to: pavilion-hero-original.png');
    }

    // Optimize image
    console.log('⚙️  Processing: Resize to 1920px + WebP @ 85% quality...\n');

    await sharp(inputPath)
      .resize(1920, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 85 })
      .toFile(outputPath);

    // Get new file size
    const newStats = fs.statSync(outputPath);
    const newSizeKB = (newStats.size / 1024).toFixed(2);
    const reduction = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

    console.log('✅ Optimization complete!\n');
    console.log('📊 Results:');
    console.log(`   Original:  ${originalSizeMB} MB (${(originalStats.size / 1024).toFixed(0)} KB)`);
    console.log(`   Optimized: ${newSizeKB} KB`);
    console.log(`   Reduction: ${reduction}%\n`);

    if (newStats.size < 300 * 1024) {
      console.log('🎉 SUCCESS: File is under 300 KB target!');
    } else {
      console.log(`⚠️  Warning: File is ${newSizeKB} KB (target was < 300 KB)`);
      console.log('   Consider reducing quality to 80% if needed.');
    }

    console.log(`\n📁 New file saved to: public/assets/pavilion-hero.webp`);
    console.log(`📁 Backup saved to: public/assets/pavilion-hero-original.png`);

  } catch (error) {
    console.error('❌ Error optimizing image:', error.message);
    process.exit(1);
  }
}

optimizeHeroImage();
