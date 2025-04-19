// App.jsx
import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import './main.css'

function App() {
  return (
    <Router>
      <AnimatePresence mode='wait'>
        <div className="min-h-screen bg-gradient-to-br from-dark to-dark-light text-gray-100 font-sans">
          <Home />
        </div>
      </AnimatePresence>
    </Router>
  )
}

export default App