'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Lightbulb, Code, Rocket } from 'lucide-react'
import Image from 'next/image'

export default function Process() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Discovery',
      description: 'We start by understanding your goals, target audience, and project requirements through detailed consultation.',
      number: '01'
    },
    {
      icon: Lightbulb,
      title: 'Strategy',
      description: 'Our team develops a comprehensive strategy and creates wireframes to map out the user experience.',
      number: '02'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'We bring your vision to life using cutting-edge technologies and best practices in web development.',
      number: '03'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'After thorough testing and optimization, we launch your project and provide ongoing support.',
      number: '04'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop" 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Process</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From concept to launch, we follow a proven process to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-bold text-accent opacity-10">
                  {step.number}
                </div>
                
                <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-xl w-fit mx-auto mb-6">
                  <step.icon size={32} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}