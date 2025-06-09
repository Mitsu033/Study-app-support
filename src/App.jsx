import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import SakuraEnglishIntro from './pages/SakuraEnglishIntro'
import SakuraEnglishPrivacy from './pages/SakuraEnglishPrivacy'
import SakuraEnglishContact from './pages/SakuraEnglishContact'
import MameIntro from './pages/MameIntro'
import MamePrivacy from './pages/MamePrivacy'
import MameContact from './pages/MameContact'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sakura-english" element={<SakuraEnglishIntro />} />
          <Route path="/sakura-english/privacy" element={<SakuraEnglishPrivacy />} />
          <Route path="/sakura-english/contact" element={<SakuraEnglishContact />} />
          <Route path="/mame" element={<MameIntro />} />
          <Route path="/mame/privacy" element={<MamePrivacy />} />
          <Route path="/mame/contact" element={<MameContact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

