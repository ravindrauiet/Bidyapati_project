'use client'

import { Phone, Mail, MapPin, Clock, User, Building, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Contact() {
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

    const element = document.getElementById('contact-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const offices = [
    {
      name: "Delhi Office (MT & Ecom)",
      contact: "Bidyapati Jha (Director)",
      phone: "+91-9999132057",
      email: "glominoverseas@gmail.com",
      address: "H.No-33, Naharpur Village, Rohini Sector-7, Delhi – 110085",
      website: "www.glomin.in",
      icon: Building,
      color: "primary"
    },
    {
      name: "Bihar Office (GT)",
      contact: "Mr. Jha (Director)",
      phone: "+91-8527277959 / +91-7296083393",
      email: "glominoverseas.bihar@gmail.com",
      address: "1- Nirbhapur Chowk, Dist. Madhubani – 847236 & 2- Ranti Chowk, Madhubani – 847211",
      icon: Building,
      color: "accent"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-50 border-primary-200 text-primary-800'
      case 'accent':
        return 'bg-accent-50 border-accent-200 text-accent-800'
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
      default:
        return 'text-primary-600'
    }
  }

  return (
    <section id="contact-section" className="section-padding bg-white">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Ready to partner with us? Connect with our team of experts and discover how Glomin Overseas 
              can nurture your brand like our own and drive long-term success across North India.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Contact Form */}
            <div className="card">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your distribution needs..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column - Office Information */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                  Our Offices
                </h3>
                
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${getColorClasses(office.color)}`}>
                          <office.icon className={`w-6 h-6 ${getIconColor(office.color)}`} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-secondary-900">
                            {office.name}
                          </h4>
                          <p className="text-sm text-secondary-600">
                            {office.contact}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 ml-15">
                        <div className="flex items-center gap-3 text-sm text-secondary-700">
                          <Phone className="w-4 h-4 text-primary-500" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-secondary-700">
                          <Mail className="w-4 h-4 text-primary-500" />
                          <span>{office.email}</span>
                        </div>
                        {office.website && (
                          <div className="flex items-center gap-3 text-sm text-secondary-700">
                            <Globe className="w-4 h-4 text-primary-500" />
                            <a href={`https://${office.website}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
                              {office.website}
                            </a>
                          </div>
                        )}
                        <div className="flex items-start gap-3 text-sm text-secondary-700">
                          <MapPin className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                          <span>{office.address}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact Info */}
              <div className="card bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
                <h4 className="text-lg font-semibold text-primary-800 mb-4">
                  Quick Contact
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-primary-700">
                    <Clock className="w-4 h-4" />
                    <span>Business Hours: Mon-Fri 9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-primary-700">
                    <User className="w-4 h-4" />
                    <span>Response Time: Within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Join the growing list of successful brands that trust Glomin Overseas 
                for their distribution and logistics needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Schedule a Call
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
