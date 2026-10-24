import type { Metadata } from 'next';
import Link from 'next/link';
import { WriterIllustration } from '@/components/Illustrations';
import { basePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Sobre',
  openGraph: { url: `https://d-vitoria.github.io${basePath}/sobre` },
};

const experiencia = [
  {
    org: 'AZ Tecnologia em Gestão',
    role: 'QA Analyst',
    when: 'abr 2024 — presente',
    where: 'Penápolis, SP · CLT',
    items: [
      'Responsável pela qualidade do eFornecedor (ecossistema SIADES)',
      'Automação de testes com Cypress e Playwright',
      'Cenários BDD em Gherkin, integração com CI/CD',
    ],
  },
  {
    org: 'Davore Studio',
    role: 'Fundadora & Designer',
    when: '2023 — presente',
    where: 'Penápolis, SP · autônoma',
    items: [
      'Identidade visual, branding e materiais gráficos para clientes',
      'Figma, Illustrator, Canva, CorelDRAW',
    ],
  },
  {
    org: 'Freelancer',
    role: 'Designer Gráfica',
    when: 'set 2023 — dez 2023',
    where: 'Penápolis, SP · freelance',
    items: [
      'Materiais gráficos para mídia impressa e digital',
      'Canva, CorelDRAW, Illustrator e Photoshop',
    ],
  },
];

const formacao = [
  { title: 'Bacharel em Publicidade e Propaganda', place: 'UNINTER — Centro Universitário Internacional', when: '2026 — 2030 · em andamento' },
  { title: 'Tecnólogo em Design Gráfico', place: 'UNINTER — Centro Universitário Internacional', when: 'mai 2026 — mai 2028 · trancado' },
];

export default function Sobre() {
  return (
    <>
      <section className="about" aria-label="Sobre mim">
        <div className="about-1">
          <span className="big-num" style={{ fontSize: 'clamp(72px, 10vw, 140px)' }}>02</span>
          <WriterIllustration />
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Sobre mim</span>
        </div>

        <div className="about-photo grayscale">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${basePath}/assets/img/image.png`} alt="Diana Vitória de Araújo" />
        </div>

        <div className="about-3">
          <h1>Comunicação com método.</h1>
          <p>
            Sou Diana, analista de QA — hoje à frente da qualidade do <strong>eFornecedor</strong>, sistema de cadastro e gestão de fornecedores dentro do ecossistema SIADES. No dia a dia, isso significa planejar testes, automatizar cenários e garantir que o que foi prometido chegue inteiro até quem usa.
          </p>
          <p>
            Fora do expediente, construo a <strong>Davore Studio</strong>, meu estúdio de design e comunicação, e curso Publicidade &amp; Propaganda e Design Gráfico — uma transição deliberada e gradual da engenharia de qualidade para a criação de marcas. Essa lógica de coerência vale tanto para um sistema quanto para uma marca.
          </p>
          <div className="facts">
            <div>
              <div className="meta-label">Formação</div>
              <div className="v">Publicidade e Propaganda</div>
            </div>
            <div>
              <div className="meta-label">Atualmente</div>
              <div className="v">Analista de QA</div>
            </div>
          </div>
        </div>
      </section>

      <section className="more" aria-labelledby="exp">
        <div className="more-side"><h2 id="exp" className="label" style={{ fontFamily: 'inherit' }}>Experiência</h2></div>
        <div className="more-body">
          <ol className="ruled">
            {experiencia.map((e) => (
              <li key={e.org}>
                <div className="row-top">
                  <span className="row-title">{e.org} · {e.role}</span>
                  <span className="row-meta">{e.when}</span>
                </div>
                <div className="row-sub">{e.where}</div>
                <ul>{e.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="more" aria-labelledby="form">
        <div className="more-side"><h2 id="form" className="label" style={{ fontFamily: 'inherit' }}>Formação</h2></div>
        <div className="more-body">
          <ol className="ruled">
            {formacao.map((f) => (
              <li key={f.title}>
                <div className="row-top">
                  <span className="row-title">{f.title}</span>
                  <span className="row-meta">{f.when}</span>
                </div>
                <div className="row-sub">{f.place}</div>
              </li>
            ))}
          </ol>
          <div className="link-row">
            <Link href="/certificacoes" className="btn btn-secondary">Ver certificações <span aria-hidden="true">→</span></Link>
            <Link href="/servicos" className="btn btn-secondary">Ver serviços <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
