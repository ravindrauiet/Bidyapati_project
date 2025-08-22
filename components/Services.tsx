'use client'

import { ShoppingCart, Truck, Store, Globe, Users, BarChart3 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Services() {
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

    const element = document.getElementById('services-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: ShoppingCart,
      title: "Modern Trade & E-commerce",
      description: "Strategic partnerships with key players in organized retail, ensuring prominent product placement and maximum visibility.",
      features: ["Direct retailer relationships", "High service fill rate", "Inventory management", "Market insights"],
      color: "primary"
    },
    {
      icon: Store,
      title: "General Trade Distribution",
      description: "Deep-rooted understanding of traditional markets with customized distribution strategies for maximum reach.",
      features: ["Local market expertise", "Customized strategies", "Wide network coverage", "Trusted partnerships"],
      color: "accent"
    },
    {
      icon: Truck,
      title: "Comprehensive Logistics",
      description: "Integrated supply chain solutions ensuring smooth product flow from warehouse to retail shelves.",
      features: ["Warehouse management", "Timely delivery", "Route optimization", "Real-time tracking"],
      color: "secondary"
    },
    {
      icon: Users,
      title: "Strategic Partnership",
      description: "We serve as strategic partners, not just distributors, maximizing your market share and brand presence.",
      features: ["Market share growth", "Brand loyalty", "Strategic planning", "Performance analytics"],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Regional Market Expertise",
      description: "Specialized knowledge of Delhi-NCR and Bihar markets with tailored approaches for each region.",
      features: ["Regional insights", "Cultural understanding", "Local networks", "Market dynamics"],
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Data-driven insights and reporting to optimize your distribution strategy and maximize ROI.",
      features: ["Sales analytics", "Performance metrics", "Market trends", "Strategic recommendations"],
      color: "secondary"
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
    <section id="services-section" className="section-padding bg-white">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive distribution and logistics solutions tailored to meet the unique demands 
              of modern trade, e-commerce, and general trade markets.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getColorClasses(service.color)} mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-8 h-8 ${getIconColor(service.color)}`} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                
                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-secondary-700">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Distribution Strategy?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Partner with Glomin Overseas and experience the power of strategic distribution 
              that drives growth and maximizes your market presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
