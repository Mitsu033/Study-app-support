import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BookOpen, MessageCircle, Shield, Home } from 'lucide-react'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-pink-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">桜</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Sakura Apps
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-pink-600 transition-colors">
                <Home size={16} />
                <span>ホーム</span>
              </Link>
              <Link to="/sakura-english" className="flex items-center space-x-1 text-gray-600 hover:text-pink-600 transition-colors">
                <BookOpen size={16} />
                <span>SakuraEnglish</span>
              </Link>
              <Link to="/sakura-kobun" className="flex items-center space-x-1 text-gray-600 hover:text-pink-600 transition-colors">
                <BookOpen size={16} />
                <span>SakuraKobun</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">桜</span>
                </div>
                <span className="text-xl font-bold">Sakura Apps</span>
              </div>
              <p className="text-gray-400">
                学習を楽しく、効果的にするアプリケーションを開発しています。
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">SakuraEnglish</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/sakura-english" className="hover:text-white transition-colors">アプリ紹介</Link></li>
                <li><Link to="/sakura-english/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
                <li><Link to="/sakura-english/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">SakuraKobun</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/sakura-kobun" className="hover:text-white transition-colors">アプリ紹介</Link></li>
                <li><Link to="/sakura-kobun/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
                <li><Link to="/sakura-kobun/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sakura Apps. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

