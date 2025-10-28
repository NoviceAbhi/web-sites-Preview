'use client'

import { Users, CreditCard, Calendar, Activity, Shield, Clock, Smartphone, BarChart3 } from 'lucide-react'
import ScrollReveal from './ui/ScrollReveal'

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Smart Dashboard & Live Crowd Tracking",
      description: "Real-time dashboard showing current gym capacity, equipment usage, and class availability. Optimize space and improve member experience.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: CreditCard,
      title: "Automated Fees & Membership Management",
      description: "Complete automation of billing, SMS/WhatsApp payment reminders, online payments, and membership status tracking. Reduce admin overhead by 80%.",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Calendar,
      title: "Program & Progress Tracking",
      description: "Custom workout plans, progress logging with graphs and milestones. Ultimate tool for member retention and personalized training.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Activity,
      title: "Member Retention Analytics",
      description: "Advanced analytics showing member engagement, attendance patterns, and retention metrics to boost gym profitability.",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Shield,
      title: "Staff Optimization",
      description: "Use crowd data to optimize staff schedules, identify peak hours, and improve operational efficiency.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Clock,
      title: "24/7 Access Control",
      description: "Secure keyless entry with time-based access control and automated attendance tracking.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10"
    },
    {
      icon: Smartphone,
      title: "Premium Member Experience",
      description: "Mobile app for checking gym capacity, booking equipment, and viewing personalized workout plans before arriving.",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    },
    {
      icon: BarChart3,
      title: "Trainer-Client Relationship Tools",
      description: "Strengthen trainer-client bonds with progress sharing, milestone celebrations, and personalized coaching features.",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10"
    }
  ]

  return (
    <section id="services" className="section-padding bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xl lg:text-2xl font-bold mb-6">
            <span className="gradient-text">Advanced Features</span>
            <br />
            <span className="text-white">for Modern Fitness</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-3xl mx-auto">
            Experience the future of fitness with our cutting-edge technology and comprehensive management system
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="group bg-dark-100 rounded-xl p-6 hover:bg-dark-100/80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20 border border-gray-800 hover:border-primary-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-500 transition-colors relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Section */}
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '1,200+', label: 'Active Members' },
              { value: '50+', label: 'Equipment Units' },
              { value: '24/7', label: 'Access Available' },
              { value: '98%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="space-y-2 group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default FeaturesSection