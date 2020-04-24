import { useEffect, useRef, useCallback } from 'react'

const useOnClickOutside = (onClikOutside, deps = []) => {
  const ref = useRef()
  const handler = useCallback(onClikOutside, [deps])
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)
      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    // Add ref and handler to effect dependencies
    [ref, handler],
  )

  return ref
}

export default useOnClickOutside
