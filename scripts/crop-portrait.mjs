// Recorta o retrato da página "Sobre mim" rente ao desenho.
// Lê public/assets/img/image.png (seu original, não é alterado) e gera sobre-retrato.webp:
// sem a sobra de fundo em volta e sem a linha de chão (o site desenha a linha com CSS).
// Uso: node scripts/crop-portrait.mjs   (rode de novo se trocar o image.png)
import sharp from 'sharp';

const SRC = 'public/assets/img/image.png';
const OUT = 'public/assets/img/sobre-retrato.webp';
const MARGIN = 32; // respiro em volta do desenho, em px da imagem original

const { data, info } = await sharp(SRC).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h, channels: c } = info;
const px = (x, y) => { const i = (y * w + x) * c; return [data[i], data[i + 1], data[i + 2]]; };

const bg = px(5, 5);
const isInk = (x, y) => {
  const p = px(x, y);
  return Math.abs(p[0] - bg[0]) + Math.abs(p[1] - bg[1]) + Math.abs(p[2] - bg[2]) > 90;
};

// Linha de chão: a primeira linha em que mais de 80% da largura é traço.
let baseline = h;
for (let y = 0; y < h && baseline === h; y++) {
  let n = 0;
  for (let x = 0; x < w; x++) if (isInk(x, y)) n++;
  if (n > w * 0.8) baseline = y;
}

let top = h, left = w, right = 0;
for (let y = 0; y < baseline - 2; y++) {
  for (let x = 0; x < w; x++) {
    if (!isInk(x, y)) continue;
    if (y < top) top = y;
    if (x < left) left = x;
    if (x > right) right = x;
  }
}

const crop = {
  left: Math.max(0, left - MARGIN),
  top: Math.max(0, top - MARGIN),
  width: Math.min(w, right + MARGIN) - Math.max(0, left - MARGIN),
  height: baseline - Math.max(0, top - MARGIN),
};
console.log('fundo', bg, '· linha de chão em y =', baseline, '· recorte', crop);

await sharp(SRC).extract(crop).webp({ quality: 88 }).toFile(OUT);
const meta = await sharp(OUT).metadata();
console.log(`gerado ${OUT}: ${meta.width}x${meta.height}`);
