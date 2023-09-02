import {Link} from '@remix-run/react';

import backgroundImage from '../imgs/Background.png';
import phoneImage from '../imgs/phone.png';
import '../fonts.css';

export default function Projects() {
  return (
    <div>
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
    

    <div >
    <p className='text-custom-gray font-brygada-1918 text-5xl font-medium ml-20 mt-[-180px] mb-2'>Projects</p>
        
        <div className="flex items-center">
            <div><p className='text-custom-gray font-brygada-1918 text-3xl font-extrabold ml-20 mb-1' >Speech Summarizer</p>
            <h1 className='text-custom-gray font-brygada-1918 text-xl font-normal italic ml-20 mb-2' >Winner of Best Mobile App at Ignition Hacks 2023</h1>
            <p className='text-custom-gray font-brygada-1918 text-lg ml-20' >Worked with a team of 3 to create a web app where users upload audio/video files of their meetings and the app will take that file and convert it into condensed and informative meeting minutes.</p>
            </div>

          <img src={phoneImage} className="w-1/4 h-1/4 ml-10 mr-20" />
        </div>

        {/* <div className="flex items-center">
            <div><p className='text-custom-gray font-brygada-1918 text-3xl font-extrabold ml-20 mb-1'> Product Comparison </p>
            <p className='text-custom-gray font-brygada-1918 text-lg ml-20'>Assembled a REST API in Java that seamlessly integrates with OpenAI's API that finds the ingredients of products given their names and stores each user search into a postgresql database. Incorporated data processing mechanisms to identify common ingredients and highlight those unique to each product. Implemented ReactJS to build a dynamic webpage where users can input products to compare only if they are logged in. There is also a history page that displays all past requests.</p>
            
            </div>
        </div> */}
    </div>
   </div>
   </div>
  );
}