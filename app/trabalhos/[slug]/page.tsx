import type { Metadata } from 'next';
import ProjectPage from '@/components/pages/ProjectPage';
import { getProjects } from '@/lib/projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects('pt').map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjects('pt').find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.lead } : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProjectPage locale="pt" slug={slug} />;
}
