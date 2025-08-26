'use client'

import { Calendar, MapPin, Users, Award, Target, Heart, Globe, Building, TrendingUp, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Company() {
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

    const element = document.getElementById('company-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const companyValues = [
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building trust through honest and transparent relationships",
      color: "accent"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Working together with brands to achieve mutual success",
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously improving and adapting to market changes",
      color: "primary"
    }
  ]

  const achievements = [
    {
      year: "2017",
      title: "Company Founded",
      description: "Glomin Overseas established with a vision to transform FMCG distribution"
    },
    {
      year: "2019",
      title: "Delhi-NCR Expansion",
      description: "Successfully launched Modern Trade and E-commerce operations"
    },
    {
      year: "2021",
      title: "Own Brand Launch",
      description: "Introduced premium Glomin brand of dry fruits and nuts"
    },
    {
      year: "2023",
      title: "Bihar Operations",
      description: "Expanded to General Trade distribution in Bihar region"
    },
    {
      year: "2024",
      title: "Strategic Growth",
      description: "Established as a leading C&F Agent across North India"
    }
  ]

  const leadership = [
    {
      name: "Pashupati Jha",
      position: "Director - Delhi Operations",
      location: "Delhi-NCR",
      expertise: "Modern Trade & E-commerce",
      education: "Master in Commerce and CS",
      experience: "Deep expertise in structured business management and compliance",
      phone: "+91-9999132057",
      email: "glominoverseas@gmail.com"
    },
    {
      name: "Mr. Jha",
      position: "Director - Bihar Operations",
      location: "Bihar",
      expertise: "General Trade Distribution",
      education: "15+ years FMCG experience",
      experience: "From frontline salesman to Business Head positions with reputed companies",
      phone: "+91-8527277959",
      email: "glominoverseas.bihar@gmail.com"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-50 border-primary-200 text-primary-800'
      case 'accent':
        return 'bg-accent-50 border-accent-200 text-accent-800'
      case 'secondary':
        return 'bg-secondary-50 border-secondary-200 text-secondary-800'
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
      case 'secondary':
        return 'text-secondary-600'
      default:
        return 'text-primary-600'
    }
  }

  return (
    <section id="company-section" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              About <span className="text-gradient">Glomin Overseas</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Founded in 2017, we are a focused FMCG food products distribution company with a strong presence 
              across North India, serving as strategic partners for brands looking to expand their market reach.
            </p>
          </div>

          {/* Company Overview */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-secondary-900 mb-6">Our Story</h3>
                <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                  Glomin Overseas was born from a vision to transform the traditional distribution landscape. 
                  We recognized that brands needed more than just distributors — they needed strategic partners 
                  who would nurture their growth like their own.
                </p>
                <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                  Starting with a small team in Delhi, we've grown into a comprehensive distribution network 
                  covering Modern Trade, E-commerce, and General Trade channels across North India.
                </p>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  Today, we're proud to be the trusted partner for numerous FMCG brands, helping them achieve 
                  market success through our strategic approach and deep market understanding.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
                  <Calendar className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary-800 mb-2">2017</div>
                  <p className="text-primary-700">Year Founded</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl">
                  <MapPin className="w-12 h-12 text-accent-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-accent-800 mb-2">2</div>
                  <p className="text-accent-700">Strategic Hubs</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl">
                  <Users className="w-12 h-12 text-secondary-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-secondary-800 mb-2">50+</div>
                  <p className="text-secondary-700">Team Members</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl">
                  <Award className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary-800 mb-2">100%</div>
                  <p className="text-primary-700">Partner Focus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-secondary-900 text-center mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getColorClasses(value.color)} mb-6`}>
                    <value.icon className={`w-10 h-10 ${getIconColor(value.color)}`} />
                  </div>
                  <h4 className="text-xl font-semibold text-secondary-800 mb-3">{value.title}</h4>
                  <p className="text-secondary-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-secondary-900 text-center mb-12">Our Leadership Team</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h4 className="text-2xl font-bold text-secondary-900 mb-2">{leader.name}</h4>
                    <p className="text-primary-600 font-semibold mb-1">{leader.position}</p>
                    <p className="text-secondary-600 text-sm">{leader.location}</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h5 className="font-semibold text-secondary-800 mb-2">Expertise</h5>
                      <p className="text-secondary-600">{leader.expertise}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-secondary-800 mb-2">Education & Experience</h5>
                      <p className="text-secondary-600">{leader.education}</p>
                      <p className="text-secondary-600 text-sm">{leader.experience}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-secondary-700">
                      <Building className="w-4 h-4 text-primary-500" />
                      <span>{leader.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary-700">
                      <Globe className="w-4 h-4 text-primary-500" />
                      <span>{leader.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Journey */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-secondary-900 text-center mb-12">Our Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-accent-500"></div>
              
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary-500 rounded-full z-10"></div>
                    
                    {/* Content */}
                    <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <div className="text-4xl font-bold text-primary-600 mb-2">{achievement.year}</div>
                        <h4 className="text-xl font-semibold text-secondary-800 mb-2">{achievement.title}</h4>
                        <p className="text-secondary-600">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Mission</h3>
              </div>
              <p className="text-secondary-600 leading-relaxed">
                To be the most trusted strategic distribution partner for FMCG brands, delivering excellence 
                through innovative solutions, deep market understanding, and unwavering commitment to our 
                partners' success.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Vision</h3>
              </div>
              <p className="text-secondary-600 leading-relaxed">
                To become the leading strategic distribution partner across North India, known for innovation, 
                reliability, and the ability to transform brands into market leaders through strategic partnerships.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Success Story</h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Be part of our journey as we continue to grow and expand our distribution network. 
              Whether you're a brand looking for a strategic partner or a professional seeking growth opportunities, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Partner With Us
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Careers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
