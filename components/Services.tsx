'use client'

import { ShoppingCart, Store, Globe, Users, BarChart3, Package, Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const warehouseImages = [
    '/images/warehouse/warehouse1.jpg',
    '/images/warehouse/warehouse2.jpg',
    '/images/warehouse/warehouse3.jpg',
    '/images/warehouse/warehouse4.jpg',
    '/images/warehouse/warehouse5.jpg',
    '/images/warehouse/warehouse6.jpg',
    '/images/warehouse/warehouse7.jpg',
    '/images/warehouse/warehouse8.jpg',
    '/images/warehouse/warehouse9.jpg',
    '/images/warehouse/warehouse10.jpg',
    '/images/warehouse/warehouse11.jpg',
    '/images/warehouse/warehouse12.webp',
    '/images/warehouse/warehouse13.jpg',
    '/images/warehouse/warehouse14.jpg'
  ]

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % warehouseImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [warehouseImages.length])

  const toggleVideo = () => {
    setShowVideo(!showVideo)
    if (!showVideo) {
      setIsVideoPlaying(true)
    } else {
      setIsVideoPlaying(false)
    }
  }

  const toggleVideoPlay = () => {
    const video = document.getElementById('services-warehouse-video') as HTMLVideoElement
    if (!video) return

    if (isVideoPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsVideoPlaying(!isVideoPlaying)
  }

  const services = [
    {
      icon: Package,
      title: "Edible Oil Distribution",
      description: "Strategic distribution of premium edible oils across Modern Trade, E-commerce, and General Trade channels.",
      features: ["Multi-brand portfolio", "Quality assurance", "Timely supply", "Market insights"],
      color: "primary"
    },
    {
      icon: Store,
      title: "Sugar & Rice Supply",
      description: "Reliable supply of sugar and rice products with customized distribution strategies for maximum reach.",
      features: ["Consistent availability", "Local market expertise", "Wide network coverage", "Trusted partnerships"],
      color: "accent"
    },
    {
      icon: ShoppingCart,
      title: "Spices Distribution",
      description: "Premium spices distribution with strategic partnerships ensuring prominent product placement.",
      features: ["Quality products", "Strategic placement", "Inventory management", "Market trends"],
      color: "secondary"
    },
    {
      icon: Users,
      title: "Dry Fruits & Nuts",
      description: "Our own premium Glomin brand of nuts and dry fruits for cross-channel distribution excellence.",
      features: ["Own brand portfolio", "Premium quality", "Cross-channel reach", "Brand loyalty"],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Multi-Channel Expertise",
      description: "Specialized knowledge of Delhi-NCR and Bihar markets with tailored approaches for each region.",
      features: ["Modern Trade", "E-commerce", "General Trade", "Regional insights"],
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Strategic Partnership",
      description: "We serve as strategic partners, not just distributors, maximizing your market share and brand presence.",
      features: ["Growth partnership", "Performance metrics", "Market trends", "Strategic planning"],
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
              Our <span className="text-gradient">Products</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Strategic distribution of premium FMCG products including edible oils, sugar, rice, spices, 
              and our own Glomin brand of dry fruits across North East India.
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

          {/* Warehouse Showcase Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-secondary-900 text-center mb-8">Our Warehouse & Operations</h3>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-gray-700">
                  {showVideo ? 'Warehouse Video Tour' : 'Live Warehouse Feed'}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleVideo}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      showVideo 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
                    }`}
                  >
                    {showVideo ? 'Show Images' : 'Show Video'}
                  </button>
                  <Link 
                    href="/warehouse-gallery"
                    className="px-4 py-2 bg-secondary-100 text-secondary-600 hover:bg-secondary-200 rounded-full text-sm font-medium transition-colors duration-200"
                  >
                    View All Images
                  </Link>
                </div>
              </div>
              
              {showVideo ? (
                <div className="relative h-80 bg-gradient-to-r from-primary-100 to-accent-100 rounded-xl overflow-hidden">
                  <video
                    id="services-warehouse-video"
                    src="/video/video1.mp4"
                    className="w-full h-full object-cover"
                    loop
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={toggleVideoPlay}
                      className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      {isVideoPlaying ? (
                        <Pause className="w-10 h-10 text-primary-600" />
                      ) : (
                        <Play className="w-10 h-10 text-primary-600 ml-1" />
                      )}
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                    Warehouse Video Tour - Click to {isVideoPlaying ? 'Pause' : 'Play'}
                  </div>
                </div>
              ) : (
                <div className="relative h-64 bg-gradient-to-r from-primary-100 to-accent-100 rounded-xl overflow-hidden">
                  <Image
                    src={warehouseImages[currentImageIndex]}
                    alt="Warehouse Operations"
                    fill
                    className="object-cover transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                    Warehouse {currentImageIndex + 1} of {warehouseImages.length} - Live Feed
                  </div>
                </div>
              )}
              
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  Our state-of-the-art warehouses ensure efficient storage and distribution of all FMCG products
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Partner with Glomin Overseas?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Experience the power of strategic distribution partnership that nurtures your brand 
              like our own and drives long-term success across North East India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Partner With Us
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Our Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
