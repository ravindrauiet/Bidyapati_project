'use client'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-2xl',
    md: 'w-12 h-12 text-3xl',
    lg: 'w-16 h-16 text-4xl'
  }

  return (
    <div className={`flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      {/* Placeholder for actual logo - replace this div with an img tag when logo is available */}
      <div className="w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold">
        G
      </div>
      
      {/* Uncomment and use this when you have the actual logo */}
      {/* 
      <img 
        src="/images/glomin-logo.png" 
        alt="Glomin Overseas Logo" 
        className="w-full h-full object-contain"
      /> 
      */}
    </div>
  )
}
