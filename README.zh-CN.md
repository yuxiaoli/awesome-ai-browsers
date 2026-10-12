# AI 浏览器精选

<a href="https://awesome.re"><img src="assets/badges/awesome-badge-official-flat2.svg" alt="Awesome" height="24" align="middle"></a>&ensp;<a href="https://awesome.re"><img src="assets/badges/awesome-badge-flat.svg" alt="Awesome (flat)" height="24" align="middle"></a>

[English](README.en.md) | **简体中文** | [繁體中文](README.zh-HK.md)

精选 AI 浏览器、浏览器智能体、控制工具和基础设施，以及具备实质性浏览器自动化功能的综合智能体。

## AI 浏览器及配套工具

将 AI 辅助功能和智能体工作区融入日常浏览的浏览器应用及配套工具。

- [BrowserOS](https://github.com/browseros-ai/BrowserOS) - 基于 Chromium 的浏览器，支持 AI 辅助浏览和智能体任务；BrowserOS 内置 AI，BrowserOS neo 通过 MCP 连接外部智能体。
- [ego lite](https://github.com/citrolabs/ego-lite) - 为 ego lite 浏览器提供智能体技能，利用独立的人与智能体工作区、页面快照和 JavaScript 控制执行浏览器任务。

## 浏览器智能体与框架

利用语言或视觉模型浏览网站并完成浏览器任务的智能体、框架和参考应用。

- [Skyvern](https://github.com/Skyvern-AI/skyvern) - 利用语言模型和计算机视觉自动执行浏览器工作流，提供兼容 Playwright 的 SDK、结构化数据提取和可视化工作流编辑器。
- [Agent TARS / UI-TARS Desktop](https://github.com/bytedance/UI-TARS-desktop) - 多模态智能体工具栈，支持通过 GUI、DOM 或混合方式控制浏览器，并提供本地和远程浏览器操作组件。
- [Page Agent](https://github.com/alibaba/page-agent) - 在网页内运行的 JavaScript 智能体，使用语言模型通过文本形式的 DOM 信息操作网页界面，并可通过浏览器扩展执行多页面任务。
- [Computer Use Preview](https://github.com/google-gemini/computer-use-preview) - Gemini 浏览器智能体参考应用，通过本地 Playwright 控制的 Chrome 或 Browserbase 执行自然语言任务。
- [Browsernode](https://github.com/lennybase/browsernode) - 基于 TypeScript 实现的 browser-use，通过 Playwright 让语言模型智能体执行浏览器任务。

## AI 智能体浏览器控制工具

通过命令行、MCP、HTTP 或扩展接口，让 AI 智能体直接导航、操作和检查浏览器页面的工具。

- [agent-browser](https://github.com/vercel-labs/agent-browser) - 面向 AI 浏览器自动化的 Rust 命令行工具和 MCP 服务器，提供无障碍树快照、元素引用、持久会话和浏览器交互命令。
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) - 通过 MCP 服务器和命令行工具，让 AI 智能体控制 Chrome、检查网络请求和控制台信息，并记录性能跟踪。
- [PinchTab](https://github.com/pinchtab/pinchtab) - 使用 Go 编写的服务，通过 HTTP API 和命令行工具让 AI 智能体控制 Chrome，支持页面快照、元素交互、持久化用户配置和多浏览器实例。
- [Playwriter](https://github.com/remorses/playwriter) - 提供命令行和 MCP 接口的 Chrome 扩展，让 AI 智能体通过 Playwright 操作现有浏览器，复用登录状态、Cookie 和扩展。
- [bb-browser](https://github.com/epiral/bb-browser) - 通过命令行和 MCP 复用 Chrome 登录会话的浏览器自动化工具，提供无障碍树快照、页面交互、已认证请求和网站适配器支持。

## 浏览器引擎与基础设施

面向 AI 智能体构建，或提供明确 AI 浏览器自动化集成的无头引擎、浏览器服务器和会话 API。

- [Lightpanda Browser](https://github.com/lightpanda-io/browser) - 使用 Zig 编写的无头浏览器，支持 JavaScript 执行、CDP、原生 MCP 工具，以及用于浏览器任务的智能体模式。
- [Obscura](https://github.com/h4ckf0r0day/obscura) - 使用 Rust 编写的无头浏览器引擎，支持 V8 执行和 CDP，并通过 MCP 服务器向 AI 智能体提供导航、页面快照和浏览器交互。
- [CloakBrowser](https://github.com/CloakHQ/CloakBrowser) - 为经过改造的 Chromium 浏览器提供 Python 和 JavaScript 封装，支持持久化用户配置，并提供 AI 浏览器自动化集成说明。
- [camofox-browser](https://github.com/jo-inc/camofox-browser) - 基于 Camoufox 的 AI 智能体浏览器服务器，通过 REST API 提供无障碍树快照、元素引用、隔离会话和持久登录状态。
- [Steel Browser](https://github.com/steel-dev/steel-browser) - 面向 AI 智能体的浏览器 API，管理 Chrome 会话，提供 CDP 集成、浏览器状态持久化，以及页面内容提取和截图接口。

## 浏览器技能与集成

为现有 AI 工具增加浏览器控制、会话复用和网站交互能力的可复用智能体技能与集成。

- [BrowserAct Skills](https://github.com/browser-act/skills) - 用于 BrowserAct 浏览器自动化的智能体技能，支持复用 Chrome 会话、隔离会话和人工接管，并通过 Skill Forge 生成可复用的网站数据提取技能。
- [Web Access](https://github.com/eze-is/web-access) - 结合联网工具选择与 Chrome、Edge 的 CDP 控制能力的智能体技能，支持复用浏览器会话和积累可复用的网站操作知识。

## 具备浏览器自动化能力的智能体

具备明确且实质性浏览器控制功能的综合智能体平台，可执行交互式网页任务和特定业务工作流。

- [OpenHuman](https://github.com/tinyhumansai/openhuman) - 内置 Chrome 和桌面控制能力的智能体运行框架，用于执行交互式任务。
- [Hermes Agent](https://github.com/NousResearch/hermes-agent) - 个人智能体，提供浏览器自动化功能，可通过本地或云端浏览器访问网站、操作页面、填写表单和提取信息。
- [DeerFlow](https://github.com/bytedance/deer-flow) - 智能体运行框架，提供可选的 Playwright 浏览器控制，并在对话中保持浏览器会话，以浏览页面和完成多步骤网页工作流。
- [oh-my-pi](https://github.com/can1357/oh-my-pi) - 内置 Chromium 和 Electron 浏览器控制能力的编程智能体，并提供 Chrome 扩展，让智能体操作现有标签页。
- [AiToEarn](https://github.com/yikart/AiToEarn) - 内容营销智能体平台，通过浏览器扩展自动执行社交平台交互，并生成 AI 评论回复。
