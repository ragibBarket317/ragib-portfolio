import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'motion/react'
const Hero = () => {
  return (
    <section id="home">
      <div className="py-32 lg:flex lg:flex-col lg:h-screen lg:justify-center">
        <div className="flex flex-col lg:flex-row gap-[2%]">
          <div className="w-full order-2 lg:order-1 lg:w-[55%]">
            <h3 className="text-[14px] tracking-widest uppercase leading-3">
              Welcome to my world
            </h3>
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[38px] md:text-[46px] lg:text-[60px]  font-bold "
            >
              Hi, I’m <span className="text-[#ff014f]">Ragib Barket</span>
              <br />
              Frontend Developer.
            </motion.h2>
            <p className="text-[16px] text-gray-100">
              I’m a frontend developer with one years of professional experience
              in creating responsive and user-friendly web applications. My
              expertise lies in technologies like HTML, CSS, JavaScript, React,
              and modern styling frameworks such as Tailwind CSS and Bootstrap.
            </p>
            <div className="mt-28">
              <div>
                <h3 className="tracking-widest">FIND WITH ME</h3>
                <div className="flex gap-4 mt-4">
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
          </div>
          {/* <div className="w-[43%] bg-[url('/white-line-bg.jpg')] bg-cover bg-center flex justify-center items-center shadow-2xl rounded-[5px]">
            <motion.div
              animate={{ rotate: 2 }}
              transition={{ ease: 'easeOut', duration: 0.5 }}
              className="border border-purple-500 w-[80%] h-[380px] mx-auto rounded-[5px] flex justify-center items-center shadow-2xl"
            >
              <motion.div
                animate={{ rotate: -4 }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
                className="border border-purple-500 w-[90%] h-[380px] mx-auto rounded-[5px] flex justify-center items-center shadow-2xl"
              >
                <motion.img
                  animate={{ x: 0, opacity: 1, rotate: 4 }}
                  src="/ragib.png"
                  className="w-[90%] h-[90%] object-cover rounded-[5px]"
                  alt=""
                />
              </motion.div>
            </motion.div>
          </div> */}
          <div className="relative w-full order-1 lg:order-2 lg:w-[43%] bg-cover bg-center flex justify-center items-center rounded-[5px] mb-16 lg:mb-0 ">
            <div className="absolute inset-0 bg-pattern  rounded-[5px]"></div>

            <div className="relative z-10 border rotate-2 border-purple-500 w-[80%] h-[380px] mx-auto rounded-[5px] flex justify-center items-center shadow-custom">
              <div className="border border-purple-500 w-[90%]  h-[380px] rotate-[-5deg] mx-auto rounded-[5px] flex justify-center items-center shadow-custom">
                <img
                  src="/ragib.png"
                  className="w-[90%] h-[90%] object-cover rounded-[5px] rotate-[5deg]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-top-1735042886">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
