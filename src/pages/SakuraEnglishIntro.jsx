import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  Brain, 
  Clock, 
  Star, 
  Users, 
  Download, 
  Smartphone, 
  Trophy,
  Target,
  Zap,
  BarChart3,
  Heart
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SakuraEnglishIntro = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "スペースド・リピティション",
      description: "科学的に証明された間隔反復システムで、効率的な記憶定着を実現"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "レベル別学習",
      description: "初級から上級まで、あなたのレベルに合わせた単語を厳選"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "学習進捗の可視化",
      description: "詳細な統計とグラフで学習の成果を実感"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "クイック学習",
      description: "スキマ時間を活用した効率的な学習システム"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "ゲーミフィケーション",
      description: "達成感とモチベーションを維持するゲーム要素"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "美しいデザイン",
      description: "直感的で美しいUIで学習体験を向上"
    }
  ]

  const stats = [
    { number: "10,000+", label: "収録単語数" },
    { number: "50,000+", label: "アクティブユーザー" },
    { number: "4.8", label: "App Store評価" },
    { number: "95%", label: "ユーザー満足度" }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  英単語学習アプリ
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  SakuraEnglish
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  科学的学習法と美しいデザインで、英単語学習を革新します。
                  スペースド・リピティションシステムにより、効率的な記憶定着を実現。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                  <Download className="mr-2 h-5 w-5" />
                  無料ダウンロード
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/sakura-english/contact">お問い合わせ</Link>
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>4.8/5.0</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span>50,000+ ユーザー</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Smartphone className="h-4 w-4 text-green-500" />
                  <span>iOS & Android</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">今日の学習</h3>
                    <Badge className="bg-white/20 text-white">レベル 5</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold mb-1">accomplish</div>
                      <div className="text-blue-100">達成する、成し遂げる</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>進捗: 15/20</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">主な機能</h2>
            <p className="text-gray-600 text-lg">学習効果を最大化する革新的な機能</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">学習の流れ</h2>
            <p className="text-gray-600 text-lg">3つのステップで効率的な学習</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">レベル診断</h3>
              <p className="text-gray-600">
                簡単なテストであなたの現在のレベルを診断し、最適な学習プランを提案します。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">毎日の学習</h3>
              <p className="text-gray-600">
                スペースド・リピティションシステムで、忘却曲線に基づいた最適なタイミングで復習。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">進捗確認</h3>
              <p className="text-gray-600">
                詳細な統計とグラフで学習の成果を可視化し、モチベーションを維持します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            今すぐ英単語学習を始めよう
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            無料でダウンロードして、効率的な英単語学習を体験してください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Download className="mr-2 h-5 w-5" />
              App Storeからダウンロード
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Download className="mr-2 h-5 w-5" />
              Google Playからダウンロード
            </Button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/sakura-english/privacy">プライバシーポリシー</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/sakura-english/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SakuraEnglishIntro

