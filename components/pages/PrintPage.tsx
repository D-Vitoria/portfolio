import Link from 'next/link';
import PrintButton from '@/components/PrintButton';
import Rich from '@/components/Rich';
import { content } from '@/lib/content';
import { routes, type Locale } from '@/lib/i18n';
import { getProjects, pad } from '@/lib/projects';

/** Portfolio em um só documento, pronto para "Salvar como PDF" (A4). */
export default function PrintPage({ locale }: { locale: Locale }) {
  const c = content[locale];
  const t = c.print;
  const projects = getProjects(locale);

  return (
    <article className="print-doc">
      <div className="print-bar">
        <Link href={routes.contact[locale]}>{t.back}</Link>
        <div>
          <PrintButton label={t.button} />
          <p>{t.hint}</p>
        </div>
      </div>

      <header className="print-cover">
        <span className="kicker">{c.home.kicker}</span>
        <h1>Diana<br />Vitória de<br />Araújo</h1>
        <p>{c.home.lead}</p>
        <p className="print-sub">{c.home.sub} · {c.home.stamp.join(' ')}</p>
      </header>

      <section>
        <h2>{c.about.label}</h2>
        {c.about.bio.map((p) => (
          <p key={p}><Rich text={p} /></p>
        ))}
        <blockquote className="letter"><p>{c.about.letter.text}</p><footer>{c.about.letter.sign}</footer></blockquote>
      </section>

      <section>
        <h2>{c.about.timeline.label}</h2>
        <ol className="print-list">
          {c.about.timeline.items.map((it) => (
            <li key={it.title + it.when}>
              <strong>{it.title}</strong> — {it.org}
              <span>{it.when}</span>
              {it.items.length > 0 && <ul>{it.items.map((x) => <li key={x}>{x}</li>)}</ul>}
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>{t.projects}</h2>
        <ol className="print-list">
          {projects.map((p, i) => (
            <li key={p.id}>
              <strong>{pad(i + 1)} · {p.title}</strong> — {c.projects.cats[p.catId]}, {p.year}
              <span>{p.client} · {p.role}</span>
              <p>{p.lead}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>{c.services.heading}</h2>
        <div className="print-cols">
          {c.services.groups.map((g) => (
            <div key={g.title}>
              <h3>{g.title}</h3>
              <ul>{g.items.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>{c.certs.heading}</h2>
        <ul className="print-list">
          {c.certs.items.map((x) => (
            <li key={x.title}>{x.title} — {x.provider} <span>{x.date}</span></li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{t.contact}</h2>
        <ul className="print-list">
          {c.contact.links.map((l) => (
            <li key={l.label}>{l.label}: {l.value}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
