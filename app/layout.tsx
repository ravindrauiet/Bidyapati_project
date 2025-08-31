import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import ChatWidget from '../components/ChatWidget'
import WhatsAppButton from '../components/WhatsAppButton'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import StructuredData from '../components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Glomin Overseas - Premier Distribution & Logistics Company',
    template: '%s | Glomin Overseas'
  },
  description: 'Glomin Overseas is a premier distribution and logistics company with strategic presence across North India, specializing in Modern Trade, E-commerce, and General Trade solutions.',
  keywords: ['distribution', 'logistics', 'Modern Trade', 'E-commerce', 'General Trade', 'North India', 'Delhi', 'Bihar', 'FMCG', 'dry fruits', 'edible oils', 'sugar', 'rice', 'spices'],
  authors: [{ name: 'Glomin Overseas', url: 'https://glomin.in' }],
  creator: 'Glomin Overseas',
  publisher: 'Glomin Overseas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://glomin.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://glomin.in',
    title: 'Glomin Overseas - Premier Distribution & Logistics Company',
    description: 'Glomin Overseas is a premier distribution and logistics company with strategic presence across North India.',
    siteName: 'Glomin Overseas',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Glomin Overseas - Distribution & Logistics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glomin Overseas - Premier Distribution & Logistics Company',
    description: 'Glomin Overseas is a premier distribution and logistics company with strategic presence across North India.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  category: 'business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        
        {/* Structured Data */}
        <StructuredData type="organization" />
        <StructuredData type="website" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//vercel.live" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <ChatWidget />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
