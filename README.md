# Awesome AI Browsers

<a href="https://awesome.re"><img src="assets/badges/awesome-badge-official-flat2.svg" alt="Awesome" height="24" align="middle"></a>&ensp;<a href="https://awesome.re"><img src="assets/badges/awesome-badge-flat.svg" alt="Awesome (flat)" height="24" align="middle"></a>

**English** | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-HK.md)

A curated collection of AI browsers, browser agents, control tools, and infrastructure, including broader agents with substantial browser automation features.

## AI Browsers and Companions

Browser applications and companion tools that bring AI assistance and agent workspaces into everyday browsing.

- [BrowserOS](https://github.com/browseros-ai/BrowserOS) - Chromium-based browsers for AI-assisted browsing and agent tasks, with built-in AI in BrowserOS and MCP-connected agents in BrowserOS neo.
- [ego lite](https://github.com/citrolabs/ego-lite) - Agent skills for ego lite, a browser with separate workspaces for people and agents, page snapshots, and JavaScript controls for browser tasks.

## Browser Agents and Frameworks

Agents, frameworks, and reference applications that use language or vision models to navigate websites and complete browser tasks.

- [Skyvern](https://github.com/Skyvern-AI/skyvern) - Browser workflow automation using language models and computer vision, with a Playwright-compatible SDK, structured data extraction, and a visual workflow builder.
- [Agent TARS / UI-TARS Desktop](https://github.com/bytedance/UI-TARS-desktop) - Multimodal agent stack with GUI, DOM, and hybrid browser control, plus local and remote browser operators.
- [Page Agent](https://github.com/alibaba/page-agent) - An in-page JavaScript agent that uses language models to operate web interfaces through text-based DOM interactions, with an optional extension for multi-page tasks.
- [Computer Use Preview](https://github.com/google-gemini/computer-use-preview) - A Gemini browser-agent reference application for executing natural-language tasks in local Playwright-controlled Chrome or Browserbase.
- [Browsernode](https://github.com/lennybase/browsernode) - A TypeScript implementation of browser-use that connects language-model agents to browser tasks through Playwright.

## Browser Control Tools for AI Agents

CLI, MCP, HTTP, and extension interfaces that give AI agents direct access to browser navigation, page interaction, and inspection.

- [agent-browser](https://github.com/vercel-labs/agent-browser) - A Rust CLI and MCP server for AI browser automation, with accessibility snapshots, element references, persistent sessions, and browser interaction commands.
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) - An MCP server and CLI that let AI agents control Chrome, inspect network and console activity, and record performance traces.
- [PinchTab](https://github.com/pinchtab/pinchtab) - A Go service that gives AI agents control of Chrome through an HTTP API and CLI, with page snapshots, element interactions, persistent profiles, and multiple browser instances.
- [Playwriter](https://github.com/remorses/playwriter) - A Chrome extension with CLI and MCP interfaces that lets AI agents use Playwright against an existing browser, including its logins, cookies, and extensions.
- [bb-browser](https://github.com/epiral/bb-browser) - A CLI and MCP browser automation tool that reuses Chrome login sessions, with accessibility snapshots, page interactions, authenticated requests, and site-adapter support.

## Browser Engines and Infrastructure

Headless engines, browser servers, and session APIs built for AI agents or offering documented AI browser-automation integrations.

- [Lightpanda Browser](https://github.com/lightpanda-io/browser) - A headless browser written in Zig, with JavaScript execution, CDP support, native MCP tools, and an agent mode for browser tasks.
- [Obscura](https://github.com/h4ckf0r0day/obscura) - A Rust headless browser engine with V8 execution, CDP support, and an MCP server exposing navigation, page snapshots, and browser interactions to AI agents.
- [CloakBrowser](https://github.com/CloakHQ/CloakBrowser) - Python and JavaScript wrappers for a modified Chromium browser, with persistent profiles and documented integrations for AI browser automation.
- [camofox-browser](https://github.com/jo-inc/camofox-browser) - A Camoufox-powered browser server for AI agents, exposing a REST API with accessibility snapshots, element references, isolated sessions, and persistent login state.
- [Steel Browser](https://github.com/steel-dev/steel-browser) - A browser API for AI agents that manages Chrome sessions and provides CDP integrations, persistent browser state, and page extraction and capture endpoints.

## Browser Skills and Integrations

Reusable agent skills and integrations that add browser control, session reuse, and website interaction to existing AI tools.

- [BrowserAct Skills](https://github.com/browser-act/skills) - Agent skills for BrowserAct browser automation, with Chrome session reuse, isolated sessions, human handoff, and Skill Forge for generating reusable site-specific data-extraction skills.
- [Web Access](https://github.com/eze-is/web-access) - An agent skill combining web-access tool selection with CDP control of Chrome and Edge, browser session reuse, and reusable site-specific knowledge.

## Agents with Browser Automation

Broader agent platforms with substantial documented browser-control features for interactive web tasks and specialized workflows.

- [OpenHuman](https://github.com/tinyhumansai/openhuman) - An agent harness with native Chrome and desktop control for carrying out interactive tasks.
- [Hermes Agent](https://github.com/NousResearch/hermes-agent) - A personal agent with browser automation for navigating websites, interacting with pages, filling forms, and extracting information using local or cloud browsers.
- [DeerFlow](https://github.com/bytedance/deer-flow) - An agent harness with optional Playwright browser control and persistent conversation sessions for navigating pages and completing multi-step web workflows.
- [oh-my-pi](https://github.com/can1357/oh-my-pi) - A coding agent with built-in browser control for Chromium and Electron, including a Chrome extension that lets the agent operate existing tabs.
- [AiToEarn](https://github.com/yikart/AiToEarn) - A content-marketing agent platform whose browser extension automates social-platform interactions and generates AI comment replies.
