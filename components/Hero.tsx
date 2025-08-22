'use client'

import { ArrowRight, Truck, Globe, TrendingUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Company Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Established 2017</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Glomin</span> Overseas
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Premier distribution and logistics company with strategic presence across North India, 
            specializing in Modern Trade, E-commerce, and General Trade solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-400 mb-2">6+</div>
              <div className="text-primary-100">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-400 mb-2">2</div>
              <div className="text-primary-100">Strategic Hubs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-400 mb-2">100%</div>
              <div className="text-primary-100">Commitment</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary group">
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/20">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Truck className="absolute top-1/4 left-10 w-8 h-8 text-primary-300/30 animate-bounce" />
        <Globe className="absolute top-1/3 right-20 w-8 h-8 text-accent-300/30 animate-bounce delay-500" />
        <TrendingUp className="absolute bottom-1/4 left-20 w-8 h-8 text-primary-300/30 animate-bounce delay-1000" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
