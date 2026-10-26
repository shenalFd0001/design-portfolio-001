import { motion, useReducedMotion } from "motion/react";

const DISABLE_REVEAL = true; // set to false to bring the animation back

function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 32,
}) {
  const shouldReduceMotion = useReducedMotion();

  if (DISABLE_REVEAL) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: distance,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
        margin: "0px 0px -20px 0px",
      }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;