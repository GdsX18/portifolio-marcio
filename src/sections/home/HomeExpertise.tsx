"use strict";

"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Users, Building2, ShoppingBag, Ticket, BookOpen } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const expertiseCards = [
  {
    title: "Endomarketing",
    highlight: "Cultura forte não nasce por acaso.",
    description: "Criamos peças que alinham equipe, fortalecem valores e fazem o colaborador vestir a camisa — não por obrigação, mas por convicção.",
    bgClass: "bg-[#f0f0f0]",
    icon: Users,
  },
  {
    title: "Marketing Institucional",
    highlight: "Marca não é só estética. É posicionamento.",
    description: "Traduzimos essência em comunicação sólida, coerente e memorável. Do conceito à execução, construímos presença que inspira confiança e respeito.",
    bgClass: "bg-cyan-brand",
    icon: Building2,
  },
  {
    title: "Varejo",
    highlight: "No varejo, quem não chama atenção, perde venda.",
    description: "Desenvolvemos comunicação visual que para o olhar, conduz o cliente e impulsiona decisão. Aqui, design não é enfeite — é ferramenta de faturamento.",
    bgClass: "bg-[#f0f0f0]",
    icon: ShoppingBag,
  },
  {
    title: "Eventos",
    highlight: "Evento bom passa. Evento marcante fica.",
    description: "Criamos identidade e ambientação que transformam momentos em experiências vivas. Cada detalhe comunica. Cada espaço conta uma história.",
    bgClass: "bg-[#f0f0f0]",
    icon: Ticket,
  },
  {
    title: "Editorial",
    highlight: "O impresso ainda fala — e fala alto.",
    description: "Projetamos materiais que valorizam conteúdo e elevam a leitura a outro nível. Clareza, ritmo e estética caminhando juntos, como sempre foi feito — e bem feito.",
    bgClass: "bg-cyan-brand",
    icon: BookOpen,
  },
];

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
          {/* Row 1: Cards 1, 2 e 3 */}
          {expertiseCards.slice(0, 3).map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`${card.bgClass} expertise-card rounded-[48px] p-10 lg:p-12 flex flex-col justify-between min-h-[320px] shadow-sm opacity-0 group hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="w-12 h-12 text-black mb-8 flex items-center justify-center p-2.5 bg-black/5 rounded-2xl border border-black/5 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Icon className="w-full h-full stroke-[1.5]" />
                </div>

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
            );
          })}

          {/* Row 2: Empty Spacer Column */}
          <div className="hidden md:block" aria-hidden="true" />

          {/* Row 2: Cards 4 e 5 */}
          {expertiseCards.slice(3, 5).map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx + 3}
                className={`${card.bgClass} expertise-card rounded-[48px] p-10 lg:p-12 flex flex-col justify-between min-h-[320px] shadow-sm opacity-0 group hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="w-12 h-12 text-black mb-8 flex items-center justify-center p-2.5 bg-black/5 rounded-2xl border border-black/5 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Icon className="w-full h-full stroke-[1.5]" />
                </div>

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
            );
          })}
        </div>
      </div>
    </section>
  );
}
