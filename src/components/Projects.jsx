import { motion } from 'motion/react'

const Projects = () => {
  return (
    <div id="projects" className="py-[80px]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[44px] font-bold">Projects</h2>
        <p className="text-center">
          I have worked on a wide range of projects. Here are some of my
          projects.
        </p>
        <div className="mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 items-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#212428]  h-[480px]  rounded p-5 shadow-custom"
          >
            <div className="h-[200px] rounded border">
              <img src="/cloth_store.png" className="w-full h-full" alt="" />
            </div>
            <h2 className="mt-5 mb-3 text-lg font-bold">Cloth Store</h2>
            <p className="text-gray-300 mb-2">
              The Cloth Store project is a full-stack web application designed
              to provide users with a seamless shopping experience.
            </p>
            <div className="my-4">
              <span className="bg-slate-600 py-1 px-3 rounded-full text-[12px] mr-2">
                React
              </span>
              <span className="bg-slate-600 py-1 px-3 rounded-full text-[12px] mr-2">
                Node.js
              </span>
              <span className="bg-slate-600 py-1 px-3 rounded-full text-[12px] mr-2">
                Express.js
              </span>
              <span className="bg-slate-600 py-1 px-3 rounded-full text-[12px] mr-2">
                MongoDB
              </span>
            </div>
            <div className="flex justify-self-end mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="ml-2 text-[14px] font-semibold bg-purple-800 py-2 px-4 rounded"
              >
                <a
                  href="https://github.com/ragibBarket317/cloth-store"
                  target="_blank"
                >
                  Code
                </a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="ml-2 text-[14px] font-semibold bg-purple-800 py-2 px-4 rounded"
              >
                <a href="https://cloth-store-smoky.vercel.app" target="_blank">
                  Live Preview
                </a>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#212428]  h-[480px] rounded p-5 shadow-custom"
          >
            <div className="h-[200px] rounded border">
              <img
                src="/cloth-store-admin.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <h2 className="mt-5 mb-3 text-lg font-bold">Cloth Store</h2>
            <p className="text-gray-300 mb-2">
              The Cloth Store project is a full-stack web application designed
              to provide users with a seamless shopping experience.
            </p>
            <div className="my-4">
              <span className="bg-slate-600 py-1 px-3 rounded-full text-[12px] mr-2">
                React
              </span>
              <span className="bg-slate-600 py-1 px-3 rounded-full text-[12px] mr-2">
                Node.js
              </span>
              <span className="bg-slate-600 py-1 px-3 rounded-full text-[12px] mr-2">
                Express.js
              </span>
              <span className="bg-slate-600 py-1 px-3 rounded-full text-[12px] mr-2">
                MongoDB
              </span>
            </div>
            <div className="flex justify-self-end mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="ml-2 text-[14px] font-semibold bg-purple-800 py-2 px-4 rounded"
              >
                <a
                  href="https://github.com/ragibBarket317/cloth-store"
                  target="_blank"
                >
                  Code
                </a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="ml-2 text-[14px] font-semibold bg-purple-800 py-2 px-4 rounded"
              >
                <a
                  href="https://cloth-store-admin-nine.vercel.app"
                  target="_blank"
                >
                  Live Preview
                </a>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#212428]  h-[480px] rounded p-5 shadow-custom"
          >
            <div className="h-[200px] rounded border">
              <img src="/weather.png" className="w-full h-full" alt="" />
            </div>
            <h2 className="mt-5 mb-3 text-lg font-bold">Weather Dashboard</h2>
            <p className="text-gray-300 mb-2">
              This is the weather dashboard project, which is a web application
              that provides real-time weather information for a location.
            </p>
            <div className="my-4">
              <span className="bg-slate-600 py-1 px-3 rounded-full text-[12px] mr-2">
                React
              </span>
              <span className="bg-slate-600 py-1 px-3 rounded-full text-[12px] mr-2">
                Open Weather API
              </span>
            </div>
            <div className="flex justify-self-end mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="ml-2 text-[14px] font-semibold bg-purple-800 py-2 px-4 rounded"
              >
                <a
                  href="https://github.com/ragibBarket317/weather-dashboard"
                  target="_blank"
                >
                  Code
                </a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="ml-2 text-[14px] font-semibold bg-purple-800 py-2 px-4 rounded"
              >
                <a
                  href="https://weather-dashboard-omega.vercel.app"
                  target="_blank"
                >
                  Live Preview
                </a>
              </motion.button>
            </div>
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
