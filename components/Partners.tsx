'use client'

import { Target, TrendingUp, Users, Award, Globe, Building, BarChart3, Heart, Star } from 'lucide-react'
import { useState, useEffect } from 'react'
import BrandPortfolio from './BrandPortfolio'

export default function Partners() {
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

    const element = document.getElementById('partners-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const partnershipBenefits = [
    {
      icon: Target,
      title: "Strategic Growth",
      description: "We don't just distribute; we help you grow market share and expand your reach strategically",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Data-driven insights and market feedback to optimize your distribution strategy",
      color: "accent"
    },
    {
      icon: Users,
      title: "Local Market Expertise",
      description: "Deep understanding of Delhi-NCR and Bihar markets for targeted expansion",
      color: "secondary"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Maintain your brand standards across all distribution channels",
      color: "primary"
    },
    {
      icon: Globe,
      title: "Multi-Channel Access",
      description: "Single partnership opens doors to Modern Trade, E-commerce, and General Trade",
      color: "accent"
    },
    {
      icon: Building,
      title: "Infrastructure Support",
      description: "Robust warehousing, logistics, and inventory management systems",
      color: "secondary"
    }
  ]

  const partnershipProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Understanding your brand, products, and market objectives",
      icon: Users
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Creating a customized distribution strategy for your brand",
      icon: Target
    },
    {
      step: "03",
      title: "Market Entry",
      description: "Launching your products across our distribution network",
      icon: TrendingUp
    },
    {
      step: "04",
      title: "Growth & Optimization",
      description: "Continuous monitoring and strategy refinement for maximum impact",
      icon: BarChart3
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-50 border-primary-200 text-primary-800'
      case 'accent':
        return 'bg-accent-50 border-accent-200 text-accent-800'
      case 'secondary':
        return 'bg-secondary-50 border-secondary-200 text-secondary-800'
      default:
        return 'bg-primary-50 border-primary-200 text-primary-800'
    }
  }

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary-600'
      case 'accent':
        return 'text-accent-600'
      case 'secondary':
        return 'text-secondary-600'
      default:
        return 'text-primary-600'
    }
  }

  return (
    <section id="partners-section" className="section-padding bg-white">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Become Our <span className="text-gradient">Strategic Partner</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              We're not just distributors — we're growth partners. Every brand we take on is nurtured like our own, 
              with a clear goal of scaling up, solving problems jointly, and driving long-term success.
            </p>
          </div>

          {/* Partnership Philosophy */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <Heart className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">Our Partnership Philosophy</h3>
              <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                We believe in building lasting relationships based on trust, transparency, and mutual growth. 
                When you partner with Glomin Overseas, you're not just getting a distributor — you're getting 
                a strategic ally committed to your success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Target className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-800 mb-3">Shared Vision</h4>
                <p className="text-secondary-600">We align our goals with yours, working together towards market leadership</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-accent-600" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-800 mb-3">Joint Problem Solving</h4>
                <p className="text-secondary-600">Facing challenges together and finding innovative solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-secondary-600" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-800 mb-3">Long-term Commitment</h4>
                <p className="text-secondary-600">Building sustainable success through enduring partnerships</p>
              </div>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-secondary-900 text-center mb-12">Why Partner With Us?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getColorClasses(benefit.color)} mb-4`}>
                      <benefit.icon className={`w-8 h-8 ${getIconColor(benefit.color)}`} />
                    </div>
                    <h4 className="text-xl font-semibold text-secondary-900 mb-2">{benefit.title}</h4>
                  </div>
                  <p className="text-secondary-600 text-center">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

              <BrandPortfolio />
          {/* Partnership Process */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-secondary-900 text-center mb-12">Our Partnership Process</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                      {step.step}
                    </div>
                    {index < partnershipProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transform -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <step.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-secondary-800 mb-3">{step.title}</h4>
                  <p className="text-secondary-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">Success Stories</h3>
              <p className="text-secondary-600 max-w-3xl mx-auto">
                See how our strategic partnerships have transformed brands and driven market success.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-secondary-700 italic mb-4">
                  "Glomin Overseas transformed our distribution network in North East India. Their strategic approach 
                  and deep market understanding helped us achieve 40% growth in just 18 months."
                </p>
                <div className="text-sm text-secondary-600">
                  — Marketing Director, Premium Edible Oil Brand
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-secondary-700 italic mb-4">
                  "The team at Glomin Overseas doesn't just distribute our products — they're true partners 
                  in our growth journey. Their insights and market knowledge are invaluable."
                </p>
                <div className="text-sm text-secondary-600">
                  — CEO, Gourmet Spices Company
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Growth Journey?</h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join the growing list of successful brands that trust Glomin Overseas as their strategic 
              distribution partner. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Download Partnership Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
