'use client';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import TransitionLink from './TransitionLink';

const links = [
  { href: '/',              label: 'Início' },
  { href: '/sobre',         label: 'Sobre' },
  { href: '/servicos',      label: 'Serviços' },
  { href: '/trabalhos',     label: 'Trabalhos' },
  { href: '/contato',       label: 'Contato' },
];

export default function Nav() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-3 flex items-center gap-3">
        <TransitionLink href="/" aria-label="Diana Vitória — início" className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50 mr-auto shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay">
          <span className="w-2 h-2 rounded-full bg-pass shrink-0" aria-hidden="true" />
          diana.log
        </TransitionLink>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex list-none">
            {links.map(({ href, label }) => (
              <li key={href}>
                <TransitionLink
                  href={href}
                  className={`text-sm px-3 py-2 rounded-lg transition-colors ${
                    isActive(href)
                      ? 'text-zinc-900 dark:text-zinc-50 font-medium'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-800/60'
                  }`}
                >
                  {label}
                </TransitionLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400 shrink-0"
          >
            {mounted && (isDark ? <Sun size={15} /> : <Moon size={15} />)}
          </button>
          <TransitionLink href="/contato" className="hidden sm:inline-flex items-center text-sm font-medium bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">
            Falar comigo
          </TransitionLink>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 shrink-0"
          >
            <Menu size={16} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <nav className="max-w-5xl mx-auto px-4 py-2 flex flex-col" aria-label="Menu mobile">
            {links.map(({ href, label }, i) => (
              <TransitionLink
                key={href}
                href={href}
                className={`py-3.5 text-sm transition-colors ${i < links.length - 1 ? 'border-b border-zinc-100 dark:border-zinc-800' : ''} ${
                  isActive(href)
                    ? 'font-medium text-zinc-900 dark:text-zinc-50'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </TransitionLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
