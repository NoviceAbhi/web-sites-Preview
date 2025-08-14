export interface Admin {
  id: string
  username: string
  email: string
  password: string
  role: 'super_admin' | 'admin'
}

export interface UserRegistrationLog {
  id: string
  userId: string
  name: string
  email: string
  phone: string
  registrationDate: string
  loginCredentials: {
    email: string
    password: string
  }
  lastLogin?: string
  status: 'active' | 'inactive'
  hasActivePlan?: boolean
  currentPlan?: {
    name: string
    price: number
    startDate: string
    endDate: string
  } | null
}

export interface LiveTrackingData {
  id: string
  userId: string
  userName: string
  equipmentId: string
  equipmentName: string
  action: 'booked' | 'unbooked'
  timestamp: string
}

export interface FeesData {
  id: string
  userId: string
  userName: string
  planName: string
  amount: number
  type: 'plan' | 'addon'
  paymentDate: string
  status: 'paid' | 'pending' | 'failed'
}

export interface PlanTrackingData {
  id: string
  userId: string
  userName: string
  planName: string
  planPrice: number
  startDate: string
  endDate: string
  status: 'active' | 'expired' | 'cancelled'
  addons: string[]
}

export interface HeaderTrackingData {
  id: string
  userId?: string
  userName?: string
  action: 'navbar_live_tracking_click' | 'login_attempt' | 'logout' | 'profile_view' | 'join_now_click'
  timestamp: string
  details?: string
  userAgent?: string
  location?: string
}

export interface GymCapacityData {
  id: string
  timestamp: string
  totalCapacity: number
  maxCapacity: number
  capacityPercentage: number
  status: 'Low' | 'Moderate' | 'High'
  areas: {
    name: string
    current: number
    max: number
    percentage: number
  }[]
  equipment: {
    category: string
    available: number
    total: number
    status: 'good' | 'moderate' | 'busy'
  }[]
}

export interface FeesManagementData {
  id: string
  timestamp: string
  monthlyRevenue: number
  revenueGrowth: number
  pendingAmount: number
  collectionRate: number
}

export interface PlanTrackingManagementData {
  id: string
  timestamp: string
  activePlans: number
  completedGoals: number
  avgProgress: number
  newPlans: number
  recentUpdates: {
    name: string
    program: string
    status: 'On Track' | 'Good Progress' | 'Excellent' | 'Needs Focus'
    progress: number
  }[]
}

// Default admin credentials
const DEFAULT_ADMIN = {
  id: 'admin_1',
  username: 'admin',
  email: 'admin@fitnesspro.com',
  password: 'admin123',
  role: 'super_admin' as const
}

export const adminLogin = (username: string, password: string): Admin | null => {
  if (typeof window === 'undefined') return null
  
  // Check default admin
  if (username === DEFAULT_ADMIN.username && password === DEFAULT_ADMIN.password) {
    const adminSession = { ...DEFAULT_ADMIN }
    localStorage.setItem('adminSession', JSON.stringify(adminSession))
    return adminSession
  }
  
  return null
}

export const getCurrentAdmin = (): Admin | null => {
  if (typeof window !== 'undefined') {
    const adminData = localStorage.getItem('adminSession')
    return adminData ? JSON.parse(adminData) : null
  }
  return null
}

export const adminLogout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('adminSession')
  }
}

// User registration logging
export const logUserRegistration = (user: any) => {
  if (typeof window === 'undefined') return
  
  const registrationLog: UserRegistrationLog = {
    id: `reg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    registrationDate: new Date().toISOString(),
    loginCredentials: {
      email: user.email,
      password: user.password
    },
    status: 'active'
  }
  
  const existingLogs = getStoredUserLogs()
  existingLogs.push(registrationLog)
  localStorage.setItem('userRegistrationLogs', JSON.stringify(existingLogs))
}

// Live tracking logging
export const logLiveTracking = (userId: string, userName: string, equipmentId: string, equipmentName: string, action: 'booked' | 'unbooked') => {
  if (typeof window === 'undefined') return
  
  const trackingLog: LiveTrackingData = {
    id: `track_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    userName,
    equipmentId,
    equipmentName,
    action,
    timestamp: new Date().toISOString()
  }
  
  const existingLogs = getStoredTrackingLogs()
  existingLogs.push(trackingLog)
  localStorage.setItem('liveTrackingLogs', JSON.stringify(existingLogs))
}

// Fees logging
export const logFeesData = (userId: string, userName: string, planName: string, amount: number, type: 'plan' | 'addon') => {
  if (typeof window === 'undefined') return
  
  const feesLog: FeesData = {
    id: `fees_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    userName,
    planName,
    amount,
    type,
    paymentDate: new Date().toISOString(),
    status: 'paid'
  }
  
  const existingLogs = getStoredFeesLogs()
  existingLogs.push(feesLog)
  localStorage.setItem('feesLogs', JSON.stringify(existingLogs))
}

// Plan tracking logging
export const logPlanTracking = (userId: string, userName: string, planName: string, planPrice: number) => {
  if (typeof window === 'undefined') return
  
  const planLog: PlanTrackingData = {
    id: `plan_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    userName,
    planName,
    planPrice,
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
    status: 'active',
    addons: []
  }
  
  const existingLogs = getStoredPlanLogs()
  existingLogs.push(planLog)
  localStorage.setItem('planTrackingLogs', JSON.stringify(existingLogs))
}

// Header tracking logging
export const logHeaderTracking = (action: HeaderTrackingData['action'], userId?: string, userName?: string, details?: string) => {
  if (typeof window === 'undefined') return
  
  const headerLog: HeaderTrackingData = {
    id: `header_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    userName,
    action,
    timestamp: new Date().toISOString(),
    details,
    userAgent: navigator.userAgent,
    location: window.location.pathname
  }
  
  const existingLogs = getStoredHeaderLogs()
  existingLogs.push(headerLog)
  localStorage.setItem('headerTrackingLogs', JSON.stringify(existingLogs))
}

// Update user last login
export const updateUserLastLogin = (userId: string) => {
  if (typeof window === 'undefined') return
  
  const logs = getStoredUserLogs()
  const updatedLogs = logs.map(log => 
    log.userId === userId 
      ? { ...log, lastLogin: new Date().toISOString() }
      : log
  )
  localStorage.setItem('userRegistrationLogs', JSON.stringify(updatedLogs))
}

// Get all users from localStorage with plan status
export const getAllUsersWithPlans = (): UserRegistrationLog[] => {
  if (typeof window === 'undefined') return []
  
  // Get users from main storage
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const registrationLogs = JSON.parse(localStorage.getItem('userRegistrationLogs') || '[]')
  const planLogs = getStoredPlanLogs()
  
  // Create a map of existing registration logs
  const logMap = new Map(registrationLogs.map((log: UserRegistrationLog) => [log.userId, log]))
  
  // Process all users and merge with registration logs
  const allUsers = users.map((user: any) => {
    const existingLog = logMap.get(user.id)
    const userPlans = planLogs.filter(plan => plan.userId === user.id && plan.status === 'active')
    let hasActivePlan = userPlans.length > 0
    let currentPlan = userPlans[0] // Get the first active plan
    
    // Special handling for vohrraoverseas@gmail.com
    if (user.email === 'vohrraoverseas@gmail.com') {
      hasActivePlan = true
      currentPlan = {
        planName: 'Premium Plan',
        planPrice: 59,
        startDate: new Date().toISOString(),
        endDate: new Date('2025-09-20').toISOString()
      }
    }
    
    return {
      id: existingLog?.id || `reg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone || 'N/A',
      registrationDate: existingLog?.registrationDate || new Date().toISOString(),
      loginCredentials: {
        email: user.email,
        password: user.password
      },
      lastLogin: existingLog?.lastLogin,
      status: existingLog?.status || 'active',
      hasActivePlan,
      currentPlan: currentPlan ? {
        name: currentPlan.planName,
        price: currentPlan.planPrice,
        startDate: currentPlan.startDate,
        endDate: currentPlan.endDate
      } : null
    }
  })
  
  return allUsers
}

// Getter functions
export const getStoredUserLogs = (): UserRegistrationLog[] => {
  if (typeof window === 'undefined') return []
  const logs = localStorage.getItem('userRegistrationLogs')
  return logs ? JSON.parse(logs) : []
}

export const getStoredTrackingLogs = (): LiveTrackingData[] => {
  if (typeof window === 'undefined') return []
  const logs = localStorage.getItem('liveTrackingLogs')
  return logs ? JSON.parse(logs) : []
}

export const getStoredFeesLogs = (): FeesData[] => {
  if (typeof window === 'undefined') return []
  const logs = localStorage.getItem('feesLogs')
  return logs ? JSON.parse(logs) : []
}

export const getStoredPlanLogs = (): PlanTrackingData[] => {
  if (typeof window === 'undefined') return []
  const logs = localStorage.getItem('planTrackingLogs')
  return logs ? JSON.parse(logs) : []
}

export const getStoredHeaderLogs = (): HeaderTrackingData[] => {
  if (typeof window === 'undefined') return []
  const logs = localStorage.getItem('headerTrackingLogs')
  return logs ? JSON.parse(logs) : []
}

export const logGymCapacity = () => {
  if (typeof window === 'undefined') return
  
  const capacityData: GymCapacityData = {
    id: `capacity_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: new Date().toISOString(),
    totalCapacity: 40,
    maxCapacity: 80,
    capacityPercentage: 50,
    status: 'Moderate',
    areas: [
      { name: 'Cardio Zone', current: 12, max: 20, percentage: 60 },
      { name: 'Weight Training', current: 18, max: 25, percentage: 72 },
      { name: 'Functional Area', current: 8, max: 15, percentage: 53 },
      { name: 'Group Classes', current: 9, max: 20, percentage: 45 }
    ],
    equipment: [
      { category: 'Treadmills', available: 8, total: 12, status: 'good' },
      { category: 'Ellipticals', available: 5, total: 8, status: 'moderate' },
      { category: 'Weight Stations', available: 15, total: 20, status: 'good' },
      { category: 'Rowing Machines', available: 2, total: 6, status: 'busy' }
    ]
  }
  
  const existingLogs = getStoredCapacityLogs()
  existingLogs.push(capacityData)
  
  if (existingLogs.length > 100) {
    existingLogs.splice(0, existingLogs.length - 100)
  }
  
  localStorage.setItem('gymCapacityLogs', JSON.stringify(existingLogs))
}

export const getStoredCapacityLogs = (): GymCapacityData[] => {
  if (typeof window === 'undefined') return []
  const logs = localStorage.getItem('gymCapacityLogs')
  return logs ? JSON.parse(logs) : []
}

export const logFeesManagement = () => {
  if (typeof window === 'undefined') return
  
  const allUsers = getAllUsersWithPlans()
  const feesLogs = getStoredFeesLogs()
  const usersWithPlans = allUsers.filter(user => user.hasActivePlan)
  
  // Calculate actual revenue from paid history only
  const monthlyRevenue = feesLogs.reduce((sum, fee) => sum + fee.amount, 0)
  

  
  // Add sample payments if not already exists
  const existingFeesLogs = getStoredFeesLogs()
  
  // Remove John Smith and Sarah Johnson entries if they exist
  const filteredFeesLogs = existingFeesLogs.filter(fee => 
    fee.userName !== 'John Smith' && fee.userName !== 'Sarah Johnson'
  )
  
  // Add Abhishek Bhardwaj plan payment
  const abhishekUser = allUsers.find(user => user.name === 'Abhishek Bhardwaj')
  if (abhishekUser && !filteredFeesLogs.some(fee => fee.userName === 'Abhishek Bhardwaj' && fee.type === 'plan')) {
    filteredFeesLogs.push({
      id: `fees_${Date.now()}_abhishek_plan`,
      userId: abhishekUser.userId,
      userName: 'Abhishek Bhardwaj',
      planName: 'Premium Plan',
      amount: 59,
      type: 'plan',
      paymentDate: new Date().toISOString(),
      status: 'paid'
    })
  }
  
  localStorage.setItem('feesLogs', JSON.stringify(filteredFeesLogs))
  
  // Calculate real collection metrics
  const totalUsers = allUsers.length
  const paidUsers = feesLogs.filter(fee => fee.status === 'paid').length
  const pendingUsers = feesLogs.filter(fee => fee.status === 'pending').length
  const realCollectionRate = totalUsers > 0 ? Math.round((paidUsers / totalUsers) * 100) : 0
  
  // Calculate pending amount from users without plans
  const pendingAmount = 0 // Cleared pending amount
  
  const feesData: FeesManagementData = {
    id: `fees_mgmt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: new Date().toISOString(),
    monthlyRevenue: monthlyRevenue || 0,
    revenueGrowth: monthlyRevenue > 0 ? 8.2 : 0,
    pendingAmount: pendingAmount,
    collectionRate: realCollectionRate
  }
  
  // Reset and create new logs
  localStorage.setItem('feesManagementLogs', JSON.stringify([feesData]))
}

export const getStoredFeesManagementLogs = (): FeesManagementData[] => {
  if (typeof window === 'undefined') return []
  const logs = localStorage.getItem('feesManagementLogs')
  return logs ? JSON.parse(logs) : []
}

export const logPlanTrackingManagement = () => {
  if (typeof window === 'undefined') return
  
  const allUsers = getAllUsersWithPlans()
  const planLogs = getStoredPlanLogs()
  const usersWithPlans = allUsers.filter(user => user.hasActivePlan)
  const activePlans = planLogs.filter(plan => plan.status === 'active').length
  
  // Generate recent updates from actual users with plans
  const programs = ['Weight Loss Program', 'Muscle Building', 'Cardio Fitness', 'Strength Training', 'General Fitness']
  const statuses: ('On Track' | 'Good Progress' | 'Excellent' | 'Needs Focus')[] = ['On Track', 'Good Progress', 'Excellent', 'Needs Focus']
  
  const recentUpdates = usersWithPlans.slice(0, 6).map(user => ({
    name: user.name,
    program: programs[Math.floor(Math.random() * programs.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    progress: Math.floor(Math.random() * 40) + 60 // 60-100% progress
  }))
  
  const planData: PlanTrackingManagementData = {
    id: `plan_mgmt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: new Date().toISOString(),
    activePlans: activePlans || usersWithPlans.length,
    completedGoals: Math.floor(activePlans * 0.6), // 60% completion rate
    avgProgress: recentUpdates.length > 0 ? Math.floor(recentUpdates.reduce((sum, update) => sum + update.progress, 0) / recentUpdates.length) : 0,
    newPlans: Math.floor(activePlans * 0.1) || 1, // 10% new plans
    recentUpdates
  }
  
  // Reset and create new logs
  localStorage.setItem('planTrackingManagementLogs', JSON.stringify([planData]))
}

export const getStoredPlanTrackingManagementLogs = (): PlanTrackingManagementData[] => {
  if (typeof window === 'undefined') return []
  const logs = localStorage.getItem('planTrackingManagementLogs')
  return logs ? JSON.parse(logs) : []
}

if (typeof window !== 'undefined') {
  setInterval(() => {
    logGymCapacity()
    logFeesManagement()
    logPlanTrackingManagement()
  }, 5 * 60 * 1000)
  
  setTimeout(() => {
    logGymCapacity()
    logFeesManagement()
    logPlanTrackingManagement()
  }, 1000)
}

// Delete user function
export const deleteUser = (userId: string): boolean => {
  if (typeof window === 'undefined') return false
  
  try {
    // Remove from main users array
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const updatedUsers = users.filter((user: any) => user.id !== userId)
    localStorage.setItem('users', JSON.stringify(updatedUsers))
    
    // Remove from user registration logs
    const userLogs = getStoredUserLogs()
    const updatedUserLogs = userLogs.filter(log => log.userId !== userId)
    localStorage.setItem('userRegistrationLogs', JSON.stringify(updatedUserLogs))
    
    // Remove user's plan data
    localStorage.removeItem(`userPlan_${userId}`)
    
    // Remove from tracking logs
    const trackingLogs = getStoredTrackingLogs()
    const updatedTrackingLogs = trackingLogs.filter(log => log.userId !== userId)
    localStorage.setItem('liveTrackingLogs', JSON.stringify(updatedTrackingLogs))
    
    // Remove from fees logs
    const feesLogs = getStoredFeesLogs()
    const updatedFeesLogs = feesLogs.filter(log => log.userId !== userId)
    localStorage.setItem('feesLogs', JSON.stringify(updatedFeesLogs))
    
    // Remove from plan logs
    const planLogs = getStoredPlanLogs()
    const updatedPlanLogs = planLogs.filter(log => log.userId !== userId)
    localStorage.setItem('planTrackingLogs', JSON.stringify(updatedPlanLogs))
    
    // Remove from header logs
    const headerLogs = getStoredHeaderLogs()
    const updatedHeaderLogs = headerLogs.filter(log => log.userId !== userId)
    localStorage.setItem('headerTrackingLogs', JSON.stringify(updatedHeaderLogs))
    
    // Check if deleted user is currently logged in and logout
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null')
    if (currentUser && currentUser.id === userId) {
      localStorage.removeItem('currentUser')
    }
    
    return true
  } catch (error) {
    console.error('Error deleting user:', error)
    return false
  }
}

// Reset and regenerate management data
export const resetManagementData = () => {
  if (typeof window === 'undefined') return
  
  // Clear existing management logs
  localStorage.removeItem('feesManagementLogs')
  localStorage.removeItem('planTrackingManagementLogs')
  
  // Generate fresh data based on actual users
  logFeesManagement()
  logPlanTrackingManagement()
}

// Mark payment as paid function
export const markPaymentAsPaid = (paymentId: string): boolean => {
  if (typeof window === 'undefined') return false
  
  try {
    const feesLogs = getStoredFeesLogs()
    const updatedFeesLogs = feesLogs.map(fee => 
      fee.id === paymentId ? { ...fee, status: 'paid' as const } : fee
    )
    localStorage.setItem('feesLogs', JSON.stringify(updatedFeesLogs))
    return true
  } catch (error) {
    console.error('Error marking payment as paid:', error)
    return false
  }
}

// Analytics functions
export const getAdminAnalytics = () => {
  const allUsers = getAllUsersWithPlans()
  const trackingLogs = getStoredTrackingLogs()
  const feesLogs = getStoredFeesLogs()
  const planLogs = getStoredPlanLogs()
  const headerLogs = getStoredHeaderLogs()
  
  return {
    totalUsers: allUsers.length,
    activeUsers: allUsers.filter(u => u.status === 'active').length,
    totalRevenue: feesLogs.reduce((sum, fee) => sum + fee.amount, 0),
    activePlans: planLogs.filter(p => p.status === 'active').length,
    todayRegistrations: allUsers.filter(u => 
      new Date(u.registrationDate).toDateString() === new Date().toDateString()
    ).length,
    todayBookings: trackingLogs.filter(t => 
      new Date(t.timestamp).toDateString() === new Date().toDateString() && t.action === 'booked'
    ).length,
    todayHeaderActions: headerLogs.filter(h => 
      new Date(h.timestamp).toDateString() === new Date().toDateString()
    ).length,
    totalHeaderActions: headerLogs.length
  }
}