/* Feature switches. Flip a flag to re-enable a hidden section; every link,
   route, sitemap entry and feed for that section reads from here. */
export const FEATURES = {
  /** Insights (blog): nav + footer links, home teaser, /insights routes, RSS, sitemap. */
  insights: false,
  /** Polish locale: /pl routes, language switcher, hreflang. Off = English only; /pl/* redirects to /en/*. */
  polish: false,
  /** Contact page "Secure introductions" block (Signal / PGP). */
  secureContact: false
} as const;
