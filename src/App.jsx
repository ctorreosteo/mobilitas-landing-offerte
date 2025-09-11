import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import FirstWalk from './pages/FirstWalk'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Redirect root to /first-walk */}
          <Route path="/" element={<Navigate to="/first-walk" replace />} />
          
          {/* FirstWalk page */}
          <Route path="/first-walk" element={<FirstWalk />} />
          
          {/* Catch all route - redirect to /first-walk */}
          <Route path="*" element={<Navigate to="/first-walk" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App