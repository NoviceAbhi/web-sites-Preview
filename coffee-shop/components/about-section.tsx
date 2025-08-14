'use client'

import { motion } from 'framer-motion'
import { Award, Users, Coffee, Clock } from 'lucide-react'
import AnimatedCounter from './animated-counter'

const stats = [
  { icon: Coffee, number: '50K+', label: 'Cups Served' },
  { icon: Users, number: '10K+', label: 'Happy Customers' },
  { icon: Award, number: '15+', label: 'Awards Won' },
  { icon: Clock, number: '5+', label: 'Years Experience' }
]

export default function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        animate={{
          backgroundPosition: ['0% 0%', '5% 5%', '0% 0%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&h=1080&fit=crop&crop=center")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50/95 via-coffee-50/95 to-caramel-100/90" />
      
      {/* Floating Coffee Bean Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-2 bg-coffee-600/20 rounded-full"
            animate={{
              y: [0, -200],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.6, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeOut'
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="font-display text-3xl md:text-4xl font-bold text-coffee-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Coffee Story
            </motion.h2>
            
            <motion.p 
              className="text-coffee-900 text-base mb-4 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Founded in 2020 with a passion for exceptional coffee, Brew Haven has become a cornerstone of the community. We source our beans directly from sustainable farms around the world, ensuring every cup supports both quality and ethical practices.
            </motion.p>
            
            <motion.p 
              className="text-coffee-900 text-base mb-6 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our expert baristas craft each drink with precision and care, creating not just beverages, but experiences that bring people together. From our signature blends to seasonal specialties, every cup tells a story of dedication and craftsmanship.
            </motion.p>

            <motion.button
              className="bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-mocha-600 to-espresso-600 text-white rounded-full mb-4 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon size={32} />
                </motion.div>
                <motion.h3 
                  className="font-display text-2xl font-bold text-coffee-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCounter 
                    value={stat.number === '50K+' ? 50000 : stat.number === '10K+' ? 10000 : stat.number === '15+' ? 15 : 5} 
                    suffix={stat.number.includes('K') ? 'K+' : '+'}
                    duration={2 + index * 0.2}
                  />
                </motion.h3>
                <p className="text-coffee-700 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}