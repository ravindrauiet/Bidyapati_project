import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import BusinessModel from '@/components/BusinessModel'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <About />
      <Services />
      <BusinessModel />
      <Contact />
      <Footer />
    </main>
  )
}
