"use strict";

"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0 }
    ).fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative bg-transparent py-20 border-b border-black/5 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-brand/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Decorative spinning starburst */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10 w-56 h-56 hidden lg:block pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-cyan-brand fill-current animate-[spin_45s_linear_infinite]">
          {Array.from({ length: 20 }).map((_, i) => (
            <rect key={i} x="95" y="10" width="10" height="38" rx="3" fill="currentColor" transform={`rotate(${i * 18} 100 100)`} />
          ))}
          <circle cx="100" cy="100" r="20" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-[1850px] w-full mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-sans font-extralight tracking-tight text-black mb-6 opacity-0"
        >
          Portfólio
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl font-alt font-light text-black/60 max-w-xl opacity-0"
        >
          Projetos que traduzem visão em impacto visual.
        </p>
      </div>
    </section>
  );
}
