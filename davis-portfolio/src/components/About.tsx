'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Zap, Users } from 'lucide-react'

export default function About() {
  const skills = [
    { name: 'Frontend Development', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'UI/UX Design', level: 88, color: 'from-purple-500 to-pink-500' },
    { name: 'Backend Development', level: 82, color: 'from-green-500 to-emerald-500' },
    { name: 'Mobile Development', level: 75, color: 'from-orange-500 to-red-500' },
  ]

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user interfaces'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimizing for speed and excellent user experience'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold mb-6">My Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary-500">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-1">
              <div className="w-full h-full bg-white dark:bg-dark-900 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-base font-medium">Always Learning</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center p-6 bg-white dark:bg-dark-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}