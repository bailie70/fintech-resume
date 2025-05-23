import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Blockchain Payment Gateway',
    description: 'A secure, high-performance payment gateway leveraging blockchain technology for instant cross-border transactions. Features include smart contract integration, multi-currency support, and real-time settlement.',
    technologies: ['Ethereum', 'Solidity', 'Web3.js', 'React', 'TypeScript'],
    link: 'https://github.com/yourusername/blockchain-gateway',
    icon: <CodeBracketIcon className="w-8 h-8 text-accent-green" />,
    stats: {
      transactions: '1M+',
      volume: '$500M+',
      users: '50K+'
    }
  },
  {
    title: 'Investment Analytics Platform',
    description: 'AI-powered investment analytics platform providing real-time market insights, portfolio optimization, and predictive modeling. Built with advanced machine learning algorithms and real-time data processing.',
    technologies: ['Python', 'TensorFlow', 'Node.js', 'PostgreSQL', 'AWS'],
    link: 'https://github.com/yourusername/investment-analytics',
    icon: <ChartBarIcon className="w-8 h-8 text-accent-green" />,
    stats: {
      accuracy: '94%',
      predictions: '10K+',
      assets: '1000+'
    }
  },
  {
    title: 'Digital Banking App',
    description: 'Modern digital banking solution with features like real-time transactions, budgeting tools, and AI-powered fraud detection. Emphasizes security and user experience with biometric authentication.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Firebase'],
    link: 'https://github.com/yourusername/digital-banking',
    icon: <CurrencyDollarIcon className="w-8 h-8 text-accent-green" />,
    stats: {
      users: '100K+',
      transactions: '5M+',
      uptime: '99.99%'
    }
  }
]

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-4">
            {project.icon}
            <h3 className="text-xl font-bold text-primary-dark">{project.title}</h3>
          </div>
          <motion.a
            href={project.link}
            className="text-accent-green hover:text-primary-dark transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </motion.a>
        </div>
        <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
        
        {/* Project Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-lg font-bold text-accent-green">{value}</div>
              <div className="text-sm text-gray-500 capitalize">{key}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 text-sm bg-background-alt text-primary-dark rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-container bg-background-alt py-20 pt-24 scroll-mt-16">
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
          Featured Projects
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Showcasing innovative solutions in blockchain, investment analytics, and digital banking
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default PortfolioSection 