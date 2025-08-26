'use client'

import { Store, ArrowRight, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo and Main Content */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <Logo size="lg" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 leading-tight">
              Your Trusted <span className="text-gradient">Distribution Partner</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              C&F AGENT/ Authorized DISTRIBUTOR for edible Oil, Sugar, Rice, Spices and Dry Fruits. 
              We are growth partners — not just distributors or agents. Every brand we take on is nurtured 
              like our own, with a clear goal of scaling up, solving problems jointly, and driving long-term success.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-secondary-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Authorized Distributor</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Established 2017</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">North India Coverage</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">7+</div>
                <div className="text-secondary-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-600 mb-2">5+</div>
                <div className="text-secondary-600">Product Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary-600 mb-2">2</div>
                <div className="text-secondary-600">Operational Hubs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-secondary-600">Partner Focus</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/partners" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/products" className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-4 px-8 rounded-lg border-2 border-primary-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                View Our Products
                <Store className="w-5 h-5" />
              </Link>
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="text-secondary-600 hover:text-primary-600 transition-colors duration-300 text-sm">
                About Us →
              </Link>
              <Link href="/company" className="text-secondary-600 hover:text-primary-600 transition-colors duration-300 text-sm">
                Company Profile →
              </Link>
              <Link href="/careers" className="text-secondary-600 hover:text-primary-600 transition-colors duration-300 text-sm">
                Join Our Team →
              </Link>
              <Link href="/contact" className="text-secondary-600 hover:text-primary-600 transition-colors duration-300 text-sm">
                Get In Touch →
              </Link>
            </div>
          </div>

          {/* Key Business Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Store className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">Multi-Channel Distribution</h3>
              </div>
              <p className="text-secondary-600">
                Modern Trade, E-commerce, and General Trade coverage from Delhi-NCR and Bihar hubs.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">Strategic Partnership</h3>
              </div>
              <p className="text-secondary-600">
                We grow every brand as if it were our own, ensuring long-term success and market expansion.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Store className="w-6 h-6 text-secondary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900">Own Brand Portfolio</h3>
              </div>
              <p className="text-secondary-600">
                Premium Glomin nuts and dry fruits for cross-channel distribution and brand building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

