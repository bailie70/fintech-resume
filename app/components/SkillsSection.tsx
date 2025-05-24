import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'Market Data Technologies',
    skills: [
      'TREP (Thomson Reuters Enterprise Platform)',
      'Bloomberg BPIPE',
      'VELA (Wombat Feed Handlers)',
      'Symbology of all major exchanges across vendors',
    ]
  },
  {
    name: 'Infrastructure & Systems',
    skills: [
      'UNIX/Linux Administration',
      'TCP/IP Networking',
      'Linux Shell Scripting',
      'System Monitoring & Performance',
      'Geneos (ITRS) Monitoring',
      'Prometheus/Grafana',
    ]
  },
  {
    name: 'Programming Languages',
    skills: [
      'Java',
      'Python',
      'SQL',
      'Bash',
      'Groovy',
      'Perl',
    ]
  },
  {
    name: 'Development Tools & Platforms',
    skills: [
      'Git Version Control',
      'Maven Build Tools',
      'IntelliJ/PyCharm/VSCode',
      'Linux/MacOS/Windows',
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
          Technical Skills
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Specialized in market data systems, infrastructure management, and software development
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