"use strict";

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import imgExecucao from "@/assets/solucoes/servico_execucao.png";
import imgDados from "@/assets/solucoes/servico_dados.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Cidade à noite de Adrian Schwarz (original do Wix)
const imgCidadeUrl = "https://static.wixstatic.com/media/c837a6_200cfd06635a4e30b1183c0bbbdee565~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85/adrian-schwarz-XS7q-baZrmE-unsplash.jpg";

export default function GridServicos() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".service-card");
      
      cards.forEach((card) => {
        const textCol = card.querySelector(".text-col");
        const imgCol = card.querySelector(".img-col");

        // Animação de revelação de cortina / slide
        gsap.fromTo(
          textCol,
          { x: (index) => (card.classList.contains("dir-left") ? -50 : 50), opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          imgCol,
          { scale: 1.05, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, { scope: containerRef });

  return (
    <section className="bg-[#f4f4f4] py-24 md:py-32 relative overflow-hidden text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Indústrias Subtitle Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-sans font-light tracking-tight text-black mb-6">
            Indústrias
          </h2>
        </div>

        {/* Serviços Grid Stack */}
        <div ref={containerRef} className="space-y-16 md:space-y-24">
          
          {/* Card 1: Estratégia */}
          <div className="service-card dir-left grid grid-cols-1 lg:grid-cols-2 rounded-[32px] overflow-hidden border border-black/5 bg-white min-h-[500px]">
            {/* Coluna Texto (Ciano) */}
            <div className="text-col bg-cyan-brand p-10 md:p-16 flex flex-col justify-between text-black">
              {/* Ícone Sol / Estrela original do Wix */}
              <div className="w-16 h-16 text-black mb-12">
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
                  <path d="M102.238 43.349v23.17h-4.476v-23.17h4.476z"/>
                  <path d="M102.238 133.481v23.17h-4.476v-23.17h4.476z"/>
                  <path d="M156.651 97.762v4.477h-23.17v-4.477h23.17z"/>
                  <path d="M66.519 97.762v4.477h-23.17v-4.477h23.17z"/>
                  <path d="m138.474 58.36 3.166 3.166-16.383 16.383-3.166-3.166 16.383-16.383z"/>
                  <path d="m74.74 122.091 3.166 3.166-16.382 16.383-3.166-3.165 16.382-16.384z"/>
                  <path d="m125.255 122.09 16.383 16.383-3.165 3.166-16.383-16.383 3.165-3.166z"/>
                  <path d="m61.524 58.36 16.383 16.382-3.166 3.166-16.383-16.383 3.166-3.166z"/>
                  <path d="m119.907 46.898 4.126 1.736-8.985 21.363-4.126-1.735 8.985-21.364z"/>
                  <path d="m84.952 130.008 4.126 1.735-8.983 21.364-4.127-1.735 8.984-21.364z"/>
                  <path d="m131.745 110.925 21.363 8.985-1.735 4.127-21.364-8.985 1.736-4.127z"/>
                  <path d="m48.636 75.973 21.363 8.985-1.736 4.127L46.9 80.1l1.736-4.127z"/>
                  <path d="m151.622 76.531 1.691 4.145-21.46 8.755-1.691-4.146 21.46-8.754z"/>
                  <path d="m68.142 110.58 1.691 4.145-21.46 8.754-1.69-4.145 21.46-8.754z"/>
                  <path d="m114.721 130.162 8.754 21.46-4.145 1.69-8.753-21.46 4.144-1.69z"/>
                  <path d="m80.67 46.685 8.783 21.53-4.145 1.69-8.782-21.53 4.144-1.69z"/>
                  <path d="m97.623 66.529 3.317 23.948-4.433.614-3.317-23.948 4.433-.614z"/>
                  <path d="m103.494 108.909 3.317 23.948-4.434.614-3.317-23.948 4.434-.614z"/>
                  <path d="m132.858 93.185.615 4.435-23.948 3.32-.615-4.435 23.948-3.32z"/>
                  <path d="m90.479 99.057.614 4.434-23.948 3.32-.614-4.435 23.948-3.32z"/>
                  <path d="m118.416 71.951 3.57 2.701-14.59 19.28-3.568-2.701 14.588-19.28z"/>
                  <path d="m92.6 106.068 3.568 2.701-14.588 19.28-3.57-2.701 14.59-19.28z"/>
                  <path d="m108.77 103.837 19.28 14.589-2.702 3.57-19.28-14.59 2.702-3.57z"/>
                  <path d="m74.651 78.02 19.28 14.588-2.702 3.57L71.95 81.59l2.702-3.57z"/>
                  <path d="m106.462 67.062 4.326 1.153-6.227 23.369-4.326-1.153 6.227-23.37z"/>
                  <path d="m95.444 108.412 4.326 1.153-6.228 23.37-4.326-1.153 6.228-23.37z"/>
                  <path d="m109.568 100.228 23.37 6.228-1.154 4.326-23.37-6.228 1.154-4.326z"/>
                  <path d="m68.218 89.21 23.369 6.228-1.153 4.326-23.37-6.228 1.154-4.326z"/>
                  <path d="m127.86 81.285 2.243 3.874-20.93 12.118-2.243-3.873 20.93-12.119z"/>
                  <path d="m90.827 102.731 2.243 3.874-20.93 12.118-2.242-3.873 20.93-12.119z"/>
                  <path d="m106.603 106.925 12.12 20.928-3.874 2.244-12.12-20.929 3.874-2.243z"/>
                  <path d="m85.193 69.96 12.083 20.864-3.874 2.243-12.083-20.863 3.874-2.243z"/>
                </svg>
              </div>

              <div>
                <h3 className="text-3xl font-sans font-light tracking-wide text-black mb-6">
                  Estratégia
                </h3>
                <p className="text-black/80 font-alt text-sm font-light leading-relaxed mb-6">
                  Este é o espaço para descrever o serviço. Destaque como os clientes podem se beneficiar ao usá-lo: explique como ele resolve um problema ou torna a vida mais fácil ou agradável.
                </p>
                <p className="text-black/80 font-alt text-sm font-light leading-relaxed">
                  Inclua todos os detalhes relevantes que os usuários desejam saber, como preço, duração e localização. Se eles precisarem preparar ou trazer alguma coisa, avise aqui. Dê uma ideia do que esperar do serviço e informe como agendá-lo.
                </p>
              </div>
            </div>

            {/* Coluna Imagem (Cidade grayscale) */}
            <div className="img-col relative aspect-[4/3] lg:aspect-auto h-full overflow-hidden">
              <Image
                src={imgCidadeUrl}
                alt="Estratégia"
                fill
                unoptimized
                className="object-cover grayscale contrast-110 brightness-100"
              />
            </div>
          </div>

          {/* Card 2: Execução */}
          <div className="service-card dir-right grid grid-cols-1 lg:grid-cols-2 rounded-[32px] overflow-hidden border border-black/5 bg-white min-h-[500px]">
            {/* Coluna Imagem (Guindaste grayscale) */}
            <div className="img-col relative aspect-[4/3] lg:aspect-auto h-full overflow-hidden">
              <Image
                src={imgExecucao}
                alt="Execução"
                fill
                className="object-cover grayscale contrast-115 brightness-95"
              />
            </div>

            {/* Coluna Texto (Branco) */}
            <div className="text-col bg-white p-10 md:p-16 flex flex-col justify-between text-black border-l border-black/5">
              {/* Ícone de 8 setas original do Wix */}
              <div className="w-16 h-16 text-black mb-12">
                <svg viewBox="20 20 160.001 160.001" className="w-full h-full fill-current">
                  <path d="m115.174 164.401-.032-1.126c-.166.005-4.102.14-8.082 2.243a16.186 16.186 0 0 0-2.742 1.82c-1.271 1.05-3.193.123-3.193-1.525v-41.366h-2.253v41.349c0 1.649-1.923 2.575-3.193 1.525a15.943 15.943 0 0 0-2.744-1.82c-3.981-2.097-7.918-2.221-8.084-2.225l-.06 2.252c.036.001 3.641.126 7.16 2.002 4.591 2.448 6.919 6.644 6.919 12.471h2.254c0-5.81 2.328-10 6.92-12.455 3.52-1.882 7.126-2.017 7.162-2.018l-.032-1.127z"/>
                  <path d="m84.826 35.599.032 1.126c.166-.005 4.102-.14 8.082-.243a16.186 16.186 0 0 0 2.742-1.82c1.271-1.05 3.193-.123 3.193 1.525v41.366h2.253V34.205c0-1.649 1.923-2.575 3.193-1.525a15.943 15.943 0 0 0 2.744 1.82c3.981 2.097 7.918 2.221 8.084 2.225l.06-2.252c-.036-.001-3.641-.126-7.16-2.002-4.591-2.448-6.919-6.644-6.919-12.471h-2.254c0 5.81-2.328 10-6.92 12.455-3.52 1.882-7.126 2.017-7.162 2.018l.032 1.126z"/>
                  <path d="m35.599 115.174 1.126-.032c-.005-.166-.14-4.102-2.243-8.082a16.186 16.186 0 0 0-1.82-2.742c-1.05-1.271-.123-3.193 1.525-3.193h41.366v-2.253H34.205c-1.649 0-2.575-1.923-1.525-3.193a15.943 15.943 0 0 0 1.82-2.744c2.097-3.981 2.221-7.918 2.225-8.084l-2.252-.06c-.001.036-.126 3.641-2.002 7.16C30.023 96.542 25.827 98.87 20 98.87v2.254c5.81 0 10 2.328 12.455 6.92 1.882 3.52 2.017 7.126 2.018 7.162l1.126-.032z"/>
                  <path d="m164.401 84.826-1.126.032c.005.166.14 4.102 2.243 8.082.474.896 1.07 1.834 1.82 2.742 1.05 1.271.123 3.193-1.525 3.193h-41.366v2.253h41.349c1.649 0 2.575 1.923 1.525 3.193a15.943 15.943 0 0 0-1.82 2.744c-2.097 3.981-2.221 7.918-2.225 8.084l2.252.06c.001-.036.126-3.641 2.002-7.16 2.448-4.591 6.644-6.919 12.471-6.919v-2.254c-5.81 0-10-2.328-12.455-6.92-1.882-3.52-2.017-7.126-2.018-7.162l-1.127.032z"/>
                  <path d="m65.191 156.268.773-.819c-.12-.114-2.999-2.801-7.3-4.129a16.175 16.175 0 0 0-3.226-.652c-1.641-.156-2.345-2.171-1.179-3.336l29.25-29.25-1.593-1.593-29.238 29.238c-1.166 1.166-3.18.462-3.336-1.18a16.03 16.03 0 0 0-.653-3.227c-1.332-4.298-4.029-7.169-4.143-7.289l-1.635 1.55c.025.026 2.486 2.663 3.648 6.479 1.516 4.977.195 9.59-3.926 13.711l.001.001 1.592 1.592.001.001c4.108-4.108 8.717-5.425 13.701-3.914 3.82 1.159 6.465 3.613 6.491 3.637l.772-.82z"/>
                  <path d="m134.809 43.732-.773.819c.12.114 2.999 2.801 7.3 4.129.969.299 2.054.54 3.226.652 1.641.156 2.345 2.171 1.179 3.336l-29.25 29.25 1.593 1.593 29.238-29.238c1.166-1.166 3.18-.462 3.336 1.18a16.03 16.03 0 0 0 .653 3.227c1.332 4.298 4.029 7.169 4.143 7.289l1.635-1.55c-.025-.026-2.486-2.663-3.648-6.478-1.516-4.977-.195-9.59 3.926-13.711l-.001-.001-1.592-1.592-.001-.001c-4.108 4.108-8.717 5.425-13.701 3.914-3.82-1.159-6.465-3.613-6.491-3.637l-.772.819z"/>
                  <path d="m43.732 65.191.819.773c.114-.12 2.801-2.999 4.129-7.3.299-.969.54-2.054.652-3.226.156-1.641 2.171-2.345 3.336-1.179l29.25 29.25 1.593-1.593-29.238-29.238c-1.166-1.166-.462-3.18 1.18-3.336a16.03 16.03 0 0 0 3.227-.653c4.298-1.332 7.169-4.029 7.289-4.143l-1.55-1.635c-.026.025-2.663 2.486-6.478 3.648-4.977 1.516-9.59.195-13.711-3.926l-.001.001-1.592 1.592-.001.001c4.108 4.108 5.425 8.717 3.914 13.701-1.159 3.82-3.613 6.465-3.637 6.491l.819.772z"/>
                  <path d="m156.268 134.809-.819-.773c-.114.12-2.801 2.999-4.129 7.3-.299.969-.54 2.054-.652 3.226-.156 1.641-2.171 2.345-3.336 1.179l-29.25-29.25-1.593 1.593 29.238 29.238c1.166 1.166.462 3.18-1.18 3.336a16.03 16.03 0 0 0-3.227.653c-4.298 1.332-7.169 4.029-7.289 4.143l1.55 1.635c.026-.025 2.663-2.486 6.479-3.648 4.977-1.516 9.59-.195 13.711 3.926l.001-.001 1.592-1.592.001-.001c-4.108-4.108-5.425-8.717-3.914-13.701 1.159-3.82 3.613-6.465 3.637-6.491l-.82-.772z"/>
                </svg>
              </div>

              <div>
                <h3 className="text-3xl font-sans font-light tracking-wide text-black mb-6">
                  Execução
                </h3>
                <p className="text-black/80 font-alt text-sm font-light leading-relaxed mb-6">
                  Este é o espaço para descrever o serviço. Destaque como os clientes podem se beneficiar ao usá-lo: explique como ele resolve um problema ou torna a vida mais fácil ou agradável.
                </p>
                <p className="text-black/80 font-alt text-sm font-light leading-relaxed">
                  Inclua todos os detalhes relevantes que os usuários desejam saber, como preço, duração e localização. Se eles precisarem preparar ou trazer alguma coisa, avise aqui. Dê uma ideia do que esperar do serviço e informe como agendá-lo.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Consultoria de dados */}
          <div className="service-card dir-left grid grid-cols-1 lg:grid-cols-2 rounded-[32px] overflow-hidden border border-black/5 bg-white min-h-[500px]">
            {/* Coluna Texto (Ciano) */}
            <div className="text-col bg-cyan-brand p-10 md:p-16 flex flex-col justify-between text-black">
              {/* Ícone de dados original do Wix */}
              <div className="w-16 h-16 text-black mb-12">
                <svg viewBox="20 20 160 160" className="w-full h-full fill-current">
                  <path d="M92.56 20v54.764h-2.976V20h2.976z"/>
                  <path d="M98.512 20v54.764h-2.976V20h2.976z"/>
                  <path d="M104.464 20v54.764h-2.976V20h2.976z"/>
                  <path d="M110.416 20v54.764h-2.976V20h2.976z"/>
                  <path d="M92.56 125.236V180h-2.976v-54.764h2.976z"/>
                  <path d="M98.512 125.236V180h-2.976v-54.764h2.976z"/>
                  <path d="M104.464 125.236V180h-2.976v-54.764h2.976z"/>
                  <path d="M110.416 125.236V180h-2.976v-54.764h2.976z"/>
                  <path d="M180 89.584v2.976h-54.764v-2.976H180z"/>
                  <path d="M180 95.536v2.976h-54.764v-2.976H180z"/>
                  <path d="M180 101.488v2.976h-54.764v-2.976H180z"/>
                  <path d="M180 107.44v2.976h-54.764v-2.976H180z"/>
                  <path d="M74.764 89.584v2.976H20v-2.976h54.764z"/>
                  <path d="M74.764 95.536v2.976H20v-2.976h54.764z"/>
                  <path d="M74.764 101.488v2.976H20v-2.976h54.764z"/>
                  <path d="M74.764 107.44v2.976H20v-2.976h54.764z"/>
                  <path d="m149.201 36.066 2.104 2.104-38.723 38.725-2.104-2.104 38.723-38.725z"/>
                  <path d="m153.41 40.275 2.104 2.104-38.723 38.725-2.104-2.104 38.723-38.725z"/>
                  <path d="m157.619 44.483 2.104 2.105-38.723 38.724-2.105-2.104 38.724-38.725z"/>
                  <path d="m161.828 48.693 2.104 2.104-38.723 38.725-2.104-2.104 38.723-38.725z"/>
                  <path d="m74.788 110.48 2.104 2.103-38.723 38.725-2.104-2.104 38.723-38.725z"/>
                  <path d="m78.997 114.687 2.105 2.104-38.723 38.725-2.105-2.104 38.723-38.725z"/>
                  <path d="M83.206 118.895 85.311 121l-38.724 38.724-2.104-2.104 38.723-38.725z"/>
                  <path d="m87.415 123.104 2.105 2.105-38.724 38.724-2.104-2.104 38.723-38.725z"/>
                  <path d="m125.207 110.48 38.725 38.723-2.104 2.104-38.725-38.723 2.104-2.105z"/>
                  <path d="m121 114.688 38.724 38.723-2.105 2.105-38.724-38.724 2.104-2.104z"/>
                  <path d="m116.791 118.897 38.725 38.723-2.105 2.104-38.724-38.723 2.104-2.104z"/>
                  <path d="m112.581 123.106 38.725 38.723-2.105 2.105-38.724-38.724 2.104-2.104z"/>
                  <path d="M50.796 36.066 89.52 74.789l-2.104 2.104-38.724-38.723 2.104-2.104z"/>
                  <path d="M46.587 40.275 85.31 78.998l-2.104 2.104-38.723-38.722 2.104-2.104z"/>
                  <path d="m42.378 44.484 38.725 38.724-2.105 2.104-38.724-38.723 2.104-2.105z"/>
                  <path d="m38.17 48.693 38.724 38.724-2.105 2.104-38.724-38.723 2.104-2.105z"/>
                </svg>
              </div>

              <div>
                <h3 className="text-3xl font-sans font-light tracking-wide text-black mb-6">
                  Consultoria de dados
                </h3>
                <p className="text-black/80 font-alt text-sm font-light leading-relaxed mb-6">
                  Este é o espaço para descrever o serviço. Destaque como os clientes podem se beneficiar ao usá-lo: explique como ele resolve um problema ou torna a vida mais fácil ou agradável.
                </p>
                <p className="text-black/80 font-alt text-sm font-light leading-relaxed">
                  Inclua todos os detalhes relevantes que os usuários desejam saber, como preço, duração e localização. Se eles precisarem preparar ou trazer alguma coisa, avise aqui. Dê uma ideia do que esperar do serviço e informe como agendá-lo.
                </p>
              </div>
            </div>

            {/* Coluna Imagem (Dados grayscale) */}
            <div className="img-col relative aspect-[4/3] lg:aspect-auto h-full overflow-hidden">
              <Image
                src={imgDados}
                alt="Consultoria de dados"
                fill
                className="object-cover grayscale contrast-115 brightness-95"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
