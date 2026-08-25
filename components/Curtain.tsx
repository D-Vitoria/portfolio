'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const exitDirs = ['c-xl', 'c-xr', 'c-xt', 'c-xb'] as const;
const rand = (arr: readonly string[]) => arr[Math.floor(Math.random() * arr.length)];

function clearCurtain(el: HTMLElement) {
  el.className = '';
}

export default function Curtain() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    const el = ref.current;
    if (!el) return;
    el.className = rand(exitDirs);
    const t = setTimeout(() => clearCurtain(el), 500);
    return () => clearTimeout(t);
  }, [pathname]);

  // Safety: if curtain gets stuck for any reason, clear it after 1.5s
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = setInterval(() => {
      if (el.className && !el.className.includes('c-x')) {
        // Stuck in enter state — force exit
        el.className = rand(exitDirs);
        setTimeout(() => clearCurtain(el), 500);
      }
    }, 1500);
    return () => clearInterval(check);
  }, []);

  return <div ref={ref} id="curtain" aria-hidden="true" />;
}
