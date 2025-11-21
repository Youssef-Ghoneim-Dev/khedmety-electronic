import AnimatedWrapper from "./AnimatedWrapper";
export default function AnimatedTopToBottom({ classname, stagger , ...props  }) {
  return <AnimatedWrapper stagger={stagger} className={classname} direction="top" {...props} />;
}
