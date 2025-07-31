'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Upload, CheckCircle, Loader2, Sparkles, Coins } from 'lucide-react'

interface NFTData {
  name: string
  description: string
  image: File | null
  imagePreview: string
  attributes: Array<{ trait_type: string; value: string }>
  external_url: string
  collection: string
}

interface MintingModalProps {
  isOpen: boolean
  step: number
  isMinting: boolean
  nftData: NFTData
}

const mintingSteps = [
  {
    title: 'Uploading to IPFS',
    description: 'Storing your NFT metadata and image on decentralized storage',
    icon: Upload,
  },
  {
    title: 'Preparing Transaction',
    description: 'Creating the smart contract transaction',
    icon: Coins,
  },
  {
    title: 'Confirming on Blockchain',
    description: 'Waiting for transaction confirmation',
    icon: Loader2,
  },
  {
    title: 'Minting NFT',
    description: 'Creating your unique digital asset',
    icon: Sparkles,
  },
  {
    title: 'Success!',
    description: 'Your NFT has been successfully minted',
    icon: CheckCircle,
  },
]

export function MintingModal({ isOpen, step, isMinting, nftData }: MintingModalProps) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-dark-900 border border-dark-800 rounded-xl p-6 w-full max-w-md"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white">
              Minting NFT
            </h3>
            <button className="text-dark-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* NFT Preview */}
          {nftData.imagePreview && (
            <div className="mb-6">
              <div className="relative overflow-hidden rounded-lg bg-dark-800">
                <img
                  src={nftData.imagePreview}
                  alt="NFT Preview"
                  className="w-full h-32 object-cover"
                />
              </div>
              <p className="text-white font-medium mt-2 text-center">
                {nftData.name || 'Untitled NFT'}
              </p>
            </div>
          )}

          {/* Progress Steps */}
          <div className="space-y-4">
            {mintingSteps.map((mintingStep, index) => {
              const Icon = mintingStep.icon
              const isActive = index === step
              const isCompleted = index < step
              const isPending = index > step

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-primary-500/20 border border-primary-500/50'
                      : isCompleted
                      ? 'bg-accent-green/20 border border-accent-green/50'
                      : 'bg-dark-800 border border-dark-700'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isActive
                        ? 'bg-primary-500'
                        : isCompleted
                        ? 'bg-accent-green'
                        : 'bg-dark-700'
                    }`}
                  >
                    {isActive && isMinting ? (
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                    ) : (
                      <Icon className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium ${
                        isActive || isCompleted ? 'text-white' : 'text-dark-400'
                      }`}
                    >
                      {mintingStep.title}
                    </p>
                    <p className="text-xs text-dark-400">
                      {mintingStep.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Success Message */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-accent-green/20 border border-accent-green/50 rounded-lg text-center"
            >
              <CheckCircle className="w-8 h-8 text-accent-green mx-auto mb-2" />
              <p className="text-white font-medium mb-1">NFT Minted Successfully!</p>
              <p className="text-dark-300 text-sm">
                Your NFT is now live on the blockchain
              </p>
            </motion.div>
          )}

          {/* Transaction Hash (simulated) */}
          {step >= 3 && (
            <div className="mt-4 p-3 bg-dark-800 rounded-lg">
              <p className="text-xs text-dark-400 mb-1">Transaction Hash:</p>
              <p className="text-xs text-primary-400 font-mono break-all">
                0x1234...5678
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 