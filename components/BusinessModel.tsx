'use client'

import { Building2, MapPin, Users, Target, TrendingUp, Heart, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function BusinessModel() {
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

    const element = document.getElementById('business-model-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="business-model-section" className="section-padding gradient-bg">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Our <span className="text-gradient">Two-Pillar</span> Distribution Model
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Strategic distribution approach combining Modern Trade & E-commerce expertise in Delhi-NCR 
              with deep-rooted General Trade understanding in Bihar for comprehensive North India coverage.
            </p>
          </div>

          {/* Two Pillars Overview */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Delhi-NCR Operations */}
            <div className="card group hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  Delhi-NCR Operations
                </h3>
                <p className="text-primary-600 font-semibold">
                  Modern Trade & E-commerce Specialists
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-secondary-700 leading-relaxed">
                  Our Delhi hub powers Modern Trade and E-commerce distribution with direct retail connections 
                  ensuring high visibility and uninterrupted availability across Delhi-NCR and North-East India.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-secondary-800 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary-500" />
                    Service & Commitment
                  </h4>
                  <p className="text-sm text-secondary-600 pl-7">
                    We focus on brand partnership and commitment, maximizing market share through 
                    consistently high Service Fill Rates and proactive inventory management.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-secondary-800 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary-500" />
                    How We Help Companies
                  </h4>
                  <p className="text-sm text-secondary-600 pl-7">
                    By maintaining exceptional fill rates, we eliminate lost sales, enhance brand loyalty, 
                    and provide valuable market insights for strategic optimization.
                  </p>
                </div>
              </div>
            </div>

            {/* Bihar Operations */}
            <div className="card group hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-10 h-10 text-accent-600" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  Bihar Operations
                </h3>
                <p className="text-accent-600 font-semibold">
                  Strategic Business & Social Focus in Mithila
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-secondary-700 leading-relaxed">
                  Our Bihar hub in Madhubani focuses on General Trade distribution, covering a 100-km belt 
                  up to the Nepal border, ensuring even small village retailers have access to quality FMCG products.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-secondary-800 flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent-500" />
                    Business Advantage
                  </h4>
                  <p className="text-sm text-secondary-600 pl-7">
                    Deep local understanding in Mithila allows us to design effective distribution strategies 
                    for semi-urban and rural markets with strong roots in the community.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-secondary-800 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-accent-500" />
                    Empowerment Through Business
                  </h4>
                  <p className="text-sm text-secondary-600 pl-7">
                    We believe business success and social responsibility go hand in hand. By creating employment 
                    and empowering local talent, we build a loyal team while giving back to the community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Synergistic Approach */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">
                Our Unified Strength: A Synergistic Approach
              </h3>
              <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                While our operations are distinct, they are deeply interconnected, offering 
                unparalleled advantages to our brand partners.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <Globe className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-800 mb-3">
                  Comprehensive Market Coverage
                </h4>
                <p className="text-secondary-600">
                  Single partnership grants access to the full spectrum of North Indian markets, 
                  from organized modern trade to traditional general trade.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                  <Target className="w-8 h-8 text-accent-600" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-800 mb-3">
                  Tailored Solutions
                </h4>
                <p className="text-secondary-600">
                  Customized strategies leveraging channel-specific expertise in each region, 
                  maximizing your brand's potential across diverse markets.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-secondary-600" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-800 mb-3">
                  Seamless Supply Chain
                </h4>
                <p className="text-secondary-600">
                  Integrated logistics ensuring smooth product flow from Delhi warehouses to 
                  local shops near the Nepal border.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
