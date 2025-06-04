import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

// Type definitions for the content structure
export interface PersonalInfo {
  name: string
  title: string
  bio: string[]
}

export interface NavigationLink {
  href: string
  label: string
}

export interface Navigation {
  brand: string
  links: NavigationLink[]
}

export interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string
}

export interface Experience {
  title: string
  items: ExperienceItem[]
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface Skills {
  title: string
  subtitle: string
  categories: SkillCategory[]
}

export interface EducationItem {
  degree: string
  field: string
  institution: string
  period: string
  grade: string
}

export interface Education {
  title: string
  subtitle: string
  items: EducationItem[]
}

export interface ContactDetail {
  label: string
  value: string
}

export interface SocialLink {
  href: string
  platform: string
}

export interface ContactForm {
  fields: {
    name: { label: string; placeholder: string }
    email: { label: string; placeholder: string }
    message: { label: string; placeholder: string }
  }
  submit: string
}

export interface Contact {
  title: string
  subtitle: string
  info: {
    title: string
    description: string
    details: {
      email: ContactDetail
      phone: ContactDetail
    }
    social: {
      title: string
      links: SocialLink[]
    }
  }
  form: ContactForm
}

export interface SiteContent {
  personal: PersonalInfo
  navigation: Navigation
  hero: {
    buttons: {
      primary: string
      secondary: string
    }
  }
  experience: Experience
  skills: Skills
  education: Education
  contact: Contact
  mobile: {
    themeToggle: string
  }
}

let cachedContent: SiteContent | null = null

export function loadSiteContent(forceFresh: boolean = false): SiteContent {
  // In development or when forced, always reload fresh content
  if (process.env.NODE_ENV === 'development' || forceFresh) {
    cachedContent = null
  }
  
  // Return cached content if already loaded and not forced refresh
  if (cachedContent && !forceFresh) {
    return cachedContent
  }

  try {
    const contentPath = path.join(process.cwd(), 'content', 'site-content.yaml')
    const fileContent = fs.readFileSync(contentPath, 'utf8')
    const parsedContent = yaml.load(fileContent) as SiteContent
    
    // Cache the content (except in development mode)
    if (process.env.NODE_ENV !== 'development') {
      cachedContent = parsedContent
    }
    
    return parsedContent
  } catch (error) {
    console.error('Error loading site content:', error)
    throw new Error('Failed to load site content')
  }
}