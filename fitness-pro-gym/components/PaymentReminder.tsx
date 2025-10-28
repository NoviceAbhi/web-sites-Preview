'use client'

import { useState, useEffect } from 'react'
import { X, CreditCard } from 'lucide-react'
import { getCurrentUser } from '@/lib/auth'

const PaymentReminder = () => {
  const [reminder, setReminder] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkForReminder = () => {
      const user = getCurrentUser()
      if (user) {
        const reminders = JSON.parse(localStorage.getItem('paymentReminders') || '{}')
        if (reminders[user.id]) {
          setReminder(reminders[user.id])
          setIsVisible(true)
        }
      }
    }
    
    checkForReminder()
    
    // Check for reminders periodically in case user logs in
    const interval = setInterval(checkForReminder, 1000)
    
    return () => clearInterval(interval)
  }, [])

  const dismissReminder = () => {
    const user = getCurrentUser()
    if (user) {
      const reminders = JSON.parse(localStorage.getItem('paymentReminders') || '{}')
      delete reminders[user.id]
      localStorage.setItem('paymentReminders', JSON.stringify(reminders))
      setIsVisible(false)
    }
  }

  if (!isVisible || !reminder) return null

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm mx-4">
      <div className="bg-yellow-500/90 border-2 border-yellow-600 rounded-lg p-4 shadow-xl">
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <CreditCard className="h-8 w-8 text-black" />
          </div>
          <h4 className="text-black font-bold text-lg mb-2">Payment Reminder</h4>
          <p className="text-black font-semibold text-sm mb-4">{reminder.message}</p>
          <div className="flex space-x-2 justify-center">
            <button
              onClick={() => window.location.href = '/billing'}
              className="bg-white hover:bg-gray-100 text-black px-4 py-2 rounded text-sm font-bold transition-colors border border-gray-300"
            >
              Pay Now
            </button>
            <button
              onClick={dismissReminder}
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentReminder