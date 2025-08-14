'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <section ref={ref} className="relative h-96 overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&h=1080&fit=crop&crop=center")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/80 to-coffee-800/60" />
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255,255,255,0.5)',
                '0 0 40px rgba(255,255,255,0.8)',
                '0 0 20px rgba(255,255,255,0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Coffee is Our Passion
          </motion.h3>
          <motion.p 
            className="text-lg text-white/90 font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Every bean tells a story, every cup creates a memory
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}