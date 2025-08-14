'use client'

import { motion } from 'framer-motion'
import { Star, Flame, Snowflake, Zap, Heart, Crown } from 'lucide-react'

export default function MenuSection() {
  const menuCategories = [
    {
      name: 'Hot Classics',
      icon: Flame,
      items: [
        {
          name: 'Signature Espresso',
          description: 'Rich, bold espresso with notes of dark chocolate and caramel',
          price: '$4.50',
          popular: true,
          intensity: 5
        },
        {
          name: 'Vanilla Bean Latte',
          description: 'Smooth espresso with steamed milk and real vanilla bean',
          price: '$5.25',
          popular: false,
          intensity: 3
        },
        {
          name: 'Mocha Supreme',
          description: 'Rich espresso with chocolate, steamed milk, and whipped cream',
          price: '$5.75',
          popular: false,
          intensity: 4
        }
      ]
    },
    {
      name: 'Cold Brews',
      icon: Snowflake,
      items: [
        {
          name: 'Cold Brew Delight',
          description: 'Slow-steeped cold brew with a hint of brown sugar',
          price: '$4.75',
          popular: true,
          intensity: 4
        },
        {
          name: 'Iced Caramel Macchiato',
          description: 'Espresso with cold milk, vanilla syrup, and caramel drizzle',
          price: '$5.50',
          popular: false,
          intensity: 3
        }
      ]
    },
    {
      name: 'Artisan Specials',
      icon: Crown,
      items: [
        {
          name: 'Artisan Pour Over',
          description: 'Single-origin beans brewed to perfection with our V60 method',
          price: '$6.00',
          popular: true,
          intensity: 5
        }
      ]
    }
  ]

  const getIntensityColor = (intensity: number) => {
    if (intensity <= 2) return 'text-green-400'
    if (intensity <= 3) return 'text-yellow-400'
    if (intensity <= 4) return 'text-orange-400'
    return 'text-red-400'
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-coffee-beans-bg bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/25 to-coffee-950/25"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>

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
              <Zap className="w-6 h-6 text-coffee-950" />
            </div>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
            Our Menu
          </h2>
          
          <p className="text-lg text-coffee-200 max-w-2xl mx-auto">
            Carefully crafted beverages made with the finest ingredients and expert technique in our dark sanctuary
          </p>
        </motion.div>

        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center justify-center mb-12">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center mr-4"
                >
                  <category.icon className="w-6 h-6 text-coffee-950" />
                </motion.div>
                <h3 className="font-serif text-2xl font-bold text-cream">{category.name}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-yellow-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    
                    <div className="relative bg-coffee-800/50 backdrop-blur-sm border border-gold/20 p-6 rounded-2xl group-hover:border-gold/40 transition-all duration-300">
                      {item.popular && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="absolute -top-3 -right-3 bg-gradient-to-r from-gold to-yellow-500 text-coffee-950 px-3 py-1 rounded-full text-sm font-bold flex items-center shadow-lg"
                        >
                          <Star className="w-4 h-4 mr-1" />
                          Popular
                        </motion.div>
                      )}

                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-serif text-lg font-semibold text-cream group-hover:text-gold transition-colors">
                          {item.name}
                        </h4>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2, delay: i * 0.1 }}
                              className={`w-2 h-2 rounded-full ${
                                i < item.intensity ? 'bg-gold' : 'bg-coffee-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-coffee-200 mb-6 leading-relaxed group-hover:text-coffee-100 transition-colors">
                        {item.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <motion.span 
                          className="text-xl font-bold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent"
                          whileHover={{ scale: 1.1 }}
                        >
                          {item.price}
                        </motion.span>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-gold to-yellow-500 text-coffee-950 px-6 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 flex items-center space-x-2"
                        >
                          <Heart className="w-4 h-4" />
                          <span>Add to Order</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary relative overflow-hidden group"
          >
            <span className="relative z-10">View Full Menu</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold"
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