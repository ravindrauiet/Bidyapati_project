'use client'

import { Package, Store, ShoppingCart, Users, Globe, BarChart3, Award, Truck, Shield, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('products-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const productCategories = [
    {
      id: 'edible-oils',
      title: "Edible Oils",
      icon: Package,
      description: "Premium quality edible oils for cooking and culinary needs",
      products: [
        "Refined Sunflower Oil",
        "Refined Soybean Oil",
        "Refined Mustard Oil",
        "Refined Groundnut Oil",
        "Refined Rice Bran Oil",
        "Virgin Coconut Oil",
        "Extra Virgin Olive Oil"
      ],
      features: [
        "Multiple brand portfolio",
        "Quality assurance",
        "Timely supply",
        "Market insights",
        "Competitive pricing"
      ],
      color: "primary"
    },
    {
      id: 'sugar-rice',
      title: "Sugar & Rice",
      icon: Store,
      description: "Essential staples with consistent quality and availability",
      products: [
        "Refined White Sugar",
        "Brown Sugar",
        "Basmati Rice",
        "Sona Masoori Rice",
        "Ponni Rice",
        "Steamed Rice",
        "Organic Varieties"
      ],
      features: [
        "Consistent availability",
        "Local market expertise",
        "Wide network coverage",
        "Trusted partnerships",
        "Quality standards"
      ],
      color: "accent"
    },
    {
      id: 'spices',
      title: "Spices & Seasonings",
      icon: ShoppingCart,
      description: "Premium spices that enhance the flavor of every dish",
      products: [
        "Black Pepper",
        "Cardamom",
        "Cinnamon",
        "Cloves",
        "Nutmeg",
        "Turmeric Powder",
        "Red Chilli Powder",
        "Garam Masala",
        "Mixed Spices"
      ],
      features: [
        "Quality products",
        "Strategic placement",
        "Inventory management",
        "Market trends",
        "Fresh supply"
      ],
      color: "secondary"
    },
    {
      id: 'dry-fruits',
      title: "Dry Fruits & Nuts",
      icon: Users,
      description: "Our own premium Glomin brand of nuts and dry fruits with bulk deals and customized gift packs",
      products: [
        "Almonds (Badam) - Bulk & Gift Packs",
        "Cashews (Kaju) - Bulk & Gift Packs",
        "Walnuts (Akhrot) - Bulk & Gift Packs",
        "Pistachios (Pista) - Bulk & Gift Packs",
        "Raisins (Kishmish) - Bulk & Gift Packs",
        "Apricots (Khubani) - Bulk & Gift Packs",
        "Dates (Khajur) - Bulk & Gift Packs",
        "Mixed Dry Fruits - Bulk & Gift Packs",
        "Customized Gift Packs for Weddings",
        "Corporate Gift Packs",
        "Festival Special Packs"
      ],
      features: [
        "Own brand portfolio",
        "Premium quality",
        "Bulk deals available",
        "Customized gift packs",
        "Wedding & Corporate events",
        "Festival specials",
        "Cross-channel reach",
        "Brand loyalty",
        "Health benefits"
      ],
      color: "primary",
      isFeatured: true
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

  const filteredCategories = activeCategory === 'all' 
    ? productCategories 
    : productCategories.filter(cat => cat.id === activeCategory)

  return (
    <section id="products-section" className="section-padding bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Our <span className="text-gradient">Product Portfolio</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of premium FMCG products. From essential staples to gourmet ingredients, 
              we ensure quality, consistency, and timely delivery across all our distribution channels.
            </p>
          </div>

          {/* Featured Dry Fruits Section */}
          <div className="mb-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 md:p-12 shadow-xl border border-amber-300">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Featured: Premium Dry Fruits & Nuts</h3>
              <p className="text-amber-700 max-w-3xl mx-auto">
                Discover our exclusive Glomin brand collection featuring 25+ premium dry fruits and nuts varieties. 
                Perfect for bulk orders and customized gift packaging.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold text-amber-800 mb-4">Why Choose Glomin Dry Fruits?</h4>
                <ul className="space-y-2 text-amber-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Premium quality handpicked products
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Bulk deals with competitive pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Customized gift packs for all occasions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Wedding, corporate & festival specials
                  </li>
                </ul>
                <button 
                  onClick={() => setActiveCategory('dry-fruits')}
                  className="mt-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Dry Fruits Collection
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                    <img 
                      src={`/images/dry fruits/dryfru${i + 1}.jpg`}
                      alt={`Premium Dry Fruit ${i + 1}`}
                      className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-secondary-600 hover:bg-primary-50 border border-gray-200'
              }`}
            >
              All Categories
            </button>
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-secondary-600 hover:bg-primary-50 border border-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {filteredCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getColorClasses(category.color)} mb-4`}>
                    <category.icon className={`w-10 h-10 ${getIconColor(category.color)}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">{category.title}</h3>
                  <p className="text-secondary-600">{category.description}</p>
                </div>

                {/* Product List */}
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-800 mb-3 flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary-500" />
                    Available Products
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="flex items-center gap-2 text-sm text-secondary-700">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        {product}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-800 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary-500" />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-secondary-600">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Bulk Deals & Customized Gift Packs */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-xl border border-amber-200 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Bulk Deals & Customized Gift Packs</h3>
              <p className="text-amber-700 max-w-3xl mx-auto">
                Our premium Glomin brand offers exceptional bulk deals and customized gift packs for all occasions. 
                Perfect for weddings, corporate events, festivals, and special celebrations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-amber-200">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl font-semibold text-amber-800 mb-3">Bulk Deals</h4>
                <p className="text-amber-700">Competitive pricing for large quantities with flexible packaging options</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-amber-200">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl font-semibold text-amber-800 mb-3">Wedding Specials</h4>
                <p className="text-amber-700">Elegant gift packs perfect for wedding celebrations and guest favors</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-amber-200">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl font-semibold text-amber-800 mb-3">Corporate & Festival</h4>
                <p className="text-amber-700">Professional gift packs for corporate events and festival celebrations</p>
              </div>
            </div>
          </div>

          {/* Distribution Channels */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">Multi-Channel Distribution</h3>
              <p className="text-secondary-600 max-w-3xl mx-auto">
                Our products reach customers through multiple channels, ensuring maximum market coverage and accessibility.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-800 mb-3">Modern Trade</h4>
                <p className="text-secondary-600">Direct partnerships with organized retail chains and supermarkets</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent-600" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-800 mb-3">E-commerce</h4>
                <p className="text-secondary-600">Online platforms and digital marketplaces for easy access</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-secondary-600" />
                </div>
                <h4 className="text-xl font-semibold text-secondary-800 mb-3">General Trade</h4>
                <p className="text-secondary-600">Traditional retail networks and local market coverage</p>
              </div>
            </div>
          </div>

          {/* Glomin Brand Showcase */}
          <div className="mt-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Our Premium Glomin Brand</h3>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Experience the finest quality dry fruits and nuts under our own Glomin brand. 
              Perfect for bulk purchases and customized gift packs for all occasions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-3">Bulk Deals</h4>
                <p className="text-amber-100">Competitive pricing for large quantities with flexible packaging</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-3">Customized Gifts</h4>
                <p className="text-amber-100">Personalized packaging for weddings, corporate events, and festivals</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-3">Premium Quality</h4>
                <p className="text-amber-100">Handpicked, premium grade dry fruits and nuts</p>
              </div>
            </div>
            <button className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Quote for Bulk Orders
            </button>
          </div>

          {/* Dry Fruits Image Gallery */}
          <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-xl border border-amber-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Premium Dry Fruits Gallery</h3>
              <p className="text-amber-700 max-w-3xl mx-auto">
                Explore our premium collection of dry fruits and nuts. Each product is carefully selected and packaged 
                to maintain the highest quality standards for our customers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
              {Array.from({ length: 25 }, (_, i) => (
                <div 
                  key={i} 
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 scroll-triggered-scale"
                  style={{
                    '--scroll-scale': '1.1',
                    '--scroll-rotate': '2deg'
                  } as React.CSSProperties}
                >
                  <img 
                    src={`/images/dry fruits/dryfru${i + 1}.jpg`}
                    alt={`Premium Dry Fruit ${i + 1}`}
                    className="w-full h-32 md:h-40 object-cover group-hover:scale-110 transition-all duration-500 scroll-triggered-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Premium Quality</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-amber-700 mb-4">
                All images showcase our actual product quality and packaging standards
              </p>
              <Link 
                href="/dry-fruits-gallery"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Full Collection
              </Link>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Quality Assurance</h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Every product in our portfolio meets the highest quality standards. We work with trusted manufacturers 
              and maintain strict quality control throughout our distribution network.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Quality Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Fresh Supply</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                <span>Market Tested</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
