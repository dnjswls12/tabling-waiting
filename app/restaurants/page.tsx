'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Restaurant } from '@/lib/types'

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    fetchRestaurants()
  }, [])

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('/api/restaurants')
      const result = await response.json()

      if (response.ok) {
        setRestaurants(result.data || [])
      } else {
        setError(result.error || '식당 목록을 불러오는데 실패했습니다.')
      }
    } catch (err) {
      setError('네트워크 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">로딩 중...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-orange-600">🍽️ 식당대기</div>
            </Link>
            <Link
              href="/owner/login"
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              점주 로그인
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">식당 목록</h1>
          <p className="text-gray-600">원하는 식당을 선택하여 대기 신청을 해보세요.</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {restaurants.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <div className="text-4xl mb-4">🏪</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">등록된 식당이 없습니다</h3>
            <p className="text-gray-600">곧 다양한 식당들이 추가될 예정입니다.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{restaurant.name}</h3>
                  <p className="text-gray-600 mb-1">{restaurant.cuisine_type}</p>
                  <p className="text-gray-600 mb-1">{restaurant.address}</p>
                  <p className="text-gray-600 mb-4">{restaurant.phone}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      최대 {restaurant.max_capacity}명
                    </span>
                    <Link
                      href={`/restaurants/${restaurant.id}`}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      대기 신청
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}