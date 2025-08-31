'use client'

import { Store, ArrowRight, CheckCircle, Users, Award } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    // Simulate image loading
    const timer = setTimeout(() => setImagesLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-500/5 to-orange-500/5 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.06),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-60 h-60 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Company Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md border border-amber-400/30 rounded-full px-6 py-3 mb-8 shadow-2xl shadow-amber-500/10">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse"></div>
            <span className="text-gray-800 font-semibold text-sm tracking-wide">Trusted Since 2017</span>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse delay-1000"></div>
          </div>

          {/* Logo and Title */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-md border border-amber-400/30 rounded-full mb-8 shadow-2xl shadow-amber-500/20 hover:scale-110 transition-all duration-500">
              <Logo size="lg" className="text-gray-800 drop-shadow-lg" />
            </div>
            <h2 className="text-xl text-gray-600 font-light mb-3 tracking-wider">Welcome to</h2>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-800 mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                Glomin
              </span>{' '}
              <span className="text-gray-800">Overseas</span>
            </h1>
          </div>

          {/* Main Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-md border border-amber-400/20 rounded-2xl p-8 mb-6 shadow-2xl shadow-amber-500/10">
              <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-4 leading-relaxed">
                C&F AGENT/ Authorized DISTRIBUTOR for Edible Oil, Sugar, Rice, Spices and Dry Fruits
              </p>
              <p className="text-lg md:text-xl text-amber-700 font-medium mb-4 leading-relaxed">
                Driving FMCG Growth in North India. Your trusted C&F Agent, Super Stockist, and Authorized Distributor.
              </p>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
              We are growth partners — not just distributors or agents. Every brand we take on is nurtured 
              like our own, with a clear goal of scaling up, solving problems jointly, and driving long-term success.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-gray-800 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-400/30 rounded-full px-4 py-2 shadow-lg shadow-green-500/20 hover:scale-105 transition-all duration-300">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="font-semibold text-sm">Authorized Distributor</span>
            </div>
            <div className="flex items-center gap-3 text-gray-800 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md border border-amber-400/30 rounded-full px-4 py-2 shadow-lg shadow-amber-500/20 hover:scale-105 transition-all duration-300">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="font-semibold text-sm">Established 2017</span>
            </div>
            <div className="flex items-center gap-3 text-gray-800 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md border border-orange-400/30 rounded-full px-4 py-2 shadow-lg shadow-orange-500/20 hover:scale-105 transition-all duration-300">
              <Users className="w-5 h-5 text-orange-400" />
              <span className="text-gray-800 font-semibold text-sm">North India Coverage</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/partners" className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-amber-500/40 flex items-center justify-center gap-3 text-lg border border-amber-400/30">
              Partner With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
            <Link href="/products" className="group bg-gradient-to-r from-black/10 to-black/5 hover:from-black/20 hover:to-black/10 text-black font-bold py-4 px-8 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-500 backdrop-blur-md flex items-center justify-center gap-3 text-lg hover:scale-110 shadow-2xl">
              View Our Products
              <Store className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
            </Link>
          </div>

         

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="text-center group bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-md border border-amber-400/20 rounded-2xl p-6 hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="text-3xl md:text-4xl font-black text-amber-400 mb-2 group-hover:scale-125 transition-transform duration-500">9+</div>
              <div className="text-gray-800 font-semibold text-sm">Years of Excellence</div>
            </div>
            <div className="text-center group bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-md border border-orange-400/20 rounded-2xl p-6 hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-3xl md:text-4xl font-black text-orange-400 mb-2 group-hover:scale-125 transition-transform duration-500">5+</div>
              <div className="text-gray-800 font-semibold text-sm">Product Categories</div>
            </div>
            <div className="text-center group bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-md border border-red-400/20 rounded-2xl p-6 hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="text-3xl md:text-4xl font-black text-red-400 mb-2 group-hover:scale-125 transition-transform duration-500">2</div>
              <div className="text-gray-800 font-semibold text-sm">Strategic Hubs</div>
            </div>
            <div className="text-center group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-md border border-green-400/20 rounded-2xl p-6 hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="text-3xl md:text-4xl font-black text-green-400 mb-2 group-hover:scale-125 transition-transform duration-500">100%</div>
              <div className="text-gray-800 font-semibold text-sm">Partner Focus</div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="text-center">
            <p className="text-gray-600 mb-6 text-base font-medium">Explore More About Glomin Overseas</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="text-gray-800 hover:text-amber-400 transition-all duration-300 text-sm font-medium hover:scale-110 transform bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-md border border-amber-400/20 rounded-full px-4 py-2 hover:shadow-lg hover:shadow-amber-500/20">
                About Us →
              </Link>
              <Link href="/company" className="text-gray-800 hover:text-orange-400 transition-all duration-300 text-sm font-medium hover:scale-110 transform bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-md border border-orange-400/20 rounded-full px-4 py-2 hover:shadow-lg hover:shadow-orange-500/20">
                Company Profile →
              </Link>
              <Link href="/careers" className="text-gray-800 hover:text-red-400 transition-all duration-300 text-sm font-medium hover:scale-110 transform bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-md border border-red-400/20 rounded-full px-4 py-2 hover:shadow-lg hover:shadow-red-500/20">
                Join Our Team →
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-pink-400 transition-all duration-300 text-sm font-medium hover:scale-110 transform bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-md border border-pink-400/20 rounded-full px-4 py-2 hover:shadow-lg hover:shadow-amber-500/20">
                Get In Touch →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
