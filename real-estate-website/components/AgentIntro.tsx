import { Phone, Mail, Award, Users, Home } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const agents = [
  {
    id: 1,
    name: "Jessica Martinez",
    title: "Senior Real Estate Agent",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    phone: "+1 (555) 123-4567",
    email: "jessica@homelist.com",
    message: "With 8 years of experience, I specialize in luxury properties and first-time homebuyers. I'm here to make your real estate journey smooth and successful.",
    stats: { sold: 150, experience: 8 }
  },
  {
    id: 2,
    name: "David Thompson",
    title: "Property Investment Specialist",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    phone: "+1 (555) 987-6543",
    email: "david@homelist.com",
    message: "I help investors find profitable properties and guide families to their perfect homes. Let's turn your real estate goals into reality.",
    stats: { sold: 200, experience: 12 }
  }
]

export default function AgentIntro() {
  return (
    <section className="py-24 bg-neutral-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary-800 mb-6">
              Meet Our Expert Agents
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans font-light">
              Dedicated professionals committed to finding your perfect home
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {agents.map((agent, index) => (
            <ScrollReveal key={agent.id} className={`delay-${index * 200}`}>
              <div className="card p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-serif font-semibold text-primary-800 mb-2">
                    {agent.name}
                  </h3>
                  <p className="text-primary-600 font-sans font-medium mb-4">
                    {agent.title}
                  </p>
                  
                  <p className="text-gray-600 font-sans font-light mb-6 leading-relaxed">
                    {agent.message}
                  </p>
                  
                  <div className="flex justify-center md:justify-start gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-serif font-semibold text-primary-800">
                        {agent.stats.sold}+
                      </div>
                      <div className="text-sm text-gray-600 font-sans">Properties Sold</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-serif font-semibold text-primary-800">
                        {agent.stats.experience}
                      </div>
                      <div className="text-sm text-gray-600 font-sans">Years Experience</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-sm hover:bg-primary-700 transition-colors font-sans font-medium"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center justify-center px-4 py-2 border border-primary-300 text-primary-700 rounded-sm hover:bg-neutral-sand transition-colors font-sans font-medium"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex justify-center items-center gap-8 mt-16 pt-8 border-t border-primary-200">
          <div className="flex items-center gap-2 text-primary-700">
            <Award className="h-5 w-5" />
            <span className="font-sans font-medium">Award Winning Team</span>
          </div>
          <div className="flex items-center gap-2 text-primary-700">
            <Users className="h-5 w-5" />
            <span className="font-sans font-medium">1800+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2 text-primary-700">
            <Home className="h-5 w-5" />
            <span className="font-sans font-medium">2500+ Properties Sold</span>
          </div>
        </div>
      </div>
    </section>
  )
}