import React from 'react'
import profile from './images/profile.png'
import {FaGithub ,FaLinkedin , FaTwitter , FaEnvelope} from 'react-icons/fa'

const Card = () => {
  return (
      
    <div className='w-full'>
        <div className="flex flex-col justify-center  max-w-xs shadow-xl mx-auto bg-white rounded-2xl p-5  drop-shadow-md">
            <div className="">
                <img src={profile} alt="profile" className="w-28 mx-auto rounded-full shadow-xl drop-shadow-sm" />
            </div>
            <div className="text-center mt-8 ">
                <p className="text-grey-900 text-xl sm:text-2xl ">Krishna Chaitanya Kommera</p>
                <p className="text-grey-900 text-xs sm:text-base pt-4 pb-4 w-auto inline-block  border-b-2">React JS / Next JS Developer</p>
                <div className="flex align-center justify-center mt-4">

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
            
            </div>
        </div>
    </div>
  )
}

export default Card