'use client'

import { motion } from 'framer-motion'
import { Users, Award, Coffee, Clock } from 'lucide-react'

export default function Stats() {
  const stats = [
    { icon: Users, number: '150+', label: 'Happy Clients' },
    { icon: Award, number: '50+', label: 'Projects Completed' },
    { icon: Coffee, number: '1000+', label: 'Cups of Coffee' },
    { icon: Clock, number: '5+', label: 'Years Experience' },
  ]

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-4">
                <stat.icon size={40} />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-3xl font-bold mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-lg opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}