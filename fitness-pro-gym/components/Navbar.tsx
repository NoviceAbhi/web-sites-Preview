'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Dumbbell, Users, CreditCard, Calendar, User, LogOut, Mail, Lock } from 'lucide-react'
import Button from './ui/Button'
import AdminNavLink from './AdminNavLink'
import { getCurrentUser, login, logout, setCurrentUser, type User as UserType } from '@/lib/auth'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [user, setUser] = useState<UserType | null>(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupTab, setShowSignupTab] = useState(false)
  const [notification, setNotification] = useState('')
  const [showUserProfile, setShowUserProfile] = useState(false)
  const [loginError, setLoginError] = useState('')

  useEffect(() => {
    setUser(getCurrentUser())
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (showUserProfile && !showLoginModal && !(event.target as Element).closest('.user-profile')) {
        setShowUserProfile(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClickOutside)
    
    // Check for user updates periodically
    const interval = setInterval(() => {
      const currentUser = getCurrentUser()
      if (currentUser !== user) {
        setUser(currentUser)
      }
    }, 1000)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
      clearInterval(interval)
    }
  }, [showUserProfile, showLoginModal, user])

  const handleLogin = (email: string, password: string) => {
    setLoginError('')
    const loggedInUser = login(email, password)
    if (loggedInUser) {
      setCurrentUser(loggedInUser)
      setUser(loggedInUser)
      setNotification(`Welcome back, ${loggedInUser.name}!`)
      setTimeout(() => setNotification(''), 3000)
      setShowLoginModal(false)
      // Redirect to main page to show payment reminder
      window.location.href = '/'
    } else {
      setLoginError('Invalid email or password')
    }
  }

  const handleLogout = () => {
    logout()
    setUser(null)
    setNotification('Logged out successfully')
    setTimeout(() => {
      setNotification('')
      window.location.href = '/'
    }, 2000)
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Plans', href: '#plans' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-dark-300/95 backdrop-blur-md shadow-lg shadow-primary-500/10 border-b border-primary-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
            <Dumbbell className="h-6 w-6 sm:h-8 sm:w-8 text-primary-500" />
            <span className="text-lg sm:text-xl font-bold gradient-text">FitnessPro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary-500 transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                const currentUser = getCurrentUser()
                if (currentUser) {
                  if (currentUser.hasActivePlan) {
                    window.location.href = '/dashboard'
                  } else {
                    setNotification('Premium plan required for Live Tracking!')
                    setTimeout(() => {
                      setNotification('')
                      window.location.href = '/billing'
                    }, 2000)
                  }
                } else {
                  setNotification('You need to login first')
                  setTimeout(() => {
                    setNotification('')
                    window.location.href = '/auth/login'
                  }, 2000)
                }
              }}
            >
              <Users className="h-4 w-4 mr-2" />
              Live Tracking
            </Button>
            {user ? (
              <div className="relative user-profile">
                <button
                  onClick={() => setShowUserProfile(!showUserProfile)}
                  className="flex items-center text-black hover:text-gray-800 transition-colors p-2 rounded-lg hover:bg-gray-100/20 font-bold"
                >
                  <User className="h-6 w-6 stroke-2" />
                </button>
                
                {showUserProfile && (
                  <div className="absolute right-0 top-12 bg-dark-100 rounded-xl p-4 border border-gray-800 shadow-lg min-w-[250px] z-50">
                    <div className="space-y-3">
                      <div className="text-center pb-3 border-b border-gray-700">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <User className="h-6 w-6 text-green-500" />
                        </div>
                        <h3 className="text-white font-semibold">{user.name}</h3>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-300">{user.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="h-4 w-4 text-gray-400">📱</span>
                          <span className="text-gray-300">{user.phone}</span>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => {
                          handleLogout()
                          setShowUserProfile(false)
                        }}
                        className="w-full bg-red-500 hover:bg-red-600 mt-3"
                        size="sm"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button 
                onClick={() => setShowLoginModal(true)}
                size="sm"
              >
                Join Now
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-1"
          >
            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-dark-200/95 backdrop-blur-md rounded-lg mt-2 mx-2 p-3 sm:p-4">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-700">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    const currentUser = getCurrentUser()
                    if (currentUser) {
                      if (currentUser.hasActivePlan) {
                        window.location.href = '/dashboard'
                      } else {
                        setNotification('Premium plan required for Live Tracking!')
                        setTimeout(() => {
                          setNotification('')
                          window.location.href = '/billing'
                        }, 2000)
                      }
                    } else {
                      setNotification('You need to login first')
                      setTimeout(() => {
                        setNotification('')
                        window.location.href = '/auth/login'
                      }, 2000)
                    }
                  }}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Live Tracking
                </Button>
                {user ? (
                  <div className="space-y-3">
                    <div className="bg-dark-300 rounded-lg p-3">
                      <div className="text-center mb-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <User className="h-5 w-5 text-green-500" />
                        </div>
                        <h3 className="text-white font-semibold text-sm">{user.name}</h3>
                      </div>
                      
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center space-x-2 justify-center">
                          <Mail className="h-3 w-3 text-gray-400" />
                          <span className="text-gray-300">{user.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 justify-center">
                          <span className="h-3 w-3 text-gray-400">📱</span>
                          <span className="text-gray-300">{user.phone}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleLogout}
                      size="sm" 
                      className="w-full bg-red-500 hover:bg-red-600"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button 
                    onClick={() => setShowLoginModal(true)}
                    size="sm" 
                    className="w-full"
                  >
                    Join Now
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed top-20 right-4 bg-green-500/20 text-green-500 px-4 py-2 rounded-lg text-sm font-medium animate-pulse z-50">
          {notification}
        </div>
      )}

      {/* Login/Signup Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-100 rounded-xl p-6 w-full max-w-md border border-gray-800">
            <div className="flex space-x-1 mb-6 bg-dark-200 p-1 rounded-lg">
              <button
                onClick={() => setShowSignupTab(false)}
                className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                  !showSignupTab ? 'bg-primary-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setShowSignupTab(true)}
                className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                  showSignupTab ? 'bg-primary-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            {!showSignupTab ? (
              <form onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.target as HTMLFormElement)
                const email = formData.get('email') as string
                const password = formData.get('password') as string
                handleLogin(email, password)
              }}>
                <h3 className="text-xl font-semibold text-white mb-4">Welcome Back</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input 
                        name="email"
                        type="email" 
                        required
                        className="w-full bg-dark-200 text-white pl-10 pr-4 py-3 rounded border border-gray-700 focus:border-primary-500 focus:outline-none"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input 
                        name="password"
                        type="password" 
                        required
                        className="w-full bg-dark-200 text-white pl-10 pr-4 py-3 rounded border border-gray-700 focus:border-primary-500 focus:outline-none"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                  {loginError && (
                    <p className="text-red-500 text-sm mt-2">{loginError}</p>
                  )}
                </div>
                <div className="flex gap-3 mt-6">
                  <button 
                    type="button"
                    onClick={() => setShowLoginModal(false)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Login
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Create Account</h3>
                <p className="text-gray-400 mb-6">Start your fitness journey with our registration form</p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowLoginModal(false)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <Link href="/auth/register" className="flex-1">
                    <Button className="w-full">
                      Start Your Journey
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar