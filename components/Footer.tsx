'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-8 sm:py-12 lg:py-16" style={{padding: '20px'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Glomin Overseas</h3>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              C&F AGENT/ Authorized DISTRIBUTOR for edible Oil, Sugar, Rice, Spices and Dry Fruits etc. 
              We are growth partners — not just distributors or agents. Every brand we take on is nurtured 
              like our own, with a clear goal of scaling up, solving problems jointly, and driving long-term success.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:glominoverseas@gmail.com" className="text-secondary-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+919999132057" className="text-secondary-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
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
                  <span className="font-medium">Pashupati Jha (Director)</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91-9999132057</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>H.No-33, Naharpur Village, Rohini Sector-7, Delhi – 110085</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>glominoverseas@gmail.com</span>
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
