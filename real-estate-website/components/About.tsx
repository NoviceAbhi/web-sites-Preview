import { Users, Award, Home, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const stats = [
  { icon: Home, label: 'Properties Sold', value: '2,500+' },
  { icon: Users, label: 'Happy Clients', value: '1,800+' },
  { icon: Award, label: 'Awards Won', value: '25+' },
  { icon: TrendingUp, label: 'Years Experience', value: '15+' }
]

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="slide-in-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About HomeList
              </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in the real estate industry, HomeList has been helping families find their perfect homes. We pride ourselves on providing exceptional service and expert guidance throughout your property journey.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experienced professionals is dedicated to making your real estate dreams a reality, whether you're buying, selling, or investing in property.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="slide-in-right">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="About HomeList"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}