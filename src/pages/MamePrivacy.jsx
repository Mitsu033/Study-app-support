import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const MamePrivacy = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl md:text-4xl font-bold">プライバシーポリシー</h1>
          </div>
          <p className="text-gray-600 text-lg">mame</p>
          <p className="text-sm text-gray-500 mt-2">最終更新日: 2024年12月9日</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-purple-600">はじめに</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Sakura Apps（以下「当社」）は、mameアプリ（以下「本アプリ」）をご利用いただくユーザーの皆様のプライバシーを尊重し、
                個人情報の保護に努めております。本プライバシーポリシーは、本アプリにおける個人情報の取り扱いについて説明するものです。
              </p>
              <p>
                本アプリをご利用いただくことで、本プライバシーポリシーに同意いただいたものとみなします。
              </p>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-purple-600">収集する情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold mb-2">1. 学習データ</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>学習進捗情報（習得した古文単語、学習時間、正答率など）</li>
                  <li>アプリの使用状況（機能の利用頻度、学習パターンなど）</li>
                  <li>設定情報（学習レベル、通知設定など）</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. デバイス情報</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>デバイスの種類、OS、アプリのバージョン</li>
                  <li>一意のデバイス識別子</li>
                  <li>IPアドレス（匿名化処理済み）</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. アカウント情報（任意）</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>ユーザー名（ニックネーム）</li>
                  <li>メールアドレス（アカウント作成時のみ）</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Information Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-purple-600">情報の利用目的</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>収集した情報は以下の目的で利用いたします：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>古文単語学習体験の個人化とカスタマイズ</li>
                <li>学習進捗の記録と分析</li>
                <li>アプリの機能改善とバグ修正</li>
                <li>新機能の開発と提供</li>
                <li>カスタマーサポートの提供</li>
                <li>利用統計の作成（匿名化処理済み）</li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-purple-600">情報の共有</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                当社は、以下の場合を除き、ユーザーの個人情報を第三者と共有することはありません：
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>ユーザーの明示的な同意がある場合</li>
                <li>法的義務に基づく場合</li>
                <li>当社の権利や財産を保護するために必要な場合</li>
                <li>匿名化処理を行った統計データの提供</li>
              </ul>
              <p className="mt-4">
                アプリの運営に必要なサービス提供者（クラウドストレージ、分析ツールなど）とは、
                適切なデータ保護契約を締結した上で情報を共有する場合があります。
              </p>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-purple-600">データの安全性</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                当社は、ユーザーの個人情報を保護するため、以下のセキュリティ対策を実施しています：
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>データの暗号化（保存時・転送時）</li>
                <li>アクセス制御とアクセス監視</li>
                <li>定期的なセキュリティ監査</li>
                <li>従業員への適切な教育と訓練</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-purple-600">ユーザーの権利</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>ユーザーは以下の権利を有します：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>個人情報の開示請求</li>
                <li>個人情報の訂正・削除請求</li>
                <li>個人情報の利用停止請求</li>
                <li>アカウントの削除</li>
              </ul>
              <p className="mt-4">
                これらの権利を行使される場合は、下記のお問い合わせ先までご連絡ください。
              </p>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-purple-600">データの保存期間</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                個人情報は、利用目的の達成に必要な期間のみ保存いたします。
                アカウントを削除された場合、関連する個人情報は30日以内に削除いたします。
              </p>
              <p>
                ただし、法的義務により保存が必要な情報については、法定期間中保存いたします。
              </p>
            </CardContent>
          </Card>

          {/* Policy Changes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-purple-600">プライバシーポリシーの変更</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                当社は、必要に応じて本プライバシーポリシーを変更する場合があります。
                重要な変更については、アプリ内通知またはメールにてお知らせいたします。
              </p>
              <p>
                変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-purple-600">お問い合わせ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                本プライバシーポリシーに関するご質問やご意見がございましたら、
                以下の方法でお問い合わせください：
              </p>
              <div className="space-y-3 mt-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <span>privacy@sakura-apps.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <span>03-1234-5678（平日 10:00-18:00）</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <span>〒100-0001 東京都千代田区千代田1-1-1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button variant="outline" asChild>
            <Link to="/mame">mameに戻る</Link>
          </Button>
          <Button asChild>
            <Link to="/mame/contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MamePrivacy

