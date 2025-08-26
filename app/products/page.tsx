import Products from '@/components/Products'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ProductsPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Products />
      <Footer />
    </main>
  )
}
