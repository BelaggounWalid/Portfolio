// tsx-output/src/components/SectionHeader.tsx
import { ReactNode } from 'react';

interface Props {
  num: string;
  eyebrow: string;
  title: ReactNode;
  align?: 'left' | 'center';
}

export default function SectionHeader({ num, eyebrow, title, align = 'left' }: Props) {
  return (
    <div style={{ textAlign: align, marginBottom: 24 }}>
      <div className="mono" style={{
        fontSize: 11, letterSpacing: '0.25em', color: 'var(--fg-3)',
        display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24,
        justifyContent: align === 'center' ? 'center' : 'flex-start',
      }}>
        <span style={{ color: 'var(--accent)' }}>§ {num}</span>
        <span style={{ width: 40, height: 1, background: 'var(--line)' }} />
        <span>{eyebrow}</span>
      </div>
      <h2 className="display" style={{
        fontSize: 'clamp(56px, 9vw, 140px)', lineHeight: 0.95, letterSpacing: '-0.03em',
      }}>{title}</h2>
    </div>
  );
}
