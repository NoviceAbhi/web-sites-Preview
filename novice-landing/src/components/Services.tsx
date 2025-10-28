'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, Search, Paintbrush } from 'lucide-react'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies and best practices for optimal performance',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Security First']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless UX',
      features: ['User-Friendly', 'Performance', 'Cross-Platform', 'App Store Ready']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to improve your online visibility and search rankings',
      features: ['Keyword Research', 'On-Page SEO', 'Analytics', 'Content Strategy']
    },
    {
      icon: Paintbrush,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience and engagement',
      features: ['User Research', 'Prototyping', 'Visual Design', 'Usability Testing']
    },
    {
      icon: Globe,
      title: 'E-Commerce',
      description: 'Complete e-commerce solutions with payment integration and inventory management',
      features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics']
    },
    {
      icon: Search,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns to grow your online presence and reach',
      features: ['Social Media', 'Content Marketing', 'PPC Campaigns', 'Email Marketing']
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop" 
          alt="" 
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Services</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
            >
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-xl w-fit mb-6">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-lg font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}