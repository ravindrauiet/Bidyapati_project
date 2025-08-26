'use client'

import { Target, Users, Award, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

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

  return (
    <section id="about-section" className="section-padding gradient-bg">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              About <span className="text-gradient">Glomin Overseas</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              C&F AGENT/ Authorized DISTRIBUTOR for edible Oil, Sugar, Rice, Spices and Dry Fruits etc. 
              We are growth partners — not just distributors or agents.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-secondary-800 mb-4">
                Your Strategic Partner in Distribution Excellence
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Founded in 2017, Glomin Overseas is a focused FMCG food products distribution company with a strong presence across North India. 
                We are growth partners — not just distributors or agents. Every brand we take on is nurtured like our own, 
                with a clear goal of scaling up, solving problems jointly, and driving long-term success.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                With operational hubs in Delhi-NCR and Bihar, we manage Modern Trade (MT), E-commerce (Ecom), and General Trade (GT) channels. 
                Our robust distribution infrastructure, adequate manpower, reliable data systems, timely reporting, and smart inventory planning, 
                makes us capable of servicing even small purchase orders efficiently while maintaining consistent supply.
              </p>
              
              {/* Key Points */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-secondary-700">Strategic presence across Delhi-NCR and Bihar</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-secondary-700">Specialized expertise in Modern Trade & E-commerce</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-secondary-700">Own premium nuts and dry fruits under "Glomin" brand</p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
                    <Target className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-primary-800 mb-2">Strategic Focus</h4>
                    <p className="text-sm text-primary-700">Targeted market penetration</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl">
                    <Users className="w-12 h-12 text-accent-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-accent-800 mb-2">Local Expertise</h4>
                    <p className="text-sm text-accent-700">Deep market understanding</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl">
                    <Award className="w-12 h-12 text-secondary-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-secondary-800 mb-2">Quality Service</h4>
                    <p className="text-sm text-secondary-700">Consistent excellence</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl">
                    <Clock className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-primary-800 mb-2">Timely Delivery</h4>
                    <p className="text-sm text-primary-700">Reliable distribution</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-200 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <button className="btn-primary">
              Learn More About Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
