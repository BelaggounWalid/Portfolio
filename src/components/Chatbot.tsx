import { useEffect, useRef, useState } from 'react';

interface Msg { text: string; isBot: boolean; }

const THREAD_KEY = 'chatbot-thread-id';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { text: "Bonjour. Posez-moi des questions sur le parcours, les compétences ou les projets d'Anis.", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(THREAD_KEY);
  });
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollTo({ top: 99999 });
  }, [messages]);

  async function send() {
    if (!input.trim() || loading) return;
    const q = input;
    setMessages((m) => [...m, { text: q, isBot: false }, { text: '', isBot: true }]);
    setInput('');
    setLoading(true);

    const appendToken = (token: string) => {
      setMessages((m) => {
        const last = m[m.length - 1];
        return [...m.slice(0, -1), { ...last, text: last.text + token }];
      });
    };

    const replaceLast = (text: string) => {
      setMessages((m) => [...m.slice(0, -1), { text, isBot: true }]);
    };

    try {
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q, threadId }),
      });

      if (!res.body) {
        replaceLast('Désolé, pas de réponse.');
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const events = buffer.split('\n\n');
        buffer = events.pop() ?? '';

        for (const block of events) {
          const lines = block.split('\n');
          let eventName = 'message';
          let dataStr = '';
          for (const line of lines) {
            if (line.startsWith('event: ')) eventName = line.slice(7);
            else if (line.startsWith('data: ')) dataStr = line.slice(6);
          }
          if (!dataStr) continue;

          let data: { threadId?: string; token?: string; error?: string };
          try {
            data = JSON.parse(dataStr);
          } catch {
            continue;
          }

          if (eventName === 'thread' && data.threadId) {
            if (data.threadId !== threadId) {
              setThreadId(data.threadId);
              localStorage.setItem(THREAD_KEY, data.threadId);
            }
          } else if (eventName === 'token' && data.token) {
            appendToken(data.token);
          } else if (eventName === 'error') {
            replaceLast(data.error ?? "Désolé, une erreur s'est produite.");
          }
        }
      }
    } catch {
      replaceLast("Désolé, une erreur s'est produite.");
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
