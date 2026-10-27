# DEPLOY

The site is a standard Next.js 14 App Router build (SSR with middleware; no `output: 'export'`). Production runs on **AWS Amplify Hosting**; Vercel and Cloudflare Pages are documented as alternatives.

## AWS Amplify Hosting (production)

Amplify auto-detects the Next.js framework; no `amplify.yml` is committed, so the default build (`npm ci` / `npm run build`, output `.next`) applies. Nothing in the redesign changes the build contract:

- No new runtime dependencies. The map data and illustrations are static TypeScript/SVG.
- Fonts are fetched by `next/font/google` **at build time** and bundled; the build container needs outbound HTTPS to `fonts.googleapis.com` (Amplify allows this by default). If a locked-down build ever blocks it, drop the WOFF2 files in `public/fonts` and switch the two `next/font/google` calls in `app/[locale]/layout.tsx` to `next/font/local`.
- Node version: `.nvmrc` pins 20. Match it in Amplify → Build settings → Build image settings (or set `NODE_VERSION=20`).
- Middleware handles `/` → `/en` and locale routing; Amplify's Next.js SSR compute supports it.

Post-deploy, run the smoke test below.

Do **not** commit deploy tokens. Configure secrets in the host's dashboard.

## Vercel

1. Push the repo to GitHub / GitLab / Bitbucket.
2. In Vercel → New Project → Import the repo.
3. Framework preset: **Next.js**. Build command: `next build`. Install command: `npm install` (or `pnpm install` if you have pnpm enabled). Output: leave default.
4. Environment variables: none required for v1. (Plausible is loaded from a public CDN with a public domain key; confirm `PLAUSIBLE_DOMAIN` in `app/[locale]/layout.tsx` matches the registered Plausible site.)
5. Add the production domain (`elears.com`) in Project → Settings → Domains and point DNS at Vercel.
6. First deploy. Lighthouse and axe sweeps live: see README.

## Cloudflare Pages

1. Push the repo.
2. Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git.
3. Build settings:
   - Framework preset: **Next.js**.
   - Build command: `npm install && npm run build`.
   - Build output directory: `.next` (Pages auto-detects with the `@cloudflare/next-on-pages` adapter; install it locally if you need edge-runtime parity).
4. Set Node version: `NODE_VERSION=20` in Pages → Settings → Environment variables.
5. Add `elears.com` as a custom domain.

## Post-deploy smoke test

```bash
curl -I https://elears.com/                    # 307 → /en
curl -I https://elears.com/en                  # 200
curl -I https://elears.com/pl                  # 200 (Polish enabled; English is default)
curl  https://elears.com/sitemap.xml | head    # EN and PL URLs
curl  https://elears.com/robots.txt
```

Then run Lighthouse (mobile) on:
- `/en`
- `/en/services`
- `/en/services/integrity-due-diligence`
- `/en/about`
- `/en/contact`

Each must score ≥ 95 on Performance, Accessibility, Best Practices, and SEO.

Repeat the Lighthouse runs for the matching `/pl/...` pages. When Insights is enabled, add `/en/insights/rss.xml` and one post page.

## Rollback

Amplify, Vercel and Cloudflare Pages all keep prior deploys. Use the dashboard's "Redeploy this version" / "Promote" / "Rollback" action — do not force-push to recreate state.
