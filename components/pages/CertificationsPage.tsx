import Link from 'next/link';
import CertList from '@/components/CertList';
import { StampIllustration } from '@/components/Illustrations';
import { content } from '@/lib/content';
import { routes, type Locale } from '@/lib/i18n';

export default function CertificationsPage({ locale }: { locale: Locale }) {
  const t = content[locale].certs;

  return (
    <>
      <header className="sheet-head">
        <Link href={routes.about[locale]} className="sheet-back">{t.back}</Link>
        <h1>{t.heading}</h1>
        <StampIllustration />
        <p>{t.lead}</p>
      </header>
      <CertList locale={locale} />
    </>
  );
}
