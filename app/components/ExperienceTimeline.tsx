import React from 'react'
import { motion } from 'framer-motion'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    title: 'Senior FinTech Developer',
    company: 'Financial Innovation Corp',
    period: '2021 - Present',
    description: 'Led development of blockchain-based payment solutions and smart contract implementations.',
  },
  {
    title: 'Financial Software Engineer',
    company: 'Digital Banking Solutions',
    period: '2018 - 2021',
    description: 'Developed and maintained core banking applications using modern tech stack.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Tech Startups Inc',
    period: '2016 - 2018',
    description: 'Built and scaled financial technology solutions for startups.',
  },
]

const ExperienceTimeline = () => {
  return (
    <section 
      id="experience" 
      className="section-container bg-background-alt pt-24 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute left-0 top-0 p-2 bg-primary-dark rounded-full">
                <BriefcaseIcon className="w-4 h-4 text-white" />
              </div>
              {index !== experiences.length - 1 && (
                <div className="absolute left-[18px] top-10 bottom-0 w-0.5 bg-gray-200" />
              )}
              <div className="card">
                <h3 className="text-xl font-bold text-primary-dark">{experience.title}</h3>
                <p className="text-accent-green font-medium">{experience.company}</p>
                <p className="text-gray-500 text-sm">{experience.period}</p>
                <p className="mt-2 text-gray-600">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline 