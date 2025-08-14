'use client'

import { motion } from 'framer-motion'
import { Clock, Calendar } from 'lucide-react'

export default function HoursSection() {
  const hours = [
    { day: "Monday - Friday", time: "6:00 AM - 9:00 PM" },
    { day: "Saturday", time: "7:00 AM - 10:00 PM" },
    { day: "Sunday", time: "8:00 AM - 8:00 PM" }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-coffee-900 to-coffee-800">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-gold mr-3" />
              <h2 className="font-serif text-3xl font-bold text-cream">Opening Hours</h2>
            </div>
            
            <div className="space-y-4">
              {hours.map((schedule, index) => (
                <motion.div
                  key={schedule.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center py-3 px-4 bg-coffee-800/50 rounded-lg border border-gold/10"
                >
                  <span className="text-coffee-200 font-medium">{schedule.day}</span>
                  <span className="text-gold font-semibold">{schedule.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-coffee-800/30 backdrop-blur-sm border border-gold/20 rounded-3xl p-8">
              <Calendar className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold text-cream mb-4">Special Events</h3>
              <p className="text-coffee-200 mb-6">
                Join us for live music every Friday evening and coffee cupping sessions on weekends.
              </p>
              <button className="btn-primary">View Events</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}