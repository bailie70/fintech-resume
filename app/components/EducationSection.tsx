import { motion } from 'framer-motion'
import { AcademicCapIcon } from '@heroicons/react/24/outline'
import { Education, EducationItem } from '../../lib/content-loader'

interface EducationSectionProps {
  content: Education
}

const EducationCard = ({ education }: { education: EducationItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900/70 transition-all duration-300 p-6"
    >
      <div className="flex items-start gap-4 mb-4">
        <AcademicCapIcon className="w-8 h-8 text-accent-green dark:text-accent-green" />
        <div>
          <h3 className="text-xl font-bold text-primary-dark dark:text-white">{education.degree}</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">{education.field}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-gray-600 dark:text-gray-400">{education.institution}</p>
        <p className="text-gray-600 dark:text-gray-400">{education.period}</p>
        <p className="text-accent-green dark:text-accent-green font-semibold">Grade: {education.grade}</p>
      </div>
    </motion.div>
  )
}

const EducationSection = ({ content }: EducationSectionProps) => {
  return (
    <section id="education" className="section-container bg-background-alt dark:bg-gray-900 py-20 pt-24 scroll-mt-16">
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black dark:text-white">
          {content.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          {content.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.items.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default EducationSection 