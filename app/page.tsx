import HomePage from '@/components/pages/HomePage';
import { pageMetadata } from '@/lib/meta';

export const metadata = pageMetadata('pt', 'home');

export default function Page() {
  return <HomePage locale="pt" />;
}
