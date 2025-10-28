'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      content: 'Novice delivered an exceptional website that exceeded our expectations. Their attention to detail and modern design approach is outstanding.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, DigitalFlow',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'Working with Novice was a game-changer for our business. They created a beautiful, fast, and user-friendly website that our customers love.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthCo',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'The team at Novice is incredibly professional and talented. They transformed our vision into a stunning digital experience.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop" 
          alt="" 
          fill
          className="object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">What Our Clients Say</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don&#39;t just take our word for it - hear from some of our satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 relative"
            >
              <Quote className="absolute top-4 right-4 text-accent opacity-20" size={32} />
              
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}