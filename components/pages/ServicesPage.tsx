import Link from 'next/link';
import { PencilIllustration } from '@/components/Illustrations';
import { content } from '@/lib/content';
import { routes, type Locale } from '@/lib/i18n';

export default function ServicesPage({ locale }: { locale: Locale }) {
  const t = content[locale].services;

  return (
    <>
      <header className="sheet-head">
        <h1>{t.heading}</h1>
        <PencilIllustration />
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

      <section className="more" aria-labelledby="process" style={{ borderTop: '2px solid var(--color-text)' }}>
        <div className="more-side">
          <h2 id="process" className="label" style={{ fontFamily: 'inherit' }}>{t.process.label}</h2>
          <p className="more-title">{t.process.title}</p>
        </div>
        <div className="more-body">
          <ol className="ruled steps">
            {t.process.steps.map((s, i) => (
              <li key={s.t}>
                <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="row-title">{s.t}</div>
                  <p className="row-sub">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="more" aria-labelledby="faq">
        <div className="more-side">
          <h2 id="faq" className="label" style={{ fontFamily: 'inherit' }}>{t.faq.label}</h2>
        </div>
        <div className="more-body">
          <div className="faq">
            {t.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="sheet-cta" style={{ borderTop: '2px solid var(--color-text)' }}>
        <Link href={routes.contact[locale]} className="btn btn-primary" style={{ minWidth: 240 }}>
          {t.cta} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </>
  );
}
