'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { registerUser, setCurrentUser } from '@/lib/auth'
import Button from '@/components/ui/Button'
import { User, Mail, Phone, Lock, ArrowRight } from 'lucide-react'

const RegisterPage = () => {
  const [notification, setNotification] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (password !== confirmPassword) {
      setNotification('Passwords do not match')
      setTimeout(() => setNotification(''), 3000)
      return
    }

    const newUser = registerUser({ name, email, phone, password })
    
    if (newUser) {
      setNotification(`Registration successful! Please login to continue.`)
      setTimeout(() => {
        setNotification('')
        router.push('/')
      }, 2000)
    } else {
      setNotification('This email is already registered. Please use a different email or login instead.')
      setTimeout(() => setNotification(''), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-dark-300 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-dark-100 rounded-xl p-8 border border-gray-800">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Start Your Journey</h1>
          <p className="text-gray-400">Join FitnessPro and transform your life</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                name="name"
                type="text"
                required
                className="w-full bg-dark-200 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-primary-500 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                name="email"
                type="email"
                required
                className="w-full bg-dark-200 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-primary-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                name="phone"
                type="tel"
                required
                className="w-full bg-dark-200 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-primary-500 focus:outline-none"
                placeholder="Enter your phone number"
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
                className="w-full bg-dark-200 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-primary-500 focus:outline-none"
                placeholder="Create a password"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                name="confirmPassword"
                type="password"
                required
                className="w-full bg-dark-200 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-primary-500 focus:outline-none"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <Button type="submit" className="w-full group">
            Create Account
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        {notification && (
          <div className={`mt-4 p-3 rounded-lg text-sm text-center ${
            notification.includes('successful') || notification.includes('Welcome')
              ? 'bg-green-500/20 text-green-500'
              : 'bg-red-500/20 text-red-500'
          }`}>
            {notification}
          </div>
        )}
      </div>
    </div>
  )
}

export default RegisterPage