/* tools.js — Robust, mobile-optimized replacement for tool.html hydration
   - Works with the provided tool.html (expects ids: loading, tool-container, tool-logo,
     tool-name, tool-cat, tool-short, visit-btn, xe-phase1, xe-phase2)
   - Safe caching, graceful fallbacks, lazy loading, low-priority heavy work
   - Paste this file (replace your current tools.js)
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
  try { sessionStorage.setItem(key, JSON.stringify(value)); } catch (e) { window._XE_CACHE = window._XE_CACHE || {}; window._XE_CACHE[key] = value; }
}
function safeGet(key) {
  try { const v = sessionStorage.getItem(key); if (v) return JSON.parse(v); } catch (e) {}
  return (window._XE_CACHE && window._XE_CACHE[key]) || null;
}
function escapeHtml(s){ return String(s||"").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* ======= Fetch & normalize tools (with cache/fallback) ======= */
async function getTools(force = false) {
  if (!force) {
    const cached = safeGet(XE.CACHE_KEY);
    if (Array.isArray(cached) && cached.length) return cached;
  }

  try {
    const res = await fetch(XE.SHEET_URL + "?t=" + Date.now(), { cache: "no-store" });
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
  let t = tools.find(x => normalizeKey(x.name) === key); if (t) return t;
  t = tools.find(x => normalizeKey(x.name).includes(key)); if (t) return t;
  const noSpace = key.replace(/\s+/g, "");
  t = tools.find(x => normalizeKey(x.name).replace(/\s+/g, "") === noSpace); if (t) return t;
  const cleaned = key.replace(/[^a-z0-9]/g, "");
  t = tools.find(x => normalizeKey(x.name).replace(/[^a-z0-9]/g, "") === cleaned);
  return t || null;
}

/* ======= Placeholder helper images ======= */
function placeholderLogo(name) {
  const tn = encodeURIComponent((name || "Tool").slice(0, 20).replace(/\s+/g, "+"));
  return `https://dummyimage.com/320x320/${XE.PLACEHOLDER_BG}/ffffff&text=${tn}`;
}

/* ======= Phase renderers ======= */
function renderPhase0Instant(containerEl, t) {
  // quick hero using existing small elements in tool.html
  const logoEl = document.getElementById("tool-logo");
  const nameEl = document.getElementById("tool-name");
  const catEl = document.getElementById("tool-cat");
  const shortEl = document.getElementById("tool-short");
  const visitBtn = document.getElementById("visit-btn");

  if (logoEl) let logo = (t.logo_url || "").trim();

// Remove spaces
logo = logo.replace(/\s+/g, "%20");

// Add https if missing
if (logo && !logo.startsWith("http")) {
  logo = "https://" + logo;
}

// If empty → placeholder
if (!logo) {
  logo = placeholderLogo(t.name);
} else {
  // Append image params safely
  const sep = logo.includes("?") ? "&" : "?";
  logo = logo + sep + "auto=compress&format=webp&w=600";
}

logoEl.src = logo;

// Hard fallback
logoEl.onerror = () => {
  logoEl.src = placeholderLogo(t.name);
};

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

  const desc = merged.long_description || merged.short_description || "";
  const pricing = merged.pricing || {};

  const pricingHtml = (pricing.free || pricing.plus || pricing.team) ? `
    <div style="background:rgba(55,65,81,0.35);padding:12px;border-radius:10px;margin-top:8px">
      ${pricing.free ? `<div><strong>Free:</strong> ${escapeHtml(pricing.free)}</div>` : ""}
      ${pricing.plus ? `<div><strong>Plus:</strong> ${escapeHtml(pricing.plus)}</div>` : ""}
      ${pricing.team ? `<div><strong>Team:</strong> ${escapeHtml(pricing.team)}</div>` : ""}
    </div>` : "";

  phase1.innerHTML = `<div style="color:#d1d5db;line-height:1.65">${escapeHtml(desc)}</div>${pricingHtml}`;
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

  // screenshots fallback
  const shots = (merged.screenshots && merged.screenshots.length) ? merged.screenshots.slice(0, 2) : [
    `https://dummyimage.com/900x500/${XE.PLACEHOLDER_BG}/ffffff&text=${encodeURIComponent(tool.name)}+Preview+1`,
    `https://dummyimage.com/900x500/${XE.PLACEHOLDER_BG}/ffffff&text=${encodeURIComponent(tool.name)}+Preview+2`
  ];

  const prosHtml = (merged.pros && merged.pros.length) ? `<div style="margin-bottom:8px"><h4 style="font-weight:600;margin-bottom:6px">Pros</h4><ul>${merged.pros.map(p => `<li>✔ ${escapeHtml(p)}</li>`).join("")}</ul></div>` : "";
  const consHtml = (merged.cons && merged.cons.length) ? `<div style="margin-bottom:8px"><h4 style="font-weight:600;margin-bottom:6px">Cons</h4><ul>${merged.cons.map(c => `<li>✖ ${escapeHtml(c)}</li>`).join("")}</ul></div>` : "";

  // related
  const related = (Array.isArray(toolsList) ? toolsList.filter(t => normalizeKey(t.category) === normalizeKey(tool.category) && normalizeKey(t.name) !== normalizeKey(tool.name)).slice(0, 4) : []);
  const relatedHtml = related.length ? `<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">${related.map(r => `
      <a href="tool.html?tool=${encodeURIComponent(r.name)}" style="display:block;padding:8px;border-radius:8px;background:rgba(55,65,81,0.35);text-decoration:none;color:inherit">
        <div style="display:flex;align-items:center;gap:8px">
          <img data-src="${escapeHtml(r.logo_url || placeholderLogo(r.name))}" style="width:44px;height:44px;border-radius:8px;object-fit:cover"/>
          <div>
            <div style="font-weight:600">${escapeHtml(r.name)}</div>
            <div style="color:#9CA3AF;font-size:12px">${escapeHtml(r.category||"")}</div>
          </div>
        </div>
      </a>`).join("")}</div>` : `<div style="color:#9CA3AF">No related tools.</div>`;

  const shotsHtml = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
    ${shots.map(s => `<div style="overflow:hidden;border-radius:10px;background:#071018"><img data-src="${escapeHtml(s)}" style="width:100%;height:140px;object-fit:cover;display:block" /></div>`).join("")}
  </div>`;

  phase2.innerHTML = shotsHtml + `<div style="margin-bottom:12px">${prosHtml}${consHtml}</div><div><h3 style="font-weight:700;margin-bottom:8px">Related Tools</h3>${relatedHtml}</div>`;

  // lazy load images in this block
  lazyLoadImgs(phase2);
}

/* ======= Main hydration (used by your tool.html) ======= */
async function renderToolDetailsPageHydrate() {
  // expected DOM nodes from your tool.html
  const loadingEl = document.getElementById("loading");
  const containerEl = document.getElementById("tool-container");
  if (!containerEl) return; // nothing to do if page doesn't have container

  // param parsing
  const params = new URLSearchParams(window.location.search);
  const toolParam = params.get("tool") || params.get("name") || "";
  const key = normalizeKey(decodeURIComponent(toolParam || ""));

  // show loading
  if (loadingEl) { loadingEl.classList.remove("hidden"); loadingEl.textContent = "Loading tool..."; }
  containerEl.classList.add("hidden");

  // attempt instant hydration from previously cached selected tool (click-through)
  let selected = null;
  try { const cachedSel = safeGet(XE.SELECTED_KEY); if (cachedSel && normalizeKey(cachedSel.name) === key) selected = cachedSel; } catch (e) { /* ignore */ }

  if (selected) {
    // reveal container and render minimal hero from selected
    containerEl.classList.remove("hidden");
    renderPhase0Instant(containerEl, selected);
  } else {
    // show skeleton inside container so page isn't blank
    containerEl.classList.remove("hidden");
    // Clear hero placeholders (tool.html has default placeholders)
    const nameEl = document.getElementById("tool-name"); if (nameEl) nameEl.textContent = "";
    const shortEl = document.getElementById("tool-short"); if (shortEl) shortEl.textContent = "";
  }

  // fetch authoritative list (cache-first to avoid mobile lag)
  let tools = safeGet(XE.CACHE_KEY);
  if (!tools || !Array.isArray(tools) || tools.length < 1) {
    tools = await getTools().catch(() => []);
  }
  // keep cache up-to-date
  safeSet(XE.CACHE_KEY, tools);

  const tool = findToolByName(tools, key) || selected;
  if (!tool) {
    if (loadingEl) loadingEl.textContent = "Tool not found.";
    return;
  }

  // merge sheet extras
  const parseList = s => (s || "").split(/[,;]\s*/).map(x => x.trim()).filter(Boolean);
  const extra = {
    long_description: tool.long_description || "",
    pros: parseList(tool.pros_raw),
    cons: parseList(tool.cons_raw),
    screenshots: parseList(tool.screenshots_raw),
    pricing: { free: tool.pricing_free || "", plus: tool.pricing_plus || "", team: tool.pricing_team || "" },
    youtube: (tool.__raw && (tool.__raw.youtube || tool.__raw.yt || "")) || ""
  };

  const merged = {
    long_description: extra.long_description,
    pros: extra.pros,
    cons: extra.cons,
    screenshots: extra.screenshots,
    pricing: extra.pricing,
    youtube: extra.youtube
  };

  // update hero (phase0 final)
  renderPhase0Instant(containerEl, tool);

  // schedule phase1 quickly but non-blocking
  requestIdleCallback(() => {
    try { renderPhase1(containerEl, merged); } catch (e) { console.error(e); }
  });
  setTimeout(() => { try { renderPhase1(containerEl, merged); } catch (e) { } }, XE.PHASE1_TIMEOUT);

  // schedule phase2 (heavy) on idle / scroll / timeout
  let phase2Done = false;
  const doPhase2 = async () => {
    if (phase2Done) return; phase2Done = true;
    try {
      renderPhase2(containerEl, tool, merged, tools);
    } catch (e) { console.error("phase2 error", e); }
  };

  const placeholder = document.getElementById("xe-phase2");
  if (placeholder) {
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(en => {
        if (en.isIntersecting) { doPhase2(); o.disconnect(); }
      });
    }, { rootMargin: "400px" });
    obs.observe(placeholder);
  }

  requestIdleCallback(() => doPhase2());
  setTimeout(() => { if (!phase2Done) doPhase2(); }, XE.PHASE2_IDLE_MS);

  // hide loading when ready
  setTimeout(() => { if (loadingEl) loadingEl.classList.add("hidden"); }, 140);
}

/* ======= Utility: allow other pages to pre-store selected tool for instant hydration ======= */
function storeSelectedTool(toolObj) {
  if (!toolObj || !toolObj.name) return;
  try { safeSet(XE.SELECTED_KEY, toolObj); } catch (e) {}
}

/* ======= Exports ======= */
window.getTools = getTools;
window.findToolByName = findToolByName;
window.renderToolDetailsPageHydrate = renderToolDetailsPageHydrate;
window.storeSelectedTool = storeSelectedTool;
