'use client'

import { Store, ArrowRight, CheckCircle, Users, Award, Building2, TrendingUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
    <div className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-indigo-100/15"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-200/15 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-100/20 to-transparent"></div>
      </div>

      {/* Subtle Geometric Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-blue-200/30 rounded-full opacity-20"></div>
      <div className="absolute top-40 right-32 w-24 h-24 border border-indigo-300/20 rounded-full opacity-15"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-blue-200/25 rounded-full opacity-20"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Company Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-6 py-3 mb-6 shadow-lg">
            <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
            <span className="font-semibold text-sm tracking-wide">Trusted Since 2017</span>
            <div className="w-2 h-2 bg-indigo-200 rounded-full"></div>
          </div>

          {/* Logo and Title */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-white-600 to-indigo-600 rounded-full mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Image 
                src="/images/dry fruits/logo.png" 
                alt="Glomin Overseas Logo" 
                width={80} 
                height={80} 
                className="rounded-full"
              />
            </div>
            <h2 className="text-xl text-blue-600 font-light mb-2 tracking-wider">Welcome to</h2>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Glomin</span>{' '}
              <span className="text-gray-800">Overseas</span>
            </h1>
          </div>

          {/* Main Description */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-4 shadow-lg">
              <p className="text-2xl md:text-2xl lg:text-3xl text-gray-800 font-semibold leading-relaxed">
                Driving FMCG Growth in North East India.
              </p>
              <p> Your trusted C&F Agent, Super Stockist, and Authorized Distributor.</p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
              We are growth partners — not just distributors or agents. Every brand we take on is nurtured 
              like our own, with a clear goal of scaling up, solving problems jointly, and driving long-term success.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <div className="flex items-center gap-3 text-gray-800 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-sm">Authorized Distributor</span>
            </div>
            <div className="flex items-center gap-3 text-gray-800 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-sm">Established 2017</span>
            </div>
            <div className="flex items-center gap-3 text-gray-800 bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-gray-800 font-semibold text-sm">North East India Coverage</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/partners" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg border border-blue-500">
              Partner With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link href="/products" className="group bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-6 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 flex items-center justify-center gap-3 text-lg hover:scale-105 shadow-lg hover:shadow-xl">
              View Our Products
              <Store className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="text-center group bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="text-2xl md:text-3xl font-black text-blue-600 mb-1 group-hover:scale-110 transition-transform duration-300">9+</div>
              <div className="text-gray-700 font-semibold text-xs">Years of Excellence</div>
            </div>
            <div className="text-center group bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="text-2xl md:text-3xl font-black text-indigo-600 mb-1 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-gray-700 font-semibold text-xs">Product Categories</div>
            </div>
            <div className="text-center group bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="text-2xl md:text-3xl font-black text-purple-600 mb-1 group-hover:scale-110 transition-transform duration-300">2</div>
              <div className="text-gray-700 font-semibold text-xs">Strategic Hubs</div>
            </div>
            <div className="text-center group bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <div className="text-2xl md:text-3xl font-black text-green-600 mb-1 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-gray-700 font-semibold text-xs">Partner Focus</div>
            </div>
          </div>

          {/* Business Highlights */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-800 mb-2">Strategic Distribution</h3>
                <p className="text-gray-600 text-xs">Strategic hubs in Delhi-NCR and Bihar for comprehensive North East India coverage</p>
              </div>
              <div className="text-center bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-800 mb-2">Growth Partnership</h3>
                <p className="text-gray-600 text-xs">We don't just distribute - we partner for long-term brand success and market growth</p>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-800 mb-2">Premium Products</h3>
                <p className="text-gray-600 text-xs">From edible oils to our own Glomin brand dry fruits, quality is our priority</p>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="text-center">
            <p className="text-gray-700 mb-4 text-base font-medium">Explore More About Glomin Overseas</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm font-medium hover:scale-105 transform bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-3 py-2 hover:shadow-lg">
                About Us →
              </Link>
              <Link href="/company" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 text-sm font-medium hover:scale-105 transform bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full px-3 py-2 hover:shadow-lg">
                Company Profile →
              </Link>
              <Link href="/careers" className="text-gray-700 hover:text-purple-600 transition-all duration-300 text-sm font-medium hover:scale-105 transform bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-full px-3 py-2 hover:shadow-lg">
                Join Our Team →
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-violet-600 transition-all duration-300 text-sm font-medium hover:scale-105 transform bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-full px-3 py-2 hover:shadow-lg">
                Get In Touch →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
