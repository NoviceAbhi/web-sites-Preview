'use client'

'use client'

import { Award, Users, Clock, Target, Shield, Zap, LogOut, User } from 'lucide-react'
import Button from './ui/Button'
import ScrollReveal from './ui/ScrollReveal'
import { useState, useEffect } from 'react'
import { getCurrentUser, logout, type User as UserType } from '@/lib/auth'

const AboutSection = () => {
  const [user, setUser] = useState<UserType | null>(null)

  const [notification, setNotification] = useState('')

  useEffect(() => {
    setUser(getCurrentUser())
  }, [])



  const handleLogout = () => {
    logout()
    setUser(null)
    setNotification('Logged out successfully')
    setTimeout(() => setNotification(''), 3000)
  }

  const achievements = [
    {
      icon: Users,
      number: "1,200+",
      label: "Happy Members",
      color: "text-blue-500"
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      color: "text-green-500"
    },
    {
      icon: Target,
      number: "98%",
      label: "Success Rate",
      color: "text-purple-500"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Access Available",
      color: "text-orange-500"
    }
  ]

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "State-of-the-art equipment with regular maintenance and safety protocols"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Building a supportive community where everyone feels welcome and motivated"
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Cutting-edge technology including live tracking and smart management systems"
    }
  ]

  return (
    <section id="about" className="section-padding bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-6">
                  <span className="text-white">About</span>
                  <br />
                  <span className="gradient-text">FitnessPro</span>
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  We're more than just a gym – we're your partner in achieving a healthier, stronger you. 
                  With cutting-edge technology and a passionate community, we make fitness accessible, 
                  enjoyable, and results-driven.
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Our innovative approach combines traditional fitness with modern technology, including 
                  live crowd tracking, personalized plan management, and transparent fee tracking to 
                  give you the ultimate fitness experience.
                </p>
              </div>

            {/* Values */}
            <ScrollReveal direction="up" delay={200}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Our Core Values</h3>
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-primary-500/20 p-3 rounded-lg flex-shrink-0 hover:bg-primary-500/30 transition-colors">
                      <value.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                      <p className="text-gray-400">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {user && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-green-500">
                  <User className="h-5 w-5" />
                  <span className="font-medium">Welcome, {user.name}!</span>
                </div>
                <Button 
                  onClick={handleLogout}
                  className="group bg-red-500 hover:bg-red-600"
                >
                  Logout
                  <LogOut className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            )}
            </div>
          </ScrollReveal>

          {/* Right Content - Stats & Image */}
          <ScrollReveal direction="right">
            <div className="space-y-8">
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern gym interior"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-lg p-4">
                    <p className="text-white font-semibold">State-of-the-Art Facility</p>
                    <p className="text-gray-300 text-sm">Premium equipment & modern amenities</p>
                  </div>
                </div>
              </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-dark-100 rounded-xl p-6 text-center border border-gray-800 hover:border-primary-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  <achievement.icon className={`h-8 w-8 ${achievement.color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-white mb-1">{achievement.number}</div>
                  <div className="text-gray-400 text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* Feature Highlight */}
            <div className="bg-gradient-to-r from-primary-500/20 to-primary-700/20 rounded-xl p-6 border border-primary-500/30">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-primary-500 mr-3" />
                <h4 className="text-lg font-semibold text-white">Smart Technology Integration</h4>
              </div>
              <p className="text-gray-300 mb-4">
                Experience the future of fitness with our advanced tracking systems, real-time analytics, 
                and seamless digital management.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Live Tracking', 'Smart Analytics', 'Mobile App', 'Cloud Sync'].map((feature, index) => (
                  <span
                    key={index}
                    className="bg-primary-500/20 text-primary-500 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500/20 text-green-500 px-4 py-2 rounded-lg text-sm font-medium animate-pulse z-50">
          {notification}
        </div>
      )}


    </section>
  )
}

export default AboutSection