import Fade from 'react-reveal/Fade';
import backgroundImage from '../imgs/Background.png';
import phoneImage from '../imgs/phone.png';
import '../fonts.css';
import screenImage from '../imgs/screen.png';
import { Link } from '@remix-run/react';

export default function Projects() {
  return (
    <div className="scrollable-container h-[1000px] overflow-y-scroll relative">
      <div className="min-h-full bg-cover bg-center flex flex-col items-start justify-start px-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute top-6 right-16 flex space-x-8">
          <Link to="/" className=" text-custom-gray hover:text-custom-hover font-inter text-lg" > home</Link>
          <Link to="/projects" className="  text-custom-gray hover:text-custom-hover font-inter text-lg" > projects</Link>
          
        </div>

        {/* <div className="absolute bottom-4 right-10 flex space-x-8">
          <a href="https://www.linkedin.com/in/cheryl-zhang1/" target="_blank" className="text-custom-gray hover:text-custom-hover font-inter text-lg">linkedIn </a>
          <a href="https://github.com/CherylZ4" target="_blank" className="text-custom-gray hover:text-custom-hover font-inter text-lg">github </a>
          <a href="/pdf/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-custom-gray hover:text-custom-hover font-inter text-lg">resume</a>
        </div> */}

        <div className="container ml-20">
          <Fade duration={2000}><p className='text-custom-gray font-brygada-1918 text-5xl font-medium mb-8 mt-16'>Projects</p></Fade>
          <Fade duration={5000}>

            <div className="flex items-center">
              <div>
                <p className='text-custom-gray font-brygada-1918 text-3xl font-extrabold mb-1'>Speech Summarizer</p>
                <h1 className='text-custom-gray font-brygada-1918 text-xl font-normal italic mb-2'>Winner of Best Mobile App at Ignition Hacks 2023</h1>
                <p className='text-custom-gray font-brygada-1918 text-lg'>Worked with a team of 3 to create a web app where users upload audio/video files of their meetings and the app will take that file and convert it into condensed and informative meeting minutes.
                  Made a REST API that calls Google Cloud’s Speech to Text API to orchestrate a conversion of audio content to text. Deployed the application to Google Kubernetes Engine(GKE) utilizing Docker containers.</p>
              </div>

              <img src={phoneImage} className="w-1/4 h-1/4 ml-10 mr-15" />
            </div>
          </Fade>

          <Fade duration={8000}>
            <div className="flex items-center mt-40">
              <img src={screenImage} className="w-1/2 h-1/2 mr-16" />
              <div>
                <p className='text-custom-gray font-brygada-1918 text-3xl font-extrabold mb-2 text-right'>Product Comparison</p>
                <p className='text-custom-gray font-brygada-1918 text-lg text-right'>Assembled a REST API in Java that seamlessly integrates with OpenAI's API to find the ingredients of products given their names. Incorporated data processing mechanisms to identify common and unique ingredients of each product. Implemented ReactJS to build a dynamic webpage where users can input products to compare only if they are logged in. There is also a history page that displays all past requests.</p>
              </div>
            </div>
          </Fade>

          <div className="flex flex-col items-end absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Fade duration={4000}>
            <div className="mr-32 mb-8">
              <p className="text-custom-gray font-brygada-1918 text-4xl font-semibold tracking-widest">get in touch!</p>
            </div>
          </Fade>

          <div className=" flex space-x-10 mb-4">
            <Fade duration={4000}>
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
    </div>
  );
}
