import PrintPage from '@/components/pages/PrintPage';
import { pageMetadata } from '@/lib/meta';

export const metadata = { ...pageMetadata('en', 'print'), robots: { index: false } };

export default function Page() {
  return <PrintPage locale="en" />;
}
