import React from 'react'
import {FaGithub ,FaLinkedin , FaTwitter , FaEnvelope} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-5 border-t-3/2'>
        <div className="flex justify-center mt-4">
        <a  href="https://github.com/KrishnaChaitanya45" className="text-xl text-grey-800 hover:bg-gray-800 hover:text-white rounded-full m-1 p-1 sm:m-2 sm:p-2 transition-colors duration-300">
                <FaGithub />
                <span className="sr-only">Git Hub</span>
            </a>
            <a  href="https://twitter.com/KrishnaCT45" className="text-xl text-blue-500 hover:bg-blue-500 hover:text-white rounded-full m-1 p-1 sm:m-2 sm:p-2 transition-colors duration-300">
                <FaTwitter />
                <span className="sr-only">Twitter</span>
            </a>
            <a  href="mailto:kommerakrishnachaitanya@gmail.com" className="text-xl text-red-500 hover:bg-red-500 hover:text-white rounded-full m-1 p-1 sm:m-2 sm:p-2 transition-colors duration-300">
                <FaEnvelope />
                <span className="sr-only">Gmail</span>
            </a>
            <a  href="https://www.linkedin.com/in/krishna-chaitanya-kommera/" className="text-xl text-[rgb(0,119,181)] hover:bg-blue-500 hover:text-white rounded-full m-1 p-1 sm:m-2 sm:p-2 transition-colors duration-300">
                <FaLinkedin />
                <span className="sr-only">Linkedin</span>
            </a>

        </div>
        <div className="flex justify-center mt-4">
            <p className="text-black-600 mb-4">
                Made With  <a className="text-blue-400 hover:underline" href="https://tailwindcss.com/">Tailwind CSS</a> and <a className="text-blue-400 hover:underline" href="https://reactjs.org/">React JS</a> By <a className="text-red-500 hover:underline" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMhdXKNZpDJNLsFMZgzmnhzPjjzsLmNbcZWTQzZFFrRfBVcFWxddTqHJnkVzZlrshsNrhL"> Krishna Chaitanya</a>
            </p>
        </div>
    </div>
  )
}

export default Footer