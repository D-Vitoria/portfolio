import ContactPage from '@/components/pages/ContactPage';
import { pageMetadata } from '@/lib/meta';

export const metadata = pageMetadata('pt', 'contact');

export default function Page() {
  return <ContactPage locale="pt" />;
}
