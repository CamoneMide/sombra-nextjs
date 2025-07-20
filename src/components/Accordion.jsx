"use client";
import React from "react";

const Accordion = ({ head, content, state }) => {
  const [accState, setAccState] = React.useState(state);

  function accStateToggle() {
    setAccState((prev) => !prev);
  }
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        onClick={accStateToggle}
        className="py-[10px] px-[16px] md:py-[30px] md:px-[20px] gridBgGradientAccd border-[1px] border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.15)] rounded-[12px] flex flex-col w-full transition-all duration-300 group cursor-pointer"
      >
        <div className="flex flex-row gap-[10px] w-full">
          <h4 className="flex-1 text-[#FFF] text-[14px] md:text-[16px]">
            {head}
          </h4>

          <div className="relative flex justify-center items-center size-[24px]">
            <span className="w-[24px] h-[1.5px] bg-[rgb(140,140,140)] group-hover:bg-[#FFF] transition-all duration-300" />
            <span
              className={`absolute right-0 w-[24px] h-[1.5px] z-[2] bg-[rgb(140,140,140)] group-hover:bg-[#FFF] transition-all duration-300 ${
                accState ? "rotate-0" : "rotate-90"
              }`}
            />
          </div>
        </div>
        <div
          onClick={handleContentClick}
          className={` grid w-full transition-all duration-[400ms] ${
            accState ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-[16px] lg:text-[18px] text-[#94A3BB] font-[500] cursor-text origin-top p-0 mt-[16px] md:mt-[20px]">
              {content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
