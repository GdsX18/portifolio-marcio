"use strict";

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export default function ExpertiseCompleta() {
  const mainContainerRef = useRef<HTMLDivElement>(null);

  // Animates all sections as they enter the viewport
  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>("section");

    sections.forEach((section) => {
      // Select elements to animate in this specific section
      const elementsToAnimate = section.querySelectorAll("h1, h2, p, .grid > div, svg");

      // Initial state
      gsap.set(elementsToAnimate, { y: 35, opacity: 0 });

      // Scroll triggered transition
      gsap.to(elementsToAnimate, {
        y: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }, { scope: mainContainerRef });

  return (
    <div ref={mainContainerRef} className="flex flex-col w-full bg-[#f4f4f4]">
      {/* 1. História */}
      <section className="bg-[#f4f4f4] text-black pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="w-full">
          <h1 className="text-6xl md:text-8xl font-sans font-light tracking-tighter mb-12">
            História
          </h1>
          <div className="max-w-4xl space-y-8 text-black/80 font-alt text-base md:text-lg font-light leading-relaxed">
            <p>
              Este é um espaço para compartilhar mais sobre o negócio; equipe, missão e pontos fortes. É uma oportunidade de contar como ele surgiu ou descrever um serviço ou produto especial. Você pode usar esta seção para compartilhar a história do negócio ou destacar uma característica específica que o diferencia da concorrência.
            </p>
            <p>
              Escreva de maneira clara. Mantenha um tom e uma voz consistentes em todo o site para ser fiel à imagem da marca e transmitir aos visitantes os valores e a personalidade do negócio.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Equipe */}
      <section className="bg-[#f4f4f4] text-black pb-32 px-6 md:px-12 lg:px-24">
        <div className="w-full flex flex-col gap-12">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-sans font-light tracking-tight">
              Equipe
            </h2>
          </div>
          <div className="w-full max-w-6xl ml-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-black text-white rounded-[32px] p-6 flex flex-col items-start shadow-lg">
              <div className="w-full bg-[#e8e8e8] rounded-t-[40px] overflow-hidden mb-6 relative aspect-[4/3] flex items-end justify-center">
                <Image src="/Ana Serra.avif" alt="Ana Serra" fill className="object-cover grayscale" />
              </div>
              <h3 className="text-xl font-sans font-medium mb-1">Ana Serra</h3>
              <p className="text-sm font-alt text-white/60 mb-5">Parcerias</p>
              <p className="text-sm font-alt text-white/80 font-light leading-relaxed mb-8">
                Descreva o integrante da equipe aqui. Adicione uma breve descrição da sua função e responsabilidades ou uma biografia resumida.
              </p>
              <a href="#" className="text-[#00c5e8] text-sm font-alt mt-auto hover:underline self-end">
                LinkedIn
              </a>
            </div>
            {/* Card 2 */}
            <div className="bg-black text-white rounded-[32px] p-6 flex flex-col items-start shadow-lg">
              <div className="w-full bg-[#e8e8e8] rounded-t-[40px] overflow-hidden mb-6 relative aspect-[4/3] flex items-end justify-center">
                <Image src="/Ricardo Mendoça.avif" alt="Ricardo Mendonça" fill className="object-cover grayscale" />
              </div>
              <h3 className="text-xl font-sans font-medium mb-1">Ricardo Mendonça</h3>
              <p className="text-sm font-alt text-white/60 mb-5">Parcerias</p>
              <p className="text-sm font-alt text-white/80 font-light leading-relaxed mb-8">
                Descreva o integrante da equipe aqui. Adicione uma breve descrição da sua função e responsabilidades ou uma biografia resumida.
              </p>
              <a href="#" className="text-[#00c5e8] text-sm font-alt mt-auto hover:underline self-end">
                LinkedIn
              </a>
            </div>
            {/* Card 3 */}
            <div className="bg-black text-white rounded-[32px] p-6 flex flex-col items-start shadow-lg">
              <div className="w-full bg-[#e8e8e8] rounded-t-[40px] overflow-hidden mb-6 relative aspect-[4/3] flex items-end justify-center">
                <Image src="/Clara Rodrigues.avif" alt="Clara Rodrigues" fill className="object-cover grayscale" />
              </div>
              <h3 className="text-xl font-sans font-medium mb-1">Clara Rodrigues</h3>
              <p className="text-sm font-alt text-white/60 mb-5">Parcerias</p>
              <p className="text-sm font-alt text-white/80 font-light leading-relaxed mb-8">
                Descreva o integrante da equipe aqui. Adicione uma breve descrição da sua função e responsabilidades ou uma biografia resumida.
              </p>
              <a href="#" className="text-[#00c5e8] text-sm font-alt mt-auto hover:underline self-end">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Abordagem */}
      <section className="bg-[#00c5e8] text-black py-24 px-6 md:px-12 rounded-t-[48px] -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="md:w-1/3 flex flex-col gap-12">
            <h2 className="text-4xl md:text-5xl font-sans font-light tracking-tight">
              Abordagem
            </h2>
            {/* Sunburst Icon */}
            <div className="w-32 h-32 text-black">
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-current animate-[spin_45s_linear_infinite]">
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
          </div>
          <div className="md:w-1/2 pt-4">
            <p className="text-black/80 font-alt text-base md:text-lg font-light leading-relaxed">
              Este é um espaço para compartilhar mais sobre o negócio; equipe, missão e pontos fortes. É uma oportunidade de contar como ele surgiu ou descrever um serviço ou produto especial. Você pode usar esta seção para compartilhar a história do negócio ou destacar uma característica específica que o diferencia da concorrência. Escreva de maneira clara. Mantenha um tom e uma voz consistentes em todo o site para ser fiel à imagem da marca e transmitir aos visitantes os valores e a personalidade do negócio.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Números */}
      <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-24 rounded-t-[48px] -mt-8 relative z-20">
        <div className="w-full flex flex-col gap-12">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-sans font-light tracking-tight">
              Números
            </h2>
          </div>
          <div className="w-full max-w-6xl mr-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
              {/* Card 1 */}
              <div className="col-span-12 md:col-span-7 bg-white text-black rounded-[48px] p-12 flex flex-col justify-end min-h-[400px]">
                <div className="text-5xl md:text-6xl lg:text-7xl font-sans font-light mb-4 tracking-tighter">
                  + R$ 100 M
                </div>
                <div className="text-sm font-alt font-light">
                  Receitas dos clientes no último trimestre
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-span-12 md:col-span-3 bg-white text-black rounded-[48px] p-12 flex flex-col justify-end min-h-[600px]">
                <div className="text-5xl md:text-6xl lg:text-7xl font-sans font-light mb-4 tracking-tighter">
                  5
                </div>
                <div className="text-sm font-alt font-light">
                  Prêmios da indústria
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="col-span-12 md:col-span-4 bg-white text-black rounded-[48px] p-12 flex flex-col justify-end min-h-[400px]">
                <div className="text-5xl md:text-6xl lg:text-7xl font-sans font-light mb-4 tracking-tighter">
                  155
                </div>
                <div className="text-sm font-alt font-light">
                  Membros da equipe global
                </div>
              </div>
              {/* Card 4 */}
              <div className="col-span-12 md:col-span-8 bg-white text-black rounded-[48px] p-12 flex flex-col justify-end min-h-[400px]">
                <div className="text-5xl md:text-6xl lg:text-7xl font-sans font-light mb-4 tracking-tighter">
                  25
                </div>
                <div className="text-sm font-alt font-light">
                  Escritórios pelo mundo
                </div>
              </div>
            </div>

            {/* Cyan Starburst Decoration */}
            <div className="hidden lg:block absolute right-0 translate-x-1/2 top-[250px] w-56 h-56 text-[#00c5e8]">
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-current animate-[spin_60s_linear_infinite]">
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
          </div>
        </div>
      </section>

      {/* 5. Destaques na mídia */}
      <section className="bg-[#f4f4f4] text-black pt-32 pb-40 px-6 md:px-12 rounded-t-[48px] -mt-8 relative z-30">
        <div className="max-w-[1500px] mx-auto flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight mb-20 text-center">
            Destaques na mídia
          </h2>
          
          <div className="w-full bg-[#00c5e8] rounded-[100px] py-16 px-8 md:py-24 md:px-24 flex flex-col md:flex-row items-center justify-around gap-16">
            {/* Logos textuais do print */}
            <div className="border-2 border-black rounded-xl px-10 py-4">
              <span className="font-sans font-bold text-4xl tracking-tighter">mtvs.news</span>
            </div>
            
            <div className="flex items-center">
              <span className="font-sans font-black text-6xl tracking-tighter">gaze</span>
              <span className="font-sans font-medium text-6xl italic">it</span>
            </div>
            
            <div className="flex items-center">
              <span className="font-sans font-bold text-5xl tracking-tight">prom</span>
              <svg viewBox="0 0 24 24" className="w-10 h-10 mx-2 mt-1 text-black fill-current animate-[spin_10s_linear_infinite]"><circle cx="12" cy="12" r="5"/><path stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 19l2 2M19 5l-2 2M5 19l2-2"/></svg>
              <span className="font-sans font-bold text-5xl tracking-tight">rning</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
