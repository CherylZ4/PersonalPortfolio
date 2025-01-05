"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-transparent dark:bg-transparent font-sans">
      {/* Mobile Layout */}
      <div className="block md:hidden ml-0 pl-4 w-full">
        <div className="w-full ml-0">
          <h2 className="text-custom-gray font-brygada-1918 text-4xl sm:text-5xl font-medium mb-8 text-left ml-0">
            Work Experience
          </h2>
          {data.map((item, index) => (
            <div key={index} className="mb-16 text-left ml-0 w-full">
              <h2 className="text-3xl font-bold text-custom-gray font-brygada-1918 mb-4 ml-0">
                {item.title}
              </h2>
              <div className="text-custom-gray ml-0">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Timeline Layout */}
      <div className="hidden md:block">
        <div ref={containerRef} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-8 sm:pt-40 -space-x-4 sm:-space-x-8"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-neutral-600 dark:neutral-600 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-600 dark:neutral-600 border border-neutral-600 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-500 dark:text-neutral-500 ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-8 sm:pl-12 pr-4 w-full bg-transparent">
                <h3 className="md:hidden block text-xl sm:text-2xl mb-4 text-left font-bold text-neutral-500">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-500 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-violet-300 via-purple-200 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
