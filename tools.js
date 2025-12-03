/* tools.js — Robust, mobile-optimized replacement for tool.html hydration
   - Works with the provided tool.html (expects ids: loading, tool-container, tool-logo,
     tool-name, tool-cat, tool-short, visit-btn, xe-phase1, xe-phase2)
   - Safe caching, graceful fallbacks, lazy loading, low-priority heavy work
*/

/* ======= Config ======= */
const XE = {
  SHEET_URL: "https://script.google.com/macros/s/AKfycbxaA3BcQgW7PTFlSP9j4h16-p2us5IiuaYESUUpZiy8bObezI-nMUxXAC28tR15FU_U/exec",
  CACHE_KEY: "xedge_tools_v1",
  SELECTED_KEY: "xedge_selected_tool",
  PHASE1_TIMEOUT: 120,
  PHASE2_IDLE_MS: 600,
  PLACEHOLDER_BG: "1e293b",
  IMAGE_HINT: "?auto=compress&format=webp&w=600"
};

/* ======= Polyfills & helpers ======= */
window.requestIdleCallback = window.requestIdleCallback || function (cb) {
  return setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 50 }), 200);
};

function normalizeKey(s) { return String(s || "").trim().toLowerCase(); }
function safeSet(key, value) {
  try { sessionStorage.setItem(key, JSON.stringify(value)); }
  catch (e) { window._XE_CACHE = window._XE_CACHE || {}; window._XE_CACHE[key] = value; }
}
function safeGet(key) {
  try { const v = sessionStorage.getItem(key); if (v) return JSON.parse(v); }
  catch (e) {}
  return (window._XE_CACHE && window._XE_CACHE[key]) || null;
}
function escapeHtml(s){ 
  return String(s||"").replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

/* ======= Fetch & normalize tools ======= */
async function getTools(force = false) {
  if (!force) {
    const cached = safeGet(XE.CACHE_KEY);
    if (Array.isArray(cached) && cached.length) return cached;
  }

  try {
    const res = await fetch(XE.SHEET_URL + "?t=" + Date.now(), { cache: "no-store" });
    if (!res.ok) throw new Error("Status " + res.status);

    const data = await res.json();
    if (!Array.isArray(data)) throw new Error("Invalid sheet format");

    const normalized = data.map(d => ({
      name: d.name || d.title || "Unknown",
      short_description: d.short_description || d.short || "",
      long_description: d.long_description || d.description || "",
      category: d.category || "",
      logo_url: d.logo_url || d.logo || "",
      link: d.link || "#",
      pros_raw: d.pros || "",
      cons_raw: d.cons || "",
      screenshots_raw: d.screenshots || "",
      pricing_free: d.pricing_free || "",
      pricing_plus: d.pricing_plus || "",
      pricing_team: d.pricing_team || "",
      __raw: d
    }));

    safeSet(XE.CACHE_KEY, normalized);
    return normalized;

  } catch (err) {
    console.warn("getTools error", err);
    const fallback = safeGet(XE.CACHE_KEY);
    return Array.isArray(fallback) ? fallback : [];
  }
}

/* ======= Finder ======= */
function findToolByName(tools, rawName) {
  const key = normalizeKey(rawName || "");
  if (!key) return null;

  let t = tools.find(x => normalizeKey(x.name) === key);
  if (t) return t;

  t = tools.find(x => normalizeKey(x.name).includes(key));
  if (t) return t;

  const noSpace = key.replace(/\s+/g, "");
  t = tools.find(x => normalizeKey(x.name).replace(/\s+/g, "") === noSpace);
  if (t) return t;

  const cleaned = key.replace(/[^a-z0-9]/g, "");
  return tools.find(x => normalizeKey(x.name).replace(/[^a-z0-9]/g, "") === cleaned) || null;
}

/* ======= Placeholder helper images ======= */
function placeholderLogo(name) {
  const tn = encodeURIComponent((name || "Tool").slice(0, 20).replace(/\s+/g, "+"));
  return `https://dummyimage.com/320x320/${XE.PLACEHOLDER_BG}/ffffff&text=${tn}`;
}

/* ======= Phase renderers ======= */
function renderPhase0Instant(containerEl, t) {
  const logoEl = document.getElementById("tool-logo");
  const nameEl = document.getElementById("tool-name");
  const catEl = document.getElementById("tool-cat");
  const shortEl = document.getElementById("tool-short");
  const visitBtn = document.getElementById("visit-btn");

  if (logoEl) {
    const hasLogo = t.logo_url && t.logo_url.startsWith("http");
    logoEl.src = hasLogo
      ? (t.logo_url + (t.logo_url.includes("?") ? "&" : "?") + XE.IMAGE_HINT.slice(1))
      : placeholderLogo(t.name);
  }

  if (nameEl) nameEl.textContent = t.name || "Unknown";
  if (catEl) catEl.textContent = t.category || "";
  if (shortEl) shortEl.textContent = t.short_description || "";

  if (visitBtn) {
    visitBtn.href = t.link || "#";
    visitBtn.setAttribute("rel", "noopener noreferrer");
  }
}

function renderPhase1(containerEl, merged) {
  const phase1 = document.getElementById("xe-phase1");
  if (!phase1) return;

  const desc = merged.long_description || "";
  const pricing = merged.pricing || {};

  const pricingHtml = (pricing.free || pricing.plus || pricing.team) ? `
    <div style="background:rgba(55,65,81,0.35);padding:12px;border-radius:10px;margin-top:8px">
      ${pricing.free ? `<div><strong>Free:</strong> ${escapeHtml(pricing.free)}</div>` : ""}
      ${pricing.plus ? `<div><strong>Plus:</strong> ${escapeHtml(pricing.plus)}</div>` : ""}
      ${pricing.team ? `<div><strong>Team:</strong> ${escapeHtml(pricing.team)}</div>` : ""}
    </div>` : "";

  phase1.innerHTML =
    `<div style="color:#d1d5db;line-height:1.65">${escapeHtml(desc)}</div>${pricingHtml}`;
}

function lazyLoadImgs(root) {
  const imgs = Array.from(root.querySelectorAll("img[data-src]"));
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

function renderPhase2(containerEl, tool, merged, toolsList) {
  const phase2 = document.getElementById("xe-phase2");
  if (!phase2) return;

  const shots = merged.screenshots.length
    ? merged.screenshots.slice(0, 2)
    : [
        `https://dummyimage.com/900x500/${XE.PLACEHOLDER_BG}/ffffff&text=${encodeURIComponent(tool.name)}+Preview+1`,
        `https://dummyimage.com/900x500/${XE.PLACEHOLDER_BG}/ffffff&text=${encodeURIComponent(tool.name)}+Preview+2`
      ];

  const prosHtml = merged.pros.length
    ? `<div><h4 style="font-weight:600">Pros</h4><ul>${merged.pros.map(p => `<li>✔ ${escapeHtml(p)}</li>`).join("")}</ul></div>`
    : "";

  const consHtml = merged.cons.length
    ? `<div><h4 style="font-weight:600">Cons</h4><ul>${merged.cons.map(c => `<li>✖ ${escapeHtml(c)}</li>`).join("")}</ul></div>`
    : "";

  const related = toolsList
    .filter(t => normalizeKey(t.category) === normalizeKey(tool.category) && normalizeKey(t.name) !== normalizeKey(tool.name))
    .slice(0, 4);

  const relatedHtml = related.length
    ? `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
         ${related.map(r => `
           <a href="tool.html?tool=${encodeURIComponent(r.name)}" style="display:block;padding:8px;background:rgba(55,65,81,0.35);border-radius:8px">
            <div style="display:flex;align-items:center;gap:8px">
              <img data-src="${r.logo_url || placeholderLogo(r.name)}" style="width:44px;height:44px;border-radius:8px;object-fit:cover" />
              <div>
                <div style="font-weight:600">${escapeHtml(r.name)}</div>
                <div style="color:#9CA3AF;font-size:12px">${escapeHtml(r.category)}</div>
              </div>
            </div>
           </a>`).join("")}
       </div>`
    : `<div style="color:#9CA3AF">No related tools.</div>`;

  const shotsHtml = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
      ${shots.map(s => `<div style="overflow:hidden;border-radius:10px"><img data-src="${s}" style="width:100%;height:140px;object-fit:cover" /></div>`).join("")}
    </div>
  `;

  phase2.innerHTML =
    shotsHtml +
    `<div style="margin-bottom:12px">${prosHtml}${consHtml}</div>` +
    `<h3 style="font-weight:700;margin-bottom:8px">Related Tools</h3>${relatedHtml}`;

  lazyLoadImgs(phase2);
}

/* ======= Main hydration ======= */
async function renderToolDetailsPageHydrate() {
  const loadingEl = document.getElementById("loading");
  const containerEl = document.getElementById("tool-container");
  if (!containerEl) return;

  const params = new URLSearchParams(window.location.search);
  const toolParam = params.get("tool") || params.get("name") || "";
  const key = normalizeKey(decodeURIComponent(toolParam));

  if (loadingEl) loadingEl.classList.remove("hidden");
  containerEl.classList.add("hidden");

  let selected = safeGet(XE.SELECTED_KEY);
  if (selected && normalizeKey(selected.name) === key) {
    containerEl.classList.remove("hidden");
    renderPhase0Instant(containerEl, selected);
  }

  let tools = safeGet(XE.CACHE_KEY);
  if (!tools) tools = await getTools();
  safeSet(XE.CACHE_KEY, tools);

  const tool = findToolByName(tools, key) || selected;
  if (!tool) {
    loadingEl.textContent = "Tool not found.";
    return;
  }

  const parseList = s => (s || "").split(/[,;]\s*/).map(x => x.trim()).filter(Boolean);
  const merged = {
    long_description: tool.long_description || "",
    pros: parseList(tool.pros_raw),
    cons: parseList(tool.cons_raw),
    screenshots: parseList(tool.screenshots_raw),
    pricing: {
      free: tool.pricing_free,
      plus: tool.pricing_plus,
      team: tool.pricing_team
    }
  };

  renderPhase0Instant(containerEl, tool);

  requestIdleCallback(() => renderPhase1(containerEl, merged));
  setTimeout(() => renderPhase1(containerEl, merged), XE.PHASE1_TIMEOUT);

  let done = false;
  const doPhase2 = () => { if (!done) { done = true; renderPhase2(containerEl, tool, merged, tools); } };

  const ph2 = document.getElementById("xe-phase2");
  if (ph2) {
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => { if (e.isIntersecting) { doPhase2(); o.disconnect(); } });
    }, { rootMargin: "400px" });
    obs.observe(ph2);
  }

  requestIdleCallback(doPhase2);
  setTimeout(doPhase2, XE.PHASE2_IDLE_MS);

  setTimeout(() => loadingEl.classList.add("hidden"), 140);
}

/* ======= Export ======= */
window.getTools = getTools;
window.findToolByName = findToolByName;
window.renderToolDetailsPageHydrate = renderToolDetailsPageHydrate;
window.storeSelectedTool = function(t){ safeSet(XE.SELECTED_KEY, t); };
