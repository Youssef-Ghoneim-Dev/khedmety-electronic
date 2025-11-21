import { useRef } from "react";
import { useInView } from "framer-motion";

export default function useScrollAnimation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return { ref, inView };
}
