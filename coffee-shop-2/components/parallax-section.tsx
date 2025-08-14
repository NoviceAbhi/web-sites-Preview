'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function ParallaxSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-hero-coffee bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-coffee-950/25"></div>
        <div className="absolute inset-0 bg-coffee-beans opacity-10"></div>
      </div>



      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block mb-8">
            <Quote className="w-12 h-12 text-gold mx-auto" />
          </div>
          
          <motion.blockquote 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-3xl font-bold text-cream mb-6 leading-relaxed"
          >
            &ldquo;Coffee is a language in itself, and we are fluent in every dialect of flavor.&rdquo;
          </motion.blockquote>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4"
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-gold font-medium">Master Roaster</span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-gold"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}