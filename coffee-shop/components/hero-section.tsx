'use client'

import { motion } from 'framer-motion'
import { Coffee, ArrowDown } from 'lucide-react'
import HeroElements from './hero-elements'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop&crop=center")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-espresso-900/85 via-mocha-800/75 to-coffee-800/80" />


      {/* Main Content */}
      <div className="text-center text-white z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block bg-gradient-to-r from-caramel-600/40 to-mocha-600/40 backdrop-blur-sm border border-cream-300/60 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              ☕ Premium Coffee Experience Since 2020
            </span>
          </motion.div>
          
          <motion.h1 
            className="font-display text-4xl md:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Brew Haven
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-3 text-white font-semibold max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where every cup tells a story of passion, quality, and the perfect brew
          </motion.p>

          <motion.p 
            className="text-base mb-6 text-white/90 font-medium max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Discover artisanal coffee crafted by expert baristas in a warm, welcoming atmosphere
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="bg-gradient-to-r from-caramel-600 to-mocha-600 hover:from-caramel-500 hover:to-mocha-500 text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Explore Our Menu</span>
            </motion.button>
            <motion.button
              className="border-2 border-cream-300 text-cream-100 hover:bg-gradient-to-r hover:from-cream-300 hover:to-caramel-300 hover:text-espresso-900 px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Our Store
            </motion.button>
          </motion.div>

          <motion.div
            className="flex justify-center items-center gap-8 text-coffee-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-xl font-bold text-white">50K+</div>
              <div className="text-xs">Cups Served</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white">15+</div>
              <div className="text-xs">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white">5+</div>
              <div className="text-xs">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ArrowDown size={32} />
        </div>
      </motion.div>
    </section>
  )
}