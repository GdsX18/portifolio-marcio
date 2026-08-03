"use strict";

"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { OriginButton } from "@/components/ui/origin-button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MonogramN } from "@/components/common/MonogramN";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animação de entrada dos elementos
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
      );

      tl.fromTo(
        iconRef.current,
        { scale: 0.7, opacity: 0, rotate: -15 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1.0, ease: "back.out(1.7)" },
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

      // Animação suave contínua de respiração
      if (iconRef.current) {
        gsap.to(iconRef.current, {
          y: -8,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    },
    { scope: containerRef }
  );

  // Animação diferenciada ao passar o mouse sobre o Isologo principal
  const handleMouseEnter = () => {
    if (!iconRef.current) return;
    gsap.to(iconRef.current, {
      rotate: "+=360",
      scale: 1.25,
      filter: "drop-shadow(0px 10px 25px rgba(4, 218, 255, 0.6))",
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  };

  const handleMouseLeave = () => {
    if (!iconRef.current) return;
    gsap.to(iconRef.current, {
      scale: 1,
      filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15))",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-transparent pt-20 md:pt-24 lg:pt-28 pb-4 md:pb-6 overflow-hidden text-black"
    >
      <div className="w-full px-6 md:px-10 lg:px-16 relative z-10">
        {/* Top Header Row with Title and Animated Isologo */}
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

          {/* Isologo Oficial Studio Neves com Animação Diferenciada de Hover */}
          <div className="lg:col-span-3 flex justify-end lg:pt-2">
            <div
              ref={iconRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="opacity-0 w-24 h-24 md:w-32 md:h-32 text-cyan-brand relative flex items-center justify-center cursor-pointer transition-all duration-300 filter drop-shadow-md"
            >
              <MonogramN className="w-full h-full text-cyan-brand" />
            </div>
          </div>
        </div>
      </div>

      {/* Lower row: 3 separated blocks */}
      <div className="w-full mt-8">
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full"
        >
          {/* Card 1: Estratégias & Experiências (Cyan) */}
          <div className="lg:col-span-5 bg-cyan-brand p-8 md:p-16 lg:pl-16 xl:pl-24 flex flex-col justify-between min-h-[380px] text-black rounded-r-[48px] rounded-l-none">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold tracking-tight text-black mb-6">
                Estratégias &amp; Experiências <br />de Marcas.
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

          {/* Card 2: Bloco com Isologo limpo (SEM SETA conforme solicitado) */}
          <div className="lg:col-span-2 bg-[#e0e0e0] rounded-[40px] flex items-center justify-center p-6 aspect-square max-w-[140px] md:max-w-[160px] w-full mx-auto self-center shadow-sm hover:scale-105 transition-transform duration-300">
            <div className="text-black flex items-center justify-center w-full h-full">
              <MonogramN className="w-14 h-14 text-black" />
            </div>
          </div>

          {/* Card 3: Soluções em Design Gráfico (Black) */}
          <div className="lg:col-span-5 bg-black p-8 md:p-16 lg:pr-16 xl:pr-24 flex flex-col justify-between min-h-[380px] text-white rounded-l-[48px] rounded-r-none">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-semibold tracking-tight text-white mb-6">
                Soluções em Design Gráfico &amp; <br />Comunicação Visual
              </h3>
              <ul className="space-y-3 text-xs md:text-sm font-alt font-light text-white/80 list-disc pl-5">
                <li>Criação de identidades visuais marcantes.</li>
                <li>Materiais gráficos que comunicam com clareza e estilo.</li>
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
