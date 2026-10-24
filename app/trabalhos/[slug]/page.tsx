import type { Metadata } from 'next';
import ProjectPage from '@/components/pages/ProjectPage';
import { shareImage } from '@/lib/meta';
import { getProjects } from '@/lib/projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects('pt').map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjects('pt').find((x) => x.slug === slug);
  if (!p) return {};
  const image = shareImage('pt', 'projects');
  return {
    title: p.title,
    description: p.lead,
    openGraph: { images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', images: [image] },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProjectPage locale="pt" slug={slug} />;
}
