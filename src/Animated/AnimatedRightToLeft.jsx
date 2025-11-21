import AnimatedWrapper from "./AnimatedWrapper";
export default function AnimatedRightToLeft({ classname, stagger , ...props  }) {
  return <AnimatedWrapper stagger={stagger} className={classname} direction="right" {...props} />;
}
