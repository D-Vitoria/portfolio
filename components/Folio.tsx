'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { pad, projects } from '@/lib/projects';
import { useSection } from '@/lib/sections';

export default function Folio() {
  const router = useRouter();
  const { sections, index, extraLabel, projectSlug } = useSection();
  const total = sections.length;
  const projectIndex = projectSlug ? projects.findIndex((p) => p.slug === projectSlug) : -1;
  const inProject = projectIndex >= 0;

  const step = useCallback(
    (d: number) => {
      if (inProject) {
        const n = projects.length;
        router.push(`/trabalhos/${projects[(projectIndex + d + n) % n].slug}`);
        return;
      }
      if (index < 0) return;
      // Extras (Serviços, Certificações) ficam entre "Sobre mim" e "Projetos".
      const next = extraLabel ? (d < 0 ? 1 : 2) : Math.min(total - 1, Math.max(0, index + d));
      if (extraLabel || next !== index) router.push(sections[next].href);
    },
    [extraLabel, inProject, index, projectIndex, router, sections, total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && /INPUT|TEXTAREA|SELECT/.test(t.tagName)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'Escape' && inProject) router.push('/trabalhos');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [inProject, router, step]);

  const label = inProject ? 'Projeto' : extraLabel ?? (index >= 0 ? sections[index].label : '');
  const num = inProject
    ? `${pad(projectIndex + 1)} / ${pad(projects.length)}`
    : extraLabel || index < 0
      ? ''
      : `${pad(index + 1)} / ${pad(total)}`;

  return (
    <footer className="folio">
      <span className="folio-credit">Diana Vitória de Araújo · Portfolio 2026</span>
      <div className="folio-right">
        <span className="folio-label">
          {label} {num && <span className="num">{num}</span>}
        </span>
        <button type="button" className="folio-btn" onClick={() => step(-1)} aria-label="Anterior">←</button>
        <button type="button" className="folio-btn next" onClick={() => step(1)} aria-label="Próxima">→</button>
      </div>
    </footer>
  );
}
