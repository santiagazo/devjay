import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Navbar from './components/Navbar';
import Home from './pages/know-jay/Home';
import Contact from './pages/contact-jay/Contact';
// import Blog from './pages/know-jay/Blog';
import Resume from './pages/know-jay/Resume';


function App() {
  return (
    <DarkModeProvider>
      <Router>
        <div className="bg-neutral-50 dark:bg-neutral-800 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
          </Routes>
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
