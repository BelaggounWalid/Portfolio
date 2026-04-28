// tsx-output/src/components/Nav.tsx
import { useEffect, useState } from 'react';
import { useScrollProgress, useClock } from '../hooks';
import { navItems } from '../data/navigation';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const progress = useScrollProgress();
  const time = useClock();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.4 }
    );
    document.querySelectorAll('section[id]').forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '20px clamp(20px, 4vw, 64px)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        backdropFilter: scrolled ? 'blur(20px) saturate(150%)' : 'none',
        background: scrolled ? 'oklch(0.97 0.012 75 / 0.75)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--line-soft)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        <a href="#home" className="magnetic" style={{ display: 'flex', alignItems: 'baseline', gap: 10, textDecoration: 'none', color: 'var(--fg)' }}>
          <span className="display" style={{ fontSize: 28, fontStyle: 'italic' }}>A</span>
          <span className="display" style={{ fontSize: 28 }}>B</span>
          <span className="mono" style={{ fontSize: 10, color: 'var(--fg-3)', marginLeft: 6 }}>©2026</span>
        </a>

        <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="hide-mobile">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="mono nav-link" style={{
              fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em',
              padding: '10px 16px',
              color: active === item.id ? 'var(--accent)' : 'var(--fg-2)',
              textDecoration: 'none', position: 'relative', transition: 'color 0.3s ease',
            }}>
              <span style={{ opacity: 0.5, marginRight: 6 }}>{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mono hide-mobile" style={{ fontSize: 11, color: 'var(--fg-3)', display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--accent)', boxShadow: '0 0 12px var(--accent)',
            animation: 'pulse-dot 2s ease-in-out infinite',
          }} />
          <span>LYON · {time}</span>
        </div>
      </header>

      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 101, pointerEvents: 'none' }}>
        <div style={{ height: '100%', width: `${progress * 100}%`, background: 'var(--accent)', transition: 'width 0.1s linear' }} />
      </div>
    </>
  );
}
