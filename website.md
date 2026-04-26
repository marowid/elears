Website Build Brief — Elears (Lisowczycy)

Instructions for a coding agent (Claude Code, Cursor, or similar) to build the public-facing website for Elears, a Wrocław-headquartered AI-first private intelligence company. Read this entire document before writing any code. Where decisions are not specified, prefer the option that best supports a serious, sovereign, B2B/government-facing brand.


1. Project summary
Build a bilingual (Polish / English) marketing website for Elears — a Wrocław-based private intelligence firm. The site is a brochure + research-publishing site, not a web app. It must communicate credibility to three audiences: Polish government and NATO defence buyers, global law firms and corporates, and Polish/CEE enterprises.
The site is the front door of the firm. Visitors include defence procurement officers, general counsel at multinationals, compliance heads, and senior journalists. It must feel sober, sovereign, technically competent, and quietly confident — never flashy, never "startup-y", never gimmicky.

2. Brand basics
Name and meaning

Legal / commercial name: Elears
Polish translation / heritage reference: Lisowczycy — the elite 17th-century Polish-Lithuanian light cavalry, famed for cross-border reconnaissance, speed, autonomy, and intelligence-gathering for the Crown. The English-rendered "Elears" derives from chorągiew elearska (Hungarian előljáró — "vanguard"), the period name for the same formation.
Why it matters for the brand: the historical Lisowczycy operated across borders, gathered intelligence, and were Polish-led but allied-deployed — the exact positioning of a modern CEE intelligence firm serving NATO and EU clients. Use this heritage subtly — one tasteful reference on the About page, not in every paragraph.

Headquarters
Wrocław, Poland. (Wrocław, not Warsaw — this differs from earlier internal planning documents.) Use placeholder address on the contact page; do not invent a street.
Tagline candidates (pick one for hero, surface others as section subtitles)

"Intelligence from Europe's eastern frontier."
"AI-native intelligence. EU-sovereign. CEE-deep."
"What the West sees next, we see first."

Tone of voice
Sober, precise, understated. Short sentences. Active voice. No emojis. No exclamation marks. No marketing superlatives ("revolutionary", "cutting-edge", "world-class"). When in doubt, write it the way The Economist would.
Visual direction

Palette: deep navy (#0B1B2B) primary, warm off-white (#F4F1EA) background, muted crimson accent (#8B1E2D — a nod to Lisowczycy banner colours), graphite (#2A2D34) text. Avoid bright blues, gradients, and neon.
Typography: a serif for headings (suggested: Source Serif 4 or Spectral), a clean sans for body (suggested: Inter or IBM Plex Sans). Self-host fonts (no Google Fonts CDN — sovereignty signal).
Imagery: abstract cartography, satellite-style topographic textures, monochrome photography of architecture and infrastructure. No stock photos of people in suits shaking hands. No globes wrapped in glowing networks.
Iconography: thin-stroke line icons (Lucide or Phosphor), monochrome only.
Layout: generous whitespace, single column reading width capped at ~720px for prose, 12-col grid for landing sections.


3. Tech stack — required

Framework: Next.js 14+ with App Router, TypeScript, React Server Components by default.
Styling: Tailwind CSS. No CSS-in-JS libraries.
Content for blog/insights: MDX files in /content/insights/{lang}/*.mdx, parsed with next-mdx-remote or the built-in App Router MDX support. No CMS for v1.
i18n: next-intl (preferred) or App Router's built-in [locale] segment routing. Two locales: pl (default) and en. URL pattern: /pl/... and /en/.... Detect browser language on first visit; persist choice in a cookie.
Forms: the contact page uses a mailto: link in v1 — do not add a form-handling backend, reCAPTCHA, or third-party form service. (A real form can come in v2 with proper anti-abuse and GDPR consent flow.)
Analytics: Plausible (self-hostable, no cookies, GDPR-friendly) — include the script tag with a config placeholder. Do not use Google Analytics.
Hosting target: Vercel or Cloudflare Pages. Output should be statically exportable where possible (output: 'export' compatible for marketing pages); dynamic routes only where the blog needs them.
Package manager: pnpm.
Node version: pin via .nvmrc to the current Next.js LTS-aligned Node.

Things explicitly not to install

jQuery, Bootstrap, Material UI, Chakra, or any other component library beyond shadcn/ui (which is fine because it's copy-paste, not a runtime dep).
Heavy animation libraries (Framer Motion is acceptable for subtle fades only — no parallax, no scroll-jacking).
Cookie-consent banners from third-party SaaS (write a minimal in-house banner — see Legal section).


4. Site map
/                                  → Home (locale-redirect)
/{locale}/                         → Home
/{locale}/services                 → Services overview
/{locale}/services/[slug]          → Individual service detail (6 services)
/{locale}/about                    → About + team + ethics
/{locale}/insights                 → Insights index (blog list)
/{locale}/insights/[slug]          → Insights post
/{locale}/contact                  → Contact (email + office location)
/{locale}/legal/privacy            → Privacy policy
/{locale}/legal/terms              → Terms of use
/{locale}/legal/cookies            → Cookie policy
/sitemap.xml                       → Auto-generated
/robots.txt                        → Allow all, point to sitemap
{locale} is pl or en. / (no locale) should 307-redirect to /pl/ (default) unless Accept-Language clearly prefers English.

5. Page-by-page specification
5.1 Home (/{locale}/)
Sections, top to bottom:

Hero — full-bleed muted background (topographic line texture). Tagline as H1, one-sentence sub-headline, two CTAs: "Our services" → /services, "Contact us" → /contact.
What we do (3-up) — three short cards, one per pillar:

Geopolitical & corporate intelligence — CEE, Russia-CIS, sanctions and beneficial-ownership depth.
Cyber threat intelligence — actor and campaign tracking, dark-web monitoring, incident response support.
Investigations & due diligence — fast-turnaround integrity DD, asset tracing, sensitive investigations.


Why Elears (4-up icon row) — EU-sovereign by design / CEE-native, multilingual / AI-first delivery, senior-led judgment / Independent and ethically governed.
Selected insights — three latest posts pulled from the Insights MDX collection (title, date, 1-line excerpt, link).
Footer CTA strip — "Discuss a mandate" → /contact.

5.2 Services overview (/{locale}/services)
Intro paragraph (two sentences max), then a list of six service cards. Each card links to /services/[slug]. Use the six services below as v1 content. Do not publish day-rates or prices on the public site — the internal business model document has indicative ranges; the website should say "Pricing on request — fixed-fee where the brief allows."
The six services (use these slugs and headings)

integrity-due-diligence — Integrity Due Diligence (EDD)

One-paragraph description: pre-transaction and pre-hire integrity checks on individuals and entities across CEE, Russia-CIS, and global jurisdictions. Multilingual native-language sourcing. Typical turnaround: 3–5 business days for standard subjects.


geopolitical-risk — Geopolitical & Country Risk

Market-entry risk, political-cycle analysis, scenario planning, and bespoke country briefings. CEE and Russia-CIS depth; selective MENA-adjacent coverage.


cyber-threat-intelligence — Cyber Threat Intelligence

Threat-actor and campaign tracking, ransomware-group monitoring, dark-web and Russian/Ukrainian-language source coverage, IOC feeds, and pre-incident posture assessment.


investigations — Investigations & Asset Tracing

Sensitive investigations, fraud and corruption matters, sanctions evasion, and asset tracing in support of disputes and recoveries. Delivered in coordination with outside counsel.


monitorship-compliance — Monitorships & Independent Compliance Reviews

Court-, regulator-, or board-mandated monitorships and independent reviews, including post-settlement compliance programmes.


advisory-retainer — CEO & Board Advisory Retainer

Always-on senior advisory to a small number of CEO, Chair, and Minister-level clients on geopolitical, regulatory, and reputational matters.



Each /services/[slug] page follows a consistent template:

H1 = service name
Lead paragraph (3–5 sentences)
"Typical engagements" — 3–5 short bullets describing real use-cases (anonymised)
"How we work" — 3 short steps (Scoping → Delivery → Handover)
"Deliverables" — bulleted list (e.g. structured report, source register, executive briefing)
Inline CTA: "Discuss a mandate" → /contact

5.3 About (/{locale}/about)
Sections:

Who we are — 2 paragraphs. Position as an EU-sovereign, Wrocław-headquartered private intelligence firm combining an AI-native platform with a senior services bench drawn from former intelligence, prosecutorial, diplomatic, and investigative-journalism backgrounds.
Heritage note — one short paragraph explaining the Lisowczycy / Elears name and what it means for the firm. Tasteful, single mention.
Leadership — placeholder cards for 3–5 senior roles (CEO, Head of Intelligence, Head of Cyber, Head of Investigations, General Counsel). Each card has a name placeholder, role, and 2–3 line bio placeholder. Coding agent should leave these as TODO: bio strings — do not invent fictional people or biographies.
Ethics & governance — short statement covering: independence (no contingent fees on outcomes that create legal exposure); refusal of mandates targeting journalists, activists, or whistleblowers; GDPR and EU AI Act alignment; conflicts-of-interest protocol; supervised analyst-in-the-loop on all AI-generated outputs.
Memberships & registrations (placeholder) — leave a row of greyed placeholder logos / line items: KRS no. — TBD, NIP — TBD, ISO 27001 — in progress, Member, ACAMS Poland — TBD. Mark each clearly as TODO.

5.4 Insights (/{locale}/insights and /{locale}/insights/[slug])

Index page: reverse-chronological list of MDX posts. Each list item shows title, date (ISO format, displayed as e.g. "26 April 2026"), 1-line excerpt, primary tag, and reading time.
Post page: title, date, author placeholder, tag chips, prose body (rendered MDX with Tailwind Typography plugin), "More from Elears" 3-up at the bottom.
Seed content: create three placeholder posts per locale so the listing isn't empty. Tag them geopolitics, cyber, investigations. Body content can be 200–300 words of plausible filler — clearly mark each post with a draft: true frontmatter flag and a visible "DRAFT" banner so they don't accidentally get treated as real publications.
RSS: generate /insights/rss.xml per locale.

5.5 Contact (/{locale}/contact)
Single column, calm. No form in v1. Show:

Email: contact@elears.pl (placeholder — confirm before launch). Render as a mailto: link.
Press: press@elears.pl (placeholder).
Careers: careers@elears.pl (placeholder).
Office: "Wrocław, Poland — full address to be confirmed." Embed a static map image of central Wrocław (no interactive third-party map in v1 — avoid Google Maps and its cookies). Use an OpenStreetMap static image or a hand-styled SVG of the city outline.
Secure contact note: one short paragraph saying the firm accepts encrypted introductions; provide a placeholder line for a Signal username and a PGP key fingerprint (TODO).
Response time expectation: "We respond to qualified enquiries within one business day."

Every email and detail on this page must be marked in code with a clearly grep-able comment, e.g. {/* TODO:contact-detail — confirm with founders before launch */}, so a human can find and replace them all in one pass.
5.6 Legal pages (/{locale}/legal/{privacy|terms|cookies})
Generate GDPR-compliant skeleton text with prominent "DRAFT — review by counsel before launch" banners at the top of each page. The coding agent must not present these as final, lawyer-reviewed documents.

Privacy policy: controller identity placeholder, what data is collected (only what Plausible captures, plus mailto exchanges), legal bases (Art. 6(1)(f) legitimate interest for analytics if cookieless, Art. 6(1)(b) for contact correspondence), data retention, user rights under GDPR Art. 15–22, supervisory authority (UODO) and contact.
Terms of use: standard "informational website" terms, no warranties, IP ownership of site content, governing law (Polish), jurisdiction (Wrocław).
Cookie policy: since the site uses Plausible (cookieless) and no third-party trackers, the policy should state this plainly. If any cookie is set (e.g. locale preference), document it.


6. Global components

Header: logotype (left), nav (Services / About / Insights / Contact), language switcher (PL / EN, swaps /pl/ ↔ /en/ preserving path). Sticky on scroll, with a thin underline border.
Footer: four columns — Elears (short tagline + Wrocław), Services (links), Firm (About, Insights, Contact, Careers email), Legal (Privacy, Terms, Cookies). Copyright line: "© {year} Elears sp. z o.o. — Wrocław, Poland."
Cookie banner: a single thin strip at the bottom on first visit, stating that the site uses no tracking cookies and only stores a locale preference. One Acknowledge button. Persist dismissal in localStorage.
404 page: sober, one-line message in both locales, link home.
OpenGraph / metadata: every page exports metadata (Next.js App Router convention) with localised title, description, and a single shared OG image (a dark navy card with the Elears wordmark — generate a simple SVG and rasterise to PNG at build time).


7. Accessibility, performance, SEO

Accessibility target: WCAG 2.2 AA. Run axe against every page in CI. All interactive elements keyboard-navigable. Focus rings preserved (do not strip with outline:none without a replacement).
Performance target: Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO for every public page on mobile. No layout shift. No unused JS on marketing pages — use Server Components.
SEO: unique <title> and meta description per page, per locale. <link rel="alternate" hreflang> between PL and EN versions. Auto-generated sitemap.xml. Structured data (Organization JSON-LD on home, Article JSON-LD on insights posts).
Images: use next/image with width/height set; serve AVIF where supported.


8. Repository structure
/elears-website
├── README.md
├── .nvmrc
├── package.json
├── pnpm-lock.yaml
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── /app
│   ├── /[locale]
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # home
│   │   ├── /services
│   │   ├── /about
│   │   ├── /insights
│   │   ├── /contact
│   │   └── /legal
│   ├── sitemap.ts
│   ├── robots.ts
│   └── opengraph-image.tsx
├── /components
│   ├── /layout                         # header, footer, cookie banner
│   ├── /sections                       # hero, what-we-do, why-elears, etc.
│   └── /ui                             # button, card, link, prose
├── /content
│   └── /insights
│       ├── /pl/*.mdx
│       └── /en/*.mdx
├── /messages
│   ├── pl.json                         # next-intl strings
│   └── en.json
├── /public
│   ├── /fonts                          # self-hosted font files
│   ├── /img
│   └── favicon files
└── /docs
    └── content-todo.md                 # running list of TODO/placeholder items
The docs/content-todo.md file is mandatory — every placeholder, every TODO, every "confirm before launch" item must be listed there with a file path and line number, so a non-engineer founder can do a single pre-launch sweep.

9. Build, test, deploy

Scripts in package.json:

dev — next dev
build — next build
start — next start
lint — next lint && tsc --noEmit
format — prettier -w .
test:a11y — runs @axe-core/cli against the built static output


CI (GitHub Actions, single workflow file): install pnpm, install deps, lint, typecheck, build, run test:a11y. Block merge on any failure.
Deploy: include a one-page DEPLOY.md with step-by-step instructions for Vercel and Cloudflare Pages. Do not commit any deploy tokens.


10. Content the agent should and should not write
Do write:

Service descriptions following the briefs in section 5.2.
Localised UI strings (nav labels, CTAs, footer, etc.) in both PL and EN.
Skeleton legal text marked as DRAFT.
Three short placeholder insights posts per locale, each clearly marked DRAFT.
The About page section text except leadership bios.

Do not write:

Fictional names or biographies for leadership. Leave TODO: bio placeholders.
Fictional client names, case studies, or testimonials.
Fictional registration numbers (KRS, NIP, REGON) or certifications — leave as TBD.
A real street address. Use "Wrocław, Poland — full address to be confirmed."
Pricing figures, day rates, or revenue claims.
Any reference to specific Polish or allied government agencies as customers.


11. Pre-launch checklist (for the founder, generated by the agent into docs/content-todo.md)
The agent must populate docs/content-todo.md with a checklist that includes at minimum:

 Replace all contact@, press@, careers@ email placeholders.
 Replace Wrocław office address placeholder with the real street address.
 Add Signal username and PGP fingerprint, or remove the secure-contact section.
 Replace KRS / NIP / REGON / certification placeholders on About page.
 Replace leadership name/bio placeholders or remove leadership section.
 Have a Polish-qualified lawyer review the three legal pages and remove the DRAFT banners.
 Decide whether the three placeholder Insights posts are deleted or replaced with real publications before launch.
 Confirm Plausible domain and add the script data-domain value.
 Verify hreflang tags resolve correctly on every page.
 Run final Lighthouse and axe sweeps on the production URL.


12. Out of scope for v1 (note explicitly in the README)

Authenticated client portal.
Newsletter signup form (planned for v2 once an ESP is selected).
Real contact form with backend handling.
Public platform / product login.
Careers ATS integration (careers email link only in v1).
Any animations beyond subtle fade-in on section reveal.


13. Definition of done
The agent's work is complete when:

pnpm install && pnpm build succeeds with zero errors and zero warnings.
pnpm lint passes.
pnpm test:a11y reports no AA violations on any page in either locale.
Lighthouse on mobile ≥ 95 across all four categories on home, services overview, one service detail, contact, and one insights post — in both locales.
Every page renders correctly at 360px, 768px, 1024px, and 1440px widths.
Language switcher round-trips between every page in both locales without 404s.
docs/content-todo.md exists and is populated per section 11.
README.md documents local dev, build, deploy, and how to add a new Insights post.


End of brief. Hand this file to the coding agent in full as the initial prompt; do not paraphrase.