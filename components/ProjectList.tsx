'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { LampIllustration } from './Illustrations';
import { basePath } from '@/lib/basePath';
import { content } from '@/lib/content';
import { routes, type Locale } from '@/lib/i18n';
import { catIds, getProjects, pad, type CatId, type Project } from '@/lib/projects';

const PREVIEW_W = 280;

export default function ProjectList({ locale }: { locale: Locale }) {
  const t = content[locale].projects;
  const [filter, setFilter] = useState<CatId | 'all'>('all');
  const [hover, setHover] = useState<Project | null>(null);
  const preview = useRef<HTMLDivElement>(null);

  const list = getProjects(locale)
    .map((p, i) => ({ ...p, n: pad(i + 1) }))
    .filter((p) => filter === 'all' || p.catId === filter);

  // A prévia acompanha o cursor; troca de lado perto da borda direita.
  const follow = (e: React.MouseEvent) => {
    const el = preview.current;
    if (!el) return;
    const flip = e.clientX + 32 + PREVIEW_W > window.innerWidth;
    const x = flip ? e.clientX - 32 - PREVIEW_W : e.clientX + 32;
    el.style.transform = `translate(${x}px, ${Math.max(16, e.clientY - 90)}px)`;
  };

  return (
    <>
      <div className="proj-head">
        <LampIllustration className="lamp" />
        <div className="title-wrap">
          <span className="big-num" style={{ fontSize: 'clamp(56px, 7vw, 96px)' }}>03</span>
          <h1>{t.heading[0]}<br />{t.heading[1]}</h1>
        </div>
        <div className="chips" role="group" aria-label={t.filterAria}>
          {(['all', ...catIds] as const).map((c) => (
            <button key={c} type="button" className="chip" aria-pressed={c === filter} onClick={() => setFilter(c)}>
              {c === 'all' ? t.all : t.cats[c]}
            </button>
          ))}
        </div>
      </div>

      <ul className="proj-list" onMouseMove={follow} onMouseLeave={() => setHover(null)}>
        {list.map((p) => (
          <li key={p.id}>
            <Link
              href={`${routes.projects[locale]}/${p.slug}`}
              className="proj-row"
              onMouseEnter={() => setHover(p)}
              onFocus={() => setHover(null)}
            >
              <span className="n">{p.n}</span>
              <span className="t"><strong>{p.title}</strong><span>{p.desc}</span></span>
              <span className="c"><span className="tag tag-outline">{t.cats[p.catId]}</span></span>
              <span className="y">{p.year}</span>
              <span className="a" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
        {list.length === 0 && <li className="empty">{t.empty}</li>}
      </ul>

      <div ref={preview} className={`preview${hover ? ' on' : ''}`} aria-hidden="true">
        {hover && (
          <div className="ph grayscale">
            {hover.image
              // eslint-disable-next-line @next/next/no-img-element
              ? <img src={`${basePath}${hover.image}`} alt="" />
              : <span>[ {t.previewPlaceholder} ]</span>}
          </div>
        )}
      </div>
    </>
  );
}
