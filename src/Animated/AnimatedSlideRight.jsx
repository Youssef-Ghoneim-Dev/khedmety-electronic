import React from "react";
import { motion } from "framer-motion";

export default function AnimatedSlideRight({ children, stagger = 0.5 }) {
  return (
    <motion.div>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * stagger }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
