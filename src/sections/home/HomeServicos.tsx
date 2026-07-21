"use strict";

"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Estratégia",
    description:
      "Descreva o serviço e os benefícios dele para os clientes. Use este espaço para compartilhar detalhes como preço, duração e instruções de agendamento.",
    // Ícone sol/estrela original (sun burst)
    icon: (
      <svg viewBox="19.997 20.004 160.004 160.003" className="w-full h-full fill-current">
        <path d="m95.142 20.004 2.07 23.374-4.46.395-2.07-23.374 4.46-.395z"/>
        <path d="m107.247 156.238 2.07 23.374-4.46.395-2.07-23.374 4.46-.395z"/>
        <path d="m179.606 90.69.395 4.46-23.375 2.07-.395-4.459 23.375-2.07z"/>
        <path d="m43.371 102.794.395 4.46-23.374 2.07-.395-4.46 23.374-2.07z"/>
        <path d="m149.703 37.123 3.433 2.873-15.06 17.995-3.433-2.872 15.06-17.996z"/>
        <path d="m61.924 142.019 3.432 2.872-15.059 17.997-3.432-2.873 15.059-17.996z"/>
        <path d="m144.88 134.645 17.997 15.059-2.872 3.433-17.997-15.06 2.872-3.432z"/>
        <path d="m39.992 46.873 17.996 15.059-2.873 3.433-17.996-15.059 2.873-3.433z"/>
        <path d="m122.261 23.008 4.265 1.363-7.141 22.337-4.265-1.363 7.141-22.337z"/>
        <path d="m80.609 153.29 4.264 1.362-7.14 22.338-4.265-1.363 7.14-22.338z"/>
        <path d="m154.65 115.121 22.337 7.141-1.363 4.265-22.337-7.141 1.363-4.265z"/>
        <path d="m24.37 73.468 22.337 7.141-1.364 4.264-22.337-7.14 1.363-4.265z"/>
        <path d="m170.185 61.302 2.052 3.98-20.845 10.745-2.051-3.979 20.844-10.746z"/>
        <path d="m48.607 123.974 2.051 3.98-20.844 10.745-2.052-3.98 20.845-10.745z"/>
        <path d="m127.955 149.341 10.745 20.845-3.98 2.05-10.745-20.844 3.98-2.05z"/>
        <path d="m65.282 27.762 10.745 20.845-3.98 2.051-10.744-20.844 3.979-2.052z"/>
      </svg>
    ),
  },
  {
    title: "Execução",
    description:
      "Descreva o serviço e os benefícios dele para os clientes. Use este espaço para compartilhar detalhes como preço, duração e instruções de agendamento.",
    // Ícone setas/sparkle (4 setas + pontos)
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* Cruz central */}
        <line x1="12" y1="4" x2="12" y2="20" />
        <line x1="4" y1="12" x2="20" y2="12" />
        {/* Setas nas pontas */}
        <polyline points="9,7 12,4 15,7" />
        <polyline points="9,17 12,20 15,17" />
        <polyline points="7,9 4,12 7,15" />
        <polyline points="17,9 20,12 17,15" />
        {/* Pontos diagonais */}
        <circle cx="7" cy="7" r="0.8" className="fill-current" />
        <circle cx="17" cy="7" r="0.8" className="fill-current" />
        <circle cx="7" cy="17" r="0.8" className="fill-current" />
        <circle cx="17" cy="17" r="0.8" className="fill-current" />
      </svg>
    ),
  },
];

export default function HomeServicos() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
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
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f5f5] py-24 md:py-32 border-t-[4px] border-b-[4px] border-cyan-brand text-black"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center opacity-0"
            >
              {/* Ícone */}
              <div className="w-20 h-20 md:w-24 md:h-24 text-black mb-10">
                {service.icon}
              </div>

              {/* Título */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-normal tracking-tight text-black mb-8">
                {service.title}
              </h3>

              {/* Descrição */}
              <p className="text-black/70 font-alt text-base md:text-lg lg:text-xl leading-relaxed max-w-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
