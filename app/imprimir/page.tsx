import PrintPage from '@/components/pages/PrintPage';
import { pageMetadata } from '@/lib/meta';

export const metadata = { ...pageMetadata('pt', 'print'), robots: { index: false } };

export default function Page() {
  return <PrintPage locale="pt" />;
}
