'use client'

import { motion } from 'framer-motion'
import { useTheme } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import ExperienceTimeline from './components/ExperienceTimeline'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'
import Image from 'next/image'

export default function Home() {
  const { isDayMode } = useTheme()

  const backgroundImage = isDayMode
    ? "/images/Day.PNG"
    : "/images/Night.PNG"

  return (
    <>
      <Navbar />
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
                  Lorem Ipsum
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300">
                  Dolor Sit Amet Professional
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-200">
                  <p className="text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="flex gap-4 justify-center md:justify-start pt-4">
                  <a 
                    href="#contact" 
                    className="button-primary bg-accent-green hover:bg-accent-green/90 text-white px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get In Touch
                  </a>
                  <a 
                    href="#experience" 
                    className="button-secondary border-2 border-primary-dark dark:border-gray-300 text-primary-dark dark:text-gray-300 hover:bg-primary-dark dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-900 px-8 py-3 rounded-lg transition-all duration-300"
                  >
                    View Experience
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Skills Section */}
        <SkillsSection />

        {/* Education Section */}
        <EducationSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  )
}
