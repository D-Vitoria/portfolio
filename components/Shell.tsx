'use client';
import { useEffect, useRef } from 'react';
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
  print: 'home',
};

/** Posição de cada página na revista, para saber se a virada é para a frente ou para trás. */
const rank: Record<RouteKey, number> = {
  home: 0,
  about: 1,
  services: 1.2,
  certs: 1.4,
  projects: 2,
  contact: 3,
  print: 4,
};

export default function Shell({ children }: { children: React.ReactNode }) {
  const { locale, key } = useRoute();
  const current = key ? rank[key] : 0;
  const previous = useRef(current);
  const dir = current < previous.current ? 'back' : 'fwd';

  useEffect(() => {
    previous.current = current;
  }, [current]);

  useEffect(() => {
    document.documentElement.lang = content[locale].htmlLang;
  }, [locale]);

  return (
    <div className="shell" data-tone={key ? tones[key] : 'home'} data-dir={dir}>
      {children}
    </div>
  );
}
