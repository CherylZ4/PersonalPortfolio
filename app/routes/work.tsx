import backgroundImage from "../imgs/Background.png";
import phoneImage from "../imgs/phone.png";
import "../fonts.css";
import screenImage from "../imgs/screen.png";
import { Link } from "@remix-run/react";
import { motion, Variants } from "framer-motion";

export default function work() {
    return (
        <div>
            
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