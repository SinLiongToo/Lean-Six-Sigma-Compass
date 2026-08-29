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
