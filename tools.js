/* tools.js — X Edge (Option A) — Mobile-first, HF-like, optimized
   Drop-in replacement for your Explore.html and compatible with tool.html hydration.
*/

/* ========== CONFIG ========== */
const XEDGE = {
  SHEET_URL: "https://script.google.com/macros/s/AKfycbxaA3BcQgW7PTFlSP9j4h16-p2us5IiuaYESUUpZiy8bObezI-nMUxXAC28tR15FU_U/exec",
  CACHE_KEY: "xedge_tools_v1",
  SELECTED_KEY: "xedge_selected_tool",
  BATCH_DESKTOP: 12,
  BATCH_MOBILE: 12,
  MAX_DOM_CARDS: 36,
  PLACEHOLDER_BG: "1e293b",
  IMAGE_HINT_PARAMS: "?auto=compress&format=webp&w=400",
  SENTINEL_ROOT_MARGIN: "600px",
  DEBOUNCE_MS: 180
};

/* ========== HELPERS & POLYFILLS ========== */
function normalizeKey(s){ return String(s||"").trim().toLowerCase(); }
window.requestIdleCallback = window.requestIdleCallback || function(cb){ return setTimeout(()=>cb({didTimeout:false,timeRemaining:()=>50}), 200); };

function safeSetJSON(key, value){
  try { sessionStorage.setItem(key, JSON.stringify(value)); }
  catch(e){ window._XEDGE_CACHE = window._XEDGE_CACHE || {}; window._XEDGE_CACHE[key] = value; }
}
function safeGetJSON(key){
  try { const v = sessionStorage.getItem(key); if (v) return JSON.parse(v); }
  catch(e){}
  return (window._XEDGE_CACHE && window._XEDGE_CACHE[key]) || null;
}
function debounce(fn, ms){ let t; return function(...a){ clearTimeout(t); t = setTimeout(()=>fn.apply(this,a), ms); }; }

/* ========== FETCH & NORMALIZE ========== */
async function getTools(force=false){
  if (!force) {
    const cached = safeGetJSON(XEDGE.CACHE_KEY);
    if (Array.isArray(cached) && cached.length) return cached;
  }

  try {
    const res = await fetch(XEDGE.SHEET_URL + "?t=" + Date.now(), { cache: "no-store" });
    if (!res.ok) throw new Error("Status " + res.status);
    const data = await res.json();
    if (!Array.isArray(data)) throw new Error("Sheets did not return array");

    // normalize rows
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

    safeSetJSON(XEDGE.CACHE_KEY, normalized);
    return normalized;
  } catch(err){
    console.warn("getTools fetch failed — using cache if available", err);
    const fallback = safeGetJSON(XEDGE.CACHE_KEY);
    return Array.isArray(fallback) ? fallback : [];
  }
}

/* ========== FINDER ========== */
function findToolByName(tools, rawName){
  const key = normalizeKey(rawName||"");
  if (!key) return null;
  let t = tools.find(x => normalizeKey(x.name) === key); if (t) return t;
  t = tools.find(x => normalizeKey(x.name).includes(key)); if (t) return t;
  const noSpace = key.replace(/\s+/g,"");
  t = tools.find(x => normalizeKey(x.name).replace(/\s+/g,"") === noSpace); if (t) return t;
  const cleaned = key.replace(/[^a-z0-9]/g,"");
  t = tools.find(x => normalizeKey(x.name).replace(/[^a-z0-9]/g,"") === cleaned);
  return t || null;
}

/* ========== LAZY IMAGE LOADER ========== */
function lazyLoadImages(root=document){
  const imgs = Array.from(root.querySelectorAll("img[data-src]"));
  if (!imgs.length) return;
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const img = en.target;
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      observer.unobserve(img);
    });
  }, { rootMargin: "300px", threshold: 0.01 });
  imgs.forEach(i => obs.observe(i));
}

/* ========== CARD CREATION ========== */
function makeLogoSrc(tool){
  const raw = (tool.logo_url || "").trim();
  if (raw && /^https?:\/\//i.test(raw)) {
    return raw + (raw.includes("?") ? "&" : "?") + XEDGE.IMAGE_HINT_PARAMS.slice(1);
  }
  const tn = encodeURIComponent((tool.name||"Tool").slice(0,20).replace(/\s+/g,"+"));
  return `https://dummyimage.com/240x240/${XEDGE.PLACEHOLDER_BG}/ffffff&text=${tn}`;
}

function createToolCardElement(tool){
  const a = document.createElement("a");
  a.href = "tool.html?tool=" + encodeURIComponent(tool.name);
  a.className = "xe-card";
  a.dataset.tool = encodeURIComponent(tool.name);

  // build structure with minimal innerHTML for readability
  a.innerHTML = `
    <div class="flex items-start gap-4">
      <div class="xe-thumb">
        <img data-src="${makeLogoSrc(tool)}" alt="${tool.name} logo" loading="lazy"/>
      </div>
      <div class="min-w-0">
        <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.25rem;">
          <div class="xe-card-title" style="font-weight:600">${escapeHtml(tool.name)}</div>
          <div style="margin-left:auto; font-size:11px; padding:.15rem .5rem; border-radius:999px; background:linear-gradient(90deg,#2563eb,#7c3aed); color:white;">${escapeHtml(tool.category||"Tool")}</div>
        </div>
        <div class="text-gray-400 text-sm" style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml((tool.short_description||"").slice(0,120))}</div>
      </div>
    </div>
  `;
  return a;
}

// simple HTML escape
function escapeHtml(s){ return String(s||"").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* ========== BATCHED INFINITE RENDER + VIRTUALIZE (light) ========== */
function renderToolsInfinite(tools, container){
  container.innerHTML = ""; // start fresh
  const mobile = (window.innerWidth || 1024) < 600;
  const batchSize = mobile ? XEDGE.BATCH_MOBILE : XEDGE.BATCH_DESKTOP;
  let index = 0;

  const sentinel = document.getElementById("load-more-sentinel");
  const loaderUI = document.getElementById("explore-loader");

  function appendBatch(){
    if (!Array.isArray(tools) || !tools.length) {
      container.innerHTML = `<div class="text-gray-400">No tools found.</div>`;
      if (loaderUI) loaderUI.classList.add("hidden");
      return;
    }

    const batch = tools.slice(index, index + batchSize);
    const frag = document.createDocumentFragment();
    batch.forEach(tool => {
      const el = createToolCardElement(tool);
      frag.appendChild(el);
    });
    container.appendChild(frag);
    lazyLoadImages(container);

    index += batchSize;

    // keep DOM size bounded
    while (container.children.length > XEDGE.MAX_DOM_CARDS) {
      container.removeChild(container.firstElementChild);
    }

    // manage loader / sentinel
    if (index >= tools.length) {
      if (loaderUI) loaderUI.classList.add("hidden");
      if (sentinel && sentinel.observer) { try{ sentinel.observer.disconnect(); }catch(e){} }
    } else {
      if (loaderUI) loaderUI.classList.remove("hidden");
      observeSentinel();
    }
  }

  function observeSentinel(){
    if (!sentinel) return;
    if (sentinel.observer) return; // already observing
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          // schedule append on idle to keep UI smooth
          requestIdleCallback(()=> appendBatch());
        }
      });
    }, { rootMargin: XEDGE.SENTINEL_ROOT_MARGIN, threshold: 0.01 });
    sentinel.observer = obs;
    obs.observe(sentinel);
  }

  // initial fill: one or two batches to fill viewport without blocking
  appendBatch();
  if (!mobile) requestIdleCallback(() => appendBatch());
  observeSentinel();

  // preselect: store clicked tool for instant hydration on tool page
  container.addEventListener("click", (ev) => {
    const a = ev.target.closest("a[data-tool]");
    if (!a) return;
    const toolName = a.dataset.tool || new URL(a.href, location.href).searchParams.get("tool");
    if (!toolName) return;
    // store the currently visible tools in cache so tool.html can hydrate instantly
    (async () => {
      try {
        const toolsAll = await getTools().catch(()=>[]);
        const t = toolsAll.find(x => normalizeKey(x.name) === normalizeKey(decodeURIComponent(toolName)));
        safeSetJSON(XEDGE.SELECTED_KEY, t || null);
      } catch(e){}
    })();
  });
}

/* ========== INIT Explore page ========== */
async function initExplorePage(){
  const container = document.getElementById("toolsContainer");
  const search = document.getElementById("toolSearch");
  const loaderUI = document.getElementById("explore-loader");
  if (!container) return;

  // show skeletons quickly
  const ske = Array.from({length:9}).map(()=> {
    const d = document.createElement("div");
    d.className = "skeleton";
    return d;
  });
  container.innerHTML = "";
  ske.forEach(n => container.appendChild(n));

  // try cached tools first to make page interactive quickly
  let tools = safeGetJSON(XEDGE.CACHE_KEY);
  if (!tools || !Array.isArray(tools) || tools.length < 1) {
    // fetch but do not block too long — show cached if available
    tools = await getTools().catch(()=>[]);
  }
  safeSetJSON(XEDGE.CACHE_KEY, tools);

  // render batches
  renderToolsInfinite(tools, container);

  // search (debounced)
  if (search){
    const doSearch = debounce((e) => {
      const q = normalizeKey(e.target.value || "");
      const filtered = q ? tools.filter(t => normalizeKey(t.name).includes(q) || normalizeKey(t.short_description||"").includes(q) || normalizeKey(t.category||"").includes(q)) : tools;
      renderToolsInfinite(filtered, container);
    }, XEDGE.DEBOUNCE_MS);
    search.addEventListener("input", doSearch);
  }
}

/* ========== TOOL PAGE HYDRATION (exposed) ========== */
async function renderToolDetailsPageHydrate(){
  // tool page expects an element with id "tool-container" and an element with id "loading"
  const loading = document.getElementById("loading");
  const container = document.getElementById("tool-container");
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const toolParam = params.get("tool") || params.get("name") || "";
  const key = normalizeKey(decodeURIComponent(toolParam || ""));

  // try instant hydration from selected tool stored on click
  let selected = null;
  try { const cachedSel = safeGetJSON(XEDGE.SELECTED_KEY); if (cachedSel && normalizeKey(cachedSel.name) === key) selected = cachedSel; } catch(e){}

  if (selected) {
    // small fast hero
    container.innerHTML = `
      <div class="bg-gray-800 border border-gray-700 rounded-2xl p-6">
        <div class="text-center">
          <img src="${escapeHtml(makeLogoSrc(selected))}" style="width:96px;height:96px;object-fit:cover;margin:0 auto;border-radius:12px"/>
          <h2 style="font-size:1.5rem;margin-top:.5rem">${escapeHtml(selected.name)}</h2>
          <p style="color: #9CA3AF">${escapeHtml(selected.category||"")}</p>
        </div>
        <div id="xe-phase1" class="mt-6"></div>
        <div id="xe-phase2" class="mt-6"></div>
      </div>
    `;
  } else {
    container.innerHTML = `<div class="p-6 bg-gray-800/60 rounded-2xl animate-pulse"><div style="height:16px;width:60%;background:#374151;margin-bottom:10px;border-radius:6px"></div><div style="height:12px;width:40%;background:#374151;border-radius:6px"></div><div style="height:160px;background:#374151;margin-top:12px;border-radius:8px"></div></div>`;
  }
  if (loading) loading.classList.remove("hidden");

  // fetch authoritative tools list but try cache first to avoid reloading on mobile
  let tools = safeGetJSON(XEDGE.CACHE_KEY);
  if (!tools || !Array.isArray(tools) || tools.length < 1) {
    tools = await getTools().catch(()=>[]);
  }
  const tool = findToolByName(tools, key) || selected;
  if (!tool) { if (loading) loading.textContent = "Tool not found."; return; }

  // build merged extra metadata (sheet fields + fallback tool extra if needed)
  const parseList = s => (s||"").split(/[,;]\s*/).map(x=>x.trim()).filter(Boolean);
  const extraFromSheet = {
    long_description: tool.long_description || "",
    pros: parseList(tool.pros_raw),
    cons: parseList(tool.cons_raw),
    screenshots: parseList(tool.screenshots_raw),
    pricing: { free: tool.pricing_free || "", plus: tool.pricing_plus || "", team: tool.pricing_team || "" },
    youtube: (tool.__raw && (tool.__raw.youtube || tool.__raw.yt || "")) || ""
  };
  const fallbackExtra = (window.TOOL_EXTRA && window.TOOL_EXTRA[normalizeKey(tool.name)]) || {};
  const merged = {
    long_description: extraFromSheet.long_description || fallbackExtra.long_description || "",
    pros: (extraFromSheet.pros.length ? extraFromSheet.pros : (fallbackExtra.pros || [])),
    cons: (extraFromSheet.cons.length ? extraFromSheet.cons : (fallbackExtra.cons || [])),
    screenshots: (extraFromSheet.screenshots.length ? extraFromSheet.screenshots : (fallbackExtra.screenshots || [])),
    pricing: Object.assign({}, (fallbackExtra.pricing || {}), (extraFromSheet.pricing || {})),
    youtube: extraFromSheet.youtube || fallbackExtra.youtube || ""
  };

  // schedule phase1 quickly but via idle/timeouts
  requestIdleCallback(()=> {
    const phase1 = container.querySelector("#xe-phase1");
    if (!phase1) return;
    const desc = merged.long_description || tool.short_description || "";
    const pricingBlock = (merged.pricing && (merged.pricing.free || merged.pricing.plus || merged.pricing.team)) ? `
      <div style="background:rgba(55,65,81,0.4);padding:12px;border-radius:10px;margin-bottom:12px">
        ${merged.pricing.free ? `<div><strong>Free:</strong> ${escapeHtml(merged.pricing.free)}</div>` : ""}
        ${merged.pricing.plus ? `<div><strong>Plus:</strong> ${escapeHtml(merged.pricing.plus)}</div>` : ""}
        ${merged.pricing.team ? `<div><strong>Team:</strong> ${escapeHtml(merged.pricing.team)}</div>` : ""}
      </div>` : "";
    phase1.innerHTML = `<p style="color:#D1D5DB;line-height:1.6">${escapeHtml(desc)}</p>${pricingBlock}`;
  });

  // phase2 heavy: screenshots, pros/cons, related — lazy-run
  const phase2 = async () => {
    const shots = merged.screenshots && merged.screenshots.length ? merged.screenshots.slice(0,2) : [
      `https://dummyimage.com/900x500/${XEDGE.PLACEHOLDER_BG}/ffffff&text=${encodeURIComponent(tool.name)}+Preview+1`,
      `https://dummyimage.com/900x500/${XEDGE.PLACEHOLDER_BG}/ffffff&text=${encodeURIComponent(tool.name)}+Preview+2`
    ];
    const related = (tools||[]).filter(t => normalizeKey(t.category) === normalizeKey(tool.category) && normalizeKey(t.name) !== normalizeKey(tool.name)).slice(0,4);

    const phase2Root = container.querySelector("#xe-phase2");
    if (!phase2Root) return;

    // build HTML
    const shotsHtml = `<div style="display:grid;grid-template-columns:1fr;gap:10px;margin-bottom:12px">
      ${shots.map(s => `<div style="border-radius:10px;overflow:hidden;background:#0b1220"><img data-src="${escapeHtml(s)}" style="width:100%;height:160px;object-fit:cover;display:block" /></div>`).join("")}
    </div>`;

    const prosHtml = (merged.pros && merged.pros.length) ? `<div style="background:rgba(31,41,55,0.45);padding:12px;border-radius:10px;margin-bottom:8px"><h4 style="font-weight:600;margin-bottom:6px">Pros</h4><ul>${merged.pros.map(p=>`<li style="margin-bottom:6px">✔ ${escapeHtml(p)}</li>`).join("")}</ul></div>` : "";

    const consHtml = (merged.cons && merged.cons.length) ? `<div style="background:rgba(31,41,55,0.45);padding:12px;border-radius:10px;margin-bottom:8px"><h4 style="font-weight:600;margin-bottom:6px">Cons</h4><ul>${merged.cons.map(c=>`<li style="margin-bottom:6px">✖ ${escapeHtml(c)}</li>`).join("")}</ul></div>` : "";

    const relatedHtml = related.length ? `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">${related.map(r=>`<a href="tool.html?tool=${encodeURIComponent(r.name)}" style="display:block;padding:8px;border-radius:8px;background:rgba(55,65,81,0.4)"><div style="display:flex;gap:8px;align-items:center"><img data-src="${escapeHtml(makeLogoSrc(r))}" style="width:44px;height:44px;object-fit:cover;border-radius:8px"/><div><div style="font-weight:600">${escapeHtml(r.name)}</div><div style="color:#9CA3AF;font-size:12px">${escapeHtml(r.category||"")}</div></div></div></a>`).join("")}</div>` : `<div style="color:#9CA3AF">No related tools.</div>`;

    phase2Root.innerHTML = shotsHtml + `<div style="display:grid;grid-template-columns:1fr;gap:10px">${prosHtml}${consHtml}</div>` + `<div style="margin-top:12px"><h3 style="font-weight:700;margin-bottom:8px">Related Tools</h3>${relatedHtml}</div>`;

    lazyLoadImages(phase2Root);
  };

  // trigger phase2 when user scrolls near or after idle
  const placeholder = container.querySelector("#xe-phase2");
  if (placeholder) {
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(en => {
        if (en.isIntersecting) { phase2(); o.disconnect(); }
      });
    }, { rootMargin: "400px" });
    obs.observe(placeholder);
  }
  // fallback attempts
  requestIdleCallback(()=>phase2());
  setTimeout(()=>phase2(), 700);

  // hide loader
  if (loading) loading.classList.add("hidden");
}

/* ========== EXPORTS ========== */
window.getTools = getTools;
window.findToolByName = findToolByName;
window.initExplorePage = initExplorePage;
window.renderToolDetailsPageHydrate = renderToolDetailsPageHydrate;

/* ========== AUTO-RUN FOR Explore.html ========== */
document.addEventListener("DOMContentLoaded", () => {
  // if current page contains #toolsContainer run initExplorePage
  if (document.getElementById("toolsContainer")) {
    try { initExplorePage(); } catch(e){ console.error("initExplorePage error", e); }
  }
  // if on tool.html, hydrate (tool.html should call renderToolDetailsPageHydrate or we can auto-run there)
});
