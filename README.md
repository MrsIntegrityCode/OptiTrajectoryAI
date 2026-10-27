# OptiTrajectoryAI — Optimize Your Career Trajectory

**OptiTrajectoryAI** consolidates everything you need to optimize your career trajectory into a single platform: defining your career goals & 3-horizon trajectory, evaluating & rewriting your resume, generating a 1-page visual candidate infographic, and matching/applying to real jobs.

## ✨ Core Modules

1. **🔒 Authentication & Privacy-First Accounts**
   - Mandatory login / account registration with PBKDF2-HMAC-SHA256 password hashing and SQLite persistence.
   - **Private by Default**: Every candidate profile starts 100% private (`is_public = 0`).
   - **Opt-In Public Portfolio**: Candidates can explicitly toggle public visibility to share a live 1-page visual portfolio at `/?u=<handle>` (or `/u/<handle>`) while keeping their Job CRM and internal notes private.

2. **🧭 Career Compass**
   - Define your Career North Star, target roles, target industries, minimum base salary floor, and preferred work style.
   - Configure offer evaluation priorities and a 3-Horizon Career Trajectory (6–12 Months, Year 2–3, Year 5+ Vision).
   - Interactive Skills Inventory & Market Demand Gap Matrix.

3. **📄 Resume Evaluation & Optimization Studio**
   - 5-Dimension Live Scorecard: Overall Readiness, Impact Quantification (`%`, `$`, `#`), Action Verb Strength, Career Compass Alignment, and ATS Structure.
   - Automatic detection of passive language or unquantified bullets with an interactive **Google XYZ Formula Bullet Optimizer** and 1-click replacement.
   - Supports `.txt`/`.md` upload or raw text paste-and-parse.

4. **🎨 Candidate Infographic Studio**
   - Auto-generates a 1-page executive visual bio from your Career Compass and Resume.
   - Switch between 3 visual themes (*Executive Midnight*, *Editorial Paper*, *Venture Emerald*), customize top 4 KPI callouts, and export/print to PDF.

5. **🔍 Live Job Discovery & Deep URL/JD Match Analyzer**
   - Searches live remote job postings via the Remotive API + curated openings, scored against your skills and target titles.
   - Pre-filtered 1-click launch links for LinkedIn, Indeed, YC Startup Jobs, Wellfound, and Greenhouse/Lever.
   - Paste any job URL or raw description to run an instant keyword match and gap breakdown.

6. **📋 Application CRM & 1-Click Tailoring Studio**
   - Kanban board across *Saved*, *Applied*, *Interviewing*, and *Offer*.
   - Generates tailored Executive Summaries, Hiring Manager Cold Outreach notes, and Cover Letters for any saved opportunity.

## 🚀 Quick Start

Requires Python 3 (zero external pip dependencies required):

```bash
python3 server.py
```

Then open **http://localhost:8420** in your browser.
