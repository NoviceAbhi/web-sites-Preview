'use client'

import { useState, useEffect } from 'react'
import { Search, MapPin, Home, DollarSign, Play, Star, Award, Users } from 'lucide-react'

export default function Hero() {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    priceRange: ''
  })
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const backgroundImages = [
    'url(/hero-bg.jpg)',
    'url(/hero-house-new.jpg)',
    'url(/hero-houses.jpg)'
  ]

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-change background images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const handleSearch = () => {
    console.log('Searching with:', searchData)
    // Add search functionality here
  }

  return (
    <section id="home" className="relative bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: image }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative min-h-screen flex items-center pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Main Content */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>

              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight max-w-4xl">
                <span className="text-blue-500">
                  Find Your
                </span>
                <span className="text-blue-500 block">
                  Dream Home
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">
                Discover luxury properties in prime locations with our expert guidance and personalized service. Your perfect home awaits.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center w-3/5 mx-auto">
                <a href="/properties" className="group bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 sm:px-4 sm:py-2 rounded font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-xs inline-block text-center">
                  <span className="flex items-center justify-center gap-1 sm:gap-2">
                    <Search className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                    Browse Properties
                  </span>
                </a>
                <a href="/videos" className="group flex items-center justify-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-2 py-1 sm:px-4 sm:py-2 rounded font-medium transition-all duration-300 border border-white/20 hover:border-white/40 text-xs">
                  <Play className="w-3 h-3 group-hover:scale-110 transition-transform" />
                  Watch Video
                </a>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-5 h-5 text-yellow-400 mr-2" />
                    <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">500+</div>
                  </div>
                  <div className="text-gray-300 text-sm font-medium">Properties Sold</div>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">98%</div>
                  </div>
                  <div className="text-gray-300 text-sm font-medium">Client Satisfaction</div>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-yellow-400 mr-2" />
                    <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">15+</div>
                  </div>
                  <div className="text-gray-300 text-sm font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}