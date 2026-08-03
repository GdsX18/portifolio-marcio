"use strict";

"use client";

import React, { useRef } from "react";
import PortfolioCarousel from "@/components/ui/PortfolioCarousel";
import { OriginButton } from "@/components/ui/origin-button";
import { MonogramN } from "@/components/common/MonogramN";

export default function PortfolioProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="bg-transparent pb-20 md:pb-28 text-black pt-4">
      <div className="max-w-[1850px] w-full mx-auto px-4 md:px-8 lg:px-10">
        
        {/* Main Portfolio Section with Interactive Carousel (15 Cards) */}
        <div className="mb-20">
          <PortfolioCarousel />
        </div>

        {/* Stats Counter Row */}
        <div className="bg-black text-white rounded-[48px] py-16 px-8 my-16 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "+150", label: "Projetos entregues" },
              { number: "+25", label: "Clientes ativos" },
              { number: "+12", label: "Anos de mercado" },
              { number: "+5", label: "Prêmios conquistados" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <span className="text-5xl md:text-6xl font-sans font-light tracking-tighter text-cyan-brand">
                  {stat.number}
                </span>
                <span className="text-sm font-alt font-light text-white/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center text-center gap-6 pt-16 pb-8">
          <MonogramN className="w-12 h-12 text-cyan-brand" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light tracking-tight text-black">
            Tem um projeto em mente?
          </h2>
          <p className="text-black/60 font-alt text-base md:text-lg font-light max-w-xl leading-relaxed">
            Vamos transformar suas ideias em comunicação visual de alto impacto. Entre em contato e descubra como podemos elevar sua marca.
          </p>
          <OriginButton
            href="/contato"
            className="px-8 py-3.5 bg-black hover:bg-black/80 text-cyan-brand rounded-full font-alt text-sm font-light tracking-wide transition-all duration-300 shadow-md h-auto"
            rippleBg="bg-white"
            hoverTextColor="!text-black"
          >
            Iniciar conversa
          </OriginButton>
        </div>
      </div>
    </section>
  );
}
