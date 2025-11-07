'use client'

import Link from 'next/link'
import { ArrowLeft, Check, Star, Zap, Crown } from 'lucide-react'
import Button from '@/components/ui/Button'

const UpgradePage = () => {
  const plans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '$29',
      period: '/month',
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        'Access to gym equipment',
        'Basic workout plans',
        'Locker room access',
        'Mobile app access',
        'Community support'
      ],
      popular: false,
      icon: Zap,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: '$59',
      period: '/month',
      description: 'Most popular choice for serious fitness enthusiasts',
      features: [
        'Everything in Basic',
        'Personal training sessions (2/month)',
        'Group fitness classes',
        'Nutrition consultation',
        'Priority booking',
        'Guest passes (2/month)'
      ],
      popular: true,
      icon: Star,
      color: 'from-primary-500 to-primary-600'
    },
    {
      id: 'elite',
      name: 'Elite Plan',
      price: '$99',
      period: '/month',
      description: 'Ultimate fitness experience with premium benefits',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Custom meal plans',
        'Recovery services (massage, sauna)',
        'VIP locker room access',
        'Unlimited guest passes',
        '24/7 gym access'
      ],
      popular: false,
      icon: Crown,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const handlePlanSelect = (plan: typeof plans[0]) => {
    window.location.href = `/billing?plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(plan.price + plan.period)}`
  }

  return (
    <div className="min-h-screen bg-dark-300">
      {/* Header */}
      <div className="bg-dark-200 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-white">Upgrade Your Plan</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Perfect
            <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent"> Fitness Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock your potential with our comprehensive fitness plans designed to help you achieve your goals faster
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const IconComponent = plan.icon
            return (
              <div
                key={plan.id}
                className={`relative bg-dark-100 rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-primary-500 shadow-lg shadow-primary-500/20' 
                    : 'border-gray-800 hover:border-primary-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-400 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-600 hover:to-primary-500'
                      : 'bg-dark-200 hover:bg-dark-100 text-white border border-gray-700'
                  }`}
                  size="lg"
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </Button>
              </div>
            )
          })}
        </div>

        {/* Additional Benefits */}
        <div className="bg-dark-100 rounded-2xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            All Plans Include
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'State-of-the-art Equipment', desc: 'Latest fitness technology' },
              { title: 'Expert Trainers', desc: 'Certified professionals' },
              { title: 'Flexible Scheduling', desc: 'Book anytime online' },
              { title: 'Progress Tracking', desc: 'Monitor your journey' }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-primary-500" />
                </div>
                <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpgradePage