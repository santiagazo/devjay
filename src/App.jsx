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
import NotFound from "./pages/errors/NotFound";

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <DarkModeProvider>
        <Router>
          <div className="bg-neutral-50  text-gray-800 dark:bg-neutral-800 dark:text-gray-200 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                {/* <Route path="/blog" element={<Blog />} /> */}
                <Route path="*" element={<NotFound />} />{" "}
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
