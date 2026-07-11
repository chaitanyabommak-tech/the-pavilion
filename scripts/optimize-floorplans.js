const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../public/assets');
const backupDir = path.join(assetsDir, 'originals');

// Floor plan files to optimize
const floorplans = [
  'floorplan-150e.png',
  'floorplan-150w.png',
  'floorplan-165ne.png',
  'floorplan-165nw.png',
  'floorplan-167e.png',
  'floorplan-222w.png',
  'floorplan-227e.png',
];

async function optimizeFloorplans() {
  console.log('🏗️  Floor Plan Batch Optimization\n');
  console.log('═'.repeat(60));

  // Create backup directory if it doesn't exist
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
    console.log('📁 Created backup directory: public/assets/originals/\n');
  }

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  const results = [];

  for (const filename of floorplans) {
    const inputPath = path.join(assetsDir, filename);
    const outputPath = path.join(assetsDir, filename.replace('.png', '.webp'));
    const backupPath = path.join(backupDir, filename);

    // Check if file exists
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${filename} - file not found\n`);
      continue;
    }

    try {
      // Get original size
      const originalStats = fs.statSync(inputPath);
      totalOriginalSize += originalStats.size;

      console.log(`📊 Processing: ${filename}`);
      console.log(`   Original: ${(originalStats.size / 1024).toFixed(0)} KB`);

      // Backup original if not already backed up
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(inputPath, backupPath);
      }

      // Optimize to WebP
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);

      // Get new size
      const newStats = fs.statSync(outputPath);
      totalOptimizedSize += newStats.size;
      const reduction = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

      console.log(`   Optimized: ${(newStats.size / 1024).toFixed(0)} KB`);
      console.log(`   Reduction: ${reduction}%`);
      console.log(`   ✅ Saved as: ${filename.replace('.png', '.webp')}\n`);

      results.push({
        filename,
        originalKB: (originalStats.size / 1024).toFixed(0),
        optimizedKB: (newStats.size / 1024).toFixed(0),
        reduction,
      });

    } catch (error) {
      console.error(`   ❌ Error: ${error.message}\n`);
    }
  }

  // Summary
  console.log('═'.repeat(60));
  console.log('\n📈 OPTIMIZATION SUMMARY\n');
  console.log('File                    Original    Optimized   Reduction');
  console.log('─'.repeat(60));

  results.forEach(r => {
    const name = r.filename.replace('.png', '').padEnd(23);
    const orig = (r.originalKB + ' KB').padEnd(11);
    const opt = (r.optimizedKB + ' KB').padEnd(11);
    const red = r.reduction + '%';
    console.log(`${name} ${orig} ${opt} ${red}`);
  });

  console.log('─'.repeat(60));
  console.log(`TOTAL                   ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB     ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB      ${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%`);
  console.log('\n✅ Batch optimization complete!');
  console.log(`📁 Originals backed up to: public/assets/originals/`);
  console.log(`📁 WebP files saved to: public/assets/`);

  if (totalOptimizedSize < 3 * 1024 * 1024) {
    console.log('\n🎉 SUCCESS: Total size is under 3 MB target!');
  }
}

optimizeFloorplans().catch(error => {
  console.error('❌ Batch optimization failed:', error);
  process.exit(1);
});
