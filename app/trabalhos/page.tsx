import type { Metadata } from 'next';
import ProjectList from '@/components/ProjectList';
import { basePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Trabalhos',
  openGraph: { url: `https://d-vitoria.github.io${basePath}/trabalhos` },
};

export default function Trabalhos() {
  return <ProjectList />;
}
