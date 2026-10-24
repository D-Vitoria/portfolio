import type { Locale } from './i18n';

export type CatId = 'design' | 'writing' | 'branding' | 'journalism' | 'planning' | 'social';
export const catIds: CatId[] = ['design', 'writing', 'branding', 'journalism', 'planning', 'social'];

type ProjectText = {
  slug: string;
  title: string;
  desc: string;
  client: string;
  role: string;
  lead: string;
  steps: string[];
  /** Rótulos das imagens da galeria. Sem galeria, a página usa o layout de texto. */
  gallery?: string[];
};

type ProjectData = {
  id: string;
  year: string;
  catId: CatId;
  /** Imagem principal (caminho em /public). Sem ela, a prévia e o hero mostram um espaço reservado. */
  image?: string;
  text: Record<Locale, ProjectText>;
};

/** Projetos fictícios do protótipo "Revista" — trocar pelos reais depois. */
const data: ProjectData[] = [
  {
    id: 'cafe',
    year: '2026',
    catId: 'branding',
    text: {
      pt: {
        slug: 'identidade-visual-cafe-exemplo',
        title: 'Identidade visual · Café Exemplo',
        desc: 'Marca, paleta e aplicações para uma cafeteria de bairro.',
        client: 'Café Exemplo',
        role: 'Pesquisa, conceito, design',
        lead: 'Marca, paleta e aplicações para uma cafeteria de bairro que queria parecer próxima sem perder a personalidade.',
        steps: ['Pesquisa e referências', 'Conceito e naming', 'Desenho da marca', 'Aplicações'],
        gallery: ['logo', 'embalagem', 'cardápio', 'redes sociais', 'fachada'],
      },
      en: {
        slug: 'visual-identity-cafe-exemplo',
        title: 'Visual identity · Café Exemplo',
        desc: 'Brand, palette and applications for a neighborhood coffee shop.',
        client: 'Café Exemplo',
        role: 'Research, concept, design',
        lead: 'Brand, palette and applications for a neighborhood coffee shop that wanted to feel close without losing personality.',
        steps: ['Research and references', 'Concept and naming', 'Brand design', 'Applications'],
        gallery: ['logo', 'packaging', 'menu', 'social media', 'storefront'],
      },
    },
  },
  {
    id: 'campaign',
    year: '2025',
    catId: 'planning',
    text: {
      pt: {
        slug: 'campanha-de-lancamento',
        title: 'Campanha de lançamento',
        desc: 'Conceito, peças para redes e mídia exterior.',
        client: 'Marca exemplo',
        role: 'Planejamento, conceito, redação',
        lead: 'Conceito de campanha e desdobramento em peças para redes sociais e mídia exterior.',
        steps: ['Briefing e diagnóstico', 'Público e mensagem', 'Conceito criativo', 'Plano de mídia'],
        gallery: ['key visual', 'outdoor', 'posts', 'stories'],
      },
      en: {
        slug: 'launch-campaign',
        title: 'Launch campaign',
        desc: 'Concept, social media pieces and out-of-home.',
        client: 'Example brand',
        role: 'Planning, concept, copywriting',
        lead: 'Campaign concept and its rollout into social media and out-of-home pieces.',
        steps: ['Briefing and diagnosis', 'Audience and message', 'Creative concept', 'Media plan'],
        gallery: ['key visual', 'billboard', 'posts', 'stories'],
      },
    },
  },
  {
    id: 'posters',
    year: '2025',
    catId: 'design',
    text: {
      pt: {
        slug: 'serie-de-cartazes',
        title: 'Série de cartazes',
        desc: 'Estudo tipográfico em grade, em tons de vermelho.',
        client: 'Projeto autoral',
        role: 'Design e tipografia',
        lead: 'Uma série de cartazes explorando grade, tipografia e uma única cor.',
        steps: ['Referências', 'Grade e tipografia', 'Composição', 'Impressão'],
        gallery: ['cartaz 01', 'cartaz 02', 'cartaz 03', 'detalhe'],
      },
      en: {
        slug: 'poster-series',
        title: 'Poster series',
        desc: 'Typographic study on a grid, in shades of red.',
        client: 'Personal project',
        role: 'Design and typography',
        lead: 'A poster series exploring grid, typography and a single color.',
        steps: ['References', 'Grid and typography', 'Composition', 'Printing'],
        gallery: ['poster 01', 'poster 02', 'poster 03', 'detail'],
      },
    },
  },
  {
    id: 'manifesto',
    year: '2025',
    catId: 'writing',
    text: {
      pt: {
        slug: 'manifesto-de-marca',
        title: 'Manifesto de marca',
        desc: 'Texto institucional e tom de voz.',
        client: 'Marca exemplo',
        role: 'Redação e tom de voz',
        lead: 'Texto institucional e guia de tom de voz para uma marca em reposicionamento.',
        steps: ['Entrevistas', 'Pilares da marca', 'Redação', 'Guia de tom de voz'],
      },
      en: {
        slug: 'brand-manifesto',
        title: 'Brand manifesto',
        desc: 'Institutional text and tone of voice.',
        client: 'Example brand',
        role: 'Copywriting and tone of voice',
        lead: 'Institutional text and tone-of-voice guide for a brand being repositioned.',
        steps: ['Interviews', 'Brand pillars', 'Writing', 'Tone-of-voice guide'],
      },
    },
  },
  {
    id: 'report',
    year: '2024',
    catId: 'journalism',
    text: {
      pt: {
        slug: 'reportagem-cultura-local',
        title: 'Reportagem: cultura local',
        desc: 'Pauta, apuração e texto para veículo universitário.',
        client: 'Jornal universitário',
        role: 'Pauta, apuração, texto',
        lead: 'Reportagem sobre a cena cultural do bairro, publicada em veículo universitário.',
        steps: ['Pauta', 'Apuração e entrevistas', 'Texto', 'Edição'],
      },
      en: {
        slug: 'report-local-culture',
        title: 'Report: local culture',
        desc: 'Pitch, reporting and writing for a university outlet.',
        client: 'University newspaper',
        role: 'Pitch, reporting, writing',
        lead: "A report on the neighborhood's cultural scene, published in a university outlet.",
        steps: ['Pitch', 'Reporting and interviews', 'Writing', 'Editing'],
      },
    },
  },
  {
    id: 'calendar',
    year: '2024',
    catId: 'social',
    text: {
      pt: {
        slug: 'calendario-editorial',
        title: 'Calendário editorial',
        desc: 'Planejamento de conteúdo e roteiros para Instagram.',
        client: 'Marca exemplo',
        role: 'Estratégia de conteúdo, roteiros',
        lead: 'Planejamento mensal de conteúdo e roteiros para o Instagram de uma marca local.',
        steps: ['Análise do perfil', 'Pilares de conteúdo', 'Calendário', 'Roteiros'],
        gallery: ['grade do feed', 'carrossel', 'reels', 'stories'],
      },
      en: {
        slug: 'editorial-calendar',
        title: 'Editorial calendar',
        desc: 'Content planning and scripts for Instagram.',
        client: 'Example brand',
        role: 'Content strategy, scripts',
        lead: "Monthly content planning and scripts for a local brand's Instagram.",
        steps: ['Profile analysis', 'Content pillars', 'Calendar', 'Scripts'],
        gallery: ['feed grid', 'carousel', 'reels', 'stories'],
      },
    },
  },
];

export type Project = Omit<ProjectData, 'text'> & ProjectText;

export function getProjects(locale: Locale): Project[] {
  return data.map(({ text, ...base }) => ({ ...base, ...text[locale] }));
}

export const pad = (n: number) => String(n).padStart(2, '0');
