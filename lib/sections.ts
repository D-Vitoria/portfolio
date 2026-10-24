'use client';
import { usePathname } from 'next/navigation';

/** As quatro "páginas" da revista, na ordem em que se folheiam. */
export const sections = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre mim' },
  { href: '/trabalhos', label: 'Projetos' },
  { href: '/contato', label: 'Contato' },
] as const;

/** Páginas extras, vinculadas a uma seção (Serviços e Certificações ficam junto de "Sobre mim"). */
const extras: Record<string, string> = {
  '/servicos': 'Serviços',
  '/certificacoes': 'Certificações',
};

export function useSection() {
  const raw = usePathname() ?? '/';
  const path = raw.replace(/\/+$/, '') || '/';

  let index = -1;
  if (path === '/') index = 0;
  else if (path === '/sobre') index = 1;
  else if (path === '/trabalhos' || path.startsWith('/trabalhos/')) index = 2;
  else if (path === '/contato') index = 3;

  const extra = extras[path];
  return {
    sections,
    path,
    index: extra ? 1 : index,
    extraLabel: extra,
    projectSlug: path.startsWith('/trabalhos/') ? path.split('/')[2] : null,
  };
}
