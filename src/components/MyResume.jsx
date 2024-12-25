import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'

const MyResume = () => {
  const [resume, setResume] = useState('experiance')

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  }

  return (
    <div id="resume" className="py-[80px]">
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
              className="flex flex-col lg:flex-row md:justify-between gap-10 lg:gap-[4%] w-full"
            >
              <div className="w-full lg:w-[48%] lg:h-[300px] flex gap-2">
                <div className="flex flex-col items-center w-[5%]">
                  <div className="h-3 w-3 bg-purple-500 rounded-full border-2 border-purple-500"></div>
                  <div className="w-0.5 bg-purple-500 h-[300px]"></div>
                  <div className="h-3 w-3 bg-purple-500 rounded-full border-2 border-purple-500"></div>
                </div>
                <div className="shrink w-[95%] bg-[#212428] px-5 py-6 shadow-custom rounded">
                  <h2 className="font-bold text-[20px]">
                    Frontend Developer Intern
                  </h2>
                  <p className="font-bold flex items-center gap-2 my-2">
                    {' '}
                    <HiOutlineOfficeBuilding className="w-5 h-5" /> Heydev
                  </p>
                  <p className="text-gray-400 text-[14px]">
                    March 2022 – October 2022
                  </p>
                  <div className="mt-3">
                    <li>
                      Developed responsive and interactive user interfaces using
                      React.js, adhering to modern best practices and reusable
                      component design.
                    </li>
                    <li>
                      Collaborated with designers and backend developers to
                      create seamless RESTful API integrations.
                    </li>
                    <li>
                      Utilized React Router for navigation and dynamic routing
                      across the application.
                    </li>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[48%] lg:h-[350px] flex gap-2">
                <div className="flex flex-col items-center w-[5%]">
                  <div className="h-3 w-3 bg-purple-500 rounded-full border-2 border-purple-500"></div>
                  <div className="w-0.5 bg-purple-500 h-[350px]"></div>
                  <div className="h-3 w-3 bg-purple-500 rounded-full border-2 border-purple-500"></div>
                </div>
                <div className="shrink w-[95%] bg-[#212428] px-5 py-6 shadow-custom rounded">
                  <h2 className="font-bold text-[20px]">
                    Working For Freelance Project
                  </h2>
                  <p className="font-bold flex items-center gap-2 my-2">
                    {' '}
                    <HiOutlineOfficeBuilding className="w-5 h-5" /> My Clinic -
                    Dashboard
                  </p>
                  <p className="text-gray-400 text-[14px]">
                    March 2024 - July 2024
                  </p>
                  <div className="mt-3">
                    <li>
                      Designed and developed a user-friendly dashboard interface
                      with advanced patient management features, including data
                      visualization (charts) and export functionalities.
                    </li>
                    <li>
                      Built critical functionalities such as profile updates,
                      document management, theme customization (dark mode, color
                      options), and multi-language support.
                    </li>
                    <li>
                      Integrated REST APIs for seamless front-end and back-end
                      communication.
                    </li>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="education"
              variants={variants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, amount: 0.2 }}
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row md:justify-between gap-10 lg:gap-[4%] w-full"
            >
              <div className="w-full lg:w-[48%] lg:h-[200px] flex gap-2">
                <div className="flex flex-col items-center w-[5%]">
                  <div className="h-3 w-3 bg-green-500 rounded-full border-2 border-green-500"></div>
                  <div className="w-0.5 bg-green-500 h-[200px]"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full border-2 border-green-500"></div>
                </div>
                <div className="shrink w-[95%] bg-[#212428] p-5 shadow-custom rounded">
                  <h2 className="font-bold text-[20px]">Prime University</h2>
                  <p className="text-gray-400 text-[16px] my-2">
                    BSc in Computer Science and Engineering
                  </p>
                  <p className="text-gray-400 text-[14px]">2022 - Present</p>
                  <p className="text-gray-200 text-[15px] mt-2">
                    I am pursuing a Bachelor of Science in Computer Science and
                    Engineering at Prime University in Dhaka
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[48%] lg:h-[200px] flex gap-2">
                <div className="flex flex-col items-center w-[5%]">
                  <div className="h-3 w-3 bg-green-500 rounded-full border-2 border-green-500"></div>
                  <div className="w-0.5 bg-green-500 h-[200px]"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full border-2 border-green-500"></div>
                </div>
                <div className="shrink w-[95%] bg-[#212428] p-5 shadow-custom rounded">
                  <h2 className="font-bold text-[20px]">
                    Lalmonirhat Govt. College
                  </h2>
                  <p className="text-gray-400 text-[16px] my-2">
                    HSC(Xll), Science
                  </p>
                  <p className="text-gray-400 text-[14px]">2016 - 2018</p>
                  <p className="text-gray-200 text-[15px] mt-2">
                    I completed my class 12 high school education at Lalmonirhat
                    Govt. College, Lalmonirhat, where I studied in Science
                    group.
                  </p>
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
