import backgroundImage from "../imgs/Background.png";
import phoneImage from "../imgs/phone.png";
import "../fonts.css";
import screenImage from "../imgs/screen.png";
import { Link } from "@remix-run/react";
import { motion, Variants } from "framer-motion";

export default function Projects() {
  return (
    <div className="scrollable-container h-[1600px] overflow-y-scroll relative">
      <div
        className="h-full bg-cover bg-center flex flex-col items-start px-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute top-6 right-16 flex space-x-8">
          <Link
            to="/"
            className=" text-custom-gray hover:text-custom-hover font-inter text-lg">
            home
          </Link>
          <Link
            to="/projects"
            className="  text-custom-gray hover:text-custom-hover font-inter text-lg">
            projects
          </Link>
          <Link to="/work" className="text-custom-gray hover:text-custom-hover font-inter text-lg">work</Link>
        </div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={fadeIn}
          viewport={{ once: true }}
          className="container ml-20"
        >
          <p className="text-custom-gray font-brygada-1918 text-5xl font-medium mb-8 mt-20">
            Projects
          </p>

          <div className="flex-col-reverse sm:flex-row md:flex-row lg:flex-row xl:flex-row flex items-center">
            <div>
              <p className="text-custom-gray font-brygada-1918 text-3xl font-extrabold mb-1 ml-6">
                Speech Summarizer
              </p>
              <h1 className="text-custom-gray font-brygada-1918 text-xl font-normal italic mb-2 ml-6">
                Winner of Best Mobile App at Ignition Hacks 2023
              </h1>
              <p className="text-custom-gray font-brygada-1918 text-lg ml-6">
                Worked with a team of 3 to create a web app where users upload
                audio/video files of their meetings and the app will take that
                file and convert it into condensed and informative meeting
                minutes. Made a REST API that calls Google Cloud’s Speech to
                Text API to orchestrate a conversion of audio content to text.
                Deployed the application to Google Kubernetes Engine(GKE)
                utilizing Docker containers.
              </p>
            </div>

            <img
              src={phoneImage}
              className="sm:mr-20 md:mr-20 lg:mr-32 xl:mr-40 max-w-xs mt-10 h-auto w-auto ml-36 sm:w-1/2 sm:h-1/2 md:w-1/2 md:h-1/2 lg:w-1/2 lg:h-1/2 xl:w-1/2 xl:h-1/2 mb-6 sm:ml-20 md:ml-20 lg:ml-20 xl:ml-20"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={fadeIn}
          viewport={{ once: true }}
          className="container ml-20"
        >
          <div className="flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row flex items-center mt-32">
            <img
              src={screenImage}
              className="sm:mb-20 md:mb-32 lg:mb-32 xl:mb-32 ml-28 max-w-xs w-auto h-auto sm:w-1/2 sm:h-1/2 md:w-1/2 md:h-1/2 lg:w-1/2 lg:h-1/2 xl:w-1/2 xl:h-1/2 mb-10 sm:mr-20 md:mr-20 lg:mr-20 xl:mr-20 sm:ml-10 md:ml-10 lg:ml-10 xl:ml-10"
            />
            <div>
              <p className="text-custom-gray font-brygada-1918 text-3xl font-extrabold mb-2 text-right sm:mr-20 md:mr-20 lg:mr-20 xl:mr-40">
                Product Comparison
              </p>
              <p className="text-custom-gray font-brygada-1918 text-lg text-right mb-52 sm:mr-20 md:mr-20 lg:mr-20 xl:mr-40">
                Assembled a REST API in Java that seamlessly integrates with
                OpenAI's API to find the ingredients of products given their
                names. Incorporated data processing mechanisms to identify
                common and unique ingredients of each product. Implemented
                ReactJS to build a dynamic webpage where users can input
                products to compare only if they are logged in. There is also a
                history page that displays all past requests.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={fadeIn}
          viewport={{ once: true }}
          className="flex flex-col items-end absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <div className="mr-18 mb-8">
            <p className="text-custom-gray font-brygada-1918 text-4xl font-semibold tracking-widest">
              get in touch!
            </p>
          </div>

          <div className=" flex space-x-10 mb-4">

            <a
              href="https://www.linkedin.com/in/cheryl-zhang1/"
              target="_blank"
              className="text-custom-gray hover:text-custom-hover font-inter text-lg"
            >
              linkedIn{" "}
            </a>
            <a
              href="https://github.com/CherylZ4"
              target="_blank"
              className="text-custom-gray hover:text-custom-hover font-inter text-lg"
            >
              github{" "}
            </a>
            <a
              href="/pdf/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-gray hover:text-custom-hover font-inter text-lg"
            >
              resume
            </a>
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