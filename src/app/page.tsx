import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Header, Footer, AvatarMinter } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#13061F] lg:h-screen lg:overflow-hidden">
      <div className="relative z-10 min-h-screen lg:h-full flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center pt-20 pb-4 px-4 sm:px-6 lg:py-0 lg:px-0">
          <AvatarMinter />
        </div>
        <Footer />
      </div>
    </main>
  );
}
