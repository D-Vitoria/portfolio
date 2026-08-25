import type { Metadata } from 'next';
import TransitionLink from '@/components/TransitionLink';

export const metadata: Metadata = {
  title: 'Trabalhos',
  openGraph: { url: 'https://portfolio-d-vitorias-projects.vercel.app/trabalhos' },
};

const projetos = [
  {
    slug: 'davore-studio',
    titulo: 'Davore Studio',
    categoria: 'Design',
    descricao: 'Identidade visual completa para estúdio criativo de design e comunicação.',
    ano: '2024',
    tags: ['Branding', 'Identidade Visual'],
  },
  {
    slug: 'efornecedor',
    titulo: 'eFornecedor',
    categoria: 'QA',
    descricao: 'Automação de testes end-to-end para sistema de gestão de fornecedores.',
    ano: '2024',
    tags: ['Cypress', 'BDD', 'Automação'],
  },
  {
    slug: 'identidade-visual',
    titulo: 'Identidade Visual',
    categoria: 'Design',
    descricao: 'Projeto de identidade visual para marca em desenvolvimento.',
    ano: '2024',
    tags: ['Branding', 'Figma'],
  },
  {
    slug: 'pecas-graficas',
    titulo: 'Peças Gráficas',
    categoria: 'Design',
    descricao: 'Coleção de materiais gráficos para mídia impressa e digital.',
    ano: '2023',
    tags: ['Illustrator', 'Canva', 'Print'],
  },
];

const catColor: Record<string, string> = {
  QA:     'text-clay border-clay/30 bg-clay/5',
  Design: 'text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60',
};

export default function Trabalhos() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-20 sm:py-32">
      <h1 className="font-serif font-semibold text-3xl sm:text-4xl lg:text-5xl text-zinc-900 dark:text-zinc-50 mb-4 reveal">Trabalhos</h1>
      <p className="text-[15px] text-zinc-500 dark:text-zinc-400 mb-16 reveal">Projetos selecionados de QA, automação e design.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 sm:auto-rows-[220px] gap-3 reveal">

        {/* Davore Studio — 2 colunas, destaque */}
        <TransitionLink href="/trabalhos/davore-studio"
          className="sm:col-span-2 relative overflow-hidden rounded-2xl bg-clay/10 dark:bg-clay/[0.12] border border-clay/20 dark:border-clay/15 p-7 flex flex-col justify-between group hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 min-h-[200px]">
          <div className="flex items-start justify-between">
            <span className="font-mono text-[10px] text-clay uppercase tracking-widest">Estúdio próprio · Branding</span>
            <span className="text-clay/30 group-hover:text-clay transition-colors text-lg leading-none" aria-hidden="true">↗</span>
          </div>
          <div>
            <h2 className="font-serif font-semibold text-2xl sm:text-[28px] text-zinc-900 dark:text-zinc-50 group-hover:text-clay transition-colors mb-2">Davore Studio</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">Identidade de marca construída do zero — posicionamento, paleta, tipografia e estrutura de serviços.</p>
          </div>
        </TransitionLink>

        {/* eFornecedor — 2 linhas, destaque secundário */}
        <TransitionLink href="/trabalhos/efornecedor"
          className="sm:row-span-2 relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-7 flex flex-col justify-between group hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 min-h-[200px]">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">SIADES · QA &amp; Automação</span>
          <div>
            <div className="flex items-start justify-between gap-2 mb-3">
              <h2 className="font-serif font-semibold text-xl sm:text-2xl text-zinc-900 dark:text-zinc-50 group-hover:text-clay transition-colors">eFornecedor</h2>
              <span className="text-zinc-300 dark:text-zinc-700 group-hover:text-clay transition-colors text-lg leading-none shrink-0 mt-0.5" aria-hidden="true">↗</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Planejamento e automação de testes com Cypress e BDD/Gherkin em sistema crítico de gestão.</p>
          </div>
        </TransitionLink>

        {/* Identidade Visual — 1×1 */}
        <TransitionLink href="/trabalhos/identidade-visual"
          className="relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-7 flex flex-col justify-between group hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 min-h-[200px]">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">Cliente · Brand Kit</span>
          <div className="flex items-end justify-between gap-3">
            <h2 className="font-serif font-semibold text-lg sm:text-xl text-zinc-900 dark:text-zinc-50 group-hover:text-clay transition-colors">Identidade Visual — Advocacia</h2>
            <span className="text-zinc-300 dark:text-zinc-700 group-hover:text-clay transition-colors text-lg leading-none shrink-0" aria-hidden="true">↗</span>
          </div>
        </TransitionLink>

        {/* Peças Gráficas — 1×1 */}
        <TransitionLink href="/trabalhos/pecas-graficas"
          className="relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-7 flex flex-col justify-between group hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 min-h-[200px]">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">Kelv Gráfica · Freelance</span>
          <div className="flex items-end justify-between gap-3">
            <h2 className="font-serif font-semibold text-lg sm:text-xl text-zinc-900 dark:text-zinc-50 group-hover:text-clay transition-colors">Peças Gráficas</h2>
            <span className="text-zinc-300 dark:text-zinc-700 group-hover:text-clay transition-colors text-lg leading-none shrink-0" aria-hidden="true">↗</span>
          </div>
        </TransitionLink>

      </div>
    </div>
  );
}
