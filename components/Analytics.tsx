import Script from 'next/script';

/**
 * Analytics sem cookies, ligado só se as variáveis de ambiente existirem (sem elas, nada é carregado).
 *  - Plausible: NEXT_PUBLIC_PLAUSIBLE_DOMAIN=d-vitoria.github.io
 *  - Umami:     NEXT_PUBLIC_UMAMI_ID=<website-id> (e, se for self-hosted, NEXT_PUBLIC_UMAMI_SRC)
 */
export default function Analytics() {
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const umami = process.env.NEXT_PUBLIC_UMAMI_ID;

  if (plausible) {
    return <Script defer data-domain={plausible} src="https://plausible.io/js/script.js" strategy="afterInteractive" />;
  }
  if (umami) {
    return (
      <Script
        defer
        data-website-id={umami}
        src={process.env.NEXT_PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js'}
        strategy="afterInteractive"
      />
    );
  }
  return null;
}
