import ProjectList from '@/components/ProjectList';
import { pageMetadata } from '@/lib/meta';

export const metadata = pageMetadata('pt', 'projects');

export default function Page() {
  return <ProjectList locale="pt" />;
}
