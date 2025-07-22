"use client";
import Image from "next/image";
import logo from "@/public/logo-sombra.png";
import { footerLinks } from "../constants";
import Link from "next/link";
import { Container } from "../components";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <>
      <section className="bg-[#000] border-t-[1px] border-t-[rgba(255,255,255,0.2)]">
        <Container
          className={
            "mx-[40px] py-[40px] md:py-[60px] md:mx-[30px] lg:mx-auto flex flex-col md:flex-row md:justify-evenly gap-[40px]"
          }
        >
          <div className="flex flex-col gap-[16px] w-[80%] md:w-[220px] lg:w-[300px]">
            <Link href="/" className="keychainify-checked">
              <div className="flex h-[32px] w-[132px]">
                <Image
                  src={logo}
                  alt="logo"
                  className="size-full object-cover"
                />
              </div>
            </Link>
            <p className="text-[14px] text-[#8C8C8C] font-[500]">
              Our templates are the perfect solution for anyone who wants to
              launch a website without having to learn how to code
            </p>
          </div>

          {footerLinks.map((footerLink) => {
            return (
              <div key={footerLink.id} className="flex flex-col gap-[20px]">
                <h4 className="text-[16px] text-[#FFF] font-[700]">
                  {footerLink.headText}
                </h4>
                <ul className="flex flex-col gap-[10px]">
                  {footerLink.links.map((link) => {
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className={`text-[14px] font-[500] hover:text-[rgba(255,255,255,0.9)] hover:underline transition-all duration-300 keychainify-checked ${
                            pathname === link.href
                              ? "text-[#FFF] underline"
                              : "text-[#8C8C8C]"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </Container>
        <div className="w-full h-[1px] bg-[rgba(255,255,255,0.2)]" />
        <Container>
          <div className="px-[5px] pt-6 pb-8 md:pt-8 md:pb-10 lg:pt-6 lg:pb-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] md:text-[14px]">
            <p className="text-[#FFF] font-medium leading-normal tracking-normal text-center sm:text-left">
              Copyright &copy; {new Date().getFullYear()} Sombra. All right
              reserved
            </p>
            <p className="flex flex-row items-center flex-nowrap text-[#FFF] font-medium leading-normal tracking-normal gap-1">
              <strong>Developed by</strong>
              <a
                href="https://github.com/CamoneMide"
                target="_blank"
                className="mx-[2px] hover:text-[#2563EB] transition-all duration-300 keychainify-checked"
              >
                <i>Camone_Mide</i>
              </a>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/mide-web-developer"
                target="_blank"
                className="text-[#2563EB] hover:opacity-70 transition-all duration-300 keychainify-checked"
              >
                <BiLogoLinkedin size={18} />
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/CamoneMide"
                target="_blank"
                className="text-[#2563EB] hover:opacity-70 transition-all duration-300 keychainify-checked"
              >
                <BiLogoGithub size={16} />
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
