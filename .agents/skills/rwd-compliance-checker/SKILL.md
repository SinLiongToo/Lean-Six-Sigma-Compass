---
name: rwd-compliance-checker
description: Enforce and verify Responsive Web Design (RWD), mobile touch optimization, JavaScript syntax, and interactive event scoping (button clickability) across all HTML, CSS, and JS changes.
---

# RWD Compliance, Mobile Optimization & Event Scope Integrity Skill

This skill enforces strict Responsive Web Design (RWD), mobile experience standards, and interactive event scope integrity whenever frontend code (HTML, CSS, JavaScript) is created or updated in this repository.

## 📱 Mandatory Quality & Architecture Checklist

### 1. Viewport & Safe Area Insets
- Meta tag must specify: `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">`.
- Top and bottom elements must respect iPhone notch and home indicator: `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.

### 2. iOS Safari & Mobile Viewport Units
- Modal overlays, drawers, and full-screen dialogs must use `100dvh` (dynamic viewport height) to adjust smoothly when the on-screen virtual keyboard opens.
- Text inputs must have `font-size: 16px !important;` to prevent iOS Safari auto-zoom.

### 3. Touch Targets & Gestures
- All clickable items, buttons, chips, and nav items must have:
  - `touch-action: manipulation;`
  - `-webkit-tap-highlight-color: transparent;`
  - Minimum tap target size (e.g. padding >= 8px 12px or min-height >= 36px/44px).

### 4. Orientation Adaptation (Portrait vs. Landscape)
- **Portrait Phone (`<= 768px`, height > width)**:
  - Sticky Header with top navigation.
  - Bottom-right floating menu FAB (`🧭 目錄`).
  - Search modal anchors to the very top.
- **Landscape Phone (`<= 960px`, height <= 500px)**:
  - Sidebar can be collapsed via `[◀]` button into `.sidebar-collapsed` to grant 100% full screen width to data tables/canvases.
  - Floating expand button (`[▶ 展開選單]`) available to restore sidebar.

### 5. Horizontal Scroll Containment
- Wide components (VSM canvas, parallel timeline lane, comparison matrix) must be contained in `overflow-x: auto; -webkit-overflow-scrolling: touch;` containers without causing whole-body horizontal scrolling.

### 6. Interactive Event & Global Scope Integrity (Button/Action Clickability) ⚠️
- **The Issue**: Browsers execute inline HTML event handlers (`onclick="foo(...)"`, `onchange="..."`, etc.) strictly in the global scope (`window`).
- **The Rule**:
  - If a function is declared inside a local scope or initialization closure (such as `function init() { function foo() { ... } }`), it is NOT accessible in `window` and clicking the button will fail silently with `ReferenceError`.
  - **Always explicitly export to `window`**:
    ```javascript
    function foo() { ... }
    window.foo = foo;
    ```
  - Or bind DOM events programmatically inside initialization:
    ```javascript
    const btn = document.getElementById('myBtn');
    if (btn) btn.onclick = () => foo();
    ```
  - The verification script automatically scans all inline handlers against JavaScript AST/scopes and flags any unexported or missing functions as blocking build errors.

### 7. Mathematical & Scientific Formula Presentation Standard (Zero External Dependencies) 📐
- **The Issue**: The application does NOT bundle or load external math typesetting libraries (MathJax / KaTeX) to preserve 100% offline, zero-dependency, ultra-fast single-file architecture. Raw LaTeX strings (e.g. `\frac`, `\mu`, `\sigma`, `\Delta`, `\times`, `\sqrt`, `\cdot`, `\rightarrow`) render as unparsed raw plaintext or garbled escape sequences (e.g. `$ ightarrow$`).
- **The Rule**:
  - **Standardize with Pure Unicode Math & Monospace Code Badges**: Always use semantic standard Unicode characters:
    - Multiplication: `×` or `·`
    - Greek symbols: `μ`, `σ`, `Δ`
    - Roots and exponents: `√`, `²`, `³`, `ⁿ`
    - Inequalities & Arrows: `≦`, `≧`, `≠`, `→`, `←`
    - Subscripts / Fractions: Standard linear layout with brackets, e.g. `Cpk = min[(USL - μ) / 3σ, (μ - LSL) / 3σ]`, `UCL = μ + 3σ`, `DPMO = (D / (U × O)) × 1,000,000`.
  - **Wrap in semantic `<code>` badges**:
    ```html
    <code>DPMO = (Defects / (Units × Opportunities)) × 1,000,000</code>
    ```
  - **Ensure responsive line wrapping**: Badges must have `word-break: break-word; white-space: normal;` to prevent breaking mobile layouts.

### 8. Interactive Canvas & Physics Visualizations (Zero External Dependencies) 🕸️
- Visual networking and data diagrams (e.g. Obsidian-style Books Connection Graph, VSM Interactive Canvas) must use native HTML5 `<canvas>` with self-contained vanilla JavaScript physics engines without external CDN libraries (D3, Cytoscape, etc.).
- **High-DPI Retina Support**: Canvas rendering buffers must be scaled using `window.devicePixelRatio` (`canvas.width = rect.width * dpr; ctx.scale(dpr, dpr)`) for crisp rendering on Retina / 4K screens.
- **Mobile Touch & Gestures**: Interactive canvas containers must specify `touch-action: none;` to ensure smooth multi-touch gestures (pan, pinch-to-zoom, node drag) without browser scroll interference.
- **Defensive API Fallbacks**: New Canvas 2D APIs (such as `ctx.roundRect`) must include backwards-compatible fallbacks for older Safari/WebKit environments.

## 🚀 Execution & Verification Command

Whenever HTML, CSS, or JS files are modified, run the automated verification suite:

```bash
node .agents/skills/rwd-compliance-checker/scripts/check_rwd.js
```

This automated test checks:
1. All 8 RWD & Mobile compatibility standards.
2. JavaScript syntax validity in all `<script>` tags.
3. 100% reachability of all inline event handlers (prevents unexported closure bugs).
4. Mathematical formula typography integrity (zero raw LaTeX fragments or broken escape sequences).
5. Header version badge presence and formatting.
6. Byte-for-byte synchronization between `index.html` and `lean-six-sigma-compass.html`.

Both `index.html` and `lean-six-sigma-compass.html` must pass with **0 errors** before committing.

---

## 📋 File Sync & Dual Deployment Workflow

After every HTML/CSS/JS change:

```powershell
# 1. Sync files (index.html is the single source of truth)
Copy-Item -Path "index.html" -Destination "lean-six-sigma-compass.html" -Force

# 2. Verify compliance & event integrity
node .agents/skills/rwd-compliance-checker/scripts/check_rwd.js

# 3. Commit and push
git add -A
git commit -m "feat/fix: <description>"
git push
```

> ⚠️ Use semicolons (`;`) not `&&` in PowerShell for chaining commands.

### 🌐 Dual-Channel Cloud Hosting & Enterprise Firewall Friendly
Pushing commits to `main` automatically deploys and mirrors the site to two independent platforms:
1. **GitHub Pages (Primary)**: `https://sinliongtoo.github.io/Lean-Six-Sigma-Compass/`
2. **Cloudflare Pages (Mirror / Corporate Firewall Friendly)**: `https://lean-six-sigma-compass.pages.dev/`
   - Bypasses corporate proxies and firewalls that block `*.github.io`.
   - Hosted on Cloudflare's global Anycast edge network with zero build configuration (Preset: `None`, Build command: blank, Output dir: `/`).

---

## 📚 Books Section Patterns

When adding a new book card to `data-section="books"`:

### Step 1 — CSS (book cover gradient)
Add after the last `.book-cover.*` rule in the `<style>` block:
```css
.book-cover.<slug> {
  background: linear-gradient(135deg, <dark> 0%, <mid> 40%, <accent> 80%, <highlight> 100%);
  border-right: 3px solid <highlight>;
}
```

### Step 2 — HTML (book card)
Insert before `</div><!-- /books-grid -->`:
```html
<div class="book-card">
  <div class="book-cover-wrap">
    <div class="book-cover <slug>">
      <div class="book-spine"></div>
      <div class="book-title-container">
        <div class="book-title-main">中文書名</div>
        <div class="book-title-sub">English Title</div>
      </div>
      <div class="book-author">Author Name</div>
    </div>
  </div>
  <div class="book-info">
    <h3><span class="zh">《全名》</span><span class="en">Full English Title</span></h3>
    <div class="book-meta">
      <span class="chip"><span class="zh">作者：...</span><span class="en">Author: ...</span></span>
      <span class="chip"><span class="zh">關聯：...</span><span class="en">LSS Mapping: ...</span></span>
    </div>
    <p>
      <span class="zh"><strong>核心概念：</strong> ...</span>
      <span class="en"><strong>Core Concept:</strong> ...</span>
    </p>
    <div class="book-lean-connection">
      <div class="connection-title">💡 <span class="zh">精實實務連結</span><span class="en">Lean Application Link</span></div>
      <ul>
        <li><span class="zh"><strong>主題</strong>：說明</span><span class="en"><strong>Topic</strong>: Explanation</span></li>
      </ul>
    </div>
  </div>
</div>
```

### No JS Changes Needed
The following functions wire up all book cards automatically on page load:
- `initBookCollapse()` — per-card collapse toggle + count badge injection
- `buildBooksTitleList()` — interactive clickable chip list of all book titles (shown when section is collapsed; click to expand, jump to card & pulse highlight)
- `toggleBooksGrid()` — section-level expand/collapse button handler

---

## 🏉 Agile Scrum Module Patterns (`data-section="scrum"`)

When maintaining or extending the Agile Scrum module (Section 21):
- **Sub-tab Architecture**: `switchScrumTab(tabId)` toggles between `['core', 'compass', 'gates', 'tools']`.
- **Scrum 3-5-3 Data**: Managed in `SCRUM_353_DATA`, interactive selection via `selectScrumItem(category, itemId)`.
- **Cynefin Complexity Navigator**: Managed in `CYNEFIN_EVAL_DATA` across 4 quadrants (`clear`, `complicated`, `complex`, `chaotic`), evaluated via `evaluateCynefin(domainKey)`.
- **DoD / DoR Quality Gates Workshop**:
  - Context presets: `DOD_DOR_DATA` across 3 presets (`sw`, `fab`, `ops`), switched via `switchDodDorContext(ctxKey)`.
  - Checklist manipulation: `toggleChecklistItem(gateType, index)`, `addCustomChecklistItem(gateType)`, `resetDodDorChecklist()`.
  - Export: `generateDodDorMarkdown()`, `copyDodDorMarkdown()`.
- **Interactive Agile Toolkit**:
  - User Story & INVEST: `generateUserStoryCard()`, `copyUserStoryCard()`.
  - Sprint Retrospective (Kaizen): `RETRO_FRAMEWORKS` supporting `sailboat`, `4ls`, `ssc`, handled by `switchRetroFramework(fKey)` and `copyRetroActionPlan()`.
  - Planning Poker (Fibonacci): `POKER_SCALE_DATA`, selected via `selectPokerCard(point)`.
- **Event Scoping Rule**: All inline handlers in the Scrum module (`onclick="switchScrumTab(...)"`, `onclick="selectScrumItem(...)"`, etc.) must remain explicitly exported to `window` (`window.switchScrumTab = switchScrumTab;`, etc.) to guarantee 100% reachability verification.

