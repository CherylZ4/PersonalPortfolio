import backgroundImage from "../imgs/Background.png";
import "../fonts.css";
import { Link } from "@remix-run/react";
import { motion, Variants } from "framer-motion";
import { StickyScroll } from "~/components/ui/sticky-scroll-reveal";  
import speechSummarizer from "../imgs/phone.png";  // Add these imports
import productComparison from "../imgs/screen.png";
import eventful from "../imgs/gallery.jpg";

export default function work() {


    return (
        <div className="scrollable-container h-[2400px] overflow-y-scroll relative">
            <div
                className="h-full bg-cover bg-center flex flex-col items-start justify-start px-4"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >

                <div className="absolute top-6 right-16 flex space-x-8">
                    <Link
                        to="/"
                        className=" text-custom-gray hover:text-custom-hover font-inter text-lg"
                    >
                        home
                    </Link>
                    <Link
                        to="/projects"
                        className="  text-custom-gray hover:text-custom-hover font-inter text-lg"
                    >
                        projects
                    </Link>
                    <Link to="/work" className="text-custom-gray hover:text-custom-hover font-inter text-lg">work</Link>
                </div>

                <p className="text-custom-gray font-brygada-1918 text-5xl font-medium mb-8 mt-20 ml-28">
                    Work Experience
                </p>

                

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