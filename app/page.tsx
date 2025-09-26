import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-orange-600">🍽️ 식당대기</div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/owner/login"
                className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                점주 로그인
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            줄 서지 말고,<br />
            <span className="text-orange-600">스마트하게 대기하세요</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            식당 앞에서 기다릴 필요 없어요. 온라인으로 대기 신청하고 실시간으로 순서를 확인하세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/restaurants"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              식당 찾아보기
            </Link>
            <Link
              href="/owner/login"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors"
            >
              점주이신가요?
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">간편한 대기 신청</h3>
            <p className="text-gray-600">
              QR코드 스캔이나 검색으로 쉽게 대기열에 참여하세요.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">실시간 알림</h3>
            <p className="text-gray-600">
              내 차례가 되면 SMS로 알려드려요. 더 이상 기다리지 마세요.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏪</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">점주 관리 시스템</h3>
            <p className="text-gray-600">
              효율적인 대기열 관리로 고객 만족도를 높이세요.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            © 2024 식당대기. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
