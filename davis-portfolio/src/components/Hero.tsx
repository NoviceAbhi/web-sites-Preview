'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto px-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Davis</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto"
        >
          Creative Developer & Designer crafting digital experiences that inspire and engage
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1"
          >
            <div className="w-full h-full rounded-full bg-white dark:bg-dark-900 flex items-center justify-center">
              <span className="text-3xl font-bold gradient-text">D</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto"
        >
          Passionate about creating innovative solutions and beautiful user experiences
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow text-sm"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border-2 border-primary-500 text-primary-500 rounded-full font-semibold hover:bg-primary-500 hover:text-white transition-colors text-sm"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            { icon: Github, href: '#' },
            { icon: Linkedin, href: '#' },
            { icon: Mail, href: '#' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full glass-effect hover:bg-primary-500 hover:text-white transition-colors"
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-primary-500" size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}