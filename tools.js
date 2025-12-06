/* tools.js — Optimized + Clean UI version for tool.html
   Fully compatible with your sheet & layout
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
window.requestIdleCallback =
  window.requestIdleCallback ||
  function (cb) {
    return setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 50 }), 200);
  };

function normalizeKey(s) {
  return String(s || "").trim().toLowerCase();
}

function safeSet(key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    window._XE_CACHE = window._XE_CACHE || {};
    window._XE_CACHE[key] = value;
  }
}

function safeGet(key) {
  try {
    const v = sessionStorage.getItem(key);
    if (v) return JSON.parse(v);
  } catch (e) {}
  return (window._XE_CACHE && window._XE_CACHE[key]) || null;
}

function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, (c) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c];
  });
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

    const normalized = data.map((d) => ({
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

  let t = tools.find((x) => normalizeKey(x.name) === key);
  if (t) return t;

  t = tools.find((x) => normalizeKey(x.name).includes(key));
  if (t) return t;

  const noSpace = key.replace(/\s+/g, "");
  t = tools.find((x) => normalizeKey(x.name).replace(/\s+/g, "") === noSpace);
  if (t) return t;

  const cleaned = key.replace(/[^a-z0-9]/g, "");
  return (
    tools.find((x) => normalizeKey(x.name).replace(/[^a-z0-9]/g, "") === cleaned) ||
    null
  );
}

/* ======= placeholder logos ======= */
function placeholderLogo(name) {
  const tn = encodeURIComponent((name || "Tool").slice(0, 20).replace(/\s+/g, "+"));
  return `https://dummyimage.com/320x320/${XE.PLACEHOLDER_BG}/ffffff&text=${tn}`;
}

/* ------- Screenshot List Parser (Powerful, accepts ANY format) ------- */
function parseScreenshotList(s) {
  if (!s) return [];

  return String(s)
    .replace(/\n/g, ",") // newline support
    .replace(/\|/g, ",") // pipe support
    .split(/[,;\s]+/) // commas, spaces, semicolons
    .map((x) => x.trim())
    .filter((x) => x.startsWith("http"));
}

/* ======= PHASE 0 - instant render ======= */
function renderPhase0Instant(containerEl, t) {
  document.getElementById("tool-logo").src =
    t.logo_url && t.logo_url.startsWith("http")
      ? t.logo_url
      : placeholderLogo(t.name);

  document.getElementById("tool-name").textContent = t.name || "Unknown";
  document.getElementById("tool-cat").textContent = t.category || "";
  document.getElementById("tool-short").textContent = t.short_description || "";

  const btn = document.getElementById("visit-btn");
  btn.href = t.link || "#";
}

/* ======= PHASE 1 - long description + pricing ======= */
function renderPhase1(containerEl, merged) {
  const box = document.getElementById("xe-phase1");
  if (!box) return;

  const desc = merged.long_description || "";
  const p = merged.pricing;

  const pricingHTML =
    p.free || p.plus || p.team
      ? `
    <div class="mt-4 bg-gray-800/40 border border-gray-700 p-4 rounded-lg">
      ${p.free ? `<div><strong>Free:</strong> ${escapeHtml(p.free)}</div>` : ""}
      ${p.plus ? `<div><strong>Plus:</strong> ${escapeHtml(p.plus)}</div>` : ""}
      ${p.team ? `<div><strong>Team:</strong> ${escapeHtml(p.team)}</div>` : ""}
    </div>`
      : "";

  box.innerHTML = `
    <p class="text-gray-300 leading-relaxed">${escapeHtml(desc)}</p>
    ${pricingHTML}
  `;
}

function renderPhase2(containerEl, tool, merged, toolsList) {
  const box = document.getElementById("xe-phase2");
  if (!box) return;

  /* ---- screenshots (safe) ---- */
  let shots = merged.screenshots.length
    ? merged.screenshots.slice(0, 2)
    : [
        `https://dummyimage.com/900x500/${XE.PLACEHOLDER_BG}/fff&text=${encodeURIComponent(tool.name)}+Preview+1`,
        `https://dummyimage.com/900x500/${XE.PLACEHOLDER_BG}/fff&text=${encodeURIComponent(tool.name)}+Preview+2`
      ];

  const screenshotsHTML = `
    <div class="grid grid-cols-2 gap-4 mb-6">
      ${shots
        .map(
          (s) => `
        <div class="overflow-hidden rounded-xl border border-gray-700 bg-gray-900 h-56">
          <img data-src="${s}" class="w-full h-full object-cover" alt="${escapeHtml(tool.name)} screenshot" />
        </div>`
        )
        .join("")}
    </div>
  `;

  /* ---- pros / cons ---- */
  const prosHTML = `
    <div class="flex-1 bg-gray-900 border border-gray-700 p-5 rounded-xl">
      <h3 class="text-xl font-semibold mb-3">Pros</h3>
      <ul class="space-y-2">
        ${merged.pros.map((p) => `<li>✔ ${escapeHtml(p)}</li>`).join("")}
      </ul>
    </div>
  `;

  const consHTML = `
    <div class="flex-1 bg-gray-900 border border-gray-700 p-5 rounded-xl">
      <h3 class="text-xl font-semibold mb-3">Cons</h3>
      <ul class="space-y-2">
        ${merged.cons.map((c) => `<li>✖ ${escapeHtml(c)}</li>`).join("")}
      </ul>
    </div>
  `;

  /* ---- related tools (up to 4) ---- */
  const related = (Array.isArray(toolsList) ? toolsList : [])
    .filter(t => normalizeKey(t.category) === normalizeKey(tool.category) && normalizeKey(t.name) !== normalizeKey(tool.name))
    .slice(0, 4);

  const relatedHtml = related.length
    ? `<div>
         <h3 class="text-xl font-semibold mb-3">Related Tools</h3>
         <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
           ${related.map(r => {
             const logo = r.logo_url && r.logo_url.startsWith('http') ? r.logo_url : placeholderLogo(r.name);
             const safeName = escapeHtml(r.name);
             const safeCat = escapeHtml(r.category || "");
             const href = `tool.html?tool=${encodeURIComponent(r.name)}`;
             return `
               <a href="${href}" class="flex items-center gap-3 p-3 bg-gray-800/40 border border-gray-700 rounded-lg hover:bg-gray-800 transition" >
                 <img data-src="${logo}" alt="${safeName} logo" class="w-12 h-12 rounded-md object-cover" />
                 <div class="flex-1">
                   <div class="font-medium">${safeName}</div>
                   <div class="text-sm text-gray-400">${safeCat}</div>
                 </div>
                 <div class="text-gray-400">→</div>
               </a>
             `;
           }).join("")}
         </div>
       </div>`
    : `<div class="text-gray-400">No related tools.</div>`;

  /* ---- final render ---- */
  box.innerHTML = `
    ${screenshotsHTML}
    <div class="flex gap-6 mb-6">
      ${prosHTML}
      ${consHTML}
    </div>
    ${relatedHtml}
  `;

  lazyLoadImgs(box);
}




/* ======= Main hydration ======= */
async function renderToolDetailsPageHydrate() {
  const loadingEl = document.getElementById("loading");
  const containerEl = document.getElementById("tool-container");
  if (!containerEl) return;

  const params = new URLSearchParams(window.location.search);
  const toolParam = params.get("tool") || params.get("name") || "";
  const key = normalizeKey(decodeURIComponent(toolParam));

  loadingEl.classList.remove("hidden");
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

  const merged = {
    long_description: tool.long_description || "",
    pros: tool.pros_raw.split(/[,;\n]/).map((x) => x.trim()).filter(Boolean),
    cons: tool.cons_raw.split(/[,;\n]/).map((x) => x.trim()).filter(Boolean),
    screenshots: parseScreenshotList(tool.screenshots_raw),
    pricing: {
      free: tool.pricing_free,
      plus: tool.pricing_plus,
      team: tool.pricing_team
    }
  };

  /* ---- phase 0 ---- */
  renderPhase0Instant(containerEl, tool);

  /* ---- phase 1 ---- */
  requestIdleCallback(() => renderPhase1(containerEl, merged));
  setTimeout(() => renderPhase1(containerEl, merged), XE.PHASE1_TIMEOUT);

  /* ---- phase 2 ---- */
  let done = false;
  const doPhase2 = () => {
    if (!done) {
      done = true;
      renderPhase2(containerEl, tool, merged, tools);
    }
  };

  const ph2 = document.getElementById("xe-phase2");
  if (ph2) {
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            doPhase2();
            o.disconnect();
          }
        });
      },
      { rootMargin: "400px" }
    );
    obs.observe(ph2);
  }

  requestIdleCallback(doPhase2);
  setTimeout(doPhase2, XE.PHASE2_IDLE_MS);

  /* ---- reveal ---- */
  setTimeout(() => loadingEl.classList.add("hidden"), 140);
  containerEl.classList.remove("hidden");
}

/* ======= Export ======= */
window.getTools = getTools;
window.findToolByName = findToolByName;
window.renderToolDetailsPageHydrate = renderToolDetailsPageHydrate;
window.storeSelectedTool = function (t) {
  safeSet(XE.SELECTED_KEY, t);
};
