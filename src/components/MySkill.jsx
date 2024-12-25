import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const MySkill = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="py-[80px] rounded-bl-[15%]   bg-skills">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          // Triggers every time it comes into view
          transition={{ duration: 0.8 }}
          className="text-center text-[44px] font-bold mb-10"
        >
          My Skills
        </motion.h2>
        <div className="flex flex-col lg:flex-row md:items-center lg:justify-between gap-10 ">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-purple-500 border w-full md:w-[80%] lg:w-[60%] lg:h-[250px] rounded shadow-2xl bg-[#212428] p-8"
          >
            <h2 className="text-2xl font-bold">Frontend</h2>
            <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr] gap-4 mt-4">
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/html5.png" className="w-8 h-8" alt="" />
                <p>HTML</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/css-3.png" className="w-8 h-8" alt="" />
                <p>CSS</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/tailwind.png" className="w-8 h-8" alt="" />
                <p>TAILWIND CSS</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/js.png" className="w-8 h-8" alt="" />
                <p>JavaScript</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/react.png" className="w-12 h-8 " alt="" />
                <p>REACT</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/next.png" className="w-8 h-8" alt="" />
                <p>NEXT JS</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-purple-500 border w-full md:w-[80%] lg:w-[60%] md:h-[250px] rounded bg-[#212428] p-8"
          >
            <h2 className="text-2xl font-bold">Backend</h2>
            <div className="grid grid-cols-2  md:grid-cols-[1fr_1fr_1fr] gap-4 mt-4">
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/node.png" className="w-8 h-8 " alt="" />
                <p>NODE JS</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img
                  src="/express.png"
                  className="w-8 h-8 object-cover"
                  alt=""
                />
                <p>EXPRESS JS</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/mongodb.png" className="w-5 h-8 " alt="" />
                <p>MONGODB</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img
                  src="/firebase.png"
                  className="w-8 h-8 object-cover"
                  alt=""
                />
                <p>FIREBASE</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border-purple-500 border w-full md:w-[80%] lg:w-[60%] lg:h-[250px] rounded bg-[#212428] p-8 mt-11"
          >
            <h2 className="text-2xl font-bold">Others</h2>
            <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr] gap-4 mt-4">
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/git.png" className="w-8 h-8 " alt="" />
                <p>GIT</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img
                  src="/github.png"
                  className="w-8 h-8 object-cover"
                  alt=""
                />
                <p>GITHUB</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/axios.png" className="w-5 h-8 " alt="" />
                <p>AXIOS</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/figma.png" className="w-8 h-8 object-cover" alt="" />
                <p>FIGMA</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img
                  src="/vercel.png"
                  className="w-8 h-8 object-cover"
                  alt=""
                />
                <p>VERCEL</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MySkill
