import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    // Get file modification time without loading content
    const contentPath = path.join(process.cwd(), 'content', 'site-content.yaml')
    const stats = fs.statSync(contentPath)
    const lastModified = stats.mtime.toISOString()
    
    return NextResponse.json({ 
      lastModified 
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    })
  } catch (error) {
    console.error('Error checking content file:', error)
    return NextResponse.json(
      { error: 'Failed to check content file' },
      { status: 500 }
    )
  }
}