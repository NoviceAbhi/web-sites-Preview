import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedProperties from '@/components/FeaturedProperties'
import InteractiveMap from '@/components/InteractiveMap'
import About from '@/components/About'
import AgentIntro from '@/components/AgentIntro'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedProperties />
      <InteractiveMap />
      <About />
      <AgentIntro />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}