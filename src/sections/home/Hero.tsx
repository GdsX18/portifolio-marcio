"use strict";

"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { OriginButton } from "@/components/ui/origin-button";
import { ArrowDown, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const bowtieRef = useRef<HTMLDivElement>(null);
  const sunburstRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animação de entrada dos elementos
    const tl = gsap.timeline();
    
    tl.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    );

    tl.fromTo(
      iconRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.0, ease: "power3.out" },
      "-=0.8"
    );

    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      tl.fromTo(
        cards,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
        "-=0.6"
      );
    }

    // Animação contínua de abrir/fechar (Bowtie <-> Sunburst)
    const bowtie = bowtieRef.current;
    const sunburst = sunburstRef.current;
    if (bowtie && sunburst) {
      const tlLoop = gsap.timeline({ repeat: -1 });

      // Transição: Fechado (Bowtie) -> Aberto (Sunburst)
      tlLoop.to(bowtie, {
        rotate: 90,
        scale: 0,
        opacity: 0,
        duration: 1.0,
        ease: "power2.inOut"
      }, "+=1.5");

      tlLoop.to(sunburst, {
        rotate: 180,
        scale: 1,
        opacity: 1,
        duration: 1.0,
        ease: "power2.inOut"
      }, "<");

      // Transição: Aberto (Sunburst) -> Fechado (Bowtie)
      tlLoop.to(bowtie, {
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 1.0,
        ease: "power2.inOut"
      }, "+=1.5");

      tlLoop.to(sunburst, {
        rotate: 0,
        scale: 0,
        opacity: 0,
        duration: 1.0,
        ease: "power2.inOut"
      }, "<");
    }
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative bg-transparent pt-20 md:pt-24 lg:pt-28 pb-4 md:pb-6 overflow-hidden text-black"
    >
      <div className="w-full px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* Top Header Row with Title and Styled Cyan Icon */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-6">
          <div className="lg:col-span-9">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5.5rem] font-sans font-normal tracking-tight leading-[1.05] text-black opacity-0"
            >
              Solução em design <br className="hidden lg:block" />
              gráfico. Comunicação <br className="hidden lg:block" />
              visual eficaz. Estratégias <br className="hidden lg:block" />
              e experiências de <br className="hidden lg:block" />
              marcas. Produção Gráfica.
            </h1>
          </div>

          {/* Styled Cyan Icon (Bowtie/Sunburst Morphing) */}
          <div className="lg:col-span-3 flex justify-end lg:pt-2">
            <div
              ref={iconRef}
              className="opacity-0 w-24 h-24 md:w-32 md:h-32 text-cyan-brand relative"
            >
              {/* Bowtie State */}
              <div ref={bowtieRef} className="absolute inset-0">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-cyan-brand">
                  <path d="M 10 25 L 44 50 L 10 75 Z" />
                  <path d="M 90 25 L 56 50 L 90 75 Z" />
                </svg>
              </div>

              {/* Sunburst State */}
              <div ref={sunburstRef} className="absolute inset-0 opacity-0 scale-0">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-cyan-brand">
                  <circle cx="50" cy="50" r="12" />
                  {Array.from({ length: 24 }).map((_, i) => (
                    <rect
                      key={i}
                      x="47.5"
                      y="2"
                      width="5"
                      height="32"
                      rx="1.5"
                      transform={`rotate(${i * 15} 50 50)`}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lower row: 3 separated blocks (Full Width com gap e extremidades arredondadas) */}
      <div className="w-full mt-8">
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full"
        >
          {/* Card 1: Estratégias & Experiências (Cyan) */}
          <div className="lg:col-span-5 bg-cyan-brand p-8 md:p-16 lg:pl-16 xl:pl-24 flex flex-col justify-between min-h-[380px] text-black rounded-r-[48px] rounded-l-none">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold tracking-tight text-black mb-6">
                Estratégias & Experiências <br />de Marcas.
              </h3>
              <ul className="space-y-3 text-xs md:text-sm font-alt font-light text-black/80 list-disc pl-5">
                <li>Desenvolvimento de posicionamento e linguagem visual.</li>
                <li>Concepção de campanhas que conectam marcas ao público.</li>
                <li>Experiências que fortalecem a presença da sua empresa.</li>
              </ul>
            </div>
            
            <OriginButton
              href="/contato"
              className="mt-8 self-start px-6 py-2.5 bg-transparent border border-black text-black hover:bg-black hover:text-white rounded-full font-alt text-xs uppercase tracking-wider font-light transition-all duration-300 h-auto"
              rippleBg="bg-black"
              hoverTextColor="!text-white"
            >
              Fale com a gente.
            </OriginButton>
          </div>

          {/* Card 2: Custom Square Arrow Down Block (Light Gray, Square shape as in reference) */}
          <div className="lg:col-span-2 bg-[#e0e0e0] rounded-[40px] flex items-center justify-center p-6 aspect-square max-w-[140px] md:max-w-[160px] w-full mx-auto self-center shadow-sm">
            <div className="text-black flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="20" />
                <path d="M 5 14 C 8 18, 16 18, 19 14" />
              </svg>
            </div>
          </div>

          {/* Card 3: Soluções em Design Gráfico (Black) */}
          <div className="lg:col-span-5 bg-black p-8 md:p-16 lg:pr-16 xl:pr-24 flex flex-col justify-between min-h-[380px] text-white rounded-l-[48px] rounded-r-none">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold tracking-tight text-white mb-6">
                Soluções em Design Gráfico & <br />Comunicação Visual
              </h3>
              <ul className="space-y-3 text-xs md:text-sm font-alt font-light text-white/80 list-disc pl-5">
                <li>Criação de identidades visuais marcantes.</li>
                <li>Materiais gráficos que comunicam com clareza e style.</li>
                <li>Design criativo focado em resultado.</li>
              </ul>
            </div>
            
            <OriginButton
              href="/contato"
              className="mt-8 self-start px-6 py-2.5 bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-full font-alt text-xs uppercase tracking-wider font-light transition-all duration-300 h-auto"
              rippleBg="bg-white"
              hoverTextColor="!text-black"
            >
              Fale com a gente.
            </OriginButton>
          </div>
        </div>
      </div>
    </section>
  );
}
