import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import FirstWalk from './pages/FirstWalk'
import Emicrania from './pages/Emicrania'
import MalDiSchiena from './pages/MalDiSchiena'
import ThankYou from './pages/ThankYou'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Redirect root to /first-walk */}
          <Route path="/" element={<Navigate to="/first-walk" replace />} />
          
          {/* FirstWalk page */}
          <Route path="/first-walk" element={<FirstWalk />} />
          
          {/* Emicrania page */}
          <Route path="/emicrania" element={<Emicrania />} />
          
          {/* Mal di Schiena page */}
          <Route path="/mal-di-schiena" element={<MalDiSchiena />} />
          
          {/* Thank You page */}
          <Route path="/conferma" element={<ThankYou />} />
          
          {/* Catch all route - redirect to /first-walk */}
          <Route path="*" element={<Navigate to="/first-walk" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App