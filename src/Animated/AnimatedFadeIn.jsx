import React from "react";
import { motion } from "framer-motion";

export default function AnimatedFadeIn({ children, stagger = 0.5 }) {
  return (
    <motion.div>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * stagger }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
