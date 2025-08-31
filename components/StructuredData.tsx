'use client'

interface StructuredDataProps {
  type: 'organization' | 'website' | 'breadcrumb' | 'product' | 'contact'
  data?: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Glomin Overseas",
          "url": "https://glomin.in",
          "logo": "https://glomin.in/logo.png",
          "description": "Glomin Overseas is a premier distribution and logistics company with strategic presence across North India, specializing in Modern Trade, E-commerce, and General Trade solutions.",
          "foundingDate": "2017",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "H.No-33, Naharpur Village, Rohini Sector-7",
            "addressLocality": "Delhi",
            "postalCode": "110085",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9999132057",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "English, Hindi"
          },
          "sameAs": [
            "https://www.facebook.com/glominoverseas",
            "https://www.instagram.com/glominoverseas",
            "https://www.linkedin.com/company/glomin-overseas"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "FMCG Products",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Edible Oils",
                  "description": "Premium quality edible oils for cooking and culinary needs"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Dry Fruits & Nuts",
                  "description": "Premium Glomin brand dry fruits and nuts with bulk deals and customized gift packs"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Sugar & Rice",
                  "description": "Essential staples with consistent quality and availability"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Spices & Seasonings",
                  "description": "Premium spices that enhance the flavor of every dish"
                }
              }
            ]
          }
        }

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Glomin Overseas",
          "url": "https://glomin.in",
          "description": "Premier distribution and logistics company with strategic presence across North India",
          "publisher": {
            "@type": "Organization",
            "name": "Glomin Overseas"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://glomin.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://glomin.in${item.href}`
          })) || []
        }

      case 'product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": data?.name || "Premium FMCG Products",
          "description": data?.description || "High-quality FMCG products including edible oils, dry fruits, sugar, rice, and spices",
          "brand": {
            "@type": "Brand",
            "name": "Glomin Overseas"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "INR",
            "seller": {
              "@type": "Organization",
              "name": "Glomin Overseas"
            }
          }
        }

      case 'contact':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Glomin Overseas",
          "description": "Get in touch with our team for distribution partnerships, bulk orders, and business inquiries",
          "mainEntity": {
            "@type": "Organization",
            "name": "Glomin Overseas",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "name": "Delhi Office",
                "telephone": "+91-9999132057",
                "email": "glominoverseas@gmail.com",
                "contactType": "customer service",
                "areaServed": "Delhi NCR"
              },
              {
                "@type": "ContactPoint",
                "name": "Bihar Office",
                "telephone": "+91-8527277959",
                "email": "glominoverseas.bihar@gmail.com",
                "contactType": "customer service",
                "areaServed": "Bihar"
              }
            ]
          }
        }

      default:
        return {}
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData || Object.keys(structuredData).length === 0) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}
