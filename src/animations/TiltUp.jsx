"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TiltUp = ({
  children,
  angle = 15, // Initial tilt angle in degrees
  distance = 50, // Initial distance back (perspective effect)
  duration = 0.8,
  delay = 0,
  easing = [0.42, 0, 0.58, 1], // Default ease-in-out cubic bezier
  threshold = 0.1,
  rootMargin = "0px",
  className = "",
  perspective = 1000, // CSS perspective value
  onAnimationComplete,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const variants = {
    hidden: {
      opacity: 0,
      rotateX: angle,
      z: -distance,
      transformPerspective: perspective,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      z: 0,
      transition: {
        delay,
        duration,
        ease: easing,
      },
    },
  };

  return (
    <div style={{ perspective }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className={className}
        onAnimationComplete={onAnimationComplete}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TiltUp;
