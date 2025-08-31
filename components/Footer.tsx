'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-8 sm:py-12 lg:py-16" style={{padding: '20px'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Glomin Overseas</h3>
            <p className="text-secondary-300 mb-6 leading-relaxed"> 
              We are growth partners — not just distributors or agents. Every brand we take on is nurtured 
              like our own, with a clear goal of scaling up, solving problems jointly, and driving long-term success.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:glominoverseas@gmail.com" className="text-secondary-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+918527104727" className="text-secondary-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-white mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-secondary-300 hover:text-white transition-colors" title="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors" title="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323z"/>
                  </svg>
                </a>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors" title="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors" title="WhatsApp">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-secondary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-secondary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-secondary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-secondary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-secondary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Products & Services</h4>
            <ul className="space-y-2">
              <li className="text-secondary-300 text-sm sm:text-base">Edible Oil Distribution</li>
              <li className="text-secondary-300 text-sm sm:text-base">Sugar & Rice Supply</li>
              <li className="text-secondary-300 text-sm sm:text-base">Spices Distribution</li>
              <li className="text-secondary-300 text-sm sm:text-base">Premium Dry Fruits</li>
              <li className="text-secondary-300 text-sm sm:text-base">Own Glomin Brand</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-secondary-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Delhi Office */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Delhi Office (MT & Ecom)</h4>
              <div className="space-y-2 text-secondary-300">
                <p className="flex items-center gap-2">
                  <span className="font-medium">Mr. Pashupati Jha (Director)</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91-8527104727</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>H.No-33, Naharpur Village, Rohini Sector-7, Delhi – 110085</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>glominoverseas@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <a href="https://www.glomin.in" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-white transition-colors underline">
                    www.glomin.in
                  </a>
                </p>
              </div>
            </div>

            {/* Bihar Office */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Bihar Office (GT)</h4>
              <div className="space-y-2 text-secondary-300">
                <p className="flex items-center gap-2">
                  <span className="font-medium">Mr. Jha (Director)</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91-8527277959 / +91-7296083393</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>1- Nirbhapur Chowk, Dist. Madhubani – 847236 & 2- Ranti Chowk, Madhubani – 847211</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>glominoverseas.bihar@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-8 pt-6 text-center">
          <p className="text-secondary-400 text-sm">
            © 2024 Glomin Overseas. All rights reserved. | C&F Agent & Authorized Distributor
          </p>
        </div>
      </div>
    </footer>
  )
}
