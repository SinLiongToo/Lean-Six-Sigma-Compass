# Project Rules: Frontend Quality Assurance (RWD, Mobile & Event Scoping)

Whenever you update or modify HTML, CSS, or JavaScript in this project:

1. **RWD & Mobile Compliance Standards**:
   - Strictly satisfy Viewport, Safe Area Insets (`env(safe-area-inset-*)`), `100dvh`, iOS Zoom Prevention (`font-size: 16px`), Touch targets (`touch-action: manipulation; -webkit-tap-highlight-color: transparent;`), and Landscape/Portrait orientation compatibility.

2. **Interactive Event & Global Scope Integrity (Button/Action Clickability)**:
   - When an HTML element uses an inline event handler (`onclick="foo(...)"`, `onchange="..."`, etc.), `foo` MUST be accessible in the browser's global scope (`window`).
   - If `foo` is defined inside a local scope or initialization closure (e.g. `function init() { function foo() { ... } }`), you **MUST explicitly bind it to `window`**:
     ```javascript
     window.foo = foo;
     ```
   - Alternatively, attach DOM listeners programmatically via `element.addEventListener('click', ...)` or `element.onclick = ...`.
   - Never leave an inline event handler pointing to an unexported local function, as this causes buttons/actions to fail silently with zero response.

3. **Mathematical & Engineering Formula Presentation Standards (Pure Unicode & Monospace Code Badges)**:
   - To maintain zero runtime external dependencies and guarantee offline portability, NEVER insert raw LaTeX markup (e.g. `\frac`, `\mu`, `\sigma`, `\Delta`, `\times`, `\sqrt`, `\cdot`, `\rightarrow`) or wrap with LaTeX math delimiters (`$...$`, `\(...\)`).
   - Standardize all formulas with native Unicode characters (`×`, `μ`, `σ`, `Δ`, `√`, `²`, `·`, `≦`, `≧`, `→`) wrapped in styled `<code>` badges.
   - Always ensure formula badges have responsive line-break capability (`word-break: break-word`) to prevent horizontal overflow on small mobile screens.

4. **Execute Automated Verification**:
   - Run the compliance and integrity checker before committing:
     ```bash
     node .agents/skills/rwd-compliance-checker/scripts/check_rwd.js
     ```
   - This script automatically verifies:
     - All 8 core RWD and mobile layout standards.
     - JavaScript syntax validity in all `<script>` tags.
     - 100% reachability of all inline event handlers (detects any unexported closures or missing functions).
     - Clean mathematical typography and formula integrity (zero unrendered LaTeX escapes).
     - Header version badge presence and formatting.
     - Byte-for-byte synchronization between `index.html` and `lean-six-sigma-compass.html`.

5. **100% File Synchronization & Zero Errors**:
   - Confirm that both `index.html` and `lean-six-sigma-compass.html` remain 100% synchronized and pass all checks with **0 errors**.

6. **Dual-Channel Cloud Hosting & Continuous Deployment**:
   - Pushing commits to `main` automatically deploys to both:
     - **GitHub Pages**: `https://sinliongtoo.github.io/Lean-Six-Sigma-Compass/`
     - **Cloudflare Pages**: `https://lean-six-sigma-compass.pages.dev/` (for corporate firewall bypass)
