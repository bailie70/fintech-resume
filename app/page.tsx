'use client'

import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import ExperienceTimeline from './components/ExperienceTimeline'
import SkillsSection from './components/SkillsSection'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="section-container flex flex-col items-center justify-center min-h-screen text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
              Your Name
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary-dark">
              FinTech Professional
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Driving innovation at the intersection of finance and technology.
              Specialized in building scalable financial solutions and digital transformation.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <a href="#contact" className="button-primary">
                Contact Me
              </a>
              <a href="#portfolio" className="button-secondary">
                View Portfolio
              </a>
            </div>
          </motion.div>
        </section>

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Skills Section */}
        <SkillsSection />

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  )
}
