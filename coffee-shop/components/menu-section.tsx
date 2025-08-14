'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const menuItems = [
  {
    name: 'Signature Espresso',
    description: 'Rich, bold espresso with notes of chocolate and caramel',
    price: '$4.50',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop'
  },
  {
    name: 'Vanilla Latte',
    description: 'Smooth espresso with steamed milk and vanilla syrup',
    price: '$5.25',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
  },
  {
    name: 'Caramel Macchiato',
    description: 'Espresso with steamed milk, vanilla, and caramel drizzle',
    price: '$5.75',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    name: 'Cold Brew',
    description: 'Smooth, refreshing cold-brewed coffee served over ice',
    price: '$4.25',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=300&fit=crop'
  },
  {
    name: 'Cappuccino',
    description: 'Perfect balance of espresso, steamed milk, and foam',
    price: '$4.75',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop'
  },
  {
    name: 'Mocha Delight',
    description: 'Rich chocolate and espresso with whipped cream',
    price: '$5.50',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  }
]

export default function MenuSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=1080&fit=crop&crop=center")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50/92 via-white/90 to-caramel-50/88" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-coffee-900 mb-3">
            Our Signature Menu
          </h2>
          <p className="text-coffee-900 text-base max-w-2xl mx-auto font-medium">
            Discover our carefully crafted beverages, each made with premium ingredients and expert technique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative group"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-caramel-600 via-mocha-500 to-espresso-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              <div className="absolute inset-[2px] bg-white rounded-2xl z-10" />
              <div className="relative overflow-hidden h-48 z-20">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Steam Effect */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-8 bg-white/40 rounded-full absolute"
                      style={{ left: `${i * 4}px` }}
                      animate={{
                        y: [0, -20, -40],
                        opacity: [0.7, 0.3, 0],
                        scale: [1, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'easeOut'
                      }}
                    />
                  ))}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-coffee-900">{item.rating}</span>
                </div>
              </div>
              
              <div className="p-6 relative z-20">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-lg font-semibold text-coffee-900">
                    {item.name}
                  </h3>
                  <span className="text-coffee-600 font-bold text-base">
                    {item.price}
                  </span>
                </div>
                <p className="text-coffee-800 text-sm mb-4 font-medium">
                  {item.description}
                </p>
                <motion.button
                  className="w-full bg-gradient-to-r from-caramel-600 to-mocha-600 hover:from-caramel-500 hover:to-mocha-500 text-white py-3 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Add to Order</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}