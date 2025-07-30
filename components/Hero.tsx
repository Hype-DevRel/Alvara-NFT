'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
              <span className="gradient-text">MINT NFTS.</span>
              <br />
              <span className="text-white">MINT LEGACY.</span>
            </h1>
            <p className="text-xl md:text-2xl text-midnight-300 max-w-3xl mx-auto leading-relaxed">
              NFT platform for minting and trading NFTs. Loren ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 