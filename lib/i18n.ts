import { getProjects } from './projects';

export type Locale = 'pt' | 'en';
export const other = (l: Locale): Locale => (l === 'pt' ? 'en' : 'pt');

export type RouteKey = 'home' | 'about' | 'projects' | 'contact' | 'services' | 'certs' | 'print';

/** Mesma página em cada idioma. O português fica na raiz; o inglês, sob /en. */
export const routes: Record<RouteKey, Record<Locale, string>> = {
  home: { pt: '/', en: '/en' },
  about: { pt: '/sobre', en: '/en/about' },
  projects: { pt: '/trabalhos', en: '/en/projects' },
  contact: { pt: '/contato', en: '/en/contact' },
  services: { pt: '/servicos', en: '/en/services' },
  certs: { pt: '/certificacoes', en: '/en/certifications' },
  print: { pt: '/imprimir', en: '/en/print' },
};

/** As quatro "páginas" da revista, na ordem em que se folheiam. */
export const sectionKeys = ['home', 'about', 'projects', 'contact'] as const;

export function parsePath(raw: string) {
  const path = raw.replace(/\/+$/, '') || '/';
  const locale: Locale = path === '/en' || path.startsWith('/en/') ? 'en' : 'pt';

  let key: RouteKey | null = null;
  let projectSlug: string | null = null;
  for (const k of Object.keys(routes) as RouteKey[]) {
    if (routes[k][locale] === path) key = k;
  }
  const projectsBase = routes.projects[locale];
  if (!key && path.startsWith(`${projectsBase}/`)) {
    key = 'projects';
    projectSlug = path.slice(projectsBase.length + 1).split('/')[0];
  }
  return { locale, key, projectSlug, path };
}

/** Caminho equivalente no outro idioma (usado pelo seletor PT / EN). */
export function counterpartPath(raw: string): string {
  const { locale, key, projectSlug } = parsePath(raw);
  const to = other(locale);
  if (!key) return routes.home[to];
  if (projectSlug) {
    const current = getProjects(locale).find((p) => p.slug === projectSlug);
    const twin = current && getProjects(to).find((p) => p.id === current.id);
    return twin ? `${routes.projects[to]}/${twin.slug}` : routes.projects[to];
  }
  return routes[key][to];
}
