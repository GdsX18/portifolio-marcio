"use strict";

"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { OriginButton } from "@/components/ui/origin-button";
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
  {
    author: "Cliente: Nome (Cópia)",
    text: "Explique o que torna o negócio único. Identifique as qualidades que o diferenciam dos concorrentes e descreva-as com a voz autêntica da marca. Inclua detalhes envolventes para despertar e manter o interesse dos leitores.",
  },
  {
    author: "Ano: 2023 (Cópia)",
    text: "Explique o que torna o negócio único. Identifique as qualidades que o diferenciam dos concorrentes e descreva-as com a voz autêntica da marca. Inclua detalhes envolventes para despertar e manter o interesse dos leitores.",
  },
  {
    author: "Indústria: Finanças (Cópia)",
    text: "Explique o que torna o negócio único. Identifique as qualidades que o diferenciam dos concorrentes e descreva-as com a voz autêntica da marca. Inclua detalhes envolventes para despertar e manter o interesse dos leitores.",
  },
];

export default function SolucoesScrollShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);
  const slide4Ref = useRef<HTMLDivElement>(null);
  const testCardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const s2 = slide2Ref.current;
      const s3 = slide3Ref.current;
      const s4 = slide4Ref.current;
      const testCards = testCardsRef.current;

      if (!s2 || !s3 || !s4) return;

      // Estado inicial dos slides que sobem: abaixo e transparentes
      gsap.set([s2, s3, s4], { yPercent: 100, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%", // Muito mais curto, exigindo muito menos rolagem para sair
          pin: true,
          scrub: 0.5,  // Scrub mais responsivo e rápido
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Slide 2 (Execução) sobe
      tl.to(s2, { yPercent: 0, opacity: 1, duration: 0.8, ease: "none" });
      tl.to({}, { duration: 0.1 });

      // Slide 3 (Consultoria de Dados) sobe
      tl.to(s3, { yPercent: 0, opacity: 1, duration: 0.8, ease: "none" });
      tl.to({}, { duration: 0.1 });

      // Slide 4 (Depoimentos) sobe
      tl.to(s4, { yPercent: 0, opacity: 1, duration: 0.8, ease: "none" });

      // Animação de scroll vertical dos depoimentos na direita
      if (testCards) {
        tl.to(testCards, {
          y: () => -(testCards.scrollHeight - (window.innerHeight * 0.7)),
          duration: 1.5,
          ease: "none",
        });
      }
      tl.to({}, { duration: 0.2 });
    },
    { scope: sectionRef }
  );

  const slideBase =
    "absolute inset-0 w-full h-full rounded-t-[48px] overflow-hidden shadow-[0_-8px_40px_rgba(0,0,0,0.15)]";

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 1 (Base): Estratégia (Ciano + Rua)       */}
      {/* ═══════════════════════════════════════════════ */}
      <div className="absolute inset-0 w-full h-full grid grid-cols-1 lg:grid-cols-2 bg-white">
        {/* Esquerda: Conteúdo Estratégia */}
        <div className="bg-[#00c5e8] p-10 md:p-16 lg:p-24 flex flex-col justify-center text-black h-full">
          <div className="max-w-xl">
            {/* Ícone Sol / Estrela Wix */}
            <div className="w-16 h-16 text-black mb-6">
              <svg viewBox="19.997 20.004 160.004 160.003" className="w-full h-full fill-current">
                <path d="m95.142 20.004 2.07 23.374-4.46.395-2.07-23.374 4.46-.395z" />
                <path d="m107.247 156.238 2.07 23.374-4.46.395-2.07-23.374 4.46-.395z" />
                <path d="m179.606 90.69.395 4.46-23.375 2.07-.395-4.459 23.375-2.07z" />
                <path d="m43.371 102.794.395 4.46-23.374 2.07-.395-4.46 23.374-2.07z" />
                <path d="m149.703 37.123 3.433 2.873-15.06 17.995-3.433-2.872 15.06-17.996z" />
                <path d="m61.924 142.019 3.432 2.872-15.059 17.997-3.432-2.873 15.059-17.996z" />
                <path d="m144.88 134.645 17.997 15.059-2.872 3.433-17.997-15.06 2.872-3.432z" />
                <path d="m39.992 46.873 17.996 15.059-2.873 3.433-17.996-15.059 2.873-3.433z" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-black mb-6">
              Estratégia
            </h3>
            <p className="text-black/85 font-alt text-sm md:text-base font-light leading-relaxed mb-6">
              Este é o espaço para descrever o serviço. Destaque como os clientes podem se beneficiar ao usá-lo: explique como ele resolve um problema ou torna a vida mais fácil ou agradável.
            </p>
            <p className="text-black/75 font-alt text-sm md:text-base font-light leading-relaxed mb-8">
              Inclua todos os detalhes relevantes que os usuários desejam saber, como preço, duração e localização. Se eles precisarem preparar ou trazer alguma coisa, avise aqui.
            </p>
            <div>
              <OriginButton
                href="/contato"
                className="inline-block px-8 py-3 bg-black text-white hover:bg-black/80 rounded-full font-alt text-xs uppercase tracking-wider font-light transition-colors duration-300 h-auto"
                rippleBg="bg-white"
                hoverTextColor="!text-black"
              >
                Fale Conosco
              </OriginButton>
            </div>
          </div>
        </div>
        {/* Direita: Imagem Rua */}
        <div className="relative overflow-hidden h-full">
          <Image
            src="/rua1.avif"
            alt="Rua com trilhas de luzes à noite"
            fill
            className="object-cover grayscale contrast-110 brightness-95"
            priority
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 2: Execução (Elétrica/Guindaste + Branco) */}
      {/* ═══════════════════════════════════════════════ */}
      <div ref={slide2Ref} className={`${slideBase} z-10 bg-white`}>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
          {/* Esquerda: Imagem Guindaste */}
          <div className="relative overflow-hidden h-full">
            <Image
              src="/eletrica1.avif"
              alt="Construção civil / Rede elétrica"
              fill
              className="object-cover grayscale contrast-115 brightness-95"
            />
          </div>
          {/* Direita: Conteúdo Execução */}
          <div className="bg-white p-10 md:p-16 lg:p-24 flex flex-col justify-center text-black h-full">
            <div className="max-w-xl">
              {/* Ícone de 8 setas Wix */}
              <div className="w-16 h-16 text-black mb-6">
                <svg viewBox="20 20 160.001 160.001" className="w-full h-full fill-current">
                  <path d="m115.174 164.401-.032-1.126c-.166.005-4.102.14-8.082 2.243a16.186 16.186 0 0 0-2.742 1.82c-1.271 1.05-3.193.123-3.193-1.525v-41.366h-2.253v41.349c0 1.649-1.923 2.575-3.193 1.525a15.943 15.943 0 0 0-2.744-1.82c-3.981-2.097-7.918-2.221-8.084-2.225l-.06 2.252c.036.001 3.641.126 7.16 2.002 4.591 2.448 6.919 6.644 6.919 12.471h2.254c0-5.81 2.328-10 6.92-12.455 3.52-1.882 7.126-2.017 7.162-2.018l-.032-1.127z" />
                  <path d="m84.826 35.599.032 1.126c.166-.005 4.102-.14 8.082-.243a16.186 16.186 0 0 0 2.742-1.82c1.271-1.05 3.193-.123 3.193 1.525v41.366h2.253V34.205c0-1.649 1.923-2.575 3.193-1.525a15.943 15.943 0 0 0 2.744 1.82c3.981 2.097 7.918 2.221 8.084 2.225l.06-2.252c-.036-.001-3.641-.126-7.16-2.002-4.591-2.448-6.919-6.644-6.919-12.471h-2.254c0 5.81-2.328 10-6.92 12.455-3.52 1.882-7.126 2.017-7.162 2.018l.032 1.126z" />
                  <path d="m35.599 115.174 1.126-.032c-.005-.166-.14-4.102-2.243-8.082a16.186 16.186 0 0 0-1.82-2.742c-1.05-1.271-.123-3.193 1.525-3.193h41.366v-2.253H34.205c-1.649 0-2.575-1.923-1.525-3.193a15.943 15.943 0 0 0 1.82-2.744c2.097-3.981 2.221-7.918 2.225-8.084l-2.252-.06c-.001.036-.126 3.641-2.002 7.16C30.023 96.542 25.827 98.87 20 98.87v2.254c5.81 0 10 2.328 12.455 6.92 1.882 3.52 2.017 7.126 2.018 7.162l1.126-.032z" />
                  <path d="m164.401 84.826-1.126.032c.005.166.14 4.102 2.243 8.082.474.896 1.07 1.834 1.82 2.742 1.05 1.271.123 3.193-1.525 3.193h-41.366v2.253h41.349c1.649 0 2.575 1.923 1.525 3.193a15.943 15.943 0 0 0-1.82 2.744c-2.097 3.981-2.221 7.918-2.225 8.084l2.252.06c.001-.036.126-3.641 2.002-7.16 2.448-4.591 6.644-6.919 12.471-6.919v-2.254c-5.81 0-10-2.328-12.455-6.92-1.882-3.52-2.017-7.126-2.018-7.162l-1.127.032z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-black mb-6">
                Execução
              </h3>
              <p className="text-black/65 font-alt text-sm md:text-base font-light leading-relaxed mb-6">
                Este é o espaço para descrever o serviço. Destaque como os clientes podem se beneficiar ao usá-lo: explique como ele resolve um problema ou torna a vida mais fácil ou agradável.
              </p>
              <p className="text-black/55 font-alt text-sm md:text-base font-light leading-relaxed mb-8">
                Inclua todos os detalhes relevantes que os usuários desejam saber, como preço, duração e localização. Se eles precisarem preparar ou trazer alguma coisa, avise aqui.
              </p>
              <div>
                <OriginButton
                  href="/contato"
                  className="inline-block px-8 py-3 bg-black text-white hover:bg-black/80 rounded-full font-alt text-xs uppercase tracking-wider font-light transition-colors duration-300 border border-black/10 h-auto"
                  rippleBg="bg-white"
                  hoverTextColor="!text-black"
                >
                  Fale Conosco
                </OriginButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 3: Consultoria de Dados (Preto + Robô)   */}
      {/* ═══════════════════════════════════════════════ */}
      <div ref={slide3Ref} className={`${slideBase} z-20 bg-black`}>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
          {/* Esquerda: Conteúdo Consultoria */}
          <div className="bg-black p-10 md:p-16 lg:p-24 flex flex-col justify-center text-white h-full">
            <div className="max-w-xl">
              {/* Ícone linhas de dados Wix */}
              <div className="w-16 h-16 text-white mb-6">
                <svg viewBox="20 20 160 160" className="w-full h-full fill-current">
                  <path d="M92.56 20v54.764h-2.976V20h2.976z" />
                  <path d="M98.512 20v54.764h-2.976V20h2.976z" />
                  <path d="M104.464 20v54.764h-2.976V20h2.976z" />
                  <path d="M110.416 20v54.764h-2.976V20h2.976z" />
                  <path d="M92.56 125.236V180h-2.976v-54.764h2.976z" />
                  <path d="M98.512 125.236V180h-2.976v-54.764h2.976z" />
                  <path d="M104.464 125.236V180h-2.976v-54.764h2.976z" />
                  <path d="M110.416 125.236V180h-2.976v-54.764h2.976z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-white mb-6">
                Consultoria de dados
              </h3>
              <p className="text-white/75 font-alt text-sm md:text-base font-light leading-relaxed mb-6">
                Este é o espaço para descrever o serviço. Destaque como os clientes podem se beneficiar ao usá-lo: explique como ele resolve um problema ou torna a vida mais fácil ou agradável.
              </p>
              <p className="text-white/65 font-alt text-sm md:text-base font-light leading-relaxed mb-8">
                Inclua todos os detalhes relevantes que os usuários desejam saber, como preço, duração e localização. Se eles precisarem preparar ou trazer alguma coisa, avise aqui.
              </p>
              <div>
                <OriginButton
                  href="/contato"
                  className="inline-block px-8 py-3 bg-white text-black hover:bg-white/80 rounded-full font-alt text-xs uppercase tracking-wider font-light transition-colors duration-300 h-auto"
                  rippleBg="bg-black"
                  hoverTextColor="!text-white"
                >
                  Fale Conosco
                </OriginButton>
              </div>
            </div>
          </div>
          {/* Direita: Imagem Robô */}
          <div className="relative overflow-hidden h-full">
            <Image
              src="/robo1.avif"
              alt="Robô acenando"
              fill
              className="object-cover grayscale contrast-115 brightness-95"
            />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 4: Depoimentos (Texto na Esquerda, Cards na Direita) */}
      {/* ═══════════════════════════════════════════════ */}
      <div ref={slide4Ref} className={`${slideBase} z-30 bg-[#232322]`}>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 bg-[#232322]">
          {/* Esquerda: Texto de Depoimentos (PINNED no slide) */}
          <div className="lg:col-span-5 bg-[#232322] p-10 md:p-16 lg:p-24 flex flex-col justify-center text-white h-full border-r border-white/5">
            <div className="max-w-md">
              <h3 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-white mb-6">
                Depoimentos
              </h3>
              <p className="text-white/70 font-alt text-sm md:text-base font-light leading-relaxed mb-8">
                Este é um espaço para promover o negócio, seus produtos ou serviços. Aproveite esta oportunidade para ajudar os visitantes do site a se familiarizarem com o negócio e as ofertas.
              </p>
              <div className="text-xs text-white/40">
                Role para ver os depoimentos de nossos parceiros.
              </div>
            </div>
          </div>

          {/* Direita: Container de Rolagem dos Depoimentos (Rola no scroll) */}
          <div
            className="lg:col-span-7 h-full overflow-hidden flex flex-col items-center justify-start relative px-6 py-12 md:py-24 bg-[#1c1c1b]"
          >
            {/* O container interno contendo os cards que sobem no scroll */}
            <div
              ref={testCardsRef}
              className="flex flex-col gap-6 w-full max-w-xl"
            >
              {depoimentos.map((dep, index) => (
                <div
                  key={index}
                  className="bg-black border border-white/5 rounded-[32px] p-8 md:p-10 shadow-lg hover:border-cyan-brand/20 transition-all duration-300"
                >
                  <h4 className="text-base font-sans font-semibold tracking-wide text-cyan-brand mb-4">
                    {dep.author}
                  </h4>
                  <p className="text-white/80 font-alt text-sm font-light leading-relaxed">
                    {dep.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
