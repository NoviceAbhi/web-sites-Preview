'use client'

import { motion } from 'framer-motion'
import { Wifi, Car, Music, BookOpen, Zap, Shield } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    { icon: Wifi, title: "Free WiFi", desc: "High-speed internet" },
    { icon: Car, title: "Easy Parking", desc: "Convenient location" },
    { icon: Music, title: "Live Music", desc: "Weekend performances" },
    { icon: BookOpen, title: "Reading Corner", desc: "Quiet study space" },
    { icon: Zap, title: "Quick Service", desc: "Fast & efficient" },
    { icon: Shield, title: "Safe Environment", desc: "Clean & secure" }
  ]

  return (
    <section className="py-16 bg-coffee-950">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-coffee-200">
            More than just great coffee
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:from-gold/30 group-hover:to-yellow-500/30 transition-colors">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold text-cream text-sm mb-1">{feature.title}</h3>
              <p className="text-coffee-300 text-xs">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}