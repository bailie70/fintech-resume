import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'Lorem Technologies',
    skills: [
      'Lorem Ipsum Generator Pro',
      'Dolor Sit Framework',
      'Amet Cloud Platform',
      'Consectetur Analytics Suite',
    ]
  },
  {
    name: 'Ipsum Systems',
    skills: [
      'Dolor Administration',
      'Sit Architecture',
      'Amet Scripting',
      'Elit Performance Tools',
      'Eiusmod Monitoring',
      'Tempor Analytics',
    ]
  },
  {
    name: 'Development Stack',
    skills: [
      'Lorem',
      'Ipsum',
      'Dolor',
      'Sit',
      'Amet',
      'Elit',
    ]
  },
  {
    name: 'Tools & Platforms',
    skills: [
      'Consectetur Version Control',
      'Adipiscing Build Tools',
      'Elit Development Suite',
      'Tempor Cloud Platform',
    ]
  }
]

const SkillItem = ({ name }: { name: string }) => {
  return (
    <div className="py-2 border-b border-gray-100 last:border-0">
      <span className="text-sm font-medium text-primary-dark">{name}</span>
    </div>
  )
}

const SkillCategory = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h3 className="text-xl font-bold text-primary-dark mb-4">{category.name}</h3>
      <div>
        {category.skills.map((skill, idx) => (
          <SkillItem key={idx} name={skill} />
        ))}
      </div>
    </motion.div>
  )
}

const SkillsSection = () => {
  return (
    <section 
      id="skills" 
      className="section-container bg-background-alt pt-24 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
          Dolor Sit Amet
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection 