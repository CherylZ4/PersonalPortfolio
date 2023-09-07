import { Link } from '@remix-run/react';
import Fade from 'react-reveal/Fade';
import backgroundImage from '../imgs/Background.png';
import rectangle from '../imgs/rectangle.png';
import '../fonts.css';
import { useEffect, useState } from 'react';
import arrow from "../imgs/arrow.png";
import me from "../imgs/Me.png";



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

        <h1 className={`text-custom-gray font-inter font-thin text-3xl ml-10 sm:ml-20 md:ml-40 lg:ml-60 xl:ml-80 mb-2 mt-40 ${isVisible.hello ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
          Hello, I'm
        </h1>



        <h1 className={`text-custom-gray font-brygada-1918 text-9xl font-medium ml-10 sm:ml-20 md:ml-40 lg:ml-60 xl:ml-80 ${isVisible.cheryl ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
          cheryl
        </h1>

        <h1 className={`text-custom-gray font-brygada-1918 text-9xl font-medium ml-10 sm:ml-20 md:ml-40 lg:ml-60 xl:ml-80 ${isVisible.zhang ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
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



        <div className="ml-5">
          <div className="flex flex-col items-center justify-start ml-36 sm:ml-80 md:ml-96 lg:ml-96 xl:ml-96 mt-16">
            <Fade duration={2000}>
              <h1 className="text-custom-gray font-brygada-1918 text-5xl font-medium lg:ml-24 xl:ml-24 lg:mt-10 xl:mt-10">About me</h1>
            </Fade>
          </div>
        </div>


        <div>
          <div className="flex-col-reverse sm:flex-row md:flex-row lg:flex-col xl:flex-row ml-12 sm:ml-44 md:ml-44 lg:ml-60 xl:ml-60 flex items-center mr:20 md:mr-20 lg:mr-32 xl:mr-32">
            <Fade duration={4000}>
              <p className="text-custom-gray font-brygada-1918 text-lg text-center mt-12">
                My name is Cheryl Zhang, and I am pursuing a Specialist in Computer Science at the University of Toronto Scarborough. I am someone who enjoys continuous learning and adaptability. Furthermore, I embrace each new challenge as an opportunity to grow, and I'm excited to keep crafting innovative solutions that exceed expectations. If you would like to chat, feel free to send an email!
              </p>
              <img src={me} className='w-1/4 h-1/4 lg:w-1/5 lg:h-1/5 xl:w-1/5 xl:h-1/5 mb-10 md:mb-0 lg:mb-0 xl:mb-0 mt-10 sm:ml-20 md:ml-20 lg:ml-20 xl:ml-20'></img>
            </Fade>
          </div>
        </div>

        <div className="absolute top-6 right-16 flex space-x-8">
          <Link to="/" className=" text-custom-gray hover:text-custom-hover font-inter text-lg" > home</Link>
          <Link to="/projects" className="  text-custom-gray hover:text-custom-hover font-inter text-lg" > projects</Link>
        </div>

        <div className="flex flex-col items-end absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Fade duration={6000}>
            <div className="mr-32 mb-8 ">
              <p className="text-custom-gray font-brygada-1918 text-4xl font-semibold tracking-widest">get in touch!</p>
            </div>
          </Fade>

          <div className=" flex space-x-10 mb-4">
            <Fade duration={6000}>
              <p className='text-custom-gray font-inter text-lg'>cherylzhang8@gmail.com</p>
              <a href="https://www.linkedin.com/in/cheryl-zhang1/" target="_blank" className="text-custom-gray hover:text-custom-hover font-inter text-lg">linkedIn </a>
              <a href="https://github.com/CherylZ4" target="_blank" className="text-custom-gray hover:text-custom-hover font-inter text-lg">github </a>
              <a href="/pdf/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-custom-gray hover:text-custom-hover font-inter text-lg">resume</a>
            </Fade>
          </div>
        </div>

      </div>
    </div>

  );
}
