'use client'

import { Target, Users, Globe, Award, TrendingUp, CheckCircle,ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BrandPortfolio from './BrandPortfolio'
import Footer from './Footer'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const keyPoints = [
    {
      icon: Target,
      title: "Own premium nuts and dry fruits under 'Glomin' brand",
      description: "We market our own premium quality products alongside partner brands",
      color: "blue"
    },
    {
      icon: Users,
      title: "Reliable distribution",
      description: "Robust infrastructure with adequate manpower and reliable data systems",
      color: "purple"
    },
    {
      icon: Globe,
      title: "Multi-brand capability",
      description: "Wide portfolio making supply flexible even for small PO volumes",
      color: "green"
    },
    {
      icon: Award,
      title: "Quick Commerce Ready",
      description: "Adapt to market shifts ensuring fast, reliable supply",
      color: "orange"
    },
    {
      icon: TrendingUp,
      title: "Experienced Leadership",
      description: "Deep expertise in structured business management and compliance",
      color: "indigo"
    },
    {
      icon: CheckCircle,
      title: "Long-term Relationships",
      description: "Prioritize trust, transparency, and performance over short-term gain",
      color: "emerald"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 border-blue-200 text-blue-800'
      case 'purple':
        return 'bg-purple-50 border-purple-200 text-purple-800'
      case 'green':
        return 'bg-green-50 border-green-200 text-green-800'
      case 'orange':
        return 'bg-orange-50 border-orange-200 text-orange-800'
      case 'indigo':
        return 'bg-indigo-50 border-indigo-200 text-indigo-800'
      case 'emerald':
        return 'bg-emerald-50 border-emerald-200 text-emerald-800'
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800'
    }
  }

  const getIconColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-blue-600'
      case 'purple':
        return 'text-purple-600'
      case 'green':
        return 'text-green-600'
      case 'orange':
        return 'text-orange-600'
      case 'indigo':
        return 'text-indigo-600'
      case 'emerald':
        return 'text-emerald-600'
      default:
        return 'text-blue-600'
    }
  }

  return (
    <>
    <section id="about-section" className="section-padding bg-gradient-to-br from-slate-50 via-teal-50 to-blue-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              About Glomin Overseas
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We Are <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Growth Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded in 2017, Glomin Overseas is a focused FMCG food products distribution company with a strong presence across North East India. 
              We are growth partners — not just distributors or agents.
            </p>
            <p className="text-lg text-blue-600 font-semibold max-w-4xl mx-auto leading-relaxed mt-4">
              Driving FMCG Growth in North East India. Your trusted C&F Agent, Super Stockist, and Authorized Distributor.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Main Text */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Every brand we take on is nurtured like our own, with a clear goal of scaling up, solving problems jointly, 
                  and driving long-term success. With operational hubs in Delhi-NCR and Bihar, we manage Modern Trade (MT), 
                  E-commerce (Ecom), and General Trade (GT) channels.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our robust distribution infrastructure, adequate manpower, reliable data systems, timely reporting, and smart 
                  inventory planning, makes us capable of servicing even small purchase orders efficiently while maintaining consistent supply.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  We work with multiple brands across categories, helping them grow to the next level while staying fully aligned 
                  with industry trends such as Quick Commerce, modern retail requirements, and consumer convenience expectations.
                </p>
              </div>

              {/* Highlight Box */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Commitment</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Alongside partner brands, we also market our own premium nuts and dry fruits under the name "Glomin," 
                  ensuring quality and consistency across all our offerings.
                </p>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  2017
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Delhi-NCR Hub</h3>
                    <p className="text-gray-600">Modern Trade & E-commerce Excellence</p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Bihar Hub</h3>
                    <p className="text-gray-600">General Trade & Rural Market Coverage</p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">North East India</h3>
                    <p className="text-gray-600">Comprehensive Market Coverage</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
  {/* Featured Dry Fruits Section */}
        <div className="mb-16 bg-gradient-to-r from-amber-100/80 to-orange-100/80 backdrop-blur-md border border-amber-300/50 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Featured: Premium Dry Fruits & Nuts</h3>
              <p className="text-amber-700 max-w-3xl mx-auto text-lg">
                Discover our exclusive Glomin brand collection featuring 25+ premium dry fruits and nuts varieties. 
                Perfect for bulk orders and customized gift packaging.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold text-amber-800 mb-4">Why Choose Glomin Dry Fruits?</h4>
                <ul className="space-y-3 text-amber-700">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="font-medium">Premium quality handpicked products</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="font-medium">Bulk deals with competitive pricing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="font-medium">Customized gift packs for all occasions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="font-medium">Wedding, corporate & festival specials</span>
                  </li>
                </ul>
                <Link 
                  href="/products"
                  className="inline-flex items-center gap-2 mt-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View Dry Fruits Collection
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                    <img 
                      src={`/images/dry fruits/dryfru${i + 1}.jpg`}
                      alt={`Premium Dry Fruit ${i + 1}`}
                      className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Brand Portfolio & Infrastructure */}
          <BrandPortfolio />

          {/* Key Points Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Glomin Overseas?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${getColorClasses(point.color)} mb-4 group-hover:scale-110 transition-transform`}>
                      <point.icon className={`w-10 h-10 ${getIconColor(point.color)}`} />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h4>
                  </div>
                  <p className="text-gray-600 text-center leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the growing list of successful brands that trust Glomin Overseas as their strategic distribution partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
       
      </div>
       
    </section>
    <Footer />
    </>
  )
}
