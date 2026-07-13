#!/usr/bin/env node
import { chromium } from 'playwright';
import { writeFile } from 'fs/promises';

const viewports = [320, 360, 390, 430, 480, 600, 767, 768, 1024, 1440];
const url = 'http://localhost:3000/';
const fails = [];

async function audit() {
  const browser = await chromium.launch();

  for (const w of viewports) {
    const page = await browser.newPage({
      viewport: { width: w, height: 844 }
    });

    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500); // Theme/mount settle

    // Screenshot
    const screenshotPath = `audit/screens/mobile-logo/${w}px-after.png`;
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`✓ Screenshot: ${w}px`);

    // Geometry checks (mobile only)
    if (w <= 767) {
      try {
        const logo = await page.$eval('.navbar__logo', e => e.getBoundingClientRect().toJSON());
        const toggle = await page.$eval('.navbar__actions > button:first-child, .navbar__actions > div:first-child',
          e => e.getBoundingClientRect().toJSON());
        const cta = await page.$eval('.btn-nav-enquire', e => e.getBoundingClientRect().toJSON());
        const header = await page.$eval('.navbar-floating', e => e.getBoundingClientRect().toJSON());

        // No overlaps
        const overlap = (a, b) =>
          a.x < b.x + b.width && b.x < a.x + a.width &&
          a.y < b.y + b.height && b.y < a.y + a.height;

        if (overlap(logo, toggle)) fails.push({ w, check: 'overlap', pair: 'logo-toggle' });
        if (overlap(logo, cta)) fails.push({ w, check: 'overlap', pair: 'logo-cta' });
        if (overlap(toggle, cta)) fails.push({ w, check: 'overlap', pair: 'toggle-cta' });

        // Nothing escapes header
        if (logo.left < header.left - 0.5 || logo.right > header.right + 0.5)
          fails.push({ w, check: 'escapes-header', el: 'logo' });
        if (toggle.left < header.left - 0.5 || toggle.right > header.right + 0.5)
          fails.push({ w, check: 'escapes-header', el: 'toggle' });
        if (cta.left < header.left - 0.5 || cta.right > header.right + 0.5)
          fails.push({ w, check: 'escapes-header', el: 'cta' });

        // Logo minimum size
        if (logo.height < 24)
          fails.push({ w, check: 'logo-too-small', height: logo.height });

        // Aspect ratio check (expected ~3.18:1)
        const aspectRatio = logo.width / logo.height;
        if (Math.abs(aspectRatio - 3.18) > 0.3)
          fails.push({ w, check: 'aspect-mismatch', ratio: aspectRatio, expected: 3.18 });

        console.log(`✓ Geometry: ${w}px - logo ${logo.width.toFixed(0)}×${logo.height.toFixed(0)}px (${aspectRatio.toFixed(2)}:1)`);
      } catch (err) {
        fails.push({ w, check: 'selector-error', error: err.message });
      }
    }

    await page.close();
  }

  await browser.close();

  // Write report
  const report = {
    timestamp: new Date().toISOString(),
    viewports,
    failures: fails,
    passed: fails.length === 0
  };

  await writeFile('audit/MOBILE-LOGO-REPORT.json', JSON.stringify(report, null, 2));

  if (fails.length === 0) {
    console.log('\n✅ All geometry checks PASSED');
    process.exit(0);
  } else {
    console.error('\n❌ Geometry failures:', fails);
    process.exit(1);
  }
}

audit().catch(err => {
  console.error('Audit error:', err);
  process.exit(1);
});
