import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroIllustration } from '@/components/Illustrations';
import { basePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Diana Vitória de Araújo — QA Analyst & Designer',
  openGraph: { url: `https://d-vitoria.github.io${basePath}/` },
};

const toc = [
  { href: '/sobre', label: 'Sobre mim', num: '02' },
  { href: '/trabalhos', label: 'Projetos', num: '03' },
  { href: '/contato', label: 'Contato', num: '04' },
];

export default function Home() {
  return (
    <header className="cover" aria-label="Apresentação">
      <div className="cover-col cover-1">
        <span className="kicker">Portfolio · Edição 2026</span>
        <h1 className="cover-title" aria-label="Diana Vitória de Araújo">
          Diana<br />Vitória de<br />Araújo
        </h1>
        <p className="cover-lead">
          Garanto que o que foi prometido chegue inteiro até quem usa — em sistemas e em marcas.
        </p>
      </div>

      <div className="cover-col cover-2">
        <HeroIllustration />
      </div>

      <div className="cover-col cover-3">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="stamp">Comunicação<br />criativa</div>
          <span style={{ fontSize: 15, color: 'var(--color-neutral-800)' }}>QA Analyst &amp; Designer</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span className="meta-label" style={{ letterSpacing: '0.12em' }}>Nesta edição</span>
          <nav className="toc" aria-label="Sumário">
            {toc.map((t) => (
              <Link key={t.href} href={t.href}>
                <span>{t.label}</span>
                <span>p. {t.num}</span>
              </Link>
            ))}
          </nav>
        </div>

        <Link href="/trabalhos" className="btn btn-primary">
          Ver projetos <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
