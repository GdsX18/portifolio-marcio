"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    // Reset state to trigger the animation on route change
    setIsAnimate(false);
    
    // Use requestAnimationFrame to ensure the opacity-0 state is painted first,
    // then transition smoothly to opacity-100.
    const frame = requestAnimationFrame(() => {
      setIsAnimate(true);
    });

    // Refresh GSAP ScrollTrigger after the 500ms transition finishes and layout stabilizes
    const timer = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 550);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <div
      className={`w-full transition-opacity duration-500 ease-out ${
        isAnimate ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
