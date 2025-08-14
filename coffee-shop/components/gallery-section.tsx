'use client'

import { motion } from 'framer-motion'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop',
    alt: 'Coffee shop interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop',
    alt: 'Barista making coffee'
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
    alt: 'Coffee beans'
  },
  {
    src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    alt: 'Latte art'
  },
  {
    src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop',
    alt: 'Coffee shop atmosphere'
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
    alt: 'Coffee brewing'
  }
]

export default function GallerySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-espresso-900/90 via-mocha-900/85 to-coffee-900/80" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Experience Our Atmosphere
          </h2>
          <p className="text-white/90 text-base max-w-2xl mx-auto font-medium">
            Step into our world of coffee craftsmanship and cozy ambiance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
            >
              {/* Glowing Border Effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-caramel-400 via-cream-300 to-mocha-400 rounded-2xl opacity-0 group-hover:opacity-75 blur-sm"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                whileHover={{ scale: 1.15, rotate: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Sparkle Effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut'
                    }}
                  />
                ))}
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-coffee-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute bottom-4 left-4 text-white">
                  <motion.p
                    className="font-semibold text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {image.alt}
                  </motion.p>
                  <motion.div
                    className="w-12 h-0.5 bg-gradient-to-r from-caramel-300 to-cream-300 mt-2"
                    initial={{ width: 0 }}
                    whileHover={{ width: 48 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-coffee-600 hover:bg-coffee-500 text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}