import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, Smartphone, Star, Users, Download, BookOpen } from 'lucide-react'
import iconImage from '@/assets/icon.png'

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              学習を楽しく、効果的に
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sakura Appsは、英単語学習と古文単語学習を支援する革新的なアプリケーションを提供しています。
              美しいデザインと効果的な学習メソッドで、あなたの学習体験を向上させます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                <Download className="mr-2 h-5 w-5" />
                アプリをダウンロード
              </Button>
              <Button variant="outline" size="lg">
                詳細を見る
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">私たちのアプリ</h2>
            <p className="text-gray-600 text-lg">学習目標に合わせて選べる2つのアプリ</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* SakuraEnglish Card */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-100">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <img src={iconImage} alt="SakuraEnglish" className="h-6 w-6 object-contain" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-blue-900">SakuraEnglish</CardTitle>
                    <CardDescription className="text-blue-700">英単語学習アプリ</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  効率的な英単語学習を実現するアプリです。スペースド・リピティション（間隔反復）システムを採用し、
                  記憶の定着を最大化します。美しいUIと直感的な操作で、毎日の学習が楽しくなります。
                </p>
                
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">10,000+ 単語</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">50,000+ ユーザー</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">iOS & Android</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-600">レベル別学習</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Link to="/sakura-english">詳細を見る</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link to="/sakura-english/contact">お問い合わせ</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* mame Card */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-100">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-purple-900">mame</CardTitle>
                    <CardDescription className="text-purple-700">豆知識学習アプリ</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  日常で役立つ豆知識を楽しく学べるアプリです。雑学から実用的な知識まで、
                  幅広いジャンルの豆知識を効率的に学習できます。クイズ形式で楽しみながら知識を深めましょう。
                </p>
                
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">1,000+ 豆知識</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">15,000+ ユーザー</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">iOS & Android</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-600">カテゴリ別学習</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button asChild className="flex-1 bg-purple-600 hover:bg-purple-700">
                    <Link to="/mame">詳細を見る</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link to="/mame/contact">お問い合わせ</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">なぜSakura Appsを選ぶのか</h2>
            <p className="text-gray-600 text-lg">学習効果を最大化する特徴</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">科学的学習法</h3>
              <p className="text-gray-600">記憶科学に基づいた効果的な学習システムで、長期記憶の定着を支援します。</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">美しいデザイン</h3>
              <p className="text-gray-600">直感的で美しいユーザーインターフェースで、学習のモチベーションを維持します。</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">コミュニティ</h3>
              <p className="text-gray-600">同じ目標を持つ学習者とつながり、お互いに励まし合いながら学習できます。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

