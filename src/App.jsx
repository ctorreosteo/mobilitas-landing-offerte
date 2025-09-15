import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import FirstWalk from './pages/FirstWalk'
import Emicrania from './pages/Emicrania'

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
          
          {/* Catch all route - redirect to /first-walk */}
          <Route path="*" element={<Navigate to="/first-walk" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App