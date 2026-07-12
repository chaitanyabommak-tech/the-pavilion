/**
 * Automated Performance Testing Script
 * Uses Google PageSpeed Insights API to test website performance
 *
 * Usage: node scripts/performance-test.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  apiKey: 'YOUR_GOOGLE_API_KEY', // Get free key at: https://developers.google.com/speed/docs/insights/v5/get-started
  urls: [
    'https://bommakugroup.com',
    'https://bommakugroup.com/villas-in-boduppal',
    'https://bommakugroup.com/the-pavillion',
    'https://bommakugroup.com/villas-near-uppal',
    'https://bommakugroup.com/3bhk-villas-boduppal'
  ],
  strategies: ['mobile', 'desktop'],
  categories: ['performance', 'accessibility', 'best-practices', 'seo']
};

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

/**
 * Make API request to PageSpeed Insights
 */
function testUrl(url, strategy) {
  return new Promise((resolve, reject) => {
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&category=performance&category=accessibility&category=best-practices&category=seo`;

    console.log(`${colors.cyan}Testing ${url} (${strategy})...${colors.reset}`);

    https.get(apiUrl, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve({ url, strategy, result });
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

/**
 * Extract key metrics from PageSpeed result
 */
function extractMetrics(result) {
  const lighthouseResult = result.lighthouseResult;

  return {
    scores: {
      performance: Math.round(lighthouseResult.categories.performance.score * 100),
      accessibility: Math.round(lighthouseResult.categories.accessibility.score * 100),
      bestPractices: Math.round(lighthouseResult.categories['best-practices'].score * 100),
      seo: Math.round(lighthouseResult.categories.seo.score * 100)
    },
    metrics: {
      fcp: lighthouseResult.audits['first-contentful-paint']?.displayValue || 'N/A',
      lcp: lighthouseResult.audits['largest-contentful-paint']?.displayValue || 'N/A',
      tbt: lighthouseResult.audits['total-blocking-time']?.displayValue || 'N/A',
      cls: lighthouseResult.audits['cumulative-layout-shift']?.displayValue || 'N/A',
      si: lighthouseResult.audits['speed-index']?.displayValue || 'N/A'
    }
  };
}

/**
 * Get color based on score
 */
function getScoreColor(score) {
  if (score >= 90) return colors.green;
  if (score >= 50) return colors.yellow;
  return colors.red;
}

/**
 * Print results to console
 */
function printResults(url, strategy, metrics) {
  console.log(`\n${colors.bold}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log(`${colors.cyan}${colors.bold}URL:${colors.reset} ${url}`);
  console.log(`${colors.cyan}${colors.bold}Device:${colors.reset} ${strategy.toUpperCase()}`);
  console.log(`${colors.bold}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

  // Scores
  console.log(`${colors.bold}SCORES:${colors.reset}`);
  console.log(`  Performance:     ${getScoreColor(metrics.scores.performance)}${metrics.scores.performance}${colors.reset}/100`);
  console.log(`  Accessibility:   ${getScoreColor(metrics.scores.accessibility)}${metrics.scores.accessibility}${colors.reset}/100`);
  console.log(`  Best Practices:  ${getScoreColor(metrics.scores.bestPractices)}${metrics.scores.bestPractices}${colors.reset}/100`);
  console.log(`  SEO:             ${getScoreColor(metrics.scores.seo)}${metrics.scores.seo}${colors.reset}/100`);

  // Core Web Vitals
  console.log(`\n${colors.bold}CORE WEB VITALS:${colors.reset}`);
  console.log(`  First Contentful Paint (FCP): ${metrics.metrics.fcp}`);
  console.log(`  Largest Contentful Paint (LCP): ${metrics.metrics.lcp}`);
  console.log(`  Total Blocking Time (TBT): ${metrics.metrics.tbt}`);
  console.log(`  Cumulative Layout Shift (CLS): ${metrics.metrics.cls}`);
  console.log(`  Speed Index (SI): ${metrics.metrics.si}`);
}

/**
 * Generate HTML report
 */
function generateHtmlReport(allResults) {
  const timestamp = new Date().toISOString();
  const reportDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Performance Report - The Pavillion</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f5f5f5;
      padding: 40px 20px;
      color: #333;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      font-size: 32px;
      margin-bottom: 10px;
      color: #1a1a1a;
    }
    .subtitle {
      color: #666;
      margin-bottom: 40px;
      font-size: 14px;
    }
    .summary {
      background: white;
      padding: 30px;
      border-radius: 8px;
      margin-bottom: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .result-card {
      background: white;
      padding: 30px;
      border-radius: 8px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .result-header {
      border-bottom: 2px solid #eee;
      padding-bottom: 15px;
      margin-bottom: 20px;
    }
    .url {
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
      word-break: break-all;
    }
    .strategy {
      display: inline-block;
      background: #e3f2fd;
      color: #1976d2;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      margin-top: 8px;
    }
    .scores {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    .score-box {
      text-align: center;
      padding: 20px;
      background: #f9f9f9;
      border-radius: 6px;
    }
    .score-label {
      font-size: 12px;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }
    .score-value {
      font-size: 36px;
      font-weight: 700;
    }
    .score-good { color: #0cce6b; }
    .score-average { color: #ffa400; }
    .score-poor { color: #ff4e42; }
    .metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
    .metric-item {
      padding: 15px;
      background: #f9f9f9;
      border-radius: 6px;
    }
    .metric-label {
      font-size: 11px;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .metric-value {
      font-size: 20px;
      font-weight: 600;
      color: #1a1a1a;
    }
    .footer {
      text-align: center;
      color: #999;
      font-size: 12px;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #eee;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Performance Report</h1>
    <div class="subtitle">The Pavillion by Bommaku Group · Generated on ${reportDate}</div>

    <div class="summary">
      <h2 style="margin-bottom: 15px;">📊 Summary</h2>
      <p style="color: #666; line-height: 1.6;">
        Automated performance testing across ${allResults.length} page${allResults.length !== 1 ? 's' : ''}
        (${config.urls.length} URL${config.urls.length !== 1 ? 's' : ''} ×
        ${config.strategies.length} device${config.strategies.length !== 1 ? 's' : ''}).
        Testing performed using Google PageSpeed Insights API.
      </p>
    </div>
`;

  allResults.forEach(({ url, strategy, metrics }) => {
    const getScoreClass = (score) => {
      if (score >= 90) return 'score-good';
      if (score >= 50) return 'score-average';
      return 'score-poor';
    };

    html += `
    <div class="result-card">
      <div class="result-header">
        <div class="url">${url.replace('https://bommakugroup.com', '').replace('https://', '') || 'Homepage'}</div>
        <span class="strategy">${strategy}</span>
      </div>

      <div class="scores">
        <div class="score-box">
          <div class="score-label">Performance</div>
          <div class="score-value ${getScoreClass(metrics.scores.performance)}">${metrics.scores.performance}</div>
        </div>
        <div class="score-box">
          <div class="score-label">Accessibility</div>
          <div class="score-value ${getScoreClass(metrics.scores.accessibility)}">${metrics.scores.accessibility}</div>
        </div>
        <div class="score-box">
          <div class="score-label">Best Practices</div>
          <div class="score-value ${getScoreClass(metrics.scores.bestPractices)}">${metrics.scores.bestPractices}</div>
        </div>
        <div class="score-box">
          <div class="score-label">SEO</div>
          <div class="score-value ${getScoreClass(metrics.scores.seo)}">${metrics.scores.seo}</div>
        </div>
      </div>

      <h3 style="margin-bottom: 15px; font-size: 14px; color: #666;">Core Web Vitals</h3>
      <div class="metrics">
        <div class="metric-item">
          <div class="metric-label">FCP</div>
          <div class="metric-value">${metrics.metrics.fcp}</div>
        </div>
        <div class="metric-item">
          <div class="metric-label">LCP</div>
          <div class="metric-value">${metrics.metrics.lcp}</div>
        </div>
        <div class="metric-item">
          <div class="metric-label">TBT</div>
          <div class="metric-value">${metrics.metrics.tbt}</div>
        </div>
        <div class="metric-item">
          <div class="metric-label">CLS</div>
          <div class="metric-value">${metrics.metrics.cls}</div>
        </div>
        <div class="metric-item">
          <div class="metric-label">Speed Index</div>
          <div class="metric-value">${metrics.metrics.si}</div>
        </div>
      </div>
    </div>
`;
  });

  html += `
    <div class="footer">
      Report generated on ${timestamp}<br>
      Powered by Google PageSpeed Insights API
    </div>
  </div>
</body>
</html>`;

  return html;
}

/**
 * Save JSON results
 */
function saveJsonResults(allResults) {
  const reportsDir = path.join(__dirname, '..', 'performance-reports');

  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const jsonPath = path.join(reportsDir, `performance-${timestamp}.json`);

  const jsonData = {
    timestamp: new Date().toISOString(),
    results: allResults.map(({ url, strategy, metrics }) => ({
      url,
      strategy,
      ...metrics
    }))
  };

  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));
  console.log(`\n${colors.green}✓${colors.reset} JSON results saved: ${jsonPath}`);

  return jsonPath;
}

/**
 * Save HTML report
 */
function saveHtmlReport(html) {
  const reportsDir = path.join(__dirname, '..', 'performance-reports');

  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const htmlPath = path.join(reportsDir, `performance-${timestamp}.html`);

  fs.writeFileSync(htmlPath, html);
  console.log(`${colors.green}✓${colors.reset} HTML report saved: ${htmlPath}`);

  return htmlPath;
}

/**
 * Main execution
 */
async function main() {
  console.log(`${colors.bold}${colors.cyan}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  AUTOMATED PERFORMANCE TESTING');
  console.log('  The Pavillion by Bommaku Group');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(colors.reset);

  console.log(`\n${colors.bold}Configuration:${colors.reset}`);
  console.log(`  URLs to test: ${config.urls.length}`);
  console.log(`  Strategies: ${config.strategies.join(', ')}`);
  console.log(`  Total tests: ${config.urls.length * config.strategies.length}`);
  console.log(`\n${colors.yellow}⏳ Starting tests... (this may take 2-5 minutes)${colors.reset}\n`);

  const allResults = [];

  try {
    // Test each URL with each strategy
    for (const url of config.urls) {
      for (const strategy of config.strategies) {
        const { result } = await testUrl(url, strategy);
        const metrics = extractMetrics(result);

        printResults(url, strategy, metrics);
        allResults.push({ url, strategy, metrics });

        // Rate limiting: wait 1 second between requests
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    // Generate reports
    console.log(`\n${colors.bold}${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
    console.log(`${colors.bold}Generating reports...${colors.reset}\n`);

    const html = generateHtmlReport(allResults);
    const htmlPath = saveHtmlReport(html);
    const jsonPath = saveJsonResults(allResults);

    console.log(`\n${colors.bold}${colors.green}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
    console.log(`${colors.bold}${colors.green}✓ Testing complete!${colors.reset}`);
    console.log(`${colors.bold}${colors.green}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

    console.log(`${colors.bold}Open the HTML report:${colors.reset}`);
    console.log(`  ${htmlPath.replace(/\\/g, '/')}\n`);

  } catch (error) {
    console.error(`${colors.red}Error during testing:${colors.reset}`, error.message);
    process.exit(1);
  }
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = { testUrl, extractMetrics };
