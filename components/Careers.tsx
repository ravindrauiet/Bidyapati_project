'use client'

import { Briefcase, Upload, MapPin, Clock, Users, Award } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Careers() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('careers-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const formData = new FormData(event.currentTarget)
      
      if (selectedFile) {
        formData.append('resume', selectedFile)
      }

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage(result.message || 'Application submitted successfully! We will get back to you soon.')
        // Reset form
        const form = event.currentTarget
        if (form) {
          form.reset()
        }
        setSelectedFile(null)
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Failed to submit application. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setSubmitMessage('Failed to submit application. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const jobOpenings = [
    {
      title: "Sales Executive",
      location: "Delhi-NCR",
      type: "Full-time",
      experience: "2-5 years",
      description: "Responsible for managing Modern Trade and E-commerce accounts, building relationships with key retailers, and achieving sales targets.",
      requirements: ["FMCG sales experience", "Strong communication skills", "Target-driven approach", "Knowledge of Modern Trade"]
    },
    {
      title: "Distribution Manager",
      location: "Bihar",
      type: "Full-time",
      experience: "5-8 years",
      description: "Oversee General Trade distribution operations, manage team performance, and ensure efficient product flow across the region.",
      requirements: ["Distribution management", "Team leadership", "Market knowledge", "Problem-solving skills"]
    },
    {
      title: "E-commerce Coordinator",
      location: "Delhi-NCR",
      type: "Full-time",
      experience: "1-3 years",
      description: "Coordinate with e-commerce platforms, manage online listings, and ensure smooth order fulfillment.",
      requirements: ["E-commerce knowledge", "Digital marketing basics", "Order management", "Customer service"]
    },
    {
      title: "Warehouse Supervisor",
      location: "Delhi-NCR",
      type: "Full-time",
      experience: "3-6 years",
      description: "Supervise warehouse operations, manage inventory, and ensure timely dispatch of products.",
      requirements: ["Warehouse management", "Inventory control", "Team supervision", "Quality assurance"]
    }
  ]

  return (
    <section id="careers-section" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Join <span className="text-gradient">Glomin Overseas</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Be part of our growth story as we expand our distribution network across North East India. 
              We're looking for passionate professionals who share our vision of strategic partnerships.
            </p>
          </div>

          {/* Why Join Us */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Growth Opportunities</h3>
              <p className="text-secondary-600">Fast-track your career with our expanding operations and diverse portfolio</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Learning & Development</h3>
              <p className="text-secondary-600">Continuous training and exposure to modern trade and distribution practices</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Strategic Impact</h3>
              <p className="text-secondary-600">Contribute to building lasting partnerships and driving business growth</p>
            </div>
          </div>

          {/* Job Openings */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-secondary-900 text-center mb-12">Current Openings</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-secondary-900">{job.title}</h4>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-secondary-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {job.experience}
                    </div>
                  </div>
                  
                  <p className="text-secondary-700 mb-4">{job.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-secondary-900 mb-2">Requirements:</h5>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center gap-2 text-sm text-secondary-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Upload Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">Submit Your Resume</h3>
              <p className="text-secondary-600 max-w-2xl mx-auto">
                Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities. 
                We're always looking for talented individuals to join our team.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-secondary-700 mb-2">
                    Years of Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-8">5-8 years</option>
                    <option value="8+">8+ years</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="resume" className="block text-sm font-medium text-secondary-700 mb-2">
                  Resume/CV *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors duration-300">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      {selectedFile ? `Selected: ${selectedFile.name}` : 'Drop your resume here or click to browse'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 cursor-pointer transition-colors duration-300"
                  >
                    Choose File
                  </label>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Cover Letter (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us why you'd like to join Glomin Overseas..."
                ></textarea>
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-green-800 font-medium">{submitMessage}</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-red-800 font-medium">{submitMessage}</p>
                  </div>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
