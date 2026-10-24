// Gera os cartões de compartilhamento (1200×630) em public/assets/og/.
// Uso: node scripts/generate-og.mjs   (rode de novo se mudar títulos ou cores)
import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';

const require = createRequire(import.meta.url);
const { ImageResponse } = require('next/dist/compiled/@vercel/og/index.node.js');

const cards = {
  'home-pt': ['Diana Vitória de Araújo', 'QA Analyst & Designer', '#ec3013'],
  'about-pt': ['Sobre mim', 'Comunicação com método.', '#d6304a'],
  'projects-pt': ['Trabalhos selecionados', 'Branding, design, planejamento e redação.', '#e4521a'],
  'contact-pt': ['Vamos conversar', 'Sobre o seu projeto.', '#b8242a'],
  'services-pt': ['Serviços', 'QA & Automação · Design & Identidade', '#d6304a'],
  'certs-pt': ['Certificações', 'Cursos e formações complementares.', '#d6304a'],
  'home-en': ['Diana Vitória de Araújo', 'QA Analyst & Designer', '#ec3013'],
  'about-en': ['About me', 'Communication with method.', '#d6304a'],
  'projects-en': ['Selected work', 'Branding, design, planning and writing.', '#e4521a'],
  'contact-en': ["Let's talk", 'About your project.', '#b8242a'],
  'services-en': ['Services', 'QA & Automation · Design & Identity', '#d6304a'],
  'certs-en': ['Certifications', 'Courses and complementary training.', '#d6304a'],
};

const el = (type, style, children) => ({ type, props: { style, children } });

const card = (title, subtitle, accent) =>
  el(
    'div',
    {
      width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      background: '#f3f2f2', color: '#201e1d', padding: 64, border: '14px solid #201e1d',
    },
    [
      el('div', { display: 'flex', fontSize: 28, letterSpacing: 4, textTransform: 'uppercase', color: '#605d5d' }, 'Portfolio · 2027'),
      el('div', { display: 'flex', flexDirection: 'column' }, [
        el('div', { display: 'flex', fontSize: 112, fontWeight: 900, lineHeight: 0.95, textTransform: 'uppercase', color: accent }, title),
        el('div', { display: 'flex', fontSize: 38, marginTop: 28 }, subtitle),
      ]),
      el('div', { display: 'flex', justifyContent: 'space-between', fontSize: 28, fontWeight: 700 }, [
        el('span', {}, 'Diana Vitória de Araújo'),
        el('span', { color: accent }, 'd-vitoria.github.io'),
      ]),
    ],
  );

await mkdir('public/assets/og', { recursive: true });
for (const [name, [title, subtitle, accent]] of Object.entries(cards)) {
  const res = new ImageResponse(card(title, subtitle, accent), { width: 1200, height: 630 });
  await writeFile(`public/assets/og/${name}.png`, Buffer.from(await res.arrayBuffer()));
  console.log('ok', name);
}
