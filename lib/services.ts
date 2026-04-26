export const SERVICE_SLUGS = [
  'integrity-due-diligence',
  'geopolitical-risk',
  'cyber-threat-intelligence',
  'investigations',
  'monitorship-compliance',
  'advisory-retainer'
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const SERVICE_CODES: Record<ServiceSlug, string> = {
  'integrity-due-diligence': 'IDD',
  'geopolitical-risk': 'GEO',
  'cyber-threat-intelligence': 'CTI',
  investigations: 'INV',
  'monitorship-compliance': 'MON',
  'advisory-retainer': 'ADV'
};

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}
