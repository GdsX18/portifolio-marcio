"use strict";

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Imagem original aérea de cidade (grayscale) do Wix
const imgCidadeAereaUrl = "https://static.wixstatic.com/media/c837a6_b80678abcb6f4974ad0dc05cfca5d804~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85/adrian-schwarz-aerial.jpg";

export default function HomeSolucoesCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section className="bg-transparent py-16 md:py-24 text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link href="/solucoes" className="block group">
          {/* Card Wrapper with 12px Cyan Border */}
          <div
            ref={containerRef}
            className="w-full grid grid-cols-1 lg:grid-cols-2 rounded-[32px] overflow-hidden border-[12px] border-cyan-brand bg-black min-h-[500px] shadow-lg transition-transform duration-500 group-hover:scale-[1.01] opacity-0"
          >
            {/* Left Column: Black Background with Gear / Rays SVG and Text */}
            <div className="bg-black p-12 md:p-16 flex flex-col items-center justify-center relative min-h-[350px] lg:min-h-auto overflow-hidden">
              {/* Spinning gear/sun background */}
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <svg viewBox="0 0 200 200" className="w-72 h-72 text-white fill-current animate-[spin_45s_linear_infinite]">
                  {/* Círculo central de base */}
                  <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                  
                  {/* 20 raios retangulares representando o design original */}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <rect
                      key={i}
                      x="95"
                      y="10"
                      width="10"
                      height="38"
                      rx="3"
                      fill="currentColor"
                      transform={`rotate(${i * 18} 100 100)`}
                    />
                  ))}
                </svg>
              </div>

              {/* Center Text */}
              <div className="relative z-10 text-center flex flex-col items-center gap-4">
                <h3 className="text-2xl md:text-4xl font-sans font-light text-white tracking-tight leading-none">
                  Nossas <br />
                  soluções
                </h3>
              </div>
            </div>

            {/* Right Column: Aerial City Image (grayscale) */}
            <div className="relative min-h-[350px] lg:min-h-auto overflow-hidden">
              <Image
                src={imgCidadeAereaUrl}
                alt="Nossas soluções"
                fill
                unoptimized
                className="object-cover grayscale contrast-115 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
