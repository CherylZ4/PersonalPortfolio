import React, { ReactNode, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: ReactNode;
  delay?: number; // You can customize the initial delay (in milliseconds)
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 1000 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } }, // Customize the duration as needed
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 1 }} // Add a transition duration for the initial fade-in
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
