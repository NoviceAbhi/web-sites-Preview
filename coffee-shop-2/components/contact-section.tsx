'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, Send, MessageCircle, Navigation, Wifi } from 'lucide-react'

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Coffee Street', 'Downtown District', 'City, State 12345'],
      color: 'from-red-500/20 to-pink-500/20'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Fri: 6:00 AM - 11:00 PM', 'Sat - Sun: 7:00 AM - 12:00 AM'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-BREW', '(555) 123-2739'],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@roasteddreams.com', 'orders@roasteddreams.com'],
      color: 'from-purple-500/20 to-violet-500/20'
    }
  ]

  const amenities = [
    { icon: Wifi, label: 'Free WiFi' },
    { icon: Navigation, label: 'Easy Parking' },
    { icon: MessageCircle, label: '24/7 Support' },
    { icon: Send, label: 'Delivery Available' }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-coffee-equipment bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/25 to-coffee-950/25"></div>
        <div className="absolute inset-0 bg-coffee-texture opacity-5"></div>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border border-gold/10 rounded-full"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 border border-gold/10 rounded-full"
        />
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-coffee-950" />
            </div>
          </motion.div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4 relative">
            Visit Us Today
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-8 w-4 h-4 bg-gold rounded-full"
            />
          </h2>
          
          <p className="text-lg text-coffee-200 max-w-2xl mx-auto">
            Come experience the warmth of our community and the richness of our coffee in our dark sanctuary
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
              
              <div className="relative bg-coffee-800/50 backdrop-blur-sm border border-gold/20 p-6 rounded-2xl text-center group-hover:border-gold/40 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-gold to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-gold/25"
                >
                  <info.icon className="w-8 h-8 text-coffee-950" />
                </motion.div>
                
                <h3 className="font-serif text-lg font-semibold text-cream mb-3 group-hover:text-gold transition-colors">
                  {info.title}
                </h3>
                
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <motion.p 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * idx }}
                      viewport={{ once: true }}
                      className="text-coffee-200 group-hover:text-coffee-100 transition-colors"
                    >
                      {detail}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-coffee-800/30 backdrop-blur-sm border border-gold/20 p-4 rounded-xl text-center group hover:border-gold/40 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-gold/20 to-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-2"
              >
                <amenity.icon className="w-5 h-5 text-gold" />
              </motion.div>
              <p className="text-sm text-coffee-200 group-hover:text-gold transition-colors">
                {amenity.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-amber-500/10 rounded-3xl blur-3xl" />
          
          <div className="relative bg-coffee-800/50 backdrop-blur-sm border border-gold/20 rounded-3xl p-8">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-serif text-xl font-semibold text-center text-cream mb-4"
            >
              Stay Connected
            </motion.h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-coffee-700/50 backdrop-blur-sm text-cream placeholder-coffee-300 border border-gold/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl bg-coffee-700/50 backdrop-blur-sm text-cream placeholder-coffee-300 border border-gold/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-coffee-700/50 backdrop-blur-sm text-cream placeholder-coffee-300 border border-gold/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none transition-all duration-300"
                ></textarea>
              </motion.div>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-gold to-amber-500 text-coffee-950 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}