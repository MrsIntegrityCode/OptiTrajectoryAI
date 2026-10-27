/**
 * OptiTrajectoryAI — Optimize Your Career Trajectory
 * Connects Career Compass -> Resume Studio -> Candidate Infographic -> Live Job Discovery & Analyzer -> Application CRM
 */

const STORAGE_KEY = "careeros_state_v1";

const PERSONA_PRESETS = {
  pm: {
    name: "Alex Jordan",
    headline: "Senior Operations & Strategic Programs Director",
    location: "Chicago, IL (Hybrid / Remote)",
    yearsExp: 9,
    careerField: "Business, Operations & Strategy",
    mission: "Drive operational excellence, cross-departmental alignment, and measurable service quality improvements across growing organizations.",
    targetRoles: "Director of Operations, Senior Program Manager, Business Operations Lead, Chief of Staff",
    industries: "Business Operations, Healthcare Administration, Corporate Strategy, Financial Services",
    minSalary: 125000,
    workStyle: "On-site / Hybrid",
    educationText: "B.A. in Business Administration & Operations Management | PMP & Lean Six Sigma Certified",
    horizons: {
      h1: "Step into a Director of Operations or Senior Program Manager role and deliver measurable 90-day process and budget improvements.",
      h2: "Lead multi-department operations, P&L budgeting, and strategic planning across regional or national teams.",
      h3: "VP of Operations or Chief Operating Officer (COO)."
    },
    priorities: [
      { id: "comp", label: "Compensation & Benefits", weight: 90 },
      { id: "autonomy", label: "Leadership Scope & Impact", weight: 95 },
      { id: "remote", label: "Work-Life & Schedule Flexibility", weight: 85 },
      { id: "culture", label: "Mission & Organizational Culture", weight: 92 }
    ],
    skills: [
      { name: "Strategic Planning & Operations Management", level: 95, demand: 95 },
      { name: "Budgeting, P&L & Resource Allocation", level: 90, demand: 92 },
      { name: "Cross-Functional Team Leadership", level: 94, demand: 94 },
      { name: "Process Improvement & Change Management", level: 88, demand: 90 },
      { name: "Stakeholder & Client Relationship Management", level: 92, demand: 91 },
      { name: "KPI Reporting & Performance Analytics", level: 84, demand: 88 }
    ],
    summary: "Operations and Strategic Programs leader with 9+ years optimizing multi-site business operations, managing $18M+ departmental budgets, and leading cross-functional teams of 45+ staff to deliver measurable quality and efficiency gains.",
    metrics: [
      { num: "$18M+", label: "Annual Budget & P&L Managed" },
      { num: "9+ Yrs", label: "Operations & Team Leadership" },
      { num: "32%", label: "Process Efficiency Improvement" },
      { num: "96%", label: "Client & Stakeholder Satisfaction" }
    ],
    experience: [
      {
        role: "Senior Operations & Program Manager",
        company: "Meridian Enterprise Group",
        period: "2022 – Present",
        bullets: [
          "Spearheaded regional operational transformation across 6 business units, improving service delivery speed by 32% and saving $1.8M annually.",
          "Directed a cross-functional team of 45+ staff and managed an $18M operating budget with 99.4% compliance accuracy.",
          "Responsible for managing weekly department meetings and helping staff with scheduling workflows."
        ]
      },
      {
        role: "Operations & Client Services Manager",
        company: "Vanguard Health & Advisory Partners",
        period: "2019 – 2022",
        bullets: [
          "Redesigned client onboarding and quality assurance protocols across 120+ accounts, lifting client retention from 84% to 96%.",
          "Implemented standardized KPI dashboards and staff training programs, reducing new-hire ramp time by 35%.",
          "Helped senior leadership prepare quarterly board presentations and vendor contracts."
        ]
      },
      {
        role: "Project & Operations Coordinator",
        company: "Apex Regional Services",
        period: "2016 – 2019",
        bullets: [
          "Coordinated scheduling, vendor procurement, and compliance audits for 30+ concurrent organizational initiatives.",
          "Reduced supply and vendor overhead costs by 18% ($340K/yr) through consolidated contract negotiations."
        ]
      }
    ],
    infographicTheme: "deloitte",
    infographicTagline: "Open to Operations & Program Leadership Roles",
    savedJobs: [
      {
        id: "crm-1",
        title: "Director of Business Operations",
        company: "Deloitte / Enterprise Advisory",
        location: "Chicago, IL (Hybrid)",
        salary: "$135,000 - $165,000",
        matchScore: 95,
        stage: "Interviewing",
        url: "https://www.linkedin.com/jobs",
        description: "Lead strategic operations, P&L budget management, cross-functional team leadership, process improvement, and executive KPI reporting."
      },
      {
        id: "crm-2",
        title: "Senior Program Manager — Healthcare Operations",
        company: "Northwestern Regional Health",
        location: "Hybrid / On-site",
        salary: "$120,000 - $145,000",
        matchScore: 91,
        stage: "Applied",
        url: "https://www.indeed.com",
        description: "Oversee clinical and administrative program operations, stakeholder alignment, regulatory compliance, and service quality initiatives."
      },
      {
        id: "crm-3",
        title: "VP of Operations & Client Experience",
        company: "Summit Financial & Consulting",
        location: "Remote / Hybrid",
        salary: "$145,000 - $175,000",
        matchScore: 88,
        stage: "Saved",
        url: "https://www.linkedin.com/jobs",
        description: "Drive end-to-end operational strategy, client retention, vendor management, and organizational scaling."
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

// Multi-Industry Curated Real Jobs across Healthcare, Business/Ops, Finance, HR, Education, Sales, Marketing & Tech
const CURATED_REAL_JOBS = [
  {
    id: "curated-ops-1",
    title: "Director of Operations & Strategic Initiatives",
    company: "Deloitte / Enterprise Advisory Services",
    location: "Hybrid / Remote (US)",
    salary: "$135,000 - $165,000",
    type: "Full Time",
    category: "Business, Operations & Mgmt",
    url: "https://www.linkedin.com/jobs/search/?keywords=Director+of+Operations",
    publishedAt: "2026-10-26",
    tags: ["Operations Management", "Strategic Planning", "P&L Budget", "Process Improvement", "Leadership"],
    description: "Lead multi-department operations, P&L budget forecasting, workflow transformation, vendor management, and executive KPI reporting across regional teams.",
    source: "Verified Direct Board"
  },
  {
    id: "curated-hc-1",
    title: "Clinical Nurse Manager / Director of Patient Care (RN, BSN)",
    company: "Mayo Clinic / Regional Health Network",
    location: "On-site / Hybrid",
    salary: "$115,000 - $142,000",
    type: "Full Time",
    category: "Healthcare, Nursing & Medical",
    url: "https://www.indeed.com/jobs?q=Clinical+Nurse+Manager",
    publishedAt: "2026-10-26",
    tags: ["Patient Care", "Clinical Leadership", "RN / BSN", "Healthcare Compliance", "Care Coordination", "JCAHO"],
    description: "Oversee clinical nursing operations, patient safety protocols, interdisciplinary care teams, regulatory compliance (HIPAA/JCAHO), and staff mentoring across a 40-bed unit.",
    source: "Verified Healthcare Board"
  },
  {
    id: "curated-fin-1",
    title: "Senior Financial Analyst & FP&A Manager",
    company: "JPMorgan Chase / Corporate Finance",
    location: "Hybrid / Remote",
    salary: "$118,000 - $145,000",
    type: "Full Time",
    category: "Finance, Accounting & Legal",
    url: "https://www.linkedin.com/jobs/search/?keywords=Senior+Financial+Analyst",
    publishedAt: "2026-10-25",
    tags: ["Financial Modeling", "FP&A", "Budgeting & Forecasting", "GAAP Accounting", "Executive Reporting"],
    description: "Partner with business unit leaders to own annual budgeting, quarterly forecasting, variance analysis, financial modeling, and board-level P&L reporting.",
    source: "Verified Direct Board"
  },
  {
    id: "curated-edu-1",
    title: "Curriculum Director & Instructional Leadership Specialist",
    company: "National Education & Learning Partners",
    location: "Hybrid / Remote",
    salary: "$92,000 - $118,000",
    type: "Full Time",
    category: "Education, Teaching & Training",
    url: "https://www.indeed.com/jobs?q=Curriculum+Director+Education",
    publishedAt: "2026-10-25",
    tags: ["Curriculum Development", "Instructional Design", "Educator Coaching", "Student Outcomes", "Assessment"],
    description: "Lead K-12 / Adult learning curriculum design, teacher professional development, instructional coaching, and measurable student achievement programs.",
    source: "Verified Education Board"
  },
  {
    id: "curated-hr-1",
    title: "Senior Human Resources Business Partner (HRBP)",
    company: "Microsoft / Global People Operations",
    location: "Hybrid / Remote",
    salary: "$125,000 - $155,000",
    type: "Full Time",
    category: "Human Resources & Recruiting",
    url: "https://www.linkedin.com/jobs/search/?keywords=Senior+HR+Business+Partner",
    publishedAt: "2026-10-26",
    tags: ["Talent Management", "Employee Relations", "Organizational Development", "SHRM / PHR", "Workforce Planning"],
    description: "Serve as strategic HR advisor to senior leadership on talent retention, organizational design, performance management, compensation planning, and employee engagement.",
    source: "Verified Direct Board"
  },
  {
    id: "curated-sales-1",
    title: "Regional Director of Sales & Strategic Accounts",
    company: "Salesforce / Enterprise Commercial",
    location: "Remote / Hybrid",
    salary: "$140,000 - $195,000 (Base + OTE)",
    type: "Full Time",
    category: "Sales & Client Success",
    url: "https://www.linkedin.com/jobs/search/?keywords=Director+of+Sales",
    publishedAt: "2026-10-25",
    tags: ["Consultative Sales", "Account Management", "Revenue Growth", "Client Retention", "Contract Negotiation"],
    description: "Drive new business acquisition and executive client relationships across key regional accounts, leading a team of account executives to exceed annual revenue targets.",
    source: "Verified Direct Board"
  },
  {
    id: "curated-mkt-1",
    title: "Director of Brand Strategy & Integrated Marketing",
    company: "Ogilvy / Global Brand Partners",
    location: "Hybrid / Remote",
    salary: "$130,000 - $160,000",
    type: "Full Time",
    category: "Marketing, Brand & Media",
    url: "https://www.linkedin.com/jobs/search/?keywords=Director+of+Marketing",
    publishedAt: "2026-10-24",
    tags: ["Brand Strategy", "Integrated Campaigns", "Public Relations", "Audience Growth", "Creative Direction"],
    description: "Lead multi-channel brand campaigns, public relations, storytelling, and customer acquisition strategies across national and global markets.",
    source: "Verified Direct Board"
  },
  {
    id: "curated-sc-1",
    title: "Supply Chain & Logistics Operations Manager",
    company: "Procter & Gamble / Global Supply Network",
    location: "On-site / Hybrid",
    salary: "$110,000 - $138,000",
    type: "Full Time",
    category: "Supply Chain & Manufacturing",
    url: "https://www.indeed.com/jobs?q=Supply+Chain+Operations+Manager",
    publishedAt: "2026-10-24",
    tags: ["Supply Chain", "Inventory Optimization", "Vendor Procurement", "Lean Six Sigma", "Logistics"],
    description: "Optimize end-to-end supply chain logistics, warehouse distribution, supplier negotiations, and Lean Six Sigma quality initiatives.",
    source: "Verified Direct Board"
  },
  {
    id: "curated-tech-1",
    title: "Senior Product & Digital Transformation Manager",
    company: "ServiceNow / Enterprise Solutions",
    location: "Remote (US)",
    salary: "$160,000 - $195,000",
    type: "Full Time",
    category: "Technology, IT & Engineering",
    url: "https://remotive.com/remote-jobs/product",
    publishedAt: "2026-10-26",
    tags: ["Product Strategy", "Digital Transformation", "Cross-Functional Leadership", "Roadmapping", "Analytics"],
    description: "Lead enterprise digital workflow initiatives, partnering with business stakeholders and engineering teams to deliver high-impact solutions.",
    source: "Verified Direct Board"
  }
];

const STRONG_VERBS = [
  "spearheaded", "architected", "scaled", "launched", "accelerated",
  "engineered", "generated", "reduced", "cut", "owned", "built",
  "drove", "orchestrated", "pioneered", "transformed", "delivered",
  "directed", "managed", "implemented", "redesigned", "elevated",
  "streamlined", "negotiated", "mentored", "cultivated", "administered",
  "established", "expanded", "strengthened", "optimized", "coordinated"
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
      infographicTagline: profileObj.infographicTagline,
      headshotDataUrl: profileObj.headshotDataUrl || ""
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
  journey: {
    title: "✨ Guided Career Coach Walkthrough",
    desc: "Step-by-step assistant: tell us your career goals and paste your resume—we handle all the complex calibration in the background."
  },
  compass: {
    title: "🧭 1. Career Goals & Ideal Positions",
    desc: "Your core target roles and goals. Detailed trajectory and skill calibrations are managed automatically in the background."
  },
  resume: {
    title: "📄 2. Resume Evaluation & 1-Click Optimizer",
    desc: "Instant scoring and 1-click Google XYZ bullet upgrades."
  },
  ats: {
    title: "📑 3. ATS-Formatted Resume & Cover Letter",
    desc: "Clean, single-column machine-parseable Resume & Cover Letter ready to download as PDF, Word (.doc), or Plain Text."
  },
  infographic: {
    title: "🎨 4. Candidate Infographic (1-Page Visual Bio)",
    desc: "Auto-generated executive visual portfolio ready to print to PDF or share via opt-in link."
  },
  jobs: {
    title: "🔍 5. Find Real Jobs & Match Analyzer",
    desc: "Live job postings pre-filtered for your ideal positions + instant URL/JD match breakdown."
  },
  tracker: {
    title: "📋 6. Saved Applications & Tailored Pitches",
    desc: "Track opportunities and generate tailored cover letters and outreach notes."
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
  if (tabId === "journey") renderGuidedWizard();
  if (tabId === "compass") renderCompassModule();
  if (tabId === "resume") renderResumeStudio();
  if (tabId === "ats") renderAtsBuilder();
  if (tabId === "infographic") renderInfographic();
  if (tabId === "jobs") renderJobsModule();
  if (tabId === "tracker") renderTrackerModule();
}

function detectIndustryThemeFromProfile(industriesStr, rolesStr, careerFieldStr = "") {
  const combined = `${careerFieldStr || ""} ${industriesStr || ""} ${rolesStr || ""}`.toLowerCase();
  if (/(health|medical|clinical|nurse|nursing|pharma|biotech|hospital|patient|physician|therap|educat|teach|school|academic|curriculum|nonprofit|social work)/.test(combined)) {
    return "healthcare";
  }
  if (/(marketing|design|brand|creative|editorial|media|agency|art|luxury|communications|public relations|hospitality|retail|event|real estate)/.test(combined)) {
    return "creative";
  }
  if (/(tech|software|ai|ml|saas|cloud|data|engineer|developer|it\b|cyber|microsoft|information technology|systems)/.test(combined)) {
    return "microsoft";
  }
  if (/(consult|advisory|deloitte|mckinsey|bain|bcg|pwc|ey|kpmg|finance|accounting|cpa|audit|tax|banking|pe|strategy|operations|supply chain|logistics|procurement|hr|human resources|recruiting|legal|compliance|government|administration|management|sales|account)/.test(combined)) {
    return "deloitte";
  }
  return "deloitte";
}

function getCareerFieldTemplateData(careerFieldStr, rolesStr, industriesStr) {
  const combined = `${careerFieldStr || ""} ${rolesStr || ""} ${industriesStr || ""}`.toLowerCase();
  const primaryRole = ((rolesStr || "").split(",")[0] || "").trim();

  if (/(health|medical|clinical|nurse|nursing|hospital|patient|therap|pharma)/.test(combined)) {
    const role = primaryRole || "Clinical Nurse Manager (RN, BSN)";
    return {
      skills: [
        { name: "Patient Care & Clinical Excellence", level: 95, demand: 96 },
        { name: "Interdisciplinary Care Coordination", level: 92, demand: 92 },
        { name: "HIPAA, JCAHO & Regulatory Compliance", level: 90, demand: 94 },
        { name: "Clinical Staff Supervision & Mentoring", level: 88, demand: 90 },
        { name: "EHR / Epic Documentation & Triage", level: 86, demand: 88 },
        { name: "Quality Assurance & Patient Safety", level: 91, demand: 93 }
      ],
      education: "B.S. in Nursing (BSN) / Healthcare Administration | Active RN License, BLS/ACLS Certified",
      summary: `${role} with 8+ years of clinical and operational experience delivering high-acuity patient care, leading interdisciplinary medical teams, and achieving 98%+ patient satisfaction and regulatory compliance scores.`,
      sampleExperience: [
        {
          role: role,
          company: "Regional Medical Center & Health System",
          period: "2022 – Present",
          bullets: [
            "Directed daily clinical operations and patient care standards across a 36-bed unit, improving patient satisfaction (HCAHPS) scores by 24% and maintaining 100% JCAHO compliance.",
            "Supervised, scheduled, and mentored 40+ registered nurses and clinical support staff, reducing staff turnover by 30% over 18 months.",
            "Responsible for updating patient care charts and helping clinical staff during shift handoffs."
          ]
        },
        {
          role: "Senior Registered Nurse & Charge Nurse",
          company: "St. Luke's Community Hospital",
          period: "2018 – 2022",
          bullets: [
            "Coordinated rapid triage and multidisciplinary care plans for 25+ patients per shift, cutting average discharge turnaround time by 19%.",
            "Led unit-wide medication safety and infection-control audit initiative that reduced preventable clinical incidents by 35%."
          ]
        }
      ]
    };
  }

  if (/(educat|teach|school|curriculum|academic|instructor|professor|principal|training)/.test(combined)) {
    const role = primaryRole || "Lead Educator & Curriculum Specialist";
    return {
      skills: [
        { name: "Curriculum Design & Instructional Strategy", level: 95, demand: 95 },
        { name: "Classroom Management & Student Engagement", level: 94, demand: 92 },
        { name: "Differentiated Instruction & IEP Support", level: 90, demand: 91 },
        { name: "Assessment Data & Learning Outcomes", level: 88, demand: 89 },
        { name: "Educator Coaching & Professional Development", level: 86, demand: 88 },
        { name: "Parent, Community & Stakeholder Relations", level: 92, demand: 90 }
      ],
      education: "M.Ed. in Curriculum & Instruction | B.A. in Education | State Teaching & Instructional Leadership License",
      summary: `Dedicated ${role} with 8+ years designing standards-aligned curriculum, coaching educators, and fostering inclusive learning environments that raise student proficiency and engagement.`,
      sampleExperience: [
        {
          role: role,
          company: "Oakridge Public Schools / Learning Academy",
          period: "2021 – Present",
          bullets: [
            "Designed and implemented differentiated literacy and STEM curriculum across 12 classrooms, increasing student standardized proficiency scores by 22% within one academic year.",
            "Mentored 15+ faculty members on instructional best practices and classroom technology integration, achieving 96% educator adoption.",
            "Responsible for grading student assignments and organizing parent-teacher conferences."
          ]
        },
        {
          role: "Classroom Teacher & Grade-Level Lead",
          company: "Westside Elementary & Middle School",
          period: "2017 – 2021",
          bullets: [
            "Led individualized learning plans (IEPs/504s) and small-group interventions for 110+ students, improving reading and math growth targets by 28%.",
            "Spearheaded after-school enrichment and family engagement programs attended by 350+ students and parents."
          ]
        }
      ]
    };
  }

  if (/(finance|account|cpa|audit|tax|banking|treasury|fp&a|controller|bookkeep)/.test(combined)) {
    const role = primaryRole || "Senior Financial Analyst & Accounting Manager";
    return {
      skills: [
        { name: "Financial Modeling, FP&A & Forecasting", level: 95, demand: 95 },
        { name: "GAAP Accounting, Month-End Close & Audit", level: 92, demand: 94 },
        { name: "Budgeting, Variance & P&L Analysis", level: 94, demand: 92 },
        { name: "Executive Financial Reporting & Dashboards", level: 89, demand: 90 },
        { name: "ERP Systems (NetSuite / SAP / Advanced Excel)", level: 88, demand: 91 },
        { name: "Internal Controls & Regulatory Compliance", level: 86, demand: 88 }
      ],
      education: "B.S. in Finance & Accounting | Certified Public Accountant (CPA) / MBA",
      summary: `Results-driven ${role} with 8+ years managing $45M+ budgets, leading GAAP month-end close cycles, and delivering executive FP&A insights that protect margins and guide strategic capital allocation.`,
      sampleExperience: [
        {
          role: role,
          company: "Crestview Financial & Corporate Holdings",
          period: "2021 – Present",
          bullets: [
            "Directed annual budgeting and quarterly FP&A forecasting for a $48M business unit, improving forecast accuracy to 98.2% and identifying $1.4M in annual cost savings.",
            "Streamlined GAAP month-end close procedures across 5 entities, reducing close cycle time by 35% (from 10 days to 6.5 days) with zero audit adjustments.",
            "Responsible for preparing monthly expense reports and assisting department heads with budget tracking."
          ]
        },
        {
          role: "Financial Analyst / Staff Accountant",
          company: "Apex Advisory & Accounting LLP",
          period: "2018 – 2021",
          bullets: [
            "Built automated multi-year cash flow and margin analysis models in Excel and ERP systems for 25+ commercial accounts.",
            "Led external audit preparation and internal SOX compliance reviews with 100% on-time regulatory filing."
          ]
        }
      ]
    };
  }

  if (/(hr\b|human resources|recruit|talent|people ops|payroll|benefits|onboarding|shrm)/.test(combined)) {
    const role = primaryRole || "Senior Human Resources Manager / HRBP";
    return {
      skills: [
        { name: "Talent Acquisition & Workforce Planning", level: 94, demand: 94 },
        { name: "Employee Relations & Performance Management", level: 95, demand: 95 },
        { name: "Compensation, Benefits & HRIS Administration", level: 89, demand: 90 },
        { name: "Organizational Development & Culture", level: 92, demand: 91 },
        { name: "Employment Law, FMLA/EEO & Compliance", level: 90, demand: 92 },
        { name: "Onboarding, Training & Retention Strategy", level: 91, demand: 90 }
      ],
      education: "B.A. in Human Resource Management | SHRM-SCP / PHR Certified",
      summary: `Strategic ${role} with 8+ years partnering with executive leadership to scale high-performing teams, reduce employee turnover, and administer compliant HR operations across 500+ person organizations.`,
      sampleExperience: [
        {
          role: role,
          company: "Horizon National Enterprises",
          period: "2021 – Present",
          bullets: [
            "Partnered with leadership across 400+ employees on workforce planning, performance management, and employee engagement, reducing voluntary turnover by 27% YoY.",
            "Redesigned end-to-end talent acquisition and onboarding workflows in Workday HRIS, cutting average time-to-hire by 31% across 85+ open roles.",
            "Assisted managers with employee relations questions and annual benefits open enrollment."
          ]
        },
        {
          role: "HR Generalist & Talent Specialist",
          company: "Summit Operations Group",
          period: "2018 – 2021",
          bullets: [
            "Administered multi-state payroll, benefits, FMLA/ADA compliance, and handbook policies for 220+ staff with 100% audit compliance.",
            "Launched manager leadership training series that improved internal promotion readiness by 34%."
          ]
        }
      ]
    };
  }

  if (/(sales|account executive|client success|customer success|business development|retail|hospitality|real estate)/.test(combined)) {
    const role = primaryRole || "Senior Account Executive & Client Success Director";
    return {
      skills: [
        { name: "Consultative Sales & New Business Development", level: 95, demand: 95 },
        { name: "Strategic Account Management & Retention", level: 94, demand: 94 },
        { name: "Contract Negotiation & Executive Closing", level: 91, demand: 92 },
        { name: "Pipeline Forecasting & CRM Management", level: 89, demand: 90 },
        { name: "Client Onboarding & Relationship Expansion", level: 92, demand: 91 },
        { name: "Territory Strategy & Cross-Selling", level: 88, demand: 89 }
      ],
      education: "B.S. in Business & Communications | Certified Strategic Account & Sales Leader",
      summary: `High-performing ${role} with 8+ years exceeding revenue quotas, managing $12M+ client portfolios, and cultivating long-term executive partnerships with 96%+ client retention.`,
      sampleExperience: [
        {
          role: role,
          company: "Pinnacle Commercial Solutions",
          period: "2021 – Present",
          bullets: [
            "Generated $4.8M in net-new annual revenue (128% of quota) by expanding strategic client relationships and closing multi-year enterprise contracts.",
            "Managed a portfolio of 65+ key accounts with a 96% renewal rate and 32% year-over-year account expansion.",
            "Helped prepare client proposals and updated CRM pipeline records for weekly sales meetings."
          ]
        },
        {
          role: "Account Manager & Client Success Lead",
          company: "Atlas Business Partners",
          period: "2018 – 2021",
          bullets: [
            "Onboarded and supported 90+ commercial clients, increasing customer satisfaction (CSAT) scores from 82% to 95%.",
            "Spearheaded referral and upsell initiatives that added $1.6M in incremental territory revenue."
          ]
        }
      ]
    };
  }

  if (/(marketing|brand|communications|public relations|media|creative|design|copywrit|event)/.test(combined)) {
    const role = primaryRole || "Marketing & Brand Communications Director";
    return {
      skills: [
        { name: "Integrated Marketing & Brand Strategy", level: 95, demand: 95 },
        { name: "Multi-Channel Campaigns & Lead Generation", level: 92, demand: 93 },
        { name: "Content Strategy, PR & Executive Storytelling", level: 94, demand: 91 },
        { name: "Audience Analytics & ROI Attribution", level: 88, demand: 90 },
        { name: "Creative Direction & Agency Management", level: 90, demand: 89 },
        { name: "Events, Community & Go-To-Market Launches", level: 89, demand: 88 }
      ],
      education: "B.A. in Marketing, Communications & Journalism | Digital & Brand Strategy Certified",
      summary: `Creative and analytical ${role} with 8+ years leading multi-channel brand campaigns, public relations, and audience growth initiatives that drive measurable revenue and market visibility.`,
      sampleExperience: [
        {
          role: role,
          company: "Luminary Brand & Media Group",
          period: "2021 – Present",
          bullets: [
            "Directed integrated brand and digital campaigns across 6 channels, growing qualified customer inquiries by 145% and improving marketing ROI by 2.4x.",
            "Led a creative and communications team of 8 specialists, launching 14 flagship product and community campaigns on time and under budget.",
            "Managed social media calendars and wrote press releases for company announcements."
          ]
        },
        {
          role: "Senior Marketing & Communications Specialist",
          company: "Veritas Consumer & Corporate Brands",
          period: "2018 – 2021",
          bullets: [
            "Orchestrated national PR, email lifecycle, and event marketing programs reaching 250,000+ customers and increasing brand engagement by 38%.",
            "Redesigned customer journey messaging and collateral, lifting campaign conversion rates by 26%."
          ]
        }
      ]
    };
  }

  if (/(supply chain|logistics|manufacturing|warehouse|procurement|engineering|construction|facilities|skilled trade|plant)/.test(combined)) {
    const role = primaryRole || "Supply Chain & Facilities Operations Manager";
    return {
      skills: [
        { name: "Supply Chain, Logistics & Inventory Control", level: 95, demand: 95 },
        { name: "Vendor Procurement & Contract Negotiation", level: 92, demand: 93 },
        { name: "Lean Six Sigma & Continuous Improvement", level: 90, demand: 92 },
        { name: "OSHA Safety, Quality & Regulatory Compliance", level: 94, demand: 94 },
        { name: "Production Scheduling & Fleet/Plant Operations", level: 89, demand: 90 },
        { name: "Capital Budgeting & Cost Reduction", level: 88, demand: 89 }
      ],
      education: "B.S. in Supply Chain / Industrial Engineering | Lean Six Sigma Green Belt, OSHA-30 & APICS Certified",
      summary: `Hands-on ${role} with 9+ years optimizing end-to-end supply chain logistics, plant/facility operations, and vendor procurement while maintaining 100% safety compliance and reducing operating costs.`,
      sampleExperience: [
        {
          role: role,
          company: "Continental Logistics & Manufacturing Corp",
          period: "2021 – Present",
          bullets: [
            "Directed warehouse, fleet, and supply chain operations across 3 regional facilities (65+ staff), increasing on-time order fulfillment from 86% to 98.7%.",
            "Negotiated supplier and freight contracts totaling $14M, reducing unit material and shipping costs by 19% ($1.6M annual savings).",
            "Responsible for tracking inventory levels and overseeing daily facility safety checks."
          ]
        },
        {
          role: "Operations & Procurement Supervisor",
          company: "Midwest Industrial Supply",
          period: "2017 – 2021",
          bullets: [
            "Implemented Lean 5S workflow and preventive maintenance schedules, cutting equipment downtime by 34% and achieving 1,200+ injury-free workdays.",
            "Reduced inventory carrying costs by 22% through automated demand forecasting and cycle counting."
          ]
        }
      ]
    };
  }

  // Default: Universal Business, Operations, Consulting, Legal/Public Service, or Tech
  const role = primaryRole || "Senior Operations & Program Manager";
  return {
    skills: [
      { name: "Strategic Planning & Operations Management", level: 95, demand: 95 },
      { name: "Project & Program Execution", level: 93, demand: 94 },
      { name: "Budgeting, P&L & Resource Allocation", level: 90, demand: 92 },
      { name: "Cross-Functional Team Leadership", level: 94, demand: 93 },
      { name: "Process Improvement & Change Management", level: 89, demand: 90 },
      { name: "Stakeholder & Client Relationship Management", level: 92, demand: 91 }
    ],
    education: "Bachelor's Degree in Business Administration / Management | PMP & Executive Leadership Certified",
    summary: `Accomplished ${role} with 8+ years leading strategic programs, optimizing organizational workflows, managing multi-million-dollar budgets, and aligning cross-functional teams to deliver measurable results.`,
    sampleExperience: PERSONA_PRESETS.pm.experience
  };
}

function processAndStoreHeadshotFile(file, onDone) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const size = 260;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      // Center-crop square
      const minDim = Math.min(img.width, img.height);
      const sx = (img.width - minDim) / 2;
      const sy = (img.height - minDim) / 2;
      ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, size, size);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.84);
      state.headshotDataUrl = dataUrl;
      saveState({ immediate: true });
      updateHeadshotPreviews();
      if (onDone) onDone(dataUrl);
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

function updateHeadshotPreviews() {
  const wizPrev = document.getElementById("wizHeadshotPreview");
  const clearBtn = document.getElementById("wizClearHeadshotBtn");
  const sidebarAv = document.getElementById("sidebarAvatar");

  if (state.headshotDataUrl) {
    if (wizPrev) wizPrev.innerHTML = `<img src="${state.headshotDataUrl}" alt="Candidate Headshot" />`;
    if (clearBtn) clearBtn.classList.remove("hidden");
    if (sidebarAv) {
      sidebarAv.innerHTML = `<img src="${state.headshotDataUrl}" alt="Avatar" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />`;
    }
  } else {
    if (wizPrev) wizPrev.textContent = "📸";
    if (clearBtn) clearBtn.classList.add("hidden");
    if (sidebarAv) sidebarAv.textContent = getInitials(state.name);
  }
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
  updateHeadshotPreviews();
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
// MODULE 0: GUIDED CAREER COACH WALKTHROUGH WIZARD
// ============================================================================
function setWizardStep(stepNum) {
  [1, 2, 3].forEach((n) => {
    const btn = document.getElementById(`wizStepBtn${n}`);
    const pane = document.getElementById(`wizPane${n}`);
    if (btn) btn.classList.toggle("active", n === stepNum);
    if (pane) pane.classList.toggle("hidden", n !== stepNum);
  });
  if (stepNum === 3) {
    const audit = evaluateResumeState();
    const scoreEl = document.getElementById("wizSummaryScore");
    if (scoreEl) scoreEl.textContent = `${audit.overall}/100`;
    const diagEl = document.getElementById("wizSummaryDiagText");
    if (diagEl) {
      diagEl.textContent =
        audit.flaggedBullets.length > 0
          ? `We scored your resume (${audit.overall}/100) and found ${audit.flaggedBullets.length} bullet point(s) you can upgrade with 1 click.`
          : `Your resume scored ${audit.overall}/100 with strong quantified achievements!`;
    }
    const primaryRole = ((state.targetRoles || state.headline || "your target roles").split(",")[0] || "").trim();
    const jobsEl = document.getElementById("wizSummaryJobsText");
    if (jobsEl) {
      jobsEl.textContent = `We pre-filtered live remote job feeds and major job boards for "${primaryRole}" and calculated your match scores.`;
    }
  }
}

function renderGuidedWizard() {
  const fieldEl = document.getElementById("wizCareerField");
  const rolesEl = document.getElementById("wizTargetRoles");
  const goalEl = document.getElementById("wizCareerGoal");
  const styleEl = document.getElementById("wizWorkStyle");
  const salEl = document.getElementById("wizMinSalary");
  const locEl = document.getElementById("wizLocation");
  const indEl = document.getElementById("wizIndustries");
  const resTextEl = document.getElementById("wizResumeText");

  if (fieldEl && state.careerField) fieldEl.value = state.careerField;
  if (rolesEl) rolesEl.value = state.targetRoles || "";
  if (goalEl) goalEl.value = state.mission || "";
  if (styleEl) styleEl.value = state.workStyle || "On-site / Hybrid";
  if (salEl) salEl.value = state.minSalary || 110000;
  if (locEl) locEl.value = state.location || "";
  if (indEl) indEl.value = state.industries || "";

  if (resTextEl && !resTextEl.value) {
    // Pre-populate with existing resume if user already has one
    const existingResumeText = [
      state.summary || "",
      ...(state.experience || []).map(
        (e) => `${e.role} | ${e.company} (${e.period})\n` + (e.bullets || []).map((b) => `• ${b}`).join("\n")
      )
    ]
      .filter(Boolean)
      .join("\n\n");
    resTextEl.value = existingResumeText;
  }

  // If user already completed onboarding, show Step 3 summary by default (they can click Step 1 or 2 anytime)
  if (state.onboardingCompleted) {
    setWizardStep(3);
  } else {
    setWizardStep(1);
  }
}

function autoCalibrateBackgroundDetailsFromGoalsAndResume(rawResumeText) {
  const careerField = (document.getElementById("wizCareerField") || {}).value || "Business, Operations & Strategy";
  const roles = (document.getElementById("wizTargetRoles").value || "").trim() || "Operations & Program Manager";
  const goal = (document.getElementById("wizCareerGoal").value || "").trim();
  const workStyle = document.getElementById("wizWorkStyle").value || "On-site / Hybrid";
  const minSalary = Number(document.getElementById("wizMinSalary").value) || 105000;
  const location = (document.getElementById("wizLocation").value || "").trim() || "United States";
  const industries = (document.getElementById("wizIndustries").value || "").trim() || careerField;

  const primaryRole = (roles.split(",")[0] || "Target Role").trim();
  state.careerField = careerField;
  state.targetRoles = roles;
  state.headline = primaryRole;
  state.mission =
    goal ||
    `Advance into a high-impact ${primaryRole} position delivering measurable outcomes across ${industries}.`;
  state.workStyle = workStyle;
  state.minSalary = minSalary;
  state.location = location;
  state.industries = industries;
  state.infographicTagline = `Available for ${primaryRole} Opportunities`;

  // Auto-select industry-calibrated infographic theme (Deloitte / Microsoft / Healthcare / Creative)
  state.infographicTheme = detectIndustryThemeFromProfile(industries, roles, careerField);

  // Calibrate career-field-appropriate baseline skills, education, and summary before parsing raw resume text
  const fieldTemplate = getCareerFieldTemplateData(careerField, roles, industries);
  state.skills = fieldTemplate.skills;
  state.educationText = fieldTemplate.education;
  state.summary = fieldTemplate.summary;

  // Auto-generate 3-Horizon Trajectory in the background
  state.horizons = {
    h1: `Excel in a ${primaryRole} role and deliver high-visibility 90-day wins.`,
    h2: `Expand leadership scope and drive strategic initiatives across ${industries}.`,
    h3: `Long-term career leadership aligned with: ${state.mission}`
  };

  // Update saved CRM jobs to match the candidate's actual target roles and career field
  state.savedJobs = [
    {
      id: "crm-custom-1",
      title: primaryRole,
      company: "Leading Regional / National Employer",
      location: `${location} (${workStyle})`,
      salary: `$${Math.round(minSalary / 1000)}k - $${Math.round((minSalary * 1.2) / 1000)}k`,
      matchScore: 95,
      stage: "Saved",
      url: `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(primaryRole)}`,
      description: `${primaryRole} role focused on ${fieldTemplate.skills.map((s) => s.name).join(", ")} across ${industries}.`
    },
    ...(CURATED_REAL_JOBS.slice(0, 2).map((j, idx) => ({
      id: `crm-init-${idx}`,
      title: j.title,
      company: j.company,
      location: j.location,
      salary: j.salary,
      matchScore: 88 - idx * 3,
      stage: "Saved",
      url: j.url,
      description: j.description
    })))
  ];

  // Parse the provided resume text and extract experience, skills, and KPIs in the background
  if (rawResumeText && rawResumeText.trim()) {
    parseRawResumeTextIntoState(rawResumeText, { silent: true });
  } else {
    state.experience = fieldTemplate.sampleExperience;
  }

  state.onboardingCompleted = true;
  saveState({ immediate: true });
  renderCompassModule();
  renderResumeStudio();
  renderAtsBuilder();
  renderInfographic();
  fetchLiveJobs(primaryRole, "");
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
    state.skills && state.skills[0] ? state.skills[0].name : "strategic execution";

  const rewrites = [
    {
      style: "Measurable Impact & Results (Action + Outcome + Metric)",
      text: `Spearheaded ${coreTopic}, driving a 28% improvement in operational performance and delivering measurable quality gains across the organization.`
    },
    {
      style: "Efficiency, Quality & Service Delivery",
      text: `Directed and streamlined ${coreTopic} utilizing ${targetSkill}, reducing turnaround time by 35% while maintaining 98%+ compliance and satisfaction standards.`
    },
    {
      style: "Cross-Functional Leadership & Team Execution",
      text: `Led end-to-end execution of ${coreTopic} in partnership with key stakeholders and leadership, achieving 95%+ adoption and exceeding quarterly departmental goals.`
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
// MODULE 2B: ATS-FORMATTED RESUME & COVER LETTER BUILDER
// ============================================================================
function getSelectedAtsTargetJob() {
  const sel = document.getElementById("atsTargetJobSelect");
  const val = sel ? sel.value : "general";
  if (val && val !== "general") {
    const found = (state.savedJobs || []).find((j) => j.id === val);
    if (found) return found;
  }
  const primaryTitle = ((state.targetRoles || state.headline || "Target Role").split(",")[0] || "").trim();
  return {
    id: "general",
    title: primaryTitle,
    company: "Hiring Organization",
    location: state.workStyle || "Remote",
    description: `${state.targetRoles || ""} ${state.industries || ""}`
  };
}

function renderAtsBuilder() {
  // Populate contact/education defaults if empty
  const emailInp = document.getElementById("atsEmailInput");
  const phoneInp = document.getElementById("atsPhoneInput");
  const linkInp = document.getElementById("atsLinkedinInput");
  const eduInp = document.getElementById("atsEducationInput");

  if (!state.contactEmail) {
    state.contactEmail = (currentUser && currentUser.email) || "alex.jordan@email.com";
  }
  if (!state.contactPhone) {
    state.contactPhone = "(512) 555-0194";
  }
  if (!state.contactLinkedin) {
    const slug = (state.name || "candidate").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    state.contactLinkedin = `linkedin.com/in/${slug}`;
  }
  if (!state.educationText) {
    state.educationText = "Bachelor's Degree & Professional Industry Certifications";
  }

  emailInp.value = state.contactEmail;
  phoneInp.value = state.contactPhone;
  linkInp.value = state.contactLinkedin;
  eduInp.value = state.educationText;

  const bindMeta = (el, key) => {
    el.oninput = () => {
      state[key] = el.value;
      saveState();
      renderAtsSheetsOnly();
    };
  };
  bindMeta(emailInp, "contactEmail");
  bindMeta(phoneInp, "contactPhone");
  bindMeta(linkInp, "contactLinkedin");
  bindMeta(eduInp, "educationText");

  // Populate Target Job Selector
  const jobSelect = document.getElementById("atsTargetJobSelect");
  const prevVal = jobSelect.value;
  const jobs = state.savedJobs || [];
  jobSelect.innerHTML =
    `<option value="general">General Career Compass Target (${escapeHtml(((state.targetRoles || state.headline).split(",")[0] || "").trim())})</option>` +
    jobs
      .map(
        (j) =>
          `<option value="${escapeHtml(j.id)}">Tailored: ${escapeHtml(j.title)} @ ${escapeHtml(j.company)}</option>`
      )
      .join("");
  if (prevVal && [...jobSelect.options].some((o) => o.value === prevVal)) {
    jobSelect.value = prevVal;
  }

  renderAtsSheetsOnly();
}

function buildAtsResumeHtml(job, fontClass) {
  const skillsList = (state.skills || []).map((s) => s.name);
  const kpiSummary = (state.metrics || [])
    .map((m) => `${m.num} ${m.label}`)
    .join(" • ");

  const tailoredHeadline =
    job && job.id !== "general"
      ? `${job.title} | ${state.headline}`
      : state.headline;

  const tailoredSummary =
    job && job.id !== "general"
      ? `${state.summary} Proven alignment with ${job.company}'s priorities across ${skillsList.slice(0, 4).join(", ")}.`
      : state.summary;

  return `
    <article class="ats-paper ${fontClass}" id="atsResumePaper">
      <header class="ats-doc-header">
        <div class="ats-doc-name">${escapeHtml(state.name)}</div>
        <div class="ats-doc-headline">${escapeHtml(tailoredHeadline)}</div>
        <div class="ats-doc-contact">
          ${escapeHtml(state.location)} &nbsp;|&nbsp; ${escapeHtml(state.contactPhone)} &nbsp;|&nbsp; ${escapeHtml(state.contactEmail)} &nbsp;|&nbsp; ${escapeHtml(state.contactLinkedin)}
        </div>
      </header>

      <section class="ats-section">
        <h4 class="ats-section-title">Professional Summary</h4>
        <p class="ats-summary-text">${escapeHtml(tailoredSummary)}</p>
        ${
          kpiSummary
            ? `<p class="ats-summary-text" style="margin-top:6px;"><strong>Key Career Highlights:</strong> ${escapeHtml(kpiSummary)}</p>`
            : ""
        }
      </section>

      <section class="ats-section">
        <h4 class="ats-section-title">Core Competencies & Professional Skills</h4>
        <div class="ats-skills-line">
          <strong>Core Competencies:</strong> ${escapeHtml(skillsList.join(" • "))}
        </div>
        <div class="ats-skills-line">
          <strong>Target Sectors & Specialties:</strong> ${escapeHtml(state.industries || state.careerField || "Operations, Leadership & Cross-Functional Execution")}
        </div>
      </section>

      <section class="ats-section">
        <h4 class="ats-section-title">Professional Experience</h4>
        ${(state.experience || [])
          .map(
            (exp) => `
            <div class="ats-role-block">
              <div class="ats-role-header">
                <span>${escapeHtml(exp.role)} — ${escapeHtml(exp.company)}</span>
                <span>${escapeHtml(exp.period)}</span>
              </div>
              <ul class="ats-role-bullets">
                ${(exp.bullets || [])
                  .map((b) => `<li>${escapeHtml(b)}</li>`)
                  .join("")}
              </ul>
            </div>
          `
          )
          .join("")}
      </section>

      <section class="ats-section" style="margin-bottom:0;">
        <h4 class="ats-section-title">Education & Certifications</h4>
        <div class="ats-skills-line">${escapeHtml(state.educationText)}</div>
      </section>
    </article>
  `;
}

function buildAtsCoverLetterHtml(job, fontClass) {
  const todayStr = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const companyName = job && job.id !== "general" ? job.company : "Hiring Team";
  const roleTitle = job && job.id !== "general" ? job.title : ((state.targetRoles || state.headline).split(",")[0] || "Target Role").trim();
  const topSkills = (state.skills || [])
    .slice(0, 4)
    .map((s) => s.name)
    .join(", ");

  const topBullets = [];
  (state.experience || []).forEach((exp) => {
    if (exp.bullets && exp.bullets[0] && topBullets.length < 3) {
      topBullets.push(`${exp.bullets[0]} (${exp.company})`);
    }
  });

  return `
    <article class="ats-paper ${fontClass}" id="atsCoverLetterPaper">
      <header class="ats-doc-header">
        <div class="ats-doc-name">${escapeHtml(state.name)}</div>
        <div class="ats-doc-headline">${escapeHtml(state.headline)}</div>
        <div class="ats-doc-contact">
          ${escapeHtml(state.location)} &nbsp;|&nbsp; ${escapeHtml(state.contactPhone)} &nbsp;|&nbsp; ${escapeHtml(state.contactEmail)} &nbsp;|&nbsp; ${escapeHtml(state.contactLinkedin)}
        </div>
      </header>

      <div class="ats-cover-body">
        <p>${escapeHtml(todayStr)}</p>
        <p>
          <strong>To: Hiring Manager & Talent Acquisition Team</strong><br />
          ${escapeHtml(companyName)}<br />
          <strong>Re: Application for ${escapeHtml(roleTitle)}</strong>
        </p>

        <p>Dear ${escapeHtml(companyName)} Hiring Team,</p>

        <p>
          I am writing to submit my application for the <strong>${escapeHtml(roleTitle)}</strong> position. With ${escapeHtml(state.yearsExp || 8)}+ years of experience and a proven track record delivering measurable outcomes across ${escapeHtml(state.industries || state.careerField || "leadership and operations")}, I am excited by the opportunity to contribute to ${escapeHtml(companyName)}'s continued success and operational excellence.
        </p>

        <p>
          ${escapeHtml(state.summary)} My career North Star is centered on a clear mission: <em>${escapeHtml(state.mission)}</em>
        </p>

        <p><strong>Selected Quantified Achievements Relevant to ${escapeHtml(roleTitle)}:</strong></p>
        <ul class="ats-cover-bullets">
          ${topBullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
          <li><strong>Core Domain Mastery:</strong> Hands-on leadership across ${escapeHtml(topSkills)}.</li>
        </ul>

        <p>
          I would welcome the opportunity to discuss how my background and execution framework align with your goals for the ${escapeHtml(roleTitle)} position. Thank you for your time and consideration.
        </p>

        <p style="margin-top:22px;">
          Sincerely,<br />
          <strong>${escapeHtml(state.name)}</strong><br />
          ${escapeHtml(state.contactEmail)} | ${escapeHtml(state.contactPhone)}
        </p>
      </div>
    </article>
  `;
}

function renderAtsSheetsOnly() {
  const mode = (document.getElementById("atsDocModeSelect") || {}).value || "resume";
  const font = (document.getElementById("atsFontSelect") || {}).value || "sans";
  const fontClass = font === "serif" ? "font-serif" : "font-sans";
  const job = getSelectedAtsTargetJob();

  const stage = document.getElementById("atsStageContainer");
  if (!stage) return;

  let html = "";
  if (mode === "resume" || mode === "both") {
    html += buildAtsResumeHtml(job, fontClass);
  }
  if (mode === "cover" || mode === "both") {
    html += buildAtsCoverLetterHtml(job, fontClass);
  }
  stage.innerHTML = html;
}

function getAtsPlainText() {
  const stage = document.getElementById("atsStageContainer");
  return stage ? stage.innerText : "";
}

function downloadAtsWordDoc() {
  const stage = document.getElementById("atsStageContainer");
  if (!stage) return;
  const mode = (document.getElementById("atsDocModeSelect") || {}).value || "resume";
  const slug = (state.name || "candidate").toLowerCase().replace(/\s+/g, "-");
  const filename = `optitrajectoryai-ats-${mode}-${slug}.doc`;

  const wordHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>${escapeHtml(state.name)} - ATS Document</title>
    <style>
      body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; color: #000000; line-height: 1.4; }
      h4 { font-size: 11.5pt; text-transform: uppercase; border-bottom: 1px solid #000; padding-bottom: 2px; margin-top: 14px; margin-bottom: 6px; }
      ul { margin-top: 4px; margin-bottom: 8px; }
      li { margin-bottom: 4px; }
    </style>
    </head>
    <body>${stage.innerHTML}</body>
    </html>
  `;
  const blob = new Blob(["\ufeff", wordHtml], { type: "application/msword" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

// ============================================================================
// MODULE 3: ENTERPRISE CANDIDATE INFOGRAPHIC STUDIO (DELOITTE / MICROSOFT)
// ============================================================================
const INDUSTRY_THEME_LABELS = {
  deloitte: "Deloitte Consulting & Corporate One-Pager (Calibrated for Business, Finance, Operations, HR, Sales & Legal)",
  microsoft: "Microsoft Modern Enterprise Profile (Calibrated for Corporate Management, Project Delivery, Data & Tech)",
  healthcare: "Healthcare, Education & Public Service Brief (Calibrated for Clinical, Nursing, Teaching & Nonprofit)",
  creative: "Executive Editorial & Brand Sheet (Calibrated for Marketing, Communications, Media, Design & Hospitality)"
};

function getNormalizedInfographicTheme() {
  const valid = ["deloitte", "microsoft", "healthcare", "creative"];
  if (valid.includes(state.infographicTheme)) return state.infographicTheme;
  return detectIndustryThemeFromProfile(state.industries, state.targetRoles, state.careerField);
}

function renderInfographic() {
  const activeTheme = getNormalizedInfographicTheme();
  state.infographicTheme = activeTheme;

  const themeSelect = document.getElementById("infoThemeSelect");
  const taglineInp = document.getElementById("infoTaglineInput");
  if (themeSelect) themeSelect.value = activeTheme;
  if (taglineInp) taglineInp.value = state.infographicTagline || "Available for Next Leadership Role";

  const statusText = document.getElementById("industryAutoStatusText");
  if (statusText) {
    statusText.textContent = INDUSTRY_THEME_LABELS[activeTheme] || INDUSTRY_THEME_LABELS.deloitte;
  }

  const metrics = state.metrics || [
    { num: "10+ Yrs", label: "Domain Experience" },
    { num: "$25M+", label: "Business Impact" },
    { num: "94%", label: "Target Role Match" },
    { num: "Top 5%", label: "Execution Velocity" }
  ];

  // Render KPI editor inputs
  const kpiEditor = document.getElementById("metricsInputsContainer");
  if (kpiEditor) {
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
  }

  renderInfographicCanvasOnly();
}

function renderInfographicCanvasOnly() {
  const canvas = document.getElementById("infographicCanvas");
  if (!canvas) return;
  const activeTheme = getNormalizedInfographicTheme();
  canvas.className = `infographic-canvas corp-sheet theme-${activeTheme}`;

  const statusText = document.getElementById("industryAutoStatusText");
  if (statusText) {
    statusText.textContent = INDUSTRY_THEME_LABELS[activeTheme] || INDUSTRY_THEME_LABELS.deloitte;
  }

  const metrics = state.metrics || [];
  const skills = (state.skills || []).slice(0, 6);
  const roles = (state.experience || []).slice(0, 3);
  const targetRolesList = (state.targetRoles || state.headline || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 4);

  const industryList = (state.industries || "Enterprise, Technology, Strategy")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 4);

  const avatarHtml = state.headshotDataUrl
    ? `<img src="${state.headshotDataUrl}" alt="${escapeHtml(state.name)} Headshot" />`
    : `<span>${escapeHtml(getInitials(state.name))}</span>`;

  const sectorHeader = (state.careerField || state.industries || "EXECUTIVE LEADERSHIP").split(",")[0].trim().toUpperCase();
  const practiceLabel =
    activeTheme === "deloitte"
      ? `${sectorHeader} • DELOITTE ADVISORY STANDARD PROFILE`
      : activeTheme === "microsoft"
      ? `${sectorHeader} • MICROSOFT ENTERPRISE PROFILE`
      : activeTheme === "healthcare"
      ? `${sectorHeader} • CLINICAL, EDUCATION & SERVICE BRIEF`
      : `${sectorHeader} • EXECUTIVE BRAND & PORTFOLIO`;

  canvas.innerHTML = `
    <!-- Top Corporate Header Banner (Deloitte / Microsoft Style) -->
    <header class="corp-banner">
      <div class="corp-banner-left">
        <div class="corp-headshot">${avatarHtml}</div>
        <div>
          <div class="corp-practice-label">${practiceLabel}</div>
          <h2 class="corp-name">${escapeHtml(state.name)}<span class="corp-green-dot">.</span></h2>
          <div class="corp-headline">${escapeHtml(state.headline)}</div>
          <div class="corp-meta-line">
            📍 ${escapeHtml(state.location)} &nbsp;|&nbsp; 💼 ${escapeHtml(state.yearsExp || 8)}+ Yrs Experience &nbsp;|&nbsp; 🎯 ${escapeHtml(state.workStyle)} &nbsp;|&nbsp; ✉️ ${escapeHtml(state.contactEmail || (currentUser && currentUser.email) || "")}
          </div>
        </div>
      </div>
      <div class="corp-badge-box">
        <span class="corp-avail-pill">${escapeHtml(state.infographicTagline || "Open to Opportunities")}</span>
        <span style="font-size:0.74rem; opacity:0.8;">Target Floor: $${Math.round((Number(state.minSalary) || 150000) / 1000)}k+ Base</span>
      </div>
    </header>

    <!-- 4-Column Executive KPI Strip -->
    <section class="corp-kpi-strip">
      ${metrics
        .map(
          (m) => `
          <div class="corp-kpi-cell">
            <div class="corp-kpi-val">${escapeHtml(m.num)}<span>+</span></div>
            <div class="corp-kpi-lbl">${escapeHtml(m.label)}</div>
          </div>
        `
        )
        .join("")}
    </section>

    <!-- 2-Column Consulting & Enterprise Grid -->
    <div class="corp-body-grid">
      <!-- Left Sidebar: Core Capabilities, Industry Alignment, Education -->
      <aside class="corp-left-col">
        <div>
          <h4 class="corp-sec-title">Core Capabilities & Matrix</h4>
          ${skills
            .map(
              (s) => `
              <div class="corp-skill-item">
                <div class="corp-skill-top">
                  <span>${escapeHtml(s.name)}</span>
                  <span>${s.level}%</span>
                </div>
                <div class="corp-skill-track">
                  <div class="corp-skill-fill" style="width:${s.level}%"></div>
                </div>
              </div>
            `
            )
            .join("")}
        </div>

        <div>
          <h4 class="corp-sec-title">Target Roles & Practice Areas</h4>
          <div class="corp-pill-list">
            ${targetRolesList.map((tr) => `<span class="corp-pill">${escapeHtml(tr)}</span>`).join("")}
          </div>
        </div>

        <div>
          <h4 class="corp-sec-title">Industry Standards & Sectors</h4>
          <div class="corp-pill-list">
            ${industryList.map((ind) => `<span class="corp-pill">${escapeHtml(ind)}</span>`).join("")}
          </div>
        </div>

        <div>
          <h4 class="corp-sec-title">Education & Credentials</h4>
          <p style="font-size:0.78rem; color:#374151; line-height:1.45;">
            ${escapeHtml(state.educationText || "B.S. / Executive Leadership Credentials")}
          </p>
        </div>
      </aside>

      <!-- Right Main Column: Executive Value Proposition & Selected Engagement Experience -->
      <div class="corp-right-col">
        <div>
          <h4 class="corp-sec-title">Executive Value Proposition & Career North Star</h4>
          <div class="corp-summary-box">
            <strong>Career Objective:</strong> ${escapeHtml(state.mission || state.summary)}
          </div>
          ${
            state.summary && state.summary !== state.mission
              ? `<p style="font-size:0.82rem; color:#374151; margin-top:8px; line-height:1.5;">${escapeHtml(state.summary)}</p>`
              : ""
          }
        </div>

        <div>
          <h4 class="corp-sec-title">Selected Experience & Quantified Impact</h4>
          ${roles
            .map(
              (r) => `
              <div class="corp-exp-card">
                <div class="corp-exp-header">
                  <span class="corp-exp-role">${escapeHtml(r.role)}</span>
                  <span class="corp-exp-period">${escapeHtml(r.period)}</span>
                </div>
                <div class="corp-exp-company">${escapeHtml(r.company)}</div>
                <ul class="corp-exp-bullets">
                  ${(r.bullets || [])
                    .slice(0, 3)
                    .map((b) => `<li>${escapeHtml(b)}</li>`)
                    .join("")}
                </ul>
              </div>
            `
            )
            .join("")}
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

function getDynamicRoleCuratedJobs(query) {
  const primaryRole = ((query || state.targetRoles || state.headline || "Operations Manager").split(",")[0] || "Operations Manager").trim();
  const topSkillNames = (state.skills || []).slice(0, 5).map((s) => s.name);
  const baseSal = Number(state.minSalary) || 105000;
  const salLow = Math.round(baseSal / 1000);
  const salHigh = Math.round((baseSal * 1.22) / 1000);
  const qEnc = encodeURIComponent(primaryRole);

  return [
    {
      id: "dyn-match-1",
      title: `${primaryRole}`,
      company: "Leading National Employer (Direct Hiring Portal)",
      location: `${state.location || "United States"} (${state.workStyle || "Hybrid / Remote"})`,
      salary: `$${salLow},000 - $${salHigh},000`,
      type: "Full Time",
      category: state.careerField || "General",
      url: `https://www.linkedin.com/jobs/search/?keywords=${qEnc}`,
      publishedAt: "2026-10-27",
      tags: topSkillNames.slice(0, 4).length ? topSkillNames.slice(0, 4) : ["Leadership", "Operations", "Strategy"],
      description: `Seeking an experienced ${primaryRole} to lead high-impact initiatives across ${state.industries || state.careerField || "our organization"}. Key competencies include ${topSkillNames.join(", ") || "strategic execution, stakeholder collaboration, and measurable performance delivery"}.`,
      source: "Personalized Target Match"
    },
    {
      id: "dyn-match-2",
      title: `Senior / Lead ${primaryRole}`,
      company: "Regional Enterprise & Advisory Partners",
      location: state.workStyle || "Hybrid / On-site",
      salary: `$${salLow + 10},000 - $${salHigh + 15},000`,
      type: "Full Time",
      category: state.careerField || "General",
      url: `https://www.indeed.com/jobs?q=${qEnc}`,
      publishedAt: "2026-10-27",
      tags: topSkillNames.slice(1, 5).length ? topSkillNames.slice(1, 5) : ["Team Leadership", "Process Improvement"],
      description: `Lead departmental excellence and cross-functional teams as a Senior ${primaryRole}. Ideal candidates bring proven results in ${topSkillNames.join(", ") || "operations and team leadership"}.`,
      source: "Verified Career Match"
    },
    ...CURATED_REAL_JOBS
  ];
}

function renderJobsModule() {
  const primaryRole = ((state.targetRoles || state.headline || "Operations Manager").split(",")[0] || "Operations Manager").trim();
  const searchInput = document.getElementById("jobSearchInput");
  if (!searchInput.value) {
    searchInput.value = primaryRole;
  }

  // Deep links to major real job boards across ALL industries with candidate's exact target role & location
  const qEnc = encodeURIComponent(primaryRole);
  const locEnc = encodeURIComponent(state.location || "");
  const linksBar = document.getElementById("deepBoardLinksBar");
  linksBar.innerHTML = `
    <span>Launch Live Job Boards for "${escapeHtml(primaryRole)}":</span>
    <a class="board-pill" href="https://www.linkedin.com/jobs/search/?keywords=${qEnc}&location=${locEnc}" target="_blank" rel="noopener">LinkedIn Jobs ↗</a>
    <a class="board-pill" href="https://www.indeed.com/jobs?q=${qEnc}&l=${locEnc}" target="_blank" rel="noopener">Indeed ↗</a>
    <a class="board-pill" href="https://www.glassdoor.com/Job/jobs.htm?sc.keyword=${qEnc}" target="_blank" rel="noopener">Glassdoor ↗</a>
    <a class="board-pill" href="https://www.usajobs.gov/Search/Results?k=${qEnc}" target="_blank" rel="noopener">USAJOBS (Gov / Public) ↗</a>
    <a class="board-pill" href="https://www.google.com/search?q=${encodeURIComponent(primaryRole + ' jobs ' + (state.location || ''))}&ibp=htl;jobs" target="_blank" rel="noopener">Google Jobs Aggregator ↗</a>
  `;

  if (!currentJobsFeed || currentJobsFeed.length === 0) {
    currentJobsFeed = getDynamicRoleCuratedJobs(primaryRole);
  }
  renderJobsFeedList(currentJobsFeed);
}

async function fetchLiveJobs(query, category) {
  const badge = document.getElementById("jobFeedSourceBadge");
  badge.textContent = "Searching Live Feeds...";
  const dynamicCurated = getDynamicRoleCuratedJobs(query);

  // 1. Try local backend proxy first
  try {
    const resp = await fetch(
      `/api/jobs?q=${encodeURIComponent(query || "")}&category=${encodeURIComponent(category || "")}`
    );
    if (resp.ok) {
      const data = await resp.json();
      if (data.ok && Array.isArray(data.jobs) && data.jobs.length > 0) {
        currentJobsFeed = [...dynamicCurated.slice(0, 2), ...data.jobs, ...CURATED_REAL_JOBS];
        badge.textContent = `Live Job Feed (${data.jobs.length} live + multi-industry matches)`;
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
        source: "Live Job Feed"
      }));
      if (liveItems.length > 0) {
        currentJobsFeed = [...dynamicCurated.slice(0, 2), ...liveItems, ...CURATED_REAL_JOBS];
        badge.textContent = `Live Job Feed (${liveItems.length} live + multi-industry matches)`;
        renderJobsFeedList(currentJobsFeed);
        return;
      }
    }
  } catch (err2) {
    console.warn("Direct API fallback:", err2);
  }

  // 3. Filter multi-industry curated + dynamic role jobs
  const qLower = (query || "").toLowerCase();
  const filtered = dynamicCurated.filter(
    (j) =>
      !qLower ||
      j.title.toLowerCase().includes(qLower) ||
      j.description.toLowerCase().includes(qLower) ||
      (j.tags || []).some((t) => t.toLowerCase().includes(qLower))
  );
  currentJobsFeed = filtered.length ? filtered : dynamicCurated;
  badge.textContent = "Multi-Industry Matched Feed";
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

  // Also extract notable domain terms from JD across all career fields
  const universalCareerTerms = [
    "Leadership", "Operations", "Budget", "P&L", "Strategy", "Compliance",
    "Patient Care", "Clinical", "Curriculum", "Financial Modeling", "GAAP",
    "Audit", "Talent", "HRIS", "Account Management", "Client Retention",
    "Supply Chain", "Logistics", "Lean Six Sigma", "Project Management",
    "Stakeholder", "Marketing", "Brand", "Analytics", "Cross-Functional"
  ];
  const jdHits = universalCareerTerms.filter((term) =>
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
            <button class="btn btn-primary btn-sm ats-doc-this-btn" title="Open ATS Resume & Cover Letter for this role">📑 ATS Docs</button>
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

      card.querySelector(".ats-doc-this-btn").onclick = () => {
        switchTab("ats");
        const atsSel = document.getElementById("atsTargetJobSelect");
        if (atsSel) {
          atsSel.value = job.id;
          document.getElementById("atsDocModeSelect").value = "both";
          renderAtsSheetsOnly();
        }
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
    state.onboardingCompleted = false;
  }
  document.getElementById("authWall").classList.add("hidden");
  document.getElementById("publicViewerShell").classList.add("hidden");
  document.getElementById("appShell").classList.remove("hidden");

  syncGlobalUI();
  syncPrivacyUI();
  renderGuidedWizard();
  renderCompassModule();
  switchTab("journey");
  fetchLiveJobs(((state.targetRoles || "Product").split(",")[0] || "Product").trim(), "");
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
    const starterProfile = JSON.parse(JSON.stringify(PERSONA_PRESETS.pm));
    starterProfile.name = fullName;
    starterProfile.targetRoles = "";
    starterProfile.mission = "";
    starterProfile.onboardingCompleted = false;

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

  // Guided Career Coach Walkthrough Wizard Listeners
  [1, 2, 3].forEach((n) => {
    const stepBtn = document.getElementById(`wizStepBtn${n}`);
    if (stepBtn) stepBtn.onclick = () => setWizardStep(n);
  });

  document.getElementById("wizToStep2Btn").onclick = () => {
    setWizardStep(2);
  };

  document.getElementById("wizBackTo1Btn").onclick = () => {
    setWizardStep(1);
  };

  document.getElementById("wizResumeFileInput").onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("wizResumeText").value = String(reader.result || "");
    };
    reader.readAsText(file);
  };

  const wizHeadshotInput = document.getElementById("wizHeadshotFileInput");
  if (wizHeadshotInput) {
    wizHeadshotInput.onchange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        processAndStoreHeadshotFile(file);
      }
    };
  }

  const wizClearHeadshotBtn = document.getElementById("wizClearHeadshotBtn");
  if (wizClearHeadshotBtn) {
    wizClearHeadshotBtn.onclick = () => {
      state.headshotDataUrl = "";
      saveState({ immediate: true });
      updateHeadshotPreviews();
      renderInfographicCanvasOnly();
    };
  }

  document.getElementById("wizFillSampleResumeBtn").onclick = () => {
    const careerField = (document.getElementById("wizCareerField") || {}).value || state.careerField || "Business, Operations & Strategy";
    const roles = (document.getElementById("wizTargetRoles") || {}).value || state.targetRoles || "";
    const industries = (document.getElementById("wizIndustries") || {}).value || state.industries || "";
    const tpl = getCareerFieldTemplateData(careerField, roles, industries);
    const sampleText = [
      tpl.summary,
      ...tpl.sampleExperience.map(
        (e) => `${e.role} | ${e.company} (${e.period})\n` + e.bullets.map((b) => `• ${b}`).join("\n")
      ),
      `Education & Credentials: ${tpl.education}`
    ].join("\n\n");
    document.getElementById("wizResumeText").value = sampleText;
  };

  document.getElementById("wizAnalyzeAndFinishBtn").onclick = () => {
    const rawResume = document.getElementById("wizResumeText").value;
    autoCalibrateBackgroundDetailsFromGoalsAndResume(rawResume);
    setWizardStep(3);
  };

  document.getElementById("wizEditInputsBtn").onclick = () => {
    setWizardStep(1);
  };

  document.querySelectorAll("[data-goto]").forEach((btn) => {
    btn.onclick = () => switchTab(btn.dataset.goto);
  });

  const restartWizBtn = document.getElementById("restartWizardBtn");
  if (restartWizBtn) {
    restartWizBtn.onclick = () => {
      switchTab("journey");
      setWizardStep(1);
    };
  }

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

  // ATS Resume & Cover Letter Controls
  document.getElementById("atsDocModeSelect").onchange = () => renderAtsSheetsOnly();
  document.getElementById("atsTargetJobSelect").onchange = () => renderAtsSheetsOnly();
  document.getElementById("atsFontSelect").onchange = () => renderAtsSheetsOnly();

  document.getElementById("copyAtsTextBtn").onclick = () => {
    const txt = getAtsPlainText();
    navigator.clipboard.writeText(txt);
    const btn = document.getElementById("copyAtsTextBtn");
    btn.textContent = "✓ Copied ATS Text!";
    setTimeout(() => (btn.textContent = "📋 Copy Plain Text"), 1800);
  };

  document.getElementById("downloadAtsDocBtn").onclick = () => {
    downloadAtsWordDoc();
  };

  document.getElementById("printAtsPdfBtn").onclick = () => {
    window.print();
  };

  // Infographic Controls
  const infoHeadshotInp = document.getElementById("infoHeadshotInput");
  if (infoHeadshotInp) {
    infoHeadshotInp.onchange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        processAndStoreHeadshotFile(file, () => {
          renderInfographicCanvasOnly();
        });
      }
    };
  }

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
    const defaultRole = ((state.targetRoles || state.headline || "Operations Manager").split(",")[0] || "Operations Manager").trim();
    const title = prompt("Role Title:", defaultRole);
    if (!title) return;
    const company = prompt("Organization / Employer Name:", "Target Organization") || "Target Organization";
    addJobToCRM({
      title,
      company,
      location: state.workStyle || "Hybrid / Remote",
      salary: "$" + Math.round((Number(state.minSalary) || 105000) / 1000) + "k+ Target",
      matchScore: 92,
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

function parseRawResumeTextIntoState(rawText, opts = {}) {
  const lines = rawText
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length === 0) return;

  // 1. Extract bullet-like lines & role headers
  const roles = [];
  let currentRole = null;
  const summaryLines = [];

  lines.forEach((line) => {
    const isBullet = /^[•\-*]/.test(line);
    const hasRolePipe = line.includes("|") && line.length < 95 && !isBullet;
    const hasDateRange = /\b(20\d\d|19\d\d)\s*[–\-—to]+\s*(20\d\d|present|current)\b/i.test(line) && line.length < 95 && !isBullet;

    if (hasRolePipe || hasDateRange) {
      const parts = line.split("|").map((p) => p.trim());
      const dateMatch = line.match(/\b((?:20\d\d|19\d\d)\s*[–\-—to]+\s*(?:20\d\d|Present|Current))\b/i);
      const period = dateMatch ? dateMatch[1] : "Recent";
      const roleTitle = (parts[0] || state.headline || "Professional Role").replace(/\((?:20\d\d|19\d\d).*?\)/, "").trim();
      const companyName = (parts[1] || "Organization").replace(/\((?:20\d\d|19\d\d).*?\)/, "").trim();
      currentRole = { role: roleTitle, company: companyName, period, bullets: [] };
      roles.push(currentRole);
    } else if (isBullet || (line.length > 45 && /\b(led|built|managed|developed|launched|increased|reduced|created|designed|spearheaded|architected|owned|drove|delivered|responsible|helped)\b/i.test(line))) {
      const cleanBullet = line.replace(/^[•\-*]\s*/, "").trim();
      if (!currentRole) {
        const primaryTarget = ((state.targetRoles || state.headline || "Senior Professional").split(",")[0] || "").trim();
        currentRole = { role: primaryTarget, company: "Recent Experience", period: "2021 – Present", bullets: [] };
        roles.push(currentRole);
      }
      currentRole.bullets.push(cleanBullet);
    } else if (roles.length === 0 && summaryLines.length < 3 && line.length > 30) {
      summaryLines.push(line);
    }
  });

  if (roles.length > 0) {
    state.experience = roles.filter((r) => r.bullets.length > 0).slice(0, 5);
  }

  if (summaryLines.length > 0) {
    state.summary = summaryLines.join(" ").slice(0, 420);
  }

  // 2. Automatically extract key skills in the background across ALL career fields
  const SKILL_DICTIONARY = [
    // Business, Operations & Management
    "Operations Management", "Strategic Planning", "Project Management", "Program Management",
    "Budgeting & P&L Management", "Process Improvement", "Change Management", "Cross-Functional Leadership",
    "Vendor & Contract Management", "Stakeholder Management", "KPI & Performance Reporting",
    // Healthcare, Nursing & Clinical
    "Patient Care & Clinical Excellence", "Care Coordination", "HIPAA & Regulatory Compliance",
    "EHR / Epic Documentation", "Clinical Triage & Patient Safety", "Nursing Leadership (RN / BSN)",
    "Healthcare Administration", "Medical Case Management",
    // Education, Teaching & Training
    "Curriculum Development", "Instructional Design", "Classroom Management", "Differentiated Instruction",
    "IEP & Student Assessment", "Educator Coaching & Training", "Academic Leadership",
    // Finance, Accounting & Legal
    "Financial Modeling & FP&A", "GAAP Accounting & Audit", "Variance & Margin Analysis",
    "Tax & Regulatory Compliance", "Internal Controls & Risk Management", "Contract Drafting & Legal Research",
    // HR & People Operations
    "Talent Acquisition & Recruiting", "Employee Relations", "Performance Management",
    "Compensation & Benefits (HRIS)", "Workforce Planning & Retention", "Onboarding & Training",
    // Sales, Marketing & Customer Experience
    "Consultative Sales & Business Development", "Strategic Account Management", "Client Retention & Success",
    "Brand & Marketing Strategy", "Public Relations & Communications", "Content & Campaign Management",
    // Supply Chain, Manufacturing & Skilled Trades
    "Supply Chain & Logistics", "Inventory & Warehouse Management", "Lean Six Sigma & Quality Control",
    "OSHA & Workplace Safety", "Facilities & Plant Operations", "Procurement & Sourcing",
    // Technology, Data & Product
    "Product Strategy & Roadmapping", "Data Analysis & SQL", "Software Engineering", "Cloud & IT Systems", "AI & Workflow Automation"
  ];
  const lowerRaw = rawText.toLowerCase();
  const detectedSkills = SKILL_DICTIONARY.filter((sk) => {
    const tokens = sk.toLowerCase().split(/[\s/&(),]+/).filter((t) => t.length > 2);
    return tokens.some((tok) => lowerRaw.includes(tok));
  }).slice(0, 6);

  if (detectedSkills.length >= 2) {
    // Combine detected resume skills with career field skills so candidate always has 6 strong skills
    const existingNames = new Set(detectedSkills.map((s) => s.toLowerCase()));
    const fallbackSkills = (state.skills || []).filter((s) => !existingNames.has(s.name.toLowerCase()));
    state.skills = [
      ...detectedSkills.map((name, i) => ({
        name,
        level: i < 2 ? 94 : 88,
        demand: 92
      })),
      ...fallbackSkills
    ].slice(0, 6);
  }

  // Extract education / credentials line if present in raw resume
  const eduLine = lines.find((l) =>
    /\b(b\.s\.|b\.a\.|m\.s\.|m\.a\.|mba|m\.ed|ph\.d|bsn|rn\b|cpa\b|pmp\b|shrm|university|college|bachelor|master|degree|certified|license)/i.test(l)
  );
  if (eduLine && eduLine.length < 160) {
    state.educationText = eduLine.replace(/^(education\s*&?\s*credentials?:?\s*)/i, "").trim();
  }

  // 3. Automatically extract numbers/metrics for the 1-Page Infographic in the background
  const metricMatches = rawText.match(/(\$?\d+(?:\.\d+)?(?:M|K|B|%|\+)|\d+\+\s*(?:years|yrs|users|clients|projects))/gi) || [];
  const uniqueMetrics = [...new Set(metricMatches)].slice(0, 3);
  if (uniqueMetrics.length > 0) {
    const primaryTarget = ((state.targetRoles || state.headline || "Target Role").split(",")[0] || "").trim();
    state.metrics = [
      { num: uniqueMetrics[0] || "8+ Yrs", label: "Quantified Resume Impact" },
      { num: uniqueMetrics[1] || "95%", label: "Key Performance Outcome" },
      { num: uniqueMetrics[2] || "Top Tier", label: "Execution Track Record" },
      { num: "100%", label: `Aligned for ${primaryTarget.slice(0, 22)}` }
    ];
  }

  if (!opts.silent) {
    saveState();
    renderResumeStudio();
  }
}
