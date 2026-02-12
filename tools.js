/* tools.js — FINAL CLEAN & FULLY FIXED VERSION
   ✔ Screenshot parser fixed
   ✔ Pros/cons parser fixed
   ✔ Related tools working perfectly
   ✔ Fully compatible with your previous HTML + Explore + Categories
*/ 


/* ===== CONFIG ===== */   
const XE = {
  SHEET_URL: "https://script.google.com/macros/s/AKfycbxXs2ajlwcddAMVEMY5NAMns_ooeEAHSYwDk84nnD6cU2hLjx_k5HKOgFLm-EX_ASSv/exec",
  CACHE_KEY: "xedge_tools_v1",
  SELECTED_KEY: "xedge_selected_tool",
  IMAGE_HINT: "?auto=compress&format=webp&w=600",
  PLACEHOLDER_BG: "1e293b",
  PHASE1_TIMEOUT: 120,
  PHASE2_IDLE_MS: 600
};

/* ===== HELPERS ===== */
window.requestIdleCallback = window.requestIdleCallback || function (cb) {
  return setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 50 }), 200);
};

function normalizeKey(s) { return String(s || "").trim().toLowerCase(); }

function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function safeSet(k, v) {
  try { sessionStorage.setItem(k, JSON.stringify(v)); }
  catch { (window._XE_CACHE ||= {})[k] = v; }
}
function safeGet(k) {
  try { const v = sessionStorage.getItem(k); return v ? JSON.parse(v) : null; }
  catch { return (window._XE_CACHE || {})[k] || null; }
}

/* ===== FETCH TOOLS ===== */
async function getTools(force = false) {
  if (!force) {
    const cached = safeGet(XE.CACHE_KEY);
    if (Array.isArray(cached) && cached.length) return cached;
  }

  try {
    const res = await fetch(XE.SHEET_URL + "?t=" + Date.now(), { cache: "no-store" });
    const raw = await res.json();

    const tools = raw.map(d => ({
      name: d.name || d.title || "Unknown",
      category: d.category || "",
      short_description: d.short_description || d.short || "",
      long_description: d.long_description || d.description || "",
      logo_url: d.logo_url || d.logo || "",
      link: d.link || "#",
      pros_raw: d.pros || "",
      cons_raw: d.cons || "",
      screenshots_raw: d.screenshots || "",
      pricing_free: d.pricing_free || "",
      pricing_plus: d.pricing_plus || "",
      pricing_team: d.pricing_team || ""
    }));

    safeSet(XE.CACHE_KEY, tools);
    return tools;

  } catch (e) {
    return safeGet(XE.CACHE_KEY) || [];
  }
}

/* ===== FIND TOOL ===== */
function findToolByName(list, rawName) {
  const key = normalizeKey(rawName);
  return (
    list.find(t => normalizeKey(t.name) === key) ||
    list.find(t => normalizeKey(t.name).includes(key)) ||
    list.find(t => normalizeKey(t.name).replace(/\s+/g, "") === key.replace(/\s+/g, "")) ||
    null
  );
}
console.log("=== DEBUGGING ABOUT SECTION ===");
console.log("Tool data:", window.__CURRENT_TOOL_DATA__);
console.log("Pros data:", window.__TOOL_PROS__);
console.log("Cons data:", window.__TOOL_CONS__);
console.log("About section exists:", document.getElementById("about-tool-section") !== null);
console.log("Features UL exists:", document.getElementById("about-features") !== null);
console.log("BestFor UL exists:", document.getElementById("about-bestfor") !== null);
console.log("Standout P exists:", document.getElementById("about-standout") !== null);

/* ===== ABOUT SECTION - TIMING FIXED ===== */
function renderAbout() {
  console.log("renderAbout() called");
  
  const aboutSection = document.getElementById("about-tool-section");
  if (!aboutSection) {
    console.log("About section not found");
    return;
  }

  // Wait for data to be available
  const checkData = () => {
     const cons = window.__TOOL_CONS__ || [];
    const pros = window.__TOOL_PROS__ || [];
    const toolData = window.__CURRENT_TOOL_DATA__;
    
    console.log("Checking data:", { hasPros: pros.length, hasToolData: !!toolData });

    if (!toolData && pros.length === 0) {
      console.log("No data available yet, retrying...");
      setTimeout(checkData, 100);
      return;
    }

    // We have data, proceed with rendering
    let hasContent = false;

    // Key Features (using pros)
    if (pros.length > 0) {
      const ul = document.getElementById("about-features");
      if (ul) {
        ul.innerHTML = pros.slice(0, 4).map(f => `<li>✓ ${escapeHtml(f)}</li>`).join("");
        hasContent = true;
        console.log("Features rendered");
      }
    }

    // Best For (using category)
    if (toolData?.category) {
      const ul = document.getElementById("about-bestfor");
      if (ul) {
        ul.innerHTML = `<li>${escapeHtml(toolData.category)} professionals</li>
                        <li>Teams in ${escapeHtml(toolData.category)}</li>
                        <li>Students and beginners</li>`;
        hasContent = true;
        console.log("Best for rendered");
      }
    }

    // Standout (using short description)
    if (toolData?.short_description) {
      const p = document.getElementById("about-standout");
      if (p) {
        p.textContent = toolData.short_description;
        hasContent = true;
        console.log("Standout rendered");
      }
    }

    if (hasContent) {
      aboutSection.classList.remove("hidden");
      console.log("About section revealed!");
    }
  };

  // Start checking for data
  checkData();
}

/* ===== MODIFIED PLACEMENT - SAFER TIMING ===== */
// In your main function, change this:
setTimeout(() => {
  renderAbout(); // This gives time for data to be set
}, 500); // 500ms delay to ensure data is ready

/* ===== PLACEHOLDER LOGO ===== */
function placeholderLogo(name) {
  return `https://dummyimage.com/320x320/${XE.PLACEHOLDER_BG}/ffffff&text=${encodeURIComponent(
    name || "Tool"
  )}`;
}

/* ===== FIXED SCREENSHOT PARSER ===== */
function parseScreenshots(s) {
  if (!s) return [];
  return String(s)
    .replace(/\n/g, ",")
    .replace(/\|/g, ",")
    .split(",")
    .map(v => v.trim())
    .filter(v => v.startsWith("http"));
}

/* ===== PHASE 0 ===== */
function renderPhase0Instant(t) {
  const logo = document.getElementById("tool-logo");
  const name = document.getElementById("tool-name");
  const cat = document.getElementById("tool-cat");
  const short = document.getElementById("tool-short");
  const btn = document.getElementById("visit-btn");

  logo.src = t.logo_url || placeholderLogo(t.name);
  name.textContent = t.name;
  cat.textContent = t.category || "";
  short.textContent = t.short_description;
  btn.href = t.link || "#";
}

/* ===== PHASE 1 ===== */
function renderPhase1(merged) {
  const box = document.getElementById("xe-phase1");
  if (!box) return;

  const p = merged.pricing;
  const pricing = (p.free || p.plus || p.team)
    ? `
      <div class="mt-4 bg-gray-900/40 border border-gray-700 p-4 rounded-lg">
        ${p.free ? `<div><strong>Free:</strong> ${escapeHtml(p.free)}</div>` : ""}
        ${p.plus ? `<div><strong>Plus:</strong> ${escapeHtml(p.plus)}</div>` : ""}
        ${p.team ? `<div><strong>Team:</strong> ${escapeHtml(p.team)}</div>` : ""}
      </div>`
    : "";

  box.innerHTML = `
    <p class="text-gray-300 leading-relaxed">${escapeHtml(merged.long_description)}</p>
    ${pricing}
  `;
}

/* ===== PHASE 2 ===== */
function renderPhase2(tool, merged, toolsList) {
  const box = document.getElementById("xe-phase2");
  if (!box) return;

  /* Screenshots */
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
        </div>
      `).join("")}
    </div>
  `;

  /* ===== RELATED TOOLS (FIXED) ===== */
  const related = toolsList
    .filter(
      t =>
        normalizeKey(t.category || "") === normalizeKey(tool.category || "") &&
        normalizeKey(t.name) !== normalizeKey(tool.name)
    )
    .slice(0, 4);

  const relatedHTML = related.length
    ? `
      <h3 class="text-xl font-semibold mb-3">Related Tools</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${related.map(r => {
          const logo = r.logo_url || placeholderLogo(r.name);
          return `
            <a href="tool.html?tool=${encodeURIComponent(r.name)}"
               class="flex items-center gap-3 p-3 bg-gray-800/40 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
              <img data-src="${logo}" class="w-12 h-12 rounded-md object-cover" />
              <div class="flex-1">
                <div class="font-medium">${escapeHtml(r.name)}</div>
                <div class="text-gray-400 text-sm">${escapeHtml(r.category)}</div>
              </div>
              <span class="text-gray-400">→</span>
            </a>`;
        }).join("")}
      </div>
    `
    : `<p class="text-gray-400">No related tools.</p>`;

  /* Final render */
  box.innerHTML = `
    ${screenshotHTML}
    ${relatedHTML}
  `;

  lazyLoadImgs(box);
}

/*lazy images*/
function lazyLoadImgs(root) {
  const imgs = root.querySelectorAll("img[data-src]");
  if (!("IntersectionObserver" in window)) {
    imgs.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
    });
    return;
  }

  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const img = e.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        o.unobserve(img);
      }
    });
  }, { rootMargin: "300px" });

  imgs.forEach(i => obs.observe(i));
}

/* ===== MAIN HYDRATION — REFINED ===== */
async function renderToolDetailsPageHydrate() {
  const load = document.getElementById("loading");
  const box = document.getElementById("tool-container");

  if (!load || !box) return;

  load.classList.remove("hidden");
  box.classList.add("hidden");

  const params = new URLSearchParams(location.search);
  const toolKey = normalizeKey(params.get("tool") || "");

  let tools = safeGet(XE.CACHE_KEY);
  if (!Array.isArray(tools) || !tools.length) {
    tools = await getTools();
    safeSet(XE.CACHE_KEY, tools);
  }

  const tool = findToolByName(tools, toolKey);
  if (!tool) {
    load.textContent = "Tool not found.";
    return;
  }

  /* ===== PARSE TOOL DATA ===== */
  const merged = {
    long_description: tool.long_description || "",
    pros: (tool.pros_raw || "")
      .split(/[,;\n]/)
      .map(v => v.trim())
      .filter(Boolean),
    cons: (tool.cons_raw || "")
      .split(/[,;\n]/)
      .map(v => v.trim())
      .filter(Boolean),
    screenshots: parseScreenshots(tool.screenshots_raw),
    pricing: {
      free: tool.pricing_free || "",
      plus: tool.pricing_plus || "",
      team: tool.pricing_team || ""
    }
  };

/* ===== GLOBAL ACCESS (MOBILE TOGGLE SAFE) ===== */
window.__TOOL_PROS__ = merged.pros;
window.__TOOL_CONS__ = merged.cons;
window.__CURRENT_TOOL_DATA__ = tool;  // ← ADD THIS LINE
renderProsCons();                     // ← EXISTING LINE
renderAbout();                        // ← ADD THIS LINE

/* ===== ABOUT SECTION RENDERING ===== */
function renderAbout() {
  const aboutBox = document.getElementById("about-box");
  const aboutContent = document.getElementById("about-content");
  
  if (!aboutBox || !aboutContent) return;
  
  // Check if we have About data from the Google Sheet
  const toolData = window.__CURRENT_TOOL_DATA__; // We'll need to store this
  if (toolData && toolData.about) {
    aboutContent.innerHTML = escapeHtml(toolData.about);
    aboutBox.classList.remove("hidden");
  }
}
  /* ===== RENDER ===== */
  renderPhase0Instant(tool);

  requestIdleCallback(() => renderPhase1(merged));
  setTimeout(() => renderPhase1(merged), XE.PHASE1_TIMEOUT);

  let phase2Done = false;
  const runPhase2 = () => {
    if (phase2Done) return;
    phase2Done = true;
    renderPhase2(tool, merged, tools);
  };

  requestIdleCallback(runPhase2);
  setTimeout(runPhase2, XE.PHASE2_IDLE_MS);

  /* ===== SHOW PAGE ===== */
  setTimeout(() => {
    load.classList.add("hidden");
    box.classList.remove("hidden");
  }, 120);
}

/* ===== EXPORTS ===== */
window.getTools = getTools;
window.findToolByName = findToolByName;
window.renderToolDetailsPageHydrate = renderToolDetailsPageHydrate;
window.storeSelectedTool = t => safeSet(XE.SELECTED_KEY, t);
/*pros and cons */
function renderProsCons() {
  const prosUl = document.querySelector("#pros-box ul");
  const consUl = document.querySelector("#cons-box ul");

  if (prosUl && Array.isArray(window.__TOOL_PROS__)) {
    prosUl.innerHTML = window.__TOOL_PROS__
      .map(p => `<li>✔ ${escapeHtml(p)}</li>`)
      .join("");
  }

  if (consUl && Array.isArray(window.__TOOL_CONS__)) {
    consUl.innerHTML = window.__TOOL_CONS__
      .map(c => `<li>✖ ${escapeHtml(c)}</li>`)
      .join("");
  }
}
(function () {
  const btn = document.getElementById("toggle-reviews-btn");
  const wrap = document.getElementById("reviews-wrapper");
  const text = document.getElementById("toggle-text");
  const arrow = document.getElementById("toggle-arrow");

  if (!btn || !wrap || !text || !arrow) return;

  btn.addEventListener("click", () => {
    const isHidden = wrap.classList.contains("hidden");

    wrap.classList.toggle("hidden");

    if (isHidden) {
      text.textContent = "Hide reviews";
      arrow.textContent = "▲";
    } else {
      text.textContent = "View all reviews";
      arrow.textContent = "▼";
    }
  });
})();

