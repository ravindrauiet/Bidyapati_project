import Company from '@/components/Company'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CompanyPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Company />
      <Footer />
    </main>
  )
}
