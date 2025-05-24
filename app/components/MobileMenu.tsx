import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  isDayMode: boolean
  onToggleMode: () => void
}

const MobileMenu = ({ isOpen, onClose, isDayMode, onToggleMode }: MobileMenuProps) => {
  const menuItems = [
    { href: '#', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />
          
          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-50"
          >
            <div className="p-4 flex flex-col h-full">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              
              <nav className="mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="block py-3 text-lg font-medium text-gray-600 hover:text-accent-green transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto pb-8">
                <button
                  onClick={onToggleMode}
                  className="w-full py-3 px-4 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  Switch to {isDayMode ? 'Night' : 'Day'} Mode
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu 