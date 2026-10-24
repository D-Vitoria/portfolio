'use client';
import { usePathname } from 'next/navigation';
import { content } from './content';
import { parsePath, routes, sectionKeys } from './i18n';

/** Rota atual: idioma, página e, nos estudos de caso, o slug do projeto. */
export function useRoute() {
  return parsePath(usePathname() ?? '/');
}

/** As quatro seções da revista no idioma atual, mais a posição da página aberta. */
export function useSections() {
  const route = useRoute();
  const { locale, key } = route;
  const t = content[locale];

  const sections = sectionKeys.map((k) => ({ key: k, href: routes[k][locale], label: t.ui.nav[k] }));

  // Serviços e Certificações ficam junto de "Sobre mim", sem número próprio.
  const extraLabel = key === 'services' || key === 'certs' ? t.ui.nav[key] : undefined;
  const index = extraLabel ? 1 : key ? sectionKeys.indexOf(key as (typeof sectionKeys)[number]) : -1;

  return { ...route, t, sections, index, extraLabel };
}
