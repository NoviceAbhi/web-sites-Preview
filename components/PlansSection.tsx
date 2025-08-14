'use client'

import { useState, useEffect } from 'react'
import { Check, Star, Users, Calendar, CreditCard, AlertCircle } from 'lucide-react'
import Button from './ui/Button'
import ScrollReveal from './ui/ScrollReveal'
import { getCurrentUser } from '@/lib/auth'

const PlansSection = () => {
  const [hasActivePlan, setHasActivePlan] = useState(false)
  const [user, setUser] = useState(null)

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
      } else {
        const userPlans = localStorage.getItem(`userPlan_${currentUser.id}`)
        setHasActivePlan(!!userPlans)
      }
    }
  }, [])

  const plans = [
    {
      name: "Basic",
      price: 29,
      period: "month",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Access to gym equipment",
        "Basic workout plans",
        "Locker room access",
        "Mobile app access",
        "Live crowd tracking"
      ],
      popular: false,
      color: "border-gray-600"
    },
    {
      name: "Premium",
      price: 59,
      period: "month",
      description: "Most popular choice for serious fitness enthusiasts",
      features: [
        "Everything in Basic",
        "Personal trainer sessions (2/month)",
        "Advanced workout analytics",
        "Nutrition guidance",
        "Priority equipment booking",
        "Group class access",
        "Fee management dashboard"
      ],
      popular: true,
      color: "border-primary-500"
    },
    {
      name: "Elite",
      price: 99,
      period: "month",
      description: "Ultimate fitness experience with premium perks",
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Custom meal plans",
        "Recovery & wellness sessions",
        "24/7 gym access",
        "Guest passes (4/month)",
        "Advanced health monitoring",
        "Priority customer support"
      ],
      popular: false,
      color: "border-yellow-500"
    }
  ]

  const addOns = [
    {
      name: "Personal Training",
      price: 25,
      period: "session",
      icon: Users,
      description: "One-on-one training with certified professionals"
    },
    {
      name: "Nutrition Consultation",
      price: 40,
      period: "session",
      icon: Calendar,
      description: "Personalized meal plans and dietary guidance"
    },
    {
      name: "Premium Analytics",
      price: 15,
      period: "month",
      icon: CreditCard,
      description: "Advanced progress tracking and detailed insights"
    }
  ]

  return (
    <section id="plans" className="section-padding bg-dark-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Choose Your</span>
            <br />
            <span className="gradient-text">Fitness Plan</span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-gray-400 max-w-3xl mx-auto px-4">
            Flexible membership options designed to fit your lifestyle and fitness goals
          </p>
        </div>

        {/* Main Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} direction={index === 1 ? 'scale' : 'up'} delay={index * 100}>
              <div className={`relative bg-dark-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 ${plan.color} ${
                plan.popular ? 'transform sm:scale-105 shadow-xl sm:shadow-2xl' : ''
              } transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-3 sm:mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.popular ? 'primary' : 'secondary'}
                onClick={() => {
                  // Store the selected plan when user clicks Get Started
                  if (user) {
                    const planData = {
                      name: plan.name,
                      price: plan.price,
                      period: plan.period,
                      purchaseDate: new Date().toISOString()
                    }
                    localStorage.setItem(`userPlan_${user.id}`, JSON.stringify(planData))
                    
                    // Log for admin panel
                    try {
                      const { logFeesData, logPlanTracking } = require('@/lib/admin-auth')
                      logFeesData(user.id, user.name, plan.name, plan.price, 'plan')
                      logPlanTracking(user.id, user.name, plan.name, plan.price)
                    } catch (error) {
                      console.log('Admin logging not available')
                    }
                  }
                  window.location.href = `/billing?plan=${encodeURIComponent(plan.name + ' Plan - $' + plan.price + '/' + plan.period)}`
                }}
              >
                Get Started
              </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-dark-200 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Enhance Your Experience</h3>
            <p className="text-gray-400">Add premium services to any membership plan</p>
            {!user && (
              <p className="text-yellow-400 text-sm mt-2">Please login to view add-on services</p>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-dark-100 rounded-xl p-6 border border-gray-800 hover:border-primary-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-500/20 p-3 rounded-lg mr-4">
                    <addon.icon className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{addon.name}</h4>
                    <p className="text-primary-500 font-bold">${addon.price}/{addon.period}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{addon.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    if (!user) {
                      alert('Please login first to add services to your plan')
                      window.location.href = '/auth/login'
                      return
                    }
                    if (!hasActivePlan) {
                      alert('Please purchase a gym plan first')
                      document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })
                      return
                    }
                    
                    // Log addon purchase for admin panel
                    try {
                      const { logFeesData } = require('@/lib/admin-auth')
                      logFeesData(user.id, user.name, addon.name, addon.price, 'addon')
                    } catch (error) {
                      console.log('Admin logging not available')
                    }
                    
                    window.location.href = `/billing/addons?plan=${encodeURIComponent(addon.name + ' - $' + addon.price + '/' + addon.period)}`
                  }}
                >
                  Add to Plan
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-green-500/20 text-green-500 px-6 py-3 rounded-full">
            <Check className="h-5 w-5 mr-2" />
            <span className="font-semibold">30-Day Money Back Guarantee</span>
          </div>
          <p className="text-gray-400 mt-4">
            Not satisfied? Get a full refund within 30 days, no questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PlansSection