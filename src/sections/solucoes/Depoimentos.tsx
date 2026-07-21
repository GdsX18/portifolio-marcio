"use strict";

"use client";

import React, { useRef } from "react";
import { Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const depoimentos = [
  {
    author: "Cliente: Nome",
    text: "Explique o que torna o negócio único. Identifique as qualidades que o diferenciam dos concorrentes e descreva-as com a voz autêntica da marca. Inclua detalhes envolventes para despertar e manter o interesse dos leitores.",
  },
  {
    author: "Ano: 2023",
    text: "Explique o que torna o negócio único. Identifique as qualidades que o diferenciam dos concorrentes e descreva-as com a voz autêntica da marca. Inclua detalhes envolventes para despertar e manter o interesse dos leitores.",
  },
  {
    author: "Indústria: Finanças",
    text: "Explique o que torna o negócio único. Identifique as qualidades que o diferenciam dos concorrentes e descreva-as com a voz autêntica da marca. Inclua detalhes envolventes para despertar e manter o interesse dos leitores.",
  },
];

export default function Depoimentos() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animação do Título
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.0,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animação dos Cards (Stagger)
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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
      className="bg-transparent py-24 md:py-32 border-t border-black/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div ref={titleRef} className="max-w-3xl mb-20 opacity-0 text-black">
          <h2 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-black mb-6">
            Depoimentos
          </h2>
          <p className="text-black/60 font-alt text-base md:text-lg font-light leading-relaxed">
            Este é um espaço para promover o negócio, seus produtos ou serviços. Aproveite esta oportunidade para ajudar os visitantes do site a se familiarizarem com o negócio e as ofertas. Alcance clientes atuais e potenciais para gerar um senso de conexão e confiança.
          </p>
        </div>

        {/* Depoimentos Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {depoimentos.map((dep, index) => (
            <div
              key={index}
              className="group relative bg-white border border-black/5 hover:border-cyan-brand/20 rounded-xl p-8 lg:p-10 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-sm"
            >
              {/* Aspas decorativas transparentes */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-black/5 group-hover:text-cyan-brand/5 transition-colors duration-500 pointer-events-none" />

              <div className="relative z-10 mb-8">
                <p className="text-black/80 font-alt text-sm lg:text-base font-light leading-relaxed italic">
                  "{dep.text}"
                </p>
              </div>

              <div className="relative z-10 border-t border-black/5 pt-6 mt-auto">
                <h4 className="text-sm font-sans font-semibold tracking-wide text-cyan-brand">
                  {dep.author}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
