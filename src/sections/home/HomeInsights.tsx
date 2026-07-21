"use strict";

"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { OriginButton } from "@/components/ui/origin-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeInsights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (elementsRef.current) {
      const items = elementsRef.current.children;
      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="bg-transparent py-20 md:py-28 border-t border-black/5 text-black"
    >
      <div className="max-w-[1850px] w-full mx-auto px-4 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Section Title */}
        <div className="lg:col-span-3">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-black">
            Insights
          </h2>
        </div>

        {/* Right column: Content Block */}
        <div ref={elementsRef} className="lg:col-span-9 space-y-10 flex flex-col items-start">
          <h3 className="text-3xl md:text-5xl lg:text-6xl xl:text-[4.2rem] font-sans font-normal tracking-tight leading-[1.1] text-black max-w-none opacity-0">
            Possuímos um histórico sólido de projetos que reforçam sua expertise em comunicação visual, estratégias criativas e produção gráfica.
          </h3>

          <div className="space-y-6 max-w-none text-black/75 font-alt text-base md:text-lg lg:text-xl font-light leading-relaxed opacity-0">
            <p>
              Somos especializados em criar soluções criativas e estratégicas que fortalecem a identidade e a comunicação das marcas. Nossa expertise envolve desde o design gráfico, a comunicação visual até o desenvolvimento e produção de campanhas de endomarketing e marketing institucional e varejo, sempre com foco em gerar impacto real para empresas de diferentes portes.
            </p>
            <p>
              Entre os projetos de destaque, atuamos em campanhas de endomarketing para a Petrobras, premiadas no PNQ – Prêmio Nacional da Qualidade, além de desenvolver ações visuais para marcas de peso como Shell e Coca-Cola. Essa experiência reforça nossa capacidade de entregar resultados consistentemente, unindo criatividade, estratégia e excelência em cada detalhe.
            </p>
          </div>

          <OriginButton
            href="/insights"
            className="opacity-0 px-8 py-3 bg-black hover:bg-black/80 text-cyan-brand rounded-full font-alt text-sm font-light tracking-wide transition-all duration-300 shadow-sm h-auto"
            rippleBg="bg-white"
            hoverTextColor="!text-black"
          >
            Ler mais
          </OriginButton>
        </div>
      </div>
    </section>
  );
}
