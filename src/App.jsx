import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// Main website pages
import Home from './pages/sito-web/Home'
import Contatti from './pages/sito-web/Contatti'
import LavoraConNoi from './pages/sito-web/LavoraConNoi'
import ChiSiamo from './pages/sito-web/ChiSiamo'
import FAQ from './pages/sito-web/FAQ'

// Job position pages
import Segretaria from './pages/sito-web/posizioni/Segretaria'
import VideoMaker from './pages/sito-web/posizioni/VideoMaker'
import Nutrizionista from './pages/sito-web/posizioni/Nutrizionista'

// Landing pages
import FirstWalk from './pages/landing-pages/FirstWalk'
import Emicrania from './pages/landing-pages/Emicrania'
import MalDiSchiena from './pages/landing-pages/MalDiSchiena'
import Gravidanza from './pages/landing-pages/Gravidanza'
import ThankYou from './pages/landing-pages/ThankYou'

function App() {
  return (
    <Router>
      <Routes>
        {/* Main website routes with layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/chi-siamo" element={<Layout><ChiSiamo /></Layout>} />
        <Route path="/contatti" element={<Layout><Contatti /></Layout>} />
        <Route path="/lavora-con-noi" element={<Layout><LavoraConNoi /></Layout>} />
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
        
        {/* Job position routes with layout */}
        <Route path="/lavora-con-noi/segretaria" element={<Layout><Segretaria /></Layout>} />
        <Route path="/lavora-con-noi/video-maker" element={<Layout><VideoMaker /></Layout>} />
        <Route path="/lavora-con-noi/nutrizionista" element={<Layout><Nutrizionista /></Layout>} />
        
        {/* Landing pages without main layout */}
        <Route path="/first-walk" element={<FirstWalk />} />
        <Route path="/emicrania" element={<Emicrania />} />
        <Route path="/mal-di-schiena" element={<MalDiSchiena />} />
        <Route path="/gravidanza" element={<Gravidanza />} />
        <Route path="/conferma" element={<ThankYou />} />
      </Routes>
    </Router>
  )
}

export default App