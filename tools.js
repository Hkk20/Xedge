<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>X Edge — Tool</title>
  <meta name="description" content="Tool details — X Edge" />
  <link rel="icon" href="xedge-logo.png">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>

  <style>
    :root{
      --bg:#0b1116;
      --muted:#94a3b8;
      --card-border: rgba(148,163,184,0.06);
      --accent-from:#3b82f6;
      --accent-to:#7c3aed;
      --card-radius:1rem;
      --maxw:1100px;
    }
    body{
      background:var(--bg); color:#e6eef8; font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
      margin:0; -webkit-font-smoothing:antialiased;
    }
    .page-top{ position:relative; z-index:10; padding-top:72px; }
    nav.site-nav{ position:fixed; left:0; right:0; top:0; z-index:60; backdrop-filter:blur(8px); background:rgba(6,8,10,0.7); border-bottom:1px solid var(--card-border); padding:.6rem 1rem; }
    .nav-inner{ max-width:var(--maxw); margin:0 auto; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
    .brand{ display:flex; gap:.6rem; align-items:center; }
    .brand img{ width:36px; height:36px; object-fit:contain; border-radius:8px; background:#fff; padding:6px; }

    .container{ max-width:var(--maxw); margin:0 auto; padding:1rem; }

    /* tool hero card */
    .tool-hero{
      background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));
      border:1px solid var(--card-border);
      border-radius: var(--card-radius);
      padding:18px; display:flex; gap:18px; align-items:center; box-shadow:0 8px 30px rgba(2,6,23,0.5);
    }
    .tool-logo{ width:96px; height:96px; border-radius:.75rem; object-fit:cover; background:#0f1720; flex-shrink:0; }
    .tool-title{ font-size:1.6rem; font-weight:800; margin:0; }
    .tool-cat{ color:var(--muted); font-size:.95rem; margin-top:6px; }

    /* sections */
    .section{ margin-top:20px; }
    .phase{ background: rgba(255,255,255,0.01); border:1px solid var(--card-border); border-radius:.9rem; padding:16px; }
    .btn-visit{ background:linear-gradient(90deg,var(--accent-from),var(--accent-to)); color:#fff; padding:.55rem .9rem; border-radius:999px; text-decoration:none; font-weight:600; }

    /* screenshot grid */
    .shots{ display:grid; grid-template-columns: 1fr; gap:12px; }
    @media(min-width:720px){ .shots{ grid-template-columns: repeat(2,1fr); } }
    .shot{ width:100%; height:220px; object-fit:cover; border-radius:.7rem; background:#0f1720; border:1px solid var(--card-border); }

    .pros-cons{ display:grid; grid-template-columns:1fr; gap:12px; margin-top:12px; }
    @media(min-width:720px){ .pros-cons{ grid-template-columns: repeat(2,1fr); } }

    .meta-row{ display:flex; gap:12px; align-items:center; flex-wrap:wrap; margin-top:10px; }
    .badge{ background: linear-gradient(90deg,var(--accent-from),var(--accent-to)); color:white; padding:.25rem .6rem; border-radius:.5rem; font-weight:600; font-size:.9rem; }

    .related-grid{ display:grid; grid-template-columns: repeat(1,1fr); gap:10px; }
    @media(min-width:720px){ .related-grid{ grid-template-columns: repeat(2,1fr); } }

    .skeleton{ background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.03), rgba(255,255,255,0.02)); animation: pulse 1.1s infinite; border-radius:.75rem; height:100px; }
    @keyframes pulse { 0%{opacity:1}50%{opacity:.65}100%{opacity:1} }

    .text-muted{ color:var(--muted); }
  </style>
</head>
<body>
  <div class="page-top">
    <nav class="site-nav" role="navigation" aria-label="Main navigation">
      <div class="nav-inner">
        <div class="brand">
          <a href="index.html"><img src="xedge-logo.png" alt="X Edge"></a>
          <div style="font-weight:700">X EDGE</div>
        </div>
        <div style="display:flex; gap:12px; align-items:center;">
          <a href="index.html" class="text-muted">Home</a>
          <a href="Explore.html" class="text-muted">Explore</a>
          <a href="Categories.html" class="text-muted">Categories</a>
          <a href="Join.html" class="btn-visit">Join Beta</a>
        </div>
      </div>
    </nav>

    <main class="container" id="main">
      <!-- Loading skeleton / replaced by JS -->
      <div id="loading" class="skeleton" style="height:220px;"></div>

      <div id="tool-wrap" style="display:none;">
        <div class="tool-hero" id="tool-hero">
          <img id="tool-logo" class="tool-logo" src="" alt="logo">
          <div style="flex:1; min-width:0;">
            <h1 id="tool-name" class="tool-title">Tool name</h1>
            <div class="tool-cat" id="tool-cat">Category</div>
            <div class="meta-row">
              <a id="visit-btn" class="btn-visit" href="#" target="_blank">Visit</a>
              <div id="tool-pricing" class="text-muted" style="margin-left:8px;"></div>
            </div>
            <p id="tool-short" class="text-muted" style="margin-top:12px;"></p>
          </div>
        </div>

        <!-- Phase 1: description + pricing -->
        <div class="section">
          <div id="phase1" class="phase">
            <div id="desc-skeleton" class="skeleton" style="height:110px;"></div>
          </div>
        </div>

        <!-- Phase 2: screenshots, pros/cons, related -->
        <div class="section">
          <div id="phase2" class="phase">
            <div id="shots-skeleton" class="skeleton" style="height:160px;"></div>
          </div>
        </div>

      </div>
    </main>
  </div>

  <script>
  (function(){
    const API_URL = "https://script.google.com/macros/s/AKfycbxaA3BcQgW7PTFlSP9j4h16-p2us5IiuaYESUUpZiy8bObezI-nMUxXAC28tR15FU_U/exec";
    const CACHE_KEY = "xedge_tools_cache_v1";
    const CACHE_TTL = 1000 * 60 * 60 * 6; // 6h

    function now(){ return Date.now(); }
    function safeParse(v){ try{return JSON.parse(v);}catch(e){return null;} }
    function safeSet(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
    function safeGet(k){ try{ return safeParse(localStorage.getItem(k)); }catch(e){return null;} }
    function el(tag, cls){ const n=document.createElement(tag); if(cls) n.className=cls; return n; }
    function normalize(s){ return String(s||"").trim().toLowerCase(); }
    function makePlaceholder(name){ const tn = encodeURIComponent((name||'Tool').slice(0,20)); return `https://dummyimage.com/900x500/1e293b/ffffff&text=${tn}`; }

    // read selected from session (fast)
    function getSelectedFromSession(){
      try{
        const v = sessionStorage.getItem('xedge_selected_tool');
        if (!v) return null;
        const parsed = JSON.parse(v);
        return parsed;
      }catch(e){ return null; }
    }

    // fetch all tools (with lightweight caching)
    async function fetchTools(force=false){
      const cache = safeGet(CACHE_KEY);
      if (!force && cache && cache.t && (now() - cache.t) < (1000*60*60*6)) {
        return cache.data;
      }
      try{
        const res = await fetch(API_URL + "?t=" + Date.now(), { cache: "no-store" });
        if (!res.ok) throw new Error("non-ok");
        const data = await res.json();
        const normalized = (Array.isArray(data) ? data : []).map(d => ({
          name: d.name || d.title || d.Name || "Unknown",
          short_description: d.short_description || d.short || d.summary || "",
          long_description: d.long_description || d.description || d.long || "",
          category: d.category || d.cat || d.Category || "Other",
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
        safeSet(CACHE_KEY, {t: now(), data: normalized});
        return normalized;
      }catch(e){
        if (cache && cache.data) return cache.data;
        console.warn("Fetch error", e);
        return [];
      }
    }

    // find tool by query param name or session
    function getQueryToolName(){
      try{
        const params = new URLSearchParams(window.location.search);
        return params.get('tool') || params.get('name') || "";
      }catch(e){ return ""; }
    }

    function parseListField(v){
      if(!v) return [];
      return String(v).split(/[,;]\s*/).map(x=>x.trim()).filter(Boolean);
    }

    // lazy image loader helper
    function lazyLoad(root=document){
      const imgs = root.querySelectorAll("img[data-src]");
      if (!imgs || imgs.length===0) return;
      const obs = new IntersectionObserver((entries, o)=>{
        entries.forEach(en=>{
          if (!en.isIntersecting) return;
          const img = en.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          o.unobserve(img);
        });
      }, { rootMargin: "300px" });
      imgs.forEach(i=>obs.observe(i));
    }

    // render functions
    function renderPhase0(container, tool){
      const logoEl = document.getElementById('tool-logo');
      const nameEl = document.getElementById('tool-name');
      const catEl = document.getElementById('tool-cat');
      const visitBtn = document.getElementById('visit-btn');
      const short = document.getElementById('tool-short');
      const pricing = document.getElementById('tool-pricing');

      logoEl.src = tool.logo_url || makePlaceholder(tool.name);
      nameEl.textContent = tool.name || "Unknown";
      catEl.textContent = tool.category || "";
      visitBtn.href = tool.link || "#";
      short.textContent = tool.short_description || "";
      const priceParts = [];
      if (tool.pricing_free) priceParts.push("Free: " + tool.pricing_free);
      if (tool.pricing_plus) priceParts.push("Plus: " + tool.pricing_plus);
      if (tool.pricing_team) priceParts.push("Team: " + tool.pricing_team);
      pricing.textContent = priceParts.join(" • ");
    }

    function renderPhase1(container, tool, merged){
      const phase1 = document.getElementById('phase1');
      phase1.innerHTML = "";
      const p = el('div');
      p.innerHTML = `<p style="color:var(--muted); margin:0;">${(merged.long_description || tool.long_description || tool.short_description || "No description available.").replace(/\n/g,"<br>")}</p>`;
      phase1.appendChild(p);
      // pricing block if available
      if (merged.pricing && (merged.pricing.free || merged.pricing.plus || merged.pricing.team)){
        const box = el('div'); box.style.marginTop = "12px";
        box.innerHTML = `<div style="background:rgba(255,255,255,0.01); border-radius:.6rem; padding:10px; border:1px solid var(--card-border);">
          ${merged.pricing.free ? `<div style="font-weight:700">Free</div><div class="text-muted">${merged.pricing.free}</div>` : ""}
          ${merged.pricing.plus ? `<div style="margin-top:6px;font-weight:700">Plus</div><div class="text-muted">${merged.pricing.plus}</div>` : ""}
          ${merged.pricing.team ? `<div style="margin-top:6px;font-weight:700">Team</div><div class="text-muted">${merged.pricing.team}</div>` : ""}
        </div>`;
        phase1.appendChild(box);
      }
    }

    async function renderPhase2(container, tool, merged, related){
      const phase2 = document.getElementById('phase2');
      phase2.innerHTML = "";

      // screenshots
      const shots = merged.screenshots && merged.screenshots.length ? merged.screenshots : [
        makePlaceholder(tool.name), makePlaceholder(tool.name + " screenshot")
      ];
      const shotsWrap = el('div');
      shotsWrap.className = 'shots';
      shots.slice(0,4).forEach(s=>{
        const img = el('img'); img.className = 'shot'; img.alt = tool.name + ' screenshot';
        img.setAttribute('data-src', s);
        shotsWrap.appendChild(img);
      });
      phase2.appendChild(shotsWrap);

      // pros/cons
      const pros = merged.pros || [];
      const cons = merged.cons || [];
      const pcWrap = el('div'); pcWrap.className = 'pros-cons';
      if (pros.length){
        const pBox = el('div'); pBox.innerHTML = `<div style="font-weight:700; margin-bottom:8px;">Pros</div><ul style="margin:0;padding-left:18px;color:var(--muted)">${pros.map(x=>`<li>${x}</li>`).join("")}</ul>`;
        pcWrap.appendChild(pBox);
      }
      if (cons.length){
        const cBox = el('div'); cBox.innerHTML = `<div style="font-weight:700; margin-bottom:8px;">Cons</div><ul style="margin:0;padding-left:18px;color:var(--muted)">${cons.map(x=>`<li>${x}</li>`).join("")}</ul>`;
        pcWrap.appendChild(cBox);
      }
      if (pcWrap.children.length) phase2.appendChild(pcWrap);

      // related
      const relWrap = el('div'); relWrap.style.marginTop = "12px";
      relWrap.innerHTML = `<div style="font-weight:700; margin-bottom:8px;">Related Tools</div>`;
      const grid = el('div'); grid.className = 'related-grid';
      (related || []).slice(0,4).forEach(r=>{
        const a = el('a'); a.href = 'tool.html?tool=' + encodeURIComponent(r.name); a.style.display = 'block'; a.style.padding = '10px'; a.style.border = '1px solid var(--card-border)'; a.style.borderRadius = '.6rem'; a.style.textDecoration='none'; a.style.color='inherit';
        a.innerHTML = `<div style="display:flex; gap:10px; align-items:center;"><img src="${r.logo_url||makePlaceholder(r.name)}" style="width:54px;height:54px;border-radius:.6rem;object-fit:cover"><div><div style="font-weight:700">${r.name}</div><div style="color:var(--muted);font-size:.92rem">${r.category||''}</div></div></div>`;
        grid.appendChild(a);
      });
      relWrap.appendChild(grid);
      phase2.appendChild(relWrap);

      // lazy load screenshots
      lazyLoad(phase2);
    }

    // helper to merge extra sheet fields and TOOL_EXTRA fallback if present
    function buildMerged(tool){
      const extraFromSheet = {
        long_description: tool.long_description || "",
        pros: parseListField(tool.pros_raw),
        cons: parseListField(tool.cons_raw),
        screenshots: parseListField(tool.screenshots_raw),
        pricing: { free: tool.pricing_free || "", plus: tool.pricing_plus || "", team: tool.pricing_team || "" }
      };
      // TOOL_EXTRA global fallback (if you have one)
      let fallback = {};
      try { if (window.TOOL_EXTRA) fallback = window.TOOL_EXTRA[normalize(tool.name)] || {}; } catch(e){}
      return {
        long_description: extraFromSheet.long_description || fallback.long_description || "",
        pros: (extraFromSheet.pros.length ? extraFromSheet.pros : (fallback.pros || [])),
        cons: (extraFromSheet.cons.length ? extraFromSheet.cons : (fallback.cons || [])),
        screenshots: (extraFromSheet.screenshots.length ? extraFromSheet.screenshots : (fallback.screenshots || [])),
        pricing: Object.assign({}, (fallback.pricing || {}), (extraFromSheet.pricing || {}))
      };
    }

    function parseListField(v){ if(!v) return []; return String(v).split(/[,;]\s*/).map(x=>x.trim()).filter(Boolean); }

    // MAIN hydrate function
    async function hydrateToolPage(){
      const loading = document.getElementById('loading');
      const wrap = document.getElementById('tool-wrap');
      loading.style.display = '';
      wrap.style.display = 'none';

      // try session first
      let selected = getSelectedFromSession();
      const qName = decodeURIComponent(getQueryToolName() || '').trim();
      if (!selected && qName) {
        // try to find in cached list (fast)
        const cached = safeGet(CACHE_KEY);
        if (cached && cached.data) {
          const found = cached.data.find(t => normalize(t.name) === normalize(qName));
          if (found) selected = found;
        }
      }

      // if still not found, fetch tools and find
      if (!selected) {
        const tools = await fetchTools(false);
        const findName = qName || (selected && selected.name) || "";
        if (findName) {
          const found = tools.find(t => normalize(t.name) === normalize(findName));
          if (found) selected = found;
        } else {
          // If there's no query param, try to pick the first item (graceful)
          selected = tools[0] || null;
        }
      }

      if (!selected) {
        loading.textContent = "Tool not found.";
        return;
      }

      // render phase0 immediately
      renderPhase0(document.getElementById('tool-hero'), selected);

      // show UI
      loading.style.display = 'none';
      wrap.style.display = '';

      // schedule phase1
      setTimeout(()=> {
        try {
          const merged = buildMerged(selected);
          renderPhase1(document.getElementById('phase1'), selected, merged);
        } catch(e){ console.error(e); }
      }, 80);

      // schedule phase2 (defer a bit)
      setTimeout(async ()=>{
        try{
          // ensure we have a tools list to find related
          const tools = await fetchTools(false);
          const related = tools.filter(t => normalize(t.category) === normalize(selected.category) && normalize(t.name) !== normalize(selected.name)).slice(0,6);
          const merged = buildMerged(selected);
          await renderPhase2(document.getElementById('phase2'), selected, merged, related);
        }catch(e){ console.error(e); }
      }, 600);
    }

    document.addEventListener('DOMContentLoaded', ()=> {
      hydrateToolPage();
      if (window.feather) feather.replace();
    });

  })();
  </script>

</body>
</html>
