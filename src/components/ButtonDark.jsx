"use client";
import Link from "next/link";

const ButtonDark = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="bg-linear-to-b from-[rgb(46,46,46)] to-[rgb(31,31,31)] hover:from-[rgb(52,50,50)] hover:to-[rgb(31,31,31)] py-[10px] px-[20px] rounded-[6px] text-[14px] font-[500] text-[#FFF] border-[1px] border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 rdShadow w-full flex items-center justify-center keychainify-checked"
    >
      {text}
    </Link>
  );
};

export default ButtonDark;
