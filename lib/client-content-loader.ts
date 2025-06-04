'use client'

import { useState, useEffect } from 'react'
import { SiteContent } from './content-loader'

// Client-side content loader that can update dynamically
export function useContentLoader(): { content: SiteContent | null; loading: boolean; error: string | null } {
  const [content, setContent] = useState<SiteContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastModified, setLastModified] = useState<string | null>(null)

  const checkForUpdates = async () => {
    try {
      // Only check for file changes, don't reload content yet
      const response = await fetch(`/api/content/check?t=${Date.now()}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
      })
      
      if (response.ok) {
        const { lastModified: newLastModified } = await response.json()
        
        // Only reload content if file has actually changed
        if (lastModified && newLastModified !== lastModified) {
          console.log('Content file changed, reloading...')
          await loadContent()
        }
        
        setLastModified(newLastModified)
      }
    } catch (err) {
      // Silently fail for file checking - don't disrupt the UI
      console.warn('Failed to check for content updates:', err)
    }
  }

  const loadContent = async () => {
    try {
      if (!content) setLoading(true) // Only show loading on initial load
      setError(null)
      
      // Fetch content from API endpoint with cache-busting
      const response = await fetch(`/api/content?t=${Date.now()}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
      })
      
      if (!response.ok) {
        throw new Error(`Failed to load content: ${response.statusText}`)
      }
      
      const result = await response.json()
      setContent(result.content)
      setLastModified(result.lastModified)
    } catch (err) {
      console.error('Error loading content:', err)
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Initial load
    loadContent()

    // Set up checking for content changes (every 3 seconds in development)
    let interval: NodeJS.Timeout | null = null
    
    if (process.env.NODE_ENV === 'development') {
      interval = setInterval(checkForUpdates, 3000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [lastModified, content])

  return { content, loading, error }
}