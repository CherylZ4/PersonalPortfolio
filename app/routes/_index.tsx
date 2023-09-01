import {Link} from '@remix-run/react';
import backgroundImage from '../Background.png';
// import 'typeface-inter';
import '../fonts.css';

export default function Index() {
  return (
   <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
   style={{ backgroundImage: `url(${backgroundImage})`}}>

   <h1 className= "text-custom-gray font-brygada-1918 text-3xl">Hello I'm</h1>
   <h1 className="text-custom-gray font-brygada-1918 text-6xl">cheryl</h1>
   <h1 className="text-custom-gray font-brygada-1918 text-6xl">zhang</h1>
   <p className="text-custom-gray font-brygada-1918 text-lg">full stack developer @utsc</p>

   <div className="absolute top-4 right-10 flex space-x-8">
   <Link to="/projects"  className="  text-custom-gray hover:text-custom-hover font-inter text-sm" > Projects</Link>
   <Link to="/" className=" text-custom-gray hover:text-custom-hover font-inter text-sm" > Home</Link>
   <Link to="/about" className =" text-custom-gray hover:text-custom-hover font-inter text-sm"> About</Link>
   </div>

   </div>
  );
}
