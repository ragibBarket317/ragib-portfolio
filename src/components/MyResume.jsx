import { div } from 'motion/react-client'
import { useState } from 'react'

const MyResume = () => {
  const [resume, setResume] = useState('experiance')
  return (
    <div className="py-[80px]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[44px] font-bold">My Resume</h2>
        <div className="text-center mt-10">
          <button
            onClick={() => setResume('experiance')}
            className="mr-2 px-4 py-2 bg-black rounded "
          >
            Experiance
          </button>
          <button
            onClick={() => setResume('education')}
            className="mr-5 px-4 py-2 bg-black rounded "
          >
            Education
          </button>
        </div>
        {resume === 'experiance' ? (
          <div className="flex justify-between gap-[4%] mt-10">
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
              <div className="shrink w-[95%] bg-[#212428]  p-5 shadow-custom rounded">
                <h2>Freelance Work</h2>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-between gap-[4%] mt-10">
            <div className="w-[48%] h-[200px] bg-[#212428]  p-5 shadow-custom rounded">
              <h2>Prime University</h2>
            </div>
            <div className="w-[48%] h-[200px] bg-[#212428]  p-5 shadow-custom rounded">
              <h2>HSC</h2>
            </div>
          </div>
        )}
        <div className="mt-24 ">
          <div className="border-t border-black"></div>
        </div>
      </div>
    </div>
  )
}

export default MyResume
