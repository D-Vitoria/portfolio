import ServicesPage from '@/components/pages/ServicesPage';
import { pageMetadata } from '@/lib/meta';

export const metadata = pageMetadata('pt', 'services');

export default function Page() {
  return <ServicesPage locale="pt" />;
}
