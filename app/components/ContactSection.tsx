import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Contact } from '../../lib/content-loader'

interface ContactSectionProps {
  content: Contact
}

const ContactSection = ({ content }: ContactSectionProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    // This could connect to an API endpoint, email service, or form backend
  }

  return (
    <section id="contact" className="section-container bg-white dark:bg-gray-900 py-20 pt-24 pb-96 scroll-mt-16">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black dark:text-white">
          {content.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          {content.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-4">
                {content.info.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {content.info.description}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-background-alt dark:bg-gray-800 p-3 rounded-full">
                  <EnvelopeIcon className="w-6 h-6 text-accent-green dark:text-accent-green" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{content.info.details.email.label}</p>
                  <a href={`mailto:${content.info.details.email.value}`} className="text-primary-dark dark:text-white hover:text-accent-green dark:hover:text-accent-green">
                    {content.info.details.email.value}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-background-alt dark:bg-gray-800 p-3 rounded-full">
                  <PhoneIcon className="w-6 h-6 text-accent-green dark:text-accent-green" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{content.info.details.phone.label}</p>
                  <a href={`tel:${content.info.details.phone.value}`} className="text-primary-dark dark:text-white hover:text-accent-green dark:hover:text-accent-green">
                    {content.info.details.phone.value}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-primary-dark dark:text-white mb-4">
                {content.info.social.title}
              </h4>
              <div className="flex space-x-4">
                {content.info.social.links.map((link, index) => (
                  <SocialLink key={index} href={link.href} platform={link.platform} />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-xl dark:shadow-gray-900/50 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  {content.form.fields.name.label}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder={content.form.fields.name.placeholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  {content.form.fields.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder={content.form.fields.email.placeholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  {content.form.fields.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-accent-green focus:border-transparent outline-none transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder={content.form.fields.message.placeholder}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-accent-green dark:bg-accent-green text-white dark:text-white font-medium py-3 px-6 rounded-lg hover:bg-accent-green/90 dark:hover:bg-accent-green/80 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {content.form.submit}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

const SocialLink = ({ href, platform }: { href: string; platform: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-background-alt dark:bg-gray-800 text-primary-dark dark:text-gray-300 hover:text-accent-green dark:hover:text-accent-green p-3 rounded-full transition-colors duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <span className="sr-only">{platform}</span>
    {platform === 'LinkedIn' && (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )}
    {platform === 'GitHub' && (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    )}
    {platform === 'Twitter' && (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    )}
  </motion.a>
)

export default ContactSection 