"use strict";

"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroContato() {
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
      className="relative bg-black py-20 border-b border-white/5 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-brand/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-sans font-extralight tracking-tight text-white mb-6 opacity-0"
        >
          Entre em contato
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl font-alt font-light text-cyan-brand max-w-xl opacity-0"
        >
          Vamos trabalhar juntos para estruturar o seu próximo passo.
        </p>
      </div>
    </section>
  );
}
