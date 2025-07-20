"use client";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

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
    <div
      className="text-[#FFF] absolute bottom-[40px] z-[2] animate-bounce cursor-pointer font-[700] bg-[rgba(0,0,0,0.05)]"
      onClick={() => scrollToSection(targetId)}
    >
      <HiOutlineChevronDoubleDown size={34} />
    </div>
  );
};

export default ScrollDownButton;
