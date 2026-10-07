#!/usr/bin/env node
/**
 * COMPLIANCE CHECK GUARD
 *
 * Fails the build if banned terms appear in shipped code.
 * Runs as prebuild step to prevent HMDA/RERA claims from going live.
 *
 * BANNED TERMS (from Master Prompt RULE 2):
 * - HMDA / H.M.D.A / HMDA Circle / HMDA Registered / HMDA approved
 * - RERA (all forms)
 * - DTCP
 * - "approved layout"
 * - "all approvals in place" / "all legal approvals"
 * - "legally approved" / "fully approved"
 * - "approved for project finance" [EXCEPTION: Allowed per user override]
 * - "approved by major banks" [EXCEPTION: Allowed per user override]
 * - "bank approved" [EXCEPTION: Allowed per user override]
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// BANNED PATTERNS (case-insensitive)
// Bank approval exceptions are NOT in this list per user override
const BANNED_PATTERNS = [
  /\bHMDA\b/i,
  /\bH\.M\.D\.A\b/i,
  /\bHMDA Circle\b/i,
  /\bHMDA Registered\b/i,
  /\bHMDA approved\b/i,
  /\bHMDA-approved\b/i,
  /\bRERA\b/i,
  /\bR\.E\.R\.A\b/i,
  /\bRERA registered\b/i,
  /\bRERA approved\b/i,
  /\bRERA in process\b/i,
  /\bRERA registration\b/i,
  /\bDTCP\b/i,
  /\bapproved layout\b/i,
  /\ball approvals in place\b/i,
  /\ball legal approvals\b/i,
  /\blegally approved\b/i,
  /\bfully approved\b/i,
];

// Directories to scan
const SCAN_DIRS = ['src', 'app', 'components', 'data'];

// File extensions to check
const CHECK_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.mdx'];

// Files to exempt (only this script itself)
const EXEMPT_FILES = ['compliance-check.mjs'];

let violations = [];

function scanDirectory(dir) {
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    // Skip node_modules, .next, .git
    if (entry === 'node_modules' || entry === '.next' || entry === '.git' || entry === 'out') {
      continue;
    }

    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (stat.isFile()) {
      // Skip exempt files
      if (EXEMPT_FILES.includes(entry)) continue;

      // Only check relevant file types
      const hasRelevantExt = CHECK_EXTENSIONS.some(ext => fullPath.endsWith(ext));
      if (!hasRelevantExt) continue;

      checkFile(fullPath);
    }
  }
}

function checkFile(filePath) {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      BANNED_PATTERNS.forEach(pattern => {
        if (pattern.test(line)) {
          const match = line.match(pattern);
          violations.push({
            file: filePath.replace(rootDir + '/', ''),
            line: index + 1,
            term: match[0],
            context: line.trim().substring(0, 80),
          });
        }
      });
    });
  } catch (err) {
    // Ignore read errors (binary files, etc.)
  }
}

// ═══════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════

console.log('\n🔍 COMPLIANCE CHECK — Scanning for banned terms...\n');

SCAN_DIRS.forEach(dir => {
  const fullPath = join(rootDir, dir);
  try {
    scanDirectory(fullPath);
  } catch (err) {
    // Directory doesn't exist, skip it
  }
});

if (violations.length > 0) {
  console.error('❌ COMPLIANCE VIOLATION — Banned terms found:\n');
  violations.forEach(v => {
    console.error(`  ${v.file}:${v.line}`);
    console.error(`    Term: "${v.term}"`);
    console.error(`    Context: ${v.context}`);
    console.error('');
  });
  console.error(`Total violations: ${violations.length}`);
  console.error('\nBUILD BLOCKED — Remove all HMDA/RERA references before deployment.\n');
  process.exit(1);
} else {
  console.log('✅ COMPLIANCE CHECK PASSED — No banned terms found.\n');
  process.exit(0);
}
