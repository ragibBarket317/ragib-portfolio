import Lottie from 'lottie-react'
import contactAnimation from '../assets/contact-animation.json'
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
import emailjs from 'emailjs-com'
import { useState } from 'react'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsSubmitting(true)

    emailjs
      .send(
        `${import.meta.env.VITE_EMAIL_SERVICES_ID}`, // Replace with your EmailJS Service ID
        `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`, // Replace with your EmailJS Template ID
        formData,
        `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}` // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          setSuccessMessage('Your message has been sent successfully!')
          setIsSubmitting(false)
          setFormData({ name: '', email: '', subject: '', message: '' })
        },
        (error) => {
          console.error('Failed to send message:', error)
          setIsSubmitting(false)
        }
      )
  }

  return (
    <div id="contact" className="py-[80px]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[44px] font-bold">Contact With Me</h2>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[4%] mt-10">
          <div className="w-full lg:w-[40%] h-[650px] bg-[#212428] shadow-custom rounded-lg p-5">
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
                <p className="">ragibrahman86317@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <p className="p-2 bg-black rounded-full">
                  <CiLocationOn className="w-5 h-5" />
                </p>
                <p className="">Mirpur-11, Dhaka</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[56%] bg-[#212428] h-[650px] shadow-custom rounded-lg p-10">
            <h2 className="font-bold text-2xl mb-3">Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full h-12 mt-4 rounded px-4 bg-[#212428] border"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full h-12 mt-4 rounded px-4 bg-[#212428] border"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full h-12 mt-4 rounded px-4 bg-[#212428] border"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols="30"
                rows="9"
                placeholder="Your Message"
                className="w-full mt-4 rounded px-4 bg-[#212428] border py-2"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 mt-4 rounded px-4 bg-black text-white"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {successMessage && (
              <p className="text-green-500 text-center mt-4">
                {successMessage}
              </p>
            )}
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
