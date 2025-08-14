'use client'

import { motion } from 'framer-motion'
import { Coffee, Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  const quickLinks = [
    { name: 'Menu', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Reservations', href: '#' },
    { name: 'Events', href: '#' }
  ]

  const services = [
    { name: 'Coffee Catering', href: '#' },
    { name: 'Private Events', href: '#' },
    { name: 'Coffee Subscriptions', href: '#' },
    { name: 'Barista Training', href: '#' },
    { name: 'Corporate Orders', href: '#' },
    { name: 'Gift Cards', href: '#' }
  ]

  return (
    <footer className="relative text-cream overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-coffee-shop bg-cover bg-center">
        <div className="absolute inset-0 bg-coffee-950/25"></div>
        <div className="absolute inset-0 bg-coffee-beans opacity-3"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <motion.div 
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mr-4">
                  <Coffee className="w-8 h-8 text-gold" />
                </div>
                <span className="font-serif text-2xl font-bold bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
                  Roasted Dreams
                </span>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-coffee-200 mb-8 max-w-md leading-relaxed"
              >
                Creating exceptional coffee experiences and building community connections 
                in the heart of darkness, one cup at a time since 2018. Where every bean tells a story.
              </motion.p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: MapPin, text: '123 Coffee Street, Downtown District' },
                  { icon: Phone, text: '(555) 123-BREW' },
                  { icon: Mail, text: 'hello@roasteddreams.com' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center text-coffee-200 hover:text-gold transition-colors group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mr-3"
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-br from-coffee-800 to-coffee-700 rounded-full flex items-center justify-center hover:from-gold hover:to-amber-500 hover:text-coffee-950 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-serif text-lg font-semibold mb-4 text-gold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: '#d4af37' }}
                      className="text-coffee-300 hover:text-gold transition-all duration-300 flex items-center group"
                    >
                      <motion.span
                        initial={{ width: 0 }}
                        whileHover={{ width: 8 }}
                        className="h-0.5 bg-gold mr-2 transition-all duration-300"
                      />
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-serif text-lg font-semibold mb-4 text-gold">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={service.href}
                      whileHover={{ x: 5, color: '#d4af37' }}
                      className="text-coffee-300 hover:text-gold transition-all duration-300 flex items-center group"
                    >
                      <motion.span
                        initial={{ width: 0 }}
                        whileHover={{ width: 8 }}
                        className="h-0.5 bg-gold mr-2 transition-all duration-300"
                      />
                      {service.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-coffee-800 py-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-serif text-xl font-semibold text-cream mb-4">
              Stay Caffeinated with Our Newsletter
            </h4>
            <p className="text-coffee-200 mb-8">
              Get the latest updates on new blends, events, and exclusive offers delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-coffee-800/50 backdrop-blur-sm text-cream placeholder-coffee-300 border border-gold/20 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gold to-amber-500 text-coffee-950 px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-coffee-800 pt-8 text-center"
        >
          <motion.p 
            className="text-coffee-400 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
          >
            <span>&copy; 2024 Roasted Dreams. All rights reserved.</span>
            <span>|</span>
            <span className="flex items-center">
              Crafted with 
              <span className="mx-1">
                <Heart className="w-4 h-4 text-red-500" />
              </span>
              and ☕
            </span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}