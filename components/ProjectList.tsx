'use client';
import Link from 'next/link';
import { useState } from 'react';
import { LampIllustration } from './Illustrations';
import { categories, pad, projects } from '@/lib/projects';

export default function ProjectList() {
  const [filter, setFilter] = useState('Todos');
  const list = projects
    .map((p, i) => ({ ...p, n: pad(i + 1) }))
    .filter((p) => filter === 'Todos' || p.cat === filter);

  return (
    <>
      <div className="proj-head">
        <LampIllustration className="lamp" />
        <div className="title-wrap">
          <span className="big-num" style={{ fontSize: 'clamp(56px, 7vw, 96px)' }}>03</span>
          <h1>Trabalhos<br />selecionados</h1>
        </div>
        <div className="chips" role="group" aria-label="Filtrar por categoria">
          {categories.map((c) => (
            <button key={c} type="button" className="chip" aria-pressed={c === filter} onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <ul className="proj-list">
        {list.map((p) => (
          <li key={p.slug}>
            <Link href={`/trabalhos/${p.slug}`} className="proj-row">
              <span className="n">{p.n}</span>
              <span className="t"><strong>{p.title}</strong><span>{p.desc}</span></span>
              <span className="c"><span className="tag tag-outline">{p.cat}</span></span>
              <span className="y">{p.year}</span>
              <span className="a" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
        {list.length === 0 && <li className="empty">Nenhum projeto nesta categoria.</li>}
      </ul>
    </>
  );
}
