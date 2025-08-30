'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, ZoomIn, ZoomOut, Download } from 'lucide-react'
import Link from 'next/link'

export default function DryFruitsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const dryFruitsImages = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    src: `/images/dry fruits/dryfru${i + 1}.jpg`,
    alt: `Premium Dry Fruit ${i + 1}`,
    title: `Premium Dry Fruit ${i + 1}`
  }))

  const openFullscreen = (imageId: number) => {
    setSelectedImage(imageId)
    setIsFullscreen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeFullscreen = () => {
    setSelectedImage(null)
    setIsFullscreen(false)
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeFullscreen()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-amber-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/products" 
              className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Products
            </Link>
            <h1 className="text-3xl font-bold text-amber-800">Premium Dry Fruits Gallery</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-800 mb-4">Our Premium Collection</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Explore our exclusive Glomin brand collection featuring 25+ premium dry fruits and nuts varieties. 
            Click on any image to view it in full size.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {dryFruitsImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
              onClick={() => openFullscreen(image.id)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-center">{image.title}</p>
                <p className="text-xs text-center text-amber-200">Click to enlarge</p>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-5 h-5 text-white drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => setSelectedImage(selectedImage > 1 ? selectedImage - 1 : 25)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setSelectedImage(selectedImage < 25 ? selectedImage + 1 : 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image */}
            <img 
              src={`/images/dry fruits/dryfru${selectedImage}.jpg`}
              alt={`Premium Dry Fruit ${selectedImage}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full">
              <p className="text-lg font-semibold text-center">
                Premium Dry Fruit {selectedImage} of 25
              </p>
            </div>

            {/* Download Button */}
            <a
              href={`/images/dry fruits/dryfru${selectedImage}.jpg`}
              download={`dryfru${selectedImage}.jpg`}
              className="absolute bottom-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
            >
              <Download className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
