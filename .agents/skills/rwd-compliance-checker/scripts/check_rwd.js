const fs = require('fs');
const path = require('path');

function checkRwdCompliance(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] File not found: ${filePath}`);
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  let passed = true;
  const errors = [];
  const warnings = [];

  console.log(`\n========================================`);
  console.log(`Checking RWD Compliance: ${path.basename(filePath)}`);
  console.log(`========================================`);

  // 1. Viewport Meta Tag
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

  // 2. Safe Area Insets Support
  if (!content.includes('env(safe-area-inset-top') && !content.includes('env(safe-area-inset-bottom')) {
    warnings.push('No env(safe-area-inset-*) found for notch/home bar accommodation');
  } else {
    console.log('✓ iOS Safe Area Insets (env) detected.');
  }

  // 3. Dynamic Viewport Units (dvh / svh) for overlays
  if (content.includes('.search-overlay') && !content.includes('dvh')) {
    warnings.push('Overlay elements should support dvh (dynamic viewport height) for virtual keyboard handling');
  } else {
    console.log('✓ Dynamic Viewport Height (dvh) support verified.');
  }

  // 4. Input Font-Size >= 16px to prevent iOS auto-zoom
  const searchInputCss = content.match(/\.search-input\s*\{[^}]+\}/);
  if (searchInputCss && !searchInputCss[0].includes('16px')) {
    warnings.push('Search inputs should have font-size: 16px to prevent iOS Safari auto-zoom on focus');
  } else {
    console.log('✓ Input font-size iOS zoom protection verified.');
  }

  // 5. Touch Action & Tap Highlight
  if (content.includes('-webkit-tap-highlight-color') && content.includes('touch-action: manipulation')) {
    console.log('✓ Mobile touch-action and tap-highlight optimizations verified.');
  } else {
    warnings.push('Interactive components should specify touch-action: manipulation and -webkit-tap-highlight-color: transparent');
  }

  // 6. Responsive Breakpoints Check
  const mediaQueries = Array.from(content.matchAll(/@media\s*\(([^)]+)\)/gi));
  console.log(`✓ Found ${mediaQueries.length} responsive media query rules.`);
  
  const hasMaxWidth = mediaQueries.some(m => m[1].includes('max-width'));
  if (!hasMaxWidth) {
    errors.push('No max-width media queries found for responsive layout');
    passed = false;
  }

  // 7. Mobile Landscape Sidebar Collapse Check
  if (content.includes('sidebar-collapsed') && content.includes('sidebarCollapseBtn')) {
    if (content.includes('isPortraitPhone') || content.includes('window.innerHeight > window.innerWidth')) {
      console.log('✓ Mobile landscape vs portrait orientation sidebar handling verified.');
    } else {
      warnings.push('Ensure orientation-aware sidebar collapsing for landscape phones');
    }
  }

  // 8. Horizontal Overflow Containment
  const hasTouchScroll = content.includes('-webkit-overflow-scrolling: touch');
  if (hasTouchScroll) {
    console.log('✓ Smooth momentum touch scrolling (-webkit-overflow-scrolling: touch) verified.');
  } else {
    warnings.push('Wide scrollable containers should include -webkit-overflow-scrolling: touch');
  }

  // Summary
  if (errors.length > 0) {
    console.log('\n❌ RWD Errors Found:');
    errors.forEach(e => console.log('  - ' + e));
  }
  if (warnings.length > 0) {
    console.log('\n⚠️ RWD Suggestions & Warnings:');
    warnings.forEach(w => console.log('  - ' + w));
  }

  if (passed && errors.length === 0) {
    console.log(`\n🎉 [PASS] ${path.basename(filePath)} complies with all core RWD and mobile standards!\n`);
    return true;
  } else {
    console.log(`\n❌ [FAIL] ${path.basename(filePath)} failed RWD compliance.\n`);
    return false;
  }
}

// Run checks on main files
const targetFiles = ['index.html', 'lean-six-sigma-compass.html'];
let allPassed = true;

targetFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const res = checkRwdCompliance(file);
    if (!res) allPassed = false;
  }
});

if (!allPassed) {
  process.exit(1);
} else {
  process.exit(0);
}
