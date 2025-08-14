'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      text: "The best coffee experience in the city. Every cup is perfection.",
      rating: 5,
      image: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Local Business Owner",
      text: "Amazing atmosphere and incredible coffee. My daily go-to spot.",
      rating: 5,
      image: "MC"
    },
    {
      name: "Emma Davis",
      role: "Food Blogger",
      text: "Roasted Dreams sets the standard for artisanal coffee shops.",
      rating: 5,
      image: "ED"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-coffee-900 to-coffee-950">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-coffee-200">
            Real stories from our coffee community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-coffee-800/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-gold/50 mb-4" />
              <p className="text-coffee-200 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center text-coffee-950 font-bold text-sm">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream text-sm">{testimonial.name}</h4>
                    <p className="text-coffee-300 text-xs">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}