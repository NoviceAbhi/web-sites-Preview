'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Zap } from 'lucide-react'

export default function About() {
  const skills = [
    { icon: Code, title: 'Development', desc: 'Modern web technologies' },
    { icon: Palette, title: 'Design', desc: 'Creative visual solutions' },
    { icon: Zap, title: 'Performance', desc: 'Optimized experiences' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Novice</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We create stunning digital experiences that combine beautiful design with powerful functionality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Crafting Digital Excellence</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With years of experience in web design and development, we specialize in creating 
              modern, responsive, and user-friendly websites that drive results.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our approach combines creativity with technical expertise to deliver solutions 
              that not only look great but perform exceptionally well.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-6 bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary text-white p-3 rounded-lg mr-4">
                  <skill.icon size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-white">{skill.title}</h4>
                  <p className="text-gray-300">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}