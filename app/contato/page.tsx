import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { PlaneIllustration } from '@/components/Illustrations';
import { basePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Contato',
  openGraph: { url: `https://d-vitoria.github.io${basePath}/contato` },
};

const links = [
  { label: 'E-mail', value: 'dvitoriaaraujo@outlook.com', href: 'mailto:dvitoriaaraujo@outlook.com' },
  { label: 'LinkedIn', value: '/in/d-vitoria', href: 'https://www.linkedin.com/in/d-vitoria/' },
  { label: 'GitHub', value: '/D-Vitoria', href: 'https://github.com/D-Vitoria' },
];

export default function Contato() {
  return (
    <section className="contact" aria-label="Contato">
      <div className="contact-1">
        <div className="contact-top">
          <span className="big-num" style={{ fontSize: 'clamp(72px, 10vw, 140px)' }}>04</span>
          <PlaneIllustration />
        </div>
        <h1>Vamos conversar sobre o seu projeto.</h1>
        <div className="contact-links">
          {links.map((l) => (
            <a key={l.label} href={l.href} {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>
              <span>{l.label}</span>
              <span>{l.value} ↗</span>
            </a>
          ))}
        </div>
        <a className="btn btn-secondary" href={`${basePath}/assets/diana-vitoria-cv.pdf`} download style={{ alignSelf: 'flex-start', minWidth: 260 }}>
          Baixar currículo (PDF) <span aria-hidden="true">↓</span>
        </a>
      </div>
      <ContactForm />
    </section>
  );
}
