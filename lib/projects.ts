export type Project = {
  slug: string;
  title: string;
  desc: string;
  cat: string;
  year: string;
  client: string;
  role: string;
  lead: string;
  steps: string[];
  /** Rótulos das imagens da galeria. Sem galeria, a página usa o layout de texto. */
  gallery?: string[];
};

/** Projetos fictícios do protótipo "Revista" — trocar pelos reais depois. */
export const projects: Project[] = [
  {
    slug: 'identidade-visual-cafe-exemplo',
    title: 'Identidade visual · Café Exemplo',
    desc: 'Marca, paleta e aplicações para uma cafeteria de bairro.',
    cat: 'Branding',
    year: '2026',
    client: 'Café Exemplo',
    role: 'Pesquisa, conceito, design',
    lead: 'Marca, paleta e aplicações para uma cafeteria de bairro que queria parecer próxima sem perder a personalidade.',
    steps: ['Pesquisa e referências', 'Conceito e naming', 'Desenho da marca', 'Aplicações'],
    gallery: ['logo', 'embalagem', 'cardápio', 'redes sociais', 'fachada'],
  },
  {
    slug: 'campanha-de-lancamento',
    title: 'Campanha de lançamento',
    desc: 'Conceito, peças para redes e mídia exterior.',
    cat: 'Planejamento',
    year: '2025',
    client: 'Marca exemplo',
    role: 'Planejamento, conceito, redação',
    lead: 'Conceito de campanha e desdobramento em peças para redes sociais e mídia exterior.',
    steps: ['Briefing e diagnóstico', 'Público e mensagem', 'Conceito criativo', 'Plano de mídia'],
    gallery: ['key visual', 'outdoor', 'posts', 'stories'],
  },
  {
    slug: 'serie-de-cartazes',
    title: 'Série de cartazes',
    desc: 'Estudo tipográfico em grade, em tons de vermelho.',
    cat: 'Design',
    year: '2025',
    client: 'Projeto autoral',
    role: 'Design e tipografia',
    lead: 'Uma série de cartazes explorando grade, tipografia e uma única cor.',
    steps: ['Referências', 'Grade e tipografia', 'Composição', 'Impressão'],
    gallery: ['cartaz 01', 'cartaz 02', 'cartaz 03', 'detalhe'],
  },
  {
    slug: 'manifesto-de-marca',
    title: 'Manifesto de marca',
    desc: 'Texto institucional e tom de voz.',
    cat: 'Escrita / Redação',
    year: '2025',
    client: 'Marca exemplo',
    role: 'Redação e tom de voz',
    lead: 'Texto institucional e guia de tom de voz para uma marca em reposicionamento.',
    steps: ['Entrevistas', 'Pilares da marca', 'Redação', 'Guia de tom de voz'],
  },
  {
    slug: 'reportagem-cultura-local',
    title: 'Reportagem: cultura local',
    desc: 'Pauta, apuração e texto para veículo universitário.',
    cat: 'Jornalismo',
    year: '2024',
    client: 'Jornal universitário',
    role: 'Pauta, apuração, texto',
    lead: 'Reportagem sobre a cena cultural do bairro, publicada em veículo universitário.',
    steps: ['Pauta', 'Apuração e entrevistas', 'Texto', 'Edição'],
  },
  {
    slug: 'calendario-editorial',
    title: 'Calendário editorial',
    desc: 'Planejamento de conteúdo e roteiros para Instagram.',
    cat: 'Conteúdo / Social',
    year: '2024',
    client: 'Marca exemplo',
    role: 'Estratégia de conteúdo, roteiros',
    lead: 'Planejamento mensal de conteúdo e roteiros para o Instagram de uma marca local.',
    steps: ['Análise do perfil', 'Pilares de conteúdo', 'Calendário', 'Roteiros'],
    gallery: ['grade do feed', 'carrossel', 'reels', 'stories'],
  },
];

export const categories = ['Todos', 'Design', 'Escrita / Redação', 'Branding', 'Jornalismo', 'Planejamento', 'Conteúdo / Social'];

export const pad = (n: number) => String(n).padStart(2, '0');
