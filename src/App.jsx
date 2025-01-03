import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/know-jay/Home";
import Contact from "./pages/contact-jay/Contact";
// import Blog from './pages/know-jay/Blog';
import Resume from "./pages/know-jay/Resume";
import Footer from "./components/footer";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <DarkModeProvider>
        <Router>
          <div className="bg-neutral-50 dark:bg-neutral-800 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                {/* <Route path="/blog" element={<Blog />} /> */}
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </DarkModeProvider>
    </ErrorBoundary>
  );
}

export default App;
