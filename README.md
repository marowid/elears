# Elears website

Bilingual (PL / EN) marketing site for **Elears** — an EU-sovereign, AI-native private intelligence firm headquartered in Wrocław, Poland.

This is a brochure + research-publishing site, not a web app. Built with Next.js 14 App Router, React Server Components, Tailwind CSS, MDX content, and `next-intl` for localisation.

## Quick start

Requires Node 20 (`nvm use` reads `.nvmrc`). The brief specifies pnpm; npm works as a substitute.

```bash
nvm use
npm install         # or: pnpm install
npm run dev         # http://localhost:3000 → /pl
```

The middleware redirects `/` to the user's preferred locale (default `pl`).

## Available scripts

| Script             | What it does                                                          |
| ------------------ | --------------------------------------------------------------------- |
| `npm run dev`      | Starts the Next.js dev server.                                        |
| `npm run build`    | Builds for production.                                                |
| `npm run start`    | Serves the production build.                                          |
| `npm run lint`     | Runs `next lint` and `tsc --noEmit`.                                  |
| `npm run format`   | Runs Prettier (Tailwind plugin enabled).                              |
| `npm run test:a11y`| Helper command — run `npx @axe-core/cli` against the running site.    |

## Project layout

```
app/                 Next.js App Router (locale-segmented)
  [locale]/          /pl/* and /en/*
  sitemap.ts         Auto-generated sitemap
  robots.ts          Robots policy
  opengraph-image.tsx Edge-rendered shared OG card
components/
  layout/            Header, Footer, CookieBanner
  sections/          Hero, Pillars, WhyElears, InsightsTeaser, CtaStrip, PageHeader, LegalShell
  ui/                Container, Button, Card, Eyebrow, Wordmark
content/
  insights/{pl,en}/*.mdx  Seeded draft posts
lib/
  insights.ts        MDX loader + reading-time helper
  services.ts        Service-line catalogue
messages/
  pl.json, en.json   next-intl message catalogues (UI strings + service copy)
public/              Static assets, favicon
docs/
  content-todo.md    Pre-launch placeholder inventory (founder hand-off)
```

## Adding a new Insights post

1. Create an MDX file under `content/insights/<locale>/<slug>.mdx`.
2. Frontmatter required:

   ```yaml
   ---
   title: "..."
   date: "2026-04-26"
   excerpt: "One-line summary."
   tag: "geopolitics"     # geopolitics | cyber | investigations
   author: "Elears Analyst Desk"
   draft: false           # set to true to show the DRAFT banner
   ---
   ```

3. Write the body in MDX. Standard Markdown works; MDX components can be added in `app/[locale]/insights/[slug]/page.tsx` if needed.
4. The post appears automatically on `/insights`, on the home-page teaser (latest three), and in the per-locale RSS feed at `/{locale}/insights/rss.xml`.

To add a post in both languages, create the file under both `content/insights/pl/` and `content/insights/en/`. The slug does not need to match across locales.

## Adding a new service

1. Add the slug and 3-letter code to `lib/services.ts` (`SERVICE_SLUGS` and `SERVICE_CODES`).
2. Add a matching block to `messages/pl.json` and `messages/en.json` under `services.items.<slug>` with the `title`, `short`, `lead`, `engagements`, `scoping`, `delivery`, `handover`, and `deliverables` fields.
3. The detail page is dynamic (`app/[locale]/services/[slug]/page.tsx`); no further code changes are required.

## Visual design — Tactical Brutalism

- Palette: deep navy (`#0B1B2B`), warm off-white (`#F4F1EA`), muted crimson accent (`#8B1E2D`), graphite text (`#2A2D34`).
- Sharp-edged elements (no border radii), hairline rules, corner brackets on cards (`.brackets`), monospace data points, mil-spec section eyebrows ("01 / WHAT WE DO").
- Tailwind tokens live in `tailwind.config.ts`; global utilities and the topographic hero texture in `app/globals.css`.
- Typography: serif for headings (Source Serif 4 / Spectral fallback), sans for body (Inter / IBM Plex Sans), mono for data (JetBrains Mono / IBM Plex Mono). Self-host the WOFF2 files into `public/fonts/` and declare via `@font-face` — see `docs/content-todo.md`.

## i18n

- Two locales: `pl` (default) and `en`.
- URL pattern: `/pl/...`, `/en/...`. The middleware persists locale in the `NEXT_LOCALE` cookie.
- Message catalogs: `messages/pl.json`, `messages/en.json`.
- Add a new locale by editing `i18n.ts` (`locales`), creating a new message file, and updating `middleware.ts`.

## Analytics

Plausible is wired in `app/[locale]/layout.tsx`. Confirm the production `data-domain` before launch (see `docs/content-todo.md`).

## Pre-launch

See `docs/content-todo.md` for the full placeholder inventory and founder checklist. A grep helper:

```bash
grep -rn "TODO:" app components content
```

## Out of scope (v1)

- Authenticated client portal
- Newsletter signup form (planned for v2 once an ESP is selected)
- Real contact form with backend handling
- Public platform / product login
- Careers ATS integration
- Animations beyond subtle fade-ins
