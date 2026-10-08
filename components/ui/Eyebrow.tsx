type Props = { children: React.ReactNode; tone?: 'default' | 'signal' | 'accent' };

export default function Eyebrow({ children, tone = 'default' }: Props) {
  const color =
    tone === 'accent'
      ? 'text-accent'
      : tone === 'signal'
        ? 'text-signal'
        : 'text-graphite-soft';
  return (
    <p className={`eyebrow ${color}`}>
      <span aria-hidden="true" className={`mr-2 inline-block ${tone === 'signal' ? 'text-signal' : 'text-accent'}`}>
        ▍
      </span>
      {children}
    </p>
  );
}
