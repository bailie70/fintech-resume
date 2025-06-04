'use client'

import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { useContentLoader } from '../../lib/client-content-loader'
import Navbar from './Navbar'
import ExperienceTimeline from './ExperienceTimeline'
import SkillsSection from './SkillsSection'
import EducationSection from './EducationSection'
import ContactSection from './ContactSection'
import Image from 'next/image'

export default function HomeClient() {
  const { isDayMode } = useTheme()
  const { content, loading, error } = useContentLoader()

  // Show loading state
  if (loading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-green mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading content...</p>
        </div>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading content: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-accent-green text-white px-4 py-2 rounded hover:bg-accent-green/90"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  const backgroundImage = isDayMode
    ? "/images/Day.PNG"
    : "/images/Night.PNG"

  return (
    <>
      <Navbar content={content.navigation} />
      <main className="pt-16">
        {/* Bio Section */}
        <section className="relative section-container py-20 md:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
            {/* Subtle overlay to ensure text readability */}
            {isDayMode ? (
              <div className="absolute inset-0 bg-white/80" />
            ) : (
              <div className="absolute inset-0 bg-black/45" />
            )}
          </div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Image Column */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-6xl text-gray-500 dark:text-gray-400">👤</div>
                </div>
              </div>

              {/* Bio Content Column */}
              <div className="space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark dark:text-white">
                  {content.personal.name}
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300">
                  {content.personal.title}
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-200">
                  {content.personal.bio.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="flex gap-4 justify-center md:justify-start pt-4">
                  <a 
                    href="#contact" 
                    className="button-primary bg-accent-green hover:bg-accent-green/90 text-white px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {content.hero.buttons.primary}
                  </a>
                  <a 
                    href="#experience" 
                    className="button-secondary border-2 border-primary-dark dark:border-gray-300 text-primary-dark dark:text-gray-300 hover:bg-primary-dark dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-900 px-8 py-3 rounded-lg transition-all duration-300"
                  >
                    {content.hero.buttons.secondary}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <ExperienceTimeline content={content.experience} />

        {/* Skills Section */}
        <SkillsSection content={content.skills} />

        {/* Education Section */}
        <EducationSection content={content.education} />

        {/* Contact Section */}
        <ContactSection content={content.contact} />
      </main>
    </>
  )
}