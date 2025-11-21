import AnimatedWrapper from "./AnimatedWrapper";
export default function AnimatedBottomToTop({ classname, stagger , ...props  }) {
  return <AnimatedWrapper stagger={stagger} className={classname} direction="bottom" {...props} />;
}
