# AI 瀏覽器精選

<a href="https://awesome.re"><img src="assets/badges/awesome-badge-official-flat2.svg" alt="Awesome" height="24" align="middle"></a>&ensp;<a href="https://awesome.re"><img src="assets/badges/awesome-badge-flat.svg" alt="Awesome (flat)" height="24" align="middle"></a>

[English](README.en.md) | [简体中文](README.zh-CN.md) | **繁體中文**

精選 AI 瀏覽器、瀏覽器智能體、控制工具及基礎設施，以及具備實質瀏覽器自動化功能的綜合智能體。

## AI 瀏覽器及配套工具

將 AI 輔助功能及智能體工作區融入日常瀏覽的瀏覽器應用程式及配套工具。

- [BrowserOS](https://github.com/browseros-ai/BrowserOS) - 基於 Chromium 的瀏覽器，支援 AI 輔助瀏覽及智能體任務；BrowserOS 內置 AI，BrowserOS neo 透過 MCP 連接外部智能體。
- [ego lite](https://github.com/citrolabs/ego-lite) - 為 ego lite 瀏覽器提供智能體技能，利用獨立的人與智能體工作區、頁面快照及 JavaScript 控制執行瀏覽器任務。

## 瀏覽器智能體與框架

利用語言或視覺模型瀏覽網站並完成瀏覽器任務的智能體、框架及參考應用程式。

- [Skyvern](https://github.com/Skyvern-AI/skyvern) - 利用語言模型及電腦視覺自動執行瀏覽器工作流程，提供兼容 Playwright 的 SDK、結構化數據擷取及視覺化工作流程編輯器。
- [Agent TARS / UI-TARS Desktop](https://github.com/bytedance/UI-TARS-desktop) - 多模態智能體工具組，支援透過 GUI、DOM 或混合方式控制瀏覽器，並提供本地及遠端瀏覽器操作組件。
- [Page Agent](https://github.com/alibaba/page-agent) - 在網頁內運行的 JavaScript 智能體，使用語言模型透過文字形式的 DOM 資訊操作網頁介面，並可透過瀏覽器擴充功能執行多頁面任務。
- [Computer Use Preview](https://github.com/google-gemini/computer-use-preview) - Gemini 瀏覽器智能體參考應用程式，透過本地 Playwright 控制的 Chrome 或 Browserbase 執行自然語言任務。
- [Browsernode](https://github.com/lennybase/browsernode) - 以 TypeScript 實作的 browser-use，透過 Playwright 讓語言模型智能體執行瀏覽器任務。

## AI 智能體瀏覽器控制工具

透過命令列、MCP、HTTP 或擴充介面，讓 AI 智能體直接導覽、操作及檢查瀏覽器頁面的工具。

- [agent-browser](https://github.com/vercel-labs/agent-browser) - 面向 AI 瀏覽器自動化的 Rust 命令列工具及 MCP 伺服器，提供無障礙樹快照、元素參照、持續會話及瀏覽器互動指令。
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) - 透過 MCP 伺服器及命令列工具，讓 AI 智能體控制 Chrome、檢查網絡請求及控制台資訊，並記錄效能追蹤。
- [PinchTab](https://github.com/pinchtab/pinchtab) - 以 Go 編寫的服務，透過 HTTP API 及命令列工具讓 AI 智能體控制 Chrome，支援頁面快照、元素互動、持久化使用者設定及多個瀏覽器實例。
- [Playwriter](https://github.com/remorses/playwriter) - 提供命令列及 MCP 介面的 Chrome 擴充功能，讓 AI 智能體透過 Playwright 操作現有瀏覽器，沿用登入狀態、Cookie 及擴充功能。
- [bb-browser](https://github.com/epiral/bb-browser) - 透過命令列及 MCP 沿用 Chrome 登入會話的瀏覽器自動化工具，提供無障礙樹快照、頁面互動、已認證請求及網站配接器支援。

## 瀏覽器引擎與基礎設施

面向 AI 智能體建立，或提供明確 AI 瀏覽器自動化整合的無頭引擎、瀏覽器伺服器及會話 API。

- [Lightpanda Browser](https://github.com/lightpanda-io/browser) - 以 Zig 編寫的無頭瀏覽器，支援 JavaScript 執行、CDP、原生 MCP 工具，以及用於瀏覽器任務的智能體模式。
- [Obscura](https://github.com/h4ckf0r0day/obscura) - 以 Rust 編寫的無頭瀏覽器引擎，支援 V8 執行及 CDP，並透過 MCP 伺服器向 AI 智能體提供導覽、頁面快照及瀏覽器互動。
- [CloakBrowser](https://github.com/CloakHQ/CloakBrowser) - 為經過改造的 Chromium 瀏覽器提供 Python 及 JavaScript 封裝，支援持久化使用者設定，並提供 AI 瀏覽器自動化整合說明。
- [camofox-browser](https://github.com/jo-inc/camofox-browser) - 基於 Camoufox 的 AI 智能體瀏覽器伺服器，透過 REST API 提供無障礙樹快照、元素參照、隔離會話及持續登入狀態。
- [Steel Browser](https://github.com/steel-dev/steel-browser) - 面向 AI 智能體的瀏覽器 API，管理 Chrome 會話，提供 CDP 整合、瀏覽器狀態持久化，以及頁面內容擷取及截圖介面。

## 瀏覽器技能與整合

為現有 AI 工具加入瀏覽器控制、會話重用及網站互動能力的可重用智能體技能與整合。

- [BrowserAct Skills](https://github.com/browser-act/skills) - 用於 BrowserAct 瀏覽器自動化的智能體技能，支援沿用 Chrome 會話、隔離會話及人工接管，並透過 Skill Forge 生成可重用的網站數據擷取技能。
- [Web Access](https://github.com/eze-is/web-access) - 結合聯網工具選擇與 Chrome、Edge 的 CDP 控制能力的智能體技能，支援沿用瀏覽器會話及累積可重用的網站操作知識。

## 具備瀏覽器自動化能力的智能體

具備明確且實質瀏覽器控制功能的綜合智能體平台，可執行互動式網頁任務及特定業務工作流程。

- [OpenHuman](https://github.com/tinyhumansai/openhuman) - 內置 Chrome 及桌面控制能力的智能體運行框架，用於執行互動式任務。
- [Hermes Agent](https://github.com/NousResearch/hermes-agent) - 個人智能體，提供瀏覽器自動化功能，可透過本地或雲端瀏覽器瀏覽網站、操作頁面、填寫表格及擷取資訊。
- [DeerFlow](https://github.com/bytedance/deer-flow) - 智能體運行框架，提供可選的 Playwright 瀏覽器控制，並在對話中維持瀏覽器會話，以瀏覽頁面及完成多步驟網頁工作流程。
- [oh-my-pi](https://github.com/can1357/oh-my-pi) - 內置 Chromium 及 Electron 瀏覽器控制能力的編程智能體，並提供 Chrome 擴充功能，讓智能體操作現有分頁。
- [AiToEarn](https://github.com/yikart/AiToEarn) - 內容營銷智能體平台，透過瀏覽器擴充功能自動執行社交平台互動，並生成 AI 留言回覆。
