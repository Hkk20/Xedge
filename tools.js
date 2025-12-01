/* X EDGE — tools.js (final clean version)
   Loads tools, supports Explore page, Categories, and Tool Page hydration.
*/

/* CONFIG */
const API_URL = "https://script.google.com/macros/s/AKfycbxaA3BcQgW7PTFlSP9j4h16-p2us5IiuaYESUUpZiy8bObezI-nMUxXAC28tR15FU_U/exec";
const CACHE_KEY = "xedge_tools_cache_v1";

/* HELPERS */
function normalize(s) { return String(s || "").trim().toLowerCase(); }
function safeGet(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } }
function safeSet(k,v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch{} }
function placeholder(name){ return `https://dummyimage.com/600x400/1e293b/ffffff&text=${encodeURIComponent(name)}`; }

/* FETCH TOOLS */
async function getTools(force=false){
  const cache = safeGet(CACHE_KEY);
  if (!force && cache && cache.data) return cache.data;

  try {
    const res = await fetch(API_URL + "?t=" + Date.now());
    const data = await res.json();
    const normalized = data.map(d => ({
      name: d.name || d.title || "Unknown",
      short_description: d.short_description || "",
      long_description: d.long_description || "",
      category: d.category || "Other",
      logo_url: d.logo_url || "",
      link: d.link || "#",
      pros: (d.pros || "").split(",").map(x=>x.trim()).filter(Boolean),
      cons: (d.cons || "").split(",").map(x=>x.trim()).filter(Boolean),
      screenshots: (d.screenshots || "").split(",").map(x=>x.trim()).filter(Boolean)
    }));
    safeSet(CACHE_KEY, {data: normalized});
    return normalized;
  } catch(e){
    return cache ? cache.data : [];
  }
}

/* EXPLORE PAGE */
async function initExplorePage(){
  const container = document.getElementById("toolsContainer");
  if (!container) return;

  container.innerHTML = "<div>Loading tools...</div>";

  const tools = await getTools();

  if (!tools.length){
    container.innerHTML = "<div>No tools loaded.</div>";
    return;
  }

  container.innerHTML = "";
  const frag = document.createDocumentFragment();

  tools.forEach(t => {
    const card = document.createElement("a");
    card.href = "tool.html?tool=" + encodeURIComponent(t.name);
    card.className = "block p-4 bg-gray-800 border border-gray-700 rounded-xl hover:bg-gray-700 transition";

    card.innerHTML = `
      <div class="flex items-center gap-4">
        <img src="${t.logo_url || placeholder(t.name)}" class="w-14 h-14 rounded object-cover" />
        <div class="flex-grow">
          <div class="font-semibold">${t.name}</div>
          <div class="text-gray-400 text-sm">${t.short_description}</div>
        </div>
      </div>
    `;
    frag.appendChild(card);
  });

  container.appendChild(frag);
}

/* TOOL PAGE */
async function initToolPage(){
  const params = new URLSearchParams(location.search);
  const name = params.get("tool");
  if (!name) return;

  const tools = await getTools();
  const tool = tools.find(t => normalize(t.name) === normalize(name));

  const logo = document.getElementById("tool-logo");
  const title = document.getElementById("tool-name");
  const cat = document.getElementById("tool-cat");
  const short = document.getElementById("tool-short");
  const visit = document.getElementById("visit-btn");

  if (!tool) {
    title.textContent = "Tool not found";
    return;
  }

  logo.src = tool.logo_url || placeholder(tool.name);
  title.textContent = tool.name;
  cat.textContent = tool.category;
  short.textContent = tool.short_description;
  visit.href = tool.link;
}

/* AUTO RUN */
document.addEventListener("DOMContentLoaded", () => {
  if (location.pathname.includes("Explore.html")) initExplorePage();
  if (location.pathname.includes("tool.html")) initToolPage();
});
