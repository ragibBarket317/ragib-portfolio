import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`${
        isScrolled
          ? 'fixed top-0 left-0 w-full z-50 bg-[#212428] shadow-md'
          : ''
      }`}
    >
      <div
        className={`${
          isScrolled && 'mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <h2 className="text-2xl font-bold text-white">
              <a href="#home">Ragib Barket</a>
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-200/75"
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-200/75"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-200/75"
                    href="#resume"
                  >
                    Resume
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-200/75"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              aria-label="Mobile Navigation"
              className="mt-2 md:hidden bg-[#212428] p-4 rounded-lg shadow-md"
            >
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    className="block text-gray-200 transition hover:text-gray-200/75"
                    href="#skills"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="block text-gray-200 transition hover:text-gray-200/75"
                    href="#resume"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    className="block text-gray-200 transition hover:text-gray-200/75"
                    href="#projects"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="block text-gray-200 transition hover:text-gray-200/75"
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
