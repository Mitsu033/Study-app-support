import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import SakuraEnglishIntro from './pages/SakuraEnglishIntro'
import SakuraEnglishPrivacy from './pages/SakuraEnglishPrivacy'
import SakuraEnglishContact from './pages/SakuraEnglishContact'
import SakuraKobunIntro from './pages/SakuraKobunIntro'
import SakuraKobunPrivacy from './pages/SakuraKobunPrivacy'
import SakuraKobunContact from './pages/SakuraKobunContact'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sakura-english" element={<SakuraEnglishIntro />} />
          <Route path="/sakura-english/privacy" element={<SakuraEnglishPrivacy />} />
          <Route path="/sakura-english/contact" element={<SakuraEnglishContact />} />
          <Route path="/sakura-kobun" element={<SakuraKobunIntro />} />
          <Route path="/sakura-kobun/privacy" element={<SakuraKobunPrivacy />} />
          <Route path="/sakura-kobun/contact" element={<SakuraKobunContact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

