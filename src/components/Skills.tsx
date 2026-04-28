// tsx-output/src/components/Skills.tsx
import { ReactNode } from 'react';
import { useReveal } from '../hooks';
import { skillCategories, languages } from '../data/skills';
import SectionHeader from './SectionHeader';

const Tag = ({ children }: { children: ReactNode }) => (
  <span className="mono" style={{
    fontSize: 11, padding: '6px 12px',
    border: '1px solid var(--line)', color: 'var(--fg-2)',
    transition: 'all 0.3s ease',
  }}>{children}</span>
);

export default function Skills() {
  const ref = useReveal(0.1);
  return (
    <section id="skills" ref={ref as React.RefObject<HTMLElement>} className="reveal" style={{ padding: '160px 0 120px' }}>
      <div className="container-edit">
        <SectionHeader num="04" eyebrow="Stack & outils" title={<>Ce avec quoi je <em className="display-italic" style={{ color: 'var(--accent)' }}>construis</em>.</>} />

        <div style={{
          marginTop: 80,
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0,
          borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)',
        }}>
          {skillCategories.map((cat, i) => (
            <div key={cat.id} className="skill-cell" style={{
              padding: 32, borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
              minHeight: 280, position: 'relative', overflow: 'hidden',
            }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', marginBottom: 24 }}>/0{i + 1}</div>
              <h3 className="display" style={{ fontSize: 28, marginBottom: 24, lineHeight: 1.1 }}>{cat.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {cat.items.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
          ))}
          <div style={{ padding: 32, borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', minHeight: 280 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', marginBottom: 24 }}>/05</div>
            <h3 className="display" style={{ fontSize: 28, marginBottom: 24, lineHeight: 1.1 }}>Langues</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {languages.map((l) => (
                <div key={l.name}>
                  <div className="display" style={{ fontSize: 22, color: 'var(--accent)' }}>{l.name}</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', marginTop: 2 }}>{l.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
