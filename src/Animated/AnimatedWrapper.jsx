import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "./useScrollAnimation";

export default function AnimatedWrapper({
  children,
  direction = "bottom",
  stagger = 0.8,
  className = ""
}) {
  const { ref, inView } = useScrollAnimation();

  const directions = {
    bottom: { y: 50, x: 0 },
    top: { y: -50, x: 0 },
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
  };

  const initial = { opacity: 0, ...directions[direction] };
  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <>
      {React.Children.map(children, (child, index) => (
        <motion.div
        ref={ref}
        className={className}
          key={index}
          initial={initial}
          animate={inView ? animate : initial}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 35,
            delay: index === 1 ? stagger : index * stagger,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
