// tsx-output/src/hooks/index.ts
import { useEffect, useRef, useState } from 'react';

export function useReveal(threshold = 0.05) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      requestAnimationFrame(() => el.classList.add('in'));
    }
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } }),
      { threshold, rootMargin: '0px 0px -5% 0px' }
    );
    obs.observe(el);
    const t = setTimeout(() => el.classList.add('in'), 1500);
    return () => { obs.disconnect(); clearTimeout(t); };
  }, [threshold]);
  return ref;
}

export function useTypewriter(words: string[], { typeSpeed = 80, eraseSpeed = 40, hold = 1600 } = {}) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'erasing'>('typing');
  useEffect(() => {
    const w = words[idx];
    let timer: ReturnType<typeof setTimeout>;
    if (phase === 'typing') {
      if (text.length < w.length) timer = setTimeout(() => setText(w.slice(0, text.length + 1)), typeSpeed);
      else timer = setTimeout(() => setPhase('erasing'), hold);
    } else {
      if (text.length > 0) timer = setTimeout(() => setText(text.slice(0, -1)), eraseSpeed);
      else { setIdx((idx + 1) % words.length); setPhase('typing'); }
    }
    return () => clearTimeout(timer);
  }, [text, idx, phase, words, typeSpeed, eraseSpeed, hold]);
  return text;
}

export function useParallax(strength = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf: number;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const off = (window.innerHeight / 2 - center) * strength;
        el.style.transform = `translate3d(0, ${off}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, [strength]);
  return ref;
}

export function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? h.scrollTop / total : 0);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return p;
}

export function useClock() {
  const [t, setT] = useState('');
  useEffect(() => {
    const update = () => {
      const d = new Date();
      const opts: Intl.DateTimeFormatOptions = { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', hour12: false };
      setT(new Intl.DateTimeFormat('fr-FR', opts).format(d));
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);
  return t;
}
