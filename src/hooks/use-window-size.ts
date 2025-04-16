"use client"

import { useState, useEffect } from "react"

export function useWindowSize() {
  // Initialize with default iPhone dimensions
  const [windowSize, setWindowSize] = useState({
    width: 390, // iPhone 14/16 width
    height: 844, // Approximate height
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
} 