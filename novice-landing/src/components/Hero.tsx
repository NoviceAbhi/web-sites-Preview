'use client'

import { motion } from 'framer-motion'
import { Play, Star, Zap, Code2 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-1/4 w-3 h-3 bg-yellow-400 rounded-full"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2 text-accent font-medium"
            >
              <Star className="w-5 h-5 fill-current" />
              <span>Premium Digital Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl lg:text-5xl font-black leading-tight"
            >
              <span className="block">Build</span>
              <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Amazing
              </span>
              <span className="block">Websites</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-300 leading-relaxed max-w-lg"
            >
              Transform your ideas into stunning digital experiences with cutting-edge design and development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-accent to-secondary px-8 py-4 rounded-2xl font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Project</span>
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-gray-600 hover:border-accent px-8 py-4 rounded-2xl font-bold text-white hover:bg-accent/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex space-x-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-700 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-xl flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Novice Studio</h3>
                      <p className="text-sm text-gray-400">Design System</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
                  <div className="h-4 bg-gray-600 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gray-600 rounded-full w-1/2"></div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="h-20 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl border border-accent/30"></div>
                    <div className="h-20 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl border border-secondary/30"></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-accent p-4 rounded-2xl shadow-lg"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-secondary p-4 rounded-2xl shadow-lg"
              >
                <Star className="w-6 h-6 text-white fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}