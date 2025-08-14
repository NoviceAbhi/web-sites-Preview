'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Users, 
  CreditCard, 
  Calendar, 
  Activity, 
  TrendingUp, 
  DollarSign,
  Clock,
  Target,
  ArrowLeft,
  Bell,
  Settings
} from 'lucide-react'
import LiveTrackingCard from '@/components/dashboard/LiveTrackingCard'
import ProgressTrackingCard from '@/components/dashboard/ProgressTrackingCard'
import MembershipManagementCard from '@/components/dashboard/MembershipManagementCard'
import Button from '@/components/ui/Button'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('tracking')





  return (
    <div className="min-h-screen bg-dark-300">
      {/* Header */}
      <div className="bg-dark-200 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Site
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-white">FitnessPro Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white">
                <Bell className="h-6 w-6" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-dark-200 p-1 rounded-lg">
          {[
            { id: 'overview', label: 'Overview', icon: Activity },
            { id: 'tracking', label: 'Live Tracking', icon: Users },
            { id: 'payments', label: 'Fee Management', icon: CreditCard },
            { id: 'plans', label: 'Plan Tracking', icon: Calendar },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-dark-100'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Live Gym Capacity */}
            <div className="bg-gradient-to-br from-dark-100 to-dark-200 rounded-xl p-8 border border-gray-800 hover:border-primary-500/30 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Users className="h-7 w-7 text-primary-500 mr-3" />
                  Live Gym Capacity
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-500 text-sm font-medium">Live</span>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="text-6xl font-bold text-white mb-3">
                    40 / 80
                  </div>
                  <div className="absolute -top-2 -right-8">
                    <div className="bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded-full text-xs font-medium">
                      50%
                    </div>
                  </div>
                </div>
                <div className="text-lg text-gray-300 mb-2">Current Occupancy</div>
                <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-yellow-500 font-medium">Moderate Capacity</span>
                </div>
              </div>
              
              <div className="relative mb-6">
                <div className="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-primary-400 h-4 rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: '50%' }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-400">
                  <span>Empty</span>
                  <span>Moderate</span>
                  <span>Full</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-dark-300/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-green-500 mb-1">40</div>
                  <div className="text-xs text-gray-400">Available Spots</div>
                </div>
                <div className="text-center p-4 bg-dark-300/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-blue-500 mb-1">15</div>
                  <div className="text-xs text-gray-400">Peak Hour (6-8 PM)</div>
                </div>
                <div className="text-center p-4 bg-dark-300/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-500 mb-1">25</div>
                  <div className="text-xs text-gray-400">Avg. Daily</div>
                </div>
              </div>
            </div>

            {/* Area Breakdown */}
            <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">Area Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Cardio Zone', current: 12, max: 20, color: 'bg-blue-500' },
                  { name: 'Weight Training', current: 18, max: 25, color: 'bg-red-500' },
                  { name: 'Functional Area', current: 8, max: 15, color: 'bg-green-500' },
                  { name: 'Group Classes', current: 9, max: 20, color: 'bg-purple-500' }
                ].map((area, index) => (
                  <div key={index} className="bg-dark-200 rounded-lg p-4">
                    <div className="text-white font-medium mb-2">{area.name}</div>
                    <div className="text-2xl font-bold text-white mb-2">{area.current}/{area.max}</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`${area.color} h-2 rounded-full`}
                        style={{ width: `${(area.current / area.max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upgrade Your Plan */}
            <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">Upgrade Your Plan</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: 'Premium Plan', price: '$59/month', features: 'Personal training + Group classes' },
                  { name: 'Elite Plan', price: '$99/month', features: 'Unlimited training + Meal plans' },
                  { name: 'Personal Training', price: '$25/session', features: 'One-on-one coaching' }
                ].map((plan, index) => (
                  <div key={index} className="p-4 bg-dark-200 rounded-lg border border-gray-700 hover:border-primary-500/50 transition-all">
                    <h4 className="text-white font-semibold">{plan.name}</h4>
                    <p className="text-primary-500 font-bold text-lg">{plan.price}</p>
                    <p className="text-gray-400 text-sm mb-3">{plan.features}</p>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.location.href = `/billing?plan=${encodeURIComponent(plan.name + ' - ' + plan.price)}`}
                    >
                      Upgrade
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Live Tracking Tab */}
        {activeTab === 'tracking' && (
          <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <LiveTrackingCard />
              <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-6">Equipment Status</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Treadmills', available: 8, total: 12, status: 'good' },
                    { name: 'Ellipticals', available: 5, total: 8, status: 'moderate' },
                    { name: 'Weight Stations', available: 15, total: 20, status: 'good' },
                    { name: 'Rowing Machines', available: 2, total: 6, status: 'busy' },
                  ].map((equipment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-dark-200 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{equipment.name}</p>
                        <p className="text-gray-400 text-sm">{equipment.available} of {equipment.total} available</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        equipment.status === 'good' ? 'bg-green-500/20 text-green-500' :
                        equipment.status === 'moderate' ? 'bg-yellow-500/20 text-yellow-500' :
                        'bg-red-500/20 text-red-500'
                      }`}>
                        {equipment.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Progress Tracking Section */}
            <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">My Fitness Progress</h3>
                <Button 
                  size="sm" 
                  onClick={() => window.location.href = '/upgrade'}
                  className="bg-primary-500 hover:bg-primary-600"
                >
                  Upgrade Plan
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">Overall Progress</h4>
                    <span className="text-2xl font-bold text-white">78%</span>
                  </div>
                  <div className="mb-4">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full transition-all duration-500" style={{ width: '78%' }} />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">15</div>
                      <div className="text-xs text-gray-400">Workouts</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">3</div>
                      <div className="text-xs text-gray-400">Goals</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">12</div>
                      <div className="text-xs text-gray-400">Days</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-dark-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-sm">Weight Loss Goal</span>
                      <span className="text-green-500 text-sm font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  
                  <div className="bg-dark-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-sm">Strength Training</span>
                      <span className="text-yellow-500 text-sm font-medium">65%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }} />
                    </div>
                  </div>
                  
                  <div className="bg-dark-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-sm">Cardio Endurance</span>
                      <span className="text-blue-500 text-sm font-medium">92%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fee Management Tab */}
        {activeTab === 'payments' && (
          <div className="space-y-8">
            <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">My Billing Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-dark-200 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Current Plan</h4>
                  <p className="text-xl font-bold text-white">Premium Plan</p>
                  <p className="text-gray-400">$59/month</p>
                </div>
                <div className="bg-dark-200 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Purchase Date</h4>
                  <p className="text-lg font-bold text-white">{new Date().toLocaleDateString()}</p>
                </div>
                <div className="bg-dark-200 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Renewal Date</h4>
                  <p className="text-lg font-bold text-white">{new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                  <p className="text-xs text-gray-400">30 days left</p>
                </div>
                <div className="bg-dark-200 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Expires On</h4>
                  <p className="text-lg font-bold text-white">{new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                  <p className="text-xs text-gray-400">Auto-renewal</p>
                </div>
              </div>
              <div className="bg-dark-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Total Amount Paid</h4>
                    <p className="text-2xl font-bold text-green-500">$59</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">Last Payment</p>
                    <p className="text-white font-medium">{new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">My Payment History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-dark-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Payment Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Plan/Service</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr className="hover:bg-dark-200/50">
                      <td className="px-4 py-4 text-sm text-gray-400">{new Date().toLocaleDateString()}</td>
                      <td className="px-4 py-4">
                        <div className="text-sm font-medium text-white">Premium Plan</div>
                        <div className="text-sm text-gray-400">plan</div>
                      </td>
                      <td className="px-4 py-4 text-sm text-white font-medium">$59</td>
                      <td className="px-4 py-4">
                        <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-500">paid</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Plan Tracking Tab */}
        {activeTab === 'plans' && (
          <div className="space-y-8">
            <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">My Fitness Progress</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-dark-200 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Current Program</h4>
                  <p className="text-xl font-bold text-white">Weight Loss Program</p>
                  <p className="text-gray-400 text-sm">Active Plan</p>
                </div>
                <div className="bg-dark-200 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Progress</h4>
                  <p className="text-xl font-bold text-white">85%</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
                <div className="bg-dark-200 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Started</h4>
                  <p className="text-lg font-bold text-white">{new Date().toLocaleDateString()}</p>
                  <p className="text-gray-400 text-sm">0 days ago</p>
                </div>
                <div className="bg-dark-200 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Achievements</h4>
                  <p className="text-xl font-bold text-white">2</p>
                  <p className="text-gray-400 text-sm">Unlocked</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">My Goals</h3>
              <div className="space-y-4">
                {[
                  { name: 'Lose 10 lbs', progress: 85, completed: false },
                  { name: 'Run 5K', progress: 100, completed: true },
                  { name: 'Strength Training 3x/week', progress: 90, completed: false }
                ].map((goal, index) => (
                  <div key={index} className="bg-dark-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{goal.name}</h4>
                      {goal.completed && <span className="text-green-500">✓</span>}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${goal.completed ? 'bg-green-500' : 'bg-primary-500'}`}
                            style={{ width: `${goal.progress}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-white font-medium">{goal.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">This Week's Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-dark-200 rounded-lg p-4 text-center">
                  <Activity className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">5</p>
                  <p className="text-gray-400 text-sm">of 6 workouts</p>
                </div>
                <div className="bg-dark-200 rounded-lg p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">1250</p>
                  <p className="text-gray-400 text-sm">calories burned</p>
                </div>
                <div className="bg-dark-200 rounded-lg p-4 text-center">
                  <Calendar className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">45</p>
                  <p className="text-gray-400 text-sm">avg minutes/workout</p>
                </div>
                <div className="bg-dark-200 rounded-lg p-4 text-center">
                  <Target className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">83%</p>
                  <p className="text-gray-400 text-sm">completion rate</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard