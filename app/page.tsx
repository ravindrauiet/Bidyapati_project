import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WarehouseShowcase from '@/components/WarehouseShowcase'
import About from '@/components/About'
import BusinessModel from '@/components/BusinessModel'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <BusinessModel />
      <WarehouseShowcase />
      <Footer />
    </main>
  )
}
