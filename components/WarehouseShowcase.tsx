'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Pause, ArrowRight } from 'lucide-react'

export default function WarehouseShowcase() {
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

    const element = document.getElementById('warehouse-showcase-section')
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
    const video = document.getElementById('showcase-warehouse-video') as HTMLVideoElement
    if (!video) return

    if (isVideoPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsVideoPlaying(!isVideoPlaying)
  }

  return (
    <section id="warehouse-showcase-section" className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Warehouse Operations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art warehouse facilities ensuring efficient storage and distribution 
              of all FMCG products across North East India.
            </p>
          </div>

          {/* Main Showcase */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xl font-medium text-gray-700">
                {showVideo ? 'Warehouse Video Tour' : 'Live Warehouse Feed'}
              </span>
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleVideo}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    showVideo 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  }`}
                >
                  {showVideo ? 'Show Images' : 'Show Video'}
                </button>
                <Link 
                  href="/warehouse-gallery"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  View All Images
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {showVideo ? (
              <div className="relative h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl overflow-hidden">
                <video
                  id="showcase-warehouse-video"
                  src="/video/video2.mp4"
                  className="w-full h-full object-cover"
                  loop
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={toggleVideoPlay}
                    className="w-24 h-24 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-12 h-12 text-blue-600" />
                    ) : (
                      <Play className="w-12 h-12 text-blue-600 ml-1" />
                    )}
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 text-white text-lg font-medium">
                  Warehouse Video Tour - Click to {isVideoPlaying ? 'Pause' : 'Play'}
                </div>
              </div>
            ) : (
              <div className="relative h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl overflow-hidden">
                <Image
                  src={warehouseImages[currentImageIndex]}
                  alt="Warehouse Operations"
                  fill
                  className="object-cover transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 text-white text-lg font-medium">
                  Warehouse {currentImageIndex + 1} of {warehouseImages.length} - Live Feed
                </div>
              </div>
            )}
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-lg">
                Strategic warehouse locations in Delhi-NCR and Bihar for comprehensive North East India coverage
              </p>
            </div>
          </div>

          {/* Quick Preview Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Warehouse Preview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {warehouseImages.slice(0, 6).map((image, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Image
                    src={image}
                    alt={`Warehouse ${index + 1}`}
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs font-medium">Warehouse {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link 
                href="/warehouse-gallery"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Complete Gallery
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Warehouse Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Delhi-NCR Hub</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Modern Trade & E-commerce Excellence
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Advanced inventory management systems
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Quality control facilities
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Strategic location for quick delivery
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Bihar Hub</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  General Trade & Rural Market Coverage
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  100-km coverage up to Nepal border
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Local market expertise
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Efficient distribution network
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
