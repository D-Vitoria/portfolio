'use client';
import { useEffect, useRef, useState } from 'react';

/** Marca o bloco com a classe `in` quando ele entra na tela (dispara as animações de entrada). */
export default function InView({ className = '', children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} className={`${className}${on ? ' in' : ''}`}>{children}</div>;
}
