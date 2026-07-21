"use strict";

"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pilaresList = [
  {
    num: "01",
    title: "Estratégia de produto orientada por dados",
    description: "Aplicamos metodologias sólidas de inteligência de produto e pesquisa focada. Unimos dados quantitativos de analytics com pesquisas qualitativas de usuários para guiar a evolução do roadmap com máxima conversão, gerando features inteligentes e com impacto financeiro tangível.",
  },
  {
    num: "02",
    title: "Engenharia de software moderna",
    description: "Nossa metodologia de engenharia foca na agilidade sem abdicar do rigor de qualidade. Desenvolvemos produtos com arquiteturas limpas (Clean Architecture), escaláveis na nuvem, pipelines integrados de CI/CD, testes automatizados unitários e de integração, garantindo que o software permaneça resiliente frente ao crescimento da base.",
  },
  {
    num: "03",
    title: "Liderança ágil e cultura de inovação",
    description: "Acreditamos que ótimos produtos nascem de times autônomos e saudáveis. Lideramos times multidisciplinares por meio de boas práticas de agilidade (Scrum, Kanban), disseminando uma cultura forte de feedback constante, refatoração de código incremental e foco em melhorias contínuas que previnem o débito técnico.",
  },
];

export default function Pilares() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Efeito de PIN na coluna esquerda apenas no Desktop (min-width: 1024px)
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 15%",
        end: "bottom 85%",
        pin: leftColRef.current,
        pinSpacing: false,
        scrub: true,
      });
    });

    // Animação de fade-in e scale sutil nos blocos da direita
    const cards = containerRef.current?.querySelectorAll(".pilar-card");
    if (cards) {
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              end: "top 30%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="bg-transparent py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Fixed section title */}
        <div ref={leftColRef} className="lg:col-span-4 self-start lg:pr-6">
          <span className="text-cyan-brand font-alt text-xs uppercase tracking-widest font-light block mb-3">
            Nossos Valores
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-extralight tracking-tight text-black leading-tight">
            Nossos Pilares de Expertise
          </h2>
          <div className="w-12 h-[2px] bg-cyan-brand mt-6 hidden lg:block" />
        </div>

        {/* Right Column: Scrolling Blocks */}
        <div className="lg:col-span-8 space-y-16 lg:space-y-32">
          {pilaresList.map((pilar, index) => (
            <div
              key={index}
              className="pilar-card flex flex-col gap-6 p-8 rounded-2xl bg-white border border-black/5 hover:border-cyan-brand/10 transition-colors duration-500 relative overflow-hidden"
            >
              {/* Number Overlay */}
              <span className="absolute -top-6 -right-6 text-8xl font-sans font-black text-black/5 select-none pointer-events-none">
                {pilar.num}
              </span>

              {/* Header */}
              <div className="flex items-center gap-4">
                <span className="text-cyan-brand font-sans font-bold text-sm tracking-widest border-b border-cyan-brand pb-1">
                  Pilar {pilar.num}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-sans font-light tracking-wide text-black">
                {pilar.title}
              </h3>

              {/* Description */}
              <p className="text-black/60 font-alt text-sm md:text-base font-light leading-relaxed max-w-2xl">
                {pilar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
