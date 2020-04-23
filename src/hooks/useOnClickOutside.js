import { useEffect, useCallback } from 'react'

const useOnClickOutside = (ref, onClikOutside, deps = []) => {
  const handler = useCallback(onClikOutside, [deps])
  useEffect(
    () => {
      const listener = event => {
        const refs = Array.isArray(ref) ? ref : [ref]
        const els = refs.reduce((carry, { current }) => current ? carry.concat(current) : carry, [])
        // Do nothing if clicking ref's element or descendent elements
        if (!els.length || !els.every(el => !el.contains(event.target))) {
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
}

export default useOnClickOutside
