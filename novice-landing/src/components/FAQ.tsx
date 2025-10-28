'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'The timeline depends on the complexity of your project. A simple website typically takes 2-4 weeks, while more complex applications can take 6-12 weeks. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you provide ongoing maintenance and support?',
      answer: 'Yes, we offer comprehensive maintenance packages that include regular updates, security monitoring, performance optimization, and technical support to keep your website running smoothly.'
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Absolutely! We build SEO-friendly websites from the ground up and can provide ongoing SEO services, content strategy, and digital marketing consultation to help grow your online presence.'
    },
    {
      question: 'What is your design process like?',
      answer: 'Our design process starts with understanding your brand and goals, followed by wireframing, creating mockups, gathering feedback, and iterating until we achieve the perfect design that represents your vision.'
    },
    {
      question: 'Do you work with clients remotely?',
      answer: 'Yes, we work with clients worldwide. We use modern collaboration tools and maintain regular communication throughout the project to ensure smooth remote collaboration.'
    },
    {
      question: 'What happens if I need changes after the website is live?',
      answer: 'We provide training on how to make basic content updates yourself. For more complex changes, we offer flexible support packages and can implement updates quickly and efficiently.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-accent" size={24} />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}