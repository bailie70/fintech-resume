'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from './components/Navbar'
import ExperienceTimeline from './components/ExperienceTimeline'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'
import Image from 'next/image'

export default function Home() {
  const [isDayMode, setIsDayMode] = useState(true)

  const backgroundImage = isDayMode
    ? "/images/Day.PNG"
    : "/images/Night.PNG"

  return (
    <>
      <Navbar isDayMode={isDayMode} onToggleMode={() => setIsDayMode(!isDayMode)} />
      <main>
        {/* Hero Section */}
        <section className="relative section-container flex flex-col items-center justify-center min-h-screen text-center">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              className="object-cover object-center transition-opacity duration-1000"
              priority
              quality={100}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background-alt" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
              John Bailie
            </h1>
            <h2 className="text-2xl md:text-3xl text-white">
              Market Data Professional
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Driving innovation in financial market data systems.
              Specialized in building and managing enterprise-scale market data solutions.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <a 
                href="#contact" 
                className="button-primary bg-accent-green hover:bg-accent-green/90 text-white px-8 py-3 rounded-lg transition-all duration-300"
              >
                Contact Me
              </a>
              <a 
                href="#education" 
                className="button-secondary border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg transition-all duration-300"
              >
                View Education
              </a>
            </div>
          </motion.div>
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
