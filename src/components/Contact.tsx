// tsx-output/src/components/Contact.tsx
import { useReveal } from '../hooks';

interface LinkProps { label: string; handle: string; href: string; download?: boolean; }

const ContactLink = ({ label, handle, href, download }: LinkProps) => (
  <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" download={download}
    style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '14px 0', borderBottom: '1px solid var(--line-soft)',
      textDecoration: 'none', color: 'var(--fg)',
      transition: 'padding 0.4s, color 0.4s',
    }}>
    <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{label}</span>
    <span className="mono" style={{ fontSize: 14 }}>{handle} <span style={{ marginLeft: 8 }}>→</span></span>
  </a>
);

export default function Contact() {
  const ref = useReveal(0.1);
  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="reveal" style={{ padding: '160px 0 80px', position: 'relative' }}>
      <div className="container-edit">
        <div className="label" style={{ marginBottom: 32 }}>
          <span style={{ color: 'var(--accent)' }}>§ 05</span> · Contact
        </div>

        <h2 className="display" style={{ fontSize: 'clamp(64px, 12vw, 200px)', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: 64 }}>
          Discutons<br/>
          <em className="display-italic" style={{ color: 'var(--accent)' }}>d'un projet</em>.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 32, alignItems: 'flex-end', borderTop: '1px solid var(--line)', paddingTop: 48 }}>
          <div style={{ gridColumn: 'span 7' }}>
            <a href="mailto:aniswalidbelaggoun@gmail.com" className="display" style={{
              fontSize: 'clamp(28px, 4vw, 56px)', color: 'var(--fg)',
              textDecoration: 'none', display: 'inline-block', position: 'relative', lineHeight: 1.1,
            }}>
              aniswalidbelaggoun<span style={{ color: 'var(--accent)' }}>@</span>gmail.com
              <span className="contact-arrow" style={{ display: 'inline-block', marginLeft: 16 }}>↗</span>
            </a>
          </div>
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <ContactLink label="GitHub" handle="@BelaggounWalid" href="https://github.com/BelaggounWalid" />
            <ContactLink label="LinkedIn" handle="anis-belaggoun" href="https://www.linkedin.com/in/anis-belaggoun-1aa4a72a4/" />
            <ContactLink label="CV (PDF)" handle="↓ Télécharger" href="/CV_Anis.pdf" download />
          </div>
        </div>

        <div style={{ marginTop: 120, borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', overflow: 'hidden', padding: '24px 0' }}>
          <div style={{ display: 'flex', gap: 64, animation: 'marquee 40s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
            {Array.from({ length: 4 }).flatMap((_, k) => (
              ['Disponible 2026', 'IA · Automatisation', 'Web Engineering', 'RAG · Graph · LLM', 'Recherche appliquée', 'Lyon · France'].map((t, i) => (
                <span key={`${k}-${i}`} className="display" style={{ fontSize: 48, color: i % 2 === 0 ? 'var(--fg)' : 'var(--accent)' }}>
                  {t} <span style={{ color: 'var(--fg-3)', margin: '0 32px' }}>◆</span>
                </span>
              ))
            ))}
          </div>
        </div>

        <footer style={{ marginTop: 64, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 11 }} className="mono">
          <span style={{ color: 'var(--fg-3)' }}>© 2026 Anis Belaggoun — Tous droits réservés.</span>
          <span style={{ color: 'var(--fg-3)' }}>Édition I · v2.0 · Lyon ↔ Avignon ↔ Sidi Bel Abbès</span>
          <a href="#home" style={{ color: 'var(--accent)', textDecoration: 'none' }}>↑ Retour en haut</a>
        </footer>
      </div>
    </section>
  );
}
