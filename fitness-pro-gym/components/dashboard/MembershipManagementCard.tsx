'use client'

import { useState } from 'react'
import { CreditCard, MessageSquare, Bell, CheckCircle, AlertCircle, Clock } from 'lucide-react'

const MembershipManagementCard = () => {
  const [activeTab, setActiveTab] = useState('payments')

  const paymentReminders = [
    { member: 'Alex Brown', amount: '$89', dueDate: 'Today', status: 'pending', phone: '+91 98765 43210' },
    { member: 'Lisa Davis', amount: '$129', dueDate: 'Tomorrow', status: 'sent', phone: '+91 98765 43211' },
    { member: 'Tom Wilson', amount: '$89', dueDate: 'Jan 25', status: 'paid', phone: '+91 98765 43212' },
  ]

  const membershipStatus = [
    { member: 'John Doe', plan: 'Premium', status: 'active', expires: '2024-03-15', autoRenewal: true },
    { member: 'Sarah Smith', plan: 'Basic', status: 'expiring', expires: '2024-01-25', autoRenewal: false },
    { member: 'Mike Johnson', plan: 'Elite', status: 'paused', expires: '2024-02-10', autoRenewal: true },
  ]

  const sendReminder = (member: string, phone: string) => {
    alert(`Payment reminder sent to ${member} at ${phone}`)
  }

  return (
    <div className="bg-dark-100 rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <CreditCard className="h-6 w-6 text-green-500 mr-2" />
          Membership Management
        </h3>
        <div className="text-sm text-gray-400">80% Admin Reduction</div>
      </div>

      <div className="flex space-x-1 mb-6 bg-dark-200 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('payments')}
          className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
            activeTab === 'payments' ? 'bg-green-500 text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Payments
        </button>
        <button
          onClick={() => setActiveTab('status')}
          className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
            activeTab === 'status' ? 'bg-green-500 text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Status
        </button>
      </div>

      {activeTab === 'payments' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white font-semibold">Automated Payment Reminders</h4>
            <div className="flex items-center space-x-2 text-sm text-green-500">
              <MessageSquare className="h-4 w-4" />
              <span>SMS/WhatsApp</span>
            </div>
          </div>
          
          {paymentReminders.map((payment, index) => (
            <div key={index} className="bg-dark-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h5 className="text-white font-medium">{payment.member}</h5>
                  <p className="text-gray-400 text-sm">Due: {payment.dueDate} • {payment.amount}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {payment.status === 'pending' && (
                    <>
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                      <button
                        onClick={() => sendReminder(payment.member, payment.phone)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                      >
                        Send Reminder
                      </button>
                    </>
                  )}
                  {payment.status === 'sent' && (
                    <>
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span className="text-blue-500 text-xs font-medium">Reminder Sent</span>
                    </>
                  )}
                  {payment.status === 'paid' && (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-green-500 text-xs font-medium">Paid</span>
                    </>
                  )}
                </div>
              </div>
              <div className="text-xs text-gray-500">{payment.phone}</div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'status' && (
        <div className="space-y-4">
          <h4 className="text-white font-semibold mb-4">Membership Status Tracking</h4>
          
          {membershipStatus.map((member, index) => (
            <div key={index} className="bg-dark-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h5 className="text-white font-medium">{member.member}</h5>
                  <p className="text-gray-400 text-sm">{member.plan} Plan • Expires: {member.expires}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    member.status === 'active' ? 'bg-green-500/20 text-green-500' :
                    member.status === 'expiring' ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-gray-500/20 text-gray-500'
                  }`}>
                    {member.status}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className={`${member.autoRenewal ? 'text-green-500' : 'text-gray-500'}`}>
                  Auto-renewal: {member.autoRenewal ? 'ON' : 'OFF'}
                </span>
                {member.status === 'expiring' && (
                  <button className="bg-primary-500 hover:bg-primary-600 text-white px-2 py-1 rounded text-xs transition-colors">
                    Renew Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-green-500">94.5%</div>
            <div className="text-xs text-gray-400">Collection Rate</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-500">156</div>
            <div className="text-xs text-gray-400">Active Members</div>
          </div>
          <div>
            <div className="text-lg font-bold text-yellow-500">$1,230</div>
            <div className="text-xs text-gray-400">Pending</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MembershipManagementCard