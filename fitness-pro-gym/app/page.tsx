import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import PlansSection from '@/components/PlansSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import PaymentReminder from '@/components/PaymentReminder'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-300">
      <Navbar />
      <PaymentReminder />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PlansSection />
      <ContactSection />
      <Footer />
    </main>
  )
}