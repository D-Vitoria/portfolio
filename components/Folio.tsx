'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { routes } from '@/lib/i18n';
import { getProjects, pad } from '@/lib/projects';
import { useSections } from '@/lib/route';

export default function Folio() {
  const router = useRouter();
  const { locale, t, sections, index, extraLabel, projectSlug } = useSections();
  const total = sections.length;
  const projects = getProjects(locale);
  const projectIndex = projectSlug ? projects.findIndex((p) => p.slug === projectSlug) : -1;
  const inProject = projectIndex >= 0;

  const step = useCallback(
    (d: number) => {
      if (inProject) {
        const n = projects.length;
        router.push(`${routes.projects[locale]}/${projects[(projectIndex + d + n) % n].slug}`);
        return;
      }
      if (index < 0) return;
      // Extras (Serviços, Certificações) ficam entre "Sobre mim" e "Projetos".
      const next = extraLabel ? (d < 0 ? 1 : 2) : Math.min(total - 1, Math.max(0, index + d));
      if (extraLabel || next !== index) router.push(sections[next].href);
    },
    // `projects` e `sections` mudam só com o idioma.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [extraLabel, inProject, index, locale, projectIndex, router, total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && /INPUT|TEXTAREA|SELECT/.test(target.tagName)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'Escape' && inProject) router.push(routes.projects[locale]);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [inProject, locale, router, step]);

  const label = inProject ? t.ui.project : extraLabel ?? (index >= 0 ? sections[index].label : '');
  const num = inProject
    ? `${pad(projectIndex + 1)} / ${pad(projects.length)}`
    : extraLabel || index < 0
      ? ''
      : `${pad(index + 1)} / ${pad(total)}`;

  return (
    <footer className="folio" lang={locale}>
      <div className="folio-credit">
        <span>{t.ui.credit}</span>
        <span className="folio-links">
          <a href="https://www.linkedin.com/in/d-vitoria/" target="_blank" rel="noopener">LinkedIn ↗</a>
          <a href="https://github.com/D-Vitoria" target="_blank" rel="noopener">GitHub ↗</a>
        </span>
        <span className="folio-hint" aria-hidden="true">
          <kbd>←</kbd><kbd>→</kbd> {inProject ? t.ui.hintProjects : t.ui.hintPages}
          {inProject && <> · <kbd>Esc</kbd> {t.ui.hintEsc}</>}
        </span>
      </div>
      <div className="folio-right">
        <span className="folio-label">
          {label} {num && <span className="num">{num}</span>}
        </span>
        <button type="button" className="folio-btn" onClick={() => step(-1)} aria-label={t.ui.prev}>←</button>
        <button type="button" className="folio-btn next" onClick={() => step(1)} aria-label={t.ui.next}>→</button>
      </div>
    </footer>
  );
}
