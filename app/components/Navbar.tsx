import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/outline'
import MobileMenu from './MobileMenu'
import { useTheme } from '../contexts/ThemeContext'
import { Navigation } from '../../lib/content-loader'

interface NavbarProps {
  content: Navigation
}

const Navbar = ({ content }: NavbarProps) => {
  const { isDayMode, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
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
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed w-full z-40 transition-all duration-300 bg-white dark:bg-gray-900 ${
          scrolled ? 'shadow-lg dark:shadow-gray-800' : 'shadow-md dark:shadow-gray-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold text-primary-dark dark:text-white hover:text-accent-green dark:hover:text-accent-green transition-colors duration-300">
                {content.brand}
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {content.links.map((link) => (
                <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
              ))}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-colors duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isDayMode ? 'Switch to night mode' : 'Switch to day mode'}
              >
                {isDayMode ? (
                  <MoonIcon className="w-5 h-5 text-primary-dark dark:text-gray-200" />
                ) : (
                  <SunIcon className="w-5 h-5 text-primary-dark dark:text-yellow-400" />
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-full transition-colors duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Bars3Icon className="w-6 h-6 text-primary-dark dark:text-gray-200" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        content={content}
      />
    </>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
  >
    {children}
  </a>
)

export default Navbar 