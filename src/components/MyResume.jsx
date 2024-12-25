import { useState } from 'react'
import { motion } from 'framer-motion'

const MyResume = () => {
  const [resume, setResume] = useState('experiance')

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  }

  return (
    <div className="py-[80px]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[44px] font-bold">My Resume</h2>
        <div className="text-center mt-10">
          <motion.button
            onClick={() => setResume('experiance')}
            className={`mr-2 px-6 py-3 font-bold rounded  ${
              resume === 'experiance'
                ? 'shadow-custom bg-[#212428]'
                : 'bg-black'
            }`}
          >
            Experience
          </motion.button>
          <motion.button
            onClick={() => setResume('education')}
            className={` px-6 py-3 font-bold rounded  ${
              resume === 'education' ? 'shadow-custom bg-[#212428]' : 'bg-black'
            }`}
          >
            Education
          </motion.button>
        </div>
        <div className="flex justify-between gap-[4%] mt-10">
          {resume === 'experiance' ? (
            <motion.div
              key="experiance"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex justify-between gap-[4%] w-full"
            >
              <div className="w-[48%] h-[200px] flex gap-2">
                <div className="flex flex-col items-center w-[5%]">
                  <div className="h-3 w-3 bg-purple-500 rounded-full border-2 border-purple-500"></div>
                  <div className="w-0.5 bg-purple-500 h-[200px]"></div>
                  <div className="h-3 w-3 bg-purple-500 rounded-full border-2 border-purple-500"></div>
                </div>
                <div className="shrink w-[95%] bg-[#212428] p-5 shadow-custom rounded">
                  <h2>Heydev Intern</h2>
                </div>
              </div>
              <div className="w-[48%] h-[200px] flex gap-2">
                <div className="flex flex-col items-center w-[5%]">
                  <div className="h-3 w-3 bg-purple-500 rounded-full border-2 border-purple-500"></div>
                  <div className="w-0.5 bg-purple-500 h-[200px]"></div>
                  <div className="h-3 w-3 bg-purple-500 rounded-full border-2 border-purple-500"></div>
                </div>
                <div className="shrink w-[95%] bg-[#212428] p-5 shadow-custom rounded">
                  <h2>Freelance Work</h2>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="education"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex justify-between gap-[4%] w-full"
            >
              <div className="w-[48%] h-[200px] flex gap-2">
                <div className="flex flex-col items-center w-[5%]">
                  <div className="h-3 w-3 bg-green-500 rounded-full border-2 border-green-500"></div>
                  <div className="w-0.5 bg-green-500 h-[200px]"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full border-2 border-green-500"></div>
                </div>
                <div className="shrink w-[95%] bg-[#212428] p-5 shadow-custom rounded">
                  <h2>Prime University</h2>
                </div>
              </div>
              <div className="w-[48%] h-[200px] flex gap-2">
                <div className="flex flex-col items-center w-[5%]">
                  <div className="h-3 w-3 bg-green-500 rounded-full border-2 border-green-500"></div>
                  <div className="w-0.5 bg-green-500 h-[200px]"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full border-2 border-green-500"></div>
                </div>
                <div className="shrink w-[95%] bg-[#212428] p-5 shadow-custom rounded">
                  <h2>HSC</h2>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        <div className="mt-24">
          <div className="border-t border-black"></div>
        </div>
      </div>
    </div>
  )
}

export default MyResume
