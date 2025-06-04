import { motion } from 'framer-motion'
import { Skills, SkillCategory } from '../../lib/content-loader'

interface SkillsSectionProps {
  content: Skills
}

const SkillItem = ({ name }: { name: string }) => {
  return (
    <div className="py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
      <span className="text-sm font-medium text-primary-dark dark:text-gray-300">{name}</span>
    </div>
  )
}

const SkillCategoryComponent = ({ category, index }: { category: SkillCategory; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6"
    >
      <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-4">{category.name}</h3>
      <div>
        {category.skills.map((skill, idx) => (
          <SkillItem key={idx} name={skill} />
        ))}
      </div>
    </motion.div>
  )
}

const SkillsSection = ({ content }: SkillsSectionProps) => {
  return (
    <section 
      id="skills" 
      className="section-container bg-background-alt dark:bg-gray-900 pt-24 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black dark:text-white">
          {content.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          {content.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.categories.map((category, index) => (
            <SkillCategoryComponent key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection 