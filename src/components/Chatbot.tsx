import { useEffect, useRef, useState } from 'react';

interface Msg { text: string; isBot: boolean; }

const SYSTEM_PROMPT = "Tu es l'assistant d'Anis Belaggoun (Ingénieur IA, étudiant Master Info Lyon 1, alternant Ekoalu, basé à Villeurbanne). Réponds en français, professionnel mais chaleureux.";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { text: "Bonjour. Posez-moi des questions sur le parcours, les compétences ou les projets d'Anis.", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollTo({ top: 99999 });
  }, [messages]);

  async function send() {
    if (!input.trim() || loading) return;
    const q = input;
    setMessages((m) => [...m, { text: q, isBot: false }]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: q },
          ],
        }),
      });
      const data = await res.json();
      const reply = data?.choices?.[0]?.message?.content ?? data?.error ?? "Désolé, pas de réponse.";
      setMessages((m) => [...m, { text: reply, isBot: true }]);
    } catch {
      setMessages((m) => [...m, { text: "Désolé, une erreur s'est produite.", isBot: true }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button onClick={() => setOpen(true)} style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 90,
        width: 56, height: 56, borderRadius: '50%',
        background: 'var(--accent)', border: 'none', cursor: 'pointer',
        display: open ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'chatPulse 2.4s ease-in-out infinite',
      }}>
        <span style={{ fontSize: 22, color: 'var(--bg)' }}>✦</span>
      </button>

      {open && (
        <div style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 91,
          width: 380, maxWidth: 'calc(100vw - 32px)',
          height: 520, maxHeight: 'calc(100vh - 48px)',
          background: 'var(--bg-2)', border: '1px solid var(--line)',
          display: 'flex', flexDirection: 'column',
          animation: 'chatIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.2em' }}>● ASSISTANT</div>
              <div className="display" style={{ fontSize: 20 }}>Demande à Anis</div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--fg-2)', cursor: 'pointer', fontSize: 18, padding: 4 }}>×</button>
          </div>

          <div ref={endRef} style={{ flex: 1, overflowY: 'auto', padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.isBot ? 'flex-start' : 'flex-end',
                maxWidth: '85%', padding: '10px 14px',
                background: m.isBot ? 'transparent' : 'var(--accent)',
                color: m.isBot ? 'var(--fg)' : 'var(--bg)',
                border: m.isBot ? '1px solid var(--line)' : 'none',
                fontSize: 14, lineHeight: 1.5,
              }}>{m.text}</div>
            ))}
            {loading && <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)' }}>...</div>}
          </div>

          <div style={{ padding: 16, borderTop: '1px solid var(--line)', display: 'flex', gap: 8 }}>
            <input value={input} onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Pose une question…"
              className="mono"
              style={{ flex: 1, padding: '10px 12px', background: 'var(--bg)', border: '1px solid var(--line)', color: 'var(--fg)', fontSize: 13, outline: 'none' }} />
            <button onClick={send} disabled={loading} className="mono" style={{
              padding: '10px 16px', background: 'var(--accent)', color: 'var(--bg)',
              border: 'none', cursor: 'pointer', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
            }}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
