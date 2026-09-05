# Lean Six Sigma Compass (Masa Tu 精實六標準差羅盤)

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?style=flat-square&logo=github)](https://sinliongtoo.github.io/Lean-Six-Sigma-Compass/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Zero Dependency](https://img.shields.io/badge/Dependencies-Zero%20(Pure%20HTML%2FCSS%2FJS)-orange?style=flat-square)](#)

一個專為精實六標準差（Lean Six Sigma, LSS）從業者、綠帶/黑帶學習者、高階技術主管與工程師設計的一站式數位全景指南與實戰工具箱。

全站為**純前端單一檔案靜態架構**，無須安裝後端伺服器或資料庫，數據完全保留在瀏覽器本地端，支援離線操作與極速秒開，並完美相容桌面、平板與 **iOS / Android 手機平台**。

---

## 🌟 核心設計特色

- 🟢 **100% 綠色單檔案 (Single File Web App)**：開箱即用，離線支援，零資安隱憂。
- 🌓 **智慧雙主題模式**：支援深色星空主題（Dark Mode，預設）與典雅高對比淺色主題（Light Mode）無縫切換。
- 🌐 **雙語即時切換 (Bilingual Toggle)**：全站支援繁體中文（預設）與英文（English）一鍵即時切換。
- 📱 **極致行動體驗 (Mobile & iOS Safari Native Optimized)**：
  - **釘選常駐 Header**：頂部控制列（選單、搜尋、語系、主題）隨滑隨現，支援毛玻璃濾鏡。
  - **手機版懸浮目錄按鈕 (FAB)**：畫面右下角配置快速導航圓角按鈕，單手大拇指輕鬆操作。
  - **iOS 深度適配**：適配 iPhone 瀏海與 Dynamic Island 安全區域（`safe-area-inset`）、動態視圖高度（`100dvh`）、防自動放大（`font-size: 16px`）與直立模式（Portrait Mode）搜尋置頂。
  - **切換自動置頂**：選取章節後自動關閉抽屜並回滾至頂部。
- ↩️ **無縫深度導覽與智慧返回棧 (Deep Linking & Navigation History Stack)**：
  - **URL Hash 與瀏覽器歷史同步**：各章節皆具備獨立 URL Hash（如 `#dmaic`, `#tools`, `#books`, `#vsm`），支援瀏覽器原生上一頁/下一頁（`history.pushState`）與手機側邊滑動返回手勢，網址可直接複製分享。
  - **跨模組跳轉智慧返回膠囊 (Contextual Back Pill)**：點擊任一交叉跳轉（如 Roadmap 標籤、DMAIC 推薦工具、全域搜尋結果、診斷推薦或書籍連結）進入其他模組時，畫面左下角自動浮現 `↩️ 返回「來源章節」` 膠囊按鈕，點擊即可一鍵原路返回並精確還原滾動閱讀視角。
- 🔍 **全域極速搜尋 (Global Search / Ctrl+K)**：支援中英文跨章節關鍵字檢索，高亮標記匹配內容並支援一鍵跳轉。

---

## 🧭 全站 22 大核心模組架構

```
Masa Tu 精實六標準差羅盤 (共 22 大核心模組)
 ├── 01. 核心思維 (Mindset)
 ├── 02. 證照地圖與模擬考試 (Belt Map & Exam Engine)
 ├── 03. 個人專案診斷與證照推薦 (Personal Project Diagnostics & Belt Recommendation)
 ├── 04. DMAIC / DMADV 雙循環 (DMAIC & DMADV Cycles)
 ├── 05. 精實六標準差導入路徑 (Roadmap)
 ├── 06. 真實案例與討論筆記 (Case Notes)
 ├── 07. 實戰工具地圖 (Tool Map)
 ├── 08. 綜合模擬運算工具箱 (Calculators: FMEA / Pugh / OEE / 5S-6S / RACI / Savings / 360°)
 ├── 09. A3 回饋報告產生器 (A3 Lean Project Builder)
 ├── 10. 任務優先評分工具 (Task Priority Scorer - Eisenhower / ICE / WSJF / CD3)
 ├── 11. 客戶需求追蹤系統 (ReqTrack)
 ├── 12. 精實會議與高階簡報表達藝術 (STAR vs. CARL Frameworks)
 ├── 13. 職場說不的藝術與防禦手冊 (Art of Saying No: Workplace Defense Playbook)
 ├── 14. 職場面對衝突的藝術與防禦手冊 (Workplace Conflict Resolution & Defense)
 ├── 15. 常見分析與認知謬誤 (Common Analytical & Cognitive Fallacies)
 ├── 16. 財務分析與精實機會 (Financial Analysis & Lean Opportunities)
 ├── 17. 團隊腦力激盪與視覺化工具 (Team Brainstorming & Visual Tools: Mind Map & KJ Board)
 ├── 18. 價值流程圖 VSM 互動產生器 (Value Stream Mapping Interactive Builder)
 ├── 19. 科技與半導體/AI 發展史羅盤 (Tech, Semiconductor & AI History Compass)
 ├── 20. 精實數位轉型與智慧製造 (Lean Digital Transformation & DX)
 ├── 21. 相關推薦書籍 (42 本跨領域經典精實書庫)
 └── 22. 詞彙釋義 (Glossary - 55+ 條核心術語全景辭典)
```

---

## 🛠️ 重點模組深度介紹

### 1. 📝 證照地圖與模擬考試引擎 (Exam Engine)
- **三種閱讀與測試模式**：
  - `實戰測驗 (Quiz)`：單題測驗、即時題目旗標（Flag）、高對比選項卡片、交卷後即時正誤解析與落點分析。
  - `讀書指引 (Study)`：列表式呈現所有試題、答案與考點解析。
  - `原始考題 (Raw)`：直接檢視考題的 Markdown 原始文件。
- **試卷庫與本機資料夾載入**：內建白帶、黃帶、綠帶、黑帶等 DMAIC 各階段試卷，支援批次載入本機 Markdown 考卷。

### 2. 🎙️ 精實會議與高階簡報表達藝術 (STAR vs. CARL)
- **精實會議推進助理**：
  - 雙披薩原則 (Two-Pizza Rule) 檢查與 60 分鐘時間箱 (Timeboxing)。
  - 3W 推進原則（Who does What by When）與單一 DRI 課責檢核。
  - 一鍵生成結構化 Markdown 會議備忘錄。
- **高階簡報與述職架構 (STAR vs. CARL)**：
  - 深入剖析為何針對高階主管（Director、VP、Principal/Staff、C-Suite），**CARL**（Context 25%、Action 30%、Result 20%、Learning 25%）遠勝於基礎 STAR。
  - 內建三大實戰範例（晶圓廠副總良率轉型、主任架構師高並發升級、資深工程師機台 DOE）。
  - 即時生成 4 大 Slide 骨架與**高管 3 分鐘電梯演說腳本**，支援一鍵複製。

### 3. 🛡️ 職場說不的藝術與防禦手冊 (Workplace Defense Playbook)
- **三大防禦模組**：Level 1 初階優雅婉拒、Level 2 資產與合規防禦（資安授權/維護成本轉嫁）、Level 3 突發救火與甩鍋防禦（合規防背鍋/顧問式指路）。
- **智能情境話術生成器**：依對象（直屬主管/跨部門主管/平級/客戶）與風格即時生成專業中英文溝通話術。

### 4. 📊 財務分析與精實機會 (Financial Analysis & Lean Opportunities)
- **精實財務診斷與成本拆解**：COGS、OPEX、CapEx、OCF、FCF、CCC 現金循環週期即時計算與星號優先級評估。
- **財報分析與 GAAP vs. Non-GAAP 避坑指南**：解析 SBC 股權激勵、無形資產攤銷等非現金調整，內建 TSMC、Nvidia、AMD、Apple、ASML 等科技巨頭毛利行業基準。

### 5. 🧭 科技與半導體/AI 發展史羅盤 (Tech History Compass)
- **七大科技歷史軌道**：人工智慧 (AI)、計算架構 (Computing)、半導體製程與封測 (Semiconductors - CoWoS/High-NA EUV/ATE 測試)、網際網路 (Internet)、通訊 (Communications)、儲存與記憶體 (Storage & HBM)、太空科技 (Space)。
- **平行時間軸 (Parallel View)**：1940～2027 年全球跨領域科技突破橫向對照。

### 6. 📚 相關推薦書籍 (42 本經典跨領域書庫)
精選與精實六標準差、心智模型、數據檢驗、專注力、敏捷試錯與生成式 AI 深度結合的 42 本跨界經典著作：
- 《職場人的生成式AI工作法》（《哈佛商業評論》- 個人精實數位轉型、知識工作消除浪費、人機協作自働化與生活全域適應）、《寫下來，事情就會發生》（Henriette Anne Klauser - 可視化管理、RAS 目標標記與方針管理）、《當下的力量》、《我可能錯了》、《5秒法則》、《做自己的人生財務長》、《跨能致勝》、《給予》、《真確》、《刻意練習》、《精實創業》、《豐田模式》、《目標：限制理論》、《原子習慣》、《致富心態》、《深度工作力》、《窮查理的普通常識》、《聰明犯錯》、《卡內基溝通與人際關係》、《當我談跑步時我談些什麼》、《垃圾車法則》、《活出意義來》、《與成功有約》等。

### 7. 🧮 實用工程與管理運算工具箱 (Calculators)
- **FMEA RPN 計算器**（嚴重度 S / 發生度 O / 難檢度 D）
- **Pugh 概念決策矩陣**（加權評分與基準方案對比）
- **OEE 綜合設備效率模擬器**（可用率 × 表現率 × 品質良率）
- **5S / 6S (EHS) 現場稽核系統**（動態 6 軸雷達圖與 Markdown 報告匯出）
- **RACI 職責分配矩陣編輯器**
- **專案財務效益節省計算機**（投資回收期與 ROI 報表）
- **360° 領導力回饋評估工具**（喬哈里窗、盲點與潛在優勢診斷）

---

## 🚀 快速開始

### 本地執行
1. 下載或克隆本專案至您的電腦：
   ```bash
   git clone https://github.com/SinLiongToo/Lean-Six-Sigma-Compass.git
   ```
2. 直接雙擊 `index.html`（或 `lean-six-sigma-compass.html`），即可在任何瀏覽器中離線開啟使用。

### 部署至 GitHub Pages
1. 在 GitHub 建立儲存庫並推送代碼：
   ```bash
   git push origin main
   ```
2. 進入專案的 **Settings** -> **Pages**。
3. 在 **Build and deployment** 下選擇 **Branch**: `main`、資料夾 `/ (root)`，點選 **Save** 即可自動發佈上線。

---

## 📄 授權條款 (License)

本專案採用 [MIT 授權條款](LICENSE) 開源。
歡迎自由使用、學習交流或作為企業內部精實流程改善之培訓輔助教材。
