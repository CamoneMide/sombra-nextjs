"use client";

import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocomotiveScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const locomotiveScroll = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;

        locomotiveScroll.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          // Beta-specific options:
          lerp: 0.07,
          multiplier: 1,
          smartphone: { smooth: true },
          tablet: { smooth: true },
        });
      } catch (error) {
        console.error("Locomotive Scroll init error:", error);
      }
    })();

    return () => {
      locomotiveScroll.current?.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default LocomotiveScrollWrapper;
