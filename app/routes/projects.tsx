import backgroundImage from "../imgs/Background.png";
import phoneImage from "../imgs/phone.png";
import "../fonts.css";
import screenImage from "../imgs/screen.png";
import gallery from "../imgs/gallery.jpg";
import { Link } from "@remix-run/react";
import { motion, Variants } from "framer-motion";
import { StickyScroll } from "~/components/ui/sticky-scroll-reveal";
import { Timeline } from "~/components/ui/timeline";

export default function Projects() {
  const content = [
    {
        title: "Speech Summarizer",
        subheader: "Winner of Best Mobile App at Ignition Hacks 2023",
        description: "Worked with a team of 3 to create a web app where users upload audio/video files of their meetings and the app will take that file and convert it into condensed and informative meeting minutes. Made a REST API that calls Google Cloud's Speech to Text API to orchestrate a conversion of audio content to text. Deployed the application to Google Kubernetes Engine(GKE) utilizing Docker containers.",
        content: (
            <div className="w-full h-[300px] flex items-center justify-center pb-16">
                <img 
                    src={phoneImage} 
                    alt="Speech Summarizer App" 
                    className="w-full h-full object-contain rounded-md"
                />
            </div>
        )
    },
    {
        title: "Product Comparison",
        subheader: "Smart Product Analysis Tool",
        description: "Assembled a REST API in Java that seamlessly integrates with OpenAI's API to find the ingredients of products given their names. Incorporated data processing mechanisms to identify common and unique ingredients of each product. Implemented ReactJS to build a dynamic webpage where users can input products to compare only if they are logged in. There is also a history page that displays all past requests.",
        content: (
            <div className="w-full h-[300px] flex items-center justify-center -mt-12">
                <img 
                    src={screenImage} 
                    alt="Product Comparison Tool" 
                    className="w-full h-full object-contain rounded-md"
                />
            </div>
        )
    },
    {
        title: "Eventful",
        subheader: "Top 17.5% at Hack the Valley 8",
        description: "All users need to do is input the type of event they're planning, specify their budget, and the app generates a curated list of items for their event. Users will then also receive a comprehensive list of where to procure each item at the most budget-friendly prices. Each item in the list is linked directly to its product page, ensuring users have a hassle-free shopping experience.",
        content: (
            <div className="w-full h-[300px] flex items-center justify-center">
                <img 
                    src={gallery} 
                    alt="Eventful App" 
                    className="w-full h-full object-contain rounded-md"
                />
            </div>
        )
    }
];

const timelineData = [
  {
      title: "2024",
      content: (
          <div className="prose prose-sm prose-neutral dark:prose-invert">
              <h4 className="text-custom-gray font-brygada-1918 text-2xl font-medium mb-2">
                  Developer Intern @ RBC T&O
              </h4>
              <p className="text-custom-gray font-brygada-1918 text-xl mb-4">
                  Jan 2024 - Aug 2024
              </p>
              <ul className="space-y-4">
                  <li className="text-custom-gray font-brygada-1918 text-lg">
                      • Spearheaded the development of a POC to integrate Spring Boot applications with Camunda 8
                      via its SaaS offering.
                  </li>
                  <li className="text-custom-gray font-brygada-1918 text-lg">
                      • Developed over 100 JUnit tests using Mockito and WireMock for a library managing Amazon S3
                      presigned URLs.
                  </li><li className="text-custom-gray font-brygada-1918 text-lg">
                      • Implemented an automated email process using Pega Robotics for OWL management.
                  </li>
                  <li className="text-custom-gray font-brygada-1918 text-lg">
                      • Deployed applications to Helios, an in-house CI/CD pipeline.
                  </li>
              </ul>
          </div>
      ),
  },
  // Add more work experiences here with different years
];


  return (
    <div className="scrollable-container h-[3600px] sm:h-[3200px] md:h-[2400px] lg:h-[2000px] xl:h-[1800px] overflow-y-scroll overflow-x-hidden relative">
      <div
        className="h-full bg-cover bg-center flex flex-col items-start px-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="fixed top-6 right-16 flex space-x-8 z-50">
          <Link 
                to="/" 
                className="text-custom-gray hover:text-custom-hover font-inter text-lg"
            >
                home
            </Link>
            <a 
                href="#projects"
                className="text-custom-gray hover:text-custom-hover font-inter text-lg"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                projects
            </a>
            <a 
                href="#work"
                className="text-custom-gray hover:text-custom-hover font-inter text-lg"
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                work
            </a>
        
        </div>

          
          <motion.div 
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <p className="text-custom-gray font-brygada-1918 text-5xl font-medium mb-8 ml-4 md:ml-28 mt-20">
            Projects
          </p>

          <div className="w-full ml-4 sm:ml-20">
              <StickyScroll content={content} />
          </div>
          </motion.div>

          <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={fadeIn}
          viewport={{ once: true, margin: "100px 0px 0px 0px"}}
        >
          
          <section id="work" className="mt-36 md:mt-40">
              <div className="w-full md:ml-20">
                  <Timeline data={timelineData} />
              </div>
          </section>

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
      duration: 2,
    },
  },
  exit: { opacity: 0, transition: { duration: 1 } },
};