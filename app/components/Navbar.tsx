import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/outline'
import MobileMenu from './MobileMenu'

interface NavbarProps {
  isDayMode: boolean;
  onToggleMode: () => void;
}

const Navbar = ({ isDayMode, onToggleMode }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Handle background change
      if (currentScrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Handle navbar visibility
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true)
      } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed w-full z-40 transition-all duration-300 bg-white ${
          scrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold text-primary-dark hover:text-accent-green transition-colors duration-300">
                JB
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink href="#">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <motion.button
                onClick={onToggleMode}
                className="p-2 rounded-full transition-colors duration-300 bg-gray-100 hover:bg-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isDayMode ? 'Switch to night mode' : 'Switch to day mode'}
              >
                {isDayMode ? (
                  <MoonIcon className="w-5 h-5 text-primary-dark" />
                ) : (
                  <SunIcon className="w-5 h-5 text-primary-dark" />
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-full transition-colors duration-300 bg-gray-100 hover:bg-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Bars3Icon className="w-6 h-6 text-primary-dark" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isDayMode={isDayMode}
        onToggleMode={onToggleMode}
      />
    </>
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