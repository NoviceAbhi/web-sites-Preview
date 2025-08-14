import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import FeaturesSection from '@/components/features-section'
import MenuSection from '@/components/menu-section'
import TestimonialsSection from '@/components/testimonials-section'
import ParallaxSection from '@/components/parallax-section'
import GallerySection from '@/components/gallery-section'
import HoursSection from '@/components/hours-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <MenuSection />
      <TestimonialsSection />
      <ParallaxSection />
      <GallerySection />
      <HoursSection />
      <ContactSection />
      <Footer />
    </main>
  )
}