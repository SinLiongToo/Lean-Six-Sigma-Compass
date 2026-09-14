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

## 🧭 全站 23 大核心模組架構

```
Masa Tu 精實六標準差羅盤 (共 23 大核心模組)
 ├── 01. 核心思維 (Mindset)
 ├── 02. 證照地圖與模擬考試 (Belt Map & Exam Engine)
 ├── 03. 個人專案診斷與證照推薦 (Personal Project Diagnostics & Belt Recommendation)
 ├── 04. DMAIC / DMADV 雙循環與專案定義三大核心模板 (DMAIC, DMADV, SIPOC, Project Charter, CTQ/COT Tree)
 ├── 05. 精實六標準差導入路徑 (Roadmap)
 ├── 06. 真實案例與討論筆記 (Case Notes)
 ├── 07. 實戰工具地圖 (Tool Map)
 ├── 08. 綜合模擬運算工具箱 (Calculators: FMEA / Pugh / OEE / 5S-6S / RACI / Savings / 360°)
 ├── 09. A3 回饋報告產生器 (A3 Lean Project Builder)
 ├── 10. 任務優先評分工具 (Task Priority Scorer - Eisenhower / ICE / WSJF / CD3)
 ├── 11. 客戶需求追蹤系統 (ReqTrack)
 ├── 12. 精實會議與高階簡報表達藝術 (STAR vs. CARL Frameworks)
 ├── 13. 職場說不的藝術與防禦手冊 (Art of Saying No: Workplace Defense Playbook - 14 大實戰防身神功)
 ├── 14. 職場面對衝突的藝術與防禦手冊 (Workplace Conflict Resolution & Defense)
 ├── 15. 常見分析與認知謬誤 (Common Analytical & Cognitive Fallacies - 18 大思維陷阱與防禦機制)
 ├── 16. 財務分析與精實機會 (Financial Analysis & Lean Opportunities)
 ├── 17. 團隊腦力激盪與視覺化工具 (Team Brainstorming & Visual Tools: Mind Map & KJ Board)
 ├── 18. 價值流程圖 VSM 互動產生器 (Value Stream Mapping Interactive Builder)
 ├── 19. 科技與半導體/AI 發展史羅盤 (Tech, Semiconductor & AI History Compass)
 ├── 20. 精實數位轉型與智慧製造 (Lean Digital Transformation & DX)
 ├── 21. 企業組織全景架構與跨部門升級求助板模 (Org Chart & Cross-Functional Escalation Playbook)
 ├── 22. 相關推薦書籍 (45 本跨領域經典精實書庫)
 └── 23. 詞彙釋義 (Glossary - 55+ 條核心術語全景辭典)
```

---

## 🛠️ 重點模組深度介紹

### 1. 📝 證照地圖與模擬考試引擎 (Exam Engine)
- **三種閱讀與測試模式**：
  - `實戰測驗 (Quiz)`：單題測驗、即時題目旗標（Flag）、高對比選項卡片、交卷後即時正誤解析與落點分析。
  - `讀書指引 (Study)`：列表式呈現所有試題、答案與考點解析。
  - `原始考題 (Raw)`：直接檢視考題的 Markdown 原始文件。
- **試卷庫與本機資料夾載入**：內建白帶、黃帶、綠帶、黑帶等 DMAIC 各階段試卷，支援批次載入本機 Markdown 考卷。

### 2. 🔄 DMAIC / DMADV 雙循環與專案定義三大核心模板 (Define Phase Core Matrix)
- **五合一導覽分頁**：緊密整合既有流程改善 `DMAIC`、新流程設計 `DMADV`、高階流程界定 `SIPOC 流程圖`、專案立項契約 `Project Charter 專案憲章` 與關鍵需求轉化 `CTQ / COT 關鍵品質與交付特性樹`。
- **雙大頂級實戰案例即時切換 (Dual Real-World Industry Presets)**：
  - ⚡ **案例一：12 吋晶圓廠 N3 先進製程晶圓邊緣良率攻堅改善 (Project Aegis)**
    - **SIPOC 流程圖**：完整收錄矽晶圓基板商、EUV 光阻化學材料、ASML Scanner / Lam 乾蝕刻機台、超純水 UPW/CDA、五大高階製程步驟（旋塗、EUV 曝光、PEB 顯影、乾蝕刻、Inline CD-SEM/KLA 檢驗）、CD 均勻度與 Klarf 缺陷圖譜輸出、以及下游 CMP、良率整合 (YE/PIE) 與 Tier-1 晶片客戶。
    - **Project Charter 專案憲章 (六宮格精實版)**：聚焦 N3 晶圓邊緣良率自 84.2% 提升至 ≧ 92.5%、缺陷密度 D0 降至 0.045/cm²、年化節省 165 萬美元之 SMART 目標陳述、嚴謹界定 In-Scope 與 Out-of-Scope、跨部門 DRI 職掌與 DMAIC 16 週里程碑審查。
    - **CTQ / COT 關鍵品質樹**：將 VOC 客戶聲音分解為關鍵驅動因子（Drivers），向下轉化為可量測之關鍵品質特性（CTQ，如 CD 3.2nm ±0.15nm、D0 ≦ 0.045/cm²）與關鍵交付營運時間特性（COT/CTD，如單批過站 Cycle Time ≦ 4.2h、機台換模 Setup ≦ 12min）。
  - 🔬 **案例二：ASML 艾司摩爾 EUV 曝光機潔淨組裝廠 (Project Apollo-NXE)**
    - **SIPOC 流程圖**：解構荷蘭 Veldhoven 超高潔淨組裝廠端到端流程，涵蓋蔡司 (Zeiss SMT) 光學投影鏡箱 (POB)、TRUMPF 30kW CO2 脈衝雷射、Cymer 錫滴產生器、ISO 1 級超高真空主機架裝配、物鏡雷射干涉調對、TwinScan 雙工件台磁浮校正、Intermediate Focus 250W EUV 點火導通驗證、動態套刻出廠測試 (FAT)，以及台積電、Intel、美光等 GigaFab 客戶開箱驗收 (SAT)。
    - **Project Charter 專案憲章 (六宮格精實版)**：針對一台造價高達 1.8~3.5 億歐元之 EUV 機台，解決工廠出廠測試 (FAT) 平均耗時 86.4 天之產能瓶頸，設定在 18 週內將組裝週期壓縮至 ≦ 64.0 天 (-25.9%)、初檢合格率提升至 ≧ 94%、年化釋放 4 台高階 EUV 機台產能並加速 7.2 億歐元營收認列之宏大目標。
    - **CTQ / COT 關鍵品質樹**：將全球客戶「準時交機開箱」與「零光學像差」聲音拆解為出廠週期時間特性（COT: 總 FAT 週期 ≦ 64 天、POB 物鏡對位 ≦ 8.0 天）、光學波前與套刻特性（CTQ: 波前像差 RMS ≦ 0.048nm、動態套刻 DCO ≦ 1.10nm）、以及超高真空與分子微污染特性（CTQ: 氦氣測漏 ≦ 1.0×10⁻¹⁰ mbar·l/s、RGA 碳氫化合物殘留 ≦ 5.0×10⁻¹² mbar）。
- **一鍵式生產力功能**：支援一鍵切換/重設晶圓廠或 ASML 機台案例、一鍵複製為標準格式化 Markdown 報告。

### 3. 🎙️ 精實會議與高階簡報表達藝術 (STAR vs. CARL)
- **精實會議推進助理**：
  - 雙披薩原則 (Two-Pizza Rule) 檢查與 60 分鐘時間箱 (Timeboxing)。
  - 3W 推進原則（Who does What by When）與單一 DRI 課責檢核。
  - 一鍵生成結構化 Markdown 會議備忘錄。
- **高階簡報與述職架構 (STAR vs. CARL)**：
  - 深入剖析為何針對高階主管（Director、VP、Principal/Staff、C-Suite），**CARL**（Context 25%、Action 30%、Result 20%、Learning 25%）遠勝於基礎 STAR。
  - 內建三大實戰範例（晶圓廠副總良率轉型、主任架構師高並發升級、資深工程師機台 DOE）。
  - 即時生成 4 大 Slide 骨架與**高管 3 分鐘電梯演說腳本**，支援一鍵複製。

### 4. 🛡️ 職場說不的藝術與防禦手冊 (Workplace Defense Playbook)
- **四大防禦模組與 14 大實戰金句**：Level 1 初階優雅婉拒、Level 2 資產與合規防禦（資安授權/維護成本轉嫁）、Level 3 突發救火與甩鍋防禦（合規防背鍋/顧問式指路）、Level 4 工程數據與邏輯防禦（14 大職場防身神功，涵蓋防後見之明事後諸葛、防事後歸因、防通靈式需求、防倉促定罪等）。
- **智能情境話術生成器**：依對象（直屬主管/跨部門主管/平級/客戶）與風格即時生成專業中英文溝通話術。

### 5. 📊 財務分析與精實機會 (Financial Analysis & Lean Opportunities)
- **精實財務診斷與成本拆解**：COGS、OPEX、CapEx、OCF、FCF、CCC 現金循環週期即時計算與星號優先級評估。
- **財報分析與 GAAP vs. Non-GAAP 避坑指南**：解析 SBC 股權激勵、無形資產攤銷等非現金調整，內建 TSMC、Nvidia、AMD、Apple、ASML 等科技巨頭毛利行業基準。

### 6. 🧭 科技與半導體/AI 發展史羅盤 (Tech History Compass)
- **七大科技歷史軌道**：人工智慧 (AI)、計算架構 (Computing)、半導體製程與封測 (Semiconductors - CoWoS/High-NA EUV/ATE 測試)、網際網路 (Internet)、通訊 (Communications)、儲存與記憶體 (Storage & HBM)、太空科技 (Space)。
- **平行時間軸 (Parallel View)**：1940～2027 年全球跨領域科技突破橫向對照。

### 7. 🏛️ 企業組織全景架構與跨部門升級求助板模 (Org Chart & Escalation Playbook)
- **雙架構模式切換**：
  - `半導體與高科技製造業全景架構`：深入覆蓋晶圓代工 (Foundry)、IDM 與封測 12 大核心部門（經營決策 C-Suite、先進製程研發 TD、製程整合 PIE、模組 PE、設備 EE、製造營運 Fab Ops、廠務與環安衛 Facility/EHS、品質可靠度 QA/CQE、供應鏈外包 Sourcing/OSAT、業務 FAE、CIM 自動化 MES、財務成本會計）。
  - `跨國通用型大企業矩陣架構`：完整解構事業群 (BU P&L) × 區域市場 (Geographies) × 總部共享職能 (Platform, Ops, QA, IT, FP&A, HRBP, Legal) 雙軸矩陣與實線/虛線回報鏈。
- **部門作戰情報檔案 (Dossier)**：點擊任一部門節點即時展開核心使命、關鍵交付產出、Top KPIs 衡量指標、踩雷禁忌（Pet Peeves）、請求求助前必備 Checklist 與黃金開場白。
- **四級漸進式升級階梯 (4-Level Escalation Ladder)**：清晰界定 Level 1 同級對齊 (24~48h) → Level 2 課/組級主管協調 (3天) → Level 3 處級主管/專案委員會 (1週) → Level 4 高階決策仲裁之時限與標準動作。
- **精實升級三大黃金法則與避坑對照表**：強調「No Surprises 拒絕背刺預先告知」、「帶著方案升級 (Option A vs B)」、「對事不對人 (Data & Timeline)」，對比健康精實升級與有害職場打小報告之關鍵差異。
- **跨部門升級通報備忘錄產生器 (Escalation Memo Generator)**：輸入阻礙與商業衝擊、已嘗試協商努力、選項 A/B 與具體裁決請求，一鍵生成結構化高管專用中英文 Markdown / Email 報告。

### 8. 📚 相關推薦書籍 (45 本經典跨領域書庫)
精選與精實六標準差、心智模型、數據檢驗、專注力、敏捷試錯與生成式 AI 深度結合的 45 本跨界經典著作：
- 《專注力協定》、《別自個兒用餐》、《投資最重要的事》、《職場人的生成式AI工作法》、《寫下來，事情就會發生》、《當下的力量》、《我可能錯了》、《5秒法則》、《做自己的人生財務長》、《跨能致勝》、《給予》、《真確》、《刻意練習》、《精實創業》、《豐田模式》、《目標：限制理論》、《原子習慣》、《致富心態》、《深度工作力》、《窮查理的普通常識》、《聰明犯錯》、《卡內基溝通與人際關係》、《當我談跑步時我談些什麼》、《垃圾車法則》、《活出意義來》、《與成功有約》等。

### 9. 🧮 實用工程與管理運算工具箱 (Calculators)
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
