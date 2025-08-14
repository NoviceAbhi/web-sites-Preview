'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, CreditCard, Check, AlertCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { getCurrentUser, type User } from '@/lib/auth'

const AddOnsBillingPage = () => {
  const [user, setUser] = useState<User | null>(null)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [activePlan, setActivePlan] = useState('Basic Plan - $29/month')
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(0)
  const [activePlanPrice, setActivePlanPrice] = useState(29)
  const [hasActivePlan, setHasActivePlan] = useState(false)

  useEffect(() => {
    const currentUser = getCurrentUser()
    setUser(currentUser)
    
    if (currentUser) {
      // Special case for vohrraoverseas@gmail.com - assign Premium plan
      if (currentUser.email === 'vohrraoverseas@gmail.com') {
        const premiumPlan = {
          name: 'Premium',
          price: 59,
          period: 'month',
          purchaseDate: new Date().toISOString()
        }
        localStorage.setItem(`userPlan_${currentUser.id}`, JSON.stringify(premiumPlan))
        setHasActivePlan(true)
        setActivePlan('Premium Plan - $59/month')
        setActivePlanPrice(59)
      } else {
        const userPlan = localStorage.getItem(`userPlan_${currentUser.id}`)
        if (userPlan) {
          const planData = JSON.parse(userPlan)
          setHasActivePlan(true)
          setActivePlan(`${planData.name} Plan - $${planData.price}/${planData.period}`)
          setActivePlanPrice(planData.price)
        } else {
          setHasActivePlan(false)
        }
      }
    } else {
      setHasActivePlan(false)
    }
    
    const urlParams = new URLSearchParams(window.location.search)
    const plan = urlParams.get('plan')
    if (plan) {
      const decodedPlan = decodeURIComponent(plan)
      setSelectedPlan(decodedPlan)
      
      const priceMatch = decodedPlan.match(/\$([0-9]+)/)
      if (priceMatch) {
        setSelectedPlanPrice(parseInt(priceMatch[1]))
      }
    }
  }, [])

  const handlePayment = (e) => {
    e.preventDefault()
    alert('Add-on purchased successfully!')
  }

  if (!hasActivePlan) {
    return (
      <div className="min-h-screen bg-dark-300">
        <div className="bg-dark-200 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-white">Add Premium Services</h1>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-dark-100 rounded-xl p-8 border border-gray-800">
            <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Active Plan Required</h2>
            <p className="text-gray-400 mb-6">
              First purchase a gym plan, then come back here to add premium services.
            </p>
            <Link href="/#plans">
              <Button className="mr-4">
                Choose a Plan
              </Button>
            </Link>
            <Link href="/">
              <Button variant="secondary">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-300">
      <div className="bg-dark-200 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-white">Add Premium Services</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Current Plan</h3>
              <div className="flex items-center space-x-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <Check className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-white font-medium">{activePlan}</p>
                  <p className="text-gray-400 text-sm">Active since Jan 1, 2024</p>
                </div>
              </div>
            </div>

            {selectedPlan && (
              <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Adding Service</h3>
                <div className="p-4 bg-primary-500/10 rounded-lg border border-primary-500/20">
                  <p className="text-white font-medium">{selectedPlan}</p>
                  <p className="text-gray-400 text-sm">Will be added to your current plan</p>
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
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Current Plan</span>
                  <span className="text-white">${activePlanPrice}.00</span>
                </div>
                {selectedPlan && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Additional Service</span>
                    <span className="text-white">${selectedPlanPrice}.00</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-lg font-semibold border-t border-gray-700 pt-2">
                  <span className="text-white">New Total</span>
                  <span className="text-primary-500">${activePlanPrice + selectedPlanPrice}.00</span>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Add Service to Plan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddOnsBillingPage