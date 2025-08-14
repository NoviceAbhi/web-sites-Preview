'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, Eye, EyeOff } from 'lucide-react'

const AdminNavLink = () => {
  const [showAdminLink, setShowAdminLink] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setShowAdminLink(!showAdminLink)}
        className="text-gray-400 hover:text-white transition-colors p-2"
        title="Admin Access"
      >
        {showAdminLink ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </button>
      
      {showAdminLink && (
        <div className="absolute right-0 top-full mt-2 bg-dark-100 border border-gray-800 rounded-lg p-2 z-50">
          <Link
            href="/admin/login"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded whitespace-nowrap"
          >
            <Shield className="h-4 w-4" />
            <span>Admin Panel</span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default AdminNavLink