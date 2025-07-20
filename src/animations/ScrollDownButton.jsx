"use client";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { motion } from "framer-motion";

const ScrollDownButton = ({ targetId }) => {
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className="text-[#FFF] text-[24px] md:text-[30px] absolute bottom-[20px] md:bottom-[40px] z-[2] cursor-pointer font-[700] bg-[rgba(0,0,0,0.05)]"
      onClick={() => scrollToSection(targetId)}
      // Animation properties
      animate={{
        y: [0, 10, 0], // Bounce effect
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      <HiOutlineChevronDoubleDown />
    </motion.div>
  );
};

export default ScrollDownButton;
