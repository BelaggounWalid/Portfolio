// tsx-output/src/components/About.tsx
import { useReveal, useParallax } from '../hooks';
import SectionHeader from './SectionHeader';

interface FactProps { label: string; value: string; sub: string; }
const FactBlock = ({ label, value, sub }: FactProps) => (
  <div>
    <div className="label" style={{ marginBottom: 8 }}>{label}</div>
    <div className="display" style={{ fontSize: 28, marginBottom: 4 }}>{value}</div>
    <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)' }}>{sub}</div>
  </div>
);

export default function About() {
  const ref = useReveal(0.1);
  const imgRef = useParallax(0.1);

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="reveal" style={{ padding: '160px 0 120px', position: 'relative' }}>
      <div className="container-edit">
        <SectionHeader num="01" eyebrow="À propos" title={<>Ingénieur, <em className="display-italic" style={{ color: 'var(--accent)' }}>chercheur</em>,<br/>étudiant.</>} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 32, marginTop: 100, alignItems: 'flex-start' }}>
          <div style={{ gridColumn: 'span 5' }}>
            <div ref={imgRef} style={{ aspectRatio: '4 / 5', overflow: 'hidden', position: 'relative', border: '1px solid var(--line)' }}>
              <img src="/anis-portrait.png" alt="Anis Belaggoun" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, oklch(0.18 0.030 40 / 0.3))' }} />
              <div className="mono" style={{ position: 'absolute', bottom: 16, left: 16, fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg)' }}>
                ◆ ANIS BELAGGOUN — LYON, 2026
              </div>
            </div>
          </div>

          <div style={{ gridColumn: 'span 7', paddingLeft: 'clamp(0px, 4vw, 64px)' }}>
            <p style={{ fontSize: 'clamp(20px, 1.8vw, 26px)', lineHeight: 1.5, color: 'var(--fg)', marginBottom: 32 }}>
              <em className="display-italic" style={{ fontSize: '1.3em' }}>22 ans</em>, étudiant en Master Informatique à <span style={{ color: 'var(--accent)' }}>Lyon&nbsp;1</span>, en alternance chez Ekoalu sur l'IA & l'automatisation industrielle.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--fg-2)', marginBottom: 24 }}>
              Mon travail se concentre sur la mise en production de systèmes RAG, l'industrialisation de pipelines d'IA et la conception d'architectures LLM pour des cas d'usage métier. En parallèle, je poursuis des travaux de recherche en inférence bayésienne — Approximate Bayesian Computation appliquée aux processus de Hawkes.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--fg-2)' }}>
              Approche fondée sur la rigueur scientifique, la qualité d'ingénierie et la livraison rapide de solutions opérationnelles.
            </p>

            <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, borderTop: '1px solid var(--line)', paddingTop: 32 }}>
              <FactBlock label="Localisation" value="Villeurbanne" sub="69100, France" />
              <FactBlock label="Statut" value="En alternance" sub="Disponible 2026" />
              <FactBlock label="Anglais" value="C2" sub="Certifié LanguageCert" />
              <FactBlock label="Stack focus" value="IA · RAG · Web" sub="Python · TypeScript" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
