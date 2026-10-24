import ContactForm from '@/components/ContactForm';
import { PlaneIllustration } from '@/components/Illustrations';
import { basePath } from '@/lib/basePath';
import Link from 'next/link';
import { content } from '@/lib/content';
import { routes, type Locale } from '@/lib/i18n';

export default function ContactPage({ locale }: { locale: Locale }) {
  const t = content[locale].contact;

  return (
    <section className="contact" aria-label={t.aria}>
      <div className="contact-1">
        <div className="contact-top">
          <span className="big-num" style={{ fontSize: 'clamp(72px, 10vw, 140px)' }}>04</span>
          <PlaneIllustration />
        </div>
        <h1>{t.heading}</h1>
        <div className="contact-links">
          {t.links.map((l) => (
            <a key={l.label} href={l.href} {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>
              <span>{l.label}</span>
              <span>{l.value} ↗</span>
            </a>
          ))}
        </div>
        <a className="btn btn-secondary" href={`${basePath}/assets/diana-vitoria-cv.pdf`} download style={{ alignSelf: 'flex-start', minWidth: 260 }}>
          {t.cv} <span aria-hidden="true">↓</span>
        </a>
        <Link className="btn btn-secondary" href={routes.print[locale]} style={{ alignSelf: 'flex-start', minWidth: 260 }}>
          {t.printLink} <span aria-hidden="true">⎙</span>
        </Link>
      </div>
      <ContactForm locale={locale} />
    </section>
  );
}
