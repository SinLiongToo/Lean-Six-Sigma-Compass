# Lean Six Sigma Compass (精實六標準差指南)

一個專為精實六標準差（Lean Six Sigma）從業者、綠帶與黑帶學習者設計的一站式數位工具箱。本專案為純前端靜態網頁，支援離線使用，並可直接部署至 GitHub Pages。

🌐 **專案特色**：
- 🟢 100% 靜態網頁：無須任何後端伺服器或資料庫，隨開即用。
- 🌓 支援雙主題：可在暗色主題（預設）與亮色主題之間無縫切換。
- 📱 自動響應式設計：在桌機、平板、手機上皆有舒適的排版。

---

## 🛠️ 核心功能模組

### 1. 📝 模擬考試引擎 (Exam Engine)
位於「證照地圖與模擬考試」區塊：
- **三種閱讀與測試模式**：
  - `實戰測驗 (Quiz)`：單題式測驗、支援即時標記（Flag）、選項卡片具備極速高對比視覺選取反饋，交卷後即時呈現正誤解析。
  - `讀書指引 (Study)`：列表式呈現所有題目、正確答案與詳細解析，利於考前速記。
  - `原始考題 (Raw)`：直接檢視考題的 Markdown 原始文件。
- **靈活的考卷載入**：
  - 內建 DMAIC 各階段 40 題及完整 150 題模擬試卷。
  - 支援 `載入本機考試資料夾 (.md)`，可批次讀取您自訂的 Markdown 格式考卷。

### 2. 💰 專案財務效益計算機 (Project Cost Savings Calculator)
- 快速評估專案改善前後的年度總成本、年度毛節省額（Annual Gross Savings）、首年淨節省額（Net Savings）及投資回收期（Payback Period）。
- 支援匯出專業的專案 ROI 財務效益 CSV 報表。

### 3. ⏱️ 精實會議管理助手 (Lean Meeting Assistant)
- **雙披薩原則 (Two-Pizza Rule) 檢查**：自動檢視與會人數是否過多，避免溝通冗餘。
- **時間箱管理 (Timeboxing)**：控制會議議程總時長在高效的 60 分鐘內。
- **3W 推進原則與單一 DRI 檢查**：落實「Who does What by When」，並自動檢測是否有多人共同負責單一行動，確保課責性。
- **一鍵生成 Memo**：自動生成結構化的 Markdown 會議備忘錄，支援一鍵複製。

### 4. 🧠 心智圖與腦力激盪 (Mind Map & KJ Board)
- 提供互動式的 KJ 法腦力激盪看板，支援卡片分類、拖曳與整理。
- 支援動態心智圖繪製與編輯。

### 5. 📊 財務分析與精實機會 (Financial Analysis & Lean Opportunities)
- **精實財務診斷與成本拆解**：
  - 支援製造業、半導體廠與代工廠等典型範例快速載入。
  - 精確拆解 COGS（材料/人工/費用）、OPEX（品質成本 COPQ、庫存成本、SG&A、研發）與現金流指標（OCF、FCF、CCC 現金循環週期）。
  - 自動診斷精實改善優先級（星號標示）與對應推薦精實工具。
  - 內建全球半導體與科技巨頭（TSMC、Nvidia、AMD、Apple、ASML、Intel、Micron 等）毛利率行業基準與 2026 最新趨勢。
- **年報與季報解讀指引 (財報分析)**：
  - **核心財務健康分析架構 (Core Financial Health Framework)**：涵蓋「成長性與獲利品質」、「現金轉化與含金量」、「資本效率」、「資產負債表安全」與「營運生產力」5 大維度。
  - **四步解讀實戰流程**：損益表（護城河/槓桿）、現金流量表（獲利含金量/FCF）、資產負債表（營運資金陷阱/債務到期）、營運生產力（人均產值/MD&A）。
  - **精實六標準差與財報指標對接**（VSM/Kanban 縮短周轉、DMAIC 降低 COPQ、TPM/SMED 提升 OEE 釋放產能）。
  - **互動式財務健康速查清單 (Health Quick-Check)**：支援即時勾選自檢與體質評分。

### 6. ⚙️ 進階 LSS 工具集
- **OEE 綜合設備效率模擬器**
- **5S 現場稽核工具**
- **RACI 職責分配矩陣編輯器**
- **需求追蹤矩陣 (Requirements Tracker)**

---

## 🚀 快速開始

### 本地執行
1. 下載或克隆本專案至您的電腦。
2. 直接雙擊 `index.html`，即可在瀏覽器中開啟並開始使用所有功能。

### 部署至 GitHub Pages
1. 在 GitHub 上建立一個新的空白倉庫（例如 `lean-compass`）。
2. 在本地專案目錄下執行以下指令：
   ```bash
   # 關聯遠端庫 (請替換為您的帳號與專案名)
   git remote add origin https://github.com/<your-username>/lean-compass.git
   
   # 推送至 main 分支
   git push -u origin main
   ```
3. 進入該 GitHub 專案的 **Settings** -> **Pages**。
4. 在 **Branch** 選擇 `main` 分支及 `/ (root)` 資料夾，點選 **Save** 即可發佈上線。
