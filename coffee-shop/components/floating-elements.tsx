'use client'

import { motion } from 'framer-motion'
import { Coffee, Heart, Star, Sparkles } from 'lucide-react'

export default function FloatingElements() {
  const elements = [
    { icon: Coffee, delay: 0, x: '15%', y: '25%' },
    { icon: Heart, delay: 2, x: '80%', y: '20%' },
    { icon: Star, delay: 4, x: '20%', y: '70%' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className="absolute text-coffee-300/20"
          style={{ left: Element.x, top: Element.y }}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: Element.delay,
            ease: "easeInOut"
          }}
        >
          <Element.icon size={20} />
        </motion.div>
      ))}
    </div>
  )
}