export interface User {
  id: string
  name: string
  email: string
  phone: string
  password: string
  hasActivePlan?: boolean
  currentPlan?: {
    name: string
    price: number
    startDate: string
    endDate: string
  } | null
}

export const registerUser = (userData: Omit<User, 'id'>): User | null => {
  if (typeof window === 'undefined') return null
  
  const users = getStoredUsers()
  const existingUser = users.find(u => u.email.toLowerCase() === userData.email.toLowerCase())
  
  if (existingUser) {
    return null // User already exists
  }
  
  const newUser: User = {
    ...userData,
    email: userData.email.toLowerCase(),
    id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
  
  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))
  
  // Log user registration for admin panel
  try {
    const { logUserRegistration } = require('./admin-auth')
    logUserRegistration(newUser)
  } catch (error) {
    console.log('Admin logging not available')
  }
  
  return newUser
}

export const login = (email: string, password: string): User | null => {
  if (typeof window === 'undefined') return null
  
  const users = getStoredUsers()
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password)
  
  if (user) {
    // Update last login for admin tracking
    try {
      const { updateUserLastLogin } = require('./admin-auth')
      updateUserLastLogin(user.id)
    } catch (error) {
      console.log('Admin logging not available')
    }
    
    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword as User
  }
  return null
}

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('currentUser')
  }
}

export const getCurrentUser = (): User | null => {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('currentUser')
    if (userData) {
      const user = JSON.parse(userData)
      // Check for active plan status
      const userWithPlan = getUserWithPlanStatus(user)
      return userWithPlan
    }
  }
  return null
}

export const getUserWithPlanStatus = (user: User): User => {
  if (typeof window === 'undefined') return user
  
  try {
    const { getStoredPlanLogs } = require('./admin-auth')
    const planLogs = getStoredPlanLogs()
    const userPlans = planLogs.filter((plan: any) => plan.userId === user.id && plan.status === 'active')
    
    // Special handling for vohrraoverseas@gmail.com
    if (user.email === 'vohrraoverseas@gmail.com') {
      return {
        ...user,
        hasActivePlan: true,
        currentPlan: {
          name: 'Premium Plan',
          price: 59,
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
        }
      }
    }
    
    const hasActivePlan = userPlans.length > 0
    const currentPlan = userPlans[0]
    
    return {
      ...user,
      hasActivePlan,
      currentPlan: currentPlan ? {
        name: currentPlan.planName,
        price: currentPlan.planPrice,
        startDate: currentPlan.startDate,
        endDate: currentPlan.endDate
      } : null
    }
  } catch (error) {
    return user
  }
}

export const setCurrentUser = (user: User) => {
  if (typeof window !== 'undefined') {
    const userWithPlan = getUserWithPlanStatus(user)
    localStorage.setItem('currentUser', JSON.stringify(userWithPlan))
  }
}

const getStoredUsers = (): User[] => {
  if (typeof window === 'undefined') return []
  const users = localStorage.getItem('users')
  return users ? JSON.parse(users) : []
}

export const clearAllUsers = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('users')
    localStorage.removeItem('currentUser')
  }
}