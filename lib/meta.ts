import type { Metadata } from 'next';
import { content } from './content';
import { routes, type Locale, type RouteKey } from './i18n';
import { basePath } from './basePath';

const origin = 'https://d-vitoria.github.io';
const url = (path: string) => `${origin}${basePath}${path === '/' ? '/' : path}`;

/** Metadados de uma página, com a versão no outro idioma indicada para os buscadores. */
export function pageMetadata(locale: Locale, key: RouteKey): Metadata {
  const m = content[locale].meta;
  return {
    title: key === 'home' ? { absolute: m.homeTitle } : m[key],
    description: m.description,
    openGraph: { url: url(routes[key][locale]), locale: locale === 'en' ? 'en_US' : 'pt_BR' },
    alternates: {
      canonical: url(routes[key][locale]),
      languages: { 'pt-BR': url(routes[key].pt), en: url(routes[key].en) },
    },
  };
}
