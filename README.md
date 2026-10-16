# Elears website

Marketing site for **ELEARS** — an EU-sovereign, AI-native private intelligence firm headquartered in Wrocław, Poland.

The site is currently **English-only**. A full Polish translation is built in and kept up to date, but it is switched off (see [Feature switches](#feature-switches)).

This is a brochure + research-publishing site, not a web app. Built with Next.js 14 App Router, React Server Components, Tailwind CSS, MDX content, and `next-intl` for localisation.

## Quick start

Requires Node 20 (`nvm use` reads `.nvmrc`). The brief specifies pnpm; npm works as a substitute.

```bash
nvm use
npm install         # or: pnpm install
npm run dev         # http://localhost:3000 → /en
```

The middleware redirects `/` to `/en`. While Polish is switched off, any `/pl/...` URL redirects to the matching `/en/...` page.

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
  [locale]/          /en/* (and /pl/* when Polish is enabled)
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
  features.ts        Feature switches (Polish locale, Insights, secure contact)
  insights.ts        MDX loader + reading-time helper
  services.ts        Service-line catalogue
messages/
  en.json            next-intl message catalogue — served
  pl.json            Polish catalogue — kept in sync, not served while Polish is off
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
4. Once Insights is enabled (`FEATURES.insights`), the post appears automatically on `/insights`, on the home-page teaser (latest three), and in the per-locale RSS feed at `/{locale}/insights/rss.xml`.

Posts are served from `content/insights/en/` while the site is English-only. Add the Polish version under `content/insights/pl/` as well so it is ready when Polish is enabled; the slug does not need to match across locales.

## Adding a new service

1. Add the slug and 3-letter code to `lib/services.ts` (`SERVICE_SLUGS` and `SERVICE_CODES`).
2. Add a matching block to `messages/en.json` (and `messages/pl.json`, to keep the Polish catalogue complete) under `services.items.<slug>` with the `title`, `short`, `lead`, `engagements`, `scoping`, `delivery`, `handover`, and `deliverables` fields.
3. The detail page is dynamic (`app/[locale]/services/[slug]/page.tsx`); no further code changes are required.

## Visual design — Tactical Brutalism

- Palette: deep navy (`#0B1B2B`), warm off-white (`#F4F1EA`), muted crimson accent (`#8B1E2D`), graphite text (`#2A2D34`).
- Sharp-edged elements (no border radii), hairline rules, corner brackets on cards (`.brackets`), monospace data points, mil-spec section eyebrows ("01 / WHAT WE DO").
- Tailwind tokens live in `tailwind.config.ts`; global utilities and the topographic hero texture in `app/globals.css`.
- Typography: serif for headings (Source Serif 4 / Spectral fallback), sans for body (Inter / IBM Plex Sans), mono for data (JetBrains Mono / IBM Plex Mono). Self-host the WOFF2 files into `public/fonts/` and declare via `@font-face` — see `docs/content-todo.md`.

## i18n

- **Served today:** English only — `en` is the default and only active locale. URL pattern: `/en/...`.
- **Polish (`pl`)** is fully translated (`messages/pl.json` and the Polish text in the legal pages) but switched off. While off:
  - `/` and every `/pl/...` URL redirect to the matching `/en/...` page;
  - the language switcher is hidden;
  - the sitemap and `hreflang` tags list English only.
- **To enable Polish:** set `polish: true` in `lib/features.ts`. Polish then becomes the default locale (`/` → `/pl`), the PL/EN switcher returns, and the middleware persists the choice in the `NEXT_LOCALE` cookie. Have the Polish copy proofread first (see `docs/content-todo.md`).
- Active locales are derived in `i18n.ts` (`locales`, `defaultLocale`) from that switch. `allLocales` lists every locale with a catalogue.
- Add a new locale by adding it to `allLocales` in `i18n.ts`, creating `messages/<locale>.json`, and adding any locale-specific text in the legal pages.

## Feature switches

All switches live in `lib/features.ts`. Turning one off hides every link, route, sitemap entry and feed for that section.

| Switch | Current | Controls |
| --- | --- | --- |
| `polish` | `false` | Polish locale, language switcher, Polish `hreflang` |
| `insights` | `false` | Insights nav/footer links, home teaser, `/insights` routes, RSS, sitemap entries |
| `secureContact` | `false` | Signal / PGP "Secure introductions" block on Contact |

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
