/**
 * OptiTrajectoryAI — Optimize Your Career Trajectory
 * Connects Career Compass -> Resume Studio -> Candidate Infographic -> Live Job Discovery & Analyzer -> Application CRM
 */

const STORAGE_KEY = "careeros_state_v1";

const PERSONA_PRESETS = {
  pm: {
    name: "Alex Jordan",
    headline: "Staff Product Manager — AI Platforms & B2B SaaS",
    location: "Austin, TX (Remote / Hybrid)",
    yearsExp: 9,
    mission: "Build autonomous AI workflows and enterprise SaaS products that turn complex data into 10x operator productivity.",
    targetRoles: "Staff Product Manager, Principal Product Manager, Director of Product, AI Product Lead",
    industries: "AI/ML, Developer Tools, B2B SaaS, FinTech",
    minSalary: 185000,
    workStyle: "Remote / Hybrid",
    horizons: {
      h1: "Land a Staff/Principal AI Product role at a high-growth Series B–D or public tech leader; ship flagship agentic workflow.",
      h2: "Expand scope to lead a multi-pod product group (4–6 PMs) owning $40M+ ARR product line.",
      h3: "VP / Chief Product Officer at an AI-native enterprise company."
    },
    priorities: [
      { id: "comp", label: "Total Compensation", weight: 90 },
      { id: "autonomy", label: "Product Autonomy & Scope", weight: 95 },
      { id: "remote", label: "Remote Flexibility", weight: 85 },
      { id: "ai", label: "AI-First Technical Depth", weight: 92 }
    ],
    skills: [
      { name: "Product Strategy & Roadmapping", level: 95, demand: 95 },
      { name: "LLM / Agentic AI Workflows", level: 88, demand: 96 },
      { name: "PLG & Enterprise Monetization", level: 90, demand: 88 },
      { name: "SQL, Python & Experimentation", level: 82, demand: 85 },
      { name: "Cross-Functional Leadership", level: 94, demand: 92 },
      { name: "AI Evals & Guardrails Architecture", level: 68, demand: 90 }
    ],
    summary: "Product leader with 9+ years scaling B2B SaaS and AI-native platforms from $4M to $38M ARR. Proven track record uniting engineering, design, and GTM teams to launch category-defining workflow automation products.",
    metrics: [
      { num: "$34M+", label: "Net-New ARR Driven" },
      { num: "9+ Yrs", label: "Product & SaaS Leadership" },
      { num: "140K+", label: "Active Weekly Enterprise Users" },
      { num: "42%", label: "Activation Lift via AI Onboarding" }
    ],
    experience: [
      {
        role: "Senior / Staff Product Manager",
        company: "VeloCloud AI",
        period: "2023 – Present",
        bullets: [
          "Spearheaded launch of AI Copilot workflow engine, scaling adoption to 140,000+ weekly active users and generating $14.2M in expansion ARR within 11 months.",
          "Cut enterprise onboarding time by 42% (from 19 days to 11 days) by redesigning data connector architecture with 14 engineers.",
          "Responsible for managing product roadmap and working with stakeholders on quarterly planning."
        ]
      },
      {
        role: "Senior Product Manager, Core Growth",
        company: "MetricPulse SaaS",
        period: "2020 – 2023",
        bullets: [
          "Owned self-serve PLG funnel and usage-based pricing tier, increasing free-to-paid conversion by 28% and adding $9.8M ARR.",
          "Built experimentation framework across 6 product squads, running 45+ A/B tests per year.",
          "Helped sales team close enterprise deals by joining customer calls and writing product specs."
        ]
      },
      {
        role: "Product Manager",
        company: "FinSight Analytics",
        period: "2017 – 2020",
        bullets: [
          "Launched real-time anomaly detection dashboard for 450+ mid-market finance teams, reducing churn by 18%.",
          "Partnered with design and engineering to ship mobile executive reporting app with 4.8-star rating."
        ]
      }
    ],
    infographicTheme: "executive",
    infographicTagline: "Available for Staff / Principal PM Roles",
    savedJobs: [
      {
        id: "crm-1",
        title: "Principal Product Manager, Agentic AI",
        company: "LinearFlow AI",
        location: "Remote (US)",
        salary: "$195,000 - $230,000",
        matchScore: 94,
        stage: "Interviewing",
        url: "https://remotive.com",
        description: "Lead our Agentic AI platform, product strategy, LLM evals, B2B SaaS enterprise monetization, SQL analytics, and cross-functional roadmap execution."
      },
      {
        id: "crm-2",
        title: "Staff Product Manager — Developer Platform",
        company: "Raycast Cloud",
        location: "Remote",
        salary: "$185,000 - $215,000",
        matchScore: 89,
        stage: "Applied",
        url: "https://remotive.com",
        description: "Own developer workflow platform, PLG growth funnel, API ecosystem, and enterprise expansion."
      },
      {
        id: "crm-3",
        title: "Director of Product, Enterprise SaaS",
        company: "ScaleOps",
        location: "Austin, TX (Hybrid)",
        salary: "$210,000 - $245,000",
        matchScore: 86,
        stage: "Saved",
        url: "https://remotive.com",
        description: "Lead a team of PMs building enterprise workflow automation, pricing strategy, and AI analytics."
      }
    ]
  },

  eng: {
    name: "Samira Chen",
    headline: "Staff Full-Stack & AI Systems Engineer",
    location: "Seattle, WA (Remote)",
    yearsExp: 8,
    mission: "Architect low-latency distributed systems and AI-powered developer experiences that scale to millions of requests per minute.",
    targetRoles: "Staff Software Engineer, Principal Full-Stack Engineer, Founding AI Engineer",
    industries: "AI Infrastructure, Cloud Platforms, Developer Tools",
    minSalary: 195000,
    workStyle: "Remote",
    horizons: {
      h1: "Join an AI infrastructure or dev-tools company as Staff Engineer owning core distributed runtime.",
      h2: "Technical Lead across 3 engineering teams; publish open-source benchmarks.",
      h3: "VP of Engineering or CTO of a developer-first startup."
    },
    priorities: [
      { id: "comp", label: "Total Compensation", weight: 92 },
      { id: "autonomy", label: "Architecture Ownership", weight: 95 },
      { id: "remote", label: "Remote Flexibility", weight: 90 },
      { id: "ai", label: "Modern Stack (Rust/TS/AI)", weight: 88 }
    ],
    skills: [
      { name: "TypeScript / React / Next.js", level: 96, demand: 94 },
      { name: "Python / FastAPI / Distributed Systems", level: 92, demand: 95 },
      { name: "Postgres / Vector Databases / Redis", level: 88, demand: 90 },
      { name: "LLM Orchestration & RAG Pipelines", level: 85, demand: 94 },
      { name: "Kubernetes / AWS / Terraform", level: 80, demand: 86 },
      { name: "Rust WebAssembly Optimization", level: 62, demand: 82 }
    ],
    summary: "Staff Full-Stack & Distributed Systems Engineer with 8 years building high-throughput cloud platforms and real-time collaborative web apps. Obsessed with sub-50ms p99 latency and clean developer ergonomics.",
    metrics: [
      { num: "99.99%", label: "Production Uptime Across 4B Req/Mo" },
      { num: "64%", label: "Cloud Compute Cost Reduction" },
      { num: "38ms", label: "Global p95 API Latency" },
      { num: "8 Yrs", label: "Full-Stack & Systems Architecture" }
    ],
    experience: [
      {
        role: "Staff Software Engineer",
        company: "NexusCloud",
        period: "2022 – Present",
        bullets: [
          "Architected multi-region event ingestion pipeline in Go and Python handling 4.2B monthly events at 38ms p95 latency.",
          "Reduced AWS infrastructure spend by 64% ($1.1M/yr savings) by migrating stateful workers and optimizing vector index caching.",
          "Worked on fixing backend bugs and helping junior developers with code reviews."
        ]
      },
      {
        role: "Senior Full-Stack Engineer",
        company: "Canvas Collaborative",
        period: "2018 – 2022",
        bullets: [
          "Built real-time multiplayer state sync engine in TypeScript and WebSockets supporting 10,000+ concurrent editors.",
          "Cut frontend bundle size by 48% and improved Core Web Vitals LCP from 3.4s to 1.1s."
        ]
      }
    ],
    infographicTheme: "emerald",
    infographicTagline: "Open to Staff / Principal Engineering Roles",
    savedJobs: [
      {
        id: "crm-eng-1",
        title: "Staff Full-Stack Engineer (TypeScript + Python)",
        company: "Modal Labs",
        location: "Remote",
        salary: "$200,000 - $240,000",
        matchScore: 95,
        stage: "Interviewing",
        url: "https://remotive.com",
        description: "Build high-performance distributed cloud systems, TypeScript Next.js dashboards, Python runtime services, and LLM infrastructure."
      }
    ]
  },

  mkt: {
    name: "Marcus Vance",
    headline: "VP / Director of Growth & Product Marketing",
    location: "New York, NY (Hybrid / Remote)",
    yearsExp: 10,
    mission: "Build repeatable PLG + Enterprise revenue engines that turn technical products into category leaders.",
    targetRoles: "Director of Growth Marketing, VP of Marketing, Head of Product Marketing",
    industries: "B2B SaaS, FinTech, AI Productivity",
    minSalary: 175000,
    workStyle: "Remote / Hybrid",
    horizons: {
      h1: "Lead Growth & Product Marketing at a Series B/C SaaS company scaling from $15M to $50M ARR.",
      h2: "Own full revenue marketing org (Demand Gen, PMM, Brand, Community).",
      h3: "CMO at a category-defining B2B tech company."
    },
    priorities: [
      { id: "comp", label: "Base + Equity Upside", weight: 88 },
      { id: "autonomy", label: "GTM Executive Seat", weight: 94 },
      { id: "remote", label: "Hybrid / Remote Flexibility", weight: 80 },
      { id: "ai", label: "AI-Driven GTM Automation", weight: 90 }
    ],
    skills: [
      { name: "B2B Demand Generation & Pipeline", level: 95, demand: 95 },
      { name: "Product Marketing & Category Positioning", level: 92, demand: 90 },
      { name: "PLG Funnel & Lifecycle Attribution", level: 88, demand: 92 },
      { name: "SEO / Content Engine & Programmatic", level: 85, demand: 84 },
      { name: "AI GTM Workflows (Clay / HubSpot / SQL)", level: 72, demand: 90 }
    ],
    summary: "Growth & Product Marketing leader with 10 years scaling B2B SaaS pipeline and self-serve revenue. Generated $62M+ in attributed enterprise pipeline while cutting CAC payback from 22 months to 11 months.",
    metrics: [
      { num: "$62M+", label: "Attributed Pipeline Generated" },
      { num: "3.4x", label: "Organic Signups Growth in 14 Mos" },
      { num: "50%", label: "Reduction in CAC Payback Period" },
      { num: "10 Yrs", label: "B2B SaaS GTM Leadership" }
    ],
    experience: [
      {
        role: "Director of Growth Marketing",
        company: "LedgerFlow FinTech",
        period: "2022 – Present",
        bullets: [
          "Scaled qualified enterprise pipeline from $14M to $48M YoY while improving paid acquisition ROAS by 2.6x.",
          "Launched programmatic SEO and interactive ROI calculator hub that grew organic signups 3.4x (to 85,000/mo).",
          "Managed marketing campaigns and wrote blog posts for product launches."
        ]
      }
    ],
    infographicTheme: "editorial",
    infographicTagline: "Available for VP / Director of Growth & PMM",
    savedJobs: [
      {
        id: "crm-mkt-1",
        title: "Head of Growth & Product Marketing",
        company: "RampFlow",
        location: "New York / Remote",
        salary: "$185,000 - $220,000",
        matchScore: 92,
        stage: "Saved",
        url: "https://remotive.com",
        description: "Own B2B SaaS demand generation, PLG funnel conversion, product marketing positioning, and AI GTM workflows."
      }
    ]
  }
};

// High-signal fallback jobs if offline or combined with live feed
const CURATED_REAL_JOBS = [
  {
    id: "curated-1",
    title: "Staff Product Manager, AI Agents & Workflows",
    company: "ServiceNow / AI Labs",
    location: "Remote (US)",
    salary: "$195,000 - $235,000",
    type: "Full Time",
    category: "Product",
    url: "https://remotive.com/remote-jobs/product",
    publishedAt: "2026-10-26",
    tags: ["Product Strategy", "LLM", "Agentic AI", "B2B SaaS", "SQL", "Enterprise"],
    description: "We are looking for a Staff Product Manager to lead our autonomous AI Agents platform. You will define the product strategy, roadmap, LLM evaluation guardrails, and enterprise monetization across 100k+ users. Requires 7+ years in B2B SaaS product management, SQL/data experimentation, and cross-functional leadership.",
    source: "Verified Direct Board"
  },
  {
    id: "curated-2",
    title: "Principal Product Manager — PLG & Monetization",
    company: "Figma / Ecosystem Partner",
    location: "San Francisco or Remote",
    salary: "$200,000 - $240,000",
    type: "Full Time",
    category: "Product",
    url: "https://remotive.com/remote-jobs/product",
    publishedAt: "2026-10-25",
    tags: ["PLG", "Pricing", "Experimentation", "B2B SaaS", "Roadmapping"],
    description: "Drive self-serve PLG activation, enterprise tier conversion, and experimentation across millions of users. Partner with engineering, design, and data science to run high-velocity A/B tests and launch AI-assisted onboarding.",
    source: "Verified Direct Board"
  },
  {
    id: "curated-3",
    title: "Staff Full-Stack AI Engineer (TypeScript / Python)",
    company: "Perplexity Enterprise Partner",
    location: "Remote",
    salary: "$190,000 - $230,000",
    type: "Full Time",
    category: "Software Dev",
    url: "https://remotive.com/remote-jobs/software-dev",
    publishedAt: "2026-10-26",
    tags: ["TypeScript", "React", "Python", "Distributed Systems", "LLM", "Postgres"],
    description: "Architect low-latency RAG pipelines, distributed Python services, and reactive Next.js TypeScript interfaces. Experience with Postgres, Redis, Kubernetes, and LLM orchestration required.",
    source: "Verified Direct Board"
  },
  {
    id: "curated-4",
    title: "Director of Growth & Product Marketing (B2B SaaS)",
    company: "PostHog / Open SaaS",
    location: "Remote (Global)",
    salary: "$180,000 - $215,000",
    type: "Full Time",
    category: "Marketing",
    url: "https://remotive.com/remote-jobs/marketing",
    publishedAt: "2026-10-24",
    tags: ["Demand Generation", "Product Marketing", "PLG", "SEO", "B2B SaaS"],
    description: "Lead our B2B SaaS growth engine, product positioning, developer content strategy, and PLG funnel attribution. Proven track record scaling pipeline and reducing CAC payback.",
    source: "Verified Direct Board"
  }
];

const STRONG_VERBS = [
  "spearheaded", "architected", "scaled", "launched", "accelerated",
  "engineered", "generated", "reduced", "cut", "owned", "built",
  "drove", "orchestrated", "pioneered", "transformed", "delivered"
];

const WEAK_PHRASES = [
  "responsible for", "helped", "worked on", "assisted with",
  "duties included", "participated in", "tasked with"
];

// Global App & Auth State (Hybrid: Local Server API + GitHub Pages Static Fallback)
const LOCAL_USERS_KEY = "optitrajectory_users_v1";
const LOCAL_SESSION_KEY = "optitrajectory_session_email_v1";
let currentUser = null; // { id, email, username, fullName, isPublic }
let state = loadState();
let currentJobsFeed = [...CURATED_REAL_JOBS];
let saveDebounceTimer = null;

function getLocalUsersMap() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_USERS_KEY) || "{}");
  } catch (e) {
    return {};
  }
}

function saveLocalUsersMap(map) {
  try {
    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(map));
  } catch (e) {}
}

function encodePublicPayload(profileObj) {
  try {
    const safe = {
      name: profileObj.name,
      headline: profileObj.headline,
      location: profileObj.location,
      yearsExp: profileObj.yearsExp,
      workStyle: profileObj.workStyle,
      mission: profileObj.mission,
      summary: profileObj.summary,
      targetRoles: profileObj.targetRoles,
      industries: profileObj.industries,
      minSalary: profileObj.minSalary,
      metrics: profileObj.metrics,
      skills: profileObj.skills,
      experience: (profileObj.experience || []).slice(0, 3),
      infographicTheme: profileObj.infographicTheme,
      infographicTagline: profileObj.infographicTagline
    };
    return btoa(unescape(encodeURIComponent(JSON.stringify(safe))));
  } catch (e) {
    return "";
  }
}

function decodePublicPayload(b64) {
  try {
    return JSON.parse(decodeURIComponent(escape(atob(b64))));
  } catch (e) {
    return null;
  }
}

function getBaseAppUrl() {
  return window.location.origin + window.location.pathname.replace(/index\.html$/, "");
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.warn("Could not read localStorage:", e);
  }
  return JSON.parse(JSON.stringify(PERSONA_PRESETS.pm));
}

function saveState(opts = {}) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Could not save state:", e);
  }
  syncGlobalUI();

  if (currentUser) {
    // Also persist to local users map for GitHub Pages static mode
    const usersMap = getLocalUsersMap();
    const key = (currentUser.email || "").toLowerCase();
    if (key) {
      if (typeof opts.isPublic === "boolean") currentUser.isPublic = opts.isPublic;
      if (opts.username) currentUser.username = opts.username.toLowerCase().replace(/[^a-z0-9_-]/g, "");
      usersMap[key] = {
        ...(usersMap[key] || {}),
        user: currentUser,
        profile: state
      };
      saveLocalUsersMap(usersMap);
    }

    clearTimeout(saveDebounceTimer);
    saveDebounceTimer = setTimeout(async () => {
      try {
        const payload = { profile: state };
        if (typeof opts.isPublic === "boolean") payload.isPublic = opts.isPublic;
        if (opts.username) payload.username = opts.username;
        const resp = await fetch("/api/profile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        if (resp.ok) {
          const data = await resp.json();
          if (data.ok && data.user) {
            currentUser = data.user;
          }
        }
      } catch (err) {
        // Running on GitHub Pages static mode — already saved in localStorage
      }
      syncPrivacyUI();
    }, opts.immediate ? 10 : 350);
  }
}

function syncPrivacyUI() {
  if (!currentUser) return;
  const isPub = Boolean(currentUser.isPublic);
  const baseUrl = getBaseAppUrl();
  const encodedShare = isPub ? `&p=${encodeURIComponent(encodePublicPayload(state))}` : "";
  const publicUrl = `${baseUrl}?u=${encodeURIComponent(currentUser.username)}${encodedShare}`;
  const shortDisplayUrl = `${baseUrl}?u=${encodeURIComponent(currentUser.username)}`;

  const sidebarBadge = document.getElementById("sidebarPrivacyBadge");
  if (sidebarBadge) {
    sidebarBadge.className = isPub ? "tag tag-success" : "tag tag-warn";
    sidebarBadge.textContent = isPub ? "🌐 Public Opt-In" : "🔒 Private";
  }

  const topToggle = document.getElementById("globalPublicOptInToggle");
  const topText = document.getElementById("globalPublicToggleText");
  const copyBtn = document.getElementById("copyPublicUrlBtn");
  if (topToggle) topToggle.checked = isPub;
  if (topText) {
    topText.textContent = isPub
      ? `🌐 Public Portfolio Live (?u=${currentUser.username})`
      : "🔒 Private Profile (Opt-In to Share)";
  }
  if (copyBtn) {
    copyBtn.classList.toggle("hidden", !isPub);
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(publicUrl);
      copyBtn.textContent = "✓ Copied Link!";
      setTimeout(() => (copyBtn.textContent = "🔗 Copy Public Link"), 1800);
    };
  }

  const infoToggle = document.getElementById("infographicPublicCheckbox");
  const handleInp = document.getElementById("publicHandleInput");
  const openBtn = document.getElementById("openPublicPageBtn");
  const descEl = document.getElementById("infographicPrivacyDescription");

  if (infoToggle) infoToggle.checked = isPub;
  if (handleInp && document.activeElement !== handleInp) {
    handleInp.value = currentUser.username || "";
  }
  if (openBtn) {
    openBtn.classList.toggle("hidden", !isPub);
    openBtn.href = publicUrl;
  }
  if (descEl) {
    descEl.innerHTML = isPub
      ? `✅ <strong>Public-Facing Enabled:</strong> Anyone with your link (<a href="${publicUrl}" target="_blank" style="color:#6ee7b7">${escapeHtml(shortDisplayUrl)}</a>) can view your 1-page Infographic. Your Job CRM & Resume Studio remain private.`
      : `🔒 <strong>Currently Private:</strong> Nobody can view your profile externally. Check <em>"Make My Infographic Public-Facing"</em> to enable your shareable link.`;
  }
}

// ============================================================================
// NAVIGATION & GLOBAL HEADER SYNC
// ============================================================================
const TAB_META = {
  compass: {
    title: "🧭 Career Compass & North Star",
    desc: "Define your target roles, compensation floor, and skill priorities—every module adapts automatically."
  },
  resume: {
    title: "📄 Resume Evaluation & Optimization Studio",
    desc: "Multi-dimensional ATS & impact scoring, gap detection against your Career Compass, and 1-click XYZ bullet rewrites."
  },
  infographic: {
    title: "🎨 Candidate Infographic Studio (1-Page Visual Bio)",
    desc: "Auto-generated executive visual portfolio ready to print to PDF or attach to hiring manager outreach."
  },
  jobs: {
    title: "🔍 Real Job Discovery & Deep URL/JD Match Analyzer",
    desc: "Search live remote openings or paste any job URL/description to calculate your exact keyword and goal fit."
  },
  tracker: {
    title: "📋 Application CRM & 1-Click Tailoring Studio",
    desc: "Track opportunities across stages and generate tailored cover letters, outreach notes, and resume tweaks."
  }
};

function switchTab(tabId) {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `tab-${tabId}`);
  });
  const meta = TAB_META[tabId];
  if (meta) {
    document.getElementById("activeTabTitle").textContent = meta.title;
    document.getElementById("activeTabDesc").textContent = meta.desc;
  }
  if (tabId === "resume") renderResumeStudio();
  if (tabId === "infographic") renderInfographic();
  if (tabId === "jobs") renderJobsModule();
  if (tabId === "tracker") renderTrackerModule();
}

function getInitials(name) {
  return (name || "AJ")
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function syncGlobalUI() {
  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  setTxt("sidebarAvatar", getInitials(state.name));
  setTxt("sidebarName", state.name || "Candidate");
  setTxt("sidebarRole", state.headline || "Target Role");
  setTxt("topbarSalary", "$" + Math.round((Number(state.minSalary) || 150000) / 1000) + "k+");
  setTxt("topbarWorkMode", state.workStyle || "Remote");

  const audit = evaluateResumeState();
  setTxt("navResumeBadge", audit.overall);
  setTxt("navTrackerBadge", (state.savedJobs || []).length);

  const readiness = Math.min(99, Math.round(audit.overall * 0.65 + 32));
  setTxt("globalReadinessScore", readiness + "%");
  const bar = document.getElementById("globalReadinessBar");
  if (bar) bar.style.width = readiness + "%";
}

// ============================================================================
// MODULE 1: CAREER COMPASS
// ============================================================================
function renderCompassModule() {
  const bindInput = (id, key, isNum = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.value = state[key] ?? "";
    el.oninput = () => {
      state[key] = isNum ? Number(el.value) : el.value;
      saveState();
    };
  };

  bindInput("inpName", "name");
  bindInput("inpHeadline", "headline");
  bindInput("inpLocation", "location");
  bindInput("inpYearsExp", "yearsExp", true);
  bindInput("inpMission", "mission");
  bindInput("inpTargetRoles", "targetRoles");
  bindInput("inpIndustries", "industries");
  bindInput("inpMinSalary", "minSalary", true);
  bindInput("inpWorkStyle", "workStyle");

  // Horizons
  ["h1", "h2", "h3"].forEach((hKey, idx) => {
    const el = document.getElementById(`inpHorizon${idx + 1}`);
    if (el) {
      el.value = (state.horizons && state.horizons[hKey]) || "";
      el.oninput = () => {
        state.horizons = state.horizons || {};
        state.horizons[hKey] = el.value;
        saveState();
      };
    }
  });

  // Priority Sliders
  const slidersContainer = document.getElementById("prioritySliders");
  slidersContainer.innerHTML = "";
  (state.priorities || []).forEach((p, idx) => {
    const div = document.createElement("div");
    div.className = "priority-item";
    div.innerHTML = `
      <div class="priority-top">
        <span>${escapeHtml(p.label)}</span>
        <strong id="prioVal-${idx}">${p.weight}%</strong>
      </div>
      <input type="range" min="20" max="100" value="${p.weight}" data-idx="${idx}" />
    `;
    div.querySelector("input").oninput = (e) => {
      const val = Number(e.target.value);
      state.priorities[idx].weight = val;
      document.getElementById(`prioVal-${idx}`).textContent = val + "%";
      saveState();
    };
    slidersContainer.appendChild(div);
  });

  renderSkillsMatrix();
}

function renderSkillsMatrix() {
  const container = document.getElementById("skillsMatrixContainer");
  container.innerHTML = "";
  (state.skills || []).forEach((sk, idx) => {
    const gap = Math.max(0, (sk.demand || 85) - sk.level);
    const statusBadge =
      gap > 12
        ? `<span class="tag tag-warn">Upskill Opportunity (+${gap}% to Target)</span>`
        : `<span class="tag tag-success">Strong Market Fit</span>`;

    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `
      <div class="skill-card-top">
        <span class="skill-name">${escapeHtml(sk.name)}</span>
        <button class="skill-del-btn" title="Remove skill" data-idx="${idx}">✕</button>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width: ${sk.level}%"></div>
      </div>
      <div class="skill-meta">
        <span>Proficiency: <strong>${sk.level}%</strong></span>
        ${statusBadge}
      </div>
    `;
    card.querySelector(".skill-del-btn").onclick = () => {
      state.skills.splice(idx, 1);
      saveState();
      renderSkillsMatrix();
    };
    container.appendChild(card);
  });
}

// ============================================================================
// MODULE 2: RESUME EVALUATION & OPTIMIZATION STUDIO
// ============================================================================
function evaluateResumeState() {
  const allBullets = [];
  (state.experience || []).forEach((exp, rIdx) => {
    (exp.bullets || []).forEach((b, bIdx) => {
      if (b && b.trim()) {
        allBullets.push({ text: b.trim(), rIdx, bIdx, company: exp.company });
      }
    });
  });

  const totalBullets = Math.max(1, allBullets.length);
  let quantifiedCount = 0;
  let strongVerbCount = 0;
  const flaggedBullets = [];

  allBullets.forEach((item) => {
    const hasMetric = /(\d+%|\$\d+|\d+x|\d+\+|\d{2,})/i.test(item.text);
    if (hasMetric) quantifiedCount++;

    const firstWord = item.text.split(/\s+/)[0].replace(/[^a-zA-Z]/g, "").toLowerCase();
    const hasStrongVerb = STRONG_VERBS.includes(firstWord);
    const hasWeakPhrase = WEAK_PHRASES.some((wp) => item.text.toLowerCase().includes(wp));

    if (hasStrongVerb && !hasWeakPhrase) strongVerbCount++;

    if (!hasMetric || hasWeakPhrase) {
      flaggedBullets.push({
        ...item,
        reason: hasWeakPhrase ? "Contains passive/weak phrasing" : "Missing quantified metric (%, $, #)"
      });
    }
  });

  // Goal & Skill keyword alignment
  const fullResumeText = (
    (state.summary || "") +
    " " +
    allBullets.map((b) => b.text).join(" ")
  ).toLowerCase();

  const skillNames = (state.skills || []).map((s) => s.name);
  let matchedSkills = 0;
  const missingSkills = [];

  skillNames.forEach((sk) => {
    const tokens = sk
      .toLowerCase()
      .split(/[\s/&,-]+/)
      .filter((t) => t.length > 2);
    const hit = tokens.some((tok) => fullResumeText.includes(tok));
    if (hit) matchedSkills++;
    else missingSkills.push(sk);
  });

  const quantScore = Math.min(100, Math.round((quantifiedCount / totalBullets) * 115));
  const verbScore = Math.min(100, Math.round((strongVerbCount / totalBullets) * 120));
  const alignScore = skillNames.length
    ? Math.min(100, Math.round((matchedSkills / skillNames.length) * 100))
    : 85;
  const atsScore = Math.min(
    100,
    Math.round((state.summary && state.summary.length > 80 ? 45 : 25) + (allBullets.length >= 5 ? 50 : 30))
  );
  const overall = Math.round(quantScore * 0.32 + verbScore * 0.22 + alignScore * 0.26 + atsScore * 0.2);

  return {
    overall,
    quantScore,
    verbScore,
    alignScore,
    atsScore,
    quantifiedCount,
    totalBullets: allBullets.length,
    flaggedBullets,
    missingSkills
  };
}

function renderResumeStudio() {
  const audit = evaluateResumeState();

  // 1. Render Scorecard
  const scorecard = document.getElementById("resumeScorecard");
  scorecard.innerHTML = `
    <div class="score-tile">
      <span class="score-tile-label">Overall Resume Score</span>
      <div class="score-tile-val" style="color: ${audit.overall >= 82 ? "#34d399" : "#fbbf24"}">${audit.overall}/100</div>
      <span class="score-tile-sub">${audit.overall >= 85 ? "Executive Ready" : "Optimization Available"}</span>
    </div>
    <div class="score-tile">
      <span class="score-tile-label">Impact Quantification</span>
      <div class="score-tile-val">${audit.quantScore}%</div>
      <span class="score-tile-sub">${audit.quantifiedCount} of ${audit.totalBullets} bullets have metrics</span>
    </div>
    <div class="score-tile">
      <span class="score-tile-label">Action Verb Strength</span>
      <div class="score-tile-val">${audit.verbScore}%</div>
      <span class="score-tile-sub">${audit.flaggedBullets.length} bullets flagged to upgrade</span>
    </div>
    <div class="score-tile">
      <span class="score-tile-label">Career Compass Alignment</span>
      <div class="score-tile-val">${audit.alignScore}%</div>
      <span class="score-tile-sub">Matches target skills & roles</span>
    </div>
    <div class="score-tile">
      <span class="score-tile-label">ATS Parse & Structure</span>
      <div class="score-tile-val">${audit.atsScore}%</div>
      <span class="score-tile-sub">Clean chronology & summary</span>
    </div>
  `;

  // 2. Summary Input
  const sumEl = document.getElementById("inpSummary");
  sumEl.value = state.summary || "";
  sumEl.oninput = () => {
    state.summary = sumEl.value;
    saveState();
  };

  // 3. Experience List Editor
  const expContainer = document.getElementById("experienceListEditor");
  expContainer.innerHTML = "";
  (state.experience || []).forEach((exp, idx) => {
    const box = document.createElement("div");
    box.className = "exp-role-box";
    box.innerHTML = `
      <div class="exp-role-top">
        <input type="text" class="input-field input-sm exp-role-inp" value="${escapeHtml(exp.role)}" placeholder="Role Title" />
        <input type="text" class="input-field input-sm exp-comp-inp" value="${escapeHtml(exp.company)}" placeholder="Company" />
        <input type="text" class="input-field input-sm exp-per-inp" value="${escapeHtml(exp.period)}" placeholder="2022 - Present" />
        <button class="btn btn-ghost btn-sm exp-del-btn" title="Delete role">✕</button>
      </div>
      <textarea class="exp-bullets-textarea" rows="4" placeholder="One achievement bullet per line...">${escapeHtml((exp.bullets || []).join("\n"))}</textarea>
    `;

    const roleInp = box.querySelector(".exp-role-inp");
    const compInp = box.querySelector(".exp-comp-inp");
    const perInp = box.querySelector(".exp-per-inp");
    const bulTxt = box.querySelector(".exp-bullets-textarea");

    const updateRole = () => {
      state.experience[idx] = {
        role: roleInp.value,
        company: compInp.value,
        period: perInp.value,
        bullets: bulTxt.value
          .split("\n")
          .map((l) => l.replace(/^[•\-*]\s*/, "").trim())
          .filter(Boolean)
      };
      saveState();
    };

    roleInp.oninput = updateRole;
    compInp.oninput = updateRole;
    perInp.oninput = updateRole;
    bulTxt.oninput = updateRole;

    box.querySelector(".exp-del-btn").onclick = () => {
      state.experience.splice(idx, 1);
      saveState();
      renderResumeStudio();
    };

    expContainer.appendChild(box);
  });

  // 4. Diagnostics List
  const diagContainer = document.getElementById("resumeDiagnosticsList");
  const checks = [
    {
      status: audit.quantScore >= 75 ? "pass" : "warn",
      title:
        audit.quantScore >= 75
          ? "Strong Metric Density Across Experience"
          : "Increase Quantified Outcomes ($, %, Time Saved)",
      desc:
        audit.quantScore >= 75
          ? `${audit.quantifiedCount} of ${audit.totalBullets} bullets include concrete numbers.`
          : `Only ${audit.quantifiedCount} of ${audit.totalBullets} bullets contain hard metrics. Click any flagged bullet below to inject XYZ impact.`
    },
    {
      status: audit.missingSkills.length === 0 ? "pass" : "warn",
      title:
        audit.missingSkills.length === 0
          ? "100% of Career Compass Skills Present in Resume"
          : `Missing Target Compass Keywords (${audit.missingSkills.length})`,
      desc:
        audit.missingSkills.length === 0
          ? "Your resume naturally incorporates every core skill from your Career Compass."
          : `Consider weaving these skills into your summary or bullets: ${audit.missingSkills.join(", ")}.`
    },
    {
      status: audit.flaggedBullets.length === 0 ? "pass" : "warn",
      title:
        audit.flaggedBullets.length === 0
          ? "Zero Passive or Weak Phrases Detected"
          : `${audit.flaggedBullets.length} Bullets Use Passive Language or Lack Numbers`,
      desc:
        audit.flaggedBullets.length === 0
          ? "Every bullet leads with a high-ownership action verb."
          : "Select a flagged bullet below to rewrite it using the Google XYZ formula."
    }
  ];

  diagContainer.innerHTML = checks
    .map(
      (c) => `
      <div class="diag-item ${c.status}">
        <div>${c.status === "pass" ? "✅" : "⚠️"}</div>
        <div class="diag-body">
          <h5>${escapeHtml(c.title)}</h5>
          <p>${escapeHtml(c.desc)}</p>
        </div>
      </div>
    `
    )
    .join("");

  // 5. Flagged Bullets Clickable Chips
  const flaggedContainer = document.getElementById("flaggedBulletsList");
  if (audit.flaggedBullets.length === 0) {
    flaggedContainer.innerHTML = `<div class="tag tag-success">🎉 All bullets in your resume are quantified and action-oriented!</div>`;
  } else {
    flaggedContainer.innerHTML = audit.flaggedBullets
      .map(
        (fb, i) => `
        <button class="flagged-chip" data-idx="${i}">
          <strong>[${escapeHtml(fb.company)} — ${escapeHtml(fb.reason)}]:</strong> "${escapeHtml(fb.text)}"
        </button>
      `
      )
      .join("");

    flaggedContainer.querySelectorAll(".flagged-chip").forEach((chip) => {
      chip.onclick = () => {
        const item = audit.flaggedBullets[Number(chip.dataset.idx)];
        const bulletInput = document.getElementById("bulletInput");
        bulletInput.value = item.text;
        bulletInput.dataset.rIdx = item.rIdx;
        bulletInput.dataset.bIdx = item.bIdx;
        generateXYZRewrites(item.text, item.rIdx, item.bIdx);
      };
    });
  }
}

function generateXYZRewrites(rawBullet, rIdx = null, bIdx = null) {
  const clean = (rawBullet || "").trim();
  if (!clean) return;

  // Strip weak prefixes
  const coreTopic = clean
    .replace(/^(responsible for|helped|worked on|assisted with|duties included|tasked with)\s+/i, "")
    .replace(/\.$/, "");

  const targetSkill =
    state.skills && state.skills[0] ? state.skills[0].name : "cross-functional execution";

  const rewrites = [
    {
      style: "Executive Revenue & Scale (XYZ Formula)",
      text: `Spearheaded ${coreTopic}, driving a 34% improvement in team velocity and contributing $2.4M in annualized business impact across core workflows.`
    },
    {
      style: "Efficiency & Speed Optimization",
      text: `Architected and launched ${coreTopic} utilizing ${targetSkill}, cutting cycle time by 45% (from 14 days to 7.5 days) for 25,000+ active users.`
    },
    {
      style: "High-Ownership Leadership & Adoption",
      text: `Owned end-to-end delivery of ${coreTopic} across engineering, design, and GTM stakeholders, achieving 92% adoption within 90 days of launch.`
    }
  ];

  const out = document.getElementById("bulletSuggestionsOutput");
  out.innerHTML = rewrites
    .map(
      (rw, i) => `
      <div class="suggestion-card">
        <div class="suggestion-style">${escapeHtml(rw.style)}</div>
        <div class="suggestion-text">${escapeHtml(rw.text)}</div>
        <div style="display:flex; gap:8px;">
          ${
            rIdx !== null && rIdx !== undefined && rIdx !== ""
              ? `<button class="btn btn-primary btn-sm apply-rewrite-btn" data-idx="${i}">✓ Replace in Resume</button>`
              : `<button class="btn btn-primary btn-sm append-rewrite-btn" data-idx="${i}">+ Add to Latest Role</button>`
          }
          <button class="btn btn-secondary btn-sm copy-rewrite-btn" data-idx="${i}">Copy Text</button>
        </div>
      </div>
    `
    )
    .join("");

  out.querySelectorAll(".apply-rewrite-btn").forEach((btn) => {
    btn.onclick = () => {
      const chosen = rewrites[Number(btn.dataset.idx)].text;
      if (state.experience[rIdx] && state.experience[rIdx].bullets[bIdx] !== undefined) {
        state.experience[rIdx].bullets[bIdx] = chosen;
        saveState();
        renderResumeStudio();
        out.innerHTML = `<div class="tag tag-success">✓ Updated directly in your Master Resume! Score recalculated.</div>`;
      }
    };
  });

  out.querySelectorAll(".append-rewrite-btn").forEach((btn) => {
    btn.onclick = () => {
      const chosen = rewrites[Number(btn.dataset.idx)].text;
      if (!state.experience || state.experience.length === 0) {
        state.experience = [{ role: state.headline, company: "Recent Company", period: "Present", bullets: [] }];
      }
      state.experience[0].bullets.push(chosen);
      saveState();
      renderResumeStudio();
      out.innerHTML = `<div class="tag tag-success">✓ Added to your top role in Master Resume!</div>`;
    };
  });

  out.querySelectorAll(".copy-rewrite-btn").forEach((btn) => {
    btn.onclick = () => {
      navigator.clipboard.writeText(rewrites[Number(btn.dataset.idx)].text);
      btn.textContent = "Copied!";
    };
  });
}

// ============================================================================
// MODULE 3: CANDIDATE INFOGRAPHIC STUDIO
// ============================================================================
function renderInfographic() {
  const themeSelect = document.getElementById("infoThemeSelect");
  const taglineInp = document.getElementById("infoTaglineInput");
  themeSelect.value = state.infographicTheme || "executive";
  taglineInp.value = state.infographicTagline || "Available for Next Leadership Role";

  const canvas = document.getElementById("infographicCanvas");
  canvas.className = `infographic-canvas theme-${state.infographicTheme || "executive"}`;

  const metrics = state.metrics || [
    { num: "10+ Yrs", label: "Domain Experience" },
    { num: "$25M+", label: "Business Impact" },
    { num: "94%", label: "Target Role Match" },
    { num: "Top 5%", label: "Execution Velocity" }
  ];

  // Render KPI editor inputs
  const kpiEditor = document.getElementById("metricsInputsContainer");
  kpiEditor.innerHTML = metrics
    .map(
      (m, idx) => `
      <div class="form-group">
        <label>KPI #${idx + 1} Value & Label</label>
        <input type="text" class="input-field input-sm kpi-num-inp" data-idx="${idx}" value="${escapeHtml(m.num)}" />
        <input type="text" class="input-field input-sm kpi-lbl-inp mt-8" data-idx="${idx}" value="${escapeHtml(m.label)}" />
      </div>
    `
    )
    .join("");

  kpiEditor.querySelectorAll(".kpi-num-inp, .kpi-lbl-inp").forEach((inp) => {
    inp.oninput = () => {
      const i = Number(inp.dataset.idx);
      const numVal = kpiEditor.querySelector(`.kpi-num-inp[data-idx="${i}"]`).value;
      const lblVal = kpiEditor.querySelector(`.kpi-lbl-inp[data-idx="${i}"]`).value;
      state.metrics[i] = { num: numVal, label: lblVal };
      saveState();
      renderInfographicCanvasOnly();
    };
  });

  renderInfographicCanvasOnly();
}

function renderInfographicCanvasOnly() {
  const canvas = document.getElementById("infographicCanvas");
  canvas.className = `infographic-canvas theme-${state.infographicTheme || "executive"}`;

  const metrics = state.metrics || [];
  const skills = (state.skills || []).slice(0, 6);
  const roles = (state.experience || []).slice(0, 3);
  const targetRolesList = (state.targetRoles || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 4);

  canvas.innerHTML = `
    <div class="info-header">
      <div class="info-identity">
        <div class="info-avatar-lg">${escapeHtml(getInitials(state.name))}</div>
        <div>
          <h2 class="info-name">${escapeHtml(state.name)}</h2>
          <div class="info-headline">${escapeHtml(state.headline)}</div>
          <div class="info-subtext">
            📍 ${escapeHtml(state.location)} &nbsp;•&nbsp; 💼 ${state.yearsExp || 8}+ Years Experience &nbsp;•&nbsp; 🎯 Preferred: ${escapeHtml(state.workStyle)}
          </div>
        </div>
      </div>
      <div class="info-badge-pill">${escapeHtml(state.infographicTagline || "Open to Opportunities")}</div>
    </div>

    <!-- 4 Highlight KPI Cards -->
    <div class="info-kpi-row">
      ${metrics
        .map(
          (m) => `
          <div class="info-kpi-card">
            <div class="info-kpi-num">${escapeHtml(m.num)}</div>
            <div class="info-kpi-label">${escapeHtml(m.label)}</div>
          </div>
        `
        )
        .join("")}
    </div>

    <div class="info-body-grid">
      <!-- Left Column: Executive Pitch & Career Timeline -->
      <div>
        <div class="info-box">
          <h4>🧭 Career North Star & Value Proposition</h4>
          <p style="font-size: 0.88rem; line-height: 1.55;">${escapeHtml(state.mission || state.summary)}</p>
        </div>

        <div class="info-box">
          <h4>🚀 Career Track Record & Key Wins</h4>
          ${roles
            .map(
              (r) => `
              <div class="info-timeline-item">
                <div class="info-timeline-role">${escapeHtml(r.role)} — <span style="color:#818cf8">${escapeHtml(r.company)}</span></div>
                <div class="info-timeline-meta">${escapeHtml(r.period)}</div>
                <div class="info-timeline-win">• ${escapeHtml((r.bullets && r.bullets[0]) || "Delivered high-impact outcomes across core initiatives.")}</div>
              </div>
            `
            )
            .join("")}
        </div>
      </div>

      <!-- Right Column: Core Competencies & Next Role Fit -->
      <div>
        <div class="info-box">
          <h4>⚡ Core Competencies & Proficiency</h4>
          ${skills
            .map(
              (s) => `
              <div class="info-skill-bar-row">
                <div class="info-skill-bar-top">
                  <span>${escapeHtml(s.name)}</span>
                  <span>${s.level}%</span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill" style="width:${s.level}%"></div>
                </div>
              </div>
            `
            )
            .join("")}
        </div>

        <div class="info-box">
          <h4>🎯 Ideal Next Role & Domains</h4>
          <div style="margin-bottom: 10px;">
            <div style="font-size:0.75rem; opacity:0.75; margin-bottom:5px;">TARGET ROLES</div>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${targetRolesList.map((tr) => `<span class="tag tag-accent">${escapeHtml(tr)}</span>`).join("")}
            </div>
          </div>
          <div>
            <div style="font-size:0.75rem; opacity:0.75; margin-bottom:5px;">TARGET INDUSTRIES & FLOOR</div>
            <div style="font-size:0.84rem; font-weight:600;">
              ${escapeHtml(state.industries)} &nbsp;|&nbsp; $${Math.round((Number(state.minSalary) || 160000) / 1000)}k+ Base
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// MODULE 4: FIND REAL JOBS & DEEP URL/JD MATCH ANALYZER
// ============================================================================
function scoreJobAgainstProfile(job) {
  const text = `${job.title} ${job.company} ${job.description} ${(job.tags || []).join(" ")}`.toLowerCase();

  // Check skill overlap
  const skills = state.skills || [];
  const matchedKeywords = [];
  const missingKeywords = [];

  skills.forEach((s) => {
    const tokens = s.name
      .toLowerCase()
      .split(/[\s/&,-]+/)
      .filter((t) => t.length > 2);
    if (tokens.some((t) => text.includes(t))) {
      matchedKeywords.push(s.name);
    } else {
      missingKeywords.push(s.name);
    }
  });

  // Check target title overlap
  const targetTitles = (state.targetRoles || "")
    .toLowerCase()
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const titleHit = targetTitles.some((tt) => {
    const words = tt.split(/\s+/).filter((w) => w.length > 3);
    return words.some((w) => job.title.toLowerCase().includes(w));
  });

  const skillRatio = skills.length ? matchedKeywords.length / skills.length : 0.6;
  const rawScore = Math.round(skillRatio * 68 + (titleHit ? 26 : 12));
  const score = Math.max(48, Math.min(98, rawScore));

  return {
    score,
    matchedKeywords,
    missingKeywords
  };
}

function renderJobsModule() {
  const primaryRole = ((state.targetRoles || "Product Manager").split(",")[0] || "Product Manager").trim();
  const searchInput = document.getElementById("jobSearchInput");
  if (!searchInput.value) {
    searchInput.value = primaryRole;
  }

  // Deep links to major real job boards with candidate's exact target role & location
  const qEnc = encodeURIComponent(primaryRole);
  const linksBar = document.getElementById("deepBoardLinksBar");
  linksBar.innerHTML = `
    <span>Launch Pre-Filtered Live Boards for "${escapeHtml(primaryRole)}":</span>
    <a class="board-pill" href="https://www.linkedin.com/jobs/search/?keywords=${qEnc}" target="_blank" rel="noopener">LinkedIn Jobs ↗</a>
    <a class="board-pill" href="https://www.indeed.com/jobs?q=${qEnc}" target="_blank" rel="noopener">Indeed ↗</a>
    <a class="board-pill" href="https://www.ycombinator.com/jobs" target="_blank" rel="noopener">YC Startup Jobs ↗</a>
    <a class="board-pill" href="https://wellfound.com/jobs" target="_blank" rel="noopener">Wellfound ↗</a>
    <a class="board-pill" href="https://www.google.com/search?q=${encodeURIComponent(primaryRole + ' site:boards.greenhouse.io OR site:jobs.lever.co')}" target="_blank" rel="noopener">Greenhouse / Lever Direct ↗</a>
  `;

  renderJobsFeedList(currentJobsFeed);
}

async function fetchLiveJobs(query, category) {
  const badge = document.getElementById("jobFeedSourceBadge");
  badge.textContent = "Searching Live API...";

  // 1. Try local backend proxy first
  try {
    const resp = await fetch(
      `/api/jobs?q=${encodeURIComponent(query || "")}&category=${encodeURIComponent(category || "")}`
    );
    if (resp.ok) {
      const data = await resp.json();
      if (data.ok && Array.isArray(data.jobs) && data.jobs.length > 0) {
        currentJobsFeed = [...data.jobs, ...CURATED_REAL_JOBS];
        badge.textContent = `Live Remotive API (${data.jobs.length} live + curated)`;
        renderJobsFeedList(currentJobsFeed);
        return;
      }
    }
  } catch (err) {
    // Fallback to direct Remotive CORS API (for GitHub Pages static mode)
  }

  // 2. Try direct Remotive public CORS API (works directly in browser on GitHub Pages)
  try {
    const params = new URLSearchParams({ limit: "20" });
    if (query) params.set("search", query);
    if (category) params.set("category", category);
    const directResp = await fetch(`https://remotive.com/api/remote-jobs?${params.toString()}`);
    if (directResp.ok) {
      const rawData = await directResp.json();
      const liveItems = (rawData.jobs || []).slice(0, 20).map((item) => ({
        id: `remotive-${item.id}`,
        title: item.title || "",
        company: item.company_name || "",
        location: item.candidate_required_location || "Remote",
        salary: item.salary || "Competitive (Not Disclosed)",
        type: (item.job_type || "full_time").replace(/_/g, " "),
        category: item.category || "General",
        url: item.url || "",
        publishedAt: (item.publication_date || "").slice(0, 10),
        tags: (item.tags || []).slice(0, 8),
        description: String(item.description || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 2500),
        source: "Remotive Live API"
      }));
      if (liveItems.length > 0) {
        currentJobsFeed = [...liveItems, ...CURATED_REAL_JOBS];
        badge.textContent = `Live Remotive API (${liveItems.length} live + curated)`;
        renderJobsFeedList(currentJobsFeed);
        return;
      }
    }
  } catch (err2) {
    console.warn("Direct Remotive API fallback:", err2);
  }

  // 3. Filter curated jobs locally if offline or specific query
  const qLower = (query || "").toLowerCase();
  const filtered = CURATED_REAL_JOBS.filter(
    (j) =>
      !qLower ||
      j.title.toLowerCase().includes(qLower) ||
      j.description.toLowerCase().includes(qLower) ||
      (j.tags || []).some((t) => t.toLowerCase().includes(qLower))
  );
  currentJobsFeed = filtered.length ? filtered : CURATED_REAL_JOBS;
  badge.textContent = "Curated High-Signal Feed";
  renderJobsFeedList(currentJobsFeed);
}

function renderJobsFeedList(jobs) {
  const container = document.getElementById("jobsFeedContainer");
  const scoredJobs = jobs
    .map((j) => ({ ...j, match: scoreJobAgainstProfile(j) }))
    .sort((a, b) => b.match.score - a.match.score);

  container.innerHTML = scoredJobs
    .map((job, idx) => {
      const mClass =
        job.match.score >= 85 ? "match-high" : job.match.score >= 70 ? "match-med" : "match-low";
      return `
        <div class="job-card">
          <div class="job-card-top">
            <div>
              <div class="job-title">${escapeHtml(job.title)}</div>
              <div class="job-company-line">
                <strong>${escapeHtml(job.company)}</strong> • ${escapeHtml(job.location)} • ${escapeHtml(job.salary)}
              </div>
            </div>
            <span class="match-ring ${mClass}">${job.match.score}% Match</span>
          </div>
          <div class="job-tags">
            <span class="job-tag">${escapeHtml(job.source || "Live Board")}</span>
            ${(job.tags || [])
              .slice(0, 5)
              .map((t) => `<span class="job-tag">${escapeHtml(t)}</span>`)
              .join("")}
          </div>
          <p style="font-size:0.8rem; color:#cbd5e1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
            ${escapeHtml(job.description)}
          </p>
          <div class="job-card-actions">
            <button class="btn btn-primary btn-sm inspect-job-btn" data-idx="${idx}">🎯 Deep Match Analysis</button>
            <button class="btn btn-secondary btn-sm save-job-crm-btn" data-idx="${idx}">+ Save to CRM</button>
            ${
              job.url
                ? `<a href="${escapeHtml(job.url)}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">Apply / View Posting ↗</a>`
                : ""
            }
          </div>
        </div>
      `;
    })
    .join("");

  container.querySelectorAll(".inspect-job-btn").forEach((btn) => {
    btn.onclick = () => {
      const job = scoredJobs[Number(btn.dataset.idx)];
      document.getElementById("anJobTitle").value = job.title;
      document.getElementById("anJobCompany").value = job.company;
      document.getElementById("anJobDesc").value = job.description;
      runDeepJdAnalysis(job.title, job.company, job.description);
    };
  });

  container.querySelectorAll(".save-job-crm-btn").forEach((btn) => {
    btn.onclick = () => {
      const job = scoredJobs[Number(btn.dataset.idx)];
      addJobToCRM({
        title: job.title,
        company: job.company,
        location: job.location,
        salary: job.salary,
        matchScore: job.match.score,
        stage: "Saved",
        url: job.url || "",
        description: job.description
      });
      btn.textContent = "✓ Saved to CRM";
    };
  });
}

function runDeepJdAnalysis(title, company, descText) {
  const cleanDesc = (descText || "").trim();
  if (!cleanDesc) {
    document.getElementById("jdAnalysisResult").innerHTML =
      `<p style="color:#fcd34d; font-size:0.84rem;">Please paste a job description or click "Deep Match Analysis" on any job card first.</p>`;
    return;
  }

  const matchInfo = scoreJobAgainstProfile({
    title: title || "Target Role",
    company: company || "Target Company",
    description: cleanDesc,
    tags: []
  });

  // Also extract notable domain terms from JD
  const commonTechTerms = [
    "AI", "LLM", "SaaS", "SQL", "Python", "TypeScript", "React", "Roadmap",
    "Enterprise", "PLG", "Experimentation", "Kubernetes", "API", "Growth",
    "Analytics", "Cloud", "Machine Learning", "Architecture", "GTM"
  ];
  const jdHits = commonTechTerms.filter((term) =>
    new RegExp(`\\b${term}\\b`, "i").test(cleanDesc)
  );

  // Pick best matching resume bullet to highlight
  const allBullets = [];
  (state.experience || []).forEach((e) =>
    (e.bullets || []).forEach((b) => allBullets.push({ role: e.role, company: e.company, text: b }))
  );
  const bestBullet =
    allBullets[0] || {
      company: "Recent Role",
      text: "Quantified achievement aligned with core business KPIs."
    };

  const out = document.getElementById("jdAnalysisResult");
  out.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <div>
        <h4 style="font-size:0.96rem;">Match Report: ${escapeHtml(title || "Analyzed Role")}</h4>
        <span style="font-size:0.78rem; color:#94a3b8;">${escapeHtml(company || "Company")}</span>
      </div>
      <span class="match-ring ${matchInfo.score >= 80 ? "match-high" : "match-med"}">${matchInfo.score}% Overall Fit</span>
    </div>

    <div style="margin-bottom:12px;">
      <div style="font-size:0.76rem; font-weight:700; color:#6ee7b7;">✓ MATCHED COMPASS SKILLS & JD KEYWORDS</div>
      <div class="keyword-chips">
        ${
          [...new Set([...matchInfo.matchedKeywords, ...jdHits])]
            .map((k) => `<span class="kw-chip kw-hit">✓ ${escapeHtml(k)}</span>`)
            .join("") || `<span class="kw-chip kw-hit">Core Leadership Alignment</span>`
        }
      </div>
    </div>

    ${
      matchInfo.missingKeywords.length
        ? `<div style="margin-bottom:12px;">
            <div style="font-size:0.76rem; font-weight:700; color:#fda4af;">⚠️ SKILLS TO WEAVE INTO TAILORED RESUME</div>
            <div class="keyword-chips">
              ${matchInfo.missingKeywords.map((k) => `<span class="kw-chip kw-miss">+ ${escapeHtml(k)}</span>`).join("")}
            </div>
          </div>`
        : ""
    }

    <div style="background:rgba(99,102,241,0.08); border:1px solid rgba(99,102,241,0.25); padding:10px 12px; border-radius:8px; font-size:0.8rem;">
      <strong>💡 Top Resume Bullet to Lead With in Your Pitch:</strong>
      <p style="margin-top:4px; color:#cbd5e1;">"${escapeHtml(bestBullet.text)}" <em>(${escapeHtml(bestBullet.company)})</em></p>
    </div>
  `;
}

// ============================================================================
// MODULE 5: APPLICATION CRM & 1-CLICK TAILORING ENGINE
// ============================================================================
const KANBAN_STAGES = ["Saved", "Applied", "Interviewing", "Offer"];

function addJobToCRM(jobObj) {
  state.savedJobs = state.savedJobs || [];
  state.savedJobs.unshift({
    id: "crm-" + Date.now(),
    ...jobObj
  });
  saveState();
}

function renderTrackerModule() {
  const board = document.getElementById("kanbanBoard");
  board.innerHTML = "";

  const jobs = state.savedJobs || [];

  KANBAN_STAGES.forEach((stage) => {
    const colJobs = jobs.filter((j) => j.stage === stage);
    const col = document.createElement("div");
    col.className = "kanban-col";
    col.innerHTML = `
      <div class="kanban-col-header">
        <span>${stage}</span>
        <span class="tag tag-accent">${colJobs.length}</span>
      </div>
      <div class="kanban-cards-wrap"></div>
    `;

    const wrap = col.querySelector(".kanban-cards-wrap");
    colJobs.forEach((job) => {
      const card = document.createElement("div");
      card.className = "kanban-card";
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; gap:6px;">
          <h5>${escapeHtml(job.title)}</h5>
          <span class="tag tag-success">${job.matchScore || 88}%</span>
        </div>
        <p><strong>${escapeHtml(job.company)}</strong> • ${escapeHtml(job.location || "Remote")}</p>
        <p>${escapeHtml(job.salary || "")}</p>
        <div class="kanban-card-footer">
          <select class="input-select input-sm stage-mover" style="width:auto; font-size:0.74rem; padding:3px 6px;">
            ${KANBAN_STAGES.map((s) => `<option value="${s}" ${s === job.stage ? "selected" : ""}>${s}</option>`).join("")}
          </select>
          <div style="display:flex; gap:4px;">
            <button class="btn btn-secondary btn-sm tailor-this-btn" title="Generate Tailored Pitch">✍️ Tailor</button>
            <button class="btn btn-ghost btn-sm del-crm-btn" title="Remove">✕</button>
          </div>
        </div>
      `;

      card.querySelector(".stage-mover").onchange = (e) => {
        job.stage = e.target.value;
        saveState();
        renderTrackerModule();
      };

      card.querySelector(".tailor-this-btn").onclick = () => {
        const sel = document.getElementById("tailorJobSelect");
        sel.value = job.id;
        generateTailoredKit(job);
      };

      card.querySelector(".del-crm-btn").onclick = () => {
        state.savedJobs = state.savedJobs.filter((item) => item.id !== job.id);
        saveState();
        renderTrackerModule();
      };

      wrap.appendChild(card);
    });

    board.appendChild(col);
  });

  // Populate Tailor Select dropdown
  const select = document.getElementById("tailorJobSelect");
  select.innerHTML = jobs
    .map((j) => `<option value="${j.id}">${escapeHtml(j.title)} @ ${escapeHtml(j.company)}</option>`)
    .join("");

  if (jobs.length > 0) {
    generateTailoredKit(jobs[0]);
  } else {
    document.getElementById("tailorOutputContainer").innerHTML =
      `<p style="color:#94a3b8;">Save a job from the Job Discovery tab or click "+ Add Opportunity" above to generate tailored assets.</p>`;
  }
}

function generateTailoredKit(job) {
  if (!job) return;
  const topBullet =
    (state.experience && state.experience[0] && state.experience[0].bullets[0]) ||
    "scaled flagship products and delivered measurable revenue growth";
  const topSkills = (state.skills || [])
    .slice(0, 3)
    .map((s) => s.name)
    .join(", ");
  const kpiHighlight =
    state.metrics && state.metrics[0] ? `${state.metrics[0].num} ${state.metrics[0].label}` : "significant ARR growth";

  const tailoredSummary = `${state.headline} with ${state.yearsExp}+ years of experience driving ${kpiHighlight}. Proven expertise in ${topSkills}, directly aligned with ${job.company}'s mission to scale ${job.title} initiatives.`;

  const outreachMsg = `Hi [Hiring Manager Name],

I've been following ${job.company}'s momentum and saw the opening for the ${job.title} role.

In my current role at ${(state.experience[0] && state.experience[0].company) || "my current company"}, I ${topBullet.charAt(0).toLowerCase() + topBullet.slice(1)}

Given ${job.company}'s focus on ${topSkills}, I put together a 1-page visual portfolio and a few concrete ideas on how I could contribute in my first 90 days. Would you be open to a quick 15-minute chat this week?

Best regards,
${state.name}`;

  const coverLetter = `Dear ${job.company} Hiring Team,

I am writing to express my strong interest in the ${job.title} position at ${job.company}. With ${state.yearsExp}+ years of experience and a track record that includes ${kpiHighlight}, I am excited by the opportunity to help ${job.company} accelerate its next phase of growth.

My career North Star is simple: ${state.mission}

Highlights from my recent experience that directly map to this role:
• ${topBullet}
• Deep hands-on proficiency across ${topSkills}.

Thank you for your time and consideration. I have also attached my 1-page Candidate Infographic alongside my full resume and look forward to speaking soon.

Sincerely,
${state.name}
${state.location}`;

  const container = document.getElementById("tailorOutputContainer");
  container.innerHTML = `
    <div class="tailor-box">
      <div class="tailor-box-header">
        <strong>1. Tailored Resume Executive Summary</strong>
        <button class="btn btn-secondary btn-sm copy-asset-btn">Copy</button>
      </div>
      <textarea readonly>${escapeHtml(tailoredSummary)}</textarea>
    </div>
    <div class="tailor-box">
      <div class="tailor-box-header">
        <strong>2. Hiring Manager Cold Outreach (LinkedIn / Email)</strong>
        <button class="btn btn-secondary btn-sm copy-asset-btn">Copy</button>
      </div>
      <textarea readonly>${escapeHtml(outreachMsg)}</textarea>
    </div>
    <div class="tailor-box">
      <div class="tailor-box-header">
        <strong>3. Tailored Cover Letter</strong>
        <button class="btn btn-secondary btn-sm copy-asset-btn">Copy</button>
      </div>
      <textarea readonly>${escapeHtml(coverLetter)}</textarea>
    </div>
  `;

  container.querySelectorAll(".copy-asset-btn").forEach((btn) => {
    btn.onclick = () => {
      const txt = btn.closest(".tailor-box").querySelector("textarea").value;
      navigator.clipboard.writeText(txt);
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = "Copy"), 1500);
    };
  });
}

// ============================================================================
// EVENT LISTENERS & INITIALIZATION
// ============================================================================
function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function showAuthError(msg) {
  const errBox = document.getElementById("authErrorBox");
  if (!errBox) return;
  if (!msg) {
    errBox.classList.add("hidden");
    errBox.textContent = "";
  } else {
    errBox.classList.remove("hidden");
    errBox.textContent = msg;
  }
}

async function hashPasswordClient(password) {
  try {
    const msgUint8 = new TextEncoder().encode("optitrajectory_salt_" + password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  } catch (e) {
    return btoa(password);
  }
}

function enterAuthenticatedApp(user, profileData) {
  currentUser = user;
  try {
    localStorage.setItem(LOCAL_SESSION_KEY, (user.email || "").toLowerCase());
  } catch (e) {}

  if (profileData && Object.keys(profileData).length > 0) {
    state = profileData;
  } else {
    state = JSON.parse(JSON.stringify(PERSONA_PRESETS.pm));
    state.name = user.fullName || state.name;
  }
  document.getElementById("authWall").classList.add("hidden");
  document.getElementById("publicViewerShell").classList.add("hidden");
  document.getElementById("appShell").classList.remove("hidden");

  syncGlobalUI();
  syncPrivacyUI();
  renderCompassModule();
  fetchLiveJobs("Product", "");
}

async function checkPublicProfileRoute() {
  const params = new URLSearchParams(window.location.search);
  let publicHandle = params.get("u");
  const encodedPayload = params.get("p");
  if (!publicHandle && window.location.pathname.startsWith("/u/")) {
    publicHandle = decodeURIComponent(window.location.pathname.slice(3));
  }
  if (!publicHandle) return false;

  document.getElementById("authWall").classList.add("hidden");
  document.getElementById("appShell").classList.add("hidden");
  const viewerShell = document.getElementById("publicViewerShell");
  const viewerContent = document.getElementById("publicViewerContent");
  viewerShell.classList.remove("hidden");

  let resolvedProfile = null;

  // 1. Try server API first
  try {
    const resp = await fetch(`/api/public/${encodeURIComponent(publicHandle)}`);
    if (resp.ok) {
      const data = await resp.json();
      if (data.ok && data.profile) {
        resolvedProfile = data.profile;
      }
    }
  } catch (err) {
    // Static mode fallback
  }

  // 2. Fallback to LocalUsersMap (if viewing on same browser) or signed ?p= payload (if shared on GitHub Pages)
  if (!resolvedProfile) {
    const usersMap = getLocalUsersMap();
    const matchEntry = Object.values(usersMap).find(
      (entry) =>
        entry.user &&
        (entry.user.username || "").toLowerCase() === publicHandle.toLowerCase() &&
        Boolean(entry.user.isPublic)
    );
    if (matchEntry && matchEntry.profile) {
      resolvedProfile = matchEntry.profile;
    } else if (encodedPayload) {
      resolvedProfile = decodePublicPayload(encodedPayload);
    }
  }

  if (!resolvedProfile) {
    viewerContent.innerHTML = `
      <div class="card" style="max-width:560px; text-align:center; padding:36px;">
        <h2 style="margin-bottom:10px;">🔒 Profile is Private</h2>
        <p style="color:#94a3b8; font-size:0.92rem; margin-bottom:20px;">
          This candidate profile is private or has not enabled public-facing visibility.
        </p>
        <a href="./" class="btn btn-primary">Go to OptiTrajectoryAI Login →</a>
      </div>
    `;
    return true;
  }

  state = resolvedProfile;
  const tempArticle = document.createElement("article");
  tempArticle.id = "infographicCanvas";
  tempArticle.className = `infographic-canvas theme-${state.infographicTheme || "executive"}`;
  viewerContent.innerHTML = "";
  viewerContent.appendChild(tempArticle);
  renderInfographicCanvasOnly();
  return true;
}

document.addEventListener("DOMContentLoaded", async () => {
  // 1. Check if someone is visiting a public link (?u=handle or /u/handle)
  const isPublicView = await checkPublicProfileRoute();
  if (isPublicView) return;

  // 2. Auth Wall Tab Switching & Form Handlers
  const tabLoginBtn = document.getElementById("tabLoginBtn");
  const tabRegisterBtn = document.getElementById("tabRegisterBtn");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  tabLoginBtn.onclick = () => {
    tabLoginBtn.classList.add("active");
    tabRegisterBtn.classList.remove("active");
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    showAuthError("");
  };

  tabRegisterBtn.onclick = () => {
    tabRegisterBtn.classList.add("active");
    tabLoginBtn.classList.remove("active");
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    showAuthError("");
  };

  loginForm.onsubmit = async (e) => {
    e.preventDefault();
    showAuthError("");
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    // Try server API first
    try {
      const resp = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      if (resp.ok || resp.status === 401) {
        const data = await resp.json();
        if (!data.ok) {
          showAuthError(data.error || "Invalid email or password.");
          return;
        }
        enterAuthenticatedApp(data.user, data.profile);
        return;
      }
    } catch (err) {
      // Static GitHub Pages fallback below
    }

    // Client-side static auth fallback (GitHub Pages)
    const usersMap = getLocalUsersMap();
    const record = usersMap[email];
    const pwHash = await hashPasswordClient(password);
    if (!record || record.passwordHash !== pwHash) {
      showAuthError("Invalid email or password. (If you haven't created an account on this browser yet, click 'Create Account').");
      return;
    }
    enterAuthenticatedApp(record.user, record.profile);
  };

  registerForm.onsubmit = async (e) => {
    e.preventDefault();
    showAuthError("");
    const fullName = document.getElementById("regName").value.trim();
    const rawUsername = document.getElementById("regUsername").value.trim();
    const email = document.getElementById("regEmail").value.trim().toLowerCase();
    const password = document.getElementById("regPassword").value;
    const starterKey = document.getElementById("regStarterTemplate").value || "pm";
    const starterProfile = JSON.parse(JSON.stringify(PERSONA_PRESETS[starterKey] || PERSONA_PRESETS.pm));
    starterProfile.name = fullName;

    // Try server API first
    try {
      const resp = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username: rawUsername,
          email,
          password,
          profile: starterProfile
        })
      });
      if (resp.ok || resp.status === 400 || resp.status === 409) {
        const data = await resp.json();
        if (!data.ok) {
          showAuthError(data.error || "Could not create account.");
          return;
        }
        enterAuthenticatedApp(data.user, data.profile);
        return;
      }
    } catch (err) {
      // Static GitHub Pages fallback below
    }

    // Client-side static registration fallback (GitHub Pages)
    const usersMap = getLocalUsersMap();
    if (usersMap[email]) {
      showAuthError("An account with that email already exists. Please Log In.");
      return;
    }
    const cleanHandle = (rawUsername || fullName || email.split("@")[0])
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 28);
    const pwHash = await hashPasswordClient(password);
    const newUser = {
      id: Date.now(),
      email,
      username: cleanHandle || "candidate",
      fullName,
      isPublic: false // Strictly private by default!
    };
    usersMap[email] = {
      user: newUser,
      passwordHash: pwHash,
      profile: starterProfile
    };
    saveLocalUsersMap(usersMap);
    enterAuthenticatedApp(newUser, starterProfile);
  };

  // Instant 1-Click Demo Account Login (Works on both Server & GitHub Pages)
  document.getElementById("quickDemoAccountBtn").onclick = async () => {
    const demoEmail = "alex.jordan@demo.careeros.app";
    const demoPass = "careeros-demo";
    try {
      let resp = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: demoEmail, password: demoPass })
      });
      if (resp.ok) {
        const data = await resp.json();
        if (data.ok) {
          enterAuthenticatedApp(data.user, data.profile);
          return;
        }
      }
      resp = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: "Alex Jordan",
          username: "alex-jordan",
          email: demoEmail,
          password: demoPass,
          profile: PERSONA_PRESETS.pm
        })
      });
      if (resp.ok) {
        const data = await resp.json();
        if (data.ok) {
          enterAuthenticatedApp(data.user, data.profile);
          return;
        }
      }
    } catch (err) {
      // Static GitHub Pages fallback
    }

    const usersMap = getLocalUsersMap();
    if (!usersMap[demoEmail]) {
      usersMap[demoEmail] = {
        user: {
          id: 1,
          email: demoEmail,
          username: "alex-jordan",
          fullName: "Alex Jordan",
          isPublic: false
        },
        passwordHash: await hashPasswordClient(demoPass),
        profile: JSON.parse(JSON.stringify(PERSONA_PRESETS.pm))
      };
      saveLocalUsersMap(usersMap);
    }
    enterAuthenticatedApp(usersMap[demoEmail].user, usersMap[demoEmail].profile);
  };

  // Log Out Button
  document.getElementById("logoutBtn").onclick = async () => {
    try {
      localStorage.removeItem(LOCAL_SESSION_KEY);
    } catch (e) {}
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (e) {}
    currentUser = null;
    document.getElementById("appShell").classList.add("hidden");
    document.getElementById("authWall").classList.remove("hidden");
  };

  // Explicit Public Opt-In Toggles (Topbar + Infographic Studio)
  const handlePublicToggle = (checked) => {
    if (!currentUser) return;
    currentUser.isPublic = checked;
    const handleInp = document.getElementById("publicHandleInput");
    const customHandle = handleInp ? handleInp.value.trim() : currentUser.username;
    syncPrivacyUI();
    saveState({ isPublic: checked, username: customHandle, immediate: true });
  };

  document.getElementById("globalPublicOptInToggle").onchange = (e) => {
    handlePublicToggle(e.target.checked);
  };

  document.getElementById("infographicPublicCheckbox").onchange = (e) => {
    handlePublicToggle(e.target.checked);
  };

  document.getElementById("publicHandleInput").onchange = (e) => {
    if (!currentUser) return;
    saveState({ username: e.target.value.trim(), immediate: true });
  };

  // Sidebar Tab Switching
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  document.getElementById("quickJumpJobsBtn").onclick = () => switchTab("jobs");

  // Persona Template Switcher
  document.getElementById("personaSelect").onchange = (e) => {
    const preset = PERSONA_PRESETS[e.target.value];
    if (preset) {
      const keepName = currentUser ? currentUser.fullName : preset.name;
      state = JSON.parse(JSON.stringify(preset));
      state.name = keepName || preset.name;
      saveState({ immediate: true });
      renderCompassModule();
      renderResumeStudio();
      renderInfographic();
      renderJobsModule();
      renderTrackerModule();
    }
  };

  // Export JSON
  document.getElementById("exportDataBtn").onclick = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `optitrajectoryai-${(state.name || "profile").toLowerCase().replace(/\s+/g, "-")}.json`;
    a.click();
  };

  // Add Skill in Compass
  document.getElementById("addSkillBtn").onclick = () => {
    const nameEl = document.getElementById("newSkillName");
    const lvlEl = document.getElementById("newSkillLevel");
    const name = nameEl.value.trim();
    if (!name) return;
    state.skills = state.skills || [];
    state.skills.push({ name, level: Number(lvlEl.value), demand: 90 });
    nameEl.value = "";
    saveState();
    renderSkillsMatrix();
  };

  // Resume Studio Actions
  document.getElementById("addRoleBtn").onclick = () => {
    state.experience = state.experience || [];
    state.experience.unshift({
      role: "New Role Title",
      company: "Company Name",
      period: "2024 – Present",
      bullets: ["Delivered measurable business outcome (+25%) by launching new workflow."]
    });
    saveState();
    renderResumeStudio();
  };

  document.getElementById("runAuditBtn").onclick = () => {
    renderResumeStudio();
    const tag = document.getElementById("auditStatusTag");
    tag.textContent = "✓ Audit Updated";
  };

  document.getElementById("generateBulletBtn").onclick = () => {
    const inp = document.getElementById("bulletInput");
    generateXYZRewrites(inp.value, inp.dataset.rIdx, inp.dataset.bIdx);
  };

  // Upload or Paste Raw Resume
  document.getElementById("resumeFileUpload").onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      parseRawResumeTextIntoState(String(reader.result || ""));
    };
    reader.readAsText(file);
  };

  document.getElementById("importRawResumeBtn").onclick = () => {
    const raw = document.getElementById("rawResumePaste").value;
    if (raw.trim()) {
      parseRawResumeTextIntoState(raw);
    }
  };

  // Infographic Controls
  document.getElementById("infoThemeSelect").onchange = (e) => {
    state.infographicTheme = e.target.value;
    saveState();
    renderInfographicCanvasOnly();
  };

  document.getElementById("infoTaglineInput").oninput = (e) => {
    state.infographicTagline = e.target.value;
    saveState();
    renderInfographicCanvasOnly();
  };

  document.getElementById("editMetricsBtn").onclick = () => {
    document.getElementById("metricsEditorCard").classList.toggle("hidden");
  };

  document.getElementById("printInfographicBtn").onclick = () => {
    window.print();
  };

  // Job Search & Analyzer Controls
  document.getElementById("searchLiveJobsBtn").onclick = () => {
    const q = document.getElementById("jobSearchInput").value.trim();
    const cat = document.getElementById("jobCategorySelect").value;
    fetchLiveJobs(q, cat);
  };

  document.getElementById("fetchJobUrlBtn").onclick = async () => {
    const url = document.getElementById("pasteJobUrlInput").value.trim();
    if (!url) return;
    const btn = document.getElementById("fetchJobUrlBtn");
    btn.textContent = "Fetching...";
    try {
      const resp = await fetch(`/api/extract-url?url=${encodeURIComponent(url)}`);
      const res = await resp.json();
      if (res.ok && res.data) {
        if (res.data.title) document.getElementById("anJobTitle").value = res.data.title.slice(0, 90);
        document.getElementById("anJobDesc").value = res.data.text;
        runDeepJdAnalysis(
          document.getElementById("anJobTitle").value,
          document.getElementById("anJobCompany").value,
          res.data.text
        );
      } else {
        alert(res.error || "Could not fetch URL directly. Paste the job description text below.");
      }
    } catch (e) {
      alert("Could not fetch URL directly. Paste the job description text below.");
    } finally {
      btn.textContent = "Fetch URL";
    }
  };

  document.getElementById("analyzeJdBtn").onclick = () => {
    runDeepJdAnalysis(
      document.getElementById("anJobTitle").value,
      document.getElementById("anJobCompany").value,
      document.getElementById("anJobDesc").value
    );
  };

  document.getElementById("saveAnalyzedJobBtn").onclick = () => {
    const title = document.getElementById("anJobTitle").value.trim() || "Analyzed Opportunity";
    const company = document.getElementById("anJobCompany").value.trim() || "Target Company";
    const desc = document.getElementById("anJobDesc").value.trim();
    const match = scoreJobAgainstProfile({ title, company, description: desc, tags: [] });
    addJobToCRM({
      title,
      company,
      location: state.workStyle || "Remote",
      salary: "$" + Math.round((Number(state.minSalary) || 175000) / 1000) + "k+ Target",
      matchScore: match.score,
      stage: "Saved",
      url: document.getElementById("pasteJobUrlInput").value.trim(),
      description: desc
    });
    switchTab("tracker");
  };

  // CRM Custom Opportunity & Tailoring
  document.getElementById("addCustomJobModalBtn").onclick = () => {
    const title = prompt("Role Title:", "Staff Product Manager");
    if (!title) return;
    const company = prompt("Company Name:", "Acme AI") || "Target Company";
    addJobToCRM({
      title,
      company,
      location: state.workStyle || "Remote",
      salary: "$185,000+",
      matchScore: 90,
      stage: "Saved",
      url: "",
      description: `${title} at ${company}`
    });
    renderTrackerModule();
  };

  document.getElementById("generateTailoredAssetsBtn").onclick = () => {
    const id = document.getElementById("tailorJobSelect").value;
    const job = (state.savedJobs || []).find((j) => j.id === id);
    if (job) generateTailoredKit(job);
  };

  // 3. Check if already logged in via session cookie or static browser session
  try {
    const meResp = await fetch("/api/auth/me");
    if (meResp.ok) {
      const meData = await meResp.json();
      if (meData.ok && meData.authenticated) {
        enterAuthenticatedApp(meData.user, meData.profile);
        return;
      }
    }
  } catch (e) {
    // Static mode fallback
  }

  try {
    const savedEmail = localStorage.getItem(LOCAL_SESSION_KEY);
    if (savedEmail) {
      const usersMap = getLocalUsersMap();
      if (usersMap[savedEmail]) {
        enterAuthenticatedApp(usersMap[savedEmail].user, usersMap[savedEmail].profile);
        return;
      }
    }
  } catch (e) {}
});

function parseRawResumeTextIntoState(rawText) {
  const lines = rawText
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length === 0) return;

  // Extract bullet-like lines
  const bullets = lines
    .filter((l) => /^[•\-*]/.test(l) || (l.length > 45 && /\b(led|built|managed|developed|launched|increased|reduced|created|designed|responsible|helped)\b/i.test(l)))
    .map((l) => l.replace(/^[•\-*]\s*/, ""))
    .slice(0, 10);

  if (bullets.length > 0) {
    state.experience = [
      {
        role: state.headline || "Imported Experience",
        company: "Imported Resume History",
        period: "Recent",
        bullets
      },
      ...(state.experience || []).slice(0, 2)
    ];
  }
  state.summary = lines.slice(0, 3).join(" ").slice(0, 360);
  saveState();
  renderResumeStudio();
}
