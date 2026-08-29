# Project Rules: RWD & Mobile Quality Assurance

Whenever you update or modify HTML, CSS, or JavaScript in this project:
1. Ensure all changes strictly satisfy the **RWD Compliance Standards** (Viewport, Safe Area Insets, 100dvh, iOS Zoom Prevention, Touch targets, and Landscape/Portrait orientation compatibility).
2. Execute the verification script:
   ```bash
   node .agents/skills/rwd-compliance-checker/scripts/check_rwd.js
   ```
3. Confirm that both `index.html` and `lean-six-sigma-compass.html` remain 100% synchronized and pass all RWD checks with 0 errors before committing.
