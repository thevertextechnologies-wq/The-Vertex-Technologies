# Deploying to Vercel

This project was originally configured for Cloudflare Workers. To deploy on Vercel
without 404 errors, follow these steps.

## 1. Import the repo on Vercel

- Framework Preset: **Other**
- Build Command: `vite build`
- Output Directory: `.output/public`
- Install Command: `bun install` (or `npm install`)

`vercel.json` in the repo root already sets these.

## 2. SPA fallback

`vercel.json` includes a rewrite that sends every unknown URL to `/`, so
client-side routes like `/about`, `/services`, `/contact` no longer return 404
on hard refresh or deep link.

## 3. Environment variables

If you use Lovable Cloud / Supabase, copy these from your Lovable project
settings into Vercel → Project → Settings → Environment Variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

Re-deploy after adding them.

## 4. Custom domain

After the first successful deployment, add your domain under
Vercel → Project → Settings → Domains.

## Note about server functions

This template's server functions are tuned for the Cloudflare Worker runtime.
The Vercel deployment above serves the app as a static SSG/SPA build. If you
later need TanStack server functions on Vercel, switch the adapter in
`vite.config.ts` to a Node/Vercel target — your current frontend will keep
working as-is.
