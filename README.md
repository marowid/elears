# Elears website

Marketing site for **ELEARS** — an EU-sovereign, AI-native private intelligence firm headquartered in Wrocław, Poland.

The site is currently served in **English only** (`FEATURES.polish` is off in `lib/features.ts`; `/pl/*` redirects to `/en/*` and the language switcher is hidden). Turning the flag on restores the Polish locale. The Polish copy is maintained in `docs/polish-copy.md` and synced into `messages/pl.json` with `npm run sync:pl` (see [Polish copy](#polish-copy)).

This is a brochure + research-publishing site, not a web app. Built with Next.js 14 App Router, React Server Components, Tailwind CSS, MDX content, and `next-intl` for localisation.

## Quick start

Requires Node 20 (`nvm use` reads `.nvmrc`). The brief specifies pnpm; npm works as a substitute.

```bash
nvm use
npm install         # or: pnpm install
npm run dev         # http://localhost:3000 → /en
```

The middleware redirects `/` to `/en`. Browser-language detection is off on purpose: every visitor lands on English and, when Polish is enabled, chooses it from the header; next-intl remembers the choice in the `NEXT_LOCALE` cookie.

## Available scripts

| Script             | What it does                                                          |
| ------------------ | --------------------------------------------------------------------- |
| `npm run dev`      | Starts the Next.js dev server.                                        |
| `npm run build`    | Builds for production.                                                |
| `npm run start`    | Serves the production build.                                          |
| `npm run lint`     | Runs `next lint` and `tsc --noEmit`.                                  |
| `npm run format`   | Runs Prettier (Tailwind plugin enabled).                              |
| `npm run test:a11y`| Helper command — run `npx @axe-core/cli` against the running site.    |
| `npm run sync:pl`  | Regenerates `messages/pl.json` from `docs/polish-copy.md`.            |

## Project layout

```
app/                 Next.js App Router (locale-segmented)
  [locale]/          /en/* and /pl/*
  sitemap.ts         Auto-generated sitemap
  robots.ts          Robots policy
  opengraph-image.tsx Edge-rendered shared OG card
components/
  layout/            Header, Footer, CookieBanner
  sections/          Hero, Pillars, WhyElears, InsightsTeaser, CtaStrip, PageHeader, LegalShell, OfficeMap
  ui/                Container, Button, Card, Eyebrow, Wordmark, ServiceCard, RedactedPortrait
  ui/illustrations/  Isometric drawing kit (iso.tsx), one drawing per service (ServiceArt), panel art
content/
  insights/{pl,en}/*.mdx  Seeded draft posts
lib/
  features.ts        Feature switches (Polish locale, Insights, secure contact)
  insights.ts        MDX loader + reading-time helper
  services.ts        Service-line catalogue
messages/
  en.json            next-intl message catalogue — primary
  pl.json            Polish catalogue — generated from docs/polish-copy.md
docs/
  polish-copy.md     Editable Polish copy (every string, EN reference + PL)
scripts/
  sync-pl.mjs        Rebuilds messages/pl.json from docs/polish-copy.md
public/              Static assets, favicon
docs/
  content-todo.md    Pre-launch placeholder inventory (founder hand-off)
```

## Polish copy

All Polish UI and marketing strings live in `docs/polish-copy.md`, one entry per key with the English line for reference. Edit the `PL:` lines and run `npm run sync:pl`; the script rebuilds `messages/pl.json` using `messages/en.json` as the structural template and fails if a key is missing or unknown. The three legal pages and the Insights posts carry their own Polish text in their files.

## Visual system

The presentation layer follows a documentation-grade style: white page, near-black text and hairlines, regular-weight headings, no radii or shadows, and monochrome isometric line illustrations.

- Tokens: `lib/colors.ts` (palette, every text/background pair is WCAG AA) and `tailwind.config.ts` (type scale `display-1/2/3`, `lead`).
- Fonts: Hanken Grotesk and IBM Plex Mono via `next/font/google` in `app/[locale]/layout.tsx` — downloaded once at build time and self-hosted; no runtime request to Google.
- Illustrations: `components/ui/illustrations/iso.tsx` projects plane coordinates (u, v, height) onto a shared 240×160 isometric frame; `ServiceArt.tsx` holds one drawing per service slug. Add a new service by adding a drawing to the `ART` map.
- Office map: `components/sections/OfficeMap.data.ts` is generated from Natural Earth 1:110m with d3-geo (conic conformal, parallels 30°/55°, central meridian 22°E) fitted to the area of operations (Europe, Ukraine, Middle East, North Africa). Tiers: `home` Poland, `cee` Central & Eastern Europe, `ops` area of operations, `base` context. To regenerate, run a small Node script with `d3-geo`, `topojson-client` and `world-atlas` (see the header comment in the data file for the projection parameters).

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

Posts are served per locale from `content/insights/en/` and `content/insights/pl/`; the slug does not need to match across locales.

## Adding a new service

1. Add the slug and 3-letter code to `lib/services.ts` (`SERVICE_SLUGS` and `SERVICE_CODES`).
2. Add a matching block to `messages/en.json` (and the Polish text to `docs/polish-copy.md`, then `npm run sync:pl`) under `services.items.<slug>` with the `title`, `short`, `lead`, `engagements`, `scoping`, `delivery`, `handover`, and `deliverables` fields.
3. The detail page is dynamic (`app/[locale]/services/[slug]/page.tsx`); no further code changes are required.

## Visual design — Tactical Brutalism

- Palette: deep navy (`#0B1B2B`), warm off-white (`#F4F1EA`), muted crimson accent (`#8B1E2D`), graphite text (`#2A2D34`).
- Sharp-edged elements (no border radii), hairline rules, corner brackets on cards (`.brackets`), monospace data points, mil-spec section eyebrows ("01 / WHAT WE DO").
- Tailwind tokens live in `tailwind.config.ts`; global utilities and the topographic hero texture in `app/globals.css`.
- Typography: serif for headings (Source Serif 4 / Spectral fallback), sans for body (Inter / IBM Plex Sans), mono for data (JetBrains Mono / IBM Plex Mono). Self-host the WOFF2 files into `public/fonts/` and declare via `@font-face` — see `docs/content-todo.md`.

## i18n

- **Served:** English (`en`, default) and Polish (`pl`). URL pattern: `/en/...` and `/pl/...`; `/` redirects to `/en`.
- **Language choice is explicit.** Browser-language detection is off (`localeDetection: false` in `middleware.ts`), so every visitor lands on English and switches with the PL/EN control in the header. next-intl stores the choice in the `NEXT_LOCALE` cookie and the sitemap and `hreflang` tags list both locales.
- **Polish copy** is edited in `docs/polish-copy.md` and synced into `messages/pl.json` with `npm run sync:pl` (see [Polish copy](#polish-copy)). The legal pages carry their own Polish text inline.
- **Switching Polish off** (`polish: false` in `lib/features.ts`) hides the switcher and redirects every `/pl/...` URL to `/en/...`; English remains the default either way (`defaultLocale` in `i18n.ts`).
- Add a new locale by adding it to `allLocales` in `i18n.ts`, creating `messages/<locale>.json`, and adding any locale-specific text in the legal pages.

## Feature switches

All switches live in `lib/features.ts`. Turning one off hides every link, route, sitemap entry and feed for that section.

| Switch | Current | Controls |
| --- | --- | --- |
| `polish` | `true` | Polish locale, language switcher, Polish `hreflang`. English stays the default locale either way. |
| `insights` | `false` | Insights nav/footer links, home teaser, `/insights` routes, RSS, sitemap entries |
| `secureContact` | `true` | Signal / PGP "Secure introductions" block on Contact |

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
