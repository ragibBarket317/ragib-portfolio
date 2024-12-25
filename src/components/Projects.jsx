import { motion } from 'motion/react'

const Projects = () => {
  return (
    <div className="py-[80px]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[44px] font-bold">Projects</h2>
        <p className="text-center">
          I have worked on a wide range of projects. Here are some of my
          projects.
        </p>
        <div className="mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-4 items-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-[#212428]  h-[400px] rounded p-5 shadow-custom"
          >
            <div className="h-[200px] rounded border"></div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="bg-[#212428]  h-[400px] rounded p-5 shadow-custom"
          >
            <div className="h-[200px] rounded border"></div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="bg-[#212428]  h-[400px] rounded p-5 shadow-custom"
          >
            <div className="h-[200px] rounded border"></div>
          </motion.div>
        </div>
        <div className="mt-24 ">
          <div className="border-t border-black"></div>
        </div>
      </div>
    </div>
  )
}

export default Projects
