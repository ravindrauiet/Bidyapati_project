import type { Metadata } from 'next'
import Products from '@/components/Products'

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Explore Glomin Overseas premium product portfolio including edible oils, sugar, rice, spices, and our exclusive Glomin brand dry fruits. Quality FMCG products for all your needs.',
  keywords: ['FMCG products', 'edible oils', 'sugar', 'rice', 'spices', 'dry fruits', 'Glomin brand', 'bulk deals', 'gift packs', 'distribution products'],
  openGraph: {
    title: 'Premium FMCG Products - Glomin Overseas',
    description: 'Discover our comprehensive range of premium FMCG products including edible oils, sugar, rice, spices, and exclusive Glomin brand dry fruits.',
    url: 'https://glomin.in/products',
  },
  alternates: {
    canonical: '/products',
  },
}

export default function ProductsPage() {
  return <Products />
}
