'use client';
import { useState } from 'react';
import { content } from '@/lib/content';
import type { Locale } from '@/lib/i18n';

type Tag = 'design' | 'communication';

/** Certificações como "fichas" numeradas, com filtro por tema. */
export default function CertList({ locale }: { locale: Locale }) {
  const t = content[locale].certs;
  const [filter, setFilter] = useState<Tag | 'all'>('all');
  const items = t.items
    .map((c, i) => ({ ...c, n: String(i + 1).padStart(2, '0') }))
    .filter((c) => filter === 'all' || c.tag === filter);

  return (
    <>
      <div className="cert-filters chips" role="group" aria-label={t.filterAria}>
        {(['all', 'design', 'communication'] as const).map((f) => (
          <button key={f} type="button" className="chip" aria-pressed={f === filter} onClick={() => setFilter(f)}>
            {f === 'all' ? t.all : t.tags[f]}
          </button>
        ))}
      </div>

      <ol className="cert-list">
        {items.map((c) => (
          <li key={c.title}>
            <a href={c.href} target="_blank" rel="noopener" className="cert-row">
              <span className="n">{c.n}</span>
              <span className="t">
                <strong>{c.title}</strong>
                <small>{c.provider}</small>
              </span>
              <span className="c"><span className="tag tag-outline">{t.tags[c.tag]}</span></span>
              <span className="d">{c.date}</span>
              <span className="a" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ol>
    </>
  );
}
