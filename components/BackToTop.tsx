'use client'

import React, { useState, useEffect } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 group animate-fade-in-up"
          aria-label="Back to top"
        >
          <div className="relative">
            {/* Background circle with gradient */}
            <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Main button */}
            <div className="relative w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:border-accent">
              {/* Arrow icon */}
              <svg 
                className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </div>

            {/* Pulse effect */}
            <div className="absolute inset-0 w-12 h-12 bg-primary rounded-full opacity-0 group-hover:opacity-20 animate-ping"></div>
          </div>
        </button>
      )}
    </>
  )
}
