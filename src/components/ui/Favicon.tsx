import React from 'react'
import Image from 'next/image'

interface FaviconProps {
  className?: string
  size?: number
}

export function Favicon({ className = '', size = 32 }: FaviconProps) {
  return (
    <Image
      src="/images/alvara2.png"
      alt="Alvara Favicon"
      width={size}
      height={size}
      className={className}
    />
  )
} 