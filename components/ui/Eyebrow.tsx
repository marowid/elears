type Props = {
  children: React.ReactNode;
  tone?: 'default' | 'signal' | 'accent';
  /** Render as a heading when the label titles a section. */
  as?: 'p' | 'h2' | 'h3';
};

export default function Eyebrow({ children, tone = 'default', as: Tag = 'p' }: Props) {
  const color =
    tone === 'accent' ? 'text-accent' : tone === 'signal' ? 'text-signal' : 'text-graphite-soft';
  return (
    <Tag className={`eyebrow ${color}`}>
      <span
        aria-hidden="true"
        className={`mr-2 inline-block ${tone === 'signal' ? 'text-signal' : 'text-accent'}`}
      >
        ▍
      </span>
      {children}
    </Tag>
  );
}
