import Link from 'next/link';
import { HeroIllustration } from '@/components/Illustrations';
import { content } from '@/lib/content';
import { available } from '@/lib/availability';
import { routes, type Locale } from '@/lib/i18n';

export default function HomePage({ locale }: { locale: Locale }) {
  const t = content[locale].home;

  return (
    <header className="cover" aria-label={t.aria}>
      <div className="cover-col cover-1">
        <span className="kicker">{t.kicker}</span>
        <h1 className="cover-title cover-morph" aria-label="Diana Vitória de Araújo">
          Diana<br />Vitória de<br />Araújo
        </h1>
        <p className="cover-lead">{t.lead}</p>
      </div>

      <div className="cover-col cover-2">
        <HeroIllustration />
      </div>

      <div className="cover-col cover-3">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="stamp">{t.stamp[0]}<br />{t.stamp[1]}</div>
          <span style={{ fontSize: 15, color: 'var(--color-neutral-800)' }}>{t.sub}</span>
          <span className={`availability${available ? ' on' : ''}`}>
            <span className="dot" aria-hidden="true" />
            {available ? t.availableOn : t.availableOff}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span className="meta-label" style={{ letterSpacing: '0.12em' }}>{t.tocTitle}</span>
          <nav className="toc" aria-label={t.tocAria}>
            {t.toc.map((item) => (
              <Link key={item.key} href={routes[item.key as 'about' | 'projects' | 'contact'][locale]}>
                <span>{item.label}</span>
                <span>{t.page} {item.num}</span>
              </Link>
            ))}
          </nav>
        </div>

        <Link href={routes.projects[locale]} className="btn btn-primary">
          {t.cta} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
