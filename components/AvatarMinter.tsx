'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useAccount } from 'wagmi'
import Image from 'next/image'

interface AvatarData {
  type: string
  image: string
  category: string
}

const avatarTypes = [
  { type: 'MAN1', image: '/images/NFT.png', category: 'animal' },
  { type: 'MAN2', image: '/images/NFT.png', category: 'animal' },
  { type: 'MAN3', image: '/images/NFT.png', category: 'animal' },
  { type: 'MAN4', image: '/images/NFT.png', category: 'animal' },
]

export function AvatarMinter() {
  const { isConnected } = useAccount()
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0)
  const [isMinting, setIsMinting] = useState(false)
  const [mintCount, setMintCount] = useState(0)
  const maxMints = 3

  const currentAvatar = avatarTypes[currentAvatarIndex]

  const nextAvatar = () => {
    setCurrentAvatarIndex((prev) => (prev + 1) % avatarTypes.length)
  }

  const prevAvatar = () => {
    setCurrentAvatarIndex((prev) => (prev - 1 + avatarTypes.length) % avatarTypes.length)
  }

  const handleMint = async () => {
    if (!isConnected || mintCount >= maxMints) return
    
    setIsMinting(true)
    // Simulate minting process
    setTimeout(() => {
      setIsMinting(false)
      setMintCount(prev => prev + 1)
      alert(`NFT minted successfully! You have minted ${mintCount + 1}/${maxMints} NFTs.`)
    }, 3000)
  }

  const isMintDisabled = !isConnected || isMinting || mintCount >= maxMints

  return (
    <section id="create" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-midnight-950 to-midnight-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Choose your avatar</span>
          </h2>
          <p className="text-midnight-300 text-lg max-w-2xl mx-auto">
            Select your avatar and mint your unique NFT
          </p>
        </motion.div>

        <div className="bg-midnight-900/50 backdrop-blur-sm border border-midnight-800 rounded-2xl p-8">
          {/* Avatar Display */}
          <div className="flex flex-col items-center mb-8">
            {/* Avatar Image */}
            <div className="relative w-64 h-64 mb-6">
              <Image
                src={currentAvatar.image}
                alt={`${currentAvatar.type} Avatar`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Avatar Navigation */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={prevAvatar}
                className="w-12 h-12 bg-midnight-800 hover:bg-midnight-700 rounded-full flex items-center justify-center transition-colors border border-midnight-600"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <span className="text-xl font-bold text-white px-6 py-2 bg-midnight-800 rounded-lg border border-midnight-600">
                {currentAvatar.type}
              </span>
              
              <button
                onClick={nextAvatar}
                className="w-12 h-12 bg-midnight-800 hover:bg-midnight-700 rounded-full flex items-center justify-center transition-colors border border-midnight-600"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Mint Counter */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-midnight-800 px-4 py-2 rounded-lg border border-midnight-600">
              <span className="text-midnight-300 text-sm">Minted:</span>
              <span className="text-white font-bold">{mintCount}</span>
              <span className="text-midnight-400 text-sm">/ {maxMints}</span>
            </div>
          </div>

          {/* Mint Button */}
          <div className="text-center">
            <button
              onClick={handleMint}
              disabled={isMintDisabled}
              className="w-full max-w-md bg-gradient-to-r from-salmon-600 to-flamingo-600 hover:from-salmon-700 hover:to-flamingo-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isMinting ? 'MINTING...' : 'MINT'}
            </button>
            
            <p className="text-midnight-400 text-sm mt-3">
              PRICED AT 0.01 ETH
            </p>
            
            {!isConnected && (
              <p className="text-midnight-400 text-sm mt-2">
                Connect your wallet to start minting
              </p>
            )}
            
            {mintCount >= maxMints && (
              <p className="text-midnight-400 text-sm mt-2">
                You have reached the maximum limit of {maxMints} NFTs
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 