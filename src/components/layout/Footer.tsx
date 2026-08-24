"use strict";

"use client";

import React from "react";
import Link from "next/link";
import { MonogramN } from "@/components/common/MonogramN";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white pt-16 md:pt-24 pb-12 text-black w-full px-6 md:px-12 lg:px-20 overflow-hidden border-t border-black/10">
      <div className="max-w-[1850px] mx-auto w-full">
        {/* ── Top Hero Brand Display (Logo Bem Maior & Estiloso) ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-16 border-b border-black/10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-10">
            {/* Isologo Oficial em tamanho grande com efeito hover */}
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 text-cyan-brand flex-shrink-0 hover:scale-105 hover:rotate-6 transition-all duration-500 cursor-pointer filter drop-shadow-md">
              <MonogramN className="w-full h-full text-cyan-brand" />
            </div>

            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-black uppercase leading-none mb-3">
                STUDIO NEVES
              </h2>
              <p className="font-alt text-sm md:text-base lg:text-lg font-light text-black/60 tracking-wider">
                Design Gráfico &bull; Comunicação Visual &bull; Produção Gráfica
              </p>
            </div>
          </div>

          {/* Tagline / Frase de Marca */}
          <div className="flex flex-col lg:items-end gap-3 max-w-md">
            <span className="px-5 py-2 bg-black text-cyan-brand font-alt text-xs uppercase tracking-widest font-medium rounded-full self-start lg:self-end">
              Excelência &amp; Posicionamento
            </span>
            <p className="text-xs md:text-sm hover:text-cyan-brand transition-all duration-500 font-alt font-light text-black/90 leading-relaxed lg:text-right">
              Transformamos a essência da sua marca em comunicação sólida, memorável e de alto impacto visual.
            </p>
          </div>
        </div>

        {/* ── 4-Column Clean Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-16 text-xs text-black/70 font-alt font-light border-b border-black/10">
          {/* Coluna 1: Navegação Principal */}
          <div className="flex flex-col gap-3">
            <span className="font-sans font-semibold text-black uppercase tracking-widest text-[11px] mb-2 text-black/40">
              Navegação
            </span>
            <Link href="/" className="text-sm text-black/80 hover:text-cyan-brand hover:translate-x-3 transition-all duration-300 border-b border-black/5 pb-0">
              Início
            </Link>
            <Link href="/portfolio" className="text-sm text-black/80 hover:text-cyan-brand hover:translate-x-3 transition-all duration-300 border-b border-black/5 pb-0">
              Portfólio de Projetos
            </Link>
            <Link href="/sobre" className="text-sm text-black/80 hover:text-cyan-brand hover:translate-x-3 transition-all duration-300 border-b border-black/5 pb-0">
              Expertise &amp; Equipe
            </Link>
            <Link href="/solucoes" className="text-sm text-black/80 hover:text-cyan-brand hover:translate-x-3 transition-all duration-300 border-b border-black/5 pb-0">
              Soluções Gráficas
            </Link>
            <Link href="/contato" className="text-sm text-black/80 hover:text-cyan-brand hover:translate-x-3 transition-all duration-300 border-b border-black/5 pb-0">
              Contato Estratégico
            </Link>
          </div>

          {/* Coluna 2: Especialidades */}
          <div className="flex flex-col gap-3">
            <span className="font-sans font-semibold text-black uppercase tracking-widest text-[11px] mb-2 text-black/40">
              Especialidades
            </span>
            <span className="text-sm text-black/80">Identidade Visual &amp; Branding</span>
            <span className="text-sm text-black/80">Endomarketing Corporativo</span>
            <span className="text-sm text-black/80">Design Editorial &amp; Catálogos</span>
            <span className="text-sm text-black/80">Comunicação de Frota &amp; Sinalização</span>
            <span className="text-sm text-black/80">Embalagens &amp; Material de Varejo</span>
          </div>

          {/* Coluna 3: Endereço e Contato */}
          <div className="flex flex-col gap-3">
            <span className="font-sans font-semibold text-black uppercase tracking-widest text-[11px] mb-2 text-black/40">
              Localização &amp; Atendimento
            </span>
            <p className="text-sm leading-relaxed text-black/80">
              Rua Prates, 194 &bull; Bom Retiro<br />
              São Paulo - SP, 01121-000, Brasil
            </p>
            <a
              href="mailto:contato@studioneves.com.br"
              className="text-sm text-black/80 hover:text-cyan-brand transition-colors duration-300 mt-1"
            >
              contato@studioneves.com.br
            </a>
            <span className="text-sm text-black/80 font-medium">(11) 3456-7890</span>
          </div>

          {/* Coluna 4: Redes Sociais & Políticas */}
          <div className="flex flex-col gap-3 justify-between">
            <div>
              <span className="font-sans font-semibold text-black uppercase tracking-widest text-[11px] mb-4 block text-black/40">
                Conecte-se Conosco
              </span>
              <div className="flex gap-4 mb-6">
                {["LinkedIn", "Instagram", "Facebook"].map((social) => (
                  <a
                    key={social}
                    href={`https://${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-black/5 hover:bg-black hover:text-white text-black text-xs font-alt rounded-full transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-4">
              <Link href="/politica-de-privacidade" className="text-xs text-black/50 hover:text-black transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/politica-de-cookies" className="text-xs text-black/50 hover:text-black transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar & Back to Top ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-alt text-black/50">
          <div className="flex items-center gap-2">
            <MonogramN className="w-4 h-4 text-cyan-brand" />
            <span>&copy; {new Date().getFullYear()} Studio Neves. Todos os direitos reservados.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-black hover:text-cyan-brand transition-colors duration-300 cursor-pointer py-1 px-3 rounded-full hover:bg-black/5"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
