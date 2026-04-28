// tsx-output/src/components/Hero.tsx
import { useEffect, useRef, useState, useCallback } from 'react';
import { useReveal, useTypewriter } from '../hooks';
import { projects } from '../data/projects';

export default function Hero() {
  const [showcaseIdx, setShowcaseIdx] = useState(0);
  const ref = useReveal(0.05);
  const subtitle = useTypewriter(
    [
      'Étudiant Master Informatique · Lyon 1',
      'Alternant IA & Automatisation · Ekoalu',
      'Ingénieur IA · Recherche appliquée',
    ],
    { typeSpeed: 55, eraseSpeed: 25, hold: 2200 }
  );

  useEffect(() => {
    const id = setInterval(() => setShowcaseIdx((i) => (i + 1) % projects.length), 3200);
    return () => clearInterval(id);
  }, []);

  const heroRef = useRef<HTMLElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const on = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
    };
    el.addEventListener('mousemove', on);
    return () => el.removeEventListener('mousemove', on);
  }, []);

  const setRefs = useCallback((node: HTMLElement | null) => {
    (ref as { current: HTMLElement | null }).current = node;
    heroRef.current = node;
  }, [ref]);

  const current = projects[showcaseIdx];

  return (
    <section id="home" ref={setRefs} className="reveal" style={{
      minHeight: '100vh', position: 'relative',
      display: 'flex', alignItems: 'center',
      paddingTop: 120, paddingBottom: 60, overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        {projects.map((p, i) => (
          <div key={p.id} style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: i === showcaseIdx ? 0.06 : 0,
            transition: 'opacity 1.4s ease',
          }}>
            <div className="display" style={{
              fontSize: 'clamp(180px, 28vw, 460px)',
              color: p.color, whiteSpace: 'nowrap',
              transform: `translate(${(mouse.x - 0.5) * -30}px, ${(mouse.y - 0.5) * -20}px)`,
              transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}>{p.title}</div>
          </div>
        ))}
      </div>

      <div className="mono hide-mobile" style={{
        position: 'absolute', left: 'clamp(20px, 4vw, 48px)', top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center',
        fontSize: 10, letterSpacing: '0.4em', color: 'var(--fg-3)', whiteSpace: 'nowrap',
      }}>
        ◆ DISPONIBLE 2026 — IA · DEV WEB · RECHERCHE
      </div>

      <div className="container-edit" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
          <div className="label">
            <span style={{ color: 'var(--accent)' }}>●</span> Portfolio · 2026 / Édition I
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', maxWidth: 260, lineHeight: 1.6 }}>
            N° 001 — <span style={{ color: 'var(--fg-2)' }}>Anis Walid Belaggoun</span>, ingénieur IA basé à Lyon. Recueil de travaux 2023→2026.
          </div>
        </div>

        <h1 style={{
          fontSize: 'clamp(72px, 14vw, 240px)', lineHeight: 0.85,
          fontFamily: 'var(--serif)', fontWeight: 400, letterSpacing: '-0.04em',
        }}>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span className="hero-line" style={{ display: 'inline-block' }}>Anis</span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span className="hero-line delay" style={{ display: 'inline-block', fontStyle: 'italic', color: 'var(--accent)' }}>
              Belaggoun<span style={{ color: 'var(--fg)' }}>.</span>
            </span>
          </span>
        </h1>

        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24, alignItems: 'end' }}>
          <div style={{ gridColumn: 'span 7' }}>
            <div className="mono" style={{ fontSize: 12, color: 'var(--fg-2)', minHeight: 24, marginBottom: 16 }}>
              <span style={{ color: 'var(--accent)' }}>$</span> {subtitle}<span className="caret">▌</span>
            </div>
            <p style={{ fontSize: 'clamp(18px, 1.6vw, 22px)', lineHeight: 1.5, color: 'var(--fg-2)', maxWidth: 580, fontFamily: 'var(--sans)' }}>
              Je conçois des systèmes <em className="display-italic" style={{ color: 'var(--fg)' }}>intelligents</em> à la croisée de l'IA, du web et de la recherche appliquée — du Graph RAG industriel aux simulations physiques.
            </p>
          </div>

          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16 }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <a href="/CV_Anis.pdf" download className="btn btn-primary"><span>↓ CV</span></a>
              <a href="#contact" className="btn"><span>Me contacter →</span></a>
            </div>
            <div style={{
              borderTop: '1px solid var(--line-soft)', paddingTop: 16,
              width: '100%', maxWidth: 320,
              display: 'flex', flexDirection: 'column', gap: 6, textAlign: 'right',
            }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.2em' }}>
                NOW SHOWCASING / {current.num}
              </div>
              <div key={current.id} className="display" style={{ fontSize: 22, color: 'var(--fg)', animation: 'fadeUp 0.6s ease' }}>
                {current.title}
              </div>
              <div className="mono" style={{ fontSize: 11, color: current.color }}>
                ── {current.role}
              </div>
            </div>
          </div>
        </div>

        <div className="mono" style={{
          position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)',
          fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.3em', textAlign: 'center',
        }}>
          <div style={{ marginBottom: 8 }}>SCROLL</div>
          <div style={{
            width: 1, height: 32,
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            margin: '0 auto', animation: 'scrollHint 2s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
}
