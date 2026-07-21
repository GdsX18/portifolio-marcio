"use strict";

"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSolucoes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const indTitleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        indTitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#f4f4f4] pt-24 md:pt-32 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start">
        
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-[100px] font-sans font-light tracking-tighter text-black mb-4 opacity-0"
        >
          Soluções
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-black tracking-tight mb-8 opacity-0"
        >
          Ajudando você a tomar a decisão certa.
        </p>
        
        <p
          ref={descRef}
          className="text-black font-alt text-base md:text-lg font-light leading-relaxed max-w-2xl opacity-0 mb-32"
        >
          Este é o espaço para apresentar a seção Serviços. Resuma os tipos de serviços oferecidos e destaque benefícios ou recursos especiais.
        </p>

        <h2
          ref={indTitleRef}
          className="text-4xl md:text-5xl font-sans font-light tracking-tight text-black opacity-0"
        >
          Indústrias
        </h2>
      </div>
    </section>
  );
}
