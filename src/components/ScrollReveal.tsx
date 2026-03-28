import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  scale?: number;
}

const ScrollReveal = ({
  children,
  width = "100%",
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 30,
  className = "",
  once = false,
  threshold = 0.1,
  scale = 0.98,
}: ScrollRevealProps) => {
  const getVariants = (): Variants => {
    const initialPos = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
      none: { x: 0, y: 0 },
    };

    return {
      hidden: {
        opacity: 0,
        ...initialPos[direction],
        scale: scale,
        filter: "blur(8px)",
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: duration,
          delay: delay,
          ease: "easeOut",
        },
      },
    };
  };

  return (
    <motion.div
      className={className}
      style={{ width, position: 'relative' }}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: once, 
        amount: threshold,
        margin: "-50px 0px -50px 0px"
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;