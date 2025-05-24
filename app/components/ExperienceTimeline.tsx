import React from 'react'
import { motion } from 'framer-motion'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

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
  {
    title: 'Senior Financial Services Engineer',
    company: 'Vela Trading Technologies',
    location: 'Belfast',
    period: 'November 2012 - March 2014',
    description: `Provided professional consulting, training, and implementation services for NYSE Technologies clients globally. Key achievements:
• Successfully implemented large-scale market data messaging solution for Commerzbank
• Developed and delivered revenue-generating training sessions
• Conducted global onsite projects across EMEA/APAC regions
• Created and installed software demo packages for new customers
• Identified sales opportunities and coordinated with sales teams`,
  },
  {
    title: 'Technical Consultant',
    company: 'NYSE Technologies',
    location: 'Belfast',
    period: 'September 2010 - November 2012',
    description: 'Provided first/second line technical assistance and professional services for NYSE\'s Enterprise Software Suite (ESS). Supported financial clients in a fast-paced environment, becoming a senior member of the support team. Developed deep expertise in Financial Software: Wombat, Bloomberg (BPOD/BPIPE), Reuters (RMDS).',
  },
  {
    title: 'IT User Support Officer',
    company: 'University of Ulster',
    location: 'Belfast',
    period: 'May 2008 - September 2010',
    description: 'Provided technical ICT support and deployment services for classroom facilities, IT and videoconferencing systems. Managed service desk calls and participated in project teams. Gained extensive experience in deploying Microsoft/Apple operating systems in large-scale environments.',
  },
  {
    title: 'International Program Manager',
    company: 'Microsoft Ireland',
    location: 'Dublin',
    period: 'July 2007 - September 2008',
    description: 'Oversaw and troubleshot major sections of the Fileflow systems for Office 12 Projects. Maintained automated file checker and build process. Developed skills in scripting, XML/XSLT manipulation, HTML, Microsoft Office suite, and command line operations.',
  },
]

const ExperienceTimeline = () => {
  return (
    <section 
      id="experience" 
      className="section-container bg-background-alt pt-24 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
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