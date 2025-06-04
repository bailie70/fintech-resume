'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface ThemeContextType {
  isDayMode: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDayMode, setIsDayMode] = useState(true)

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'night') {
      setIsDayMode(false)
    }
  }, [])

  // Update localStorage and document class when theme changes
  useEffect(() => {
    localStorage.setItem('theme', isDayMode ? 'day' : 'night')
    // Update document class for global dark mode styles
    if (isDayMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [isDayMode])

  const toggleTheme = () => {
    setIsDayMode(!isDayMode)
  }

  return (
    <ThemeContext.Provider value={{ isDayMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}