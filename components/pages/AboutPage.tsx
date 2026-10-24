import Link from 'next/link';
import InView from '@/components/InView';
import { WriterIllustration } from '@/components/Illustrations';
import Rich from '@/components/Rich';
import { basePath } from '@/lib/basePath';
import { content } from '@/lib/content';
import { routes, type Locale } from '@/lib/i18n';
import type { CSSProperties } from 'react';

const num = (n: number) => String(n).padStart(2, '0');

export default function AboutPage({ locale }: { locale: Locale }) {
  const t = content[locale].about;

  return (
    <>
      <section className="about" aria-label={t.aria}>
        <div className="about-1">
          <span className="big-num" style={{ fontSize: 'clamp(72px, 10vw, 140px)' }}>02</span>
          <WriterIllustration />
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{t.label}</span>
        </div>

        <div className="about-photo grayscale">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${basePath}/assets/img/sobre-retrato.webp`} alt={t.photoAlt} width={900} height={1117} />
        </div>

        <div className="about-3">
          <h1>{t.heading}</h1>
          {t.bio.map((p) => (
            <p key={p}><Rich text={p} /></p>
          ))}
          <div className="facts">
            {t.facts.map((f) => (
              <div key={f.k}>
                <div className="meta-label">{f.k}</div>
                <div className="v">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="more" aria-labelledby="letter">
        <div className="more-side">
          <h2 id="letter" className="label" style={{ fontFamily: 'inherit' }}>{t.letter.label}</h2>
        </div>
        <div className="more-body">
          <blockquote className="letter">
            <p>{t.letter.text}</p>
            <footer>{t.letter.sign}</footer>
          </blockquote>
        </div>
      </section>

      <section className="more" aria-labelledby="method">
        <div className="more-side">
          <h2 id="method" className="label" style={{ fontFamily: 'inherit' }}>{t.method.label}</h2>
          <p className="more-title">{t.method.title}</p>
        </div>
        <div className="more-body">
          <ol className="ruled steps">
            {t.method.steps.map((s, i) => (
              <li key={s.t}>
                <span className="step-n">{num(i + 1)}</span>
                <div>
                  <div className="row-title">{s.t}</div>
                  <p className="row-sub">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="more" aria-labelledby="compare">
        <div className="more-side">
          <h2 id="compare" className="label" style={{ fontFamily: 'inherit' }}>{t.compare.label}</h2>
          <p className="more-title">{t.compare.title}</p>
        </div>
        <div className="more-body">
          <p className="row-meta">{t.compare.example}</p>
          <div className="compare">
            {([t.compare.before, t.compare.after] as const).map((side, i) => (
              <div key={side.label} className={i === 0 ? 'compare-before' : 'compare-after'}>
                <span className="meta-label">{side.label}</span>
                <ul>
                  {side.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="more" aria-labelledby="timeline">
        <div className="more-side">
          <h2 id="timeline" className="label" style={{ fontFamily: 'inherit' }}>{t.timeline.label}</h2>
        </div>
        <div className="more-body">
          <InView className="timeline">
            <ol>
              {t.timeline.items.map((it, i) => (
                <li key={it.title + it.when} style={{ '--i': i } as CSSProperties}>
                  <span className="tl-dot" aria-hidden="true" />
                  <div className="row-top">
                    <span className="row-title">{it.title}</span>
                    <span className={`tag tag-${it.kind}`}>{it.tag}</span>
                  </div>
                  <div className="row-meta">{it.when}</div>
                  <div className="row-sub">{it.org}</div>
                  {it.items.length > 0 && (
                    <ul>{it.items.map((x) => <li key={x}>{x}</li>)}</ul>
                  )}
                </li>
              ))}
            </ol>
          </InView>
        </div>
      </section>

      <section className="more" aria-labelledby="tools">
        <div className="more-side">
          <h2 id="tools" className="label" style={{ fontFamily: 'inherit' }}>{t.tools.label}</h2>
        </div>
        <div className="more-body">
          {t.tools.groups.map((g) => (
            <div key={g.name} className="tool-group">
              <span className="meta-label">{g.name}</span>
              <ul className="badges">
                {g.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
          <div className="link-row">
            <Link href={routes.certs[locale]} className="btn btn-secondary">{t.links.certs} <span aria-hidden="true">→</span></Link>
            <Link href={routes.services[locale]} className="btn btn-secondary">{t.links.services} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
