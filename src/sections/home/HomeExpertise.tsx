"use strict";

"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const expertiseCards = [
  {
    title: "Endomarketing",
    highlight: "Cultura forte não nasce por acaso.",
    description: "Criamos peças que alinham equipe, fortalecem valores e fazem o colaborador vestir a camisa — não por obrigação, mas por convicção.",
    bgClass: "bg-[#f0f0f0]",
  },
  {
    title: "Marketing Institucional",
    highlight: "Marca não é só estética. É posicionamento.",
    description: "Traduzimos essência em comunicação sólida, coerente e memorável. Do conceito à execução, construímos presença que inspira confiança e respeito.",
    bgClass: "bg-cyan-brand",
  },
  {
    title: "Varejo",
    highlight: "No varejo, quem não chama atenção, perde venda.",
    description: "Desenvolvemos comunicação visual que para o olhar, conduz o cliente e impulsiona decisão. Aqui, design não é enfeite — é ferramenta de faturamento.",
    bgClass: "bg-[#f0f0f0]",
  },
  {
    title: "Eventos",
    highlight: "Evento bom passa. Evento marcante fica.",
    description: "Criamos identidade e ambientação que transformam momentos em experiências vivas. Cada detalhe comunica. Cada espaço conta uma história.",
    bgClass: "bg-[#f0f0f0]",
    isSecondRow: true,
  },
  {
    title: "Editorial",
    highlight: "O impresso ainda fala — e fala alto.",
    description: "Projetamos materiais que valorizam conteúdo e elevam a leitura a outro nível. Clareza, ritmo e estética caminhando juntos, como sempre foi feito — e bem feito.",
    bgClass: "bg-cyan-brand",
    isSecondRow: true,
  },
];

const StarburstIcon = () => (
  <div className="w-14 h-14 text-black mb-10">
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-current animate-[spin_30s_linear_infinite]">
      <g strokeWidth="2.5" strokeLinecap="round">
        <line x1="50" y1="5" x2="50" y2="45" />
        <line x1="50" y1="55" x2="50" y2="95" />
        <line x1="5" y1="50" x2="45" y2="50" />
        <line x1="55" y1="50" x2="95" y2="50" />
        <line x1="18" y1="18" x2="46" y2="46" />
        <line x1="82" y1="82" x2="54" y2="54" />
        <line x1="18" y1="82" x2="46" y2="54" />
        <line x1="82" y1="18" x2="54" y2="46" />
        <line x1="34" y1="8" x2="48" y2="47" />
        <line x1="66" y1="92" x2="52" y2="53" />
        <line x1="16" y1="34" x2="47" y2="48" />
        <line x1="84" y1="66" x2="53" y2="52" />
        <line x1="84" y1="34" x2="53" y2="48" />
        <line x1="16" y1="66" x2="47" y2="52" />
        <line x1="66" y1="8" x2="52" y2="47" />
        <line x1="34" y1="92" x2="48" y2="53" />
        <line x1="25" y1="12" x2="47" y2="46" />
        <line x1="75" y1="88" x2="53" y2="54" />
        <line x1="12" y1="25" x2="46" y2="47" />
        <line x1="88" y1="75" x2="54" y2="53" />
        <line x1="88" y1="25" x2="54" y2="47" />
        <line x1="12" y1="75" x2="46" y2="53" />
        <line x1="75" y1="12" x2="53" y2="46" />
        <line x1="25" y1="88" x2="47" y2="54" />
      </g>
      <circle cx="50" cy="50" r="14" fill="currentColor" stroke="none" />
    </svg>
  </div>
);

export default function HomeExpertise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".expertise-card");
      gsap.fromTo(
        cards,
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.18,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
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
      <div className="max-w-[1850px] w-full mx-auto px-4 md:px-8 lg:px-10">
        {/* Top Title Row */}
        <div className="w-full mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-black">
            Expertise
          </h2>
        </div>

        {/* 3-Column Asymmetric Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full"
        >
          {/* Row 1: Cards 1, 2 and 3 */}
          {expertiseCards.slice(0, 3).map((card, idx) => (
            <div
              key={idx}
              className={`${card.bgClass} expertise-card rounded-[48px] p-10 lg:p-12 flex flex-col justify-between min-h-[320px] shadow-sm opacity-0`}
            >
              <StarburstIcon />

              <div>
                <h4 className="text-2xl md:text-3xl font-sans font-normal text-black mb-6 leading-tight">
                  {card.title}
                </h4>
                <p className="text-black font-sans font-bold text-sm md:text-base mb-2 leading-relaxed">
                  {card.highlight}
                </p>
                <p className="text-black/80 font-sans font-light text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}

          {/* Row 2: Empty Spacer Column (desloca cards 4 e 5 para o meio e direita) */}
          <div className="hidden md:block" aria-hidden="true" />

          {/* Row 2: Cards 4 and 5 */}
          {expertiseCards.slice(3, 5).map((card, idx) => (
            <div
              key={idx + 3}
              className={`${card.bgClass} expertise-card rounded-[48px] p-10 lg:p-12 flex flex-col justify-between min-h-[320px] shadow-sm opacity-0`}
            >
              <StarburstIcon />

              <div>
                <h4 className="text-2xl md:text-3xl font-sans font-normal text-black mb-6 leading-tight">
                  {card.title}
                </h4>
                <p className="text-black font-sans font-bold text-sm md:text-base mb-2 leading-relaxed">
                  {card.highlight}
                </p>
                <p className="text-black/80 font-sans font-light text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
