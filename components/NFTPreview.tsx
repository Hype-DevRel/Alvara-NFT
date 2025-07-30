'use client'

import { motion } from 'framer-motion'
import { ImageIcon, Tag, ExternalLink, Sparkles } from 'lucide-react'

interface NFTData {
  name: string
  description: string
  image: File | null
  imagePreview: string
  attributes: Array<{ trait_type: string; value: string }>
  external_url: string
  collection: string
}

interface NFTPreviewProps {
  nftData: NFTData
}

export function NFTPreview({ nftData }: NFTPreviewProps) {
  const hasData = nftData.name || nftData.imagePreview || nftData.description

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Sparkles className="w-5 h-5 mr-2 text-primary-400" />
        NFT Preview
      </h3>

      {!hasData ? (
        <div className="text-center py-12">
          <ImageIcon className="w-16 h-16 mx-auto mb-4 text-dark-400" />
          <p className="text-dark-300 mb-2">No NFT data yet</p>
          <p className="text-dark-400 text-sm">
            Upload an image and fill in the details to see a preview
          </p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {/* Image */}
          {nftData.imagePreview && (
            <div className="relative overflow-hidden rounded-lg bg-dark-800">
              <img
                src={nftData.imagePreview}
                alt="NFT Preview"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="space-y-4">
            {/* Name */}
            {nftData.name && (
              <div>
                <h4 className="text-xl font-bold text-white mb-1">
                  {nftData.name}
                </h4>
                {nftData.collection && (
                  <p className="text-sm text-primary-400">
                    {nftData.collection}
                  </p>
                )}
              </div>
            )}

            {/* Description */}
            {nftData.description && (
              <div>
                <p className="text-dark-300 text-sm leading-relaxed">
                  {nftData.description}
                </p>
              </div>
            )}

            {/* External URL */}
            {nftData.external_url && (
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4 text-dark-400" />
                <a
                  href={nftData.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 text-sm transition-colors"
                >
                  View External Link
                </a>
              </div>
            )}

            {/* Attributes */}
            {nftData.attributes.length > 0 && (
              <div>
                <h5 className="text-sm font-semibold text-dark-300 mb-2 flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  Attributes
                </h5>
                <div className="grid grid-cols-2 gap-2">
                  {nftData.attributes.map((attr, index) => (
                    <div
                      key={index}
                      className="bg-dark-800 rounded-lg p-3 border border-dark-700"
                    >
                      <p className="text-xs text-dark-400 mb-1">
                        {attr.trait_type}
                      </p>
                      <p className="text-sm font-medium text-white">
                        {attr.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metadata Info */}
            <div className="pt-4 border-t border-dark-800">
              <div className="flex justify-between text-xs text-dark-400">
                <span>Standard: ERC-721</span>
                <span>Network: Ethereum</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
} 