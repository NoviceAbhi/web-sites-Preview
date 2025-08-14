'use client'

import { motion } from 'framer-motion'
import { Leaf, Coffee, Flame, Heart } from 'lucide-react'

const processSteps = [
  {
    icon: Leaf,
    title: 'Source',
    description: 'We carefully select premium beans from sustainable farms worldwide',
    step: '01'
  },
  {
    icon: Flame,
    title: 'Roast',
    description: 'Our master roasters craft each batch to perfection using traditional methods',
    step: '02'
  },
  {
    icon: Coffee,
    title: 'Brew',
    description: 'Expert baristas prepare your drink with precision and artistry',
    step: '03'
  },
  {
    icon: Heart,
    title: 'Serve',
    description: 'Every cup is served with love and attention to create memorable moments',
    step: '04'
  }
]

export default function ProcessSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop&crop=center")',
        }}
      />
      <div className="absolute inset-0 bg-white/92" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-100 mb-3">
            From Bean to Cup
          </h2>
          <p className="text-stone-200 text-base max-w-2xl mx-auto font-medium">
            Discover the journey of our coffee, from carefully selected beans to the perfect cup in your hands
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-coffee-300 -translate-y-1/2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Number */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-coffee-600 text-white rounded-full flex items-center justify-center font-bold text-lg z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                >
                  {step.step}
                </motion.div>

                {/* Card */}
                <motion.div
                  className="bg-coffee-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative z-0"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 bg-coffee-600 text-white rounded-full mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon size={40} />
                  </motion.div>

                  <motion.h3
                    className="font-display text-xl font-bold text-coffee-900 mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    className="text-coffee-800 text-sm leading-relaxed font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>

                {/* Arrow for larger screens */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-coffee-600 -translate-y-1/2 z-20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                    viewport={{ once: true }}
                  >
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}