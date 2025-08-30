import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import ChatWidget from '../components/ChatWidget'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Glomin Overseas - Premier Distribution & Logistics Company',
  description: 'Glomin Overseas is a premier distribution and logistics company with strategic presence across North India, specializing in Modern Trade, E-commerce, and General Trade solutions.',
  keywords: 'distribution, logistics, Modern Trade, E-commerce, General Trade, North India, Delhi, Bihar',
  authors: [{ name: 'Glomin Overseas' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ChatWidget />
        <WhatsAppButton />
      </body>
    </html>
  )
}
