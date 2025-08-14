'use client'

import { useState } from 'react'
import { TrendingUp, Target, Award, Calendar, User, BarChart3 } from 'lucide-react'

const ProgressTrackingCard = () => {
  const [selectedMember, setSelectedMember] = useState(0)

  const members = [
    {
      name: 'John Doe',
      program: 'Weight Loss Program',
      progress: 85,
      startWeight: 85,
      currentWeight: 78,
      targetWeight: 75,
      workoutsCompleted: 24,
      totalWorkouts: 30,
      achievements: ['Lost 7kg', 'Completed 80% workouts', 'Improved endurance']
    },
    {
      name: 'Sarah Smith',
      program: 'Muscle Building',
      progress: 62,
      startWeight: 55,
      currentWeight: 58,
      targetWeight: 62,
      workoutsCompleted: 18,
      totalWorkouts: 28,
      achievements: ['Gained 3kg muscle', 'Increased bench press', 'Consistent attendance']
    }
  ]

  const member = members[selectedMember]

  return (
    <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <BarChart3 className="h-6 w-6 text-purple-500 mr-2" />
          Progress Tracking
        </h3>
        <select 
          value={selectedMember}
          onChange={(e) => setSelectedMember(Number(e.target.value))}
          className="bg-dark-200 text-white px-3 py-1 rounded border border-gray-700 text-sm"
        >
          {members.map((m, i) => (
            <option key={i} value={i}>{m.name}</option>
          ))}
        </select>
      </div>

      <div className="space-y-6">
        <div className="bg-dark-200 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <User className="h-5 w-5 text-purple-500" />
            <div>
              <h4 className="text-white font-semibold">{member.name}</h4>
              <p className="text-gray-400 text-sm">{member.program}</p>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-300">Overall Progress</span>
              <span className="text-purple-500 font-semibold">{member.progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${member.progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-dark-200 rounded-lg p-4 text-center">
            <Target className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{member.currentWeight}kg</div>
            <div className="text-xs text-gray-400">Current Weight</div>
            <div className="text-xs text-green-500 mt-1">
              {member.startWeight > member.currentWeight ? '-' : '+'}{Math.abs(member.startWeight - member.currentWeight)}kg
            </div>
          </div>
          
          <div className="bg-dark-200 rounded-lg p-4 text-center">
            <Calendar className="h-6 w-6 text-green-500 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{member.workoutsCompleted}/{member.totalWorkouts}</div>
            <div className="text-xs text-gray-400">Workouts</div>
            <div className="text-xs text-blue-500 mt-1">
              {Math.round((member.workoutsCompleted / member.totalWorkouts) * 100)}% Complete
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-3 flex items-center">
            <Award className="h-4 w-4 text-yellow-500 mr-2" />
            Recent Achievements
          </h5>
          <div className="space-y-2">
            {member.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-2 bg-dark-200 rounded p-2">
                <Award className="h-4 w-4 text-yellow-500" />
                <span className="text-gray-300 text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-700">
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Update Plan
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProgressTrackingCard