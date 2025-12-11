/**
 * Accessibility Utilities
 * Helpers for implementing WCAG-compliant features
 */

/**
 * Check if user prefers reduced motion
 * Respect prefers-reduced-motion media query
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Trap focus within a container (useful for modals)
 * @param {HTMLElement} container - Element to trap focus within
 */
export const trapFocus = (container) => {
  const focusableElements = container.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )
  
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  const handleTabKey = (e) => {
    if (e.key !== 'Tab') return

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus()
        e.preventDefault()
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus()
        e.preventDefault()
      }
    }
  }

  container.addEventListener('keydown', handleTabKey)
  
  // Return cleanup function
  return () => container.removeEventListener('keydown', handleTabKey)
}

/**
 * Announce message to screen readers
 * @param {string} message - Message to announce
 * @param {string} priority - 'polite' (default) or 'assertive'
 */
export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div')
  announcement.setAttribute('role', 'status')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only' // Screen reader only class
  announcement.textContent = message

  document.body.appendChild(announcement)

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

/**
 * Check if element has sufficient color contrast
 * @param {string} foreground - Foreground color (hex)
 * @param {string} background - Background color (hex)
 * @returns {Object} - { ratio, passes: { AA, AAA } }
 */
export const checkColorContrast = (foreground, background) => {
  const getLuminance = (hex) => {
    const rgb = parseInt(hex.slice(1), 16)
    const r = (rgb >> 16) & 0xff
    const g = (rgb >> 8) & 0xff
    const b = (rgb >> 0) & 0xff

    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })

    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  }

  const l1 = getLuminance(foreground)
  const l2 = getLuminance(background)
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)

  return {
    ratio: ratio.toFixed(2),
    passes: {
      AA: ratio >= 4.5,
      AAA: ratio >= 7,
      AALarge: ratio >= 3,
      AAALarge: ratio >= 4.5
    }
  }
}

/**
 * Generate unique ID for accessibility
 * @param {string} prefix - Prefix for ID
 * @returns {string} - Unique ID
 */
let idCounter = 0
export const generateId = (prefix = 'a11y') => {
  idCounter++
  return `${prefix}-${idCounter}-${Date.now()}`
}

/**
 * Manage focus for single-page apps
 * Set focus to main content after navigation
 */
export const manageFocus = (element) => {
  if (!element) return

  // Make element focusable if it isn't already
  if (element.tabIndex === -1) {
    element.setAttribute('tabindex', '-1')
  }

  element.focus()

  // Remove tabindex after focus
  element.addEventListener('blur', () => {
    element.removeAttribute('tabindex')
  }, { once: true })
}

/**
 * Skip to main content link
 * Create a skip link for keyboard users
 */
export const createSkipLink = (targetId = 'main') => {
  const skipLink = document.createElement('a')
  skipLink.href = `#${targetId}`
  skipLink.className = 'skip-link'
  skipLink.textContent = 'Skip to main content'
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
  `

  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0'
  })

  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px'
  })

  document.body.insertBefore(skipLink, document.body.firstChild)
}
