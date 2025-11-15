'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        router.push('/auth')
        return
      }

      setUser(session.user)
      setLoading(false)
    }

    checkAuth()
  }, [router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Voice Agent Dashboard
          </h1>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome! 🎉</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Email:</p>
              <p className="font-medium">{user?.email}</p>
            </div>

            <div>
              <p className="text-gray-600">User ID:</p>
              <p className="font-mono text-sm">{user?.id}</p>
            </div>

            <div className="pt-4 border-t">
              <p className="text-gray-500 text-sm">
                ✅ Authentication working!
              </p>
              <p className="text-gray-500 text-sm">
                Next: Create your first voice agent
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-indigo-50 rounded-lg p-6">
            <div className="text-indigo-600 text-3xl font-bold mb-2">0</div>
            <div className="text-gray-600">Voice Agents</div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="text-purple-600 text-3xl font-bold mb-2">0</div>
            <div className="text-gray-600">Total Calls</div>
          </div>
          
          <div className="bg-pink-50 rounded-lg p-6">
            <div className="text-pink-600 text-3xl font-bold mb-2">30</div>
            <div className="text-gray-600">Trial Days Left</div>
          </div>
        </div>
      </main>
    </div>
  )
}