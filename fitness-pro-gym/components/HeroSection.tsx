'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Play, Users, TrendingUp, Calendar, ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import ScrollReveal from './ui/ScrollReveal'
import { getCurrentUser } from '@/lib/auth'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [liveCount, setLiveCount] = useState(47)
  const [notification, setNotification] = useState('')

  const heroSlides = [
    {
      title: "Transform Your Body",
      subtitle: "Achieve Your Fitness Goals",
      description: "Join thousands of members who have transformed their lives with our premium facilities and expert guidance.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Live Crowd Tracking",
      subtitle: "Never Wait in Line Again",
      description: "Check real-time gym capacity and plan your workout with our advanced crowd tracking system.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Premium Equipment",
      subtitle: "State-of-the-Art Facilities",
      description: "Train with the latest equipment and technology in our modern, spacious facility.",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2
        const newCount = prev + change
        return Math.max(20, Math.min(80, newCount))
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-300/90 via-dark-300/70 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <ScrollReveal direction="up" delay={200}>
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                  <span className="gradient-text">{heroSlides[currentSlide].title}</span>
                  <br />
                  <span className="text-white">{heroSlides[currentSlide].subtitle}</span>
                </h1>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300 max-w-2xl mx-auto lg:mx-0">
                  {heroSlides[currentSlide].description}
                </p>
              </div>
            </ScrollReveal>

            {/* Live Stats */}
            <ScrollReveal direction="up" delay={400}>
              <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start">
                <div className="glass-effect rounded-lg p-3 sm:p-4 min-w-[120px] sm:min-w-[140px] hover:scale-105 transition-all duration-300 floating">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500" />
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-white">{liveCount}</div>
                      <div className="text-xs sm:text-sm text-gray-400">Live Members</div>
                    </div>
                  </div>
                </div>
                <div className="glass-effect rounded-lg p-3 sm:p-4 min-w-[120px] sm:min-w-[140px] hover:scale-105 transition-all duration-300 floating" style={{animationDelay: '1s'}}>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-white">1,200+</div>
                      <div className="text-xs sm:text-sm text-gray-400">Active Members</div>
                    </div>
                  </div>
                </div>
                <div className="glass-effect rounded-lg p-3 sm:p-4 min-w-[120px] sm:min-w-[140px] hover:scale-105 transition-all duration-300 floating" style={{animationDelay: '2s'}}>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-white">24/7</div>
                      <div className="text-xs sm:text-sm text-gray-400">Open Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal direction="up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link href="/auth/register">
                  <Button className="group">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  variant="secondary" 
                  className="group hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                  onClick={() => {
                    const currentUser = getCurrentUser()
                    if (currentUser) {
                      window.location.href = '/dashboard'
                    } else {
                      setNotification('You need to login first')
                      setTimeout(() => {
                        setNotification('')
                        window.location.href = '/auth/login'
                      }, 2000)
                    }
                  }}
                >
                  <Play className="mr-2 h-4 w-4" />
                  View Live Tracking
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Feature highlights */}
          <div className="hidden lg:block space-y-3">
            <div className="glass-effect rounded-xl p-5 transform hover:scale-105 transition-all duration-300 border border-primary-500/20 hover:border-primary-500/40 group">
              <div className="flex items-start space-x-3">
                <div className="bg-primary-500/20 p-2 rounded-lg group-hover:bg-primary-500/30 transition-colors">
                  <Users className="h-6 w-6 text-primary-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-primary-500 transition-colors">Smart Dashboard & Live Tracking</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Optimize space & improve member experience</p>
                </div>
              </div>
            </div>
            <div className="glass-effect rounded-xl p-5 transform hover:scale-105 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 group">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Calendar className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-blue-500 transition-colors">Program & Progress Tracking</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Ultimate tool for member retention</p>
                </div>
              </div>
            </div>
            <div className="glass-effect rounded-xl p-5 transform hover:scale-105 transition-all duration-300 border border-green-500/20 hover:border-green-500/40 group">
              <div className="flex items-start space-x-3">
                <div className="bg-green-500/20 p-2 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-green-500 transition-colors">Automated Fees & Membership</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Reduce admin overhead by 80%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary-500 w-8' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed top-20 right-4 bg-yellow-500/20 text-yellow-500 px-4 py-2 rounded-lg text-sm font-medium animate-pulse z-50">
          {notification}
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection