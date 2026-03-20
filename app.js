/* ===========================================================
   X-EDGE EXPLORE PAGE
   - Uses getTools() from tools.js
   - No Tailwind classes (replaced with xe-tool-card)
   - IntersectionObserver infinite scroll (replaces scroll event)
   - Single DOMContentLoaded init
=========================================================== */

let ALL_TOOLS = [];
let FILTERED_TOOLS = [];
let RENDER_INDEX = 0;
const BATCH_SIZE = 12;

/* ---- 1. Card Builder ---- */
function createCard(tool) {
  const name = tool.name || "";
  const logo = tool.logo_url ||
    "https://dummyimage.com/56x56/1e293b/ffffff&text=" +
    encodeURIComponent(name.slice(0, 2) || "?");

  const safe = name.replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  return `
    <a href="tool.html?tool=${encodeURIComponent(name)}"
       class="xe-tool-card"
       role="listitem"
       aria-label="${safe}"
       onclick="if(window.storeSelectedTool) storeSelectedTool(${JSON.stringify(tool).replace(/"/g, '&quot;')})">
      <img src="${logo}"
           alt="${safe} logo"
           width="56" height="56"
           loading="lazy"
           onerror="this.src='xedge-logo.png'"/>
      <h2>${name}</h2>
      <p class="cat">${tool.category || ""}</p>
    </a>
  `;
}

/* ---- 2. Load Next Batch ---- */
function loadMore() {
  const container = document.getElementById("toolsContainer");
  if (!container) return;
  if (RENDER_INDEX >= FILTERED_TOOLS.length) return;

  const frag = document.createDocumentFragment();
  const slice = FILTERED_TOOLS.slice(RENDER_INDEX, RENDER_INDEX + BATCH_SIZE);
  slice.forEach(t => {
    const div = document.createElement("div");
    div.innerHTML = createCard(t);
    const card = div.firstElementChild;
    if (card) frag.appendChild(card);
  });

  container.appendChild(frag);
  RENDER_INDEX += BATCH_SIZE;

  // Update result count if element exists
  const countEl = document.getElementById("result-count");
  if (countEl && ALL_TOOLS.length) {
    const showing = Math.min(RENDER_INDEX, FILTERED_TOOLS.length);
    countEl.textContent = FILTERED_TOOLS.length === ALL_TOOLS.length
      ? `Showing ${showing} of ${ALL_TOOLS.length} tools`
      : `${FILTERED_TOOLS.length} result${FILTERED_TOOLS.length !== 1 ? "s" : ""} — showing ${showing}`;
  }
}

/* ---- 3. Infinite Scroll via IntersectionObserver ---- */
// Replaces the window scroll listener which fires hundreds of times per scroll.
// IntersectionObserver fires only when the sentinel enters the viewport.
let _scrollObserver = null;
function setupInfiniteScroll() {
  const sentinel = document.getElementById("load-more-sentinel");
  if (!sentinel) return;

  if (_scrollObserver) _scrollObserver.disconnect();

  _scrollObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) loadMore();
  }, { rootMargin: "400px" });

  _scrollObserver.observe(sentinel);
}

/* ---- 4. INIT Explore Page ---- */
async function initExplorePage() {
  const container = document.getElementById("toolsContainer");
  const searchInput = document.getElementById("toolSearch");

  if (!container) return;

  // show instant skeletons
  let skelHtml = "";
  for (let i = 0; i < 12; i++) {
    skelHtml += `<div class="xe-skel" aria-hidden="true"></div>`;
  }
  container.innerHTML = skelHtml;

  // fetch tools
  ALL_TOOLS = await getTools().catch(() => []);
  FILTERED_TOOLS = ALL_TOOLS;

  // render first batch
  container.innerHTML = "";
  RENDER_INDEX = 0;
  loadMore();

  setupInfiniteScroll();

  // search — debounced
  let searchTimer = null;
  searchInput?.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      const q = searchInput.value.toLowerCase().trim();
      FILTERED_TOOLS = q
        ? ALL_TOOLS.filter(t =>
            (t.name || "").toLowerCase().includes(q) ||
            (t.category || "").toLowerCase().includes(q)
          )
        : ALL_TOOLS;
      container.innerHTML = "";
      RENDER_INDEX = 0;
      if (!FILTERED_TOOLS.length) {
        container.innerHTML = `
          <div class="xe-empty" role="status">
            <h3>No results for "${q.replace(/"/g,"&quot;")}"</h3>
            <p>Try a different keyword.</p>
          </div>`;
        const countEl = document.getElementById("result-count");
        if (countEl) countEl.textContent = "0 results";
        return;
      }
      loadMore();
    }, 180);
  });
}

// Single DOMContentLoaded — no double init
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("toolsContainer")) {
    initExplorePage();
  }
});
