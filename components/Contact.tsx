'use client'

import { Phone, Mail, MapPin, Clock, User, Building, Globe, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const offices = [
    {
      name: "Delhi Office (MT & Ecom)",
      contact: "Mr. Pashupati Jha  (Director)",
      phone: "+91-8527104727",
      email: "glominoverseas@gmail.com",
      address: "H.No-33, Naharpur Village, Rohini Sector-7, Delhi – 110085",
      website: "www.glomin.in",
      icon: Building,
      color: "primary"
    },
    {
      name: "Bihar Office (GT)",
      contact: "Mr. Jha (Director)",
      phone: "+91-9310785269 / +91-7011281171",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        console.error('Form submission error:', result.error)
        setSubmitStatus('error')
        
        // Reset error message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.firstName && formData.email && formData.message

  return (
    <section id="contact-section" className="section-padding bg-white">
      <div className="container-custom">
        <div className="transition-all duration-1000 opacity-100 translate-y-0">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Ready to partner with us? Connect with our team of experts and discover how Glomin Overseas 
              can nurture your brand like our own and drive long-term success across North East India.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Contact Form */}
            <div className="card">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Send us a Message
              </h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-medium">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-800 font-medium">
                    Something went wrong. Please try again or contact us directly.
                  </span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your first name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your last name"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email address"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your company name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      disabled={isSubmitting}
                    >
                      <option value="">Select a subject</option>
                      <option value="partnership">Distribution Partnership</option>
                      <option value="bulk-order">Bulk Order Inquiry</option>
                      <option value="business">Business Opportunity</option>
                      <option value="support">Customer Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your requirements, questions, or how we can help you..."
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column - Office Information */}
            <div className="space-y-8">
              {offices.map((office, index) => (
                <div key={index} className="card">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${getColorClasses(office.color)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <office.icon className={`w-6 h-6 ${getIconColor(office.color)}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-secondary-900 mb-3">{office.name}</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <User className="w-5 h-5 text-secondary-500" />
                          <span className="text-secondary-700">{office.contact}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-secondary-500" />
                          <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="text-secondary-700 hover:text-primary-600 transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-secondary-500" />
                          <a href={`mailto:${office.email}`} className="text-secondary-700 hover:text-primary-600 transition-colors">
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-secondary-500 mt-0.5" />
                          <span className="text-secondary-700">{office.address}</span>
                        </div>
                        {office.website && (
                          <div className="flex items-center gap-3">
                            <Globe className="w-5 h-5 text-secondary-500" />
                            <a href={`https://${office.website}`} target="_blank" rel="noopener noreferrer" className="text-secondary-700 hover:text-primary-600 transition-colors">
                              {office.website}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Contact Information */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Ready to Partner with us?
            </h3>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto mb-8">
              Connect with our team of experts and discover how Glomin Overseas can nurture your brand like our own and drive long-term success across North East India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918527104727"
                className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <a
                href="mailto:glominoverseas@gmail.com"
                className="inline-flex items-center gap-3 bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
