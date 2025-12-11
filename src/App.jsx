import { useState, useEffect, lazy, Suspense } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Loading from './components/Loading'
import SkipLink from './components/SkipLink'
import Header from './components/Header'
import Hero from './components/Hero'
import ThemeToggle from './components/ThemeToggle'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

// Lazy load heavy components that are below the fold
const About = lazy(() => import('./components/About'))
const Education = lazy(() => import('./components/Education'))
const Experience = lazy(() => import('./components/Experience'))
const Certifications = lazy(() => import('./components/Certifications'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))

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
          <SkipLink />
          <ScrollProgress />
          <ThemeToggle />
          <BackToTop />
          <Header />
          <main id="main-content" tabIndex="-1">
            <Hero />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
              <About />
              <Education />
              <Experience />
              <Certifications />
              <Skills />
              <Projects />
            </Suspense>
          </main>
          <footer 
            className="bg-primary dark:bg-gray-900 text-white py-6 text-center border-t border-gray-200 dark:border-gray-800"
            role="contentinfo"
          >
            <p className="text-sm">© 2025 Muhammad Hammad ur Rehman. Built with React, Vite & Tailwind CSS.</p>
            <p className="text-xs mt-2 text-gray-300 dark:text-gray-400">Demonstrating modern web engineering concepts and best practices</p>
          </footer>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
