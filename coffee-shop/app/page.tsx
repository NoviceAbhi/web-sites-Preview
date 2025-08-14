import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import FeaturesSection from '@/components/features-section'
import ProcessSection from '@/components/process-section'
import MenuSection from '@/components/menu-section'
import ParallaxSection from '@/components/parallax-section'
import GallerySection from '@/components/gallery-section'
import TestimonialsSection from '@/components/testimonials-section'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'
export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProcessSection />
      <MenuSection />
      <ParallaxSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}