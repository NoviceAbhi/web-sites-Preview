'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Coffee Enthusiast',
    content: 'The best coffee I\'ve ever had! The atmosphere is perfect for both work and relaxation.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Michael Chen',
    role: 'Local Business Owner',
    content: 'Brew Haven has become my daily ritual. The quality and service are consistently outstanding.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Student',
    content: 'Perfect study spot with amazing coffee. The staff is friendly and the WiFi is great!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop&crop=center")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-stone-800/85 via-coffee-900/80 to-espresso-900/85" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-100 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-stone-200 text-base max-w-2xl mx-auto font-medium">
            Don't just take our word for it - hear from our amazing community of coffee lovers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cream-50 via-caramel-50 to-mocha-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              <motion.div
                className="absolute -top-4 left-8 bg-gradient-to-br from-caramel-600 to-mocha-600 text-white p-3 rounded-full z-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(191, 160, 148, 0.3)',
                    '0 0 40px rgba(191, 160, 148, 0.6)',
                    '0 0 20px rgba(191, 160, 148, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Quote size={20} />
                {/* Pulsing Ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-caramel-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeOut'
                  }}
                />
              </motion.div>

              <div className="pt-4 relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-coffee-900 text-sm mb-4 italic font-medium">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <motion.div className="relative">
                    <motion.img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-coffee-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Glowing Ring */}
                    <motion.div
                      className="absolute inset-0 w-12 h-12 rounded-full border-2 border-caramel-400 mr-4"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-bold text-coffee-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-coffee-700 text-xs font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}