import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/know-jay/Home'
import Contact from './pages/contact-jay/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
