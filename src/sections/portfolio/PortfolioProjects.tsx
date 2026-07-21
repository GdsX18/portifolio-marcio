"use strict";

"use client";

import React, { useRef } from "react";
import { OriginButton } from "@/components/ui/origin-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Starburst Icon ─── */
const StarburstIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    className={`fill-current ${className}`}
  >
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
    <circle cx="100" cy="100" r="20" fill="currentColor" />
  </svg>
);

export default function PortfolioProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Content reveal
  useGSAP(() => {
    if (contentRef.current) {
      const items = contentRef.current.querySelectorAll(".reveal-item");
      gsap.fromTo(
        items,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, { scope: sectionRef });

  // Stats reveal
  useGSAP(() => {
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, { scope: sectionRef });

  // CTA reveal
  useGSAP(() => {
    if (ctaRef.current) {
      const items = ctaRef.current.children;
      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-transparent pb-20 md:pb-28 text-black">
      <div className="max-w-[1850px] w-full mx-auto px-4 md:px-8 lg:px-10">

        {/* ─── Em Produção — Central Message ─── */}
        <div ref={contentRef} className="flex flex-col items-center text-center py-24 md:py-32 relative">

          {/* Large Decorative Starburst */}
          <div className="reveal-item opacity-0">
            <StarburstIcon className="w-24 h-24 md:w-32 md:h-32 text-cyan-brand animate-[spin_30s_linear_infinite] mb-12" />
          </div>

          {/* Title */}
          <h2 className="reveal-item opacity-0 text-4xl md:text-5xl lg:text-6xl font-sans font-light tracking-tight text-black mb-6">
            Em produção
          </h2>

          {/* Description */}
          <p className="reveal-item opacity-0 text-black/60 font-alt text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mb-4">
            Estamos preparando a curadoria completa dos nossos projetos. Em breve, você poderá explorar cada trabalho em detalhe — da estratégia ao resultado.
          </p>

          <p className="reveal-item opacity-0 text-black/40 font-alt text-sm font-light max-w-lg">
            Enquanto isso, conheça nossa expertise ou entre em contato para conversarmos sobre o seu projeto.
          </p>

          {/* Action Buttons */}
          <div className="reveal-item opacity-0 flex flex-col sm:flex-row items-center gap-4 mt-10">
            <OriginButton
              href="/sobre"
              className="px-8 py-3 bg-black hover:bg-black/80 text-cyan-brand rounded-full font-alt text-sm font-light tracking-wide transition-all duration-300 shadow-sm h-auto"
              rippleBg="bg-white"
              hoverTextColor="!text-black"
            >
              Ver expertise
            </OriginButton>
            <OriginButton
              href="/contato"
              className="px-8 py-3 bg-transparent border border-black/15 hover:border-cyan-brand text-black hover:text-cyan-brand rounded-full font-alt text-sm font-light tracking-wide transition-all duration-300 h-auto"
              rippleBg="bg-cyan-brand"
              hoverTextColor="!text-black"
            >
              Fale conosco
            </OriginButton>
          </div>

          {/* Decorative skeleton preview — dá a impressão de que conteúdo está vindo */}
          <div className="reveal-item opacity-0 w-full max-w-5xl mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 filter blur-[2px] opacity-20 select-none pointer-events-none">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`bg-black/10 rounded-[32px] animate-pulse ${
                  num === 1 ? "min-h-[340px] md:col-span-2" : "min-h-[340px]"
                }`}
              />
            ))}
            {[4, 5, 6].map((num) => (
              <div
                key={num}
                className="bg-black/8 rounded-[32px] min-h-[280px] animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* ─── Stats Counter Row ─── */}
        <div
          ref={statsRef}
          className="bg-black text-white rounded-[48px] py-16 px-8 opacity-0"
        >
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

        {/* ─── CTA Section ─── */}
        <div
          ref={ctaRef}
          className="flex flex-col items-center text-center gap-8 pt-24 pb-8"
        >
          <StarburstIcon className="w-10 h-10 text-cyan-brand animate-[spin_20s_linear_infinite] opacity-0" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light tracking-tight text-black opacity-0">
            Tem um projeto em mente?
          </h2>
          <p className="text-black/60 font-alt text-base md:text-lg font-light max-w-xl leading-relaxed opacity-0">
            Vamos transformar suas ideias em comunicação visual de alto impacto. Entre em contato e descubra como podemos elevar sua marca.
          </p>
          <OriginButton
            href="/contato"
            className="opacity-0 px-8 py-3 bg-black hover:bg-black/80 text-cyan-brand rounded-full font-alt text-sm font-light tracking-wide transition-all duration-300 shadow-sm h-auto"
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
