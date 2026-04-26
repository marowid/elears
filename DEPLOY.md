# DEPLOY

The site is a standard Next.js 14 App Router build. Two deploy targets are documented: Vercel (zero-config) and Cloudflare Pages.

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
curl -I https://elears.com/                    # 307 → /pl
curl -I https://elears.com/pl                  # 200
curl -I https://elears.com/en                  # 200
curl  https://elears.com/sitemap.xml | head    # PL + EN URLs
curl  https://elears.com/robots.txt
curl  https://elears.com/pl/insights/rss.xml | head
```

Then run Lighthouse (mobile) on:
- `/pl`, `/en`
- `/pl/services`, `/en/services`
- `/pl/services/integrity-due-diligence`
- `/pl/contact`, `/en/contact`
- `/pl/insights/<one-post>`, `/en/insights/<one-post>`

Each must score ≥ 95 on Performance, Accessibility, Best Practices, and SEO.

## Rollback

Vercel and Cloudflare Pages both keep the prior deploy live. Use the dashboard's "Promote" / "Rollback" action — do not force-push to recreate state.
