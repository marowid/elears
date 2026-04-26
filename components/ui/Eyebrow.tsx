type Props = { children: React.ReactNode; tone?: 'default' | 'cyan' | 'crimson' };

export default function Eyebrow({ children, tone = 'default' }: Props) {
  const color =
    tone === 'crimson'
      ? 'text-crimson'
      : tone === 'cyan'
        ? 'text-cyan'
        : 'text-graphite-soft';
  return (
    <p className={`eyebrow ${color}`}>
      <span aria-hidden="true" className="mr-2 inline-block text-crimson">
        ▍
      </span>
      {children}
    </p>
  );
}
