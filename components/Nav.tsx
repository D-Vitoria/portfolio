'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useSection } from '@/lib/sections';

export default function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { sections, index } = useSection();
  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <nav className="nav" aria-label="Navegação principal">
      <Link href="/" className="nav-brand">Diana Vitória</Link>
      <div className="nav-right">
        {sections.map((s, i) => (
          <Link key={s.href} href={s.href} className="nav-link" aria-current={i === index ? 'page' : undefined}>
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            {s.label}
          </Link>
        ))}
        <button
          type="button"
          className="theme-btn"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label="Alternar modo escuro"
        >
          <span style={{ fontSize: 14 }} aria-hidden="true">◐</span>
          {mounted ? (isDark ? 'Claro' : 'Escuro') : 'Escuro'}
        </button>
      </div>
    </nav>
  );
}
