"use strict";

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OriginButton } from "@/components/ui/origin-button";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MonogramN } from "@/components/common/MonogramN";

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

      // Estado inicial dos slides empilhados (abaixo da tela + transparente)
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

      // Slide 2 sobe com sincronização perfeita (ease: "none")
      tl.to(s2, { yPercent: 0, opacity: 1, duration: 1, ease: "none" });
      tl.to({}, { duration: 0.3 });

      // Slide 3 sobe com sincronização perfeita
      tl.to(s3, { yPercent: 0, opacity: 1, duration: 1, ease: "none" });
      tl.to({}, { duration: 0.3 });

      // Slide 4 sobe com sincronização perfeita
      tl.to(s4, { yPercent: 0, opacity: 1, duration: 1, ease: "none" });
      tl.to({}, { duration: 0.2 });
    },
    { scope: triggerRef }
  );

  const slideBase =
    "absolute inset-0 w-full h-full rounded-t-[40px] overflow-hidden shadow-[0_-12px_48px_rgba(0,0,0,0.25)]";

  return (
    <div ref={triggerRef} className="relative w-full my-12">
      <section
        ref={pinRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {/* ═══════════════════════════════════════════════ */}
        {/* SLIDE 1 (Base): Projeto Destaque "27 de Setembro" */}
        {/* ═══════════════════════════════════════════════ */}
        <div className="absolute inset-0 w-full h-full grid grid-cols-1 lg:grid-cols-2 bg-[#0d0f12] text-white">
          <div className="flex flex-col justify-between p-10 md:p-16 lg:p-20 relative z-10">
            <div>
              <div className="flex items-center gap-3 text-cyan-brand font-alt text-xs uppercase tracking-widest font-semibold mb-4">
                <MonogramN className="w-5 h-5 text-cyan-brand" />
                <span>Projeto em Destaque &bull; Identidade de Marca</span>
              </div>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-white mb-6 uppercase leading-none">
                27 DE SETEMBRO
              </h3>
              <p className="text-white/80 font-alt text-base md:text-lg font-light leading-relaxed max-w-lg mb-8">
                Distribuidora de Peças Automotivas. Desenvolvimento de manual de identidade visual, sinalização de frota e catálogo 3D de alta precisão.
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <span className="px-4 py-1.5 bg-[#0037F6] text-white text-xs font-alt font-medium rounded-full">
                  Identidade Visual
                </span>
                <span className="px-4 py-1.5 bg-white/10 text-white/90 text-xs font-alt font-light rounded-full border border-white/15">
                  Catálogo Físico 3D
                </span>
                <span className="px-4 py-1.5 bg-white/10 text-white/90 text-xs font-alt font-light rounded-full border border-white/15">
                  Sinalização de Frota
                </span>
              </div>
            </div>

            {/* CTA Button linking directly to Project 1 on Portfolio Page */}
            <OriginButton
              href="/portfolio?project=1"
              className="self-start px-8 py-3.5 bg-cyan-brand text-black hover:bg-white hover:text-black rounded-full font-alt text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-lg h-auto flex items-center gap-2"
              rippleBg="bg-white"
              hoverTextColor="!text-black"
            >
              <span>Ver Projeto 27 de Setembro no Portfólio</span>
              <ArrowUpRight className="w-4 h-4" />
            </OriginButton>
          </div>

          {/* Imagem em CORES VIBRANTES do Projeto (sem grayscale) */}
          <div className="relative overflow-hidden min-h-[320px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/10">
            <Image
              src="/Portifolio 1.jpeg"
              alt="27 de Setembro - Projeto em Cores Reais"
              fill
              className="object-cover object-left hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* SLIDE 2: Destaques "Natio Produções" e "Seven"  */}
        {/* ═══════════════════════════════════════════════ */}
        <div ref={slide2Ref} className={`${slideBase} z-10 bg-[#f8f9fa]`}>
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-cyan-brand rounded-t-[40px] z-10" />

          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
            {/* Card Natio Produções */}
            <div className="flex flex-col justify-between p-10 md:p-14 lg:p-16 border-b md:border-b-0 md:border-r border-black/10">
              <div>
                <div className="flex items-center gap-2 text-black/50 text-xs font-alt uppercase tracking-wider mb-4">
                  <MonogramN className="w-5 h-5 text-[#0037F6]" />
                  <span>Projeto 02 &bull; Editorial &amp; Branding</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-black mb-6">
                  Natio Produções
                </h3>
                <p className="text-black/70 font-alt text-base md:text-lg leading-relaxed max-w-md mb-8 font-light">
                  Reformulação de posicionamento de marca e identidade gráfica para grandes produções culturais e eventos corporativos de grande porte.
                </p>
              </div>

              <OriginButton
                href="/portfolio?project=2"
                className="self-start px-7 py-3 bg-black text-white hover:bg-cyan-brand hover:text-black rounded-full font-alt text-xs uppercase tracking-wider font-light transition-all duration-300 h-auto flex items-center gap-2"
                rippleBg="bg-cyan-brand"
                hoverTextColor="!text-black"
              >
                <span>Ver Natio no Portfólio</span>
                <ArrowUpRight className="w-4 h-4" />
              </OriginButton>
            </div>

            {/* Card Seven Iluminações */}
            <div className="flex flex-col justify-between p-10 md:p-14 lg:p-16 bg-[#f1f3f5]">
              <div>
                <div className="flex items-center gap-2 text-black/50 text-xs font-alt uppercase tracking-wider mb-4">
                  <MonogramN className="w-5 h-5 text-black" />
                  <span>Projeto 03 &bull; Embalagens &amp; Varejo</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-black mb-6">
                  Seven Iluminações
                </h3>
                <p className="text-black/70 font-alt text-base md:text-lg leading-relaxed max-w-md mb-8 font-light">
                  Comunicação para pontos de venda e design de embalagens exclusivas focadas em elevado apelo visual de faturamento no varejo.
                </p>
              </div>

              <OriginButton
                href="/portfolio?project=3"
                className="self-start px-7 py-3 bg-black text-white hover:bg-cyan-brand hover:text-black rounded-full font-alt text-xs uppercase tracking-wider font-light transition-all duration-300 h-auto flex items-center gap-2"
                rippleBg="bg-cyan-brand"
                hoverTextColor="!text-black"
              >
                <span>Ver Seven no Portfólio</span>
                <ArrowUpRight className="w-4 h-4" />
              </OriginButton>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* SLIDE 3: Estratégias & Experiências (Cores Reais) */}
        {/* ═══════════════════════════════════════════════ */}
        <div ref={slide3Ref} className={`${slideBase} z-20`}>
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
            {/* Imagem em Cores Reais */}
            <div className="relative overflow-hidden min-h-[250px] lg:min-h-full">
              <Image
                src="/pessoas 2.avif"
                alt="Equipe Studio Neves em ação"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="bg-black flex flex-col justify-between p-10 md:p-16 lg:p-20 text-white">
              <div>
                <MonogramN className="w-12 h-12 text-cyan-brand mb-8" />
                <h3 className="text-3xl md:text-5xl font-sans font-semibold text-white tracking-tight leading-tight mb-6">
                  Comunicação Visual &amp; Consultoria de Marca
                </h3>
                <p className="text-white/80 font-alt text-base md:text-lg leading-relaxed max-w-md mb-8 font-light">
                  Transformamos a comunicação da sua empresa com design estratégico, materiais gráficos de alta precisão e experiências marcantes.
                </p>
              </div>

              <OriginButton
                href="/portfolio"
                className="self-start px-8 py-3.5 bg-transparent border border-cyan-brand text-cyan-brand hover:bg-cyan-brand hover:text-black rounded-full font-alt text-xs uppercase tracking-wider font-light transition-all duration-300 h-auto flex items-center gap-2"
                rippleBg="bg-white"
                hoverTextColor="!text-black"
              >
                <span>Explorar Todos os Projetos no Portfólio</span>
                <ChevronRight className="w-4 h-4" />
              </OriginButton>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* SLIDE 4: Depoimentos                            */}
        {/* ═══════════════════════════════════════════════ */}
        <div ref={slide4Ref} className={`${slideBase} z-30 bg-[#161824]`}>
          <div className="w-full h-full flex items-center py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                  <div className="flex items-center gap-2 text-cyan-brand font-alt text-xs uppercase tracking-wider mb-2">
                    <MonogramN className="w-5 h-5 text-cyan-brand" />
                    <span>Depoimentos &bull; Studio Neves</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-sans font-normal tracking-tight text-white leading-tight">
                    O que os clientes têm a dizer
                  </h2>
                </div>

                <OriginButton
                  href="/portfolio"
                  className="px-6 py-2.5 bg-cyan-brand text-black hover:bg-white rounded-full font-alt text-xs uppercase tracking-wider font-semibold transition-all duration-300 h-auto"
                  rippleBg="bg-white"
                  hoverTextColor="!text-black"
                >
                  Ver Portfólio Completo
                </OriginButton>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Rodrigo Moraes", role: "CEO", company: "Natio Produções", projId: 2 },
                  { name: "Carlos Nogueira", role: "Diretor", company: "Seven Iluminações", projId: 3 },
                  { name: "Maria Gonçalves", role: "CFO", company: "Laderate", projId: 4 },
                ].map((t, idx) => (
                  <div
                    key={idx}
                    className="bg-black/50 backdrop-blur-md rounded-[24px] p-8 flex flex-col justify-between border border-white/10 hover:border-cyan-brand/50 transition-all duration-300 shadow-md"
                  >
                    <p className="text-white/80 font-alt text-sm font-light leading-relaxed mb-6 italic">
                      &ldquo;O Studio Neves elevou nossa marca a um nível corporativo impecável. A precisão gráfica e comunicação visual foram fundamentais.&rdquo;
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <p className="text-white font-alt text-sm font-medium">{t.name}</p>
                        <p className="text-cyan-brand font-alt text-xs font-light">{t.role} &bull; {t.company}</p>
                      </div>
                      <Link
                        href={`/portfolio?project=${t.projId}`}
                        className="text-white/60 hover:text-cyan-brand text-xs font-alt flex items-center gap-1 transition-colors"
                      >
                        <span>Projeto</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
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
