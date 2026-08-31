---
name: rwd-compliance-checker
description: Enforce and verify Responsive Web Design (RWD), mobile touch optimization, and iOS/Android compatibility across all HTML, CSS, and JS changes.
---

# RWD Compliance & Mobile Optimization Skill

This skill enforces strict Responsive Web Design (RWD) and mobile experience standards whenever frontend code (HTML, CSS, JavaScript) is created or updated in this repository.

## 📱 Mandatory RWD Checklist

1. **Viewport & Safe Area Insets**:
   - Meta tag must specify: `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">`.
   - Top and bottom elements must respect iPhone notch and home indicator: `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.

2. **iOS Safari & Mobile Viewport Units**:
   - Modal overlays, drawers, and full-screen dialogs must use `100dvh` (dynamic viewport height) to adjust smoothly when the on-screen virtual keyboard opens.
   - Text inputs must have `font-size: 16px !important;` to prevent iOS Safari auto-zoom.

3. **Touch Targets & Gestures**:
   - All clickable items, buttons, chips, and nav items must have:
     - `touch-action: manipulation;`
     - `-webkit-tap-highlight-color: transparent;`
     - Minimum tap target size (e.g. padding >= 8px 12px or min-height >= 36px/44px).

4. **Orientation Adaptation (Portrait vs. Landscape)**:
   - **Portrait Phone (`<= 768px`, height > width)**:
     - Sticky Header with top navigation.
     - Bottom-right floating menu FAB (`🧭 目錄`).
     - Search modal anchors to the very top.
   - **Landscape Phone (`<= 960px`, height <= 500px)**:
     - Sidebar can be collapsed via `[◀]` button into `.sidebar-collapsed` to grant 100% full screen width to data tables/canvases.
     - Floating expand button (`[▶ 展開選單]`) available to restore sidebar.

5. **Horizontal Scroll Containment**:
   - Wide components (VSM canvas, parallel timeline lane, comparison matrix) must be contained in `overflow-x: auto; -webkit-overflow-scrolling: touch;` containers without causing whole-body horizontal scrolling.

## 🚀 Execution & Verification Command

Whenever HTML, CSS, or JS files are modified, run the automated RWD compliance test:

```bash
node .agents/skills/rwd-compliance-checker/scripts/check_rwd.js
```

Both `index.html` and `lean-six-sigma-compass.html` must pass with **0 errors** before committing.

---

## 📋 File Sync Workflow

After every HTML/CSS/JS change:

```powershell
# 1. Sync files
Copy-Item -Path "index.html" -Destination "lean-six-sigma-compass.html" -Force

# 2. Verify RWD compliance
node .agents/skills/rwd-compliance-checker/scripts/check_rwd.js

# 3. Commit and push
git add -A
git commit -m "feat/fix: <description>"
git push
```

> ⚠️ Use semicolons (`;`) not `&&` in PowerShell for chaining commands.

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
- `buildBooksTitleList()` — chip list of all book titles (shown when section is collapsed)
- `toggleBooksGrid()` — section-level expand/collapse button handler
