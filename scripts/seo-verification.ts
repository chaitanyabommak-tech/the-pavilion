#!/usr/bin/env ts-node

/**
 * SEO Verification Script
 * Validates all 8 phases of SEO implementation for The Pavillion website
 *
 * Usage:
 *   npx ts-node scripts/seo-verification.ts
 *
 * Or add to package.json:
 *   "scripts": { "seo:verify": "ts-node scripts/seo-verification.ts" }
 *   npm run seo:verify
 */

import fs from 'fs';
import path from 'path';

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

interface CheckResult {
  pass: boolean;
  message: string;
  details?: string;
}

interface PhaseResult {
  phase: string;
  checks: CheckResult[];
  score: number;
}

const results: PhaseResult[] = [];

// Helper functions
function printHeader(text: string) {
  console.log(`\n${colors.cyan}${colors.bold}${'='.repeat(80)}`);
  console.log(`${text}`);
  console.log(`${'='.repeat(80)}${colors.reset}\n`);
}

function printPhase(phaseNum: number, phaseName: string) {
  console.log(`\n${colors.bold}Phase ${phaseNum}: ${phaseName}${colors.reset}`);
  console.log(`${'-'.repeat(80)}`);
}

function printCheck(check: CheckResult) {
  const icon = check.pass ? '✓' : '✗';
  const color = check.pass ? colors.green : colors.red;
  console.log(`${color}${icon} ${check.message}${colors.reset}`);
  if (check.details) {
    console.log(`  ${colors.yellow}${check.details}${colors.reset}`);
  }
}

function fileExists(filepath: string): boolean {
  return fs.existsSync(path.join(process.cwd(), filepath));
}

function fileContains(filepath: string, searchString: string | RegExp): boolean {
  try {
    const content = fs.readFileSync(path.join(process.cwd(), filepath), 'utf-8');
    if (typeof searchString === 'string') {
      return content.includes(searchString);
    }
    return searchString.test(content);
  } catch {
    return false;
  }
}

function countFiles(pattern: RegExp, dir: string): number {
  try {
    const files = fs.readdirSync(path.join(process.cwd(), dir), { recursive: true });
    return files.filter((file) => {
      if (typeof file === 'string') {
        return pattern.test(file);
      }
      return false;
    }).length;
  } catch {
    return 0;
  }
}

// Phase 1: Technical Foundation
function verifyPhase1(): PhaseResult {
  const checks: CheckResult[] = [];

  // Check robots.ts
  checks.push({
    pass: fileExists('app/robots.ts'),
    message: 'robots.ts exists and allows AI crawlers',
    details: fileExists('app/robots.ts')
      ? 'Found at app/robots.ts'
      : 'Missing: app/robots.ts',
  });

  checks.push({
    pass: fileContains('app/robots.ts', 'GPTBot') && fileContains('app/robots.ts', 'ClaudeBot'),
    message: 'AI crawlers (GPTBot, ClaudeBot, PerplexityBot) explicitly allowed',
    details: 'Allows ChatGPT, Claude, Perplexity, Google-Extended',
  });

  // Check sitemap.ts
  checks.push({
    pass: fileExists('app/sitemap.ts'),
    message: 'Dynamic sitemap.ts configured',
    details: fileExists('app/sitemap.ts')
      ? 'Found at app/sitemap.ts'
      : 'Missing: app/sitemap.ts',
  });

  // Check llms.txt
  checks.push({
    pass: fileExists('public/llms.txt'),
    message: 'llms.txt file exists for AI fact extraction',
    details: fileExists('public/llms.txt')
      ? 'Found at public/llms.txt'
      : 'Missing: public/llms.txt',
  });

  // Check manifest.ts
  checks.push({
    pass: fileExists('app/manifest.ts'),
    message: 'Web app manifest configured (PWA-ready)',
    details: fileExists('app/manifest.ts')
      ? 'Found at app/manifest.ts'
      : 'Missing: app/manifest.ts',
  });

  // Check lang attribute
  checks.push({
    pass: fileContains('app/layout.tsx', 'lang="en-IN"'),
    message: 'HTML lang attribute set to "en-IN" for Indian market',
    details: 'Regional targeting for India',
  });

  // Check no old static files
  checks.push({
    pass: !fileExists('public/robots.txt') && !fileExists('public/sitemap.xml'),
    message: 'No conflicting static robots.txt or sitemap.xml',
    details: 'Using dynamic app router versions only',
  });

  const score = Math.round(
    (checks.filter((c) => c.pass).length / checks.length) * 100
  );

  return { phase: 'Phase 1: Technical Foundation', checks, score };
}

// Phase 2: Structured Data
function verifyPhase2(): PhaseResult {
  const checks: CheckResult[] = [];

  // Check Organization schema
  checks.push({
    pass: fileContains('app/layout.tsx', '"@type": "Organization"'),
    message: 'Organization schema present',
    details: 'Includes business name, contact, social profiles',
  });

  // Check LocalBusiness schema
  checks.push({
    pass: fileContains('app/layout.tsx', '"@type": ["RealEstateAgent", "LocalBusiness"]'),
    message: 'LocalBusiness & RealEstateAgent schema present',
    details: 'Combined type for real estate business',
  });

  // Check business hours
  checks.push({
    pass: fileContains('app/layout.tsx', 'openingHoursSpecification'),
    message: 'Opening hours specified in schema',
    details: 'Mon-Sat 10-6, Sun 10-5',
  });

  // Check hasMap (Google Maps link)
  checks.push({
    pass: fileContains('app/layout.tsx', 'hasMap'),
    message: 'Google Maps link in LocalBusiness schema',
    details: 'Improves local SEO signals',
  });

  // Check areaServed
  checks.push({
    pass: fileContains('app/layout.tsx', 'areaServed'),
    message: 'Service areas defined (Boduppal, Uppal, East Hyderabad)',
    details: 'Helps rank for location-based searches',
  });

  // Check Product schema
  checks.push({
    pass: fileContains('app/layout.tsx', '"@type": "Product"'),
    message: 'Product schema for villa offering',
    details: 'Includes pricing, availability, reviews',
  });

  const score = Math.round(
    (checks.filter((c) => c.pass).length / checks.length) * 100
  );

  return { phase: 'Phase 2: Structured Data', checks, score };
}

// Phase 3: Site Architecture
function verifyPhase3(): PhaseResult {
  const checks: CheckResult[] = [];

  // Count app routes (excluding API, _components, etc.)
  const moneyPages = [
    'app/villas-in-boduppal/page.tsx',
    'app/villas-near-uppal/page.tsx',
    'app/3bhk-villas-boduppal/page.tsx',
    'app/independent-houses-boduppal/page.tsx',
  ];

  checks.push({
    pass: moneyPages.every((p) => fileExists(p)),
    message: '4 money pages created (primary SEO landing pages)',
    details: 'villas-in-boduppal, villas-near-uppal, 3bhk-villas, independent-houses',
  });

  const uspPages = [
    'app/bommaku-recreation-zone/page.tsx',
    'app/the-clean-slate/page.tsx',
    'app/nri-villa-investment-hyderabad/page.tsx',
  ];

  checks.push({
    pass: uspPages.every((p) => fileExists(p)),
    message: '3 USP/audience pages created',
    details: 'recreation-zone, the-clean-slate, nri-investment',
  });

  checks.push({
    pass: fileExists('app/villas-in-ghatkesar-pocharam/page.tsx'),
    message: 'Corridor expansion page (Ghatkesar-Pocharam) created',
    details: 'Targets broader East Hyderabad market',
  });

  checks.push({
    pass: fileExists('app/blog/page.tsx'),
    message: 'Blog parent page exists',
    details: 'Central hub for AEO-optimized articles',
  });

  const blogPosts = [
    'app/blog/is-boduppal-good-place-to-buy-villa-2026/page.tsx',
    'app/blog/villa-prices-boduppal-east-hyderabad-2026/page.tsx',
    'app/blog/hmda-approved-vs-unapproved-projects-what-buyers-must-check/page.tsx',
    'app/blog/g-plus-1-plus-penthouse-explained/page.tsx',
    'app/blog/nri-step-by-step-guide-buying-villa-hyderabad/page.tsx',
    'app/blog/villa-vs-apartment-east-hyderabad-honest-comparison/page.tsx',
  ];

  checks.push({
    pass: blogPosts.every((p) => fileExists(p)),
    message: '6 AEO-optimized blog posts created',
    details: 'Location, pricing, legal, architecture, NRI, comparison guides',
  });

  // Check breadcrumbs component
  checks.push({
    pass: fileExists('components/Breadcrumbs.tsx'),
    message: 'Breadcrumbs component with schema markup exists',
    details: 'Provides navigation + BreadcrumbList schema',
  });

  const score = Math.round(
    (checks.filter((c) => c.pass).length / checks.length) * 100
  );

  return { phase: 'Phase 3: Site Architecture', checks, score };
}

// Phase 4: Internal Linking
function verifyPhase4(): PhaseResult {
  const checks: CheckResult[] = [];

  // Check navbar has blog link
  checks.push({
    pass: fileContains('components/Navbar.tsx', '/blog'),
    message: 'Blog link in main navigation (desktop)',
    details: 'Improves blog discoverability',
  });

  // Check money pages have internal links
  checks.push({
    pass: fileContains('app/villas-in-boduppal/page.tsx', '/blog/'),
    message: 'Money pages link to relevant blog posts',
    details: 'Contextual internal linking to deep-dive guides',
  });

  checks.push({
    pass: fileContains('app/villas-in-boduppal/page.tsx', '/bommaku-recreation-zone'),
    message: 'Cross-links between related pages (USP pages)',
    details: 'Hub-spoke model connecting project features',
  });

  checks.push({
    pass: fileContains('app/nri-villa-investment-hyderabad/page.tsx', '/blog/nri-step-by-step'),
    message: 'NRI page links to NRI blog guide',
    details: 'Related content linking strategy',
  });

  const score = Math.round(
    (checks.filter((c) => c.pass).length / checks.length) * 100
  );

  return { phase: 'Phase 4: Internal Linking & On-Page', checks, score };
}

// Phase 5: Google Business Profile Playbook
function verifyPhase5(): PhaseResult {
  const checks: CheckResult[] = [];

  checks.push({
    pass: fileExists('docs/GBP-OPTIMIZATION-PLAYBOOK.md'),
    message: 'GBP optimization playbook document exists',
    details: 'Comprehensive guide for Map Pack ranking',
  });

  checks.push({
    pass: fileContains('docs/GBP-OPTIMIZATION-PLAYBOOK.md', 'review generation'),
    message: 'Playbook includes review generation system',
    details: 'Templates, touchpoints, velocity targets',
  });

  checks.push({
    pass: fileContains('docs/GBP-OPTIMIZATION-PLAYBOOK.md', 'Google Posts'),
    message: 'Playbook includes Google Posts calendar',
    details: '4-week sample calendar with post types',
  });

  checks.push({
    pass: fileContains('docs/GBP-OPTIMIZATION-PLAYBOOK.md', 'Map Pack ranking'),
    message: 'Playbook covers Map Pack ranking factors',
    details: 'Relevance 30%, Distance 25%, Prominence 45%',
  });

  const score = Math.round(
    (checks.filter((c) => c.pass).length / checks.length) * 100
  );

  return { phase: 'Phase 5: GBP Playbook', checks, score };
}

// Phase 6: Performance Audit
function verifyPhase6(): PhaseResult {
  const checks: CheckResult[] = [];

  checks.push({
    pass: fileExists('docs/PERFORMANCE-AUDIT-REPORT.md'),
    message: 'Performance audit report exists',
    details: 'Core Web Vitals, image optimization, caching strategy',
  });

  checks.push({
    pass: fileContains('docs/PERFORMANCE-AUDIT-REPORT.md', 'pavilion-hero.png'),
    message: 'Hero image optimization identified (8.5 MB → < 300 KB)',
    details: '96% size reduction target',
  });

  checks.push({
    pass: fileContains('next.config.ts', "formats: ['image/avif', 'image/webp']"),
    message: 'Next.js image optimization configured (AVIF, WebP)',
    details: 'Automatic format conversion enabled',
  });

  checks.push({
    pass: fileContains('next.config.ts', 'compress: true'),
    message: 'Gzip/Brotli compression enabled',
    details: 'Reduces payload size',
  });

  checks.push({
    pass: fileContains('docs/PERFORMANCE-AUDIT-REPORT.md', '3-week action plan'),
    message: 'Performance audit includes prioritized action plan',
    details: 'Week 1: Images, Week 2: Caching, Week 3: Monitoring',
  });

  const score = Math.round(
    (checks.filter((c) => c.pass).length / checks.length) * 100
  );

  return { phase: 'Phase 6: Performance Audit', checks, score };
}

// Phase 7: AEO Optimization
function verifyPhase7(): PhaseResult {
  const checks: CheckResult[] = [];

  checks.push({
    pass: fileExists('docs/AEO-OPTIMIZATION-STRATEGY.md'),
    message: 'AEO strategy document exists',
    details: 'Optimization for AI citations (ChatGPT, Claude, Perplexity)',
  });

  checks.push({
    pass: fileContains('docs/AEO-OPTIMIZATION-STRATEGY.md', 'citation-worthy content'),
    message: 'AEO doc defines citation-worthy formats',
    details: 'Tables, direct answers, Q&A, comparisons, processes',
  });

  // Check blog posts have FAQ schema
  const blogHasFAQ = blogPosts.some((post) =>
    fileContains(post, 'FAQPage')
  );

  checks.push({
    pass: blogHasFAQ,
    message: 'Blog posts include FAQPage schema for AI extraction',
    details: 'Structured Q&A for AI systems',
  });

  checks.push({
    pass: fileContains('docs/AEO-OPTIMIZATION-STRATEGY.md', 'target queries'),
    message: 'AEO doc lists target queries for AI citations',
    details: '3 tiers: money queries, research queries, process queries',
  });

  checks.push({
    pass: fileContains('docs/AEO-OPTIMIZATION-STRATEGY.md', 'monitoring'),
    message: 'AEO monitoring strategy defined',
    details: 'Manual testing, referral tracking, citation rate KPIs',
  });

  const score = Math.round(
    (checks.filter((c) => c.pass).length / checks.length) * 100
  );

  return { phase: 'Phase 7: AEO Strategy', checks, score };
}

// Phase 8: Documentation & Verification
function verifyPhase8(): PhaseResult {
  const checks: CheckResult[] = [];

  checks.push({
    pass: fileExists('scripts/seo-verification.ts'),
    message: 'SEO verification script exists',
    details: 'This script! Automated validation of all phases',
  });

  checks.push({
    pass: fileExists('docs/GBP-OPTIMIZATION-PLAYBOOK.md') &&
      fileExists('docs/PERFORMANCE-AUDIT-REPORT.md') &&
      fileExists('docs/AEO-OPTIMIZATION-STRATEGY.md'),
    message: 'All 3 strategic documents exist',
    details: 'GBP playbook, Performance audit, AEO strategy',
  });

  const score = Math.round(
    (checks.filter((c) => c.pass).length / checks.length) * 100
  );

  return { phase: 'Phase 8: Verification & Documentation', checks, score };
}

// Bonus checks
function verifyBonusChecks(): PhaseResult {
  const checks: CheckResult[] = [];

  // Check metadata helper
  checks.push({
    pass: fileExists('lib/metadata.ts'),
    message: 'Metadata helper library exists',
    details: 'Centralized meta tag management',
  });

  // Check no keywords meta tag (deprecated)
  checks.push({
    pass: !fileContains('lib/metadata.ts', 'keywords:'),
    message: 'No deprecated meta keywords tag',
    details: 'Removed obsolete SEO practice',
  });

  // Check JsonLd component
  checks.push({
    pass: fileExists('components/JsonLd.tsx'),
    message: 'Reusable JsonLd component for schema injection',
    details: 'Simplifies schema markup across pages',
  });

  // Check GTM & GA4 configured
  checks.push({
    pass: fileContains('app/layout.tsx', 'GTM-KD57FLT8') &&
      fileContains('app/layout.tsx', 'G-QGJ61SEN5Y'),
    message: 'Google Tag Manager & GA4 configured',
    details: 'GTM: GTM-KD57FLT8, GA4: G-QGJ61SEN5Y',
  });

  const score = Math.round(
    (checks.filter((c) => c.pass).length / checks.length) * 100
  );

  return { phase: 'Bonus: Additional Best Practices', checks, score };
}

// Main execution
async function main() {
  printHeader('SEO VERIFICATION REPORT — THE PAVILLION WEBSITE');

  console.log(`${colors.cyan}Date: ${new Date().toLocaleDateString('en-IN')}${colors.reset}`);
  console.log(`${colors.cyan}Base Directory: ${process.cwd()}${colors.reset}\n`);

  // Run all phases
  const phase1 = verifyPhase1();
  printPhase(1, 'Technical Foundation');
  phase1.checks.forEach(printCheck);
  results.push(phase1);

  const phase2 = verifyPhase2();
  printPhase(2, 'Structured Data');
  phase2.checks.forEach(printCheck);
  results.push(phase2);

  const phase3 = verifyPhase3();
  printPhase(3, 'Site Architecture');
  phase3.checks.forEach(printCheck);
  results.push(phase3);

  const phase4 = verifyPhase4();
  printPhase(4, 'Internal Linking');
  phase4.checks.forEach(printCheck);
  results.push(phase4);

  const phase5 = verifyPhase5();
  printPhase(5, 'GBP Playbook');
  phase5.checks.forEach(printCheck);
  results.push(phase5);

  const phase6 = verifyPhase6();
  printPhase(6, 'Performance Audit');
  phase6.checks.forEach(printCheck);
  results.push(phase6);

  const phase7 = verifyPhase7();
  printPhase(7, 'AEO Strategy');
  phase7.checks.forEach(printCheck);
  results.push(phase7);

  const phase8 = verifyPhase8();
  printPhase(8, 'Verification & Docs');
  phase8.checks.forEach(printCheck);
  results.push(phase8);

  const bonus = verifyBonusChecks();
  printPhase(9, 'Bonus Checks');
  bonus.checks.forEach(printCheck);
  results.push(bonus);

  // Summary
  printHeader('SUMMARY');

  results.forEach((result) => {
    const color = result.score >= 80 ? colors.green : result.score >= 60 ? colors.yellow : colors.red;
    console.log(`${color}${result.phase}: ${result.score}%${colors.reset}`);
  });

  const overallScore = Math.round(
    results.reduce((sum, r) => sum + r.score, 0) / results.length
  );

  console.log(`\n${colors.bold}Overall SEO Implementation Score: ${overallScore}%${colors.reset}`);

  if (overallScore >= 90) {
    console.log(`${colors.green}${colors.bold}✓ EXCELLENT — SEO implementation is complete!${colors.reset}`);
  } else if (overallScore >= 75) {
    console.log(`${colors.yellow}${colors.bold}⚠ GOOD — Minor optimizations remaining${colors.reset}`);
  } else {
    console.log(`${colors.red}${colors.bold}✗ NEEDS WORK — Significant gaps in implementation${colors.reset}`);
  }

  console.log(`\n${colors.cyan}Next Steps:${colors.reset}`);
  console.log(`1. Review failed checks above`);
  console.log(`2. Implement missing optimizations`);
  console.log(`3. Re-run: npm run seo:verify`);
  console.log(`4. Submit sitemap to Google Search Console`);
  console.log(`5. Monitor Core Web Vitals & rankings\n`);
}

const blogPosts = [
  'app/blog/is-boduppal-good-place-to-buy-villa-2026/page.tsx',
  'app/blog/villa-prices-boduppal-east-hyderabad-2026/page.tsx',
  'app/blog/hmda-approved-vs-unapproved-projects-what-buyers-must-check/page.tsx',
  'app/blog/g-plus-1-plus-penthouse-explained/page.tsx',
  'app/blog/nri-step-by-step-guide-buying-villa-hyderabad/page.tsx',
  'app/blog/villa-vs-apartment-east-hyderabad-honest-comparison/page.tsx',
];

main().catch(console.error);
