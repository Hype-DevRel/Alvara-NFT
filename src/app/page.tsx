import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Header, Footer, AvatarMinter, FloatingFAQ } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#13061F]">
      <Header />
      <div className="pt-20 md:pt-24">
        <div className="flex items-center justify-center py-8 px-4 sm:px-6 lg:py-12 lg:px-0">
          <AvatarMinter />
        </div>
        <Footer />
      </div>
      <FloatingFAQ />
    </main>
  );
}
