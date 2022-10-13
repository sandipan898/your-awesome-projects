import {React, useEffect} from 'react'
import {SiTailwindcss , SiBootstrap , SiJavascript , SiHtml5 , SiCss3 , SiReact , SiNextdotjs} from 'react-icons/si'
import Aos from "aos";
import 'aos/dist/aos.css';

const Skills = () => {

    useEffect(() => {

        Aos.init({
          once:true,
        })
        
      })

  return (
    <div className="max-w-4xl mx-auto py-12 justify-center" id="skills">
        <p className="text-2xl text-center text-black sm:text-4xl font-bold">
            Technical Skills
        </p>
        <div className="flex flex-wrap justify-center pt-2">
        <div data-aos="fade-right" data-aos-duration="4000" delay="1000" >
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden rounded-xl sm:w-52 bg-white shadow-2xl">
            <SiTailwindcss color="#06b6d4"  className='mx-auto text-6xl' />
            <p className="text-xl font-semibold sm:text-2xl text-center text-black mt-6">Tailwind</p>

        </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="4000" delay="1300" >
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden rounded-xl sm:w-52 bg-white shadow-2xl">
            <SiJavascript  color=" #F0DB4F" className='mx-auto text-6xl' />
            <p className="text-xl font-semibold sm:text-2xl text-center text-black mt-6">Java Script</p>

        </div>

        </div>
        
        <div data-aos="fade-right" data-aos-duration="4000" delay="1600" >
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden rounded-xl sm:w-52 bg-white shadow-2xl">
            <SiBootstrap color='#563d7c'  className='mx-auto text-6xl' />
            <p className="text-xl font-semibold sm:text-2xl text-center  text-black mt-6">Bootstrap</p>

        </div>

        </div>
        
         
        <div data-aos="fade-left" data-aos-duration="4000" delay="2000" >
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden rounded-xl sm:w-52 bg-white shadow-2xl">
            < SiHtml5 color='#e34c26'  className='mx-auto text-6xl' />
            <p className="text-xl font-semibold sm:text-2xl text-center  text-black mt-6">HTML</p>

        </div>

        </div>

        <div data-aos="fade-right" data-aos-duration="4000" delay="2300" >
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden rounded-xl sm:w-52 bg-white shadow-2xl">
            <SiCss3  color='#264de4' className='mx-auto text-6xl' />
            <p className="text-xl font-semibold sm:text-2xl text-center  text-black mt-6">CSS</p>

        </div>

        </div>

        
        <div data-aos="fade-left" data-aos-duration="4000" delay="2600" >
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden rounded-xl sm:w-52 bg-white shadow-2xl">
            < SiReact color="#61DBFB" className='mx-auto text-6xl' />
            <p className="text-xl font-semibold sm:text-2xl text-center  text-black mt-4">React JS</p>

        </div>

        </div>
        <div data-aos="fade-right" data-aos-duration="4000" delay="3000" >
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden rounded-xl sm:w-52 bg-white shadow-2xl">
            <SiNextdotjs  className='mx-auto text-6xl' />
            <p className="text-xl font-semibold sm:text-2xl text-center  text-black mt-4">Next JS</p>

        </div>

        </div>
      
        </div>
    </div>
  )
}

export default Skills