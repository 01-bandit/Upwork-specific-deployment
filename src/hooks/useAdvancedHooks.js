import { useState, useEffect } from 'react'

/**
 * useMediaQuery - Detect screen size changes in real-time
 * @param {string} query - Media query string (e.g., '(min-width: 768px)')
 * @returns {boolean} - Whether the media query matches
 * 
 * Example:
 * const isMobile = useMediaQuery('(max-width: 768px)')
 * const isDesktop = useMediaQuery('(min-width: 1024px)')
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Check if window is available (SSR compatibility)
    if (typeof window === 'undefined') return

    const media = window.matchMedia(query)
    
    // Set initial value
    setMatches(media.matches)

    // Create event listener
    const listener = (event) => setMatches(event.matches)
    
    // Modern API
    if (media.addEventListener) {
      media.addEventListener('change', listener)
      return () => media.removeEventListener('change', listener)
    } else {
      // Fallback for older browsers
      media.addListener(listener)
      return () => media.removeListener(listener)
    }
  }, [query])

  return matches
}

/**
 * useDebounce - Delay updating a value until after a specified delay
 * Useful for optimizing search inputs and API calls
 * @param {any} value - The value to debounce
 * @param {number} delay - Delay in milliseconds (default: 500ms)
 * @returns {any} - Debounced value
 * 
 * Example:
 * const [searchTerm, setSearchTerm] = useState('')
 * const debouncedSearch = useDebounce(searchTerm, 500)
 * 
 * useEffect(() => {
 *   // This will only run 500ms after user stops typing
 *   fetchSearchResults(debouncedSearch)
 * }, [debouncedSearch])
 */
export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // Set up timeout to update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Clear timeout if value changes before delay completes
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

/**
 * useAsync - Handle async operations with loading/error states
 * @param {Function} asyncFunction - Async function to execute
 * @param {boolean} immediate - Whether to execute immediately (default: true)
 * @returns {Object} - { execute, loading, value, error }
 * 
 * Example:
 * const { execute, loading, value, error } = useAsync(fetchProjects)
 * 
 * // In component
 * if (loading) return <Loading />
 * if (error) return <Error message={error} />
 * if (value) return <Projects data={value} />
 */
export function useAsync(asyncFunction, immediate = true) {
  const [loading, setLoading] = useState(immediate)
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)

  // Function to execute async operation
  const execute = async (...params) => {
    setLoading(true)
    setError(null)
    setValue(null)

    try {
      const response = await asyncFunction(...params)
      setValue(response)
      return response
    } catch (err) {
      setError(err.message || 'An error occurred')
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Execute immediately if requested
  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { execute, loading, value, error }
}

/**
 * useOnClickOutside - Detect clicks outside a component
 * Useful for closing modals, dropdowns, tooltips, etc.
 * @param {React.RefObject} ref - Ref to the element
 * @param {Function} handler - Function to call when clicking outside
 * 
 * Example:
 * const dropdownRef = useRef()
 * useOnClickOutside(dropdownRef, () => setIsOpen(false))
 * 
 * <div ref={dropdownRef}>
 *   {isOpen && <DropdownMenu />}
 * </div>
 */
export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    // Attach listeners
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

/**
 * useKeyPress - Detect when a specific key is pressed
 * @param {string} targetKey - Key to detect (e.g., 'Escape', 'Enter')
 * @param {Function} handler - Function to call when key is pressed
 * 
 * Example:
 * useKeyPress('Escape', () => setModalOpen(false))
 * useKeyPress('/', () => focusSearchInput())
 */
export function useKeyPress(targetKey, handler) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === targetKey) {
        handler(event)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [targetKey, handler])
}

/**
 * useToggle - Boolean state with toggle function
 * @param {boolean} initialValue - Initial state (default: false)
 * @returns {[boolean, Function]} - [value, toggle]
 * 
 * Example:
 * const [isOpen, toggleOpen] = useToggle(false)
 * <button onClick={toggleOpen}>Toggle Menu</button>
 */
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)
  
  const toggle = () => setValue(v => !v)
  
  return [value, toggle]
}

/**
 * usePrevious - Get previous value of a state/prop
 * @param {any} value - Current value
 * @returns {any} - Previous value
 * 
 * Example:
 * const [count, setCount] = useState(0)
 * const prevCount = usePrevious(count)
 * // prevCount will be the previous value of count
 */
export function usePrevious(value) {
  const ref = useState({ value, prev: null })
  
  useEffect(() => {
    ref.current = { value, prev: ref.current.value }
  }, [value])
  
  return ref.current.prev
}

/**
 * useTimeout - Execute function after a delay
 * @param {Function} callback - Function to execute
 * @param {number} delay - Delay in milliseconds
 * 
 * Example:
 * useTimeout(() => {
 *   console.log('Executed after 2 seconds')
 * }, 2000)
 */
export function useTimeout(callback, delay) {
  useEffect(() => {
    if (delay === null) return

    const timeout = setTimeout(callback, delay)
    return () => clearTimeout(timeout)
  }, [callback, delay])
}

/**
 * useInterval - Execute function repeatedly at intervals
 * @param {Function} callback - Function to execute
 * @param {number} delay - Interval in milliseconds (null to pause)
 * 
 * Example:
 * const [count, setCount] = useState(0)
 * useInterval(() => {
 *   setCount(c => c + 1)
 * }, 1000)
 */
export function useInterval(callback, delay) {
  useEffect(() => {
    if (delay === null) return

    const interval = setInterval(callback, delay)
    return () => clearInterval(interval)
  }, [callback, delay])
}
