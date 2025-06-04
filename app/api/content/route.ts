import { NextResponse } from 'next/server'
import { loadSiteContent } from '../../../lib/content-loader'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    // Clear the cache to ensure fresh content
    if (process.env.NODE_ENV === 'development') {
      // Clear Node.js module cache for the content loader
      const contentLoaderPath = require.resolve('../../../lib/content-loader')
      delete require.cache[contentLoaderPath]
    }
    
    const content = loadSiteContent()
    
    // Get file modification time
    const contentPath = path.join(process.cwd(), 'content', 'site-content.yaml')
    const stats = fs.statSync(contentPath)
    const lastModified = stats.mtime.toISOString()
    
    return NextResponse.json({ 
      content, 
      lastModified 
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    })
  } catch (error) {
    console.error('Error loading content:', error)
    return NextResponse.json(
      { error: 'Failed to load content' },
      { status: 500 }
    )
  }
}