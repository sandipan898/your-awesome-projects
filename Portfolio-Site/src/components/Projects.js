import { React, useEffect } from "react";
import weather from "./images/weatherapp.png";
import notes from "./images/notes3.png";
import wordweb from "./images/wordweb4.png";
import { FaArrowRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div className="max-w-4xl mx-auto py-12 justify-center" id="skills">
      <p className="text-2xl text-center text-black sm:text-4xl font-bold">
        Projects
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div data-aos="fade-right" data-aos-duration="4000" delay="1000">
          <div className="flex flex-col  p-10 m-6 overflow-hidden rounded-xl h-auto bg-white shadow-2xl">
            <img src={weather} alt="" />
            <p className="text-xl font-semibold sm:text-2xl text-center text-black mt-6">
              Weather - PWA
            </p>
            <div className="max-w-lg w-full text-center mx-auto pt-4 pb-4 ">
              <a href="https://devfolio.co/projects/weather-pwa-8608">
                <span className="sm:mt-4 mt-2 text-white bg-black inline-block w-auto font-display text-base cursor-pointer py-4 px-7 md:text-xl rounded-2xl">
                  <div className="flex flex-row items-center">
                    <span className="mr-3 "> Know more</span>
                    <FaArrowRight />
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="4000" delay="2000">
          <div className="flex flex-col  p-10 m-6 overflow-hidden rounded-xl h-auto bg-white shadow-2xl">
            <img src={notes} alt="" />
            <p className="text-xl font-semibold sm:text-2xl text-center text-black mt-6">
              Sticky-Notes
            </p>
            <div className="max-w-lg w-full text-center mx-auto pt-4 pb-4 ">
              <a href="https://devfolio.co/projects/notes-app-0207">
                <span className="sm:mt-4 mt-2 text-white bg-black inline-block w-auto font-display text-base cursor-pointer py-4 px-7 md:text-xl rounded-2xl">
                  <div className="flex flex-row items-center">
                    <span className="mr-3 "> Know more</span>
                    <FaArrowRight />
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="4000" delay="2500">
          <div className="flex flex-col  p-10 m-6 overflow-hidden rounded-xl h-auto bg-white shadow-2xl">
            <img src={wordweb} alt="" />
            <p className="text-xl font-semibold sm:text-2xl text-center text-black mt-6">
              Word-Web PWA
            </p>
            <div className="max-w-lg w-full text-center mx-auto pt-4 pb-4 ">
              <a href="https://devfolio.co/projects/word-web-66c2">
                <span className="sm:mt-4 mt-2 text-white bg-black inline-block w-auto font-display text-base cursor-pointer py-4 px-7 md:text-xl rounded-2xl">
                  <div className="flex flex-row items-center">
                    <span className="mr-3 "> Know more</span>
                    <FaArrowRight />
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>
      
        </div>
        <div data-aos="fade-left" data-aos-duration="4000" delay="3000">
        <div className="max-w-lg w-full text-center mx-auto pt-4 pb-4 ">
      
      <a href="https://devfolio.co/projects/">
        <span className="sm:mt-8 mt-4 text-white bg-black inline-block w-auto font-display text-base cursor-pointer py-4 px-7 md:text-xl rounded-2xl">
          <div className="flex flex-row items-center">
            <span className="mr-3 "> More Projects </span>
            <FaArrowRight />
          </div>
        </span>
      </a>
      
    </div>
    </div>
      </div>
   
  );
};

export default Projects;
