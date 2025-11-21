import AnimatedWrapper from "./AnimatedWrapper";
export default function AnimatedLeftToRight({ classname, stagger , ...props  }) {
  return <AnimatedWrapper stagger={stagger} className={classname} direction="left" {...props} />;
}
