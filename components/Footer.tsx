'use client'

import { Mail, Phone, MapPin, Clock, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-16">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient">Glomin</span> Overseas
              </h3>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                Premier distribution and logistics company with strategic presence across North India. 
                We specialize in providing comprehensive logistics and sales solutions that are 
                meticulously tailored to the unique demands of different regional markets.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-secondary-300">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Mon-Fri 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about-section" className="text-secondary-300 hover:text-white transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services-section" className="text-secondary-300 hover:text-white transition-colors duration-300">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#business-model-section" className="text-secondary-300 hover:text-white transition-colors duration-300">
                    Business Model
                  </a>
                </li>
                <li>
                  <a href="#contact-section" className="text-secondary-300 hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
              <ul className="space-y-2">
                <li className="text-secondary-300">Modern Trade & E-commerce</li>
                <li className="text-secondary-300">General Trade Distribution</li>
                <li className="text-secondary-300">Comprehensive Logistics</li>
                <li className="text-secondary-300">Strategic Partnership</li>
              </ul>
            </div>
          </div>

          {/* Office Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 p-8 bg-secondary-800 rounded-xl">
            {/* Delhi Office */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-400" />
                Delhi Office
              </h4>
              <div className="space-y-2 text-secondary-300">
                <p className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary-400 rounded-full"></span>
                  Bidyapati Jha (Director)
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary-400" />
                  +91-9999132057
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary-400" />
                  glominoverseas@gmail.com
                </p>
                <p className="text-sm">
                  H.No-33, Naharpur Village, Rohini Sector-7, Delhi – 110085
                </p>
              </div>
            </div>

            {/* Bihar Office */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent-400" />
                Bihar Office
              </h4>
              <div className="space-y-2 text-secondary-300">
                <p className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent-400 rounded-full"></span>
                  Pashupati Jha (Director)
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent-400" />
                  +91-8527277959 / +91-7296083393
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent-400" />
                  glominoverseas.bihar@gmail.com
                </p>
                <p className="text-sm">
                  1- Nirbhapur Chowk, Dist. Madhubani – 847236 & 2- Ranti Chowk, Madhubani – 847211
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-secondary-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-secondary-400 text-sm">
                © 2024 Glomin Overseas. All rights reserved. | Established 2017
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={scrollToTop}
                  className="p-2 bg-primary-600 hover:bg-primary-700 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
