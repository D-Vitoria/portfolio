import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pad, projects } from '@/lib/projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.lead } : {};
}

const labelStyle = { fontFamily: 'inherit' } as const;

export default async function Projeto({ params }: Props) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const n = pad(i + 1);
  const meta = [
    { k: 'Categoria', v: p.cat },
    { k: 'Cliente', v: p.client },
    { k: 'Meu papel', v: p.role },
    { k: 'Ano', v: p.year },
  ];
  const gallery = p.gallery ?? [];

  return (
    <article>
      <div className="case-bar">
        <Link href="/trabalhos">← Todos os projetos</Link>
        <span>Projeto {n} / {pad(projects.length)}</span>
      </div>

      <header className="case-hero">
        <div className="case-hero-main">
          <span className="big-num" style={{ fontSize: 'clamp(56px, 7vw, 96px)' }}>{n}</span>
          <div>
            <h1>{p.title}</h1>
            <p className="lead">{p.lead}</p>
          </div>
          <dl className="case-meta">
            {meta.map((m) => (
              <div key={m.k}>
                <dt className="meta-label">{m.k}</dt>
                <dd>{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="ph grayscale"><span>[ imagem principal do projeto ]</span></div>
      </header>

      <section className="case-cols">
        <div>
          <span className="label" style={labelStyle}>Contexto</span>
          <p>Quem é o cliente, qual era o momento e por que o projeto existiu. Dois ou três parágrafos curtos.</p>
        </div>
        <div>
          <span className="label" style={labelStyle}>Desafio</span>
          <p>O problema de comunicação que precisava ser resolvido, em uma frase clara.</p>
        </div>
        <div>
          <span className="label" style={labelStyle}>Processo</span>
          <ol>{p.steps.map((s, k) => <li key={s}>{k + 1}. {s}</li>)}</ol>
        </div>
      </section>

      {gallery.length === 0 ? (
        <section className="case-block ruled-bottom">
          <div className="side"><span className="label">Trecho</span></div>
          <div className="body" style={{ maxWidth: 760 }}>
            <p style={{ fontSize: 19, lineHeight: 1.7, maxWidth: 'none' }}>
              Primeiro parágrafo do texto publicado. Aqui entra a abertura, com a informação principal e o gancho que segura o leitor.
            </p>
            <blockquote
              style={{
                margin: '8px 0', padding: '20px 0', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 30,
                lineHeight: 1.2, color: 'var(--color-accent-700)',
                borderTop: '2px solid var(--color-text)', borderBottom: '2px solid var(--color-text)',
              }}
            >
              “Uma frase marcante do texto, em destaque.”
            </blockquote>
            <p style={{ fontSize: 19, lineHeight: 1.7, maxWidth: 'none' }}>
              Continuação do trecho. Para textos longos, mostre uma parte e ofereça o link para a publicação completa.
            </p>
            <span className="btn btn-secondary" style={{ alignSelf: 'flex-start', minWidth: 280 }}>
              Ler publicação original <span aria-hidden="true">↗</span>
            </span>
          </div>
        </section>
      ) : (
        <section className="gallery" aria-label="Galeria">
          {gallery.map((label, k) => (
            <div key={label} className={`ph grayscale${k === 0 && gallery.length % 2 === 1 ? ' wide' : ''}`}>
              <span>[ {label} ]</span>
            </div>
          ))}
        </section>
      )}

      <section className="case-block">
        <div className="side"><span className="label">Solução e resultado</span></div>
        <div className="body">
          <p className="big">Uma frase de destaque que resume a solução.</p>
          <p>O que foi entregue e o que mudou para o cliente. Se houver números ou um depoimento, eles entram aqui.</p>
        </div>
      </section>
    </article>
  );
}
