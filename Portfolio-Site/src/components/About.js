import React from 'react'
import ScrollIntoView from 'react-scroll-into-view';
import {FaChevronDown} from 'react-icons/fa'

const About = () => {
  return (
    <div className="max-w-4xl mt-16 mx-auto">
        <p className="text-2xl text-black text-center md:text-4xl font-bold">
            Hey 👋
        </p>
        <p className="text-base text-gray-600 text-center sm:text-xl leading-relaxed mt-4">
      
            I am Krishna Chaitanya A Front End Web Developer and an enthusiastic learner who likes to explore things.I have my expertise in Java Script and its famous libraries like React JS and Next JS 
        </p>
       <ScrollIntoView selector='#skills'>
      <div className="mx-auto p-16">
          <FaChevronDown className="animate-bounce text-3xl text-blue-500 mx-auto" />
      </div>

       </ScrollIntoView>
    </div>
  )
}

export default About