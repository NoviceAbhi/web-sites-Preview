'use client'

import { motion } from 'framer-motion'
import { Coffee, Heart, Star, Sparkles, Zap } from 'lucide-react'

export default function HeroElements() {
  return (
    <>
      {/* Coffee Steam Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`steam-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 20}%`,
              top: '75%',
            }}
          >
            {[...Array(2)].map((_, j) => (
              <motion.div
                key={j}
                className="absolute w-1 h-8 bg-white/20 rounded-full"
                style={{ left: `${j * 6}px` }}
                animate={{
                  y: [0, -60],
                  opacity: [0.6, 0],
                  scale: [1, 1.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: j * 0.5 + i * 0.3,
                  ease: 'easeOut'
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>
      


      {/* Orbiting Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute w-24 h-24"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-12px',
            marginTop: '-12px',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + i * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div
            className="absolute"
            style={{
              left: `${30 + i * 15}px`,
              top: '50%',
            }}
          >
            {i === 0 ? <Coffee size={12} className="text-amber-400/40" /> :
             i === 1 ? <Heart size={10} className="text-orange-400/35" /> :
             <Star size={8} className="text-yellow-400/40" />}
          </motion.div>
        </motion.div>
      ))}

      {/* Enhanced Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute ${
              i % 3 === 0 ? 'w-2 h-2 bg-amber-400/40 rounded-full' :
              i % 3 === 1 ? 'w-1 h-1 bg-orange-300/50 rounded-full' :
              'w-1 h-1 bg-yellow-400/45 rounded-full'
            }`}
            animate={{
              y: [0, -150],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeOut'
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>
    </>
  )
}