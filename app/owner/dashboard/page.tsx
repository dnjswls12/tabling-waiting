'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg">로그인이 필요합니다.</div>
          <a href="/owner/login" className="text-orange-600 hover:underline">
            로그인 페이지로 이동
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-orange-600">🍽️ 식당대기</div>
              <span className="ml-4 text-gray-600">점주 대시보드</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">{user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">대기열 관리</h1>
          <p className="text-gray-600">실시간으로 고객 대기열을 관리하세요.</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center text-gray-500 py-12">
            <div className="text-4xl mb-4">📋</div>
            <div className="text-lg font-medium mb-2">대기열이 비어있습니다</div>
            <div className="text-sm">고객이 대기 신청을 하면 여기에 표시됩니다.</div>
          </div>
        </div>
      </main>
    </div>
  )
}