'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, CreditCard, Check } from 'lucide-react'
import Button from '@/components/ui/Button'
import { getCurrentUser } from '@/lib/auth'

const BillingPage = () => {
  const [user, setUser] = useState(null)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [activePlan, setActivePlan] = useState('Basic Plan - $29/month')
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(0)
  const [activePlanPrice, setActivePlanPrice] = useState(29)

  useEffect(() => {
    const currentUser = getCurrentUser()
    setUser(currentUser)
    
    const urlParams = new URLSearchParams(window.location.search)
    const plan = urlParams.get('plan')
    const price = urlParams.get('price')
    
    if (plan) {
      const decodedPlan = decodeURIComponent(plan)
      setSelectedPlan(decodedPlan)
    }
    
    if (price) {
      const decodedPrice = decodeURIComponent(price)
      const priceMatch = decodedPrice.match(/\$([0-9]+)/)
      if (priceMatch) {
        setSelectedPlanPrice(parseInt(priceMatch[1]))
      }
    }
  }, [])

  const handlePayment = (e) => {
    e.preventDefault()
    alert('Payment processed successfully!')
  }

  return (
    <div className="min-h-screen bg-dark-300">
      <div className="bg-dark-200 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-white">Billing & Plans</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {selectedPlan && (
              <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Plan Summary</h3>
                <div className="p-4 bg-primary-500/10 rounded-lg border border-primary-500/20 mb-4">
                  <p className="text-white font-medium text-lg">{selectedPlan}</p>
                  <p className="text-gray-400 text-sm">Monthly subscription</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Plan Price</span>
                    <span className="text-white font-medium">${selectedPlanPrice}.00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Setup Fee</span>
                    <span className="text-white font-medium">$0.00</span>
                  </div>
                  <div className="border-t border-gray-700 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-lg">Total Amount</span>
                      <span className="text-primary-500 font-bold text-2xl">${selectedPlanPrice}.00</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Billed monthly</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Payment Information
            </h3>

            <form onSubmit={handlePayment} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full bg-dark-200 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary-500 focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full bg-dark-200 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full bg-dark-200 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  defaultValue={user?.name || ''}
                  className="w-full bg-dark-200 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary-500 focus:outline-none"
                  required
                />
              </div>

              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span className="text-white">Total</span>
                  <span className="text-primary-500">${selectedPlanPrice}.00</span>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Complete Payment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingPage