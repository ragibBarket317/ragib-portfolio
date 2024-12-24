import { motion } from 'framer-motion'

const MySkill = () => {
  return (
    <div className="py-[80px] bg-skills">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }} // Triggers every time it comes into view
          transition={{ duration: 0.8 }}
          className="text-center text-[44px] font-bold mb-10"
        >
          My Skills
        </motion.h2>
        <div className="flex justify-between gap-10 ">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-purple-500 border w-[60%] h-[200px] rounded shadow-2xl bg-[#212428] p-8"
          >
            <h2 className="text-2xl font-bold">Frontend</h2>
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr] items-center justify-center gap-4 mt-4">
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/html5.png" className="w-5 h-5 object-cover" alt="" />
                <p>HTML</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/css-3.png" className="w-5 h-5 object-cover" alt="" />
                <p>CSS</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/js.png" className="w-5 h-5 object-cover" alt="" />
                <p>JavaScript</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/react.png" className="w-5 h-5 object-cover" alt="" />
                <p>REACT</p>
              </div>
              <div className="flex items-center gap-2 border rounded-lg p-2">
                <img src="/next.png" className="w-5 h-5 object-cover" alt="" />
                <p>NEXT JS</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-purple-500 border w-[60%] h-[200px] rounded bg-[#212428] p-8"
          ></motion.div>
        </div>
      </div>
    </div>
  )
}

export default MySkill
