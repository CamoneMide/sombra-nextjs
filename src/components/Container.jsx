// "use client";
import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <>
      <section
        className={twMerge(
          "w-full max-w-[1400px] mx-auto px-[15px] md:px-[20px]",
          className
        )}
      >
        {children}
      </section>
    </>
  );
};

export default Container;
