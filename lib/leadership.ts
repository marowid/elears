/* Leadership roster. Names and companies are language-neutral; role titles
   and bios live in messages under about.leadership.<key>.
   `photo` is a path under /public (e.g. '/team/max.jpg'); portraits are shown
   greyscale. Cards fall back to a placeholder until a photo is set. */
type Leader = {
  key: 'ceo' | 'intelligence' | 'investigations' | 'cyber';
  name: string;
  companies: readonly string[];
  photo?: string;
};

export const LEADERSHIP: readonly Leader[] = [
  { key: 'ceo', name: 'Max', companies: ['Intel', 'RADMOR', 'BRIDGE foundation'] },
  { key: 'intelligence', name: 'Maciej', companies: ['Palantir', 'Dell', 'Canonical'] },
  { key: 'investigations', name: 'Maciej', companies: ['CVS Health', 'Dell'] },
  { key: 'cyber', name: 'Bartłomiej', companies: ['Dell', 'Canonical', 'Credit Suisse'] }
];

export type LeadershipKey = Leader['key'];
