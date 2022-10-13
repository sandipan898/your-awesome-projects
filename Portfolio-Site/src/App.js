import {React ,  useEffect} from "react";
import About from "./components/About";
import Card from './components/Card'
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Aos from "aos";
import 'aos/dist/aos.css';
import Projects from "./components/Projects";


function App() {
  useEffect(() => {

    Aos.init({
      once:true,
    })
    
  })
  
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100 overflow-hidden">
      <div data-aos="fade-down" data-aos-duration="4000" >
      <Card />

      </div>
      <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay="1500">
      
      <About />

      </div>
      <Skills />
      <Projects />
    <div data-aos="fade-down-left" data-aos-duration="4000" data-aos-delay="800">
      <Contact />

      </div>
      <div data-aos="fade-up-right" data-aos-duration="4000" data-aos-delay="800">
      <Footer />

      </div>
    
    </div>
  );
}

export default App;
