import {Link} from '@remix-run/react';

import backgroundImage from '../Background.png';
import '../fonts.css';

export default function About() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-start justify-center px-4"
   style={{ backgroundImage: `url(${backgroundImage})`}}>

<div className="absolute top-4 right-10 flex space-x-8">
   <Link to="/" className=" text-custom-gray hover:text-custom-hover font-inter text-base" > home</Link>
   <Link to="/projects"  className="  text-custom-gray hover:text-custom-hover font-inter text-base" > projects</Link>
   <Link to="/about" className =" text-custom-gray hover:text-custom-hover font-inter text-base"> about</Link>
   </div>

    <div className= "absolute bottom-4 right-10 flex space-x-8">
    <a href="https://www.linkedin.com/in/cheryl-zhang1/" target="_blank" className = "text-custom-gray hover:text-custom-hover font-inter text-sm">linkedIn </a>
    <a href="https://github.com/CherylZ4" target="_blank" className = "text-custom-gray hover:text-custom-hover font-inter text-sm">github </a>
    <a href="https://devpost.com/cherylzhang8?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" className = "text-custom-gray hover:text-custom-hover font-inter text-sm">devpost </a>
    </div>
   </div>
  );
}