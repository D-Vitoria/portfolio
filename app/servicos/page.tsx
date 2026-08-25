import type { Metadata } from 'next';
import TransitionLink from '@/components/TransitionLink';
import { basePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Serviços',
  openGraph: { url: `https://d-vitoria.github.io${basePath}/servicos` },
};

export default function Servicos() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-20 sm:py-32">
      <h1 className="font-serif font-semibold text-3xl sm:text-4xl lg:text-5xl text-zinc-900 dark:text-zinc-50 mb-4 reveal">Serviços</h1>
      <p className="text-[15px] text-zinc-500 dark:text-zinc-400 mb-20 reveal">O que posso fazer por você e pelo seu projeto.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden reveal">
        <div className="bg-white dark:bg-zinc-950 p-8 sm:p-10">
          <p className="font-mono text-[10px] text-clay uppercase tracking-widest mb-4">QA &amp; Automação</p>
          <h2 className="font-serif font-semibold text-2xl text-zinc-900 dark:text-zinc-50 mb-6">Qualidade de Software</h2>
          <ul className="space-y-3">
            {['Planejamento e execução de testes', 'Automação com Cypress e Playwright', 'BDD com Gherkin', 'Testes de regressão e fumaça', 'Integração com CI/CD', 'Documentação e rastreabilidade de bugs'].map(item => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="text-clay mt-0.5 shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-zinc-950 p-8 sm:p-10">
          <p className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4">Design &amp; Identidade</p>
          <h2 className="font-serif font-semibold text-2xl text-zinc-900 dark:text-zinc-50 mb-6">Comunicação Visual</h2>
          <ul className="space-y-3">
            {['Identidade visual e branding', 'Criação de logotipo', 'Peças para redes sociais', 'Materiais impressos', 'Apresentações e relatórios', 'Figma, Illustrator, Canva'].map(item => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="text-zinc-300 dark:text-zinc-700 mt-0.5 shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center reveal">
        <TransitionLink href="/contato" className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium text-sm px-6 py-3.5 rounded-xl hover:opacity-80 transition-opacity">
          Vamos conversar →
        </TransitionLink>
      </div>
    </div>
  );
}
