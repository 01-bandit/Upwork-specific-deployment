import { useEffect } from 'react'

/**
 * SkipLink Component - Accessibility feature for keyboard navigation
 * Allows keyboard users to skip directly to main content
 */
function SkipLink() {
  useEffect(() => {
    // Ensure main content has ID
    const mainContent = document.getElementById('main-content')
    if (!mainContent) {
      console.warn('SkipLink: No element with id="main-content" found')
    }
  }, [])

  return (
    <a
      href="#main-content"
      className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
    >
      Skip to main content
    </a>
  )
}

export default SkipLink
