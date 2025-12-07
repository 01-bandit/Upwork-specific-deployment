import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Loading from './components/Loading'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading onComplete={() => setLoading(false)} />
  }

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <ScrollProgress />
          <ThemeToggle />
          <BackToTop />
          <Header />
          <main>
            <Hero />
            <About />
            <Education />
            <Experience />
            <Certifications />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
          </main>
          <footer className="bg-primary dark:bg-gray-900 text-white py-6 text-center border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm">© 2025 Muhammad Hammad ur Rehman. Built with React, Vite & Tailwind CSS.</p>
            <p className="text-xs mt-2 text-gray-300 dark:text-gray-400">Demonstrating modern web engineering concepts and best practices</p>
          </footer>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
