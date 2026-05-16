import { VendorLayout } from '@/layouts/vendor-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <VendorLayout>{children}</VendorLayout>;
}
