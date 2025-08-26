'use client'

import { Store, ArrowRight, CheckCircle, Users, Award } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 left-16 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-32 right-16 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-16 left-1/2 w-36 h-36 bg-indigo-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Company Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 font-medium text-sm">Trusted Since 2017</span>
          </div>

          {/* Logo and Title */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <Logo size="md" className="text-white" />
            </div>
            <h2 className="text-lg text-white/80 font-light mb-2">Welcome to</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Glomin
              </span>{' '}
              <span className="text-white">Overseas</span>
            </h1>
          </div>

          {/* Main Description */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed font-light">
              C&F AGENT/ Authorized DISTRIBUTOR for Edible Oil, Sugar, Rice, Spices and Dry Fruits
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              We are growth partners — not just distributors or agents. Every brand we take on is nurtured 
              like our own, with a clear goal of scaling up, solving problems jointly, and driving long-term success.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="font-medium text-sm">Authorized Distributor</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="font-medium text-sm">Established 2017</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="font-medium text-sm">North India Coverage</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/partners" className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 text-sm">
              Partner With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/products" className="group bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 text-sm">
              View Our Products
              <Store className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 group-hover:scale-110 transition-transform">7+</div>
              <div className="text-white/70 text-xs">Years of Excellence</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1 group-hover:scale-110 transition-transform">5+</div>
              <div className="text-white/70 text-xs">Product Categories</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">2</div>
              <div className="text-white/70 text-xs">Strategic Hubs</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-white/70 text-xs">Partner Focus</div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/30 transition-colors">
                <Store className="w-4 h-4 text-blue-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2 text-center">Multi-Channel Distribution</h3>
              <p className="text-white/70 text-center text-xs leading-relaxed">
                Modern Trade, E-commerce, and General Trade coverage from Delhi-NCR and Bihar hubs.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/30 transition-colors">
                <Award className="w-4 h-4 text-purple-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2 text-center">Strategic Partnership</h3>
              <p className="text-white/70 text-center text-xs leading-relaxed">
                We grow every brand as if it were our own, ensuring long-term success and market expansion.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/30 transition-colors">
                <Award className="w-4 h-4 text-green-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2 text-center">Own Brand Portfolio</h3>
              <p className="text-white/70 text-center text-xs leading-relaxed">
                Premium Glomin nuts and dry fruits for cross-channel distribution excellence.
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="text-center">
            <p className="text-white/60 mb-4 text-sm">Explore More About Glomin Overseas</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/about" className="text-white/80 hover:text-white transition-colors duration-300 text-xs hover:scale-105 transform">
                About Us →
              </Link>
              <Link href="/company" className="text-white/80 hover:text-white transition-colors duration-300 text-xs hover:scale-105 transform">
                Company Profile →
              </Link>
              <Link href="/careers" className="text-white/80 hover:text-white transition-colors duration-300 text-xs hover:scale-105 transform">
                Join Our Team →
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors duration-300 text-xs hover:scale-105 transform">
                Get In Touch →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
