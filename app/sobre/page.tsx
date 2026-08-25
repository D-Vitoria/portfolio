import type { Metadata } from 'next';
import TransitionLink from '@/components/TransitionLink';
import { basePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Sobre',
  openGraph: { url: `https://d-vitoria.github.io${basePath}/sobre` },
};

export default function Sobre() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-20 sm:py-32">

      <blockquote className="font-serif font-normal italic text-2xl sm:text-3xl lg:text-[36px] leading-snug text-zinc-900 dark:text-zinc-50 max-w-3xl mb-16 sm:mb-20 reveal">
        &ldquo;Qualidade não é só ausência de bugs: é coerência entre o que se promete e o que se entrega.&rdquo;
      </blockquote>

      {/* Bio + skills */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_260px] gap-12 sm:gap-16 mb-24 reveal">
        <div className="space-y-5 text-[15px] text-zinc-600 dark:text-zinc-400 leading-[1.85]">
          <p>Sou Diana, analista de QA — hoje à frente da qualidade do <strong className="font-semibold text-zinc-900 dark:text-zinc-100">eFornecedor</strong>, sistema de cadastro e gestão de fornecedores dentro do ecossistema SIADES. No dia a dia, isso significa planejar testes, automatizar cenários e garantir que o que foi prometido chegue inteiro até quem usa.</p>
          <p>Fora do expediente, construo a <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Davore Studio</strong>, meu estúdio de design e comunicação, e curso Publicidade &amp; Propaganda e Design Gráfico — uma transição deliberada e gradual da engenharia de qualidade para a criação de marcas.</p>
          <p>Essa lógica de coerência vale tanto para um sistema quanto para uma marca. É o que une os dois mundos que vivo.</p>
        </div>
        <div className="space-y-6">
          <div>
            <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-2">QA &amp; Automação</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Cypress · Playwright · BDD / Gherkin · SQL · Scrum</p>
          </div>
          <div>
            <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-2">Design &amp; Comunicação</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Figma · Illustrator · Photoshop · CorelDRAW · Canva</p>
          </div>
          <div>
            <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-2">Localização</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Penápolis, SP — disponível remotamente</p>
          </div>
        </div>
      </div>

      {/* Experiência */}
      <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-zinc-900 dark:text-zinc-50 mb-10 reveal">Experiência</h2>
      <ol className="relative ml-3 border-l-2 border-zinc-100 dark:border-zinc-800 mb-24 reveal" aria-label="Linha do tempo">

        <li className="relative mb-12 pl-8">
          <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-clay border-2 border-clay shrink-0" aria-hidden="true" />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
            <h3 className="font-serif font-semibold text-lg text-zinc-900 dark:text-zinc-50">AZ Tecnologia em Gestão</h3>
            <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 shrink-0">abr 2024 — presente</span>
          </div>
          <p className="font-mono text-[10.5px] text-zinc-400 dark:text-zinc-600 mt-0.5">Penápolis, SP · CLT</p>
          <ol className="exp-nested relative mt-6 ml-1 space-y-7">
            <li className="relative pl-6">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-clay shrink-0" aria-hidden="true" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">QA Analyst</h4>
                <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 shrink-0">abr 2024 — presente</span>
              </div>
              <ul className="mt-3 space-y-1.5 list-disc list-outside ml-4">
                <li className="text-sm text-zinc-600 dark:text-zinc-400">Responsável pela qualidade do eFornecedor (ecossistema SIADES)</li>
                <li className="text-sm text-zinc-600 dark:text-zinc-400">Automação de testes com Cypress e Playwright</li>
                <li className="text-sm text-zinc-600 dark:text-zinc-400">Cenários BDD em Gherkin, integração com CI/CD</li>
              </ul>
            </li>
          </ol>
        </li>

        <li className="relative mb-12 pl-8">
          <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-700 border-2 border-zinc-200 dark:border-zinc-700 shrink-0" aria-hidden="true" />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
            <h3 className="font-serif font-semibold text-lg text-zinc-900 dark:text-zinc-50">Davore Studio</h3>
            <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 shrink-0">2023 — presente</span>
          </div>
          <p className="font-mono text-[10.5px] text-zinc-400 dark:text-zinc-600 mt-0.5">Penápolis, SP · autônoma</p>
          <ol className="exp-nested relative mt-6 ml-1 space-y-7">
            <li className="relative pl-6">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700 shrink-0" aria-hidden="true" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Fundadora &amp; Designer</h4>
                <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 shrink-0">2023 — presente</span>
              </div>
              <ul className="mt-3 space-y-1.5 list-disc list-outside ml-4">
                <li className="text-sm text-zinc-600 dark:text-zinc-400">Identidade visual, branding e materiais gráficos para clientes</li>
                <li className="text-sm text-zinc-600 dark:text-zinc-400">Figma, Illustrator, Canva, CorelDRAW</li>
              </ul>
            </li>
          </ol>
        </li>

        <li className="relative pl-8">
          <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-700 border-2 border-zinc-200 dark:border-zinc-700 shrink-0" aria-hidden="true" />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
            <h3 className="font-serif font-semibold text-lg text-zinc-900 dark:text-zinc-50">Freelancer</h3>
            <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 shrink-0">set 2023 — dez 2023</span>
          </div>
          <p className="font-mono text-[10.5px] text-zinc-400 dark:text-zinc-600 mt-0.5">Penápolis, SP · freelance</p>
          <ol className="exp-nested relative mt-6 ml-1">
            <li className="relative pl-6">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700 shrink-0" aria-hidden="true" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Designer Gráfica</h4>
                <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 shrink-0">4 meses</span>
              </div>
              <ul className="mt-3 space-y-1.5 list-disc list-outside ml-4">
                <li className="text-sm text-zinc-600 dark:text-zinc-400">Materiais gráficos para mídia impressa e digital</li>
                <li className="text-sm text-zinc-600 dark:text-zinc-400">Canva, CorelDRAW, Illustrator e Photoshop</li>
              </ul>
            </li>
          </ol>
        </li>
      </ol>

      {/* Formação */}
      <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-zinc-900 dark:text-zinc-50 mb-10 reveal">Formação</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 reveal">
        <div>
          <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-5">Graduação</p>
          <div className="space-y-5">
            <div className="border-l-2 border-zinc-100 dark:border-zinc-800 pl-5">
              <h3 className="font-serif font-semibold text-base text-zinc-900 dark:text-zinc-50">Bacharel em Publicidade e Propaganda</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">UNINTER — Centro Universitário Internacional</p>
              <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 mt-1">2026 — 2030 · em andamento</p>
            </div>
            <div className="border-l-2 border-zinc-100 dark:border-zinc-800 pl-5">
              <h3 className="font-serif font-semibold text-base text-zinc-900 dark:text-zinc-50">Tecnólogo em Design Gráfico</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">UNINTER — Centro Universitário Internacional</p>
              <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 mt-1">mai 2026 — mai 2028 · trancado</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-5">Certificações</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">5 certificados em Design e Comunicação.</p>
          <TransitionLink href="/certificacoes" className="inline-flex items-center gap-1.5 text-sm font-medium text-clay hover:underline transition-colors">
            Ver todas as certificações →
          </TransitionLink>
        </div>
      </div>

    </div>
  );
}
