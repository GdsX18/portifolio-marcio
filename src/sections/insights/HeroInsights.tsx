"use strict";

"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroInsights() {
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-sans font-extralight tracking-tight text-black mb-6 opacity-0"
        >
          Insights
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl font-alt font-light text-black/60 max-w-xl opacity-0"
        >
          Nossas ideias sobre tecnologia e estratégia de negócios.
        </p>
      </div>
    </section>
  );
}
