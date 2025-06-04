import React from 'react'
import { motion } from 'framer-motion'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { Experience } from '../../lib/content-loader'

interface ExperienceTimelineProps {
  content: Experience
}

const ExperienceTimeline = ({ content }: ExperienceTimelineProps) => {
  return (
    <section 
      id="experience" 
      className="section-container bg-background-alt dark:bg-gray-900 pt-24 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
          {content.title}
        </h2>
        <div className="space-y-8">
          {content.items.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute left-0 top-0 p-2 bg-primary-dark dark:bg-accent-green rounded-full">
                <BriefcaseIcon className="w-4 h-4 text-white dark:text-gray-900" />
              </div>
              {index !== content.items.length - 1 && (
                <div className="absolute left-[18px] top-10 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
              )}
              <div className="card dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-xl font-bold text-primary-dark dark:text-white">{experience.title}</h3>
                <p className="text-accent-green dark:text-accent-green font-medium">
                  {experience.company} • {experience.location}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{experience.period}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300 whitespace-pre-line">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline 