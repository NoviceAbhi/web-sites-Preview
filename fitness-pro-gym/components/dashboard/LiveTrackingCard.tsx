'use client'

import { useState, useEffect } from 'react'
import { Users, TrendingUp, TrendingDown, Clock, MapPin, User, LogOut } from 'lucide-react'
import { getCurrentUser, logout, type User as UserType } from '@/lib/auth'

const LiveTrackingCard = () => {
  const [currentCapacity, setCurrentCapacity] = useState(47)
  const [maxCapacity] = useState(80)
  const [trend, setTrend] = useState<'up' | 'down' | 'stable'>('stable')
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [mounted, setMounted] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [showScheduleModal, setShowScheduleModal] = useState(false)
  const [bookedEquipment, setBookedEquipment] = useState<string[]>([])
  const [bookedClasses, setBookedClasses] = useState<string[]>([])
  const [notification, setNotification] = useState('')
  const [user, setUser] = useState<UserType | null>(null)


  const areas = [
    { name: 'Cardio Zone', current: 12, max: 20, color: 'bg-blue-500' },
    { name: 'Weight Training', current: 18, max: 25, color: 'bg-red-500' },
    { name: 'Functional Area', current: 8, max: 15, color: 'bg-green-500' },
    { name: 'Group Classes', current: 9, max: 20, color: 'bg-purple-500' },
  ]

  const equipment = [
    { name: 'Treadmill 1', available: true, area: 'Cardio Zone' },
    { name: 'Treadmill 2', available: false, area: 'Cardio Zone' },
    { name: 'Bench Press', available: true, area: 'Weight Training' },
    { name: 'Squat Rack', available: false, area: 'Weight Training' },
    { name: 'Cable Machine', available: true, area: 'Functional Area' },
  ]

  const schedule = [
    { time: '6:00 AM', class: 'Morning Yoga', instructor: 'Sarah', capacity: '15/20' },
    { time: '7:30 AM', class: 'HIIT Training', instructor: 'Mike', capacity: '12/15' },
    { time: '9:00 AM', class: 'Pilates', instructor: 'Emma', capacity: '8/12' },
    { time: '6:00 PM', class: 'Zumba', instructor: 'Lisa', capacity: '18/25' },
    { time: '7:30 PM', class: 'CrossFit', instructor: 'John', capacity: '10/15' },
  ]

  useEffect(() => {
    setMounted(true)
    setUser(getCurrentUser())
    
    // Listen for storage changes to sync login state across components
    const handleStorageChange = () => {
      setUser(getCurrentUser())
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    const interval = setInterval(() => {
      setCurrentCapacity(prev => {
        const change = Math.floor(Math.random() * 5) - 2
        const newCapacity = Math.max(20, Math.min(maxCapacity, prev + change))
        
        if (newCapacity > prev) setTrend('up')
        else if (newCapacity < prev) setTrend('down')
        else setTrend('stable')
        
        setLastUpdated(new Date())
        return newCapacity
      })
    }, 3000)

    return () => {
      clearInterval(interval)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [maxCapacity])

  const capacityPercentage = (currentCapacity / maxCapacity) * 100
  const getCapacityColor = () => {
    if (capacityPercentage < 50) return 'text-green-500'
    if (capacityPercentage < 75) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getCapacityStatus = () => {
    if (capacityPercentage < 50) return 'Low'
    if (capacityPercentage < 75) return 'Moderate'
    return 'High'
  }

  const bookEquipment = (equipmentName: string) => {
    if (!user) {
      window.location.href = '/#join'
      return
    }
    if (!user.hasActivePlan) {
      setNotification('Premium plan required to book equipment!')
      setTimeout(() => setNotification(''), 3000)
      return
    }
    setBookedEquipment(prev => [...prev, equipmentName])
    setNotification(`${equipmentName} booked by ${user.name}!`)
    setTimeout(() => setNotification(''), 3000)
    setShowBookingModal(false)
    
    // Log for admin panel
    try {
      const { logLiveTracking } = require('@/lib/admin-auth')
      logLiveTracking(user.id, user.name, equipmentName, equipmentName, 'booked')
    } catch (error) {
      console.log('Admin logging not available')
    }
  }

  const bookClass = (className: string) => {
    if (!user) {
      window.location.href = '/#join'
      return
    }
    if (!user.hasActivePlan) {
      setNotification('Premium plan required to book classes!')
      setTimeout(() => setNotification(''), 3000)
      return
    }
    setBookedClasses(prev => [...prev, className])
    setNotification(`${className} class booked by ${user.name}!`)
    setTimeout(() => setNotification(''), 3000)
    setShowScheduleModal(false)
    
    // Log for admin panel
    try {
      const { logLiveTracking } = require('@/lib/admin-auth')
      logLiveTracking(user.id, user.name, className, className, 'booked')
    } catch (error) {
      console.log('Admin logging not available')
    }
  }

  const unbookEquipment = (equipmentName: string) => {
    setBookedEquipment(prev => prev.filter(item => item !== equipmentName))
    setNotification(`${equipmentName} unbooked successfully!`)
    setTimeout(() => setNotification(''), 3000)
    
    // Log for admin panel
    if (user) {
      try {
        const { logLiveTracking } = require('@/lib/admin-auth')
        logLiveTracking(user.id, user.name, equipmentName, equipmentName, 'unbooked')
      } catch (error) {
        console.log('Admin logging not available')
      }
    }
  }

  const unbookClass = (className: string) => {
    setBookedClasses(prev => prev.filter(item => item !== className))
    setNotification(`${className} class unbooked successfully!`)
    setTimeout(() => setNotification(''), 3000)
    
    // Log for admin panel
    if (user) {
      try {
        const { logLiveTracking } = require('@/lib/admin-auth')
        logLiveTracking(user.id, user.name, className, className, 'unbooked')
      } catch (error) {
        console.log('Admin logging not available')
      }
    }
  }

  const handleLogout = () => {
    logout()
    setUser(null)
    setBookedEquipment([])
    setBookedClasses([])
    setNotification('Logged out successfully')
    setTimeout(() => setNotification(''), 3000)
  }

  return (
    <>
    <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <Users className="h-6 w-6 text-primary-500 mr-2" />
          Live Gym Capacity
        </h3>
        <div className="flex flex-col items-end space-y-2">
          {user && (
            <div className="flex items-center space-x-2 text-sm">
              <User className="h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">{user.name}</span>
              <button 
                onClick={handleLogout}
                className="text-gray-400 hover:text-red-500 transition-colors"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          )}
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Clock className="h-4 w-4" />
            <span>Updated {mounted ? lastUpdated.toLocaleTimeString() : '--:--:--'}</span>
          </div>
          {notification && (
            <div className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-medium animate-pulse">
              {notification}
            </div>
          )}
        </div>
      </div>

      {/* Main Capacity Display */}
      <div className="text-center mb-8">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#374151"
              strokeWidth="2"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#f97316"
              strokeWidth="2"
              strokeDasharray={`${capacityPercentage}, 100`}
              className="transition-all duration-1000 ease-in-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-3xl font-bold ${getCapacityColor()}`}>
                {currentCapacity}
              </div>
              <div className="text-sm text-gray-400">/ {maxCapacity}</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-2">
          <span className={`text-lg font-semibold ${getCapacityColor()}`}>
            {getCapacityStatus()} Capacity
          </span>
          {trend === 'up' && <TrendingUp className="h-5 w-5 text-green-500" />}
          {trend === 'down' && <TrendingDown className="h-5 w-5 text-red-500" />}
        </div>
      </div>

      {/* Area Breakdown */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white flex items-center">
          <MapPin className="h-5 w-5 text-primary-500 mr-2" />
          Area Breakdown
        </h4>
        {areas.map((area, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">{area.name}</span>
              <span className="text-gray-400">{area.current}/{area.max}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`${area.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${(area.current / area.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Booked Items */}
      {user && (bookedEquipment.length > 0 || bookedClasses.length > 0) && (
        <div className="mt-6 pt-6 border-t border-gray-700">
          <h5 className="text-white font-semibold mb-3">Your Bookings ({user.name})</h5>
          <div className="space-y-2">
            {bookedEquipment.map((item, index) => (
              <div key={index} className="bg-green-500/20 text-green-500 px-3 py-2 rounded-lg text-sm flex items-center justify-between">
                <span>🏋️ {item}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">Booked by you</span>
                  <button
                    onClick={() => unbookEquipment(item)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs font-medium transition-colors"
                  >
                    Unbook
                  </button>
                </div>
              </div>
            ))}
            {bookedClasses.map((item, index) => (
              <div key={index} className="bg-blue-500/20 text-blue-500 px-3 py-2 rounded-lg text-sm flex items-center justify-between">
                <span>🏃 {item}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">Booked by you</span>
                  <button
                    onClick={() => unbookClass(item)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs font-medium transition-colors"
                  >
                    Unbook
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Login/Plan Prompt */}
      {!user && (
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="bg-yellow-500/20 text-yellow-500 px-4 py-3 rounded-lg text-sm text-center">
            <p className="mb-2">Please login to book equipment and classes</p>
            <button 
              onClick={() => window.location.href = '/#join'}
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Login Now
            </button>
          </div>
        </div>
      )}
      
      {user && !user.hasActivePlan && (
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="bg-red-500/20 text-red-500 px-4 py-3 rounded-lg text-sm text-center">
            <p className="mb-2">Premium plan required to book equipment and classes</p>
            <button 
              onClick={() => window.location.href = '/billing'}
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Upgrade Plan
            </button>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      {user && user.hasActivePlan && (
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => setShowBookingModal(true)}
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Book Equipment
            </button>
            <button 
              onClick={() => setShowScheduleModal(true)}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              View Schedule
            </button>
          </div>
        </div>
      )}
    </div>

    {/* Equipment Booking Modal */}
    {showBookingModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-dark-100 rounded-xl p-6 w-full max-w-md border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Book Equipment</h3>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {equipment.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-dark-200 rounded-lg">
                <div>
                  <div className="text-white font-medium">{item.name}</div>
                  <div className="text-gray-400 text-sm">{item.area}</div>
                </div>
                {bookedEquipment.includes(item.name) ? (
                  <button 
                    onClick={() => unbookEquipment(item.name)}
                    className="px-3 py-1 rounded text-xs font-medium transition-colors bg-red-500 hover:bg-red-600 text-white"
                  >
                    Unbook
                  </button>
                ) : (
                  <button 
                    disabled={!item.available}
                    onClick={() => bookEquipment(item.name)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      item.available 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {item.available ? 'Book' : 'Busy'}
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-6">
            <button 
              onClick={() => setShowBookingModal(false)}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}

    {/* Schedule Modal */}
    {showScheduleModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-dark-100 rounded-xl p-6 w-full max-w-lg border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-4">Today's Schedule</h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {schedule.map((item, index) => (
              <div key={index} className="p-4 bg-dark-200 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex-1">
                    <div className="text-white font-medium">{item.class}</div>
                    <div className="text-gray-400 text-sm">Instructor: {item.instructor}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-primary-500 font-medium">{item.time}</div>
                      <div className="text-gray-400 text-sm">{item.capacity}</div>
                    </div>
                    {bookedClasses.includes(item.class) ? (
                      <button
                        onClick={() => unbookClass(item.class)}
                        className="px-3 py-1 rounded text-xs font-medium transition-colors bg-red-500 hover:bg-red-600 text-white"
                      >
                        Unbook
                      </button>
                    ) : (
                      <button
                        onClick={() => bookClass(item.class)}
                        className="px-3 py-1 rounded text-xs font-medium transition-colors bg-green-500 hover:bg-green-600 text-white"
                      >
                        Book
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-6">
            <button 
              onClick={() => setShowScheduleModal(false)}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Close
            </button>
            <button 
              onClick={() => {
                const availableClass = schedule.find(item => !bookedClasses.includes(item.class))
                if (availableClass) {
                  bookClass(availableClass.class)
                }
              }}
              disabled={bookedClasses.length >= schedule.length}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                bookedClasses.length >= schedule.length
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-primary-500 hover:bg-primary-600 text-white'
              }`}
            >
              {bookedClasses.length >= schedule.length ? 'All Booked' : 'Book Class'}
            </button>
          </div>
        </div>
      </div>
    )}


  </>
  )
}

export default LiveTrackingCard