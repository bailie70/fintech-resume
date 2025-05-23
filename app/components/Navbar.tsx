import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-primary-dark">
              YN
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#portfolio">Portfolio</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-primary-dark px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
  >
    {children}
  </a>
)

export default Navbar 