"use strict";

"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    text: "Use este espaço para compartilhar um depoimento sobre o negócio, produtos ou serviços. Inclua uma citação de um cliente para gerar confiança e conquistar os visitantes do site.",
    name: "Rodrigo Moraes, CEO",
    company: "Natio Produções",
  },
  {
    text: "Use este espaço para compartilhar um depoimento sobre o negócio, produtos ou serviços. Inclua uma citação de um cliente para gerar confiança e conquistar os visitantes do site.",
    name: "Carlos Nogueira",
    company: "Seven Iluminações",
  },
  {
    text: "Use este espaço para compartilhar um depoimento sobre o negócio, produtos ou serviços. Inclua uma citação de um cliente para gerar confiança e conquistar os visitantes do site.",
    name: "Maria Gonçalves, CFO",
    company: "Laderate",
  },
];

export default function HomeTestimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animação do título
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animação dos cards com stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#1a1a2e] py-20 md:py-28 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Título e subtítulo */}
        <div ref={titleRef} className="mb-16 max-w-md opacity-0">
          <h2 className="text-3xl md:text-4xl font-sans font-normal tracking-tight text-white mb-4 leading-tight">
            O que os clientes têm a dizer
          </h2>
          <p className="text-white/50 font-alt text-sm md:text-base font-light italic leading-relaxed">
            Confira algumas mensagens aqui ou na seção Depoimentos.
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-black/60 backdrop-blur-sm rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[300px] opacity-0 border border-white/5"
            >
              {/* Texto do depoimento */}
              <p className="text-white/70 font-alt text-sm md:text-base font-light leading-relaxed mb-8">
                {testimonial.text}
              </p>

              {/* Nome e empresa */}
              <div className="text-right">
                <p className="text-white/90 font-alt text-sm font-normal italic">
                  {testimonial.name}
                </p>
                <p className="text-white/50 font-alt text-xs font-light italic">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
