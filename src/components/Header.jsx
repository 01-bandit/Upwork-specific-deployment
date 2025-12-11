import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery, useToggle, useOnClickOutside, useKeyPress } from '../hooks/useAdvancedHooks'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, toggleMobileMenu] = useToggle(false)
  const menuRef = useRef(null)
  
  // Use custom hook to detect mobile/desktop
  const isMobile = useMediaQuery('(max-width: 768px)')

  // Close mobile menu when clicking outside
  useOnClickOutside(menuRef, () => {
    if (mobileMenuOpen) toggleMobileMenu()
  })

  // Close mobile menu on Escape key
  useKeyPress('Escape', () => {
    if (mobileMenuOpen) toggleMobileMenu()
  })

  // useEffect: Runs side effects (like adding event listeners) after component renders
  // The empty array [] means this effect runs only once when component mounts
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup function: removes event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = ['Home', 'About', 'Education', 'Experience', 'Certifications', 'Skills', 'Projects', 'Contact']

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.1 }}
          className={`text-2xl font-bold ${scrolled ? 'text-primary dark:text-white' : 'text-primary dark:text-white'}`}
        >
          MH
        </motion.h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-blue-400 transition-colors font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary dark:text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu - Conditional Rendering based on state */}
      {mobileMenuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {menuItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-blue-400 transition-colors font-medium"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
