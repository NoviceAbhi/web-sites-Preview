'use client'

import { motion } from 'framer-motion'
import { Coffee, Leaf, Clock, Heart } from 'lucide-react'

const features = [
  {
    icon: Coffee,
    title: 'Premium Beans',
    description: 'Sourced from the finest coffee farms around the world'
  },
  {
    icon: Leaf,
    title: 'Organic & Fair Trade',
    description: 'Ethically sourced with respect for farmers and environment'
  },
  {
    icon: Clock,
    title: 'Fresh Daily',
    description: 'Roasted fresh every morning for the perfect flavor'
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every cup crafted with passion and attention to detail'
  }
]

export default function FeaturesSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop&crop=center")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50/92 via-caramel-50/88 to-coffee-100/90" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-100 mb-3">
            Why Choose Brew Haven?
          </h2>
          <p className="text-stone-200 text-base max-w-2xl mx-auto font-medium">
            We're committed to delivering an exceptional coffee experience that goes beyond just great taste
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-caramel-600 to-mocha-600 text-white rounded-full mb-4 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon size={32} />
              </motion.div>
              <h3 className="font-display text-lg font-semibold text-coffee-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-coffee-800 text-sm font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}