import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  Scroll, 
  GraduationCap, 
  Star, 
  Users, 
  Download, 
  Smartphone, 
  Trophy,
  Target,
  Zap,
  BarChart3,
  Heart,
  History,
  BookMarked
} from 'lucide-react'
import { Link } from 'react-router-dom'

const MameIntro = () => {
  const features = [
    {
      icon: <Scroll className="h-6 w-6" />,
      title: "古文単語データベース",
      description: "厳選された3,000語以上の古文単語を収録、語源と現代語訳付き"
    },
    {
      icon: <History className="h-6 w-6" />,
      title: "語源解説",
      description: "単語の成り立ちと歴史的背景を詳しく解説、理解を深める"
    },
    {
      icon: <BookMarked className="h-6 w-6" />,
      title: "文学作品連携",
      description: "有名な古典作品での使用例を豊富に掲載"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "受験対応",
      description: "大学受験に頻出の古文単語を重点的に学習"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "習得度管理",
      description: "詳細な学習統計で苦手分野を可視化"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "段階的学習",
      description: "基礎から応用まで、レベル別の体系的な学習"
    }
  ]

  const stats = [
    { number: "3,000+", label: "古文単語数" },
    { number: "25,000+", label: "アクティブユーザー" },
    { number: "4.7", label: "App Store評価" },
    { number: "92%", label: "受験生満足度" }
  ]

  const literaryWorks = [
    "源氏物語", "枕草子", "徒然草", "平家物語", "竹取物語", "伊勢物語"
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                  古文単語学習アプリ
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Mame
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  古典文学の美しさを現代に。語源から学ぶ古文単語で、
                  古典への理解を深め、受験にも対応した本格的な学習アプリです。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                  <Download className="mr-2 h-5 w-5" />
                  無料ダウンロード
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/mame/contact">お問い合わせ</Link>
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>4.7/5.0</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-purple-500" />
                  <span>25,000+ ユーザー</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Smartphone className="h-4 w-4 text-green-500" />
                  <span>iOS & Android</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-400 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">今日の古文単語</h3>
                    <Badge className="bg-white/20 text-white">源氏物語</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold mb-1">をかし</div>
                      <div className="text-purple-100 mb-2">趣がある、美しい</div>
                      <div className="text-sm text-purple-200">
                        「春はあけぼの。やうやう白くなりゆく山際、少し明かりて、紫だちたる雲の細くたなびきたる。」
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>進捗: 12/15</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-4/5"></div>
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
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Literary Works Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">収録古典作品</h2>
          <p className="text-gray-600 text-lg mb-8">
            日本古典文学の名作から厳選した単語を学習
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {literaryWorks.map((work, index) => (
              <Badge key={index} variant="secondary" className="text-lg py-2 px-4 bg-white/80">
                {work}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">主な機能</h2>
            <p className="text-gray-600 text-lg">古文学習に特化した革新的な機能</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white mb-4">
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

      {/* Learning Method Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">学習の特徴</h2>
            <p className="text-gray-600 text-lg">古文単語を深く理解するための学習法</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">語源から理解</h3>
                  <p className="text-gray-600">
                    単語の成り立ちと歴史的変遷を学ぶことで、記憶に定着しやすく、
                    関連語彙も同時に習得できます。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">文脈での学習</h3>
                  <p className="text-gray-600">
                    実際の古典作品での使用例を通じて、単語の意味とニュアンスを
                    正確に理解できます。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">受験対策</h3>
                  <p className="text-gray-600">
                    大学受験で頻出の古文単語を重点的に学習し、
                    効率的な受験対策が可能です。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">学習効果</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>語彙力向上</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-5/6"></div>
                    </div>
                    <span className="text-sm">85%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>読解力向上</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-4/5"></div>
                    </div>
                    <span className="text-sm">80%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>受験成績向上</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-11/12"></div>
                    </div>
                    <span className="text-sm">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            古典の世界への扉を開こう
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            美しい古典文学の言葉を学び、日本の文化的遺産に触れてください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Download className="mr-2 h-5 w-5" />
              App Storeからダウンロード
            </Button>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Download className="mr-2 h-5 w-5" />
              Google Playからダウンロード
            </Button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
              <Link to="/mame/privacy">プライバシーポリシー</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
              <Link to="/mame/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MameIntro

