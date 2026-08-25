import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Curtain from '@/components/Curtain';
import ScrollReveal from '@/components/ScrollReveal';
import { basePath } from '@/lib/basePath';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'Diana Vitória de Araújo — QA Analyst & Designer', template: '%s — Diana Vitória de Araújo' },
  description: 'Analista de QA especialista em automação com Cypress e Playwright, e designer em formação. Baseada em Penápolis, SP — disponível remotamente.',
  authors: [{ name: 'Diana Vitória de Araújo' }],
  metadataBase: new URL('https://d-vitoria.github.io'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Diana Vitória de Araújo',
    images: [{ url: `${basePath}/assets/img/og.jpg`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 font-sans antialiased transition-colors duration-300">
        <Providers>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-clay text-white text-sm font-medium px-4 py-2 rounded-lg z-[9999]">
            Ir para conteúdo principal
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <Curtain />
          <ScrollReveal />
        </Providers>
      </body>
    </html>
  );
}
