import type { CSSProperties } from 'react';

const EASE = 'cubic-bezier(.6,0,.3,1)';

const draw = (delay: number, dur = 1.6, ease = EASE): CSSProperties => ({
  animation: `dvDraw ${dur}s ${ease} ${delay}s forwards`,
});
const lightOn = (delay: number): CSSProperties => ({ animationDelay: `${delay}s` });
const accent: CSSProperties = { fill: 'var(--color-accent)', stroke: 'none' };

function Draw({ d, delay, dur, ease, stroke, width }: {
  d: string; delay: number; dur?: number; ease?: string; stroke?: string; width?: number;
}) {
  return (
    <path
      pathLength={1}
      d={d}
      className="illo-draw"
      stroke={stroke}
      strokeWidth={width}
      style={draw(delay, dur, ease)}
    />
  );
}

/** Retrato de perfil com flores no cabelo (capa). */
export function HeroIllustration() {
  const step = 0.28;
  const strokes = [
    'M150 28C104 26 78 62 80 108c1 18-6 27-15 39-5 7 2 11 9 11-2 9 0 14 5 16-5 7-1 14 9 16 2 18 12 30 36 30 14 0 20 18 20 52v40',
    'M150 28c50 4 76 52 70 110-5 48 14 92 30 140',
    'M168 48c34 40 14 96 24 140 8 34-4 70 8 118',
    'M140 30c-40 20-50 70-40 110',
    'M98 112c6-4 14-4 18 0',
    'M104 150c-4 2-6 6-4 9',
  ];
  return (
    <svg className="illo" viewBox="0 0 260 340" width="360" height="470" style={{ maxWidth: '100%', maxHeight: '62vh', height: 'auto' }} aria-hidden="true">
      {strokes.map((d, i) => <Draw key={i} d={d} delay={i * step} />)}
      <circle className="illo-on" cx="176" cy="118" r="9" style={{ ...accent, ...lightOn(3.6) }} />
      <circle className="illo-on" cx="170" cy="168" r="7" style={{ ...accent, ...lightOn(3.9) }} />
      <circle pathLength={1} className="illo-draw" cx="176" cy="118" r="9" style={draw(1.68)} />
      <Draw d="M176 109c8-10 20-4 16 6M185 118c12 2 12 16 0 16M176 127c-2 12-16 10-14 0M167 118c-10-4-6-18 6-14" delay={1.96} />
      <circle pathLength={1} className="illo-draw" cx="170" cy="168" r="7" style={draw(2.24)} />
      <Draw d="M170 161c6-8 16-2 12 5M177 168c10 2 8 13-1 12M170 175c-2 9-12 8-11 0" delay={2.52} />
      <Draw d="M176 136c-6 10-6 20-6 25M174 186c2 10 8 18 4 30" delay={2.8} />
      <Draw d="M60 340c10-40 40-60 80-62 40 2 70 20 84 62" delay={3.08} />
    </svg>
  );
}

/** Mão escrevendo (Sobre mim). */
export function WriterIllustration() {
  const dur = 1.4;
  return (
    <svg className="illo" viewBox="0 0 200 160" width="220" style={{ maxWidth: '100%', height: 'auto', flex: 'none' }} aria-hidden="true">
      <Draw d="M20 140c14-10 24 6 36-2s22-10 34 0 20 8 34-2" delay={1.6} dur={1.8} ease="ease-in-out" stroke="var(--color-accent)" width={2.4} />
      <path className="illo-on" d="M138 120v16M130 128h16M133 123l10 10M143 123l-10 10" stroke="var(--color-accent)" style={lightOn(3.3)} />
      <Draw d="M120 20L60 110M128 26L68 116M60 110l-4 14 12-8" delay={0.55} dur={dur} />
      <Draw d="M150 60c-14 8-30 22-44 40-8 10-6 22 6 26 14 4 30-2 42-14" delay={0.8} dur={dur} />
      <Draw d="M112 92c-8-6-18-4-20 4" delay={1.05} dur={dur} />
      <Draw d="M150 60c10-4 22 0 30 10M154 112c12-6 22-4 30 2" delay={1.3} dur={dur} />
    </svg>
  );
}

/** Luminária pendurada que acende (cabeçalho de Projetos). */
export function LampIllustration({ className }: { className?: string }) {
  return (
    <svg className={`illo ${className ?? ''}`} viewBox="0 0 80 124" width="72" aria-hidden="true">
      <path className="illo-on" d="M22 74L4 124h72L58 74z" style={{ ...accent, fillOpacity: 0.14, ...lightOn(2.4) }} />
      <circle className="illo-on" cx="40" cy="76" r="7" style={{ ...accent, ...lightOn(2.4) }} />
      <Draw d="M40 0v38c0 6-4 6-4 10" delay={0.3} dur={1} />
      <Draw d="M34 48h12M30 54h20L62 74H18z" delay={1.1} dur={0.9} />
      <Draw d="M33 74c0 10 14 10 14 0" delay={1.8} dur={0.5} />
      <g className="illo-on" stroke="var(--color-accent)" style={lightOn(2.4)}>
        <path d="M40 92v10M26 88l-6 9M54 88l6 9M14 80l-9 4M66 80l9 4" />
      </g>
    </svg>
  );
}

/** Avião de papel que flutua (Contato). */
export function PlaneIllustration() {
  return (
    <svg className="illo" viewBox="0 0 240 140" width="240" style={{ maxWidth: '100%', height: 'auto', flex: 'none' }} aria-hidden="true">
      <Draw d="M10 124c30 10 60 0 70-20s-10-40-30-26 0 40 40 36 50-30 74-48" delay={0.3} dur={1.4} stroke="var(--color-accent)" />
      <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'dvFloat 3.2s ease-in-out 2s infinite' }}>
        <Draw d="M150 40L230 14 196 96 178 70z" delay={0.55} dur={1.4} />
        <Draw d="M178 70L230 14M178 70v24l16-20" delay={0.8} dur={1.4} />
      </g>
    </svg>
  );
}
