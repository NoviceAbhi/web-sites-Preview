'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Users, 
  Activity, 
  CreditCard, 
  Calendar, 
  LogOut, 
  Shield,
  TrendingUp,
  Eye,
  Search,
  Filter,
  Download,
  Navigation,
  MousePointer,
  Clock,
  DollarSign
} from 'lucide-react'
import Button from '@/components/ui/Button'
import { 
  getCurrentAdmin, 
  adminLogout, 
  getStoredUserLogs, 
  getAllUsersWithPlans,
  getStoredTrackingLogs, 
  getStoredFeesLogs, 
  getStoredPlanLogs,
  getStoredHeaderLogs,
  getStoredCapacityLogs,
  getStoredFeesManagementLogs,
  getStoredPlanTrackingManagementLogs,
  getAdminAnalytics,
  deleteUser,
  resetManagementData,
  markPaymentAsPaid,
  type UserRegistrationLog,
  type LiveTrackingData,
  type FeesData,
  type PlanTrackingData,
  type HeaderTrackingData,
  type GymCapacityData,
  type FeesManagementData,
  type PlanTrackingManagementData
} from '@/lib/admin-auth'

const AdminDashboard = () => {
  const [admin, setAdmin] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [userLogs, setUserLogs] = useState<UserRegistrationLog[]>([])
  const [trackingLogs, setTrackingLogs] = useState<LiveTrackingData[]>([])
  const [feesLogs, setFeesLogs] = useState<FeesData[]>([])
  const [planLogs, setPlanLogs] = useState<PlanTrackingData[]>([])
  const [headerLogs, setHeaderLogs] = useState<HeaderTrackingData[]>([])
  const [capacityLogs, setCapacityLogs] = useState<GymCapacityData[]>([])
  const [feesManagementLogs, setFeesManagementLogs] = useState<FeesManagementData[]>([])
  const [planTrackingManagementLogs, setPlanTrackingManagementLogs] = useState<PlanTrackingManagementData[]>([])
  const [analytics, setAnalytics] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUser, setSelectedUser] = useState<UserRegistrationLog | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [selectedProgressUser, setSelectedProgressUser] = useState('John Doe')
  const [membershipView, setMembershipView] = useState('Payments')
  const router = useRouter()

  useEffect(() => {
    const currentAdmin = getCurrentAdmin()
    if (!currentAdmin) {
      router.push('/admin/login')
      return
    }
    setAdmin(currentAdmin)
    loadData()
  }, [router])

  const loadData = () => {
    // Reset management data to show actual user-based information
    resetManagementData()
    
    setUserLogs(getAllUsersWithPlans())
    setTrackingLogs(getStoredTrackingLogs())
    setFeesLogs(getStoredFeesLogs())
    setPlanLogs(getStoredPlanLogs())
    setHeaderLogs(getStoredHeaderLogs())
    setCapacityLogs(getStoredCapacityLogs())
    setFeesManagementLogs(getStoredFeesManagementLogs())
    setPlanTrackingManagementLogs(getStoredPlanTrackingManagementLogs())
    setAnalytics(getAdminAnalytics())
  }

  const handleLogout = () => {
    adminLogout()
    router.push('/admin/login')
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'tracking', label: 'Live Tracking', icon: Activity },
    { id: 'fees', label: 'Fees Management', icon: CreditCard },
    { id: 'plans', label: 'Plan Tracking', icon: Calendar }
  ]

  const filteredUsers = userLogs.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDeleteUser = (userId: string) => {
    const success = deleteUser(userId)
    if (success) {
      loadData()
      setDeleteConfirm(null)
    }
  }

  if (!admin) {
    return <div className="min-h-screen bg-dark-300 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>
  }

  return (
    <div className="min-h-screen bg-dark-300">
      {/* Header */}
      <div className="bg-dark-200 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-primary-500 mr-3" />
              <h1 className="text-xl font-bold text-white">FitnessPro Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Welcome, {admin.username}</span>
              <Button
                onClick={handleLogout}
                variant="ghost"
                size="sm"
                className="text-red-400 hover:text-red-300"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-dark-200 p-1 rounded-lg mb-4 sm:mb-6 lg:mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-dark-100'
              }`}
            >
              <tab.icon className="h-4 w-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {/* Live Tracking Card */}
              <div className="lg:col-span-1">
                <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <Activity className="h-6 w-6 text-primary-500 mr-2" />
                    Live Tracking
                  </h3>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white mb-2">47</div>
                    <div className="text-gray-400">Active Members</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { area: 'Cardio Zone', count: 12, max: 20, color: 'bg-blue-500' },
                      { area: 'Weight Training', count: 18, max: 25, color: 'bg-red-500' },
                      { area: 'Functional Area', count: 8, max: 15, color: 'bg-green-500' },
                      { area: 'Group Classes', count: 9, max: 20, color: 'bg-purple-500' }
                    ].map((area, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${area.color}`} />
                            <span className="text-gray-300 text-sm">{area.area}</span>
                          </div>
                          <span className="text-white font-medium">{area.count}/{area.max}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                          <div 
                            className={`${area.color} h-1.5 rounded-full transition-all duration-500`}
                            style={{ width: `${(area.count / area.max) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activities */}
              <div className="lg:col-span-2 bg-dark-100 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Activity className="h-6 w-6 text-primary-500 mr-2" />
                  Recent Activities
                </h3>
                <div className="space-y-4">
                  {[
                    { user: 'John Doe', action: 'Completed workout', time: '2 min ago', type: 'workout' },
                    { user: 'Sarah Smith', action: 'Payment received', time: '5 min ago', type: 'payment' },
                    { user: 'Mike Johnson', action: 'Plan updated', time: '10 min ago', type: 'plan' },
                    { user: 'Emma Wilson', action: 'Checked in', time: '15 min ago', type: 'checkin' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-dark-200 rounded-lg">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'workout' ? 'bg-blue-500' :
                        activity.type === 'payment' ? 'bg-green-500' :
                        activity.type === 'plan' ? 'bg-purple-500' : 'bg-orange-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-white font-medium">{activity.user}</p>
                        <p className="text-gray-400 text-sm">{activity.action}</p>
                      </div>
                      <span className="text-gray-500 text-sm">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium Management Cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <Users className="h-6 w-6 text-primary-500 mr-2" />
                    Membership Management
                  </h3>
                  <div className="flex bg-dark-200 rounded-lg p-1">
                    <button
                      onClick={() => setMembershipView('Payments')}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        membershipView === 'Payments' ? 'bg-primary-500 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Payments
                    </button>
                    <button
                      onClick={() => setMembershipView('Status')}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        membershipView === 'Status' ? 'bg-primary-500 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Status
                    </button>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-dark-200 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-500 mb-1">80%</div>
                    <div className="text-sm text-gray-400">Admin Reduction</div>
                  </div>
                  
                  {membershipView === 'Payments' ? (
                    <div>
                      <h4 className="text-white font-medium mb-3">Payments Status</h4>
                      <div className="bg-dark-200 rounded-lg p-3 mb-4">
                        <div className="text-sm text-gray-300">Automated Payment Reminders • SMS/WhatsApp</div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-dark-200 rounded-lg">
                          <div>
                            <div className="text-white font-medium">Alex Brown</div>
                            <div className="text-gray-400 text-sm">Due: Today • $89</div>
                            <div className="text-gray-500 text-xs">+91 98765 43210</div>
                          </div>
                          <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                            Send Reminder
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-dark-200 rounded-lg">
                          <div>
                            <div className="text-white font-medium">Lisa Davis</div>
                            <div className="text-gray-400 text-sm">Due: Tomorrow • $129</div>
                            <div className="text-gray-500 text-xs">+91 98765 43211</div>
                          </div>
                          <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-500">
                            Reminder Sent
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-dark-200 rounded-lg">
                          <div>
                            <div className="text-white font-medium">Tom Wilson</div>
                            <div className="text-gray-400 text-sm">Due: Jan 25 • $89</div>
                            <div className="text-gray-500 text-xs">+91 98765 43212</div>
                          </div>
                          <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-500">
                            Paid
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h4 className="text-white font-medium mb-3">Membership Status Tracking</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-dark-200 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="text-white font-medium">John Doe</div>
                              <div className="text-gray-400 text-sm">Premium Plan • Expires: 2024-03-15</div>
                            </div>
                            <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-500">
                              active
                            </span>
                          </div>
                          <div className="text-gray-400 text-xs">Auto-renewal: ON</div>
                        </div>
                        
                        <div className="p-3 bg-dark-200 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="text-white font-medium">Sarah Smith</div>
                              <div className="text-gray-400 text-sm">Basic Plan • Expires: 2024-01-25</div>
                            </div>
                            <span className="px-2 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-500">
                              expiring
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-gray-400 text-xs">Auto-renewal: OFF</div>
                            <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black text-xs">
                              Renew Now
                            </Button>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-dark-200 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="text-white font-medium">Mike Johnson</div>
                              <div className="text-gray-400 text-sm">Elite Plan • Expires: 2024-02-10</div>
                            </div>
                            <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-500">
                              paused
                            </span>
                          </div>
                          <div className="text-gray-400 text-xs">Auto-renewal: ON</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <TrendingUp className="h-6 w-6 text-primary-500 mr-2" />
                    Progress Tracking
                  </h3>
                  <select 
                    value={selectedProgressUser}
                    onChange={(e) => setSelectedProgressUser(e.target.value)}
                    className="bg-dark-200 text-white px-3 py-1 rounded border border-gray-700 text-sm"
                  >
                    <option value="John Doe">John Doe</option>
                    <option value="Sarah Williams">Sarah Williams</option>
                    <option value="Mike Chen">Mike Chen</option>
                    <option value="Emma Davis">Emma Davis</option>
                  </select>
                </div>
                <div className="space-y-6">
                  <div className="bg-dark-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        selectedProgressUser === 'John Doe' ? 'bg-blue-500' :
                        selectedProgressUser === 'Sarah Williams' ? 'bg-pink-500' :
                        selectedProgressUser === 'Mike Chen' ? 'bg-green-500' : 'bg-purple-500'
                      }`}>
                        {selectedProgressUser === 'John Doe' ? 'JD' :
                         selectedProgressUser === 'Sarah Williams' ? 'SW' :
                         selectedProgressUser === 'Mike Chen' ? 'MC' : 'ED'}
                      </div>
                      <div>
                        <div className="text-white font-medium">{selectedProgressUser}</div>
                        <div className="text-gray-400 text-sm">
                          {selectedProgressUser === 'John Doe' ? 'Weight Loss Program' :
                           selectedProgressUser === 'Sarah Williams' ? 'Strength Training' :
                           selectedProgressUser === 'Mike Chen' ? 'Cardio Endurance' : 'Muscle Building'}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-dark-200 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">
                      {selectedProgressUser === 'John Doe' ? '85%' :
                       selectedProgressUser === 'Sarah Williams' ? '72%' :
                       selectedProgressUser === 'Mike Chen' ? '91%' : '68%'}
                    </div>
                    <div className="text-sm text-gray-400 mb-3">Overall Progress</div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-purple-500 h-3 rounded-full transition-all duration-500" style={{ 
                        width: selectedProgressUser === 'John Doe' ? '85%' :
                               selectedProgressUser === 'Sarah Williams' ? '72%' :
                               selectedProgressUser === 'Mike Chen' ? '91%' : '68%'
                      }} />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-dark-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {selectedProgressUser === 'John Doe' ? '78kg' :
                         selectedProgressUser === 'Sarah Williams' ? '65kg' :
                         selectedProgressUser === 'Mike Chen' ? '82kg' : '70kg'}
                      </div>
                      <div className="text-xs text-gray-400">Current Weight</div>
                      <div className="text-green-500 text-xs">
                        {selectedProgressUser === 'John Doe' ? '-7kg' :
                         selectedProgressUser === 'Sarah Williams' ? '+3kg' :
                         selectedProgressUser === 'Mike Chen' ? '-2kg' : '-5kg'}
                      </div>
                    </div>
                    <div className="bg-dark-200 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {selectedProgressUser === 'John Doe' ? '24/30' :
                         selectedProgressUser === 'Sarah Williams' ? '18/25' :
                         selectedProgressUser === 'Mike Chen' ? '28/30' : '20/30'}
                      </div>
                      <div className="text-xs text-gray-400">Workouts</div>
                      <div className="text-blue-500 text-xs">
                        {selectedProgressUser === 'John Doe' ? '80% Complete' :
                         selectedProgressUser === 'Sarah Williams' ? '72% Complete' :
                         selectedProgressUser === 'Mike Chen' ? '93% Complete' : '67% Complete'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-dark-200 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-3">Recent Achievements</h4>
                    <div className="space-y-2">
                      {selectedProgressUser === 'John Doe' ? (
                        <>
                          <div className="text-sm text-gray-300">• Lost 7kg</div>
                          <div className="text-sm text-gray-300">• Completed 80% workouts</div>
                          <div className="text-sm text-gray-300">• Improved endurance</div>
                        </>
                      ) : selectedProgressUser === 'Sarah Williams' ? (
                        <>
                          <div className="text-sm text-gray-300">• Increased bench press by 15kg</div>
                          <div className="text-sm text-gray-300">• Completed strength program</div>
                          <div className="text-sm text-gray-300">• Built muscle mass</div>
                        </>
                      ) : selectedProgressUser === 'Mike Chen' ? (
                        <>
                          <div className="text-sm text-gray-300">• Ran 10K in under 45 mins</div>
                          <div className="text-sm text-gray-300">• Improved VO2 max</div>
                          <div className="text-sm text-gray-300">• Consistent cardio routine</div>
                        </>
                      ) : (
                        <>
                          <div className="text-sm text-gray-300">• Gained 5kg muscle mass</div>
                          <div className="text-sm text-gray-300">• Increased protein intake</div>
                          <div className="text-sm text-gray-300">• Progressive overload training</div>
                        </>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">User Management</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-dark-200 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-primary-500 focus:outline-none"
                  />
                </div>
                <Button size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <div className="bg-dark-100 rounded-xl border border-gray-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-dark-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Login Credentials</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Plan Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Registration Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Login</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-dark-200/50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-white">{user.name}</div>
                            <div className="text-sm text-gray-400">{user.email}</div>
                            <div className="text-sm text-gray-400">{user.phone}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="bg-dark-200 p-2 rounded">
                            <div className="text-sm text-white">Email: {user.loginCredentials.email}</div>
                            <div className="text-sm text-gray-400">Password: {user.loginCredentials.password}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.hasActivePlan ? (
                            <div className="space-y-1">
                              <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-500">
                                Active Plan
                              </span>
                              {user.currentPlan && (
                                <div className="text-xs text-gray-400">
                                  <div>{user.currentPlan.name}</div>
                                  <div>${user.currentPlan.price}/month</div>
                                  <div>Expires: {new Date(user.currentPlan.endDate).toLocaleDateString()}</div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <span className="px-2 py-1 rounded-full text-xs bg-red-500/20 text-red-500">
                              No Plan
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {new Date(user.registrationDate).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'Never'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.status === 'active' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setSelectedUser(user)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-yellow-400 hover:text-yellow-300"
                              onClick={() => {
                                // Store payment reminder for user
                                const reminders = JSON.parse(localStorage.getItem('paymentReminders') || '{}')
                                reminders[user.userId] = {
                                  message: 'Payment reminder: Please complete your membership payment to continue enjoying our services.',
                                  timestamp: new Date().toISOString(),
                                  sentBy: 'admin'
                                }
                                localStorage.setItem('paymentReminders', JSON.stringify(reminders))
                                alert(`Payment reminder sent to ${user.name} (${user.email})`)
                              }}
                            >
                              💰
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-red-400 hover:text-red-300"
                              onClick={() => setDeleteConfirm(user.userId)}
                            >
                              🗑️
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Live Tracking Tab */}
        {activeTab === 'tracking' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Live Tracking Data</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Live Gym Capacity */}
              <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <Users className="h-6 w-6 text-primary-500 mr-2" />
                    Live Gym Capacity
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>Updated {new Date().toLocaleTimeString()}</span>
                  </div>
                </div>

                {/* Main Capacity Display */}
                <div className="text-center mb-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
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
                        strokeDasharray="58.75, 100"
                        className="transition-all duration-1000 ease-in-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-500">47</div>
                        <div className="text-xs text-gray-400">/ 80</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm font-semibold text-yellow-500">Moderate Capacity</span>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                </div>

                {/* Area Breakdown */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center">
                    <Activity className="h-4 w-4 text-primary-500 mr-2" />
                    Area Breakdown
                  </h4>
                  {[
                    { name: 'Cardio Zone', current: 12, max: 20, color: 'bg-blue-500' },
                    { name: 'Weight Training', current: 18, max: 25, color: 'bg-red-500' },
                    { name: 'Functional Area', current: 8, max: 15, color: 'bg-green-500' },
                    { name: 'Group Classes', current: 9, max: 20, color: 'bg-purple-500' },
                  ].map((area, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-300">{area.name}</span>
                        <span className="text-gray-400">{area.current}/{area.max}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div
                          className={`${area.color} h-1.5 rounded-full transition-all duration-500`}
                          style={{ width: `${(area.current / area.max) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Tracking Logs */}
              <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Activity className="h-6 w-6 text-primary-500 mr-2" />
                  Live Tracking Logs
                </h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {[
                    { id: 1, userName: 'John Doe', equipmentName: 'Treadmill #3', action: 'started', timestamp: new Date(Date.now() - 2 * 60000) },
                    { id: 2, userName: 'Sarah Smith', equipmentName: 'Bench Press #1', action: 'completed', timestamp: new Date(Date.now() - 5 * 60000) },
                    { id: 3, userName: 'Mike Johnson', equipmentName: 'Rowing Machine #2', action: 'started', timestamp: new Date(Date.now() - 8 * 60000) },
                    { id: 4, userName: 'Emma Wilson', equipmentName: 'Leg Press #1', action: 'completed', timestamp: new Date(Date.now() - 12 * 60000) },
                    { id: 5, userName: 'Alex Brown', equipmentName: 'Cable Machine #4', action: 'started', timestamp: new Date(Date.now() - 15 * 60000) },
                    { id: 6, userName: 'Lisa Davis', equipmentName: 'Elliptical #2', action: 'completed', timestamp: new Date(Date.now() - 18 * 60000) },
                    { id: 7, userName: 'Tom Wilson', equipmentName: 'Squat Rack #3', action: 'started', timestamp: new Date(Date.now() - 22 * 60000) },
                    { id: 8, userName: 'Maria Garcia', equipmentName: 'Lat Pulldown #1', action: 'completed', timestamp: new Date(Date.now() - 25 * 60000) },
                    { id: 9, userName: 'David Lee', equipmentName: 'Stationary Bike #5', action: 'started', timestamp: new Date(Date.now() - 28 * 60000) },
                    { id: 10, userName: 'Jennifer Chen', equipmentName: 'Smith Machine #2', action: 'completed', timestamp: new Date(Date.now() - 32 * 60000) }
                  ].map((log) => (
                    <div key={log.id} className="flex items-center justify-between p-3 bg-dark-200 rounded-lg">
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">{log.userName}</div>
                        <div className="text-gray-400 text-xs">{log.equipmentName}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          log.action === 'started' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                        }`}>
                          {log.action}
                        </span>
                        <div className="text-gray-500 text-xs">
                          {log.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}



        {/* Fees Management Tab */}
        {activeTab === 'fees' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Fees Management</h2>
            
            <div className="space-y-6">
              {/* Financial Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Monthly Revenue</h3>
                    <CreditCard className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    $18,450
                  </div>
                  <div className="text-sm text-green-500">
                    +12.5% from last month
                  </div>
                  <div className="mt-3 text-xs text-gray-400">
                    15 active subscriptions
                  </div>
                </div>
                
                <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Pending Amount</h3>
                    <Clock className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    $2,340
                  </div>
                  <div className="text-sm text-yellow-500">
                    3 overdue payments
                  </div>
                </div>
                
                <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Collection Rate</h3>
                    <TrendingUp className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    94.2%
                  </div>
                  <div className="text-sm text-green-500">
                    Above target
                  </div>
                </div>
                
                <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Total Members</h3>
                    <Users className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    127
                  </div>
                  <div className="text-sm text-blue-500">
                    +8 this month
                  </div>
                </div>
              </div>
              
              {/* Plan Distribution */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-4">Plan Distribution</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span className="text-gray-300 text-sm">Basic Plan</span>
                      </div>
                      <span className="text-white font-medium">45 users</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-gray-300 text-sm">Premium Plan</span>
                      </div>
                      <span className="text-white font-medium">52 users</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                        <span className="text-gray-300 text-sm">Elite Plan</span>
                      </div>
                      <span className="text-white font-medium">30 users</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-4">Payment Methods</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Credit Card</span>
                      <span className="text-white font-medium">78%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Bank Transfer</span>
                      <span className="text-white font-medium">15%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Cash</span>
                      <span className="text-white font-medium">7%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <div className="text-white font-medium">5 new payments</div>
                      <div className="text-gray-400">Today</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-white font-medium">2 plan upgrades</div>
                      <div className="text-gray-400">Yesterday</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-white font-medium">1 refund processed</div>
                      <div className="text-gray-400">2 days ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment History Table */}
            <div className="bg-dark-100 rounded-xl border border-gray-800 overflow-hidden">
              <div className="px-6 py-4 bg-dark-200">
                <h3 className="text-lg font-semibold text-white">Payment History</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-dark-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Plan/Service</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Payment Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      { userName: 'John Doe', planName: 'Premium Plan', amount: 129, type: 'plan', paymentDate: '2024-01-15T10:30:00Z' },
                      { userName: 'Sarah Smith', planName: 'Basic Plan', amount: 89, type: 'plan', paymentDate: '2024-01-14T14:20:00Z' },
                      { userName: 'Mike Johnson', planName: 'Elite Plan', amount: 199, type: 'plan', paymentDate: '2024-01-13T09:15:00Z' },
                      { userName: 'Emma Wilson', planName: 'Premium Plan', amount: 129, type: 'plan', paymentDate: '2024-01-12T16:45:00Z' },
                      { userName: 'Alex Brown', planName: 'Basic Plan', amount: 89, type: 'plan', paymentDate: '2024-01-11T11:30:00Z' },
                      { userName: 'Lisa Davis', planName: 'Elite Plan', amount: 199, type: 'plan', paymentDate: '2024-01-10T13:20:00Z' },
                      { userName: 'Tom Wilson', planName: 'Premium Plan', amount: 129, type: 'plan', paymentDate: '2024-01-09T08:45:00Z' },
                      { userName: 'Maria Garcia', planName: 'Basic Plan', amount: 89, type: 'plan', paymentDate: '2024-01-08T15:10:00Z' },
                      { userName: 'David Lee', planName: 'Elite Plan', amount: 199, type: 'plan', paymentDate: '2024-01-07T12:30:00Z' },
                      { userName: 'Jennifer Chen', planName: 'Premium Plan', amount: 129, type: 'plan', paymentDate: '2024-01-06T17:20:00Z' },
                      { userName: 'Kevin Martinez', planName: 'Basic Plan', amount: 89, type: 'plan', paymentDate: '2024-01-05T10:15:00Z' },
                      { userName: 'Amanda Taylor', planName: 'Elite Plan', amount: 199, type: 'plan', paymentDate: '2024-01-04T14:40:00Z' },
                      { userName: 'Robert Brown', planName: 'Premium Plan', amount: 129, type: 'plan', paymentDate: '2024-01-03T09:25:00Z' },
                      { userName: 'Jessica Lee', planName: 'Basic Plan', amount: 89, type: 'plan', paymentDate: '2024-01-02T16:50:00Z' },
                      { userName: 'Michael Davis', planName: 'Elite Plan', amount: 199, type: 'plan', paymentDate: '2024-01-01T11:35:00Z' }
                    ].map((payment, index) => (
                      <tr key={index} className="hover:bg-dark-200/50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{payment.userName}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-400">{payment.planName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white font-medium">${payment.amount}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-500">
                            {payment.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {new Date(payment.paymentDate).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-500">
                            paid
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-gray-500 text-sm">No actions</span>
                        </td>
                      </tr>
                    ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Plan Tracking Tab */}
        {activeTab === 'plans' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Plan Tracking</h2>
            
            {planTrackingManagementLogs.length > 0 && (
              <div className="space-y-6">
                {/* Plan Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">Active Plans</h3>
                      <Activity className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="text-3xl font-bold text-white">
                      9
                    </div>
                  </div>
                  
                  <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">Completed Goals</h3>
                      <TrendingUp className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="text-3xl font-bold text-white">
                      28
                    </div>
                  </div>
                  
                  <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">Avg. Progress</h3>
                      <Calendar className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className="text-3xl font-bold text-white">
                      75%
                    </div>
                  </div>
                  
                  <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">New Plans</h3>
                      <Users className="h-6 w-6 text-yellow-500" />
                    </div>
                    <div className="text-3xl font-bold text-white">
                      12
                    </div>
                  </div>
                </div>
                
                {/* User Progress Section */}
            <div className="bg-dark-100 rounded-xl border border-gray-800 overflow-hidden">
              <div className="px-6 py-4 bg-dark-200">
                <h3 className="text-lg font-semibold text-white">User Progress Tracking</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-dark-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Plan Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Recent Plan Update</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Progress</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Workouts</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Goals</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Progress Bar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      { name: 'Alex Johnson', email: 'alex@example.com', hasActivePlan: true, program: 'Weight Loss Program', status: 'Excellent', progress: 92, workouts: 18, goals: 3 },
                      { name: 'Sarah Williams', email: 'sarah@example.com', hasActivePlan: true, program: 'Strength Training', status: 'On Track', progress: 78, workouts: 15, goals: 2 },
                      { name: 'Mike Chen', email: 'mike@example.com', hasActivePlan: true, program: 'Cardio Endurance', status: 'Good Progress', progress: 65, workouts: 12, goals: 2 },
                      { name: 'Emma Davis', email: 'emma@example.com', hasActivePlan: true, program: 'Muscle Building', status: 'Excellent', progress: 88, workouts: 20, goals: 4 },
                      { name: 'David Rodriguez', email: 'david@example.com', hasActivePlan: false, program: 'Flexibility & Mobility', status: 'On Track', progress: 72, workouts: 8, goals: 1 },
                      { name: 'Lisa Thompson', email: 'lisa@example.com', hasActivePlan: true, program: 'HIIT Training', status: 'Excellent', progress: 95, workouts: 22, goals: 3 },
                      { name: 'James Wilson', email: 'james@example.com', hasActivePlan: true, program: 'Powerlifting', status: 'Good Progress', progress: 58, workouts: 10, goals: 2 },
                      { name: 'Maria Garcia', email: 'maria@example.com', hasActivePlan: true, program: 'Yoga & Wellness', status: 'On Track', progress: 81, workouts: 16, goals: 2 },
                      { name: 'Robert Brown', email: 'robert@example.com', hasActivePlan: false, program: 'CrossFit Training', status: 'Needs Attention', progress: 42, workouts: 6, goals: 1 },
                      { name: 'Jennifer Lee', email: 'jennifer@example.com', hasActivePlan: true, program: 'Marathon Prep', status: 'Excellent', progress: 89, workouts: 19, goals: 3 },
                      { name: 'Kevin Martinez', email: 'kevin@example.com', hasActivePlan: true, program: 'Bodybuilding', status: 'On Track', progress: 76, workouts: 14, goals: 3 },
                      { name: 'Amanda Taylor', email: 'amanda@example.com', hasActivePlan: false, program: 'Functional Fitness', status: 'Good Progress', progress: 63, workouts: 11, goals: 2 }
                    ].map((user, index) => (
                        <tr key={index} className="hover:bg-dark-200/50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-white">{user.name}</div>
                            <div className="text-sm text-gray-400">{user.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              user.hasActivePlan ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                            }`}>
                              {user.hasActivePlan ? 'Active Member' : 'No Plan'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-white">{user.program}</div>
                            <span className={`px-2 py-1 rounded-full text-xs mt-1 inline-block ${
                              user.status === 'Excellent' ? 'bg-green-500/20 text-green-500' :
                              user.status === 'On Track' ? 'bg-blue-500/20 text-blue-500' :
                              user.status === 'Good Progress' ? 'bg-yellow-500/20 text-yellow-500' :
                              'bg-red-500/20 text-red-500'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-2xl font-bold text-white">{user.progress}%</div>
                            <div className="text-xs text-gray-400">Overall Progress</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg font-bold text-white">{user.workouts}</div>
                            <div className="text-xs text-gray-400">Completed</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg font-bold text-white">{user.goals}</div>
                            <div className="text-xs text-gray-400">Active Goals</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="w-32">
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-400">Fitness Goal</span>
                                <span className="text-white">{user.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-700 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full transition-all duration-500 ${
                                    user.progress >= 80 ? 'bg-green-500' :
                                    user.progress >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`}
                                  style={{ width: `${user.progress}%` }}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

              </div>
            )}
            
            {/* Plan Subscriptions Table */}
            <div className="bg-dark-100 rounded-xl border border-gray-800 overflow-hidden">
              <div className="px-6 py-4 bg-dark-200">
                <h3 className="text-lg font-semibold text-white">Plan Subscriptions</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-dark-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Plan</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Start Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">End Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {planLogs.slice().reverse().map((plan) => (
                      <tr key={plan.id} className="hover:bg-dark-200/50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{plan.userName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{plan.planName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">${plan.planPrice}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {new Date(plan.startDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {new Date(plan.endDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            plan.status === 'active' ? 'bg-green-500/20 text-green-500' : 
                            plan.status === 'expired' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-red-500/20 text-red-500'
                          }`}>
                            {plan.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-100 rounded-xl p-6 w-full max-w-md border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">Delete User</h3>
            <p className="text-gray-400 mb-6">
              Are you sure you want to delete this user? This action cannot be undone and will remove all user data including login credentials.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => setDeleteConfirm(null)}
                variant="ghost"
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleDeleteUser(deleteConfirm)}
                className="flex-1 bg-red-500 hover:bg-red-600"
              >
                Delete User
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* User Detail Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-100 rounded-xl p-6 w-full max-w-2xl border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">User Details</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Name</label>
                  <p className="text-white">{selectedUser.name}</p>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Email</label>
                  <p className="text-white">{selectedUser.email}</p>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Phone</label>
                  <p className="text-white">{selectedUser.phone}</p>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Status</label>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    selectedUser.status === 'active' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                  }`}>
                    {selectedUser.status}
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Login Credentials</label>
                <div className="bg-dark-200 p-3 rounded">
                  <p className="text-white text-sm">Email: {selectedUser.loginCredentials.email}</p>
                  <p className="text-white text-sm">Password: {selectedUser.loginCredentials.password}</p>
                </div>
              </div>
              {selectedUser.hasActivePlan && selectedUser.currentPlan && (
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Current Plan</label>
                  <div className="bg-dark-200 p-3 rounded">
                    <p className="text-white text-sm">Plan: {selectedUser.currentPlan.name}</p>
                    <p className="text-white text-sm">Price: ${selectedUser.currentPlan.price}/month</p>
                    <p className="text-white text-sm">Start Date: {new Date(selectedUser.currentPlan.startDate).toLocaleDateString()}</p>
                    <p className="text-white text-sm">End Date: {new Date(selectedUser.currentPlan.endDate).toLocaleDateString()}</p>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Registration Date</label>
                  <p className="text-white">{new Date(selectedUser.registrationDate).toLocaleString()}</p>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Last Login</label>
                  <p className="text-white">{selectedUser.lastLogin ? new Date(selectedUser.lastLogin).toLocaleString() : 'Never'}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button onClick={() => setSelectedUser(null)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard