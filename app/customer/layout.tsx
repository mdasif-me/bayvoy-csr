import CustomerLayout from "@/layouts/customer-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CustomerLayout>{children}</CustomerLayout>;
}
