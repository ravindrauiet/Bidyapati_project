'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

export default function WarehouseGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
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

    const element = document.getElementById('warehouse-gallery-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const toggleVideoPlay = () => {
    const video = document.getElementById('gallery-warehouse-video') as HTMLVideoElement
    if (!video) return

    if (isVideoPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsVideoPlaying(!isVideoPlaying)
  }

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % warehouseImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + warehouseImages.length) % warehouseImages.length)
    }
  }

  return (
    <section id="warehouse-gallery-section" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Warehouse Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our state-of-the-art warehouse facilities across Delhi-NCR and Bihar. 
              Our strategic locations ensure efficient storage and distribution of all FMCG products.
            </p>
          </div>

                     {/* Video Section */}
           <div className="mb-16">
             <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
               <div className="mb-6">
                 <h3 className="text-2xl font-bold text-gray-900">Warehouse Video Tour</h3>
               </div>
               
               <div className="relative h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl overflow-hidden">
                 <video
                   id="gallery-warehouse-video"
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
             </div>
           </div>

          {/* Image Gallery */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Warehouse Images</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {warehouseImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <Image
                    src={image}
                    alt={`Warehouse ${index + 1}`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Warehouse {index + 1}</p>
                    <p className="text-xs">Click to view full size</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warehouse Information */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Warehouse Locations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Delhi-NCR Hub</h4>
                <p className="text-gray-600 mb-4">Modern Trade & E-commerce Excellence</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Strategic location for Modern Trade</li>
                  <li>• E-commerce fulfillment center</li>
                  <li>• Advanced inventory management</li>
                  <li>• Quality control facilities</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Bihar Hub</h4>
                <p className="text-gray-600 mb-4">General Trade & Rural Market Coverage</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• General Trade distribution</li>
                  <li>• Rural market coverage</li>
                  <li>• 100-km coverage up to Nepal border</li>
                  <li>• Local market expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Full Size Images */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <Image
              src={warehouseImages[selectedImage]}
              alt={`Warehouse ${selectedImage + 1}`}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-lg font-medium">Warehouse {selectedImage + 1} of {warehouseImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
