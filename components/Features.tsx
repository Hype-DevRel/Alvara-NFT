'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Users, 
  Coins, 
  Globe, 
  Sparkles,
  Lock,
  TrendingUp,
  Palette,
  Smartphone
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Secure & Trusted',
    description: 'Built on Ethereum with industry-standard security practices and audited smart contracts.',
    color: 'accent-green'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Mint NFTs in seconds with our optimized smart contracts and efficient gas usage.',
    color: 'accent-orange'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join thousands of creators and collectors in our growing NFT ecosystem.',
    color: 'primary-500'
  },
  {
    icon: Coins,
    title: 'Low Cost',
    description: 'Minimal gas fees and no platform fees. Keep more of your earnings.',
    color: 'accent-green'
  },
  {
    icon: Globe,
    title: 'Multi-Chain Support',
    description: 'Mint on Ethereum, Polygon, Optimism, Arbitrum, and more networks.',
    color: 'secondary-500'
  },
  {
    icon: Sparkles,
    title: 'Advanced Features',
    description: 'Custom attributes, collections, and metadata support for professional creators.',
    color: 'accent-purple'
  },
  {
    icon: Lock,
    title: 'Ownership Rights',
    description: 'Full ownership and control of your NFTs with transparent blockchain records.',
    color: 'accent-blue'
  },
  {
    icon: TrendingUp,
    title: 'Marketplace Ready',
    description: 'Your NFTs are automatically compatible with major marketplaces.',
    color: 'accent-green'
  },
  {
    icon: Palette,
    title: 'Rich Metadata',
    description: 'Support for custom attributes, descriptions, and external links.',
    color: 'secondary-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Create and manage your NFTs from any device with our responsive design.',
    color: 'primary-500'
  }
]

export function Features() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Why Choose Alvara?</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Experience the next generation of NFT creation with our cutting-edge platform
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover group"
              >
                <div className={`w-12 h-12 bg-${feature.color}/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${feature.color}/30 transition-colors`}>
                  <Icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-dark-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Creating?
            </h3>
            <p className="text-dark-300 mb-6">
              Join thousands of creators who are already building their digital legacy on Alvara
            </p>
            <button className="btn-primary">
              Start Minting Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 