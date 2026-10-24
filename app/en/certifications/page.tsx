import CertificationsPage from '@/components/pages/CertificationsPage';
import { pageMetadata } from '@/lib/meta';

export const metadata = pageMetadata('en', 'certs');

export default function Page() {
  return <CertificationsPage locale="en" />;
}
