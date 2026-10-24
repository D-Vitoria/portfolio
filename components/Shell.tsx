'use client';
import { useEffect } from 'react';
import { content } from '@/lib/content';
import type { RouteKey } from '@/lib/i18n';
import { useRoute } from '@/lib/route';

/** Cada página da revista tem um tom próprio do vermelho (ver [data-tone] em globals.css). */
const tones: Record<RouteKey, string> = {
  home: 'home',
  about: 'about',
  services: 'about',
  certs: 'about',
  projects: 'projects',
  contact: 'contact',
};

export default function Shell({ children }: { children: React.ReactNode }) {
  const { locale, key } = useRoute();

  useEffect(() => {
    document.documentElement.lang = content[locale].htmlLang;
  }, [locale]);

  return (
    <div className="shell" data-tone={key ? tones[key] : 'home'}>
      {children}
    </div>
  );
}
