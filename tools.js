/* tools.js — X Edge (Option 1 rewrite)
   - Infinite scroll: initial 12, +12 on scroll
   - Adaptive mobile batching, lazy images, session cache
   - 3-phase tool page hydration
*/

/* CONFIG */
const XEDGE = {
  CACHE_KEY: "xedge_tools_v1",
  SELECTED_KEY: "xedge_selected_tool",
  BATCH_SIZE_DESKTOP: 12,
  BATCH_SIZE_MOBILE: 12,
  MAX_DOM_CARDS: 36,             // keep DOM light: remove older cards when exceeded
  PLACEHOLDER_BG: "1e293b",
  PHASE1_TIMEOUT: 180,
  PHASE2_IDLE_MS: 700,
  IMAGE_HINT_PARAMS: "?auto=compress&format=webp&w=400"
};

/* HELPERS */
function normalizeKey(s){ return String(s||"").trim().toLowerCase(); }
window.requestIdleCallback = window.requestIdleCallback || function(cb){ return setTimeout(()=>cb({didTimeout:false,timeRemaining:()=>50}),200); };
function page(name){ return window.location.href.toLowerCase().includes(name.toLowerCase()); }
function parseListField(v){ if(!v) return []; return String(v).split(/[,;]\s*/).map(x=>x.trim()).filter(Boolean); }

/* TOOL_EXTRA fallback (small) */
window.TOOL_EXTRA = window.TOOL_EXTRA || { "chat gpt": { long_description:"ChatGPT is a powerful AI assistant...", pros:[], cons:[], pricing:{}, screenshots:[] } };
(function(){ const clean={}; Object.keys(window.TOOL_EXTRA||{}).forEach(k=>clean[normalizeKey(k)]=window.TOOL_EXTRA[k]); window.TOOL_EXTRA = clean; })();

/* SAFE CACHE */
function safeSetCache(key,value){ try{ sessionStorage.setItem(key, JSON.stringify(value)); } catch(e){ window._XEDGE_CACHE = window._XEDGE_CACHE || {}; window._XEDGE_CACHE[key] = value; } }
function safeGetCache(key){ try{ const v = sessionStorage.getItem(key); if(v) return JSON.parse(v);}catch(e){} return (window._XEDGE_CACHE && window._XEDGE_CACHE[key]) || null; }

/* FETCH & NORMALIZE */
async function getTools(force=false){
  const CACHE_KEY = XEDGE.CACHE_KEY;
  if (!force) {
    const cached = safeGetCache(CACHE_KEY);
    if (Array.isArray(cached) && cached.length) return cached;
  }
  const url = "https://script.google.com/macros/s/AKfycbxaA3BcQgW7PTFlSP9j4h16-p2us5IiuaYESUUpZiy8bObezI-nMUxXAC28tR15FU_U/exec";
  try {
    const res = await fetch(url + "?t=" + Date.now(), { cache: "no-store" });
    if (!res.ok) throw new Error("Status " + res.status);
    const data = await res.json();
    if (!Array.isArray(data)) throw new Error("Sheets did not return array");
    const normalized = data.map(d => ({
      name: d.name || d.title || "Unknown",
      short_description: d.short_description || d.short || d.summary || "",
      long_description: d.long_description || d.description || d.long || "",
      category: d.category || d.cat || "",
      logo_url: d.logo_url || d.logo || d.image || "",
      link: d.link || d.url || "#",
      pros_raw: d.pros || d.pros_raw || d.pros_list || "",
      cons_raw: d.cons || d.cons_raw || "",
      screenshots_raw: d.screenshots || d.screenshots_raw || "",
      pricing_free: d.pricing_free || d.free || "",
      pricing_plus: d.pricing_plus || d.plus || "",
      pricing_team: d.pricing_team || d.team || "",
      __raw: d
    }));
    safeSetCache(CACHE_KEY, normalized);
    return normalized;
  } catch(err){
    const fallback = safeGetCache(CACHE_KEY);
    return Array.isArray(fallback) ? fallback : [];
  }
}

/* FINDER */
window.findToolByName = function(tools, rawName){
  const key = normalizeKey(rawName||""); if(!key) return null;
  let t = tools.find(x => normalizeKey(x.name) === key); if(t) return t;
  t = tools.find(x => normalizeKey(x.name).includes(key)); if(t) return t;
  const noSpace = key.replace(/\s+/g,""); t = tools.find(x => normalizeKey(x.name).replace(/\s+/g,"") === noSpace); if(t) return t;
  const cleaned = key.replace(/[^a-z0-9]/g,""); t = tools.find(x => normalizeKey(x.name).replace(/[^a-z0-9]/g,"") === cleaned);
  return t || null;
};

/* IMAGE LAZY LOADER */
function lazyLoadImages(root=document){
  const imgs = root.querySelectorAll("img[data-src]");
  if (!imgs || imgs.length === 0) return;
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const img = en.target;
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      o.unobserve(img);
    });
  }, { rootMargin: "300px", threshold: 0.01 });
  imgs.forEach(i => obs.observe(i));
}

/* CARD HTML (light & stable heights) */
function makeLogoSrc(tool){
  const raw = tool.logo_url || "";
  if (raw && raw.indexOf("http") === 0) return raw + (raw.includes("?") ? "&" : "?") + XEDGE.IMAGE_HINT_PARAMS;
  const tn = encodeURIComponent((tool.name||"Tool").slice(0,20).replace(/\s+/g,"+"));
  return `https://dummyimage.com/240x240/${XEDGE.PLACEHOLDER_BG}/ffffff&text=${tn}`;
}
function createToolCardElement(tool){
  const a = document.createElement("a");
  a.href = "tool.html?tool=" + encodeURIComponent(tool.name);
  a.dataset.tool = encodeURIComponent(tool.name);
  a.className = "xe-card block";
  a.innerHTML = `
    <div class="flex items-start gap-4">
      <div class="xe-thumb"><img data-src="${makeLogoSrc(tool)}" alt="${tool.name} logo" /></div>
      <div class="min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <div class="xe-card-title">${tool.name}</div>
          <div class="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">${tool.category||"Tool"}</div>
        </div>
        <div class="text-gray-400 text-sm truncate">${(tool.short_description||"").slice(0,120)}</div>
      </div>
    </div>
  `;
  return a;
}

/* BATCHED INFINITE RENDER + simple virtualization (drop old nodes) */
function renderToolsInfinite(tools, container){
  container.innerHTML = "";
  const mobile = (window.innerWidth||1024) < 600;
  const batchSize = mobile ? XEDGE.BATCH_SIZE_MOBILE : XEDGE.BATCH_SIZE_DESKTOP;
  let index = 0;

  const sentinel = document.getElementById("load-more-sentinel");
  const loadMoreUI = document.getElementById("explore-loader");

  function appendBatch(){
    const batch = tools.slice(index, index + batchSize);
    const frag = document.createDocumentFragment();
    batch.forEach(tool => {
      const el = createToolCardElement(tool);
      frag.appendChild(el);
    });
    container.appendChild(frag);
    lazyLoadImages(container);
    index += batchSize;
    // simple virtualization: keep DOM small
    while (container.children.length > XEDGE.MAX_DOM_CARDS) {
      container.removeChild(container.firstElementChild);
    }
    // if more to load, ensure sentinel observes
    if (index >= tools.length) {
      // all loaded
      if (loadMoreUI) loadMoreUI.classList.add("hidden");
      if (sentinel && sentinel.observer) { try{ sentinel.observer.disconnect(); }catch{} }
    } else {
      if (loadMoreUI) loadMoreUI.classList.remove("hidden");
      // ensure sentinel is observed
      observeSentinel();
    }
  }

  // infinite loading using sentinel intersection
  function observeSentinel(){
    if (!sentinel) return;
    if (sentinel.observer) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          // append next batch
          requestIdleCallback(()=> appendBatch());
        }
      });
    }, { rootMargin: "600px" });
    sentinel.observer = obs;
    obs.observe(sentinel);
  }

  // initial batch(s) to make first viewport full: render 1–2 batches depending on screen height
  appendBatch();
  // pre-load one more batch for smoother scroll on desktop
  if (!mobile) requestIdleCallback(() => appendBatch());
  // still observe sentinel
  observeSentinel();
}

/* INIT EXPLORE */
async function initExplorePage(){
  const container = document.getElementById("toolsContainer");
  const search = document.getElementById("toolSearch");
  const loadMoreUI = document.getElementById("explore-loader");
  if (!container) return;
  if (loadMoreUI) loadMoreUI.classList.add("hidden");

  // skeleton placeholders
  container.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">${Array.from({length:9}).map(()=>`<div class="skeleton h-36"></div>`).join("")}</div>`;

  // try cache first
  let tools = safeGetCache(XEDGE.CACHE_KEY);
  if (!tools || !Array.isArray(tools) || tools.length < 1) {
    tools = await getTools().catch(()=>[]);
  }
  safeSetCache(XEDGE.CACHE_KEY, tools);

  // render infinite (batches)
  renderToolsInfinite(tools, container);

  // search filter (client-side)
  if (search) {
    let lastQuery = "";
    search.addEventListener("input", (e) => {
      const q = normalizeKey(e.target.value || "");
      if (q === lastQuery) return;
      lastQuery = q;
      const filtered = q ? tools.filter(t => normalizeKey(t.name).includes(q) || normalizeKey(t.short_description||"").includes(q) || normalizeKey(t.category||"").includes(q)) : tools;
      renderToolsInfinite(filtered, container);
    });
  }

  // preselect for tool page hydration
  container.addEventListener("click", (ev) => {
    const a = ev.target.closest("a[href]");
    if (!a) return;
    const toolName = a.dataset.tool || new URL(a.href, location.href).searchParams.get("tool");
    if (!toolName) return;
    const t = tools.find(x => normalizeKey(x.name) === normalizeKey(decodeURIComponent(toolName)));
    try { if (t) safeSetCache(XEDGE.SELECTED_KEY, t); else safeSetCache(XEDGE.SELECTED_KEY, null); } catch(e){}
  });
}

/* TOOL PAGE: placeholders/screenshots helpers */
function placeholderScreens(tool){
  const tn = encodeURIComponent((tool.name||"Tool").replace(/\s+/g,"+"));
  const bg = XEDGE.PLACEHOLDER_BG;
  return [
    `https://dummyimage.com/900x500/${bg}/ffffff&text=${tn}+Preview+1`,
    `https://dummyimage.com/900x500/${bg}/ffffff&text=${tn}+Preview+2`
  ];
}
async function ensureScreens(tool, mergedExtra){
  if (mergedExtra.screenshots && mergedExtra.screenshots.length) return mergedExtra.screenshots.slice(0,2);
  return placeholderScreens(tool);
}

/* PHASES */
function renderPhase0(container, tool){
  const logo = tool.logo_url ? (tool.logo_url + (tool.logo_url.includes("?") ? "&" : "?") + "w=160") : `https://dummyimage.com/160x160/${XEDGE.PLACEHOLDER_BG}/ffffff&text=${encodeURIComponent(tool.name||"Tool")}`;
  container.innerHTML = `
    <div class="bg-gray-800 border border-gray-700 rounded-2xl p-6">
      <div class="text-center xe-hero">
        <img src="${logo}" loading="lazy" class="mx-auto rounded mb-3" style="width:96px;height:96px;object-fit:cover" alt="${tool.name}"/>
        <div class="flex items-center justify-center gap-3">
          <h1 class="text-3xl font-bold">${tool.name}</h1>
          <div class="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">${tool.category||"Tool"}</div>
        </div>
        <div class="mt-4"><a href="${tool.link}" target="_blank" class="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2 rounded-full text-white font-medium">Visit</a></div>
      </div>
      <div id="xe-phase1" class="mt-6"></div>
      <div id="xe-phase2" class="mt-6"></div>
    </div>
  `;
}

function renderPhase1(container, tool, mergedExtra){
  const phase1 = container.querySelector("#xe-phase1"); if(!phase1) return;
  const desc = mergedExtra.long_description || tool.long_description || tool.short_description || "No description available.";
  const pricing = mergedExtra.pricing || {};
  phase1.innerHTML = `
    <div class="fade-in">
      <p class="text-gray-300 leading-relaxed mb-4">${desc}</p>
      ${(pricing.free||pricing.plus||pricing.team) ? `<div class="bg-gray-700/40 p-4 rounded-xl border border-gray-700 mb-4">
        ${pricing.free ? `<p class="text-gray-300"><strong>Free:</strong> ${pricing.free}</p>` : ""}
        ${pricing.plus ? `<p class="text-gray-300"><strong>Plus:</strong> ${pricing.plus}</p>` : ""}
        ${pricing.team ? `<p class="text-gray-300"><strong>Team:</strong> ${pricing.team}</p>` : ""}
      </div>` : ""}
    </div>
  `;
  setTimeout(()=> { phase1.querySelectorAll(".fade-in").forEach(n => n.classList && n.classList.add("show")); }, 10);
}

function renderPhase2(container, tool, mergedExtra, screenshots, related){
  const phase2 = container.querySelector("#xe-phase2"); if(!phase2) return;
  const youtube = mergedExtra.youtube ? `<div class="mb-6"><iframe data-src="${mergedExtra.youtube}" class="w-full h-56 rounded-xl border border-gray-700" frameborder="0" allowfullscreen></iframe></div>` : "";
  const shotsHTML = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">${screenshots.map(s=>`<div class="rounded-xl overflow-hidden border border-gray-700 bg-gray-900"><img data-src="${s}" class="w-full h-44 object-cover"/></div>`).join("")}</div>`;
  const prosHTML = (mergedExtra.pros && mergedExtra.pros.length) ? `<div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700"><h3 class="text-lg font-bold mb-2">Pros</h3><ul class="space-y-2">${mergedExtra.pros.map(p=>`<li class="flex gap-3 items-start">✔ <span>${p}</span></li>`).join("")}</ul></div>` : "";
  const consHTML = (mergedExtra.cons && mergedExtra.cons.length) ? `<div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700"><h3 class="text-lg font-bold mb-2">Cons</h3><ul class="space-y-2">${mergedExtra.cons.map(c=>`<li class="flex gap-3 items-start">✖ <span>${c}</span></li>`).join("")}</ul></div>` : "";
  const relatedHTML = related && related.length ? `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${related.map(r=>`<a href="tool.html?tool=${encodeURIComponent(r.name)}" class="block p-3 rounded-xl bg-gray-800/60 border border-gray-700"><div class="flex items-center gap-3"><img data-src="${(r.logo_url||'https://dummyimage.com/80x80/'+XEDGE.PLACEHOLDER_BG+'/fff')}" class="w-12 h-12 rounded object-cover"/><div><div class="font-semibold">${r.name}</div><div class="text-gray-400 text-sm">${r.category||''}</div></div></div></a>`).join("")}</div>` : `<p class="text-gray-400">No related tools.</p>`;

  phase2.innerHTML = `${youtube}${shotsHTML}<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">${prosHTML}${consHTML}</div><div class="mb-6"><h3 class="text-xl font-bold mb-3">Related Tools</h3>${relatedHTML}</div>`;

  // lazy-load images + iframes inside phase2
  lazyLoadImages(phase2);
  phase2.querySelectorAll("iframe[data-src]").forEach(f => {
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(en => {
        if (en.isIntersecting) { f.src = f.dataset.src; f.removeAttribute("data-src"); o.unobserve(f); }
      });
    }, { rootMargin: "300px" });
    obs.observe(f);
  });
}

/* MAIN HYDRATION */
async function renderToolDetailsPageHydrate(){
  const loading = document.getElementById("loading");
  const container = document.getElementById("tool-container");
  const params = new URLSearchParams(window.location.search);
  const toolParam = params.get("tool") || params.get("name") || "";
  const key = normalizeKey(decodeURIComponent(toolParam || ""));
  if (!loading || !container) return;

  // try instant hydration from selected cache
  let selected = null;
  try { const cached = safeGetCache(XEDGE.SELECTED_KEY); if (cached && normalizeKey(cached.name) === key) selected = cached; } catch(e){}

  if (selected) renderPhase0(container, selected);
  else container.innerHTML = `<div class="p-6 bg-gray-800/60 rounded-2xl animate-pulse"><div class="h-10 bg-gray-700 rounded mb-4 w-3/5"></div><div class="h-6 bg-gray-700 rounded mb-6 w-2/3"></div><div class="h-40 bg-gray-700 rounded"></div></div>`;

  loading.classList.remove("hidden"); container.classList.remove("hidden");

  // get tools prefer cache - avoid full refetch to prevent mobile lag
  let tools = safeGetCache(XEDGE.CACHE_KEY);
  if (!tools || !Array.isArray(tools) || tools.length < 1) {
    tools = await getTools().catch(()=>[]);
  }
  const tool = findToolByName(tools, key) || selected;
  if (!tool) { loading.innerHTML = "Tool not found."; return; }

  // merge sheet extras + fallback
  const extraFromSheet = {
    long_description: tool.long_description || "",
    pros: parseListField(tool.pros_raw),
    cons: parseListField(tool.cons_raw),
    screenshots: parseListField(tool.screenshots_raw),
    pricing: { free: tool.pricing_free || "", plus: tool.pricing_plus || "", team: tool.pricing_team || "" },
    youtube: (tool.__raw && (tool.__raw.youtube || tool.__raw.yt || "")) || ""
  };
  const fallbackExtra = window.TOOL_EXTRA && window.TOOL_EXTRA[normalizeKey(tool.name)] || {};
  const mergedExtra = {
    long_description: extraFromSheet.long_description || fallbackExtra.long_description || "",
    pros: (extraFromSheet.pros && extraFromSheet.pros.length) ? extraFromSheet.pros : (fallbackExtra.pros || []),
    cons: (extraFromSheet.cons && extraFromSheet.cons.length) ? extraFromSheet.cons : (fallbackExtra.cons || []),
    screenshots: (extraFromSheet.screenshots && extraFromSheet.screenshots.length) ? extraFromSheet.screenshots : (fallbackExtra.screenshots || []),
    pricing: Object.assign({}, (fallbackExtra.pricing || {}), (extraFromSheet.pricing || {})),
    youtube: extraFromSheet.youtube || fallbackExtra.youtube || ""
  };

  // SEO
  const metaDesc = document.getElementById("meta-description");
  if (metaDesc) metaDesc.content = (mergedExtra.long_description || tool.short_description || tool.long_description || tool.name).slice(0,160);

  // phase1 (idle)
  let phase1Scheduled = false;
  const schedulePhase1 = () => {
    if (phase1Scheduled) return;
    phase1Scheduled = true;
    requestIdleCallback(()=>{ try{ renderPhase1(container, tool, mergedExtra); } catch(e){ console.error(e); } });
    setTimeout(()=>{ try{ renderPhase1(container, tool, mergedExtra); } catch(e){} }, XEDGE.PHASE1_TIMEOUT);
  };
  schedulePhase1();

  // phase2 heavy: defer more on mobile and observe placeholder
  let phase2Done = false;
  const doPhase2 = async () => {
    if (phase2Done) return; phase2Done = true;
    try {
      const screenshots = await ensureScreens(tool, mergedExtra);
      const related = (tools||[]).filter(t => normalizeKey(t.category) === normalizeKey(tool.category) && normalizeKey(t.name) !== normalizeKey(tool.name)).slice(0,4);
      renderPhase2(container, tool, mergedExtra, screenshots, related);
    } catch(e){ console.error(e); }
  };

  const p2Placeholder = container.querySelector("#xe-phase2");
  if (p2Placeholder) {
    const obs = new IntersectionObserver((entries, o) => {
      for (const en of entries){ if (en.isIntersecting){ doPhase2(); o.disconnect(); break; } }
    }, { rootMargin: "400px" });
    obs.observe(p2Placeholder);
  }

  if ((window.innerWidth||1024) < 600) {
    setTimeout(()=>{ requestIdleCallback(()=>doPhase2()); }, XEDGE.PHASE2_IDLE_MS);
  } else {
    requestIdleCallback(()=>doPhase2());
  }

  setTimeout(()=> loading.classList.add("hidden"), 120);
}

/* EXPOSE API */
window.getTools = getTools;
window.initExplorePage = initExplorePage;
window.renderToolDetailsPageHydrate = renderToolDetailsPageHydrate;

/* AUTORUN tool page hydration if present */
if (page("tool.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    const loading = document.getElementById("loading");
    const container = document.getElementById("tool-container");
    if (loading) loading.classList.remove("hidden");
    if (container) container.classList.remove("hidden");
    renderToolDetailsPageHydrate();
  });
}