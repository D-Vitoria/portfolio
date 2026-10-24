import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import Shell from '@/components/Shell';
import Nav from '@/components/Nav';
import Folio from '@/components/Folio';
import { basePath } from '@/lib/basePath';

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'Diana Vitória de Araújo — QA Analyst & Designer', template: '%s — Diana Vitória de Araújo' },
  description: 'Analista de QA especialista em automação com Cypress e Playwright, e designer em formação. Baseada em Penápolis, SP — disponível remotamente.',
  authors: [{ name: 'Diana Vitória de Araújo' }],
  metadataBase: new URL('https://d-vitoria.github.io'),
  openGraph: {
    type: 'website',
    siteName: 'Diana Vitória de Araújo',
    images: [{ url: `${basePath}/assets/img/og.jpg`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={archivo.variable} suppressHydrationWarning>
      <body>
        <Providers>
          <Shell>
            <a href="#main" className="skip-link">Ir para conteúdo principal / Skip to main content</a>
            <Nav />
            <main id="main" className="stage">{children}</main>
            <Folio />
          </Shell>
        </Providers>
      </body>
    </html>
  );
}
