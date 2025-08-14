'use client'

import { motion } from 'framer-motion'
import { Coffee, ArrowDown, Sparkles, Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <motion.div 
        className="absolute inset-0 bg-hero-coffee bg-cover bg-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-950/40 via-coffee-900/40 to-coffee-800/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-gold/30 rounded-full"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-yellow-400/40 rounded-full"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-gold/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-yellow-500/30 rounded-full"></div>
      </div>



      <div className="container-max section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block mb-8">
            <Coffee className="w-16 h-16 mx-auto text-gold" />
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-4xl md:text-6xl font-bold text-cream mb-4 relative"
          >
            <span className="relative inline-block">
              Roasted
            </span>
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="block bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent"
            >
              Dreams
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-coffee-200 max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            Where every bean tells a story and every cup creates memories in the heart of darkness
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary group relative overflow-hidden"
          >
            <span className="relative z-10">Explore Menu</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary group"
          >
            <span className="group-hover:text-coffee-950 transition-colors">Our Story</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}