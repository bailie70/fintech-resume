import { motion } from 'framer-motion'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

const educationDetails = [
  {
    degree: 'BSc Hons',
    field: 'Information and Communication Technologies',
    institution: 'University of Ulster',
    period: 'September 2005 - June 2009',
    grade: 'First Class Honours',
    icon: <AcademicCapIcon className="w-8 h-8 text-accent-green" />
  },
  {
    degree: 'Post Graduate Certificate (PGC)',
    field: 'eLearning: Interactive Teaching Technologies',
    institution: 'University of Ulster',
    period: 'September 2009 – June 2010',
    grade: 'Merit',
    icon: <AcademicCapIcon className="w-8 h-8 text-accent-green" />
  },
]

const EducationCard = ({ education }: { education: typeof educationDetails[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6"
    >
      <div className="flex items-start gap-4 mb-4">
        {education.icon}
        <div>
          <h3 className="text-xl font-bold text-primary-dark">{education.degree}</h3>
          <p className="text-lg text-gray-700">{education.field}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-gray-600">{education.institution}</p>
        <p className="text-gray-600">{education.period}</p>
        <p className="text-accent-green font-semibold">Grade: {education.grade}</p>
      </div>
    </motion.div>
  )
}

const EducationSection = () => {
  return (
    <section id="education" className="section-container bg-background-alt py-20 pt-24 scroll-mt-16">
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
          Education
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Academic qualifications and achievements in technology and education
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationDetails.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default EducationSection 