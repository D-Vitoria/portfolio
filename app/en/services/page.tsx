import ServicesPage from '@/components/pages/ServicesPage';
import { pageMetadata } from '@/lib/meta';

export const metadata = pageMetadata('en', 'services');

export default function Page() {
  return <ServicesPage locale="en" />;
}
