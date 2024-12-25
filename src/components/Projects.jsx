import { div } from 'motion/react-client'

const Projects = () => {
  return (
    <div className="py-[80px]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[44px] font-bold">Projects</h2>
        <p className="text-center">
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-4 items-center">
          <div className="bg-[#212428]  h-[400px] rounded p-5 shadow-custom">
            <div className="h-[200px] rounded border"></div>
          </div>
          <div className="bg-[#212428]  h-[400px] rounded p-5 shadow-custom">
            <div className="h-[200px] rounded border"></div>
          </div>
          <div className="bg-[#212428]  h-[400px] rounded p-5 shadow-custom">
            <div className="h-[200px] rounded border"></div>
          </div>
        </div>
        <div className="mt-24 ">
          <div className="border-t border-black"></div>
        </div>
      </div>
    </div>
  )
}

export default Projects
