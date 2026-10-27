type Props = {
  children: React.ReactNode;
  tone?: 'default' | 'accent' | 'on-navy';
  /** Render as a heading when the label titles a section. */
  as?: 'p' | 'h2' | 'h3';
  className?: string;
};

export default function Eyebrow({
  children,
  tone = 'default',
  as: Tag = 'p',
  className = ''
}: Props) {
  const color =
    tone === 'accent' ? 'text-accent' : tone === 'on-navy' ? 'text-on-navy-mute' : 'text-mute';
  return <Tag className={`eyebrow ${color} ${className}`}>{children}</Tag>;
}
