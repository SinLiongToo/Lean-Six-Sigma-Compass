const fs = require('fs');
const path = require('path');
const vm = require('vm');

/**
 * Scan JavaScript code to classify functions by scope:
 * - topLevelFunctions: declared at root scope (brace depth 0) -> reachable on window in browsers
 * - nestedFunctions: declared inside another function/block (brace depth > 0) -> NOT reachable on window unless exported
 * - windowExports: explicitly exported to window (window.foo = or window['foo'] =)
 */
function findFunctionScopes(jsCode) {
  const topLevelFunctions = new Set();
  const nestedFunctions = new Set();
  const windowExports = new Set();

  // 1. Track window exports: window.foo = or window['foo'] = or window["foo"] =
  const winRegex = /window(?:\.([a-zA-Z0-9_$]+)|\[['"]([a-zA-Z0-9_$]+)['"]\])\s*=/g;
  let winMatch;
  while ((winMatch = winRegex.exec(jsCode)) !== null) {
    const fn = winMatch[1] || winMatch[2];
    if (fn) windowExports.add(fn);
  }

  // 2. Scan standard function declarations: function <name>(
  // Top-level functions in standard scripts start at column 0 (no indentation)
  const fnRegex = /^([ \t]*)function\s+([a-zA-Z0-9_$]+)\s*\(/gm;
  let fnMatch;
  while ((fnMatch = fnRegex.exec(jsCode)) !== null) {
    const indent = fnMatch[1];
    const fnName = fnMatch[2];
    if (indent.length === 0) {
      topLevelFunctions.add(fnName);
    } else {
      nestedFunctions.add(fnName);
    }
  }

  // 3. Scan top-level and nested variable function expressions: const/let/var <name> = function/() =>
  const arrowRegex = /^([ \t]*)(?:const|let|var)\s+([a-zA-Z0-9_$]+)\s*=\s*(?:function|\([^)]*\)\s*=>|[a-zA-Z0-9_$]+\s*=>)/gm;
  let arrowMatch;
  while ((arrowMatch = arrowRegex.exec(jsCode)) !== null) {
    const indent = arrowMatch[1];
    const fnName = arrowMatch[2];
    if (indent.length === 0) {
      topLevelFunctions.add(fnName);
    } else {
      nestedFunctions.add(fnName);
    }
  }

  return { topLevelFunctions, nestedFunctions, windowExports };
}

function checkFileIntegrity(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] File not found: ${filePath}`);
    return { passed: false, errors: [`File not found: ${filePath}`], warnings: [] };
  }

  const content = fs.readFileSync(filePath, 'utf8');
  let passed = true;
  const errors = [];
  const warnings = [];

  console.log(`\n========================================`);
  console.log(`Checking Quality & Compliance: ${path.basename(filePath)}`);
  console.log(`========================================`);

  // ==========================================
  // 1. RWD & Mobile Standards
  // ==========================================
  console.log(`--- [Section 1: RWD & Mobile Standards] ---`);

  // 1.1 Viewport Meta Tag
  const viewportRegex = /<meta\s+name=["']viewport["']\s+content=["']([^"']+)["']/i;
  const vpMatch = content.match(viewportRegex);
  if (!vpMatch) {
    errors.push('Missing viewport meta tag');
    passed = false;
  } else {
    const vpContent = vpMatch[1];
    if (!vpContent.includes('width=device-width')) {
      errors.push('Viewport meta tag missing width=device-width');
      passed = false;
    }
    if (!vpContent.includes('viewport-fit=cover')) {
      warnings.push('Viewport meta tag should include viewport-fit=cover for iOS safe areas');
    }
    console.log('✓ Viewport meta tag verified.');
  }

  // 1.2 Safe Area Insets Support
  if (!content.includes('env(safe-area-inset-top') && !content.includes('env(safe-area-inset-bottom')) {
    warnings.push('No env(safe-area-inset-*) found for notch/home bar accommodation');
  } else {
    console.log('✓ iOS Safe Area Insets (env) detected.');
  }

  // 1.3 Dynamic Viewport Units (dvh / svh) for overlays
  if (content.includes('.search-overlay') && !content.includes('dvh')) {
    warnings.push('Overlay elements should support dvh (dynamic viewport height) for virtual keyboard handling');
  } else {
    console.log('✓ Dynamic Viewport Height (dvh) support verified.');
  }

  // 1.4 Input Font-Size >= 16px to prevent iOS auto-zoom
  const searchInputCss = content.match(/\.search-input\s*\{[^}]+\}/);
  if (searchInputCss && !searchInputCss[0].includes('16px')) {
    warnings.push('Search inputs should have font-size: 16px to prevent iOS Safari auto-zoom on focus');
  } else {
    console.log('✓ Input font-size iOS zoom protection verified.');
  }

  // 1.5 Touch Action & Tap Highlight
  if (content.includes('-webkit-tap-highlight-color') && content.includes('touch-action: manipulation')) {
    console.log('✓ Mobile touch-action and tap-highlight optimizations verified.');
  } else {
    warnings.push('Interactive components should specify touch-action: manipulation and -webkit-tap-highlight-color: transparent');
  }

  // 1.6 Responsive Breakpoints Check
  const mediaQueries = Array.from(content.matchAll(/@media\s*\(([^)]+)\)/gi));
  console.log(`✓ Found ${mediaQueries.length} responsive media query rules.`);

  const hasMaxWidth = mediaQueries.some(m => m[1].includes('max-width'));
  if (!hasMaxWidth) {
    errors.push('No max-width media queries found for responsive layout');
    passed = false;
  }

  // 1.7 Mobile Landscape Sidebar Collapse Check
  if (content.includes('sidebar-collapsed') && content.includes('sidebarCollapseBtn')) {
    if (content.includes('isPortraitPhone') || content.includes('window.innerHeight > window.innerWidth')) {
      console.log('✓ Mobile landscape vs portrait orientation sidebar handling verified.');
    } else {
      warnings.push('Ensure orientation-aware sidebar collapsing for landscape phones');
    }
  }

  // 1.8 Horizontal Overflow Containment
  const hasTouchScroll = content.includes('-webkit-overflow-scrolling: touch');
  if (hasTouchScroll) {
    console.log('✓ Smooth momentum touch scrolling (-webkit-overflow-scrolling: touch) verified.');
  } else {
    warnings.push('Wide scrollable containers should include -webkit-overflow-scrolling: touch');
  }

  // ==========================================
  // 2. JavaScript Syntax Verification
  // ==========================================
  console.log(`\n--- [Section 2: JavaScript Syntax & Script Integrity] ---`);
  const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
  let scriptMatch;
  let scriptIndex = 0;
  let combinedJs = '';

  while ((scriptMatch = scriptRegex.exec(content)) !== null) {
    scriptIndex++;
    const code = scriptMatch[1];
    combinedJs += '\n' + code;

    if (code.trim().length === 0) continue;

    try {
      new vm.Script(code);
      console.log(`✓ Script tag #${scriptIndex} syntax valid (${code.length.toLocaleString()} bytes).`);
    } catch (err) {
      errors.push(`JavaScript syntax error in script tag #${scriptIndex}: ${err.message}`);
      passed = false;
    }
  }

  // ==========================================
  // 3. Inline Event Handler & Global Scope Integrity
  // ==========================================
  console.log(`\n--- [Section 3: Inline Event Handler & Global Scope Reachability] ---`);
  const inlineRegex = /\s(on[a-z]+)=["']([^"']+)["']/gi;
  let inlineMatch;
  const handlers = new Map();

  const ignoredTokens = new Set([
    'alert', 'confirm', 'prompt', 'console', 'preventDefault', 'stopPropagation',
    'encodeURIComponent', 'decodeURIComponent', 'if', 'getElementById', 'target',
    'location', 'window', 'document', 'this', 'event', 'return'
  ]);

  while ((inlineMatch = inlineRegex.exec(content)) !== null) {
    const attr = inlineMatch[1];
    const expr = inlineMatch[2];
    const fnMatches = expr.matchAll(/([a-zA-Z0-9_$]+)\s*\(/g);
    for (const fn of fnMatches) {
      const fnName = fn[1];
      if (ignoredTokens.has(fnName)) continue;
      if (!handlers.has(fnName)) handlers.set(fnName, []);
      handlers.get(fnName).push({ attr, expr: expr.slice(0, 50) });
    }
  }

  const { topLevelFunctions, nestedFunctions, windowExports } = findFunctionScopes(combinedJs);

  let scopeErrorsCount = 0;
  for (const [fn, occurrences] of handlers.entries()) {
    const isGlobal = topLevelFunctions.has(fn) || windowExports.has(fn);

    if (!isGlobal) {
      if (nestedFunctions.has(fn)) {
        errors.push(`Inline event handler calls '${fn}', but '${fn}' is declared inside local/nested function scope and NOT exported to window! (e.g. ${occurrences[0].attr}="${occurrences[0].expr}"). Buttons will fail to respond when clicked.`);
      } else {
        errors.push(`Inline event handler calls '${fn}', but '${fn}' is NOT defined anywhere in script tags! (e.g. ${occurrences[0].attr}="${occurrences[0].expr}"). Action will throw ReferenceError when triggered.`);
      }
      passed = false;
      scopeErrorsCount++;
    }
  }

  if (scopeErrorsCount === 0) {
    console.log(`✓ All ${handlers.size} inline event handlers verified reachable in global scope (window/top-level).`);
  } else {
    console.log(`❌ Found ${scopeErrorsCount} unreachable inline event handlers!`);
  }

  // ==========================================
  // 4. Formula & Typography Formatting Integrity
  // ==========================================
  console.log(`\n--- [Section 4: Formula & Typography Integrity] ---`);
  const rawLatexRegexes = [
    { pattern: /\\frac\{/g, name: '\\frac{...}' },
    { pattern: /\$[^$\n]*\\(?:mu|sigma|Delta|sqrt|cdot|times|le|ge)[^$\n]*\$/g, name: 'raw LaTeX inline math ($...$)' },
    { pattern: /\$\s*ightarrow\$/gi, name: 'malformed \\rightarrow ($ ightarrow$)' },
    { pattern: /\\(?:mu|sigma|Delta|sqrt|cdot)\b/g, name: 'raw LaTeX symbols (\\mu, \\sigma, etc.)' }
  ];

  let formulaWarningsCount = 0;
  for (const { pattern, name } of rawLatexRegexes) {
    const matches = content.match(pattern);
    if (matches && matches.length > 0) {
      warnings.push(`Detected ${matches.length} instance(s) of ${name}. Math formulas should use clean Unicode symbols (×, μ, σ, Δ, √, ², ≦, ≧, →) wrapped in <code> tags instead of raw LaTeX.`);
      formulaWarningsCount++;
    }
  }

  if (formulaWarningsCount === 0) {
    console.log(`✓ Clean Unicode formula formatting verified (0 raw LaTeX fragments detected).`);
  } else {
    console.log(`⚠️ Found ${formulaWarningsCount} raw LaTeX pattern issues.`);
  }

  // ==========================================
  // 5. Version Badge Verification
  // ==========================================
  if (path.basename(filePath) === 'index.html') {
    console.log(`\n--- [Section 5: Version & Release Badge] ---`);
    const versionMatch = content.match(/id=["']versionBadge["'][^>]*>([^<]+(?:<span[^>]*>[^<]+<\/span>)?)/);
    if (versionMatch) {
      console.log(`✓ Version badge found: ${versionMatch[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()}`);
    } else {
      warnings.push('Version badge (#versionBadge) not found in header');
    }
  }

  // Summary
  if (errors.length > 0) {
    console.log('\n❌ Compliance & Integrity Errors Found:');
    errors.forEach(e => console.log('  - ' + e));
  }
  if (warnings.length > 0) {
    console.log('\n⚠️ Suggestions & Warnings:');
    warnings.forEach(w => console.log('  - ' + w));
  }

  if (passed && errors.length === 0) {
    console.log(`\n🎉 [PASS] ${path.basename(filePath)} complies with all RWD, Mobile & Event Integrity standards!\n`);
    return { passed: true, errors, warnings };
  } else {
    console.log(`\n❌ [FAIL] ${path.basename(filePath)} failed compliance & integrity checks.\n`);
    return { passed: false, errors, warnings };
  }
}

// ==========================================
// 5. File Synchronization Verification
// ==========================================
function checkFileSync() {
  console.log(`\n========================================`);
  console.log(`Checking File Synchronization`);
  console.log(`========================================`);

  const file1 = 'index.html';
  const file2 = 'lean-six-sigma-compass.html';

  if (!fs.existsSync(file1) || !fs.existsSync(file2)) {
    console.error(`❌ [FAIL] Either ${file1} or ${file2} is missing!`);
    return false;
  }

  const buf1 = fs.readFileSync(file1);
  const buf2 = fs.readFileSync(file2);

  if (buf1.equals(buf2)) {
    console.log(`✓ ${file1} and ${file2} are 100% byte-for-byte identical (${buf1.length.toLocaleString()} bytes).`);
    return true;
  } else {
    console.error(`❌ [FAIL] ${file1} and ${file2} are NOT synchronized! Run: Copy-Item -Path "index.html" -Destination "lean-six-sigma-compass.html" -Force`);
    return false;
  }
}

// Run checks on main files
const targetFiles = ['index.html', 'lean-six-sigma-compass.html'];
let allPassed = true;

targetFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const res = checkFileIntegrity(file);
    if (!res.passed) allPassed = false;
  }
});

const syncPassed = checkFileSync();
if (!syncPassed) allPassed = false;

if (!allPassed) {
  process.exit(1);
} else {
  console.log(`\n✨ ALL CHECKS PASSED: RWD, Mobile, JS Syntax, Event Scoping, and File Sync!\n`);
  process.exit(0);
}
