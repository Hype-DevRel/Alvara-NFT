import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { AvatarMinter } from '@/components/AvatarMinter'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight-950">
      {/* Background gradient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-flamingo-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <AvatarMinter />
        <Footer />
      </div>
    </main>
  )
} 