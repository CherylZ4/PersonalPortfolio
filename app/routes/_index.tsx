import { Link } from '@remix-run/react';
import backgroundImage from '../imgs/Background.png';
import rectangle from '../imgs/rectangle.png';
import '../fonts.css';
import { useEffect, useState } from 'react';
import arrow from "../imgs/arrow.png";
import me from "../imgs/Me.png";
import { motion, Variants } from "framer-motion";




export default function Index() {
  const [isVisible, setIsVisible] = useState({ hello: false, cheryl: false, zhang: false, developer: false, arrow: false, });



  useEffect(() => {
    setTimeout(() => setIsVisible((prev) => ({ ...prev, hello: true })), 400);
    setTimeout(() => setIsVisible((prev) => ({ ...prev, cheryl: true })), 800);
    setTimeout(() => setIsVisible((prev) => ({ ...prev, zhang: true })), 1200);
    setTimeout(() => setIsVisible((prev) => ({ ...prev, developer: true })), 1600);
    setTimeout(() => setIsVisible((prev) => ({ ...prev, arrow: true })), 2000);
  }, []);

  


  return (

    <div className="scrollable-container h-[1600px] overflow-y-scroll relative sm:max-h-[1400px] md:max-h-[1400px] lg:max-h-[1400px] xl:max-h-[1400px]">
      <div className="h-full bg-cover bg-center flex flex-col items-start px-4"

        style={{ backgroundImage: `url(${backgroundImage})` }} >

        <h1 className={`text-custom-gray font-inter font-thin text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl ml-10 sm:ml-20 md:ml-40 lg:ml-60 xl:ml-80 mb-2 mt-40 ${isVisible.hello ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
          Hello, I'm
        </h1>



        <h1 className={`text-custom-gray font-brygada-1918 text-7xl sm:text-9xl md:text-9xl lg:text-9xl xl:text-9xl font-medium ml-10 sm:ml-20 md:ml-40 lg:ml-60 xl:ml-80 ${isVisible.cheryl ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
          cheryl
        </h1>

        <h1 className={`text-custom-gray font-brygada-1918 text-7xl sm:text-9xl md:text-9xl lg:text-9xl xl:text-9xl font-medium ml-10 sm:ml-20 md:ml-40 lg:ml-60 xl:ml-80 ${isVisible.zhang ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
          zhang
        </h1>

        <div className={`ml-auto flex flex-col items-end mt-10 ${isVisible.developer ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'
          }`}>
          <p className="text-custom-gray font-brygada-1918 text-xl pr-20">full stack developer @utsc</p>
          <img src={rectangle} className="pr-20" />
        </div>

        <div className={` sm:ml-64 md:ml-96 lg:ml-96 xl:ml-96 ${isVisible.arrow ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'
          }`}>
          <img src={arrow} className="ml-36 mt-20"></img>
        </div>



        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={fadeIn}
          viewport={{once: true}} className="ml-5">
          <div className="flex flex-col items-center justify-start ml-40 sm:ml-88 md:ml-80 lg:ml-96 xl:ml-96 mt-40 sm:mt-16 md:mt-16 lg:mt-16 xl:mt-16">
          
              <h1 className="text-custom-gray font-brygada-1918 text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-medium lg:ml-24 xl:ml-24 lg:mt-10 xl:mt-10">About me</h1>
             
          </div>
        </motion.div>


        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={fadeIn}
          viewport={{once: true}}>
       
          <div className="flex-col-reverse sm:flex-row md:flex-row lg:flex-row xl:flex-row ml-6 sm:ml-44 md:ml-44 lg:ml-60 xl:ml-60 flex items-center md:mr-20 lg:mr-32 xl:mr-32">
         
              <p className="text-custom-gray font-brygada-1918 text-lg text-center mt-12">
                My name is Cheryl Zhang, and I am pursuing a HBSc Computer Science Co-op Student at the University of Toronto Scarborough. I am someone who embraces each new challenge as an opportunity to grow, and I'm excited to keep crafting innovative solutions that exceed expectations. In my spare time, I enjoy reading manga and watching K-pop, makeup, and fashion videos. Please feel free to reach out to chat!
              </p>
              <img src={me} className='w-1/4 h-1/4 lg:w-1/5 lg:h-1/5 xl:w-1/5 xl:h-1/5 mb-0 md:mb-0 lg:mb-0 xl:mb-0 mt-10 sm:ml-20 md:ml-20 lg:ml-20 xl:ml-20'></img>
          </div>
         
          </motion.div>


        <div className="absolute top-6 right-16 flex space-x-8">
          <Link to="/" className=" text-custom-gray hover:text-custom-hover font-inter text-lg" > home</Link>
          <Link to="/projects" className="  text-custom-gray hover:text-custom-hover font-inter text-lg" > projects</Link>
        </div>
        
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={fadeIn}
          viewport={{once: true}} className="flex flex-col items-end absolute bottom-4 left-1/2 transform -translate-x-1/2">
        
            <div className=" flex items-center ml-18 sm:mr-3 md:mr-3 lg:mr-3 xl:mr-3 mb-8">
              <p className="text-custom-gray font-brygada-1918 text-4xl font-semibold tracking-widest">get in touch!</p>
            </div>
            

          <div className=" flex space-x-10 mb-4">
          
              <a href="https://www.linkedin.com/in/cheryl-zhang1/" target="_blank" className="text-custom-gray hover:text-custom-hover font-inter text-lg">linkedIn </a>
              <a href="https://github.com/CherylZ4" target="_blank" className="text-custom-gray hover:text-custom-hover font-inter text-lg">github </a>
              <a href="/pdf/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-custom-gray hover:text-custom-hover font-inter text-lg">resume</a>
              
          </div>
          </motion.div>
        

      </div>
    </div>

  );
}

const fadeIn: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
  exit: { opacity: 0, transition: { duration: 1 } },
};