// tsx-output/src/components/Experience.tsx
import { ReactNode } from 'react';
import { useReveal } from '../hooks';
import { experienceEntries } from '../data/experience';
import { educationEntries } from '../data/education';
import SectionHeader from './SectionHeader';

const Tag = ({ children }: { children: ReactNode }) => (
  <span className="mono" style={{
    fontSize: 11, padding: '6px 12px',
    border: '1px solid var(--line)', color: 'var(--fg-2)',
    transition: 'all 0.3s ease',
  }}>{children}</span>
);

export default function Experience() {
  const ref = useReveal(0.1);
  return (
    <section id="experience" ref={ref as React.RefObject<HTMLElement>} className="reveal" style={{ padding: '160px 0 120px' }}>
      <div className="container-edit">
        <SectionHeader num="03" eyebrow="Parcours" title={<>Où j'ai <em className="display-italic" style={{ color: 'var(--accent)' }}>travaillé</em>.</>} />

        <div style={{ marginTop: 80, borderTop: '1px solid var(--line)' }}>
          {experienceEntries.map((e, i) => (
            <div key={e.id} className="exp-row" style={{
              display: 'grid', gridTemplateColumns: '180px 1fr', gap: 48,
              padding: '40px 0', borderBottom: '1px solid var(--line)', alignItems: 'flex-start',
            }}>
              <div className="mono" style={{ fontSize: 12, color: 'var(--fg-3)', paddingTop: 8 }}>
                <div style={{ color: 'var(--accent)' }}>● {String(i + 1).padStart(2, '0')}</div>
                <div style={{ marginTop: 8 }}>{e.period}</div>
                <div style={{ marginTop: 4 }}>{e.location}</div>
              </div>
              <div>
                <h3 className="display" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05, marginBottom: 8 }}>
                  {e.title}
                </h3>
                <div className="mono" style={{ fontSize: 14, color: 'var(--fg-2)', marginBottom: 20 }}>
                  ↳ {e.company}
                </div>
                <p style={{ fontSize: 18, color: 'var(--fg-2)', lineHeight: 1.6, marginBottom: 24, maxWidth: 720 }}>
                  {e.description}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24, paddingLeft: 0 }}>
                  {e.achievements.map((a, j) => (
                    <li key={j} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.6 }}>
                      <span className="mono" style={{ color: 'var(--accent)', fontSize: 12, paddingTop: 4 }}>—</span>
                      {a}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {e.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 120 }}>
          <div className="label" style={{ marginBottom: 32 }}>
            <span style={{ color: 'var(--accent)' }}>●</span> Formation académique
          </div>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {educationEntries.map((ed, i) => (
              <div key={ed.id} style={{
                display: 'grid', gridTemplateColumns: '60px 140px 1fr 1fr 60px',
                gap: 24, alignItems: 'center', padding: '24px 0',
                borderBottom: '1px solid var(--line)',
              }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)' }}>/0{i + 1}</span>
                <span className="mono" style={{ fontSize: 12, color: 'var(--fg-2)' }}>{ed.period}</span>
                <span className="display" style={{ fontSize: 24 }}>{ed.title}</span>
                <span className="mono" style={{ fontSize: 12, color: 'var(--fg-3)' }}>{ed.institution}</span>
                <span style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--line-soft)' }}>
                  {ed.logo && (
                    <img
                      src={ed.logo}
                      alt=""
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentNode as HTMLElement;
                        const initials = ed.institution.split(' ').map((w) => w[0]).join('').slice(0, 3).toUpperCase();
                        parent.innerHTML = `<span class='mono' style='font-size:9px;color:var(--fg-3)'>${initials}</span>`;
                      }}
                      style={{ maxWidth: '70%', maxHeight: '70%', opacity: 0.85 }}
                    />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
