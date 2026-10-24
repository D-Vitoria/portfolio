import type { Metadata } from 'next';
import Link from 'next/link';
import { basePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Certificações',
  openGraph: { url: `https://d-vitoria.github.io${basePath}/certificacoes` },
};

const certs = [
  {
    titulo: 'Teoria da Cor para processo criativo em Design e Publicidade',
    provider: 'Udemy · Bruno Alecrim',
    data: 'ago 2026',
    tag: 'Design',
    href: 'https://ude.my/UC-2bc74c22-29ca-43c9-b743-bcd49f3830b3',
  },
  {
    titulo: 'Briefing de Comunicação: Modelo eficiente e como preencher',
    provider: 'Udemy · Virgínia Vicente',
    data: 'jul 2026',
    tag: 'Comunicação',
    href: 'https://ude.my/UC-d6db2e60-b6eb-4734-be54-94f4f36f55c1',
  },
  {
    titulo: 'Fundamentos do Design Gráfico',
    provider: 'Udemy · Paulo Andrade · Caroll Bulcão',
    data: 'jul 2026',
    tag: 'Design',
    href: 'https://ude.my/UC-1e9a8e6d-70ba-4345-9259-6aec871a5a26',
  },
  {
    titulo: 'UI Design: teste de usabilidade',
    provider: 'Alura',
    data: 'out 2025',
    tag: 'Design',
    href: 'https://cursos.alura.com.br/certificate/b4dae8a7-a5c7-4ca8-9c17-4dd06b4e1590?lang',
  },
  {
    titulo: 'Formação Technical Writing',
    provider: 'Alura',
    data: 'set 2025',
    tag: 'Comunicação',
    href: 'https://cursos.alura.com.br/degree/certificate/7695424a-6e9b-48e4-9207-fed22306a477',
  },
];

export default function Certificacoes() {
  return (
    <>
      <header className="sheet-head">
        <Link href="/sobre" style={{ flexBasis: '100%', fontSize: 14, color: 'var(--color-text)', textDecoration: 'none' }}>← Sobre mim</Link>
        <h1>Certificações</h1>
        <p>Cursos e formações complementares concluídos.</p>
      </header>

      <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {certs.map((c) => (
          <li key={c.titulo}>
            <a href={c.href} target="_blank" rel="noopener" className="cert-row">
              <span>
                <span className="tag tag-outline" style={{ marginBottom: 8 }}>{c.tag}</span>
                <strong>{c.titulo}</strong>
                <small>{c.provider}</small>
              </span>
              <span className="d">{c.data}</span>
              <span className="a" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ol>
    </>
  );
}
