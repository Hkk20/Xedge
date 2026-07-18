/*
  XEdge Builder Stories
  Add a story only after you have a real user's permission. Keep `stack` to the
  exact tool names they mention in their quote or description.
*/
(function () {
  "use strict";

  const SUPABASE_URL = "https://szouczgiuhedynyshpbb.supabase.co";
  const SUPABASE_KEY = "sb_publishable_JEvVHrobhuPoU6Z5xkMr2Q_pw8tvzHP";
  const TOOL_CACHE_KEY = "xedge_builder_story_tools_v1";
  const TOOL_CACHE_TTL = 6 * 60 * 60 * 1000;
  const TOOL_FALLBACKS = {
    granola: { logo: "https://www.google.com/s2/favicons?domain=granola.ai&sz=128", link: "https://granola.ai" },
    notionai: { logo: "https://www.google.com/s2/favicons?domain=notion.so&sz=128", link: "https://www.notion.so/product/ai" },
    claudeanthropic: { logo: "https://www.google.com/s2/favicons?domain=claude.ai&sz=128", link: "https://claude.ai/" },
    figma: { logo: "https://www.google.com/s2/favicons?domain=figma.com&sz=128", link: "https://figma.com" },
    perplexity: { logo: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128", link: "https://www.perplexity.ai" },
    descript: { logo: "https://www.google.com/s2/favicons?domain=descript.com&sz=128", link: "https://descript.com" },
    codex: { logo: "https://www.google.com/s2/favicons?domain=openai.com&sz=128", link: "https://openai.com/codex/" },
    googleworkspace: { logo: "https://www.google.com/s2/favicons?domain=workspace.google.com&sz=128", link: "https://workspace.google.com/" },
    canva: { logo: "https://www.google.com/s2/favicons?domain=canva.com&sz=128", link: "https://www.canva.com/" },
    grokbuild: { logo: "https://www.google.com/s2/favicons?domain=grok.com&sz=128", link: "https://grok.com/" },
    appsscript: { logo: "https://www.google.com/s2/favicons?domain=script.google.com&sz=128", link: "https://script.google.com/" },
    googlesheets: { logo: "https://www.google.com/s2/favicons?domain=sheets.google.com&sz=128", link: "https://www.google.com/sheets/about/" },
    momentumhive: { logo: "https://www.google.com/s2/favicons?domain=momentumhive.app&sz=128", link: "https://momentumhive.app/" },
    claude: { logo: "https://www.google.com/s2/favicons?domain=claude.ai&sz=128", link: "https://claude.ai/" }
  };
  let toolDirectoryPromise;

  // Keep every approved story here. The newest `publishedAt` value is the only
  // story shown on the homepage; this full list is always shown on builders.html.
  const stories = [
    {
      slug: "momentumhive-builder",
      name: "Zvonko Biškup",
      role: "Founder, MomentumHive",
      initials: "ZB",
      photo: "assets/builders/momentumhive-builder.png",
      accent: "linear-gradient(135deg, #38bdf8, #2563eb)",
      label: "Today's builder",
      publishedAt: "2026-07-18",
      quote: " I use MomentumHive fors scheduling and analytics. Claude for everything else. That's the whole stack. MomentumHive removes the willpower requirement because posts go out whether I show up that morning or not.",
      stack: ["MomentumHive", "Claude"]
    },
    {
      slug: "damir-regoc",
      name: "Damir Regoc",
      role: "Indie founder building in public",
      initials: "DR",
      photo: "assets/builders/damir-regoc.png",
      accent: "linear-gradient(135deg, #60a5fa, #6366f1)",
      label: "Today's builder",
      publishedAt: "2026-07-16",
      quote: [
        "I have 15 years in marketing, from back when it was still printed ads and handing out flyers on the street..",
        "Today, my tech stack is, ofc, AI in both foundation and glazing. I suffer from severe FOMO, so a good chunk of my time goes to trying new stuff, experimenting.",
        "But when work needs to get done, it's Codex, Google Workspace, and Canva. Yes, I’m not ashamed to say Canva, lol.",
        "Tools people are sleeping on? Grok Build, and Apps Script. When it comes to automation, Google Sheets + Apps Script are still the best."
      ],
      stack: ["Codex", "Google Workspace", "Canva", "Grok Build", "Apps Script", "Google Sheets"]
    }
  ].sort(function (a, b) {
    return (Date.parse(b.publishedAt) || 0) - (Date.parse(a.publishedAt) || 0);
  });

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function avatar(story, className) {
    const image = el("div", className || "builder-avatar");
    image.style.background = story.accent;
    image.setAttribute("role", "img");
    image.setAttribute("aria-label", story.name + " profile image");

    if (story.photo) {
      const photo = document.createElement("img");
      photo.src = story.photo;
      photo.alt = "";
      photo.width = 54;
      photo.height = 54;
      photo.loading = "lazy";
      photo.onerror = function () {
        this.remove();
        image.textContent = story.initials;
      };
      image.appendChild(photo);
    } else {
      image.textContent = story.initials;
    }

    return image;
  }

  function profile(story, className) {
    const wrap = el("div", className || "builder-profile");
    wrap.appendChild(avatar(story));
    const byline = el("div", "builder-byline");
    byline.appendChild(el("strong", "", story.name));
    byline.appendChild(el("span", "", story.role));
    wrap.appendChild(byline);
    return wrap;
  }

  function storyQuote(story) {
    const quote = el("blockquote", "builder-story-quote");
    const paragraphs = Array.isArray(story.quote) ? story.quote : [story.quote];
    paragraphs.filter(Boolean).forEach(function (paragraph) {
      const line = el("p");
      line.appendChild(el("strong", "", paragraph));
      quote.appendChild(line);
    });
    return quote;
  }

  function normalise(value) {
    return String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  function placeholderLogo(name) {
    const initials = String(name || "AI").split(/\s+/).map(function (part) { return part[0]; }).join("").slice(0, 2).toUpperCase();
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="100%" height="100%" rx="16" fill="#1e3a8a"/><text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="28" font-weight="700" fill="white">' + initials + '</text></svg>';
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }

  function readToolCache() {
    try {
      const cached = JSON.parse(localStorage.getItem(TOOL_CACHE_KEY) || "null");
      if (cached && Array.isArray(cached.tools) && Date.now() - cached.savedAt < TOOL_CACHE_TTL) return cached.tools;
    } catch (_) {}
    return null;
  }

  function writeToolCache(tools) {
    try { localStorage.setItem(TOOL_CACHE_KEY, JSON.stringify({ savedAt: Date.now(), tools: tools })); } catch (_) {}
  }

  function mapTool(row) {
    return {
      name: row.name || row.title || "",
      logo: row.logo_url || row.logo || "",
      link: row.link || row.Link || ""
    };
  }

  function loadToolDirectory() {
    if (toolDirectoryPromise) return toolDirectoryPromise;
    const cached = readToolCache();
    toolDirectoryPromise = cached ? Promise.resolve(cached) : fetch(
      SUPABASE_URL + "/rest/v1/xedge?select=name,logo_url,link&order=name.asc&limit=1000",
      { headers: { apikey: SUPABASE_KEY, Authorization: "Bearer " + SUPABASE_KEY } }
    ).then(function (response) {
      if (!response.ok) throw new Error("Could not load XEdge tools");
      return response.json();
    }).then(function (rows) {
      const tools = Array.isArray(rows) ? rows.map(mapTool).filter(function (tool) { return tool.name; }) : [];
      writeToolCache(tools);
      return tools;
    }).catch(function () { return []; });
    return toolDirectoryPromise;
  }

  function resolveTool(name, directory) {
    const wanted = normalise(name);
    const match = directory.find(function (tool) { return normalise(tool.name) === wanted; }) ||
      directory.find(function (tool) { return normalise(tool.name).includes(wanted) || wanted.includes(normalise(tool.name)); });
    return match || Object.assign({ name: name }, TOOL_FALLBACKS[wanted] || {
      logo: "",
      link: "tool.html?tool=" + encodeURIComponent(name)
    });
  }

  function createToolCard(tool) {
    const card = el("a", "builder-tool-card");
    card.href = tool.link || "tool.html?tool=" + encodeURIComponent(tool.name);
    card.setAttribute("aria-label", "Open " + tool.name);
    const logo = document.createElement("img");
    logo.src = tool.logo || placeholderLogo(tool.name);
    logo.alt = "";
    logo.width = 40;
    logo.height = 40;
    logo.loading = "lazy";
    logo.onerror = function () { this.onerror = null; this.src = placeholderLogo(tool.name); };
    card.appendChild(logo);
    card.appendChild(el("span", "", tool.name));
    card.appendChild(el("span", "builder-tool-arrow", "↗"));
    return card;
  }

  function recommendation(story) {
    const section = el("section", "builder-recommendation", "");
    const heading = el("div", "builder-recommendation-heading");
    heading.appendChild(el("span", "", "This builder's"));
    heading.appendChild(el("strong", "", "stack recommendation"));
    section.appendChild(heading);
    const tools = el("div", "builder-tool-grid", "");
    story.stack.forEach(function (name) { tools.appendChild(createToolCard({ name: name, logo: "", link: "tool.html?tool=" + encodeURIComponent(name) })); });
    section.appendChild(tools);
    loadToolDirectory().then(function (directory) {
      tools.replaceChildren();
      story.stack.forEach(function (name) { tools.appendChild(createToolCard(resolveTool(name, directory))); });
    });
    return section;
  }

  function renderSpotlight(target) {
    const story = stories[0];
    if (!target) return;
    const card = el("article", "builder-spotlight-card");
    const mainLink = el("a", "builder-spotlight-main");
    mainLink.href = "builders.html?builder=" + encodeURIComponent(story.slug) + "#builder-" + story.slug;
    mainLink.setAttribute("aria-label", "Read " + story.name + "'s full builder story");
    const top = el("div", "builder-card-top");
    top.appendChild(el("span", "builder-card-kicker", story.label));
    top.appendChild(el("span", "builder-read-more", "Read the story ->"));
    mainLink.appendChild(top);
    mainLink.appendChild(profile(story));
    mainLink.appendChild(storyQuote(story));
    card.appendChild(mainLink);
    card.appendChild(recommendation(story));
    target.replaceChildren(card);
  }

  function renderGallery(target) {
    if (!target) return;
    stories.forEach(function (story, index) {
      const card = el("article", "builder-story-card");
      card.id = "builder-" + story.slug;
      card.tabIndex = -1;
      const head = el("div", "builder-story-head");
      head.appendChild(profile(story, "builder-profile builder-profile-large"));
      if (index === 0) head.appendChild(el("span", "builder-card-kicker", story.label));
      card.appendChild(head);
      card.appendChild(storyQuote(story));
      const detail = el("div", "builder-story-detail");
      if (story.story) detail.appendChild(el("p", "", story.story));
      detail.appendChild(recommendation(story));
      if (story.takeaway) {
        const takeaway = el("p", "builder-takeaway");
        takeaway.appendChild(el("strong", "", "Takeaway: "));
        takeaway.appendChild(document.createTextNode(story.takeaway));
        detail.appendChild(takeaway);
      }
      card.appendChild(detail);
      target.appendChild(card);
    });
    const selected = new URLSearchParams(window.location.search).get("builder");
    if (selected) {
      const selectedCard = document.getElementById("builder-" + selected);
      if (selectedCard) selectedCard.classList.add("is-selected");
    }
  }

  window.XEdgeBuilderStories = stories;
  document.addEventListener("DOMContentLoaded", function () {
    renderSpotlight(document.getElementById("builder-spotlight"));
    renderGallery(document.getElementById("builder-gallery"));
  });
}());
