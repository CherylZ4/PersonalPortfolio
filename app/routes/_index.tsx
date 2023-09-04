import { Link } from '@remix-run/react';
import Fade from 'react-reveal/Fade';
import backgroundImage from '../imgs/Background.png';
import rectangle from '../imgs/rectangle.png';
import '../fonts.css';
import { useEffect, useState } from 'react';
import arrow from "../imgs/arrow.png";
import me from "../imgs/Me.jpg";



export default function Index() {
  const [isVisible, setIsVisible] = useState({ hello: false, cheryl: false, zhang: false, developer: false, arrow: false, });



  useEffect(() => {
    setTimeout(() => setIsVisible((prev) => ({ ...prev, hello: true })), 500);
    setTimeout(() => setIsVisible((prev) => ({ ...prev, cheryl: true })), 1000);
    setTimeout(() => setIsVisible((prev) => ({ ...prev, zhang: true })), 1500);
    setTimeout(() => setIsVisible((prev) => ({ ...prev, developer: true })), 2000);
    setTimeout(() => setIsVisible((prev) => ({ ...prev, arrow: true })), 2500);
  }, []);

  return (

    <div className="scrollable-container h-[1366px] overflow-y-scroll relative">
      <div className="h-full bg-cover bg-center flex flex-col items-start px-4"

        style={{ backgroundImage: `url(${backgroundImage})` }}>

        <h1 className={`text-custom-gray font-inter font-thin text-3xl ml-40 mb-2 mt-40 ${isVisible.hello ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
          Hello, I'm
        </h1>

        <h1 className={`text-custom-gray font-brygada-1918 text-9xl font-medium ml-40 ${isVisible.cheryl ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
          cheryl
        </h1>

        <h1 className={`text-custom-gray font-brygada-1918 text-9xl font-medium ml-40 ${isVisible.zhang ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
          zhang
        </h1>

        <div className={`ml-auto flex flex-col items-end ${isVisible.developer ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'
          }`}>
          <p className="text-custom-gray font-brygada-1918 text-xl pr-20">full stack developer @utsc</p>
          <img src={rectangle} className="pr-20" />
        </div>

        <div className={`ml-32 ${isVisible.arrow ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'
          }`}>
          <img src={arrow} className="ml-96 mt-20"></img>
        </div>



        <div className="ml-5">
          <div className="flex flex-col items-center justify-start ml-80 mt-16">
            <Fade duration={2000}>
              <h1 className="text-custom-gray font-brygada-1918 text-5xl font-medium">About me</h1>
            </Fade>
          </div>
        </div>


        <div>
          <div className="ml-40 mr-40 flex items-center">
            <Fade duration={5000}>
              <p className="text-custom-gray font-brygada-1918 text-lg text-center mr-20">
                My name is Cheryl Zhang, and I am pursuing a Specialist in Computer Science at the University of Toronto Scarborough. I am someone who enjoys continuous learning and adaptability. Furthermore, I embrace each new challenge as an opportunity to grow, and I'm excited to keep crafting innovative solutions that exceed expectations. If you would like to chat, feel free to send an email!
              </p>
              <img src={me} className='w-1/4 h-1/4'></img>
            </Fade>
          </div>
        </div>

        <div className="absolute top-6 right-16 flex space-x-8">
          <Link to="/" className=" text-custom-gray hover:text-custom-hover font-inter text-lg" > home</Link>
          <Link to="/projects" className="  text-custom-gray hover:text-custom-hover font-inter text-lg" > projects</Link>
        </div>

        <div className="flex flex-col items-end absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Fade duration={7000}>
            <div className="mr-32 mb-8">
              <p className="text-custom-gray font-brygada-1918 text-4xl font-semibold tracking-widest">get in touch!</p>
            </div>
          </Fade>

          <div className=" flex space-x-10 mb-4">
            <Fade duration={7000}>
              <p className='text-custom-gray font-inter text-lg'>cherylzhang8@gmail.com</p>
              <a href="https://www.linkedin.com/in/cheryl-zhang1/" target="_blank" className="text-custom-gray hover:text-custom-hover font-inter text-lg">linkedIn </a>
              <a href="https://github.com/CherylZ4" target="_blank" className="text-custom-gray hover:text-custom-hover font-inter text-lg">github </a>
              <a href="/pdf/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-custom-gray hover:text-custom-hover font-inter text-lg">resume</a>
            </Fade>
          </div>
          <div>
          </div>
        </div>

      </div>
    </div>

  );
}
