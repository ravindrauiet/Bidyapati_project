'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-8 sm:py-12 lg:py-16" style={{padding: '20px'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 ">
              <Image 
                src="/images/dry fruits/logo1.jpg" 
                alt="Glomin Overseas Logo" 
                width={80} 
                height={80} 
                className="rounded-full"
              />
              <h3 className="text-2xl font-bold text-white">Glomin Overseas</h3>
            </div>
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
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-4">Follow Us</h5>
              <div className="flex space-x-3">
                {/* Facebook */}
                <a 
                  href="#" 
                  className="group relative p-2 rounded-full bg-white/10 hover:bg-[#1877F2] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1877F2]/25" 
                  title="Facebook"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="#" 
                  className="group relative p-2 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#E4405F] hover:via-[#C13584] hover:to-[#833AB4] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#E4405F]/25" 
                  title="Instagram"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="#" 
                  className="group relative p-2 rounded-full bg-white/10 hover:bg-[#0077B5] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0077B5]/25" 
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a 
                  href="#" 
                  className="group relative p-2 rounded-full bg-white/10 hover:bg-[#25D366] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#25D366]/25" 
                  title="WhatsApp"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>

                {/* Twitter/X */}
                <a 
                  href="#" 
                  className="group relative p-2 rounded-full bg-white/10 hover:bg-[#1DA1F2] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1DA1F2]/25" 
                  title="Twitter"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="#" 
                  className="group relative p-2 rounded-full bg-white/10 hover:bg-[#FF0000] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FF0000]/25" 
                  title="YouTube"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
                  <span>+91-9310785269 / +91-7011281171</span>
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
