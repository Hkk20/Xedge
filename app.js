/* ===========================================================
   X-EDGE — FINAL app.js (Explore + Tool Page)
   FASTEST VERSION – Mobile Optimized – NO LAG
=========================================================== */

/* ---------------- CONFIG ---------------- */
const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxaA3BcQgW7PTFlSP9j4h16-p2us5IiuaYESUUpZiy8bObezI-nMUxXAC28tR15FU_U/exec";

let ALL_TOOLS = [];
let FILTERED_TOOLS = [];
let RENDER_INDEX = 0;
const BATCH_SIZE = 12;

/* ===========================================================
   1. FETCH TOOLS (YOU WERE MISSING THIS FUNCTION)
=========================================================== */
async function getTools() {
  try {
    const res = await fetch(SHEET_URL + "?t=" + Date.now(), {
      cache: "no-store",
    });

    const raw = await res.json();

    // Normalize sheet rows
    return raw.map((d) => ({
      name: d.name || d.title || "Unknown Tool",
      category: d.category || "",
      logo_url: d.logo_url || "",
      short_description: d.short_description || "",
      long_description: d.long_description || "",
      pros: (d.pros || "").split(",").map((x) => x.trim()).filter(Boolean),
      cons: (d.cons || "").split(",").map((x) => x.trim()).filter(Boolean),
      link: d.link || "#",
    }));
  } catch (e) {
    console.error("❌ Google Sheets Error:", e);
    return [];
  }
}

/* ===========================================================
   2. FALLBACK IMAGE
=========================================================== */
function safeImg(url) {
  if (!url) return "https://cdn.jsdelivr.net/gh/Harshakk/xedge-placeholder/default.png";
  return url;
}

/* ===========================================================
   3. MAKE A CARD (Super Fast)
=========================================================== */
function createCard(t) {
  return `
  <a href="tool.html?tool=${encodeURIComponent(t.name)}"
     class="block bg-gray-800 border border-gray-700 p-4 rounded-xl hover:bg-gray-700 transition-all duration-150">

    <img src="${safeImg(t.logo_url)}" 
         class="w-14 h-14 rounded mb-3 object-cover" 
         loading="lazy">

    <h2 class="text-lg font-bold truncate">${t.name}</h2>
    <p class="text-gray-400 text-sm truncate">${t.category}</p>
  </a>`;
}

/* ===========================================================
   4. BATCH RENDER
=========================================================== */
function loadMore() {
  const container = document.getElementById("toolsContainer");
  if (!container) return;

  if (RENDER_INDEX >= FILTERED_TOOLS.length) return;

  const slice = FILTERED_TOOLS.slice(RENDER_INDEX, RENDER_INDEX + BATCH_SIZE);

  let html = "";
  slice.forEach((t) => (html += createCard(t)));

  container.insertAdjacentHTML("beforeend", html);

  RENDER_INDEX += BATCH_SIZE;
}

/* ===========================================================
   5. INFINITE SCROLL (MOBILE PERFECT)
=========================================================== */
function setupInfiniteScroll() {
  let lock = false;

  window.addEventListener("scroll", () => {
    if (lock) return;
    lock = true;

    requestAnimationFrame(() => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 400;

      if (nearBottom) loadMore();

      lock = false;
    });
  });
}

/* ===========================================================
   6. EXPLORE PAGE INIT
=========================================================== */
async function initExplorePage() {
  const container = document.getElementById("toolsContainer");
  const searchInput = document.getElementById("toolSearch");

  if (!container) return;

  /* Skeleton Loading */
  container.innerHTML = `
    <div class="skeleton h-20 rounded"></div>
    <div class="skeleton h-20 rounded"></div>
    <div class="skeleton h-20 rounded"></div>
  `;

  /* Fast Cache */
  const cache = localStorage.getItem("XEDGE_TOOLS");
  if (cache) {
    ALL_TOOLS = JSON.parse(cache);
    FILTERED_TOOLS = ALL_TOOLS;
    container.innerHTML = "";
    RENDER_INDEX = 0;
    loadMore();
  }

  /* Background Fetch */
  const fresh = await getTools();
  if (fresh.length) {
    ALL_TOOLS = fresh;
    FILTERED_TOOLS = fresh;
    localStorage.setItem("XEDGE_TOOLS", JSON.stringify(fresh));

    if (!cache) {
      container.innerHTML = "";
      RENDER_INDEX = 0;
      loadMore();
    }
  }

  setupInfiniteScroll();

  /* Search */
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.toLowerCase();

      FILTERED_TOOLS = ALL_TOOLS.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      );

      container.innerHTML = "";
      RENDER_INDEX = 0;
      loadMore();
    });
  }
}

/* ===========================================================
   7. TOOL PAGE HYDRATION
=========================================================== */
async function renderToolDetailsPageHydrate() {
  const loading = document.getElementById("loading");
  const card = document.getElementById("tool-container");
  if (!card) return;

  const p = new URLSearchParams(location.search);
  const name = (p.get("tool") || "").toLowerCase();

  let tools = JSON.parse(localStorage.getItem("XEDGE_TOOLS") || "[]");
  if (!tools.length) tools = await getTools();

  const t = tools.find((x) => x.name.toLowerCase() === name);
  if (!t) {
    loading.textContent = "Tool not found.";
    return;
  }

  /* Fill Hero */
  card.classList.remove("hidden");
  loading.classList.add("hidden");

  document.getElementById("tool-logo").src = safeImg(t.logo_url);
  document.getElementById("tool-name").textContent = t.name;
  document.getElementById("tool-cat").textContent = t.category;
  document.getElementById("tool-short").textContent = t.short_description;
  document.getElementById("visit-btn").href = t.link;

  /* Description */
  document.getElementById("xe-phase1").innerHTML = `
    <p class="text-gray-300 leading-relaxed">${t.long_description}</p>
  `;

  /* Pros / Cons */
  document.getElementById("xe-phase2").innerHTML = `
    <h3 class="text-xl font-bold mb-3">Pros</h3>
    <ul class="mb-6 text-green-400">${t.pros.map((p) => `<li>✔ ${p}</li>`).join("")}</ul>

    <h3 class="text-xl font-bold mb-3">Cons</h3>
    <ul class="text-red-400">${t.cons.map((c) => `<li>✘ ${c}</li>`).join("")}</ul>
  `;
}

/* ===========================================================
   EXPORTS
=========================================================== */
window.initExplorePage = initExplorePage;
window.renderToolDetailsPageHydrate = renderToolDetailsPageHydrate;
