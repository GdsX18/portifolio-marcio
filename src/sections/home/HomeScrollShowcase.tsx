"use strict";

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { OriginButton } from "@/components/ui/origin-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeScrollShowcase() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);
  const slide4Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const s2 = slide2Ref.current;
      const s3 = slide3Ref.current;
      const s4 = slide4Ref.current;
      if (!s2 || !s3 || !s4) return;

      // Estado inicial: abaixo da tela + transparente
      gsap.set([s2, s3, s4], { yPercent: 100, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=300%",
          pin: pinRef.current,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // Slide 2 sobe + fade in (transparente → sólido)
      tl.to(s2, { yPercent: 0, opacity: 1, duration: 1, ease: "none" });
      tl.to({}, { duration: 0.3 });

      // Slide 3 sobe + fade in
      tl.to(s3, { yPercent: 0, opacity: 1, duration: 1, ease: "none" });
      tl.to({}, { duration: 0.3 });

      // Slide 4 sobe + fade in
      tl.to(s4, { yPercent: 0, opacity: 1, duration: 1, ease: "none" });
      tl.to({}, { duration: 0.2 });
    },
    { scope: triggerRef }
  );

  /* Classe base dos slides que sobem (cantos arredondados no topo + sombra premium) */
  const slideBase =
    "absolute inset-0 w-full h-full rounded-t-[40px] overflow-hidden shadow-[0_-8px_40px_rgba(0,0,0,0.15)]";

  return (
    <div ref={triggerRef} className="relative w-full">
      <section
        ref={pinRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {/* ═══════════════════════════════════════════════ */}
        {/* SLIDE 1 (Base): "Nossas soluções" + cidade     */}
        {/* ═══════════════════════════════════════════════ */}
        <div className="absolute inset-0 w-full h-full grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-black flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-20">
              <svg viewBox="0 0 200 200" className="w-72 h-72 md:w-96 md:h-96 text-white fill-current animate-[spin_45s_linear_infinite]">
                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                {Array.from({ length: 20 }).map((_, i) => (
                  <rect key={i} x="95" y="10" width="10" height="38" rx="3" fill="currentColor" transform={`rotate(${i * 18} 100 100)`} />
                ))}
              </svg>
            </div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-4xl font-sans font-light text-white tracking-tight leading-none">
                Nossas <br />soluções
              </h3>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <Image src="/cidade.avif" alt="Vista aérea de uma cidade" fill className="object-cover grayscale contrast-110 brightness-95" priority />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* SLIDE 2: "Estratégia" & "Execução"             */}
        {/* ═══════════════════════════════════════════════ */}
        <div ref={slide2Ref} className={`${slideBase} z-10`}>
          {/* Borda ciano no topo arredondado */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-cyan-brand rounded-t-[40px] z-10" />

          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
            {/* Card Estratégia */}
            <div className="bg-[#f2f2f2] flex flex-col items-center justify-center text-center px-8 md:px-12 lg:px-16 py-16">
              <div className="w-20 h-20 md:w-24 md:h-24 text-black mb-10">
                <svg viewBox="19.997 20.004 160.004 160.003" className="w-full h-full fill-current animate-[spin_30s_linear_infinite]">
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
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-normal tracking-tight text-black mb-8">Estratégia</h3>
              <p className="text-black/70 font-alt text-base md:text-lg lg:text-xl leading-relaxed max-w-md">
                Descreva o serviço e os benefícios dele para os clientes. Use este espaço para compartilhar detalhes como preço, duração e instruções de agendamento.
              </p>
            </div>

            {/* Divisória vertical central */}
            <div className="hidden md:block absolute top-[15%] bottom-[15%] left-1/2 w-px bg-black/10 z-10" />

            {/* Card Execução */}
            <div className="bg-[#ebebeb] flex flex-col items-center justify-center text-center px-8 md:px-12 lg:px-16 py-16">
              <div className="w-20 h-20 md:w-24 md:h-24 text-black mb-10">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="4" x2="12" y2="20" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="9,7 12,4 15,7" />
                  <polyline points="9,17 12,20 15,17" />
                  <polyline points="7,9 4,12 7,15" />
                  <polyline points="17,9 20,12 17,15" />
                  <circle cx="7" cy="7" r="0.8" className="fill-current" />
                  <circle cx="17" cy="7" r="0.8" className="fill-current" />
                  <circle cx="7" cy="17" r="0.8" className="fill-current" />
                  <circle cx="17" cy="17" r="0.8" className="fill-current" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-normal tracking-tight text-black mb-8">Execução</h3>
              <p className="text-black/70 font-alt text-base md:text-lg lg:text-xl leading-relaxed max-w-md">
                Descreva o serviço e os benefícios dele para os clientes. Use este espaço para compartilhar detalhes como preço, duração e instruções de agendamento.
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* SLIDE 3: pessoas 2.avif + Consultoria de dados */}
        {/* ═══════════════════════════════════════════════ */}
        <div ref={slide3Ref} className={`${slideBase} z-20`}>
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
            <div className="relative overflow-hidden">
              <Image src="/pessoas 2.avif" alt="Pessoas em uma rua movimentada" fill className="object-cover grayscale contrast-110 brightness-95" />
            </div>
            <div className="bg-black flex flex-col items-center justify-center px-10 md:px-16 lg:px-20 xl:px-28">
              <div className="w-10 h-10 md:w-14 md:h-14 text-white mb-8">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="5" y1="5" x2="8" y2="8" />
                  <line x1="16" y1="16" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="16" y2="8" />
                  <line x1="8" y1="16" x2="5" y2="19" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-sans font-semibold text-white tracking-tight text-center mb-6">
                Consultoria de dados
              </h3>
              <p className="text-white/60 font-alt text-sm md:text-base text-center max-w-md leading-relaxed mb-10">
                Descreva o serviço e os benefícios dele para os clientes. Use este espaço para compartilhar detalhes como preço, duração e instruções de agendamento.
              </p>
              <OriginButton href="/solucoes" className="px-8 py-3 bg-transparent border border-cyan-brand text-cyan-brand hover:bg-cyan-brand hover:text-black rounded-full font-alt text-xs uppercase tracking-wider font-light transition-all duration-300 h-auto" rippleBg="bg-white" hoverTextColor="!text-black">
                Confira nossas soluções
              </OriginButton>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* SLIDE 4: Depoimentos                           */}
        {/* ═══════════════════════════════════════════════ */}
        <div ref={slide4Ref} className={`${slideBase} z-30 bg-[#1a1a2e]`}>
          <div className="w-full h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <div className="mb-12 md:mb-16 max-w-md">
                <h2 className="text-3xl md:text-4xl font-sans font-normal tracking-tight text-white mb-4 leading-tight">
                  O que os clientes têm a dizer
                </h2>
                <p className="text-white/50 font-alt text-sm md:text-base font-light italic leading-relaxed">
                  Confira algumas mensagens aqui ou na seção Depoimentos.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  { name: "Rodrigo Moraes, CEO", company: "Natio Produções" },
                  { name: "Carlos Nogueira", company: "Seven Iluminações" },
                  { name: "Maria Gonçalves, CFO", company: "Laderate" },
                ].map((t, idx) => (
                  <div key={idx} className="bg-black/60 backdrop-blur-sm rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[260px] border border-white/5">
                    <p className="text-white/70 font-alt text-sm md:text-base font-light leading-relaxed mb-8">
                      Use este espaço para compartilhar um depoimento sobre o negócio, produtos ou serviços. Inclua uma citação de um cliente para gerar confiança e conquistar os visitantes do site.
                    </p>
                    <div className="text-right">
                      <p className="text-white/90 font-alt text-sm font-normal italic">{t.name}</p>
                      <p className="text-white/50 font-alt text-xs font-light italic">{t.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
