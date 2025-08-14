'use client'

import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Gradient Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl opacity-15"
          style={{
            background: `radial-gradient(circle, ${
              i === 0 ? '#f59e0b' : i === 1 ? '#ea580c' : '#d97706'
            } 0%, transparent 70%)`,
            width: '250px',
            height: '250px',
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 4,
          }}
        />
      ))}
      
      {/* Floating Lines */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute bg-gradient-to-r from-transparent via-amber-400/8 to-transparent"
          style={{
            width: '150px',
            height: '1px',
            left: `${25 * i}%`,
            top: `${25 * i}%`,
            rotate: `${45 * i}deg`,
          }}
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 3,
          }}
        />
      ))}
    </div>
  )
}