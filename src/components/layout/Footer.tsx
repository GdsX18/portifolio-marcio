"use strict";

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, ArrowRight } from "lucide-react";
import { OriginButton } from "@/components/ui/origin-button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setConsent(false);
    }, 1200);
  };

  return (
    <footer className="bg-white pt-16 pb-12 text-black w-full px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="w-full">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12">
          <div className="lg:col-span-6">
            <h2 className="text-4xl md:text-6xl font-sans font-light tracking-tight text-black mb-2">
              Não perca as <br />novidades
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <p className="text-black/60 font-alt text-sm font-light mb-4">
              Assine a nossa newsletter semanal.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-black/50 font-alt font-light">Email *</label>
                <div className="flex gap-5 items-center">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border-b border-black/20 focus:border-black outline-none w-full text-black font-alt text-sm py-2 transition-colors duration-300"
                  />
                  <OriginButton
                    type="submit"
                    disabled={status === "loading"}
                    className="px-7 py-2.5 bg-black hover:bg-black/80 text-white rounded-full font-alt text-sm font-light transition-colors duration-300 disabled:opacity-50 h-auto"
                    rippleBg="bg-white"
                    hoverTextColor="!text-black"
                  >
                    Enviar
                  </OriginButton>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 accent-black cursor-pointer"
                />
                <span className="text-xs text-black/50 group-hover:text-black/80 transition-colors duration-300 font-alt font-light">
                  Sim, quero assinar a newsletter
                </span>
              </label>

              {status === "loading" && (
                <p className="text-xs text-black animate-pulse">Inscrevendo...</p>
              )}
              {status === "success" && (
                <p className="text-xs text-green-600">Obrigado por se inscrever!</p>
              )}
            </form>
          </div>
        </div>

        {/* Giant VILU Text - Alinhado à esquerda, sem bordas em cima e embaixo, e bem maior */}
        <div className="py-6 overflow-hidden">
          <h1 className="text-[18vw] md:text-[22vw] font-sans font-normal tracking-[-0.05em] leading-none text-black select-none uppercase text-left">
            VILU
          </h1>
        </div>

        {/* Bottom Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 text-xs text-black/60 font-alt font-light">
          {/* Column 1: Links */}
          <div className="flex flex-col gap-2">
            <Link href="/solucoes" className="hover:text-cyan-brand transition-colors duration-300">
              Soluções
            </Link>
            <Link href="/portfolio" className="hover:text-cyan-brand transition-colors duration-300">
              Portfólio
            </Link>
            <Link href="/sobre" className="hover:text-cyan-brand transition-colors duration-300">
              Expertise
            </Link>
            <Link href="/insights" className="hover:text-cyan-brand transition-colors duration-300">
              Insights
            </Link>
            <Link href="/contato" className="hover:text-cyan-brand transition-colors duration-300">
              Contato
            </Link>
          </div>

          {/* Column 2: Address */}
          <div>
            <p className="leading-relaxed">
              Rua Prates, 194 - Bom Retiro<br />
              São Paulo - SP, 01121-000, Brasil<br />
              info@nomedosite.com<br />
              (11) 3456-7890
            </p>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col gap-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-brand transition-colors duration-300">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-brand transition-colors duration-300">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-brand transition-colors duration-300">
              Facebook
            </a>
          </div>

          {/* Column 4: Legal & Copyright */}
          <div className="flex flex-col justify-between gap-4 md:items-end">
            <div className="flex flex-col md:items-end gap-2">
              <Link href="/politica-de-privacidade" className="hover:text-cyan-brand transition-colors duration-300">
                Política de Privacidade
              </Link>
              <Link href="/politica-de-cookies" className="hover:text-cyan-brand transition-colors duration-300">
                Política de Cookies
              </Link>
            </div>
            <p className="text-[10px] text-black/40 mt-auto md:text-right">
              &copy; 2035 por Vilu. Criado com Wix Studio&trade;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
