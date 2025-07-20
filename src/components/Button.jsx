"use client";
import Link from "next/link";

const Button = ({ text }) => {
  return (
    <Link
      href={"https://github.com/CamoneMide"}
      target="_blank"
      className="bg-linear-to-b from-[rgb(15,96,255)] to-[rgb(0,4,109)] hover:from-[rgb(36,109,255)] hover:to-[rgb(0,4,133)] py-[10px] px-[20px] rounded-[6px] text-[14px] font-[500] text-[#FFF] border-[1px] border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.3)] transition-all duration-300 w-full flex items-center justify-center keychainify-checked"
    >
      {text}
    </Link>
  );
};

export default Button;
