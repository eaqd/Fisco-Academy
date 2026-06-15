# FISCO Academy

An internal staff training portal for **FISCO Cleaning Services** (UK). It teaches
professional cleaning of **Offices, Schools and Nurseries**, plus the foundational
skills every operative needs, grounded in UK standards: **BICSc/CPSS, UKHSA, EYFS
2025, COSHH 2002** and the **NHS National Standards of Healthcare Cleanliness 2025**.

Built as a self-contained module that mounts under **`/academy`**, so it can attach to
an existing FISCO website or run standalone.

## Highlights

- **Foundations → Site training** learning path. Site modules (Offices/Schools/Nurseries)
  stay **locked until every Foundation quiz is passed** (LTP-equivalent gating).
- **Rich lessons**: learning objectives, numbered step-by-step method, green **DO** /
  red **DON'T** panels, amber **SAFETY** callouts, embedded **Watch & Learn** videos and a
  **Download SOP card (PDF) / Print** button.
- **Quizzes** with instant feedback + explanations (pass mark 80%).
- **Auto-issued certificates** (printable / save-as-PDF) on passing a module.
- **Progress tracking**, **global search**, **admin dashboard** with **CSV export**.
- **Mobile-first**, WCAG 2.1 AA minded, dyslexia-friendly font, large tap targets,
  bottom mobile nav, plain simple English.
- **Privacy-enhanced YouTube** (`youtube-nocookie.com`, lazy-loaded, click-to-load).
- **FISCO-branded** via CSS variables in `src/app/globals.css` (swap for real brand assets).

## Tech stack

- **Next.js 15** (App Router, TypeScript) + **Tailwind CSS**, deployable on **Vercel**.
- **Self-contained by default**: accounts, progress, quiz results and certificates are
  stored in the browser, so the site works with **no backend setup**.
- **Supabase-ready**: `supabase/schema.sql` provides the full Postgres schema (Auth,
  Row Level Security, storage) described in the original brief — see `SUPABASE.md`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000  → redirects to /academy
npm run build      # production build
```

## Content

All tutorial content is in **`src/data/`** — the single source of truth:

- `foundations.ts` — colour coding, COSHH & chemicals, cleaning vs disinfecting,
  microfibre & floor care, health & safety & equipment, hand hygiene, bodily-fluid
  spills, speed/systematic cleaning.
- `sites.ts` — Offices, Schools, Nurseries.
- `sources.ts` — the vetted PART B learning sources (`/academy/sources`).

Each lesson carries its UK-standard references. **Verify every YouTube link is live before
launch and re-check at least termly** (some BICSc skill demos are paywalled — see the
sources page caveat).

## Routes

| Route | Purpose |
| --- | --- |
| `/academy` | Dashboard: overall progress, continue learning, module cards |
| `/academy/foundations` · `/offices` · `/schools` · `/nurseries` | Category sections |
| `/academy/modules/[slug]` | Module overview → lessons + quiz |
| `/academy/lessons/[slug]` | Lesson page |
| `/academy/modules/[slug]/quiz` | End-of-module quiz |
| `/academy/progress` | Personal progress + certificates |
| `/academy/admin` | Staff completion dashboard + CSV export |
| `/academy/search` | Global search |
| `/academy/sources` | Credible learning sources (PART B) |

## Customising the brand

Edit the CSS variables at the top of `src/app/globals.css` (`--brand`, `--brand-dark`,
etc.) and replace the placeholder mark in `src/components/Logo.tsx`.

## Important caveats (from the research brief)

- There is **no single mandatory DfE cleaning-frequency standard** for schools — the
  frequencies shown are best-practice syntheses of UKHSA guidance and industry checklists.
- The NPSA National Colour Coding Scheme is **officially withdrawn** but still industry
  referenced; the **BICSc scheme is the live reference**.
- Microfibre laundering temperatures vary by manufacturer (60°C practical minimum to
  ~90–95°C max) — always follow the product care label.
- Toy hygiene is **good practice, not a guaranteed illness-reducer** (Ibfelt et al. 2015).
- Verify all legal/regulatory specifics against current published documents at build time.
