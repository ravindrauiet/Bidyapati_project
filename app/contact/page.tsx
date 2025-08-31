import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Glomin Overseas. Contact our Delhi and Bihar offices for distribution partnerships, bulk orders, and business inquiries. We\'re here to help grow your business.',
  keywords: ['contact Glomin Overseas', 'Delhi office', 'Bihar office', 'distribution partnership', 'bulk orders', 'business inquiry', 'customer support'],
  openGraph: {
    title: 'Contact Glomin Overseas - Get In Touch',
    description: 'Connect with our team for distribution partnerships, bulk orders, and business inquiries. We\'re here to help grow your business across North East India.',
    url: 'https://glomin.in/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <Contact />
}
