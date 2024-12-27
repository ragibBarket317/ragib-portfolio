import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaRegEnvelope,
} from 'react-icons/fa'
import { motion } from 'motion/react'

const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center ">
          <h2 className="text-3xl font-bold">Ragib Barket</h2>
        </div>

        <div className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-300">
          <div className="flex justify-center gap-5">
            <div className="flex items-center font-bold gap-2">
              <FaPhoneAlt className="" /> <span>01774086317</span>
            </div>
            <div className="flex items-center font-bold gap-2">
              <FaRegEnvelope /> <span>ragibrahman86317@gmail.com</span>
            </div>
          </div>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className="text-gray-300 transition hover:text-gray-300/75"
              href="#skills"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              className="text-gray-300 transition hover:text-gray-300/75"
              href="#projects"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              className="text-gray-300 transition hover:text-gray-300/75 dark:text-white dark:hover:text-white/75"
              href="#resume"
            >
              Resume
            </a>
          </li>

          <li>
            <a
              className="text-gray-300 transition hover:text-gray-300/75 dark:text-white dark:hover:text-white/75"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="mt-10">
          <div>
            <div className="flex justify-center gap-4 mt-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="w-10 h-10 flex justify-center items-center bg-black shadow-2xl"
              >
                <a href="https://www.facebook.com/rb.ragib" target="_blank">
                  <FaFacebookF />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="w-10 h-10 flex justify-center items-center bg-black shadow-2xl"
              >
                <a href="https://github.com/ragibBarket317" target="_blank">
                  <FaGithub />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="w-10 h-10 flex justify-center items-center bg-black shadow-2xl"
              >
                <a
                  href="https://www.linkedin.com/in/ragib-barket-a6b675215"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center">
          &copy; 2024 Ragib Barket. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
