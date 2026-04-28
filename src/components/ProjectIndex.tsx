// tsx-output/src/components/ProjectIndex.tsx
import { useRef, useState } from 'react';
import { useReveal } from '../hooks';
import { projects } from '../data/projects';
import SectionHeader from './SectionHeader';

export default function ProjectIndex() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useReveal(0.1);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <section id="work" ref={ref as React.RefObject<HTMLElement>} className="reveal" style={{ padding: '160px 0 120px', position: 'relative' }}>
      <div className="container-edit">
        <SectionHeader num="02" eyebrow="Selected Work" title={<>Projets <em className="display-italic" style={{ color: 'var(--accent)' }}>récents</em></>} />

        <div ref={containerRef} onMouseMove={onMouseMove} onMouseLeave={() => setHoverIdx(null)} style={{ position: 'relative', marginTop: 80, borderTop: '1px solid var(--line)' }}>
          {projects.map((p, i) => {
            const primaryLink = p.links[0]?.url;
            return (
              <a key={p.id} href={primaryLink || '#'} target={primaryLink ? '_blank' : undefined} rel="noopener noreferrer"
                onMouseEnter={() => setHoverIdx(i)}
                style={{
                  display: 'grid', gridTemplateColumns: '60px 1fr auto auto', gap: 32,
                  alignItems: 'center', padding: '28px 0',
                  borderBottom: '1px solid var(--line)',
                  textDecoration: 'none', color: 'var(--fg)', position: 'relative',
                  opacity: hoverIdx !== null && hoverIdx !== i ? 0.35 : 1,
                  paddingLeft: hoverIdx === i ? 24 : 0,
                }}
                className="project-row">
                <span className="mono" style={{ fontSize: 12, color: 'var(--fg-3)' }}>/{p.num}</span>
                <div>
                  <div className="display display-title" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: 1, transition: 'color 0.4s' }}>
                    {p.title}
                    {p.status && (
                      <span className="mono" style={{
                        marginLeft: 16, fontSize: 11, padding: '4px 10px',
                        border: '1px solid var(--line)', borderRadius: 999,
                        color: 'var(--accent)', verticalAlign: 'middle',
                      }}>{p.status}</span>
                    )}
                  </div>
                </div>
                <span className="mono hide-mobile" style={{ fontSize: 12, color: 'var(--fg-2)', whiteSpace: 'nowrap' }}>{p.role}</span>
                <span className="mono" style={{ fontSize: 12, color: 'var(--fg-3)' }}>{p.year}</span>
                <span style={{
                  position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                  width: hoverIdx === i ? 12 : 0, height: 2, background: 'var(--accent)',
                  transition: 'width 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                }} />
              </a>
            );
          })}

          {hoverIdx !== null && (
            <div style={{
              position: 'absolute', top: mouse.y - 140, left: mouse.x + 30,
              width: 280, pointerEvents: 'none', zIndex: 10,
              transition: 'top 0.15s ease, left 0.15s ease',
            }}>
              <div style={{
                aspectRatio: '4 / 3', background: projects[hoverIdx].color,
                position: 'relative', overflow: 'hidden', border: '1px solid var(--line)',
                animation: 'previewIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'radial-gradient(circle at 30% 30%, transparent, oklch(0.18 0.030 40 / 0.4))',
                }}>
                  <span className="display" style={{ fontSize: 80, color: 'oklch(0.97 0.012 75)', opacity: 0.5 }}>
                    {projects[hoverIdx].num}
                  </span>
                </div>
                <div className="mono" style={{
                  position: 'absolute', bottom: 12, left: 12, right: 12,
                  fontSize: 10, color: 'oklch(0.97 0.012 75)', letterSpacing: '0.15em',
                  display: 'flex', justifyContent: 'space-between',
                }}>
                  <span>{projects[hoverIdx].tags.slice(0, 3).join(' · ')}</span>
                  <span>↗</span>
                </div>
              </div>
              <p className="mono" style={{ marginTop: 10, fontSize: 11, color: 'var(--fg-2)', lineHeight: 1.5 }}>
                {projects[hoverIdx].description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
