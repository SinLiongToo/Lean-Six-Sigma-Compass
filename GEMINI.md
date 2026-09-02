# Project Rules: RWD & Mobile Quality Assurance

Whenever you update or modify HTML, CSS, or JavaScript in this project:
1. Ensure all changes strictly satisfy the **RWD Compliance Standards** (Viewport, Safe Area Insets, 100dvh, iOS Zoom Prevention, Touch targets, and Landscape/Portrait orientation compatibility).
2. Execute the verification script:
   ```bash
   node .agents/skills/rwd-compliance-checker/scripts/check_rwd.js
   ```
3. Confirm that both `index.html` and `lean-six-sigma-compass.html` remain 100% synchronized and pass all RWD checks with 0 errors before committing.

---

# Project Architecture & Content Conventions

## 📁 File Sync Rule
- **`index.html`** is the single source of truth.
- **`lean-six-sigma-compass.html`** must always be a byte-for-byte copy of `index.html`.
- After every change, run: `Copy-Item -Path "index.html" -Destination "lean-six-sigma-compass.html" -Force`

---

## 📚 Books Section (`data-section="books"`)

### Adding a New Book
Each book requires **two additions** (no JS changes needed):

**① CSS — book cover gradient** (inside `<style>`, after the last `.book-cover.*` rule):
```css
.book-cover.<slug> {
  background: linear-gradient(135deg, <dark> 0%, <mid> 40%, <accent> 80%, <highlight> 100%);
  border-right: 3px solid <highlight>;
}
```

**② HTML — book card** (inside `.books-grid`, before `</div><!-- /books-grid -->`):
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
    <h3><span class="zh">《中文全名》</span><span class="en">English Full Title</span></h3>
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

### Books Section UX Features (DO NOT remove or break)

| Feature | Implementation | Element |
|---|---|---|
| **Per-card collapsible** | Click title row → hides cover + body, shows title + arrow only | `initBookCollapse()` JS |
| **Section toggle button & Title chips** | Hides grid, shows interactive clickable chip list of all book titles when collapsed (click to expand, smooth-scroll & pulse highlight card) | `toggleBooksGrid()` + `buildBooksTitleList()` JS |
| **Book count badge** | Auto-counts `.book-card` elements, injected into `#booksHeading` | `initBookCollapse()` JS |
| **Bilingual** | All content uses `.zh` / `.en` span pairs (including title chips) | Site-wide language toggle CSS |

> All three JS functions (`initBookCollapse`, `toggleBooksGrid`, `buildBooksTitleList`) wire up new cards automatically — no extra JS needed when adding books.

### Books Added (as of 2026-09-01)

| # | 中文書名 | English Title | CSS slug | Key Theme |
|---|---|---|---|---|
| 1 | 清單革命 | The Checklist Manifesto | `checklist-manifesto` | Standard Work, Poka-Yoke |
| 2 | 就位 | Work Clean | `work-clean` | 5S, SMED |
| 3 | 自律就是自由 | Discipline Equals Freedom | `discipline-equals-freedom` | 5S Sustain |
| 4 | 複利效應 | The Compound Effect | `the-compound-effect` | Kaizen |
| 5 | 先問，為什麼 | Start With Why | `start-with-why` | Voice of Customer |
| 6 | 原子習慣 | Atomic Habits | `atomic-habits` | Kaizen, Standard Work |
| 7 | 決斷的演算 | Algorithms to Live By | `algorithms-to-live-by` | Data-Driven Decision |
| 8 | 分人主義 | Dividual | `dividual` | Lean Leadership |
| 9 | 人慈 | Humankind | `humankind` | Respect for People |
| 10 | 黑天鵝效應 | The Black Swan | `black-swan` | Risk & Variation |
| 11 | 佛教系統論 | Buddhism & Systems | `buddhism-system` | Systems Thinking |
| 12 | 輕鬆駕馭意志力 | Effortless | `effortless` | Muri Prevention |
| 13 | 80/20 法則 | The 80/20 Principle | `pareto-8020` | Pareto Analysis |
| 14 | 極簡主義 | Minimalism | `minimalism` | Waste Elimination |
| 15 | 原則 | Principles | `principles` | Data-Driven Culture |
| 16 | 起步 | Start | `start-acuff` | Kaizen Initiation |
| 17 | 完成 | Finish | `finish-acuff` | Project Completion |
| 18 | 沉思錄 | Meditations | `meditations` | Stoic Leadership |
| 19 | 快思慢想 | Thinking, Fast and Slow | `thinking-fast-slow` | Cognitive Bias & MSA |
| 20 | 雜訊 | Noise | `noise-book` | Variation & MSA |
| 21 | 反脆弱 | Antifragile | `antifragile` | Resilience & VUCA |
| 22 | 駕馭情緒 | Master Your Emotions | `master-your-emotions` | Lean Leadership |
| 23 | 贏家通吃 | Winner Take All | `winner-take-all` | Strategic Focus |
| 24 | 超速學習 | Ultralearning | `ultralearning` | Rapid Skill Acquisition |
| 25 | 你要如何衡量你的人生 | How Will You Measure Your Life | `measure-your-life` | Purpose & Kaizen |
| 26 | 活出意義來 | Man's Search for Meaning | `mans-search-meaning` | Purpose-Driven Lean |
| 27 | 與成功有約 | The 7 Habits | `seven-habits` | Personal Effectiveness |
| 28 | 垃圾車法則 | The Law of the Garbage Truck | `garbage-truck` | Waste of Energy |
| 29 | 犯錯的價值 | Right Kind of Wrong | `right-kind-of-wrong` | Intelligent Failure |
| 30 | 人際關係 | How to Win Friends | `how-to-win-friends` | Stakeholder Management |
| 31 | 窮查理寶典 | Poor Charlie's Almanack | `poor-charlie` | Mental Models |
| 32 | 關於跑步 | What I Talk About When I Talk About Running | `running-murakami` | Discipline & Flow |
| 33 | 刻意練習 | Peak | `peak-deliberate-practice` | Deliberate Practice |
| 34 | 真確 | Factfulness | `factfulness` | Data-Based DMAIC |
| 35 | 給予 | Give and Take | `give-and-take` | Lean Life, Boundary Setting |
| 36 | 跨能致勝 | Range | `range` | VUCA Adaptability, Multi-Skill |
| 37 | 做自己的人生財務長 | Family Inc. | `life-cfo` | OpEx Cost Control, Personal P&L, Family CFO |

---

## 🌐 Bilingual Content Rule
All user-visible text must use `<span class="zh">...</span><span class="en">...</span>` pairs. The site-wide language toggle controls visibility via CSS.

## 🎨 Design Tokens
| Token | Usage |
|---|---|
| `var(--amber)` | Accent: badges, connection titles, highlights |
| `var(--panel)` | Card / panel background |
| `var(--panel-border)` | Card border color |
| `var(--ink)` | Primary text |
| `var(--muted)` | Secondary / dimmed text |
| `var(--primary)` | Action buttons |
| `var(--primary-dark)` | Button hover state |
