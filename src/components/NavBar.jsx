"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo-sombra.png";
import { Button, Container } from ".";
import { navLinks } from "../constants";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="h-[64px] lg:h-[80px] w-full bg-[#000]" />
      <div className="bg-[#000] w-full h-[64px] lg:h-[80px] flex flex-col justify-center fixed top-0 z-50">
        <Container>
          <nav className="flex flex-row justify-between items-center">
            <Link href="/" className="keychainify-checked">
              <div className="flex h-[32px] w-[132px]">
                <Image
                  src={logo}
                  alt="logo"
                  className="size-full object-cover"
                />
              </div>
            </Link>

            <div className="hidden lg:flex flex-row items-center ">
              <div className="flex flex-row items-center gap-[10px]">
                {navLinks.map((link) => (
                  <Link
                    href={link.href}
                    className="keychainify-checked"
                    key={link.name}
                  >
                    <p
                      className={`hover:text-[rgba(255,255,255,0.9)] text-[14px] font-[500] py-[10px] px-[12px] transition-all duration-300 ${
                        pathname === link.href
                          ? "text-[#FFF]"
                          : "text-[#8C8C8C]"
                      }`}
                    >
                      {link.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex">
              <div
                onClick={() => {
                  setMenuOpen((prev) => !prev);
                }}
                className="flex lg:hidden text-[#FFF] cursor-pointer"
              >
                <BiMenu size={26} />
              </div>
              <div className="hidden lg:flex">
                <Button text="Buy Template" />
              </div>
            </div>
          </nav>
        </Container>

        {/* Mobile */}
        <div
          className={`bg-[#000] grid w-full absolute z-[1] lg:hidden ${
            menuOpen
              ? "grid-rows-[1fr] top-[62px] opacity-100"
              : "grid-rows-[0fr] top-[47px] opacity-50"
          } transition-all duration-500 ease-in-out`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col justify-center items-center gap-[10px] py-[10px] w-full">
              {navLinks.map((link) => (
                <p
                  key={link.name}
                  onClick={() => {
                    setMenuOpen((prev) => !prev);
                  }}
                  className={`hover:text-[#FFF] text-[14px] font-[500] py-[6px] px-[10px] transition-all duration-300 ${
                    pathname === link.href ? "text-[#FFF]" : "text-[#8C8C8C]"
                  }`}
                >
                  <Link href={link.href} className="keychainify-checked">
                    {link.name}
                  </Link>
                </p>
              ))}
              <div
                onClick={() => {
                  setMenuOpen((prev) => !prev);
                }}
              >
                <Button text="Buy Template" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
