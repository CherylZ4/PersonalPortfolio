import { Link } from '@remix-run/react';
import backgroundImage from '../imgs/Background.png';
import rectangle from '../imgs/rectangle.png';
import '../fonts.css';
import { useEffect, useState } from 'react';


export default function Index() {
  const [isVisible, setIsVisible] = useState({ hello: false, cheryl: false, zhang: false, developer: false, });

  useEffect(() => {
    setTimeout(() => setIsVisible((prev) => ({ ...prev, hello: true })), 500);
    setTimeout(() => setIsVisible((prev) => ({ ...prev, cheryl: true })), 1000);
    setTimeout(() => setIsVisible((prev) => ({ ...prev, zhang: true })), 1500);
    setTimeout(() => setIsVisible((prev) => ({ ...prev, developer: true })), 2000);
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-start justify-center px-4 scroll-smooth"
      style={{ backgroundImage: `url(${backgroundImage})` }}>

      {/* Hello I'm */}
      <h1 className={`text-custom-gray font-inter font-thin text-2xl ml-40 mb-2 ${isVisible.hello ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
        Hello, I'm
      </h1>

      {/* Cheryl */}
      <h1 className={`text-custom-gray font-brygada-1918 text-8xl font-medium ml-40 ${isVisible.cheryl ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
        Cheryl
      </h1>

      {/* Zhang */}
      <h1 className={`text-custom-gray font-brygada-1918 text-8xl font-medium ml-40 ${isVisible.zhang ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
        Zhang
      </h1>


      <div className={`ml-auto flex flex-col items-end ${isVisible.developer ? '' : 'opacity-0'
        }`}>
        <p className="text-custom-gray font-brygada-1918 text-lg pr-20">full stack developer @utsc</p>
        <img src={rectangle} className="pr-20" />
      </div>


      <div className="absolute top-4 right-10 flex space-x-8">
        <Link to="/" className=" text-custom-gray hover:text-custom-hover font-inter text-base" > home</Link>
        <Link to="/projects" className="  text-custom-gray hover:text-custom-hover font-inter text-base" > projects</Link>
        <Link to="/about" className=" text-custom-gray hover:text-custom-hover font-inter text-base"> about</Link>
      </div>

      <div className="absolute bottom-4 right-10 flex space-x-8">
        <a href="https://www.linkedin.com/in/cheryl-zhang1/" target="_blank" className="text-custom-gray hover:text-custom-hover font-inter text-sm">linkedIn </a>
        <a href="https://github.com/CherylZ4" target="_blank" className="text-custom-gray hover:text-custom-hover font-inter text-sm">github </a>
        <a href="https://devpost.com/cherylzhang8?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" className="text-custom-gray hover:text-custom-hover font-inter text-sm">devpost </a>
      </div>
    </div>
  );
}
