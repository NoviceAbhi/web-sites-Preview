'use client'

import { motion } from 'framer-motion'
import { Monitor, Smartphone, Globe, Paintbrush, Database, Rocket } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'Performance Optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'iOS/Android', 'App Store Deployment']
    },
    {
      icon: Paintbrush,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience',
      features: ['Figma/Adobe XD', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable server-side solutions and API development',
      features: ['Node.js', 'Python', 'Database Design', 'Cloud Services']
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete online store solutions with payment integration',
      features: ['Shopify', 'WooCommerce', 'Payment Gateways', 'Inventory Management']
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Speed up your website and improve user experience',
      features: ['SEO Optimization', 'Core Web Vitals', 'CDN Setup', 'Caching Strategies']
    }
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I offer a comprehensive range of digital services to help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white dark:bg-dark-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-lg font-bold mb-4 group-hover:text-primary-500 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                    className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold text-base hover:shadow-lg transition-shadow"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}