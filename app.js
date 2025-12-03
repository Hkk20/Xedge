/* ===========================================================
   X-EDGE EXPLORE PAGE — FIXED VERSION (WORKS WITH tools.js)
   ----------------------------------------------------------
   - Uses getTools() from tools.js **safely**
   - No conflicts
   - Mobile smooth
   - Loads instantly
=========================================================== */

let ALL_TOOLS = [];
let FILTERED_TOOLS = [];
let RENDER_INDEX = 0;
const BATCH_SIZE = 10;

/* ---- 1. Card Builder ---- */
function createCard(tool) {
  const logo = tool.logo_url || "https://dummyimage.com/200x200/1e293b/ffffff&text=" + encodeURIComponent(tool.name);

  return `
    <a href="tool.html?tool=${encodeURIComponent(tool.name)}"
       onclick='storeSelectedTool(${JSON.stringify(tool)})'
      class="block bg-gray-800 border border-gray-700 p-4 rounded-xl 
             hover:bg-gray-700 transition duration-150">

      <img src="${logo}"
           loading="lazy"
           class="w-14 h-14 rounded mb-3">

      <h2 class="text-lg font-bold capitalize truncate">${tool.name}</h2>
      <p class="text-gray-400 text-sm truncate">${tool.category || ""}</p>
    </a>
  `;
}

/* ---- 2. Load Next Batch ---- */
function loadMore() {
  const container = document.getElementById("toolsContainer");
  if (!container) return;

  if (RENDER_INDEX >= FILTERED_TOOLS.length) return;

  let html = "";
  const slice = FILTERED_TOOLS.slice(RENDER_INDEX, RENDER_INDEX + BATCH_SIZE);
  slice.forEach(t => { html += createCard(t); });

  container.insertAdjacentHTML("beforeend", html);

  RENDER_INDEX += BATCH_SIZE;
}

/* ---- 3. Infinite Scroll ---- */
function setupInfiniteScroll() {

  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 400) {
      loadMore();
    }
  });
}

/* ---- 4. INIT Explore Page ---- */
async function initExplorePage() {
  const container = document.getElementById("toolsContainer");
  const searchInput = document.getElementById("toolSearch");

  if (!container) return;

  // show instant skeletons
  container.innerHTML = "<div class='skeleton h-20 rounded'></div>".repeat(8);

  // ALWAYS use getTools() from tools.js
  ALL_TOOLS = await getTools().catch(() => []);
  FILTERED_TOOLS = ALL_TOOLS;

  // render first batch
  container.innerHTML = "";
  RENDER_INDEX = 0;
  loadMore();

  setupInfiniteScroll();

  // search
  searchInput?.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase();
    FILTERED_TOOLS = ALL_TOOLS.filter(t =>
      t.name.toLowerCase().includes(q) ||
      (t.category || "").toLowerCase().includes(q)
    );
    container.innerHTML = "";
    RENDER_INDEX = 0;
    loadMore();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("toolsContainer")) {
    initExplorePage();
  }
});
