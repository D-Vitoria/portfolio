import type { Metadata } from 'next';
import Link from 'next/link';
import { basePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Serviços',
  openGraph: { url: `https://d-vitoria.github.io${basePath}/servicos` },
};

const grupos = [
  {
    kicker: 'QA & Automação',
    title: 'Qualidade de Software',
    items: [
      'Planejamento e execução de testes',
      'Automação com Cypress e Playwright',
      'BDD com Gherkin',
      'Testes de regressão e fumaça',
      'Integração com CI/CD',
      'Documentação e rastreabilidade de bugs',
    ],
  },
  {
    kicker: 'Design & Identidade',
    title: 'Comunicação Visual',
    items: [
      'Identidade visual e branding',
      'Criação de logotipo',
      'Peças para redes sociais',
      'Materiais impressos',
      'Apresentações e relatórios',
      'Figma, Illustrator, Canva',
    ],
  },
];

export default function Servicos() {
  return (
    <>
      <header className="sheet-head">
        <h1>Serviços</h1>
        <p>O que posso fazer por você e pelo seu projeto.</p>
      </header>

      <div className="cols-2">
        {grupos.map((g) => (
          <section key={g.title}>
            <span className="label">{g.kicker}</span>
            <h2>{g.title}</h2>
            <ul className="ruled">
              {g.items.map((item) => (
                <li key={item} style={{ padding: '12px 0', fontSize: 16 }}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="sheet-cta" style={{ borderTop: '2px solid var(--color-text)' }}>
        <Link href="/contato" className="btn btn-primary" style={{ minWidth: 240 }}>
          Vamos conversar <span aria-hidden="true">→</span>
        </Link>
      </div>
    </>
  );
}
