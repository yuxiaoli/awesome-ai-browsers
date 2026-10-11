/* A dependency-free viewer for data/awesome_list.schema.json.
   All imported strings are rendered as plain text, never executable HTML. */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const strings = {
    en: {
      eyebrow: "THE INTERNET, CONSIDERED", collection: "The collection", searchPlaceholder: "Find your next favorite…", searchLabel: "Search resources", clearSearch: "Clear search", categoriesLabel: "Browse categories", allResources: "All resources", saved: "Saved", sortCurated: "Curated order", sortName: "Name, A-Z", importData: "Open collection", themeToggle: "Switch color theme", languageLabel: "Language", resourcesLabel: "resources", categoriesLabelShort: "categories", languagesLabel: "languages", curatedLabel: "A CURATED COLLECTION", explore: "Explore the collection", footerNote: "Good things deserve to be found.", emptyTitle: "A little too specific?", emptyDescription: "Try another search, choose a different category, or reset your filters.", resetFilters: "Reset filters", dismissError: "Dismiss", sampleData: "Sample collection", loadedData: "Your collection", save: "Save", unsave: "Saved", untitled: "Untitled collection", untitledSection: "Untitled section", unnamed: "Untitled resource", noUrl: "Collection", nested: "Related resources", results: "resources", noSavedTitle: "Your favorites start here.", noSavedDescription: "Save a resource to keep it in your own little collection.", loadError: "Could not open this collection.", copied: "Collection loaded", sortLabel: "Sort resources", viewAll: "View all resources", sourceNote: "Example collection · import your own JSON", menuLabel: "Collection navigation"
    },
    "zh-CN": {
      eyebrow: "用心发现互联网", collection: "浏览清单", searchPlaceholder: "寻找你的下一个心头好…", searchLabel: "搜索资源", clearSearch: "清除搜索", categoriesLabel: "浏览分类", allResources: "全部资源", saved: "已收藏", sortCurated: "精选顺序", sortName: "按名称排序", importData: "打开清单", themeToggle: "切换颜色主题", languageLabel: "语言", resourcesLabel: "个资源", categoriesLabelShort: "个分类", languagesLabel: "种语言", curatedLabel: "一份精选清单", explore: "探索清单", footerNote: "好东西，值得被发现。", emptyTitle: "换个角度找找？", emptyDescription: "试试其他关键词、选择另一个分类，或重置筛选条件。", resetFilters: "重置筛选", dismissError: "关闭", sampleData: "示例清单", loadedData: "你的清单", save: "收藏", unsave: "已收藏", untitled: "未命名清单", untitledSection: "未命名分类", unnamed: "未命名资源", noUrl: "资源组", nested: "相关资源", results: "个资源", noSavedTitle: "从这里开始收藏。", noSavedDescription: "收藏你喜欢的资源，建立自己的小小清单。", loadError: "无法打开这份清单。", copied: "已载入清单", sortLabel: "资源排序", viewAll: "查看全部资源", sourceNote: "示例清单 · 可导入自己的 JSON", menuLabel: "清单导航"
    }
  };
  Object.assign(strings.en, {
    about: "About", sidebarNote: "Good finds deserve a place to stay.", sidebarHint: "Save a resource to make it yours.", footerDetail: "Made for the curious.", footerSignoff: "Keep exploring.", backToTop: "Back to top", homeLabel: "Atlas home", mainNavigation: "Main navigation", overviewLabel: "Collection overview", categoriesNavigation: "Resource categories", skipToCollection: "Skip to the collection", loadingData: "Loading collection…"
  });
  Object.assign(strings["zh-CN"], {
    about: "关于", sidebarNote: "好发现，值得留下。", sidebarHint: "收藏一项资源，让它成为你的专属发现。", footerDetail: "为好奇心而生。", footerSignoff: "继续探索。", backToTop: "返回顶部", homeLabel: "Atlas 首页", mainNavigation: "主导航", overviewLabel: "清单概览", categoriesNavigation: "资源分类", skipToCollection: "跳至清单", loadingData: "正在载入清单…"
  });
  let data;
  let locale = "en";
  let locales = [];
  let sections = [];
  let entries = [];
  let activeCategory = "all";
  let savedOnly = false;
  let query = "";
  let sort = "curated";
  let saved = new Set();
  let saveKey = "";
  let source = "sample";
  let loading = false;
  let loadRevision = 0;

  function readStorage(key) { try { return localStorage.getItem(key); } catch (_) { return null; } }
  function writeStorage(key, value) { try { localStorage.setItem(key, value); } catch (_) { /* Private/file browsers can disable storage. */ } }
  function tr(key) { return (strings[locale.startsWith("zh") ? "zh-CN" : "en"] || strings.en)[key] || strings.en[key] || key; }
  function localized(value) {
    if (!value) return "";
    for (const code of [locale, data.defaultLocale, ...Object.keys(value)]) {
      if (typeof value[code] === "string" && value[code].trim()) return value[code];
    }
    return "";
  }
  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }
  function safeUrl(value) {
    if (!value || !value.trim()) return null;
    try {
      const url = new URL(value.trim());
      return ["https:", "http:"].includes(url.protocol) ? url : null;
    } catch (_) { return null; }
  }
  function validate(documentData) {
    const object = (value, path) => {
      if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error(path + " must be an object.");
    };
    const textMap = (value, path) => {
      object(value, path);
      for (const text of Object.values(value)) if (typeof text !== "string") throw new Error(path + " translations must be strings.");
    };
    const array = (value, path, visit) => {
      if (!Array.isArray(value)) throw new Error(path + " must be an array.");
      value.forEach((item, index) => visit(item, path + "[" + index + "]"));
    };
    const entry = (value, path) => {
      object(value, path);
      textMap(value.name, path + ".name");
      textMap(value.description, path + ".description");
      if ("url" in value && typeof value.url !== "string") throw new Error(path + ".url must be a string.");
      if ("entries" in value) array(value.entries, path + ".entries", entry);
    };
    const section = (value, path) => {
      object(value, path);
      textMap(value.title, path + ".title");
      if ("description" in value) textMap(value.description, path + ".description");
      if ("entries" in value) array(value.entries, path + ".entries", entry);
      if ("sections" in value) array(value.sections, path + ".sections", section);
    };
    object(documentData, "document");
    if (typeof documentData.defaultLocale !== "string") throw new Error("document.defaultLocale must be a string.");
    textMap(documentData.title, "document.title");
    if ("description" in documentData) textMap(documentData.description, "document.description");
    array(documentData.sections, "document.sections", section);
    return documentData;
  }
  function hash(value) {
    let result = 2166136261;
    for (let index = 0; index < value.length; index++) result = Math.imul(result ^ value.charCodeAt(index), 16777619);
    return (result >>> 0).toString(36);
  }
  function gather() {
    sections = [];
    entries = [];
    const found = new Set([data.defaultLocale]);
    const collect = (value) => {
      for (const field of ["title", "name", "description"]) Object.keys(value[field] || {}).forEach((code) => found.add(code));
    };
    const visitEntry = (value, id, section) => {
      collect(value);
      const item = { value, id, section, children: [] };
      entries.push(item);
      item.children = (value.entries || []).map((child, index) => visitEntry(child, id + "." + index, section));
      return item;
    };
    const visitSection = (value, id, parents) => {
      collect(value);
      const section = { value, id, parents, entries: [], depth: parents.length };
      sections.push(section);
      section.entries = (value.entries || []).map((entry, index) => visitEntry(entry, id + ":" + index, section));
      (value.sections || []).forEach((child, index) => visitSection(child, id + "." + index, [...parents, section]));
    };
    collect(data);
    data.sections.forEach((section, index) => visitSection(section, String(index), []));
    locales = [...found];
  }
  function entryName(entry) { return localized(entry.value.name) || tr("unnamed"); }
  function sectionName(section) { return localized(section.value.title) || tr("untitledSection"); }
  function useful(entry) {
    return Boolean((entry.value.url || "").trim() || localized(entry.value.description).trim() || entry.children.some(useful));
  }
  function sectionContains(section, category) { return category === "all" || section.id === category || section.id.startsWith(category + "."); }
  function searchable(entry) {
    const sectionPath = [...entry.section.parents, entry.section].flatMap((section) => [sectionName(section), localized(section.value.description)]);
    return [entryName(entry), localized(entry.value.description), entry.value.url || "", ...sectionPath].join(" ").toLocaleLowerCase();
  }
  function filteredEntry(entry, ancestorMatched = false) {
    if (!useful(entry)) return null;
    const matched = ancestorMatched || !query || searchable(entry).includes(query);
    const children = entry.children.map((child) => filteredEntry(child, matched)).filter(Boolean);
    if ((!matched || (savedOnly && !saved.has(entry.id))) && !children.length) return null;
    return { entry, children, counted: matched && (!savedOnly || saved.has(entry.id)) };
  }
  function countTree(tree) { return (tree.counted ? 1 : 0) + tree.children.reduce((sum, child) => sum + countTree(child), 0); }
  function sorted(items, getName) {
    if (sort !== "name") return items;
    let collator;
    try { collator = new Intl.Collator(locale || undefined, { sensitivity: "base", numeric: true }); } catch (_) { collator = new Intl.Collator(); }
    return [...items].sort((a, b) => collator.compare(getName(a), getName(b)));
  }
  function saveButton(entry) {
    const button = node("button", "save-button", tr(saved.has(entry.id) ? "unsave" : "save"));
    button.type = "button";
    button.setAttribute("aria-pressed", String(saved.has(entry.id)));
    button.setAttribute("aria-label", tr(saved.has(entry.id) ? "unsave" : "save") + " " + entryName(entry));
    button.dataset.entryId = entry.id;
    button.addEventListener("click", () => {
      if (saved.has(entry.id)) saved.delete(entry.id); else saved.add(entry.id);
      writeStorage(saveKey, JSON.stringify([...saved]));
      if (savedOnly) renderResults();
      else {
        button.textContent = tr(saved.has(entry.id) ? "unsave" : "save");
        button.setAttribute("aria-pressed", String(saved.has(entry.id)));
        button.setAttribute("aria-label", tr(saved.has(entry.id) ? "unsave" : "save") + " " + entryName(entry));
      }
    });
    return button;
  }
  function renderEntry(tree, nested = false) {
    const entry = tree.entry;
    const name = entryName(entry);
    const url = safeUrl(entry.value.url);
    const article = node("article", nested ? "child-entry" : "resource-card");
    article.dataset.entryId = entry.id;
    const top = node("div", "resource-top");
    const monogram = node("span", "resource-monogram", [...name.replace(/[^\p{L}\p{N}]/gu, "")].slice(0, 2).join("") || "↗");
    monogram.setAttribute("aria-hidden", "true");
    monogram.dataset.tone = String(parseInt(hash(name), 36) % 5);
    top.append(monogram, node("span", "resource-domain", url ? url.hostname.replace(/^www\./, "") : tr("noUrl")), saveButton(entry));
    const heading = node("h4", "resource-name");
    if (url) {
      const link = node("a", "", name);
      link.href = url.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      const arrow = node("span", "external-arrow", "↗");
      arrow.setAttribute("aria-hidden", "true");
      link.append(arrow);
      heading.append(link);
    } else heading.textContent = name;
    article.append(top, heading);
    const description = localized(entry.value.description);
    if (description) article.append(node("p", "resource-description", description));
    if (tree.children.length) {
      const details = node("details", "child-entries");
      details.open = Boolean(query || savedOnly);
      details.append(node("summary", "", tr("nested") + " · " + tree.children.length));
      sorted(tree.children, (child) => entryName(child.entry)).forEach((child) => details.append(renderEntry(child, true)));
      article.append(details);
    }
    return article;
  }
  function renderResults() {
    const fragment = document.createDocumentFragment();
    let count = 0;
    const treesBySection = new Map();
    const visibleSections = new Set();
    for (const section of sections) {
      if (!sectionContains(section, activeCategory)) continue;
      const trees = sorted(section.entries.map((entry) => filteredEntry(entry)).filter(Boolean), (tree) => entryName(tree.entry));
      if (!trees.length) continue;
      treesBySection.set(section.id, trees);
      visibleSections.add(section.id);
      section.parents.forEach((parent) => visibleSections.add(parent.id));
      count += trees.reduce((sum, tree) => sum + countTree(tree), 0);
    }
    for (const section of sections) {
      if (!visibleSections.has(section.id)) continue;
      const trees = treesBySection.get(section.id) || [];
      const container = node("section", "resource-section");
      container.id = "section-" + section.id.replaceAll(".", "-");
      const heading = node("div", "section-heading");
      const title = node("h3", "", sectionName(section));
      if (section.parents.length) heading.append(node("p", "section-breadcrumb", section.parents.map(sectionName).join(" / ")));
      heading.append(title);
      const description = localized(section.value.description);
      if (description) heading.append(node("p", "section-description", description));
      container.append(heading);
      if (trees.length) {
        const grid = node("div", "resource-grid");
        trees.forEach((tree) => grid.append(renderEntry(tree)));
        container.append(grid);
      }
      fragment.append(container);
    }
    $("results").replaceChildren(fragment);
    $("results-count").textContent = count + " " + tr("results");
    $("collection-title").textContent = activeCategory === "all" ? tr("collection") : sectionName(sections.find((section) => section.id === activeCategory));
    $("empty-state").hidden = count > 0;
    $("empty-title").textContent = tr(savedOnly && !query ? "noSavedTitle" : "emptyTitle");
    $("empty-description").textContent = tr(savedOnly && !query ? "noSavedDescription" : "emptyDescription");
    $("clear-search").hidden = !query;
    $("saved-toggle").setAttribute("aria-pressed", String(savedOnly));
  }
  function renderCategories() {
    const fragment = document.createDocumentFragment();
    const options = [{ id: "all", name: tr("allResources"), depth: 0 }, ...sections.map((section) => ({ id: section.id, name: sectionName(section), depth: section.depth }))];
    for (const category of options) {
      const count = entries.filter((entry) => useful(entry) && sectionContains(entry.section, category.id)).length;
      const button = node("button", "category-button" + (activeCategory === category.id ? " is-active" : ""));
      button.type = "button";
      button.dataset.category = category.id;
      button.dataset.depth = String(category.depth);
      button.style.setProperty("--category-depth", String(category.depth));
      button.setAttribute("aria-pressed", String(activeCategory === category.id));
      button.append(node("span", "category-name", category.name), node("span", "category-count", String(count).padStart(2, "0")));
      button.addEventListener("click", () => {
        activeCategory = category.id;
        renderCategories();
        renderResults();
        $("categories").querySelector('[data-category="' + category.id + '"]').focus({ preventScroll: true });
      });
      fragment.append(button);
    }
    $("categories").replaceChildren(fragment);
  }
  function localeLabel(code) {
    if (code === "en") return "English";
    if (code === "zh-CN") return "简体中文";
    if (code === "zh-HK") return "繁體中文";
    if (code === "zh-TW") return "繁體中文";
    try { return new Intl.DisplayNames([code], { type: "language" }).of(code) || code || "Default"; } catch (_) { return code || "Default"; }
  }
  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const translated = tr(element.dataset.i18n);
      if (!element.children.length) element.textContent = translated;
      else {
        // Keep icons or nested labels when a translation is placed on a control.
        const textNodes = [...element.childNodes].filter((child) => child.nodeType === Node.TEXT_NODE && child.textContent.trim());
        if (textNodes.length) {
          textNodes[0].textContent = translated;
          textNodes.slice(1).forEach((child) => { child.textContent = ""; });
        } else if (!element.querySelector("[data-i18n]")) element.append(document.createTextNode(translated));
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = tr(element.dataset.i18nPlaceholder); });
    document.querySelectorAll("[data-i18n-label]").forEach((element) => { element.setAttribute("aria-label", tr(element.dataset.i18nLabel)); });
    $("search-input").placeholder = tr("searchPlaceholder");
    $("search-input").setAttribute("aria-label", tr("searchLabel"));
    $("clear-search").setAttribute("aria-label", tr("clearSearch"));
    $("locale-select").setAttribute("aria-label", tr("languageLabel"));
    $("sort-select").setAttribute("aria-label", tr("sortLabel"));
    $("theme-toggle").setAttribute("aria-label", tr("themeToggle"));
    $("theme-toggle").title = tr("themeToggle");
  }
  function render() {
    document.documentElement.lang = locale || "en";
    applyTranslations();
    const title = localized(data.title) || tr("untitled");
    $("list-title").textContent = title;
    document.title = title + " | Atlas";
    $("list-description").textContent = localized(data.description);
    $("list-description").hidden = !localized(data.description);
    $("resource-total").textContent = String(entries.filter(useful).length).padStart(2, "0");
    $("category-total").textContent = String(sections.length).padStart(2, "0");
    $("locale-total").textContent = String(locales.length).padStart(2, "0");
    $("data-status").textContent = tr(loading ? "loadingData" : source === "sample" ? "sampleData" : "loadedData");
    $("locale-select").value = locale;
    renderCategories();
    renderResults();
  }
  function showError(error) {
    $("error-message").textContent = tr("loadError") + " " + (error && error.message ? error.message : String(error));
    $("error-panel").hidden = false;
  }
  function setLoading(value) {
    loading = value;
    $("collection").setAttribute("aria-busy", String(value));
    $("results").setAttribute("aria-busy", String(value));
    $("data-status").textContent = tr(value ? "loadingData" : source === "sample" ? "sampleData" : "loadedData");
  }
  async function loadAsync(readDocument) {
    const request = ++loadRevision;
    setLoading(true);
    $("error-panel").hidden = true;
    try {
      const documentData = await readDocument();
      if (request === loadRevision) load(documentData);
    } catch (error) {
      if (request === loadRevision) {
        setLoading(false);
        showError(error);
      }
    }
  }
  function load(documentData, options = {}) {
    validate(documentData);
    const snapshot = JSON.parse(JSON.stringify(documentData));
    loadRevision++;
    data = snapshot;
    source = options.sample ? "sample" : "loaded";
    gather();
    locale = locales.includes(locale) ? locale : data.defaultLocale;
    if (options.initial) locale = data.defaultLocale;
    activeCategory = "all";
    savedOnly = false;
    query = "";
    sort = "curated";
    $("search-input").value = "";
    $("sort-select").value = "curated";
    saveKey = "atlas:saved:" + hash(JSON.stringify(data));
    try {
      const stored = JSON.parse(readStorage(saveKey) || "[]");
      saved = new Set(Array.isArray(stored) ? stored.filter((value) => typeof value === "string") : []);
    } catch (_) { saved = new Set(); }
    const preferred = ["en", "zh-CN", "zh-HK", "zh-TW"];
    const priority = (code) => preferred.includes(code) ? preferred.indexOf(code) : preferred.length;
    const switcher = $("locale-select");
    switcher.replaceChildren();
    [...locales].sort((a, b) => priority(a) - priority(b)).forEach((code) => {
      const option = node("option", "", localeLabel(code));
      option.value = code;
      switcher.append(option);
    });
    switcher.closest("label").hidden = locales.length < 2;
    $("error-panel").hidden = true;
    setLoading(false);
    render();
    return snapshot;
  }
  function resetFilters() {
    query = "";
    activeCategory = "all";
    savedOnly = false;
    $("search-input").value = "";
    renderCategories();
    renderResults();
  }
  const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
  let preferredTheme = readStorage("atlas-theme");
  if (!["light", "dark"].includes(preferredTheme)) preferredTheme = null;
  function applyTheme() {
    const theme = preferredTheme || (themeMedia.matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    $("theme-toggle").setAttribute("aria-pressed", String(theme === "dark"));
  }
  applyTheme();
  themeMedia.addEventListener("change", applyTheme);
  $("theme-toggle").addEventListener("click", () => {
    preferredTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    writeStorage("atlas-theme", preferredTheme);
    applyTheme();
  });
  $("locale-select").addEventListener("change", (event) => { locale = event.target.value; render(); });
  $("search-input").addEventListener("input", (event) => { query = event.target.value.trim().toLocaleLowerCase(); renderResults(); });
  $("clear-search").addEventListener("click", () => { query = ""; $("search-input").value = ""; renderResults(); $("search-input").focus(); });
  $("saved-toggle").addEventListener("click", () => { savedOnly = !savedOnly; renderResults(); });
  $("sort-select").addEventListener("change", (event) => { sort = event.target.value; renderResults(); });
  $("reset-filters").addEventListener("click", resetFilters);
  $("dismiss-error").addEventListener("click", () => { $("error-panel").hidden = true; });
  $("import-button").addEventListener("click", () => { $("file-input").click(); });
  $("file-input").addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    await loadAsync(async () => JSON.parse(await file.text()));
    event.target.value = "";
  });
  document.addEventListener("keydown", (event) => {
    const target = event.target instanceof Element ? event.target : document.activeElement;
    const editing = target && (/^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) || target.isContentEditable);
    if (event.key === "/" && !editing && !event.defaultPrevented && !event.isComposing && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      $("search-input").focus();
    }
    if (event.key === "Escape" && document.activeElement === $("search-input")) {
      query = "";
      $("search-input").value = "";
      renderResults();
    }
  });
  window.AwesomeListTemplate = Object.freeze({ load, validate });
  try { load(window.AWESOME_LIST_DATA, { sample: true, initial: true }); } catch (error) { showError(error); }
  const dataUrl = new URLSearchParams(window.location.search).get("data");
  if (dataUrl) {
    loadAsync(async () => {
      const response = await fetch(dataUrl);
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.json();
    });
  }
})();
