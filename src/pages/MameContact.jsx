import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  HelpCircle, 
  Bug, 
  Lightbulb,
  Star,
  Send,
  BookOpen,
  Brain
} from 'lucide-react'
import { Link } from 'react-router-dom'

const MameContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    alert('お問い合わせを受け付けました。ありがとうございます。')
  }

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "メール",
      description: "support@sakura-apps.com",
      detail: "24時間受付、1営業日以内に返信"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "電話",
      description: "03-1234-5678",
      detail: "平日 10:00-18:00"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "チャット",
      description: "アプリ内チャット",
      detail: "リアルタイムサポート"
    }
  ]

  const faqCategories = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "古文単語について",
      description: "単語の意味や語源に関するご質問"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "学習方法について",
      description: "効果的な学習方法やアプリの活用について"
    },
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: "使い方について",
      description: "アプリの基本的な使い方や機能について"
    },
    {
      icon: <Bug className="h-6 w-6" />,
      title: "不具合報告",
      description: "アプリの動作に関する問題について"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "機能要望",
      description: "新機能のご提案やご要望について"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "その他",
      description: "上記以外のご質問やご意見について"
    }
  ]

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-gray-600 text-lg">mame</p>
          <p className="text-gray-500 mt-2">
            古文学習に関するご質問やご意見がございましたら、お気軽にお問い合わせください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">お問い合わせフォーム</CardTitle>
                <CardDescription>
                  以下のフォームにご記入いただき、送信してください
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">お名前 *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="山田太郎"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">お問い合わせ種別 *</Label>
                    <Select onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="お問い合わせの種別を選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kobun">古文単語について</SelectItem>
                        <SelectItem value="exam">学習方法について</SelectItem>
                        <SelectItem value="usage">使い方について</SelectItem>
                        <SelectItem value="bug">不具合報告</SelectItem>
                        <SelectItem value="feature">機能要望</SelectItem>
                        <SelectItem value="account">アカウントについて</SelectItem>
                        <SelectItem value="billing">課金について</SelectItem>
                        <SelectItem value="other">その他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">件名 *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="お問い合わせの件名を入力してください"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">お問い合わせ内容 *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="お問い合わせの詳細をご記入ください"
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    <Send className="mr-2 h-4 w-4" />
                    送信する
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">お問い合わせ方法</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                      {method.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{method.title}</div>
                      <div className="text-purple-600">{method.description}</div>
                      <div className="text-sm text-gray-500">{method.detail}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQ Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">よくあるお問い合わせ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {faqCategories.map((category, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{category.title}</h4>
                      <p className="text-xs text-gray-500">{category.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Study Tips */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-lg text-purple-800">古文学習のコツ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-purple-700">語源を理解することで記憶に定着しやすくなります</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-purple-700">古典作品の文脈で単語を覚えると効果的です</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-purple-700">毎日少しずつでも継続することが重要です</p>
                </div>
              </CardContent>
            </Card>

            {/* Office Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">会社情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium">Sakura Apps</p>
                    <p className="text-xs text-gray-500">〒100-0001 東京都千代田区千代田1-1-1</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium">営業時間</p>
                    <p className="text-xs text-gray-500">平日 10:00-18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button variant="outline" asChild>
            <Link to="/mame">mameに戻る</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/mame/privacy">プライバシーポリシー</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MameContact

