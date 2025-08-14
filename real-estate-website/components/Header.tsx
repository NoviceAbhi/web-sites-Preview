'use client'

import { useState } from 'react'
import { Menu, X, Home, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-primary-100 header-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <Home className="h-6 w-6 sm:h-7 sm:w-7 text-blue-500" />
            <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-serif font-semibold text-blue-700">HomeList</span>
          </div>
          
          <nav className="hidden md:flex space-x-12">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-sans font-medium transition-colors duration-300">Home</a>
            <a href="/properties" className="text-gray-700 hover:text-blue-600 font-sans font-medium transition-colors duration-300">Properties</a>
            <a href="/#about" className="text-gray-700 hover:text-blue-600 font-sans font-medium transition-colors duration-300">About</a>
            <a href="/#contact" className="text-gray-700 hover:text-blue-600 font-sans font-medium transition-colors duration-300">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Phone className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-gray-600 font-sans">+1 (555) 123-4567</span>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-blue-100">
              <a href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-sans font-medium transition-colors duration-300">Home</a>
              <a href="/properties" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-sans font-medium transition-colors duration-300">Properties</a>
              <a href="/#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-sans font-medium transition-colors duration-300">About</a>
              <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-sans font-medium transition-colors duration-300">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}