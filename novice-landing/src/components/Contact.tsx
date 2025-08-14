'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@novice.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'New York, NY' },
  ]

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop" 
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let&#39;s create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Let&#39;s Talk</h3>
            
            <div className="space-y-4 mb-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">{info.label}</p>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
              <h4 className="text-lg font-bold mb-4">Why Choose Novice?</h4>
              <ul className="space-y-2">
                <li>✓ Modern design approach</li>
                <li>✓ Fast delivery times</li>
                <li>✓ 24/7 support</li>
                <li>✓ Competitive pricing</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}