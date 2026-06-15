# Deploying FISCO Academy to Vercel

The app is **self-contained** — it needs **no environment variables** and **no backend**
to run. A standard Next.js import is all that's required.

## Option A — Import the Git repo (recommended)

1. Go to **<https://vercel.com/new>** and sign in.
2. **Import Git Repository** → choose **`eaqd/Fisco-Academy`**.
   (If it isn't listed, click *Adjust GitHub App Permissions* and grant access to the repo.)
3. Vercel auto-detects the settings below — leave them as-is:

   | Setting | Value |
   | --- | --- |
   | **Framework Preset** | Next.js |
   | **Root Directory** | `./` (repo root) |
   | **Build Command** | `next build` (default) |
   | **Install Command** | `npm install` (default) |
   | **Output Directory** | (leave default — Next.js handled automatically) |
   | **Environment Variables** | none required |

4. Click **Deploy**. First build takes ~1–2 minutes.

### Production branch
The repository's **default branch is `claude/fisco-cleaning-academy-jd1pas`**, so Vercel
will treat it as the **Production** branch and deploy it at your main domain. Every push
to it redeploys automatically; other branches get preview URLs.

> Prefer `main` as production? In GitHub set the default branch to `main` (merge this
> branch into `main` first), or in Vercel: **Project → Settings → Git → Production Branch**.

## Option B — Deploy from your own machine (CLI)

```bash
npm i -g vercel
vercel login          # opens a browser to authenticate
vercel --prod         # from the repo root; accept the detected Next.js defaults
```

## After deploying

- The site is served at `/` and redirects to **`/academy`**.
- Sign in with a name + role (stored in the browser) and progress is tracked locally.
- To enable shared accounts, a cross-device admin dashboard and file storage later,
  follow **`SUPABASE.md`** to wire up the optional Supabase backend.

## Troubleshooting

- **Build fails on a Next.js security advisory** — already addressed; the project pins a
  patched `next` (^15.5.19).
- **Repo not visible in Vercel** — install/configure the Vercel GitHub App for `eaqd`
  and grant it access to `Fisco-Academy`.
