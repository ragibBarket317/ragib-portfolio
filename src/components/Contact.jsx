import Lottie from 'lottie-react'
import contactAnimation from '../assets/contact-animation.json'
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
const Contact = () => {
  return (
    <div className="py-[80px]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[44px] font-bold">Contact With Me</h2>
        <div className="flex gap-[4%] mt-10">
          <div className="w-[40%] h-[650px] bg-[#212428] shadow-custom rounded-lg p-5">
            <div className="h-[300px] rounded ">
              <div className="w-full h-full flex justify-center items-center">
                <Lottie animationData={contactAnimation} />
              </div>
              <h2 className="font-bold text-2xl mt-6">Let's Discuss</h2>
              <p className="mt-4">
                I am currently seeking new opportunities. Feel free to ask any
                questions, and rest assured that I will respond promptly!
              </p>
              <div className="flex items-center gap-2 mt-4">
                <p className="p-2 bg-black rounded-full">
                  <FaPhoneAlt className="w-5 h-5" />
                </p>
                <p className="">+880 1774-086317</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <p className="p-2 bg-black rounded-full">
                  <FaRegEnvelope className="w-5 h-5" />
                </p>
                <p className="">ragibrahman86217@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <p className="p-2 bg-black rounded-full">
                  <CiLocationOn className="w-5 h-5" />
                </p>
                <p className="">Mirpur-11, Dhaka</p>
              </div>
            </div>
          </div>
          <div className="w-[56%] bg-[#212428] h-[650px] shadow-custom rounded-lg p-10">
            <h2 className="font-bold text-2xl mb-3">Contact Form</h2>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-12 mt-4 rounded px-4  bg-[#212428] border"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="w-full h-12 mt-4 rounded px-4 bg-[#212428] border"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full h-12 mt-4 rounded px-4 bg-[#212428] border"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="9"
                placeholder="Your Message"
                className="w-full mt-4 rounded px-4 bg-[#212428] border py-2"
              ></textarea>
              <button className="w-full h-12 mt-4 rounded px-4 bg-black">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="border-t border-black"></div>
        </div>
      </div>
    </div>
  )
}

export default Contact
