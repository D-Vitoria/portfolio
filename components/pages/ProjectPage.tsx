import Link from 'next/link';
import { notFound } from 'next/navigation';
import { basePath } from '@/lib/basePath';
import { content } from '@/lib/content';
import { routes, type Locale } from '@/lib/i18n';
import { getProjects, pad } from '@/lib/projects';

const labelStyle = { fontFamily: 'inherit' } as const;

export default function ProjectPage({ locale, slug }: { locale: Locale; slug: string }) {
  const t = content[locale].projects;
  const c = t.case;
  const projects = getProjects(locale);
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();

  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const n = pad(i + 1);
  const meta = [
    { k: c.meta.cat, v: t.cats[p.catId] },
    { k: c.meta.client, v: p.client },
    { k: c.meta.role, v: p.role },
    { k: c.meta.year, v: p.year },
  ];
  const gallery = p.gallery ?? [];

  return (
    <article>
      <div className="case-bar">
        <Link href={routes.projects[locale]}>{c.back}</Link>
        <span>{content[locale].ui.project} {n} / {pad(projects.length)}</span>
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
        <div className="ph grayscale">
          {p.image
            // eslint-disable-next-line @next/next/no-img-element
            ? <img src={`${basePath}${p.image}`} alt="" />
            : <span>[ {c.imagePlaceholder} ]</span>}
        </div>
      </header>

      <section className="case-cols">
        <div>
          <span className="label" style={labelStyle}>{c.context}</span>
          <p>{c.contextText}</p>
        </div>
        <div>
          <span className="label" style={labelStyle}>{c.challenge}</span>
          <p>{c.challengeText}</p>
        </div>
        <div>
          <span className="label" style={labelStyle}>{c.process}</span>
          <ol>{p.steps.map((s, k) => <li key={s}>{k + 1}. {s}</li>)}</ol>
        </div>
      </section>

      {gallery.length === 0 ? (
        <section className="case-block ruled-bottom">
          <div className="side"><span className="label">{c.excerpt}</span></div>
          <div className="body" style={{ maxWidth: 760 }}>
            <p style={{ fontSize: 19, lineHeight: 1.7, maxWidth: 'none' }}>{c.excerptIntro}</p>
            <blockquote
              style={{
                margin: '8px 0', padding: '20px 0', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 30,
                lineHeight: 1.2, color: 'var(--color-accent-700)',
                borderTop: '2px solid var(--color-text)', borderBottom: '2px solid var(--color-text)',
              }}
            >
              “{c.excerptQuote}”
            </blockquote>
            <p style={{ fontSize: 19, lineHeight: 1.7, maxWidth: 'none' }}>{c.excerptOutro}</p>
            <span className="btn btn-secondary" style={{ alignSelf: 'flex-start', minWidth: 280 }}>
              {c.excerptCta} <span aria-hidden="true">↗</span>
            </span>
          </div>
        </section>
      ) : (
        <section className="gallery" aria-label={c.gallery}>
          {gallery.map((label, k) => (
            <div key={label} className={`ph grayscale${k === 0 && gallery.length % 2 === 1 ? ' wide' : ''}`}>
              <span>[ {label} ]</span>
            </div>
          ))}
        </section>
      )}

      <section className="case-block ruled-bottom">
        <div className="side"><span className="label">{c.result}</span></div>
        <div className="body">
          <p className="big">{c.resultHeadline}</p>
          <p>{c.resultText}</p>
        </div>
      </section>

      <Link href={`${routes.projects[locale]}/${next.slug}`} className="next-case">
        <span className="next-label">{c.next}</span>
        <span className="next-title">
          <span className="next-n">{pad((i + 1) % projects.length + 1)}</span>
          {next.title}
        </span>
        <span className="next-arrow" aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
