"use strict";

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OriginButton } from "@/components/ui/origin-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Imagem local de pessoas na calçada na pasta public
const imgPessoasUrl = "/pessoas 1.avif";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgCardRef = useRef<HTMLDivElement>(null);
  const textCardRef = useRef<HTMLDivElement>(null);
  const sunCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Animação de entrada (Fade-in + Slide Up) para os cards ao entrar na tela
    const cards = [imgCardRef.current, textCardRef.current, sunCardRef.current];
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // 2. Parallax de Rolagem (Efeito de flutuação suave e separação tridimensional)
    // A imagem da esquerda sobe ligeiramente mais rápido ao rolar
    gsap.fromTo(
      imgCardRef.current,
      { y: 30 },
      {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      }
    );

    // O sol da direita desce ligeiramente ao rolar, criando o efeito de cisalhamento
    gsap.fromTo(
      sunCardRef.current,
      { y: -30 },
      {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section className="bg-transparent pt-0 pb-12 md:pb-16 text-black overflow-hidden w-full">
      <div className="w-full">
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center px-0 w-full"
        >
          {/* Card 1: Imagem Horizontal de Pessoas (Esquerda - Colada na Borda) */}
          <div
            ref={imgCardRef}
            className="lg:col-span-3 rounded-r-[32px] rounded-l-none overflow-hidden aspect-[4/3] md:aspect-[3/2] relative border-y border-r border-black/5 shadow-sm opacity-0 w-full"
          >
            <Image
              src={imgPessoasUrl}
              alt="Pessoas na rua"
              fill
              className="object-cover grayscale contrast-110 brightness-100"
            />
          </div>

          {/* Card 2: Produção Gráfica (Centro - Largo - Margens do grid) */}
          <div
            ref={textCardRef}
            className="lg:col-span-6 bg-black rounded-[32px] p-8 md:p-12 flex flex-col justify-between min-h-[360px] text-white shadow-md opacity-0 mx-6 lg:mx-0"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-cyan-brand mb-6">
                Produção Gráfica
              </h3>
              <ul className="space-y-3 text-xs md:text-sm font-alt font-light text-cyan-brand/90 list-disc pl-5">
                <li>Impressões de alta qualidade para qualquer necessidade.</li>
                <li>Materiais personalizados que traduzem sua identidade.</li>
                <li>Do digital ao físico, sua marca sempre com excelência.</li>
              </ul>
            </div>

            <OriginButton
              href="/contato"
              className="mt-8 self-start px-6 py-2.5 bg-transparent border border-cyan-brand text-cyan-brand hover:bg-cyan-brand hover:text-black rounded-full font-alt text-xs uppercase tracking-wider font-light transition-all duration-300 h-auto"
              rippleBg="bg-white"
              hoverTextColor="!text-black"
            >
              Fale com a gente.
            </OriginButton>
          </div>

          {/* Card 3: Sol Gigante (Direita - Colado na Borda) */}
          <div
            ref={sunCardRef}
            className="lg:col-span-3 bg-cyan-brand rounded-l-[32px] rounded-r-none p-8 aspect-square flex items-center justify-center border-y border-l border-black/5 shadow-sm opacity-0 w-full"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 text-black">
              {/* Ícone Sol / Estrela original do Wix */}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
