'use client'

import { motion } from 'framer-motion'
import { Heart, Award, Users, Coffee, Leaf, Clock } from 'lucide-react'

export default function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every cup is crafted with love and dedication to the art of coffee making',
      color: 'from-red-500/20 to-pink-500/20'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We source only the finest beans from sustainable farms around the world',
      color: 'from-gold/20 to-yellow-500/20'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building connections one conversation and one cup at a time',
      color: 'from-blue-500/20 to-purple-500/20'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to ethical sourcing and environmental responsibility',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Clock,
      title: 'Tradition',
      description: 'Honoring time-tested brewing methods with modern innovation',
      color: 'from-orange-500/20 to-red-500/20'
    },
    {
      icon: Coffee,
      title: 'Excellence',
      description: 'Pursuing perfection in every aspect of the coffee experience',
      color: 'from-coffee-400/20 to-coffee-600/20'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-coffee-shop bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-950/25 to-coffee-900/25"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-black/10"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-64 h-64 border border-gold/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-64 h-64 border border-gold/10 rounded-full"
        />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
              Our Story
            </h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base text-coffee-200 mb-4 leading-relaxed"
            >
              Founded in 2018, Roasted Dreams began as a small neighborhood café with a big vision: 
              to create a space where exceptional coffee meets genuine community. Our journey started 
              with a simple belief that great coffee has the power to bring people together.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base text-coffee-200 mb-6 leading-relaxed"
            >
              Today, we continue to honor that vision by carefully selecting beans from ethical 
              sources, roasting them to perfection, and serving them in an atmosphere that feels 
              like home in the embrace of darkness.
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="btn-primary hover:scale-105 transition-transform"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-yellow-500/5 rounded-3xl blur-3xl" />
            <div className="relative bg-coffee-800/50 backdrop-blur-sm border border-gold/20 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`relative p-4 rounded-xl bg-gradient-to-br ${value.color} backdrop-blur-sm border border-white/10 group cursor-pointer`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-gold/25 transition-shadow">
                      <value.icon className="w-6 h-6 text-coffee-950" />
                    </div>
                    <h3 className="font-serif text-base font-semibold text-cream mb-2 group-hover:text-gold transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-coffee-200 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '50K+', label: 'Happy Customers' },
            { number: '15+', label: 'Coffee Origins' },
            { number: '6', label: 'Years Experience' },
            { number: '24/7', label: 'Coffee Love' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-yellow-500/5 rounded-2xl"></div>
              <div className="relative bg-coffee-800/30 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 group-hover:border-gold/40 transition-colors">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold mb-2">
                  {stat.number}
                </h3>
                <p className="text-coffee-200 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}