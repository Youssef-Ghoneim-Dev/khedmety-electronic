import React from "react";
import { motion } from "framer-motion";

export default function AnimatedToTop({ children, stagger = 0.5 }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {}
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * stagger }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
