'use client'

import { motion } from 'framer-motion'
import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-coffee-900 text-white py-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=1920&h=1080&fit=crop&crop=center")',
        }}
      />
      <div className="absolute inset-0 bg-coffee-900/90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Coffee className="w-8 h-8 text-coffee-300 mr-2" />
              <h3 className="font-display text-xl font-bold">Brew Haven</h3>
            </div>
            <p className="text-white/90 text-sm mb-4 font-medium">
              Crafting exceptional coffee experiences since 2020. Every cup tells a story of passion and quality.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-coffee-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-coffee-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-coffee-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg font-semibold mb-3">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-coffee-300 mr-3" />
                <span className="text-white/90 text-sm font-medium">123 Coffee Street, Bean City</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-coffee-300 mr-3" />
                <span className="text-white/90 text-sm font-medium">(555) 123-BREW</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-coffee-300 mr-3" />
                <span className="text-white/90 text-sm font-medium">hello@brewhaven.com</span>
              </div>
            </div>
          </motion.div>

          {/* Working Days */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg font-semibold mb-3">Working Days</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white/90 text-sm font-medium">Monday - Friday</span>
                <span className="text-white text-sm font-semibold">6:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/90 text-sm font-medium">Saturday</span>
                <span className="text-white text-sm font-semibold">7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/90 text-sm font-medium">Sunday</span>
                <span className="text-white text-sm font-semibold">8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section - Full Width */}
        <motion.div
          className="border-t border-coffee-800 pt-8 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-display text-lg font-semibold mb-3">Stay Updated</h4>
            <p className="text-white/90 text-sm mb-3 font-medium">
              Subscribe to get updates on new blends and special offers.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-full bg-coffee-800 text-white placeholder-coffee-400 border border-coffee-700 focus:outline-none focus:border-coffee-500"
              />
              <motion.button
                className="w-full bg-coffee-600 hover:bg-coffee-500 px-4 py-2 rounded-full transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-coffee-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/80 text-sm font-medium">
            © 2024 Brew Haven. All rights reserved. Made with ❤️ and lots of coffee.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}