'use client'

import { Download, FileText, BarChart3, Users, Globe, Award, BookOpen, Video, FileImage, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Resources() {
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

    const element = document.getElementById('resources-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const resources = [
    {
      category: "Company Information",
      items: [
        {
          title: "Company Profile",
          description: "Comprehensive overview of Glomin Overseas, our services, and achievements",
          type: "PDF",
          size: "2.3 MB",
          icon: FileText,
          downloadUrl: "#"
        },
        {
          title: "Partnership Guide",
          description: "Detailed guide on how to become our strategic distribution partner",
          type: "PDF",
          size: "1.8 MB",
          icon: BookOpen,
          downloadUrl: "#"
        },
        {
          title: "Business Model Overview",
          description: "Explanation of our two-pillar distribution model and approach",
          type: "PDF",
          size: "1.5 MB",
          icon: BarChart3,
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "Market Insights",
      items: [
        {
          title: "North India Market Report",
          description: "Analysis of FMCG distribution opportunities in Delhi-NCR and Bihar",
          type: "PDF",
          size: "3.1 MB",
          icon: Globe,
          downloadUrl: "#"
        },
        {
          title: "Distribution Channel Analysis",
          description: "Comprehensive study of Modern Trade, E-commerce, and General Trade",
          type: "PDF",
          size: "2.7 MB",
          icon: BarChart3,
          downloadUrl: "#"
        },
        {
          title: "Product Category Insights",
          description: "Market trends and opportunities in edible oils, sugar, rice, and spices",
          type: "PDF",
          size: "2.2 MB",
          icon: Award,
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "Case Studies",
      items: [
        {
          title: "Edible Oil Brand Success",
          description: "How we helped a premium oil brand achieve 40% growth in 18 months",
          type: "PDF",
          size: "2.8 MB",
          icon: FileText,
          downloadUrl: "#"
        },
        {
          title: "Spices Distribution Case Study",
          description: "Strategic partnership that expanded market reach across North India",
          type: "PDF",
          size: "2.1 MB",
          icon: BookOpen,
          downloadUrl: "#"
        },
        {
          title: "Modern Trade Expansion",
          description: "Success story of entering organized retail with strategic planning",
          type: "PDF",
          size: "1.9 MB",
          icon: BarChart3,
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "Multimedia",
      items: [
        {
          title: "Company Introduction Video",
          description: "Watch our story and understand our approach to strategic distribution",
          type: "MP4",
          size: "15.2 MB",
          icon: Video,
          downloadUrl: "#"
        },
        {
          title: "Product Portfolio Images",
          description: "High-quality images of our product categories and distribution network",
          type: "ZIP",
          size: "8.7 MB",
          icon: FileImage,
          downloadUrl: "#"
        },
        {
          title: "Office & Warehouse Photos",
          description: "Visual tour of our facilities and operational infrastructure",
          type: "ZIP",
          size: "12.3 MB",
          icon: FileImage,
          downloadUrl: "#"
        }
      ]
    }
  ]

  const handleDownload = (resource: any) => {
    // In a real application, this would trigger the actual download
    console.log(`Downloading: ${resource.title}`)
    // You can implement actual download logic here
  }

  return (
    <section id="resources-section" className="section-padding bg-white">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Resources & <span className="text-gradient">Downloads</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Access valuable information, insights, and resources to understand our business better. 
              Download comprehensive guides, case studies, and market reports to make informed decisions.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="space-y-12 mb-16">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-primary-600" />
                  </div>
                  {category.category}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div className="text-right">
                          <span className="inline-block bg-primary-100 text-primary-700 text-xs font-medium px-2 py-1 rounded-full">
                            {item.type}
                          </span>
                          <p className="text-xs text-secondary-500 mt-1">{item.size}</p>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-secondary-900 mb-2">{item.title}</h4>
                      <p className="text-secondary-600 text-sm mb-4">{item.description}</p>
                      
                      <button
                        onClick={() => handleDownload(item)}
                        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Resources */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">Featured Resources</h3>
              <p className="text-secondary-600 max-w-3xl mx-auto">
                Start with these essential resources to understand our business model and partnership opportunities.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-800 mb-3 text-center">Quick Start Guide</h4>
                <p className="text-secondary-600 text-center mb-4">
                  Essential information for brands looking to partner with us
                </p>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                  Download Guide
                </button>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-accent-600" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-800 mb-3 text-center">Market Analysis</h4>
                <p className="text-secondary-600 text-center mb-4">
                  Comprehensive analysis of North India FMCG distribution
                </p>
                <button className="w-full bg-accent-600 hover:bg-accent-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                  Download Report
                </button>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary-600" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-800 mb-3 text-center">Partnership Kit</h4>
                <p className="text-secondary-600 text-center mb-4">
                  Complete kit for brands ready to start their journey with us
                </p>
                <button className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                  Download Kit
                </button>
              </div>
            </div>
          </div>

          {/* Resource Categories Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-primary-600 mb-2">12+</div>
              <p className="text-secondary-600">PDF Documents</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-accent-600" />
              </div>
              <div className="text-2xl font-bold text-accent-600 mb-2">5+</div>
              <p className="text-secondary-600">Videos</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileImage className="w-8 h-8 text-secondary-600" />
              </div>
              <div className="text-2xl font-bold text-secondary-600 mb-2">50+</div>
              <p className="text-secondary-600">Images</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-primary-600 mb-2">8+</div>
              <p className="text-secondary-600">Reports</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Need More Information?</h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help. 
              Contact us for personalized information and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Contact Our Team
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
