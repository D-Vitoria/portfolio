import type { Metadata } from 'next';
import TransitionLink from '@/components/TransitionLink';

export const metadata: Metadata = { title: 'Identidade Visual' };

export default function IdentidadeVisual() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-20 sm:py-28">
      <TransitionLink href="/trabalhos" className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 hover:text-clay transition-colors mb-8 inline-block">← Trabalhos</TransitionLink>

      <div className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="font-mono text-[10px] font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest px-2 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60">Design</span>
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">Branding</span>
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">Figma</span>
        </div>
        <h1 className="font-serif font-semibold text-3xl sm:text-4xl lg:text-5xl text-zinc-900 dark:text-zinc-50 mb-2">Identidade Visual</h1>
        <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600">2024</p>
      </div>

      <div className="aspect-[16/9] bg-zinc-100 dark:bg-zinc-900 rounded-xl mb-16 flex items-center justify-center">
        <span className="font-serif italic text-zinc-300 dark:text-zinc-700 text-lg">imagens em breve</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-[15px] text-zinc-600 dark:text-zinc-400 leading-[1.85]">
        <div>
          <h2 className="font-serif font-semibold text-xl text-zinc-900 dark:text-zinc-50 mb-3">Contexto</h2>
          <p>Projeto de identidade visual para marca em desenvolvimento, com foco em posicionamento claro e aplicação consistente em diferentes meios.</p>
        </div>
        <div>
          <h2 className="font-serif font-semibold text-xl text-zinc-900 dark:text-zinc-50 mb-3">O que foi feito</h2>
          <p>Criação de logotipo, definição de paleta cromática, sistema tipográfico e guia de aplicação. Prototipação das principais peças em Figma.</p>
        </div>
        <div>
          <h2 className="font-serif font-semibold text-xl text-zinc-900 dark:text-zinc-50 mb-3">Resultado</h2>
          <p>Identidade coesa e versátil, pronta para aplicação em materiais digitais e impressos, com guia de marca documentado.</p>
        </div>
      </div>
    </div>
  );
}
