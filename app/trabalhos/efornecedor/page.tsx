import type { Metadata } from 'next';
import TransitionLink from '@/components/TransitionLink';

export const metadata: Metadata = { title: 'eFornecedor' };

export default function Efornecedor() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-20 sm:py-28">
      <TransitionLink href="/trabalhos" className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 hover:text-clay transition-colors mb-8 inline-block">← Trabalhos</TransitionLink>

      <div className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="font-mono text-[10px] font-medium text-clay uppercase tracking-widest px-2 py-0.5 rounded-full border border-clay/30 bg-clay/5">QA</span>
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">Cypress</span>
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">BDD</span>
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">Automação</span>
        </div>
        <h1 className="font-serif font-semibold text-3xl sm:text-4xl lg:text-5xl text-zinc-900 dark:text-zinc-50 mb-2">eFornecedor</h1>
        <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600">2024</p>
      </div>

      <div className="aspect-[16/9] bg-zinc-100 dark:bg-zinc-900 rounded-xl mb-16 flex items-center justify-center">
        <span className="font-serif italic text-zinc-300 dark:text-zinc-700 text-lg">imagens em breve</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-[15px] text-zinc-600 dark:text-zinc-400 leading-[1.85]">
        <div>
          <h2 className="font-serif font-semibold text-xl text-zinc-900 dark:text-zinc-50 mb-3">Contexto</h2>
          <p>O eFornecedor é um sistema de cadastro e gestão de fornecedores dentro do ecossistema SIADES. Como analista de QA responsável, o desafio foi garantir a qualidade de um sistema crítico em constante evolução.</p>
        </div>
        <div>
          <h2 className="font-serif font-semibold text-xl text-zinc-900 dark:text-zinc-50 mb-3">O que foi feito</h2>
          <p>Planejamento e execução de testes manuais e automatizados com Cypress. Escrita de cenários em BDD com Gherkin, integração com pipelines de CI e documentação de bugs com rastreabilidade.</p>
        </div>
        <div>
          <h2 className="font-serif font-semibold text-xl text-zinc-900 dark:text-zinc-50 mb-3">Resultado</h2>
          <p>Redução de regressões em produção e maior confiança nos deploys. A suíte de testes automatizados passou a cobrir os fluxos críticos do sistema com execução contínua.</p>
        </div>
      </div>
    </div>
  );
}
