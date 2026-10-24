'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { counterpartPath, other } from '@/lib/i18n';
import { useSections } from '@/lib/route';

export default function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { locale, path, t, sections, index } = useSections();
  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <nav className="nav" aria-label={t.ui.navAria} lang={locale}>
      <Link href={sections[0].href} className="nav-brand">Diana Vitória</Link>
      <div className="nav-right">
        {sections.map((s, i) => (
          <Link key={s.key} href={s.href} className="nav-link" aria-current={i === index ? 'page' : undefined}>
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            {s.label}
          </Link>
        ))}
        <Link
          href={counterpartPath(path)}
          className="lang-btn"
          lang={other(locale)}
          hrefLang={other(locale)}
          aria-label={t.ui.langSwitchLabel}
        >
          {t.ui.langSwitch}
        </Link>
        <button
          type="button"
          className="theme-btn"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label={t.ui.themeToggle}
        >
          <span style={{ fontSize: 14 }} aria-hidden="true">◐</span>
          {isDark ? t.ui.themeLight : t.ui.themeDark}
        </button>
      </div>
    </nav>
  );
}
