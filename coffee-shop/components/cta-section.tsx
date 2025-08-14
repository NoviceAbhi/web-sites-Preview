'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=center")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/90 via-mocha-800/85 to-coffee-900/90" />
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Visit Us Today
          </motion.h2>
          <motion.p
            className="text-white/90 text-base max-w-2xl mx-auto mb-6 font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the perfect blend of exceptional coffee, warm atmosphere, and friendly service. We can't wait to serve you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: MapPin,
              title: 'Location',
              content: '123 Coffee Street, Bean City, BC 12345'
            },
            {
              icon: Phone,
              title: 'Call Us',
              content: '(555) 123-BREW'
            },
            {
              icon: Clock,
              title: 'Hours',
              content: 'Mon-Fri: 6AM-8PM, Sat-Sun: 7AM-9PM'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-caramel-600 to-cream-600 rounded-full mb-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon size={32} />
              </motion.div>
              <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-white/90 text-sm font-medium">{item.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="bg-gradient-to-r from-cream-100 to-caramel-100 text-espresso-800 hover:from-cream-200 hover:to-caramel-200 px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Directions
            </motion.button>
            <motion.button
              className="border-2 border-cream-200 text-cream-100 hover:bg-gradient-to-r hover:from-cream-200 hover:to-caramel-200 hover:text-espresso-800 px-8 py-3 rounded-full text-base font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Make Reservation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}