import React from 'react'
import { motion } from 'framer-motion'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

/* Original experiences:
const experiences = [
  {
    title: 'Market Data Engineer',
    company: 'Commerzbank',
    location: 'London',
    period: 'March 2014 - January 2017',
    description: `Project lead for migration to consolidated market data feed, achieving ~5m GBP savings in 2016. Led technical implementation and risk mitigation strategies for live market data systems.

Key achievements and responsibilities:
• Led market data platform team managing 100+ servers across North America, Europe, and Asia
• Managed Wombat/SR Labs/Vela, Bloomberg and Reuters technologies
• Implemented weekend changes following change management processes
• Configured monitoring tools and managed environment
• Handled exchange and regulatory compliance changes
• Provided Linux platform troubleshooting (Red Hat, multicast, TCP/IP)
• Delivered 24/7 global support through on-call rotations`,
  },
  // ... other original experiences
]
*/

const experiences = [
  {
    title: 'Senior Ipsum Manager',
    company: 'Lorem Corp',
    location: 'New York',
    period: '2020 - Present',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Key achievements:
• Ut enim ad minim veniam, quis nostrud exercitation
• Duis aute irure dolor in reprehenderit
• Excepteur sint occaecat cupidatat non proident
• Sunt in culpa qui officia deserunt mollit
• Lorem ipsum dolor sit amet, consectetur adipiscing`,
  },
  {
    title: 'Dolor Sit Director',
    company: 'Amet Technologies',
    location: 'San Francisco',
    period: '2018 - 2020',
    description: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.

• Quis nostrud exercitation ullamco laboris
• Nisi ut aliquip ex ea commodo consequat
• Duis aute irure dolor in reprehenderit
• Voluptate velit esse cillum dolore`,
  },
  {
    title: 'Consectetur Specialist',
    company: 'Adipiscing Inc',
    location: 'London',
    period: '2016 - 2018',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  }
]

const ExperienceTimeline = () => {
  return (
    <section 
      id="experience" 
      className="section-container bg-background-alt pt-24 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Lorem Ipsum
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
                <p className="text-accent-green font-medium">
                  {experience.company} • {experience.location}
                </p>
                <p className="text-gray-500 text-sm">{experience.period}</p>
                <p className="mt-2 text-gray-600 whitespace-pre-line">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline 