/* ================================================================
   tools.js — XEdge · Supabase Edition
   ✔ Supabase REST API replaces Google Sheets
   ✔ All debug console.logs removed
   ✔ Duplicate renderProsCons removed
   ✔ Duplicate renderAbout removed
   ✔ Double renderPhase1 call fixed (was firing twice)
   ✔ Cache: sessionStorage → localStorage fallback → memory
   ✔ Fetches all rows with pagination (handles 1000+ tools)
   ✔ All existing render functions preserved exactly
================================================================ */

/* ─── CONFIG ───────────────────────────────────────────────────── */
const XE = {
  SUPABASE_URL:  "https://szouczgiuhedynyshpbb.supabase.co",
  SUPABASE_KEY:  "sb_publishable_JEvVHrobhuPoU6Z5xkMr2Q_pw8tvzHP",
  TABLE:         "xedge",

  CACHE_KEY:     "xedge_tools_v2",       // bumped — auto-clears old Sheets cache
  CACHE_TTL:     5 * 60 * 1000,          // 5 minutes
  SELECTED_KEY:  "xedge_selected_tool",

  PLACEHOLDER_BG: "1e293b",
  PHASE1_TIMEOUT: 120,
  PHASE2_IDLE_MS: 600
};

/* ─── POLYFILL ──────────────────────────────────────────────────── */
window.requestIdleCallback = window.requestIdleCallback || function(cb) {
  return setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 50 }), 200);
};

/* ─── HELPERS ───────────────────────────────────────────────────── */
function normalizeKey(s) { return String(s || "").trim().toLowerCase(); }

function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

/* Storage: memory-first, then sessionStorage fast-path, then localStorage */
const _mem = {};

function safeSet(k, v) {
  _mem[k] = v;
  const payload = JSON.stringify(v);
  try { sessionStorage.setItem(k, payload); } catch (_) {}
  try { localStorage.setItem(k, payload); } catch (_) {}
}

function safeGet(k) {
  if (_mem[k] !== undefined) return _mem[k];
  try {
    const s = sessionStorage.getItem(k);
    if (s) { _mem[k] = JSON.parse(s); return _mem[k]; }
  } catch (_) {}
  try {
    const l = localStorage.getItem(k);
    if (l) { _mem[k] = JSON.parse(l); return _mem[k]; }
  } catch (_) {}
  return null;
}

/* ─── SUPABASE FETCH (paginated — works for any row count) ──────── */
async function fetchFromSupabase() {
  const PAGE_SIZE = 1000;
  let all  = [];
  let from = 0;

  const headers = {
    "apikey":        XE.SUPABASE_KEY,
    "Authorization": `Bearer ${XE.SUPABASE_KEY}`,
    "Content-Type":  "application/json"
  };

  while (true) {
    const url =
      `${XE.SUPABASE_URL}/rest/v1/${XE.TABLE}` +
      `?select=*&order=name.asc&offset=${from}&limit=${PAGE_SIZE}`;

    const res = await fetch(url, { headers });

    if (!res.ok) {
      const msg = await res.text().catch(() => String(res.status));
      throw new Error(`Supabase ${res.status}: ${msg}`);
    }

    const page = await res.json();
    if (!Array.isArray(page) || page.length === 0) break;
    all = all.concat(page);
    if (page.length < PAGE_SIZE) break;   // reached last page
    from += PAGE_SIZE;
  }

  return all;
}

/* ─── MAP SUPABASE ROW → XEdge tool object ──────────────────────── */
function mapRow(d) {
  return {
    id:                d.id               || "",
    name:              d.name             || d.title || "Unknown",
    category:          d.category         || "",
    logo_url:          d.logo_url         || "",
    link:              d.link             || "#",
    short_description: d.short_description || d.short || "",
    long_description:  d.long_description  || d.description || "",
    pros_raw:          d.pros             || "",
    cons_raw:          d.cons             || "",
    key_features_raw:  d.key_features     || "",
    best_for_raw:      d.best_for         || "",
    standout_raw:      d.standout         || "",
    screenshots_raw:   d.screenshots      || "",
    goal:              d.goal             || "",
    pricing_free:      d.pricing_free     || "",
    pricing_plus:      d.pricing_plus     || "",
    pricing_team:      d.pricing_team     || "",
    has_free_tier:     d.has_free_tier   ?? false,
    has_api:           d.has_api         ?? false,
    open_source:       d.open_source     ?? false,
    has_mobile_app:    d.has_mobile_app  ?? false,
    no_credit_card:    d.no_credit_card  ?? false,
    founded:           d.founded         || "",
    users_count:       d.users_count     || "",
    rating_ease:       d.rating_ease     || 0,
    rating_quality:    d.rating_quality  || 0,
    rating_value:      d.rating_value    || 0,
    rating_speed:      d.rating_speed    || 0,
    rating_beginner:   d.rating_beginner || 0,
    rating_features:   d.rating_features || 0,
  };
}

/* ─── getTools() — public API, TTL-cached ───────────────────────── */
async function getTools(force = false) {
  if (!force) {
    const cached = safeGet(XE.CACHE_KEY);
    if (
      cached &&
      cached.ts &&
      Date.now() - cached.ts < XE.CACHE_TTL &&
      Array.isArray(cached.data) &&
      cached.data.length
    ) {
      return cached.data;
    }
  }

  try {
    const raw   = await fetchFromSupabase();
    const tools = raw.map(mapRow);
    safeSet(XE.CACHE_KEY, { ts: Date.now(), data: tools });
    return tools;
  } catch (e) {
    console.warn("XEdge: Supabase fetch failed —", e.message);
    // Fall back to stale cache rather than showing nothing
    const stale = safeGet(XE.CACHE_KEY);
    if (stale && Array.isArray(stale.data) && stale.data.length) return stale.data;
    return [];
  }
}

/* ─── findToolByName() ──────────────────────────────────────────── */
function findToolByName(list, rawName) {
  const key = normalizeKey(rawName);
  return (
    list.find(t => normalizeKey(t.name) === key) ||
    list.find(t => normalizeKey(t.name).includes(key)) ||
    list.find(t => normalizeKey(t.name).replace(/\s+/g, "") === key.replace(/\s+/g, "")) ||
    list.find(t => normalizeKey(t.id) === key) ||
    null
  );
}

/* ─── PLACEHOLDER LOGO ──────────────────────────────────────────── */
function placeholderLogo(name) {
  return `https://dummyimage.com/320x320/${XE.PLACEHOLDER_BG}/ffffff&text=${
    encodeURIComponent(name || "Tool")
  }`;
}

/* ─── SCREENSHOT PARSER ─────────────────────────────────────────── */
function parseScreenshots(s) {
  if (!s) return [];
  return String(s)
    .replace(/\n/g, ",")
    .replace(/\|/g, ",")
    .split(",")
    .map(v => v.trim())
    .filter(v => v.startsWith("http"));
}

/* ─── RENDER: PROS / CONS ───────────────────────────────────────── */
function renderProsCons() {
  const prosUl = document.querySelector("#pros-box ul");
  const consUl = document.querySelector("#cons-box ul");

  if (prosUl && Array.isArray(window.__TOOL_PROS__)) {
    prosUl.innerHTML = window.__TOOL_PROS__.length
      ? window.__TOOL_PROS__.map(p => `<li>✔ ${escapeHtml(p)}</li>`).join("")
      : "<li>No pros listed</li>";
  }

  if (consUl && Array.isArray(window.__TOOL_CONS__)) {
    consUl.innerHTML = window.__TOOL_CONS__.length
      ? window.__TOOL_CONS__.map(c => `<li>✖ ${escapeHtml(c)}</li>`).join("")
      : "<li>No cons listed</li>";
  }
}

/* ─── RENDER: ABOUT SECTION ─────────────────────────────────────── */
function renderAbout() {
  const aboutSection = document.getElementById("about-tool-section");
  if (!aboutSection) return;

  function attempt() {
    const keyFeatures = window.__TOOL_KEY_FEATURES__ || [];
    const bestFor     = window.__TOOL_BEST_FOR__     || [];
    const standout    = window.__TOOL_STANDOUT__     || "";
    const toolData    = window.__CURRENT_TOOL_DATA__;

    if (!toolData) { setTimeout(attempt, 100); return; }

    const featuresUl = document.getElementById("about-features");
    if (featuresUl) {
      featuresUl.innerHTML = keyFeatures.length
        ? keyFeatures.slice(0, 4).map(f => `<li>✓ ${escapeHtml(f)}</li>`).join("")
        : "";
    }

    const bestForUl = document.getElementById("about-bestfor");
    if (bestForUl) {
      if (bestFor.length) {
        bestForUl.innerHTML = bestFor.slice(0, 3).map(b => `<li>${escapeHtml(b)}</li>`).join("");
      } else if (toolData.category) {
        bestForUl.innerHTML = `
          <li>${escapeHtml(toolData.category)} professionals</li>
          <li>Teams in ${escapeHtml(toolData.category)}</li>
          <li>Students and beginners</li>`;
      } else {
        bestForUl.innerHTML = "";
      }
    }

    const standoutP = document.getElementById("about-standout");
    if (standoutP) {
      standoutP.textContent = standout || toolData.short_description || "";
    }

    aboutSection.classList.remove("hidden");
  }

  attempt();
}

/* ─── RENDER: PHASE 0 — hero (instant) ─────────────────────────── */
function renderPhase0Instant(t) {
  const logo  = document.getElementById("tool-logo");
  const name  = document.getElementById("tool-name");
  const cat   = document.getElementById("tool-cat");
  const short = document.getElementById("tool-short");
  const btn   = document.getElementById("visit-btn");

  if (logo)  logo.src          = t.logo_url || placeholderLogo(t.name);
  if (name)  name.textContent  = t.name;
  if (cat)   cat.textContent   = t.category || "";
  if (short) short.textContent = t.short_description || "";
  if (btn)   btn.href          = t.link || "#";
}

/* ─── RENDER: PHASE 1 — description + pricing ───────────────────── */
function renderPhase1(merged) {
  const box = document.getElementById("xe-phase1");
  if (!box) return;

  const p = merged.pricing;
  const pricingHTML = (p.free || p.plus || p.team) ? `
    <div class="mt-4 bg-gray-900/40 border border-gray-700 p-4 rounded-lg">
      ${p.free ? `<div><strong>Free:</strong> ${escapeHtml(p.free)}</div>` : ""}
      ${p.plus ? `<div><strong>Plus:</strong> ${escapeHtml(p.plus)}</div>` : ""}
      ${p.team ? `<div><strong>Team:</strong> ${escapeHtml(p.team)}</div>` : ""}
    </div>` : "";

  box.innerHTML = `
    <p class="text-gray-300 leading-relaxed">${escapeHtml(merged.long_description)}</p>
    ${pricingHTML}
  `;
}

/* ─── RENDER: PHASE 2 — screenshots + related tools ─────────────── */
function renderPhase2(tool, merged, toolsList) {
  const box = document.getElementById("xe-phase2");
  if (!box) return;

  const shots = merged.screenshots.length
    ? merged.screenshots.slice(0, 2)
    : [
        `https://dummyimage.com/900x500/${XE.PLACEHOLDER_BG}/fff&text=${encodeURIComponent(tool.name)}+1`,
        `https://dummyimage.com/900x500/${XE.PLACEHOLDER_BG}/fff&text=${encodeURIComponent(tool.name)}+2`
      ];

  const screenshotHTML = `
    <div class="grid grid-cols-2 gap-4 mb-6">
      ${shots.map(s => `
        <div class="overflow-hidden rounded-xl border border-gray-700 bg-gray-900 h-56">
          <img data-src="${s}" class="w-full h-full object-cover" />
        </div>`).join("")}
    </div>`;

  const related = toolsList
    .filter(t =>
      normalizeKey(t.category || "") === normalizeKey(tool.category || "") &&
      normalizeKey(t.name) !== normalizeKey(tool.name)
    )
    .slice(0, 4);

  const relatedHTML = related.length
    ? `<h3 class="text-xl font-semibold mb-3">Related Tools</h3>
       <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
         ${related.map(r => `
           <a href="tool.html?tool=${encodeURIComponent(r.name)}"
              class="flex items-center gap-3 p-3 bg-gray-800/40 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
             <img data-src="${r.logo_url || placeholderLogo(r.name)}" class="w-12 h-12 rounded-md object-cover" />
             <div class="flex-1">
               <div class="font-medium">${escapeHtml(r.name)}</div>
               <div class="text-gray-400 text-sm">${escapeHtml(r.category)}</div>
             </div>
             <span class="text-gray-400">→</span>
           </a>`).join("")}
       </div>`
    : `<p class="text-gray-400">No related tools found.</p>`;

  box.innerHTML = screenshotHTML + relatedHTML;
  lazyLoadImgs(box);
}

/* ─── LAZY IMAGE LOADER ─────────────────────────────────────────── */
function lazyLoadImgs(root) {
  const imgs = root.querySelectorAll("img[data-src]");
  if (!("IntersectionObserver" in window)) {
    imgs.forEach(img => { img.src = img.dataset.src; img.removeAttribute("data-src"); });
    return;
  }
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.src = e.target.dataset.src;
      e.target.removeAttribute("data-src");
      o.unobserve(e.target);
    });
  }, { rootMargin: "300px" });
  imgs.forEach(i => obs.observe(i));
}

/* ─── REVIEW TOGGLE ─────────────────────────────────────────────── */
(function initReviewToggle() {
  function setup() {
    const btn   = document.getElementById("toggle-reviews-btn");
    const wrap  = document.getElementById("reviews-wrapper");
    const text  = document.getElementById("toggle-text");
    const arrow = document.getElementById("toggle-arrow");
    if (!btn || !wrap) return;

    btn.addEventListener("click", () => {
      const hidden = wrap.classList.contains("hidden");
      wrap.classList.toggle("hidden");
      if (text)  text.textContent  = hidden ? "Hide reviews"    : "View all reviews";
      if (arrow) arrow.textContent = hidden ? "▲"               : "▼";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
})();

/* ─── MAIN: renderToolDetailsPageHydrate() ──────────────────────── */
async function renderToolDetailsPageHydrate() {
  const load = document.getElementById("loading");
  const box  = document.getElementById("tool-container");
  if (!load || !box) return;

  load.classList.remove("hidden");
  box.classList.add("hidden");

  const params  = new URLSearchParams(location.search);
  const toolKey = normalizeKey(params.get("tool") || "");

  // Load tools — use cache if fresh, otherwise hit Supabase
  let tools = [];
  const cached = safeGet(XE.CACHE_KEY);
  if (cached && Array.isArray(cached.data) && cached.data.length &&
      cached.ts && Date.now() - cached.ts < XE.CACHE_TTL) {
    tools = cached.data;
  } else {
    tools = await getTools();
  }

  const tool = findToolByName(tools, toolKey);
  if (!tool) {
    load.textContent = "Tool not found.";
    return;
  }

  const splitList = raw => (raw || "").split(/[,;\n]/).map(v => v.trim()).filter(Boolean);

  const merged = {
    long_description:  tool.long_description  || "",
    short_description: tool.short_description || "",
    pros:              splitList(tool.pros_raw),
    cons:              splitList(tool.cons_raw),
    key_features:      splitList(tool.key_features_raw),
    best_for:          splitList(tool.best_for_raw),
    standout:          tool.standout_raw || "",
    screenshots:       parseScreenshots(tool.screenshots_raw),
    pricing: {
      free: tool.pricing_free || "",
      plus: tool.pricing_plus || "",
      team: tool.pricing_team || ""
    }
  };

  // Set globals (renderProsCons + renderAbout read these)
  window.__TOOL_PROS__         = merged.pros;
  window.__TOOL_CONS__         = merged.cons;
  window.__TOOL_KEY_FEATURES__ = merged.key_features;
  window.__TOOL_BEST_FOR__     = merged.best_for;
  window.__TOOL_STANDOUT__     = merged.standout;
  window.__CURRENT_TOOL_DATA__ = { ...tool, short_description: merged.short_description };

  // Render hero immediately
  renderPhase0Instant(tool);
  renderProsCons();
  renderAbout();

  // Phase 1 — once only
  let phase1Done = false;
  const runPhase1 = () => { if (phase1Done) return; phase1Done = true; renderPhase1(merged); };
  requestIdleCallback(runPhase1);
  setTimeout(runPhase1, XE.PHASE1_TIMEOUT);

  // Phase 2 — once only, deferred
  let phase2Done = false;
  const runPhase2 = () => { if (phase2Done) return; phase2Done = true; renderPhase2(tool, merged, tools); };
  requestIdleCallback(runPhase2);
  setTimeout(runPhase2, XE.PHASE2_IDLE_MS);

  // Reveal page
  setTimeout(() => {
    load.classList.add("hidden");
    box.classList.remove("hidden");
  }, 120);
}

/* ─── EXPORTS ───────────────────────────────────────────────────── */
window.getTools                     = getTools;
window.findToolByName               = findToolByName;
window.renderToolDetailsPageHydrate = renderToolDetailsPageHydrate;
window.storeSelectedTool            = t => safeSet(XE.SELECTED_KEY, t);