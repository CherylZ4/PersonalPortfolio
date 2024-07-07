import backgroundImage from "../imgs/Background.png";
import phoneImage from "../imgs/phone.png";
import "../fonts.css";
import screenImage from "../imgs/screen.png";
import gallery from "../imgs/gallery.jpg";
import { Link } from "@remix-run/react";
import { motion, Variants } from "framer-motion";

export default function Projects() {
  return (
    <div className="scrollable-container h-[3200px] sm:h-[3200px] md:h-[2800px] lg:h-[2200px] xl:h-[2000px] overflow-y-scroll relative overflow-x:hidden">
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
          className="container ml-12"

        >
          <p className="text-custom-gray font-brygada-1918 text-5xl font-medium mb-8 mt-20">
            Projects
          </p>

          <div className="flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row flex items-center">
            <div>
              <p className="text-custom-gray font-brygada-1918 text-3xl font-extrabold mb-1 mr-6 ml-10">
                Speech Summarizer
              </p>
              <h1 className="ml-10 max-w-xxs w-2/3 xs:max-w-xxs xs:w-2/3 max-w-xs sm:max-w-xs sm:w-2/3 md:max-w-md md:w-2/3 lg:max-w-lg lg:w-2/3 xl:max-w-xl xl:w-2/3 text-custom-gray font-brygada-1918 text-xl font-normal italic mb-2">
                Winner of Best Mobile App at Ignition Hacks 2023
              </h1>
              <p className="ml-10 max-w-xxs w-2/3 xs:max-w-xxs xs:w-2/3 max-w-xs sm:max-w-xs sm:w-2/3 md:max-w-md md:w-2/3 lg:max-w-lg lg:w-2/3 xl:max-w-xl xl:w-2/3 text-custom-gray font-brygada-1918 text-lg">
                Worked with a team of 3 to create a web app where users upload
                audio/video files of their meetings and the app will take that
                file and convert it into condensed and informative meeting
                minutes. Made a REST API that calls Google Cloud’s Speech to
                Text API to orchestrate a conversion of audio content to text.
                Deployed the application to Google Kubernetes Engine(GKE)
                utilizing Docker containers.
              </p>
            </div>
            <motion.img
              src={phoneImage}
              className="rounded-md hover-zoom sm:mr-10 md:mr-10 lg:mr-10 xl:mr-20 max-w-xxs mt-10 mr-10 h-2/3 w-2/3 xs:max-w-xxs xs:h-1/2 xs:w-1/2 sm:max-w-xs sm:h-1/2 sm:w-1/2 md:max-w-sm md:h-1/2 md:w-1/2 lg:max-w-md lg:h-1/2 lg:w-1/2 xs:ml-0 xl:max-w-lg xl:h-1/2 xl:w-1/2 xxs:ml-0 sm:ml-0 md:ml-10 lg:ml-20 xl:ml-20 mb-4 xxs:mb-4 xs:mb-4 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-22"
              whileHover={{ scale: 1.1 }} // Increase the size by 20% on hover
            />

          </div>
        </motion.div>

        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={fadeIn}
          viewport={{ once: true }}
          className="container ml-12"
        >
          <div className="flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex items-center mt-32 lg:text-right xl:text-right">
          <motion.img
              src={screenImage}
              className="rounded-md mb-4 xxs:mb-4 xs:mb-4 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-22 max-w-xxs w-1/2 h-1/2 xs:max-w-xxs xs:h-2/3 xs:w-2/3 sm:max-w-xs sm:h-1/2 sm:w-1/2 md:max-w-sm md:h-1/2 md:w-1/2 lg:max-w-md lg:h-1/2 lg:w-1/2 xl:max-w-lg xl:h-1/2 xl:w-1/2 xs:ml-0 sm:mr-10 md:mr-10 lg:mr-20 xl:mr-20 xxs:ml-0 sm:ml-0 md:ml-10 lg:ml-20 xl:ml-20"
              whileHover={{ scale: 1.1 }} 
              />

            <div>
              <p className="ml-10 max-w-xxs w-2/3 xs:max-w-xxs xs:w-2/3 max-w-xs sm:max-w-xs sm:w-2/3 md:max-w-md md:w-2/3 lg:max-w-lg lg:w-2/3 xl:max-w-xl xl:w-2/3 text-custom-gray font-brygada-1918 text-3xl font-extrabold mb-2">
                Product Comparison
              </p>
              <p className="ml-10 max-w-xxs w-2/3 xs:max-w-xxs xs:w-2/3 max-w-xs sm:max-w-xs sm:w-2/3 md:max-w-md md:w-2/3 lg:max-w-lg lg:w-2/3 xl:max-w-xl xl:w-2/3 text-custom-gray font-brygada-1918 text-lg">
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
          className="container ml-12"
        >
          <div className="flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row flex items-center mt-32">

            <div>
              <p className="ml-10 max-w-xxs w-2/3 xs:max-w-xxs xs:w-2/3 max-w-xs sm:max-w-xs sm:w-2/3 md:max-w-md md:w-2/3 lg:max-w-lg lg:w-2/3 xl:max-w-xl xl:w-2/3 text-custom-gray font-brygada-1918 text-3xl font-extrabold mb-2">
                Eventful
              </p>
              <p className="ml-10 max-w-xxs w-2/3 xs:max-w-xxs xs:w-2/3 max-w-xs sm:max-w-xs sm:w-2/3 md:max-w-md md:w-2/3 lg:max-w-lg lg:w-2/3 xl:max-w-xl xl:w-2/3 text-custom-gray font-brygada-1918 text-lg mb-12">
              Submitted to Hack the Valley 8. Our project ranked in the upper 17.5% percentile among all the projects at the hackathon. 
              All users need to do is input the type of event they're planning, specify their budget, and the app generates a curated list of items for their event. 
              Users will then also receive a comprehensive list of where to procure each item at the most budget-friendly prices. Each item in the list is linked directly to its product page, ensuring users have a hassle-free shopping experience.
              </p>
            </div>
            <motion.img
              src={gallery}
              className="rounded-md mb-4 xxs:mb-4 xs:mb-4 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-22 max-w-xxs w-1/2 h-1/2 xs:max-w-xxs xs:h-1/3 xs:w-1/3 sm:max-w-xs sm:h-1/4 sm:w-1/4 md:max-w-sm md:h-1/4 md:w-1/4 lg:max-w-md lg:h-1/4 lg:w-1/4 xl:max-w-lg xl:h-1/4 xl:w-1/4 xs:ml-0 sm:mr-10 md:mr-10 lg:mr-20 xl:mr-20 xxs:ml-0 sm:ml-0 md:ml-10 lg:ml-20 xl:ml-20"
              whileHover={{ scale: 1.1 }} 
              />
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
            <p className="text-custom-gray font-brygada-1918 text-4xl font-semibold tracking-widest whitespace-nowrap">
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