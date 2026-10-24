import Link from 'next/link';
import { content } from '@/lib/content';
import { routes, type Locale } from '@/lib/i18n';

export default function ServicesPage({ locale }: { locale: Locale }) {
  const t = content[locale].services;

  return (
    <>
      <header className="sheet-head">
        <h1>{t.heading}</h1>
        <p>{t.lead}</p>
      </header>

      <div className="cols-2">
        {t.groups.map((g) => (
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
        <Link href={routes.contact[locale]} className="btn btn-primary" style={{ minWidth: 240 }}>
          {t.cta} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </>
  );
}
