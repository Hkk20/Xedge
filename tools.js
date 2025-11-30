/* tools.js — Optimized X Edge
   Fully working:
   - Top Tools Used (homepage)
   - Browse by Category (homepage)
   - Explore page infinite scroll
   - Tool page 3-phase hydration
   - Session cache for speed
*/

/* CONFIG */
const XEDGE = {
  CACHE_KEY: "xedge_tools_v1",
  SELECTED_KEY: "xedge_selected_tool",
  HOME_TOOLS_LIMIT: 10,
  HOME_CATEGORY_LIMIT: 8,
  BATCH_SIZE_DESKTOP: 12,
  BATCH_SIZE_MOBILE: 12,
  MAX_DOM_CARDS: 36,
  PLACEHOLDER_BG: "1e293b",
  IMAGE_HINT_PARAMS: "?auto=compress&format=webp&w=400",
  PHASE1_TIMEOUT: 180,
  PHASE2_IDLE_MS: 700
};

/* HELPERS */
const normalizeKey = s => String(s || "").trim().toLowerCase();
window.requestIdleCallback = window.requestIdleCallback || (cb => setTimeout(() => cb({
  didTimeout: false,
  timeRemaining: () => 50
}), 200));
const page = name => window.location.href.toLowerCase().includes(name.toLowerCase());
const parseListField = v => v ? String(v).split(/[,;]\s*/).map(x => x.trim()).filter(Boolean) : [];

/* FALLBACK EXTRA */
window.TOOL_EXTRA = window.TOOL_EXTRA || {};

/* CACHE */
const safeSetCache = (k, v) => {
  try {
    sessionStorage.setItem(k, JSON.stringify(v));
  } catch {
    window._XEDGE_CACHE = window._XEDGE_CACHE || {};
    window._XEDGE_CACHE[k] = v;
  }
};
const safeGetCache = k => {
  try {
    const v = sessionStorage.getItem(k);
    if (v) return JSON.parse(v);
  } catch {}
  return window._XEDGE_CACHE ? window._XEDGE_CACHE[k] : null;
};

/* FETCH */
async function getTools(force = false) {
  if (!force) {
    const cached = safeGetCache(XEDGE.CACHE_KEY);
    if (Array.isArray(cached) && cached.length) return cached;
  }

  const url = "https://script.google.com/macros/s/AKfycbxaA3BcQgW7PTFlSP9j4h16-p2us5IiuaYESUUpZiy8bObezI-nMUxXAC28tR15FU_U/exec";

  try {
    const res = await fetch(url + "?t=" + Date.now(), { cache: "no-store" });
    const data = await res.json();
    const norm = data.map(d => ({
      name: d.name || d.title || "Unknown",
      short_description: d.short_description || d.short || "",
      long_description: d.long_description || d.description || "",
      category: d.category || "",
      logo_url: d.logo_url || "",
      link: d.link || "#",
      pros_raw: d.pros || "",
      cons_raw: d.cons || "",
      screenshots_raw: d.screenshots || "",
      pricing_free: d.pricing_free || "",
      pricing_plus: d.pricing_plus || "",
      pricing_team: d.pricing_team || "",
      __raw: d
    }));

    safeSetCache(XEDGE.CACHE_KEY, norm);
    return norm;
  } catch {
    const fallback = safeGetCache(XEDGE.CACHE_KEY);
    return Array.isArray(fallback) ? fallback : [];
  }
}

/* FIND TOOL */
window.findToolByName = (tools, rawName) => {
  const key = normalizeKey(rawName);
  if (!key) return null;

  return (
    tools.find(t => normalizeKey(t.name) === key) ||
    tools.find(t => normalizeKey(t.name).includes(key)) ||
    tools.find(t => normalizeKey(t.name).replace(/\s+/g, "") === key.replace(/\s+/g, "")) ||
    null
  );
};

/* LAZY IMAGES */
function lazyLoadImages(root = document) {
  const imgs = root.querySelectorAll("img[data-src]");
  if (!imgs.length) return;

  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const img = en.target;
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      o.unobserve(img);
    });
  }, { rootMargin: "300px" });

  imgs.forEach(i => obs.observe(i));
}

/* LOGO */
function logoSrc(tool) {
  const raw = tool.logo_url || "";
  if (raw.startsWith("http"))
    return raw + (raw.includes("?") ? "&" : "?") + XEDGE.IMAGE_HINT_PARAMS;

  const tn = encodeURIComponent(tool.name.slice(0, 12));
  return `https://dummyimage.com/240x240/${XEDGE.PLACEHOLDER_BG}/fff&text=${tn}`;
}

/* CARD HTML */
function createToolCard(tool) {
  const a = document.createElement("a");
  a.href = "tool.html?tool=" + encodeURIComponent(tool.name);
  a.dataset.tool = encodeURIComponent(tool.name);
  a.className = "block bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:bg-gray-700 transition";

  a.innerHTML = `
    <div class="flex items-start gap-4">
      <img data-src="${logoSrc(tool)}" class="w-16 h-16 rounded object-cover" />
      <div class="min-w-0">
        <div class="font-semibold text-lg truncate">${tool.name}</div>
        <div class="text-xs mb-1 text-blue-400">${tool.category || "-"}</div>
        <p class="text-gray-400 text-sm truncate">${tool.short_description}</p>
      </div>
    </div>
  `;
  return a;
}

/* ----------------------- */
/* 🚀 HOME PAGE FUNCTIONS  */
/* ----------------------- */

/* LOAD TOP TOOLS */
async function loadTopToolsHome() {
  const container = document.getElementById("top-tools-wrapper");
  if (!container) return;

  const tools = await getTools();
  const slice = tools.slice(0, XEDGE.HOME_TOOLS_LIMIT);

  container.innerHTML = "";
  slice.forEach(t => container.appendChild(createToolCard(t)));

  lazyLoadImages(container);
}

/* LOAD CATEGORIES */
async function loadCategoriesHome() {
  const container = document.getElementById("browse-category-grid");
  if (!container) return;

  const tools = await getTools();
  const cats = [...new Set(tools.map(t => t.category).filter(Boolean))];

  container.innerHTML = "";
  cats.slice(0, XEDGE.HOME_CATEGORY_LIMIT).forEach(c => {
    const el = document.createElement("a");
    el.href = "Categories.html?category=" + encodeURIComponent(c);
    el.className =
      "bg-gray-800/60 border border-gray-700 p-4 rounded-xl hover:bg-gray-700 transition text-center";

    el.innerHTML = `
      <div class="text-lg font-semibold">${c}</div>
      <div class="text-gray-400 text-sm">View →</div>
    `;

    container.appendChild(el);
  });
}

/* INIT HOMEPAGE */
window.initIndexPage = async function () {
  await loadTopToolsHome();
  await loadCategoriesHome();
};

/* ----------------------- */
/* EXPLORE PAGE            */
/* ----------------------- */

async function initExplorePage() {
  const container = document.getElementById("toolsContainer");
  if (!container) return;

  const search = document.getElementById("toolSearch");

  let tools = safeGetCache(XEDGE.CACHE_KEY) || await getTools();
  safeSetCache(XEDGE.CACHE_KEY, tools);

  function render(list) {
    container.innerHTML = "";
    list.forEach(t => container.appendChild(createToolCard(t)));
    lazyLoadImages(container);
  }

  render(tools);

  if (search) {
    search.addEventListener("input", e => {
      const q = normalizeKey(e.target.value);
      const filtered = q
        ? tools.filter(t =>
            normalizeKey(t.name).includes(q) ||
            normalizeKey(t.category).includes(q)
          )
        : tools;

      render(filtered);
    });
  }
}

window.initExplorePage = initExplorePage;

/* ----------------------- */
/* TOOL PAGE HYDRATION     */
/* ----------------------- */

window.renderToolDetailsPageHydrate = async function () {
  const container = document.getElementById("tool-container");
  const loading = document.getElementById("loading");
  if (!container) return;

  const params = new URLSearchParams(location.search);
  const name = normalizeKey(params.get("tool") || "");
  let tools = safeGetCache(XEDGE.CACHE_KEY) || await getTools();

  const tool = findToolByName(tools, name);
  if (!tool) {
    container.innerHTML = "<p>Tool not found.</p>";
    return;
  }

  container.innerHTML = `
    <div class="bg-gray-800 p-6 rounded-xl">
      <div class="text-center">
        <img src="${logoSrc(tool)}" class="w-24 h-24 mx-auto rounded mb-3" />
        <h1 class="text-3xl font-bold">${tool.name}</h1>
        <div class="text-blue-400">${tool.category}</div>
        <a href="${tool.link}" target="_blank"
           class="inline-block mt-3 bg-blue-600 px-6 py-2 rounded-full">
          Visit
        </a>
      </div>

      <p class="text-gray-300 mt-6 leading-relaxed">
        ${tool.long_description || tool.short_description}
      </p>
    </div>
  `;

  if (loading) loading.classList.add("hidden");
};

/* AUTOLOAD DEPENDING ON PAGE */
document.addEventListener("DOMContentLoaded", () => {
  if (page("index.html") || location.pathname.endsWith("/")) initIndexPage();
  if (page("explore.html")) initExplorePage();
  if (page("tool.html")) renderToolDetailsPageHydrate();
});
