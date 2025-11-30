/* ===========================================================
   X-EDGE EXPLORE PAGE — BUTTER SMOOTH + INSTANT LOADING
=========================================================== */

let ALL_TOOLS = [];
let FILTERED_TOOLS = [];
let RENDER_INDEX = 0;
const BATCH_SIZE = 8;

/* ---- 1. SUPER FAST IMAGE FALLBACK ---- */
function lazyImg(url) {
  if (!url) return "https://cdn.jsdelivr.net/gh/Harshakk/xedge-placeholder/default.png";
  return url;
}

/* ---- 2. CARD (NO LAG, GPU SAFE) ---- */
function createCard(tool) {
  return `
    <a href="tool.html?tool=${encodeURIComponent(tool.name)}"
      class="block bg-gray-800 border border-gray-700 p-4 rounded-xl 
             hover:bg-gray-700 transition-all duration-150
             will-change-transform">

      <img src="${lazyImg(tool.logo_url)}"
           loading="lazy"
           decoding="async"
           class="w-14 h-14 rounded mb-3">

      <h2 class="text-lg font-bold capitalize truncate">${tool.name}</h2>
      <p class="text-gray-400 text-sm truncate">${tool.category || ""}</p>
    </a>
  `;
}

/* ---- 3. SUPER-OPTIMIZED DOM INSERT ---- */
async function loadMore() {
  const container = document.getElementById("toolsContainer");

  if (RENDER_INDEX >= FILTERED_TOOLS.length) return;

  // only the next tools
  const slice = FILTERED_TOOLS.slice(RENDER_INDEX, RENDER_INDEX + BATCH_SIZE);

  // string building = 10x faster
  let html = "";
  for (let t of slice) html += createCard(t);

  container.insertAdjacentHTML("beforeend", html);

  RENDER_INDEX += BATCH_SIZE;
}

/* ---- 4. ULTRA SMOOTH INFINITE SCROLL ---- */
function setupInfiniteScroll() {
  let scrollLock = false;

  window.addEventListener("scroll", () => {
    if (scrollLock) return;

    scrollLock = true;

    requestAnimationFrame(() => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;

      if (nearBottom) loadMore();

      scrollLock = false;
    });
  });
}

/* ---- 5. INSTANT LOADING: CACHE + PRELOAD ---- */
async function initExplorePage() {
  const searchInput = document.getElementById("toolSearch");
  const container = document.getElementById("toolsContainer");

  // QUICK LOAD: Check local cache first
  const cache = localStorage.getItem("XEDGE_TOOLS");

  if (cache) {
    ALL_TOOLS = JSON.parse(cache);
    FILTERED_TOOLS = ALL_TOOLS;
    loadMore(); // instant
  }

  // BACKGROUND REFRESH (latest)
  getTools().then(tools => {
    if (!tools || !tools.length) return;

    ALL_TOOLS = tools;
    FILTERED_TOOLS = tools;

    // update cache
    localStorage.setItem("XEDGE_TOOLS", JSON.stringify(tools));

    // if first load was empty, render
    if (!cache) {
      container.innerHTML = "";
      RENDER_INDEX = 0;
      loadMore();
    }
  });

  setupInfiniteScroll();

  /* ---- SEARCH (BUTTER SMOOTH) ---- */
  searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase();

    container.innerHTML = "";
    RENDER_INDEX = 0;

    FILTERED_TOOLS = ALL_TOOLS.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
    );

    loadMore();
  });
}
