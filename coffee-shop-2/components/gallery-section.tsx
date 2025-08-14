'use client'

import { motion } from 'framer-motion'
import { Camera, Eye, Heart, Share2 } from 'lucide-react'

export default function GallerySection() {
  const galleryImages = [
    {
      id: 1,
      alt: 'Artisan coffee brewing',
      className: 'col-span-2 row-span-2',
      category: 'Brewing',
      likes: 234
    },
    {
      id: 2,
      alt: 'Fresh coffee beans',
      className: 'col-span-1 row-span-1',
      category: 'Beans',
      likes: 156
    },
    {
      id: 3,
      alt: 'Latte art masterpiece',
      className: 'col-span-1 row-span-1',
      category: 'Art',
      likes: 189
    },
    {
      id: 4,
      alt: 'Dark coffee shop interior',
      className: 'col-span-1 row-span-2',
      category: 'Ambiance',
      likes: 298
    },
    {
      id: 5,
      alt: 'Professional espresso machine',
      className: 'col-span-2 row-span-1',
      category: 'Equipment',
      likes: 167
    },
    {
      id: 6,
      alt: 'Coffee cupping session',
      className: 'col-span-1 row-span-1',
      category: 'Tasting',
      likes: 145
    }
  ]

  const coffeeEmojis = ['☕', '🫘', '🥛', '🍯', '🌿', '✨']

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-latte-art bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-950/25 to-coffee-900/25"></div>
        <div className="absolute inset-0 bg-coffee-texture opacity-5"></div>

      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center">
              <Camera className="w-6 h-6 text-coffee-950" />
            </div>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
            Coffee Gallery
          </h2>
          
          <p className="text-lg text-coffee-200 max-w-2xl mx-auto">
            A visual journey through our craft, from bean to cup in the shadows of perfection
          </p>
        </motion.div>

        <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[700px] mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, z: 10 }}
              className={`${image.className} relative group cursor-pointer overflow-hidden rounded-2xl`}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-coffee-800 via-coffee-700 to-coffee-900" />
              
              {/* Overlay Pattern */}
              <div className="absolute inset-0 bg-coffee-beans opacity-20" />
              
              {/* Content */}
              <div className="relative w-full h-full flex flex-col justify-between p-6 text-cream">
                {/* Category Badge */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="self-start"
                >
                  <span className="bg-gold/20 backdrop-blur-sm border border-gold/30 px-3 py-1 rounded-full text-sm font-medium text-gold">
                    {image.category}
                  </span>
                </motion.div>

                {/* Center Icon */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="self-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gold/30 to-yellow-500/30 backdrop-blur-sm border border-gold/40 rounded-full flex items-center justify-center group-hover:from-gold/50 group-hover:to-yellow-500/50 transition-all duration-300">
                    <span className="text-3xl">☕</span>
                  </div>
                </motion.div>

                {/* Bottom Info */}
                <div className="self-end w-full">
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="font-medium mb-3 text-center group-hover:text-gold transition-colors"
                  >
                    {image.alt}
                  </motion.p>
                  
                  {/* Action Buttons */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center space-x-2 text-coffee-200">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{image.likes}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors"
                      >
                        <Eye className="w-4 h-4 text-gold" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors"
                      >
                        <Share2 className="w-4 h-4 text-gold" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-transparent to-transparent"
              />
            </motion.div>
          ))}
        </div>

        {/* Gallery Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mb-12"
        >
          {[
            { number: '1.2K+', label: 'Photos Shared' },
            { number: '15K+', label: 'Total Likes' },
            { number: '500+', label: 'Coffee Moments' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h3 
                className="font-serif text-2xl font-bold text-gold mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-coffee-200">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary relative overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-coffee-950 transition-colors">View More Photos</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}