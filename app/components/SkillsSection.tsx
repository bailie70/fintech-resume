import { motion } from 'framer-motion'

const skills = [
  { name: 'Blockchain Development', level: 90 },
  { name: 'Smart Contracts', level: 85 },
  { name: 'Financial Systems', level: 95 },
  { name: 'React/Next.js', level: 88 },
  { name: 'Node.js', level: 92 },
  { name: 'TypeScript', level: 90 },
  { name: 'API Development', level: 95 },
  { name: 'Database Design', level: 88 },
]

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-primary-dark">{name}</span>
        <span className="text-sm font-medium text-accent-green">{level}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-dark to-accent-green"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

const SkillsSection = () => {
  return (
    <section 
      id="skills" 
      className="section-container bg-white pt-24 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillBar name={skill.name} level={skill.level} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection 