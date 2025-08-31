'use client'

import { Building, MapPin, Users, TrendingUp, Target, Award, Globe, CheckCircle } from 'lucide-react'
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

  const delhiFeatures = [
    "Direct retail connections",
    "High visibility & availability",
    "High service fill rates",
    "Delhi-NCR coverage",
    "North-East India supply"
  ]

  const biharFeatures = [
    "100-km belt coverage",
    "Up to Nepal border",
    "Village retailer access",
    "Local market expertise",
    "Community development"
  ]

  return (
    <section id="business-model-section" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Our Business Model
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Two-Pillar <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Distribution Model</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our strategic approach combines the power of modern urban markets with deep rural penetration, 
              creating a comprehensive distribution network that serves every market segment.
            </p>
          </div>

          {/* Main Model Overview */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Delhi-NCR Operations */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 border border-blue-200 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-200 rounded-full opacity-20 translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Delhi-NCR Operations</h3>
                      <p className="text-blue-600 font-medium">Modern Trade & E-commerce Expertise</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our Delhi hub powers Modern Trade and E-commerce distribution with cutting-edge technology 
                    and strategic retail partnerships.
                  </p>
                  
                  <div className="space-y-3">
                    {delhiFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bihar Operations */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 border border-green-200 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full opacity-20 -translate-y-16 -translate-x-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-emerald-200 rounded-full opacity-20 translate-y-12 translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Bihar Operations</h3>
                      <p className="text-green-600 font-medium">Rural Market Coverage with Mithila Focus</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our Bihar hub in Madhubani focuses on General Trade distribution, ensuring even small 
                    village retailers have access to quality FMCG products.
                  </p>
                  
                  <div className="space-y-3">
                    {biharFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Advantages */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Strategic Business Advantages</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">Market Penetration</h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  Deep penetration into both urban and rural markets, ensuring comprehensive coverage across North East India.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">Scalable Growth</h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  Flexible infrastructure that adapts to market demands and supports rapid business expansion.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">Local Expertise</h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  Strong roots in local communities with deep understanding of regional market dynamics.
                </p>
              </div>
            </div>
          </div>

          {/* Empowerment Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Empowerment Through Business</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  We believe business success and social responsibility go hand in hand. By creating employment 
                  and empowering local talent, we build a loyal team while giving back to the community.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-yellow-400" />
                    <span className="text-gray-200">Honoring our "Samajh ka Rin" (debt to society)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-200">Modernizing village retailers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-green-400" />
                    <span className="text-gray-200">Building competitive local businesses</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h4 className="text-2xl font-bold mb-4 text-center">Our Impact</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                      <div className="text-gray-300 text-sm">Village Retailers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                      <div className="text-gray-300 text-sm">Jobs Created</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">100km</div>
                      <div className="text-gray-300 text-sm">Coverage Belt</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">7+</div>
                      <div className="text-gray-300 text-sm">Years of Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience Our Distribution Excellence?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Partner with us to leverage our two-pillar distribution model and expand your market reach across North East India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Start Partnership
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
  )
}
