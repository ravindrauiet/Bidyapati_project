import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Dry Fruits Gallery',
  description: 'Explore our exclusive Glomin brand collection featuring 25+ premium dry fruits and nuts varieties. High-quality products perfect for bulk orders and customized gift packaging.',
  keywords: ['dry fruits gallery', 'premium nuts', 'Glomin brand', 'bulk dry fruits', 'gift packs', 'premium quality', 'dry fruits collection'],
  openGraph: {
    title: 'Premium Dry Fruits Gallery - Glomin Overseas',
    description: 'Browse our exclusive collection of 25+ premium dry fruits and nuts. Perfect for bulk orders and customized gift packaging.',
    url: 'https://glomin.in/dry-fruits-gallery',
  },
  alternates: {
    canonical: '/dry-fruits-gallery',
  },
}

export default function DryFruitsGalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
