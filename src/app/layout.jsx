import React from "react";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { LocomotiveScrollWrapper, NavBar } from "../components";
import { Footer } from "../sections";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sombra | Welcome ...",
  description: "Sombra - VR and SaaS",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>
        <LocomotiveScrollWrapper>
          <NavBar />
          {children}
          <Footer />
        </LocomotiveScrollWrapper>
      </body>
    </html>
  );
}
