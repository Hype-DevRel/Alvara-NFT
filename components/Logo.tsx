import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant?: 'simple' | 'detailed'
}

export function Logo({ className = '', size = 'md', variant = 'simple' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-12',
    lg: 'h-14',
    xl: 'h-18',
    '2xl': 'h-24'
  }

  const imageSizes = {
    sm: 40,
    md: 48,
    lg: 56,
    xl: 72,
    '2xl': 96
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* Alvara Logo Image */}
      <div className={`${sizeClasses[size]} w-auto relative flex items-center justify-center`}>
        <Image
          src="/images/alvara2.png"
          alt="Alvara Logo"
          width={imageSizes[size]}
          height={imageSizes[size]}
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}

// Alternative version with more detailed text styling to match the cutout effect
export function LogoDetailed({ className = '', size = 'md' }: LogoProps) {
  return <Logo className={className} size={size} variant="detailed" />
} 