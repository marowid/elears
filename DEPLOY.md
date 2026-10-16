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

The site is English-only while `FEATURES.polish` is off (see README → Feature switches).

```bash
curl -I https://elears.com/                    # 307 → /en
curl -I https://elears.com/en                  # 200
curl -I https://elears.com/pl                  # 307 → /en (Polish switched off)
curl  https://elears.com/sitemap.xml | head    # EN URLs only
curl  https://elears.com/robots.txt
```

Then run Lighthouse (mobile) on:
- `/en`
- `/en/services`
- `/en/services/integrity-due-diligence`
- `/en/about`
- `/en/contact`

Each must score ≥ 95 on Performance, Accessibility, Best Practices, and SEO.

When Polish is enabled, also check that `/` redirects to `/pl`, that `/pl` returns 200, and that the sitemap lists both locales; repeat the Lighthouse runs for the `/pl/...` pages. When Insights is enabled, add `/en/insights/rss.xml` and one post page.

## Rollback

Vercel and Cloudflare Pages both keep the prior deploy live. Use the dashboard's "Promote" / "Rollback" action — do not force-push to recreate state.
