import type { Metadata } from 'next'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'About Us',
      description: 'Learn about Glomin Overseas - a trusted distribution partner with 9+ years of excellence in FMCG distribution across North East India. Discover our story, mission, and commitment to growth.',
      keywords: ['about Glomin Overseas', 'company history', 'distribution company', 'FMCG distributor', 'North East India distribution', 'trusted partner'],
  openGraph: {
    title: 'About Glomin Overseas - Our Story & Mission',
    description: 'Discover the story behind Glomin Overseas - a trusted distribution partner with 9+ years of excellence in FMCG distribution across North East India.',
    url: 'https://glomin.in/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return <About />
}
