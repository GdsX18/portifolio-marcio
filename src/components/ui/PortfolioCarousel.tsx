"use strict";

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, Shield, Zap, Target, Cpu, CheckCircle2, Eye, X } from "lucide-react";
import { OriginButton } from "@/components/ui/origin-button";
import { MonogramN } from "@/components/common/MonogramN";

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  image?: string;
  isSpecialBrand27?: boolean;
  colors?: { name: string; hex: string; border?: boolean }[];
  tags?: string[];
}

// =========================================================================
// PORTFÓLIO DE PROJETOS DO STUDIO NEVES
// Para adicionar novos projetos no futuro, basta incluir novos objetos nesta lista!
//
// EXEMPLO PARA ADICIONAR NOVO PROJETO:
// {
//   id: 2,
//   title: "Nome do Novo Projeto",
//   category: "Identidade Visual & Branding",
//   client: "Nome do Cliente",
//   year: "2024",
//   description: "Descrição completa das soluções desenvolvidas...",
//   image: "/imagem-do-projeto.jpg",
//   colors: [
//     { name: "Nome da Cor", hex: "#000000" },
//     { name: "Outra Cor", hex: "#FFFFFF", border: true },
//   ],
//   tags: ["Branding", "Design", "Embalagens"],
// }
// =========================================================================

export const portfolioProjectsList: ProjectItem[] = [
  {
    id: 1,
    title: "27 de Setembro",
    category: "Identidade Visual & Material Gráfico",
    client: "Distribuidora de Peças Automotivas",
    year: "2024",
    description: "Desenvolvimento de identidade de marca de alta performance, manual de aplicação, catálogo físico 3D e sinalização de frota.",
    image: "/Portifolio 1.jpeg",
    isSpecialBrand27: true,
    colors: [
      { name: "Azul Rei", hex: "#0037F6" },
      { name: "Branco", hex: "#FFFFFF", border: true },
      { name: "Grafite", hex: "#282622" },
      { name: "Cinza", hex: "#666565" },
    ],
    tags: ["Branding", "Catálogo 3D", "Frota", "Sinalização", "Endomarketing"],
  },
];

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);
  const touchStartX = useRef<number | null>(null);

  const total = portfolioProjectsList.length;
  const currentProject = portfolioProjectsList[currentIndex] || portfolioProjectsList[0];

  const nextSlide = () => {
    if (isAnimating || total <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % total);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const prevSlide = () => {
    if (isAnimating || total <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const goToSlide = (idx: number) => {
    if (isAnimating || idx === currentIndex || total <= 1) return;
    setIsAnimating(true);
    setCurrentIndex(idx);
    setTimeout(() => setIsAnimating(false), 400);
  };

  // Keyboard navigation & Escape key for Modal Lightbox
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const projId = params.get("project") || params.get("id");
      if (projId) {
        const parsedId = parseInt(projId, 10);
        const foundIdx = portfolioProjectsList.findIndex((p) => p.id === parsedId);
        if (foundIdx !== -1) {
          setCurrentIndex(foundIdx);
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalImage(null);
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total]);

  // Touch Swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (diffX > 50) nextSlide();
    if (diffX < -50) prevSlide();
    touchStartX.current = null;
  };

  return (
    <div className="w-full text-black">
      {/* ── Header Controls & Title ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12 px-2">
        <div>
          <div className="flex items-center gap-3 text-cyan-brand font-alt text-xs uppercase tracking-widest font-semibold mb-2">
            <MonogramN className="w-5 h-5 text-cyan-brand" />
            <span>Portfólio Studio Neves &bull; Carrossel de Projetos</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-light tracking-tight text-black">
            Nossos Trabalhos Em Destaque
          </h2>
        </div>

        {/* Carousel Navigation Buttons & Counter */}
        <div className="flex items-center gap-4 self-start md:self-end">
          <span className="font-alt text-sm md:text-base font-light text-black/60 tracking-wider mr-2">
            <strong className="text-black font-semibold">
              {String(currentIndex + 1).padStart(2, "0")}
            </strong>{" "}
            / {String(total).padStart(2, "0")}
          </span>

          <button
            onClick={prevSlide}
            disabled={total <= 1}
            aria-label="Projeto anterior"
            className={`w-12 h-12 rounded-full border border-black/15 flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 ${
              total <= 1
                ? "bg-black/5 text-black/20 cursor-not-allowed border-black/10"
                : "bg-white hover:bg-black hover:text-white cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            disabled={total <= 1}
            aria-label="Próximo projeto"
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 ${
              total <= 1
                ? "bg-black/5 text-black/20 cursor-not-allowed border-black/10"
                : "bg-black text-cyan-brand hover:bg-black/80 cursor-pointer border-black/15"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ── Main Slide Showcase Container ── */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full rounded-[36px] md:rounded-[48px] overflow-hidden bg-white border border-black/10 shadow-xl transition-all duration-500 min-h-[600px]"
      >
        {/* ════════════════════════════════════════════════════════════ */}
        {/* BRAND CARD: 27 DE SETEMBRO - DISTRIBUIDORA DE PEÇAS (OFICIAL) */}
        {/* ════════════════════════════════════════════════════════════ */}
        {currentProject.isSpecialBrand27 ? (
          <div className="w-full flex flex-col lg:flex-row min-h-[640px]">
            {/* LADO ESQUERDO: Clean, Amplo e Elegante */}
            <div className="lg:w-7/12 bg-[#FFFFFF] p-8 md:p-12 lg:p-14 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-black/10">
              
              <div>
                {/* Logo Principal 27 DE SETEMBRO */}
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#0037F6] rounded-2xl flex items-center justify-center text-white font-sans font-extrabold text-2xl shadow-md">
                      27
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-sans font-extrabold text-[#282622] tracking-tight uppercase leading-none">
                        27 DE SETEMBRO
                      </h3>
                      <p className="text-xs font-alt font-semibold text-[#0037F6] uppercase tracking-widest mt-1">
                        DISTRIBUIDORA DE PEÇAS AUTOMOTIVAS
                      </p>
                    </div>
                  </div>

                  <MonogramN className="w-8 h-8 text-[#0037F6] self-start sm:self-center" />
                </div>

                {/* Slogan Elegante */}
                <div className="mb-6">
                  <p className="text-xs md:text-sm font-sans font-bold text-[#282622] tracking-wider uppercase bg-[#0037F6]/5 px-4 py-2.5 rounded-xl border border-[#0037F6]/15 inline-block">
                    &ldquo;REFERÊNCIA EM PEÇAS. LIDERANÇA EM SOLUÇÕES&rdquo;
                  </p>
                </div>

                {/* Pilares da Marca em Linha Limpa */}
                <div className="mb-8">
                  <span className="text-[11px] font-alt uppercase tracking-widest text-black/40 font-semibold block mb-3">
                    Pilares Fundamentais
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {[
                      { label: "Liderança", icon: Shield },
                      { label: "Agilidade", icon: Zap },
                      { label: "Precisão", icon: Target },
                      { label: "Tecnologia", icon: Cpu },
                      { label: "Confiança", icon: CheckCircle2 },
                    ].map((pilar, idx) => {
                      const Icon = pilar.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2.5 bg-black/5 rounded-xl border border-black/5"
                        >
                          <Icon className="w-4 h-4 text-[#0037F6] flex-shrink-0" />
                          <span className="text-xs font-sans font-medium text-[#282622]">
                            {pilar.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Arte Principal do Projeto com Botão de Visualização em Tela Cheia */}
                <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden mb-6 border border-black/10 shadow-sm group">
                  <Image
                    src="/Portifolio 1.jpeg"
                    alt="27 de Setembro - Identidade de Marca e Frota"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay Button "Visualizar Imagem Inteira" */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button
                      onClick={() =>
                        setModalImage({
                          src: "/Portifolio 1.jpeg",
                          title: "27 de Setembro - Identidade de Marca & Catálogo 3D",
                        })
                      }
                      className="px-5 py-2.5 bg-white text-black hover:bg-[#0037F6] hover:text-white rounded-full font-alt text-xs uppercase tracking-wider font-semibold shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer transform translate-y-2 group-hover:translate-y-0"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Visualizar Imagem Inteira</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Amostra da Paleta de Cores Oficial */}
              <div className="pt-4 border-t border-black/10 flex items-center justify-between flex-wrap gap-4">
                <span className="text-[11px] font-alt uppercase tracking-widest text-black/40 font-semibold">
                  Paleta de Cores Oficial
                </span>
                <div className="flex items-center gap-4 flex-wrap">
                  {currentProject.colors?.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 bg-black/5 px-2.5 py-1 rounded-full border border-black/5">
                      <div
                        className={`w-4 h-4 rounded-full shadow-xs ${c.border ? "border border-black/20" : ""}`}
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-xs font-alt font-medium text-[#282622]">
                        {c.name} <span className="text-black/50 font-mono text-[11px] font-normal">({c.hex})</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* LADO DIREITO: Painel Dividido Clean */}
            <div className="lg:w-5/12 flex flex-col">
              
              {/* Painel Topo: Fundo Escuro Grafite #282622 */}
              <div className="bg-[#282622] p-8 md:p-10 flex flex-col justify-center items-center text-center text-white relative min-h-[220px]">
                <div className="w-12 h-12 bg-[#0037F6] rounded-2xl flex items-center justify-center text-white font-sans font-extrabold text-xl mb-3 shadow-md">
                  27
                </div>
                <h4 className="text-xl md:text-2xl font-sans font-extrabold tracking-tight uppercase text-white mb-1">
                  27 DE SETEMBRO
                </h4>
                <p className="text-[11px] font-alt font-semibold text-cyan-brand uppercase tracking-widest mb-3">
                  DISTRIBUIDORA DE PEÇAS AUTOMOTIVAS
                </p>
                <span className="text-[10px] font-alt font-light text-white/50 border border-white/20 px-3 py-1 rounded-full uppercase tracking-wider">
                  Aplicação sobre Fundo Escuro / Grafite
                </span>
              </div>

              {/* Painel Base: Fundo Azul Rei #0037F6 */}
              <div className="bg-[#0037F6] p-8 md:p-12 flex-1 flex flex-col justify-between text-white relative min-h-[360px]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-alt uppercase tracking-widest text-white/90 font-semibold bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                      Catálogo Físico 3D
                    </span>
                    <Sparkles className="w-5 h-5 text-white/80" />
                  </div>
                  <h4 className="text-2xl md:text-4xl font-sans font-bold tracking-tight text-white mb-4">
                    Catálogo de Peças &amp; Guia Técnico
                  </h4>
                  <p className="text-white/80 font-alt text-sm font-light leading-relaxed mb-8">
                    Material promocional impresso de alta gramatura com mockups tridimensionais, suporte gráfico e acabamento premium para distribuidores parceiros em todo o Brasil.
                  </p>
                </div>

                {/* CTA Button Limpo */}
                <OriginButton
                  href="/contato"
                  className="w-full py-3.5 bg-white text-[#0037F6] hover:bg-[#282622] hover:text-white rounded-full font-alt text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-lg h-auto justify-center"
                  rippleBg="bg-[#282622]"
                  hoverTextColor="!text-white"
                >
                  Solicitar Orçamento do Projeto
                </OriginButton>
              </div>

            </div>
          </div>
        ) : (
          /* ════════════════════════════════════════════════════════════ */
          /* CARD PADRÃO PARA NOVOS PROJETOS QUE FOREM ADICIONADOS       */
          /* ════════════════════════════════════════════════════════════ */
          <div className="w-full flex flex-col lg:flex-row min-h-[600px]">
            {/* Coluna da Imagem */}
            <div className="lg:w-7/12 relative min-h-[340px] md:min-h-[450px] lg:min-h-full bg-black/5 overflow-hidden group">
              {currentProject.image && (
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              )}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                <span className="px-4 py-1.5 bg-black/80 backdrop-blur-md text-cyan-brand text-xs font-alt font-medium tracking-wide rounded-full border border-white/10">
                  {currentProject.category}
                </span>
                <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-black text-xs font-alt font-light rounded-full shadow-xs">
                  {currentProject.year}
                </span>
              </div>

              {/* Botão "Visualizar Imagem Inteira" */}
              {currentProject.image && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-20">
                  <button
                    onClick={() =>
                      setModalImage({
                        src: currentProject.image!,
                        title: `${currentProject.title} - ${currentProject.category}`,
                      })
                    }
                    className="px-5 py-2.5 bg-white text-black hover:bg-cyan-brand hover:text-black rounded-full font-alt text-xs uppercase tracking-wider font-semibold shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer transform translate-y-2 group-hover:translate-y-0"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Visualizar Imagem Inteira</span>
                  </button>
                </div>
              )}
            </div>

            {/* Coluna do Conteúdo */}
            <div className="lg:w-5/12 p-8 md:p-12 lg:p-14 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-alt uppercase tracking-widest text-black/40 font-semibold">
                    Cliente: {currentProject.client}
                  </span>
                  <MonogramN className="w-6 h-6 text-black/20" />
                </div>

                <h3 className="text-3xl md:text-4xl font-sans font-normal tracking-tight text-black mb-4 leading-tight">
                  {currentProject.title}
                </h3>

                <p className="text-black/70 font-alt text-base leading-relaxed font-light mb-8">
                  {currentProject.description}
                </p>

                {/* Tags */}
                {currentProject.tags && (
                  <div className="mb-8">
                    <h4 className="text-xs font-alt uppercase tracking-wider text-black/40 font-semibold mb-3">
                      Especialidades Aplicadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-black/5 hover:bg-black/10 text-black text-xs font-alt font-light rounded-full transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Amostras da Paleta de Cores */}
                {currentProject.colors && (
                  <div className="mb-8">
                    <h4 className="text-xs font-alt uppercase tracking-wider text-black/40 font-semibold mb-3">
                      Paleta de Cores
                    </h4>
                    <div className="flex items-center gap-3 flex-wrap">
                      {currentProject.colors.map((c, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-black/5 px-2.5 py-1 rounded-full border border-black/5">
                          <div
                            className={`w-4 h-4 rounded-full shadow-xs ${c.border ? "border border-black/20" : ""}`}
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className="text-xs font-alt font-medium text-black/80">
                            {c.name} <span className="text-black/50 font-mono text-[11px] font-normal">({c.hex})</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Ação do Rodapé */}
              <div className="pt-6 border-t border-black/10 flex items-center justify-between">
                <OriginButton
                  href="/contato"
                  className="px-7 py-3 bg-black hover:bg-black/80 text-cyan-brand rounded-full font-alt text-xs uppercase tracking-wider font-light transition-all duration-300 shadow-sm h-auto"
                  rippleBg="bg-white"
                  hoverTextColor="!text-black"
                >
                  Solicitar Orçamento
                </OriginButton>

                <div className="text-xs font-alt text-black/40">
                  Projeto {currentIndex + 1} de {total}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Carousel Thumbnails / Dots Pagination (se mais de 1 projeto) ── */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8 flex-wrap px-4">
          {portfolioProjectsList.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Ir para projeto ${p.title}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? "w-10 h-3 bg-black"
                  : "w-3 h-3 bg-black/20 hover:bg-black/50"
              }`}
            />
          ))}
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════ */}
      {/* MODAL LIGHTBOX DE VISUALIZAÇÃO DA IMAGEM INTEIRA             */}
      {/* ════════════════════════════════════════════════════════════ */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setModalImage(null)}
        >
          {/* Header do Modal */}
          <div
            className="w-full max-w-6xl flex items-center justify-between text-white mb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <MonogramN className="w-6 h-6 text-cyan-brand" />
              <span className="font-sans font-semibold text-sm md:text-lg">
                {modalImage.title}
              </span>
            </div>
            <button
              onClick={() => setModalImage(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center gap-2 text-xs font-alt"
              aria-label="Fechar visualização"
            >
              <span>Fechar (Esc)</span>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Imagem Completa em Alta Resolução */}
          <div
            className="relative w-full max-w-6xl h-[80vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImage.src}
              alt={modalImage.title}
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>

          {/* Rodapé do Modal */}
          <p className="text-white/60 font-alt text-xs mt-4">
            Clique em qualquer lugar fora da imagem ou aperte ESC para fechar.
          </p>
        </div>
      )}
    </div>
  );
}
