import type { Metadata } from 'next';
import TransitionLink from '@/components/TransitionLink';

export const metadata: Metadata = {
  title: 'Certificações',
  openGraph: { url: 'https://portfolio-d-vitorias-projects.vercel.app/certificacoes' },
};

const certs = [
  {
    titulo: 'Teoria da Cor para processo criativo em Design e Publicidade',
    provider: 'Udemy · Bruno Alecrim',
    data: 'ago 2026',
    tag: 'Design',
    tagStyle: 'text-clay border-clay/30 bg-clay/5',
    href: 'https://ude.my/UC-2bc74c22-29ca-43c9-b743-bcd49f3830b3',
  },
  {
    titulo: 'Briefing de Comunicação: Modelo eficiente e como preencher',
    provider: 'Udemy · Virgínia Vicente',
    data: 'jul 2026',
    tag: 'Comunicação',
    tagStyle: 'text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60',
    href: 'https://ude.my/UC-d6db2e60-b6eb-4734-be54-94f4f36f55c1',
  },
  {
    titulo: 'Fundamentos do Design Gráfico',
    provider: 'Udemy · Paulo Andrade · Caroll Bulcão',
    data: 'jul 2026',
    tag: 'Design',
    tagStyle: 'text-clay border-clay/30 bg-clay/5',
    href: 'https://ude.my/UC-1e9a8e6d-70ba-4345-9259-6aec871a5a26',
  },
  {
    titulo: 'UI Design: teste de usabilidade',
    provider: 'Alura',
    data: 'out 2025',
    tag: 'Design',
    tagStyle: 'text-clay border-clay/30 bg-clay/5',
    href: 'https://cursos.alura.com.br/certificate/b4dae8a7-a5c7-4ca8-9c17-4dd06b4e1590?lang',
  },
  {
    titulo: 'Formação Technical Writing',
    provider: 'Alura',
    data: 'set 2025',
    tag: 'Comunicação',
    tagStyle: 'text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60',
    href: 'https://cursos.alura.com.br/degree/certificate/7695424a-6e9b-48e4-9207-fed22306a477',
  },
];

export default function Certificacoes() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-20 sm:py-32">
      <div className="mb-2 reveal">
        <TransitionLink href="/sobre" className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 hover:text-clay transition-colors">← Sobre</TransitionLink>
      </div>
      <h1 className="font-serif font-semibold text-3xl sm:text-4xl lg:text-5xl text-zinc-900 dark:text-zinc-50 mb-4 reveal">Certificações</h1>
      <p className="text-[15px] text-zinc-500 dark:text-zinc-400 mb-16 reveal">Cursos e formações complementares concluídos.</p>

      <ol className="divide-y divide-zinc-100 dark:divide-zinc-800 reveal">
        {certs.map(({ titulo, provider, data, tag, tagStyle, href }) => (
          <li key={titulo}>
            <a
              href={href}
              target="_blank"
              rel="noopener"
              className="group flex items-start gap-6 sm:gap-10 py-7 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 -mx-4 px-4 sm:-mx-8 sm:px-8 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`font-mono text-[10px] font-medium uppercase tracking-widest px-2 py-0.5 rounded-full border ${tagStyle}`}>{tag}</span>
                </div>
                <h2 className="font-serif font-semibold text-lg sm:text-xl text-zinc-900 dark:text-zinc-50 group-hover:text-clay transition-colors">{titulo}</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{provider}</p>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600">{data}</span>
                <span className="text-zinc-300 dark:text-zinc-700 group-hover:text-clay transition-colors text-lg" aria-hidden="true">↗</span>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
