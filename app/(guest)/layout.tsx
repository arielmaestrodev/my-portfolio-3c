import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function GuestLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-6">
        {children}
      </main>
      <Footer />
    </>
  );
}