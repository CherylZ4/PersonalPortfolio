import {Link} from '@remix-run/react';
import backgroundImage from '../Background.png';
import rectangle from '../rectangle.png';
import '../fonts.css';

export default function Index() {
  return (
   <div className="min-h-screen bg-cover bg-center flex flex-col items-start justify-center px-4"
   style={{ backgroundImage: `url(${backgroundImage})`}}>

   <h1 className= "text-custom-gray font-inter font-thin text-2xl ml-40 mb-2">Hello I'm</h1>
   <h1 className="text-custom-gray font-brygada-1918 text-8xl font-medium ml-40">cheryl</h1>
   <h1 className="text-custom-gray font-brygada-1918 text-8xl font-medium ml-40">zhang</h1>
   
   
   <div className= "ml-auto flex flex-col items-end">
   <p className="text-custom-gray font-brygada-1918 text-lg pr-20">full stack developer @utsc</p>
   <img src= {rectangle} className = "pr-20"/>
   </div>
   

   <div className="absolute top-4 right-10 flex space-x-8">
   <Link to="/" className=" text-custom-gray hover:text-custom-hover font-inter text-sm" > Home</Link>
   <Link to="/projects"  className="  text-custom-gray hover:text-custom-hover font-inter text-sm" > Projects</Link>
   <Link to="/about" className =" text-custom-gray hover:text-custom-hover font-inter text-sm"> About</Link>
   </div>

    <div>
    <a href="https://www.linkedin.com/in/cheryl-zhang1/" target="_blank" className = "text-custom-gray hover:text-custom-hover font-inter text-sm">linkedIn </a>
    <a href="https://www.linkedin.com/in/cheryl-zhang1/" target="_blank" className = "text-custom-gray hover:text-custom-hover font-inter text-sm">github </a>
    <a href="https://www.linkedin.com/in/cheryl-zhang1/" target="_blank" className = "text-custom-gray hover:text-custom-hover font-inter text-sm">devpost </a>
    </div>
   </div>
  );
}
