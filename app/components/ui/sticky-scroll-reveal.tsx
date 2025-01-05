"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    subheader: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => (index + 0.4) / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "transparent",
    "transparent",
    "transparent"
  ];




  return (
    <div>
      {/* Mobile Layout */}
      <div className="block md:hidden [&>*]:m-0 [&>*]:p-0"> {/* Reset all direct children */}
        {content.map((item, index) => (
          <>
            <div 
              key={index} 
              className="flex flex-col px-6 sm:px-12"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-custom-gray font-brygada-1918 mb-4 pr-8">
                  {item.title}
                </h2>
                <h3 className="text-xl text-custom-gray font-brygada-1918 mb-4 pr-8">
                  {item.subheader}
                </h3>
                <p className="text-lg text-custom-gray font-brygada-1918 pr-8">
                  {item.description}
                </p>
              </div>
              
              <div className="w-full h-[300px] pr-8">
                {item.content}
              </div>
            </div>
            
            {/* Add spacer div after Speech Summarizer */}
            {item.title === "Speech Summarizer" && (
              <div className="h-12 w-full"></div>
            )}
          </>
        ))}
      </div>

      {/* Desktop Layout - unchanged */}
      <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="hidden md:flex h-[30rem] overflow-y-auto justify-center relative space-x-10 rounded-md p-10"
        ref={ref}
      >
        <div className="div relative flex items-start px-2 sm:px-4">
          <div className="max-w-full sm:max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-6 sm:my-10">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-3xl sm:text-4xl font-bold text-custom-gray font-brygada-1918"
                >
                  {item.title}
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-xl sm:text-2xl text-custom-gray font-brygada-1918 mt-2 mb-4"
                >
                  {item.subheader}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-lg sm:text-xl text-custom-gray font-brygada-1918 max-w-[300px] sm:max-w-sm mt-6 sm:mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-16" />
          </div>
        </div>
        <div
          className={cn(
            "hidden lg:block h-96 w-[500px] rounded-md  bg-transparent  sticky top-10 overflow-hidden",
            contentClassName
          )}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}  // Added hover animation
            className="w-full h-full rounded-md"
          >
          {content[activeCard].content ?? null}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
