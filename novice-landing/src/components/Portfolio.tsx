'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with advanced features',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile App',
      description: 'Secure and user-friendly banking application',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      tech: ['React Native', 'Firebase', 'TypeScript']
    },
    {
      title: 'Brand Identity Design',
      category: 'Design',
      description: 'Complete brand identity and visual system',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      tech: ['Figma', 'Illustrator', 'Photoshop']
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Development',
      description: 'Analytics dashboard for business intelligence',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tech: ['Vue.js', 'D3.js', 'Python']
    },
    {
      title: 'Healthcare Portal',
      category: 'Web Development',
      description: 'Patient management system for healthcare providers',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop',
      tech: ['Next.js', 'PostgreSQL', 'AWS']
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile App',
      description: 'On-demand food delivery with real-time tracking',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop',
      tech: ['Flutter', 'Node.js', 'Redis']
    }
  ]

  return (
    <section id="portfolio" className="py-12 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop" 
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Our Portfolio</h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Showcasing our latest projects and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                      <p className="text-accent text-sm font-medium mb-2">{project.category}</p>
                      <p className="text-gray-200 text-sm">{project.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full"
                      >
                        <ExternalLink size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full"
                      >
                        <Github size={16} />
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}