"use strict";

"use client";

import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FormContato() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const starRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Rotação contínua e suave da estrela de 8 pontas
    gsap.to(starRef.current, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: "none",
    });

    // Entrada suave dos elementos do formulário e das informações
    gsap.fromTo(
      containerRef.current ? containerRef.current.children : [],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simula o envio do formulário
    setTimeout(() => {
      setStatus("success");
      setFormData({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        empresa: "",
        mensagem: "",
      });
    }, 1500);
  };

  const handleStarHover = () => {
    gsap.to(starRef.current, {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleStarLeave = () => {
    gsap.to(starRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section className="bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
      >
        {/* Coluna Esquerda: Formulário de Contato */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nome */}
              <div className="relative flex flex-col border-b border-white/10 focus-within:border-cyan-brand transition-colors duration-300 py-2">
                <label className="text-xs uppercase tracking-wider text-white/50 mb-1">
                  Nome <span className="text-cyan-brand">*</span>
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="bg-transparent border-0 outline-none w-full text-white font-alt text-sm"
                />
              </div>

              {/* Sobrenome */}
              <div className="relative flex flex-col border-b border-white/10 focus-within:border-cyan-brand transition-colors duration-300 py-2">
                <label className="text-xs uppercase tracking-wider text-white/50 mb-1">
                  Sobrenome <span className="text-cyan-brand">*</span>
                </label>
                <input
                  type="text"
                  name="sobrenome"
                  required
                  value={formData.sobrenome}
                  onChange={handleChange}
                  className="bg-transparent border-0 outline-none w-full text-white font-alt text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email */}
              <div className="relative flex flex-col border-b border-white/10 focus-within:border-cyan-brand transition-colors duration-300 py-2">
                <label className="text-xs uppercase tracking-wider text-white/50 mb-1">
                  Email <span className="text-cyan-brand">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-0 outline-none w-full text-white font-alt text-sm"
                />
              </div>

              {/* Telefone / Setor */}
              <div className="relative flex flex-col border-b border-white/10 focus-within:border-cyan-brand transition-colors duration-300 py-2">
                <label className="text-xs uppercase tracking-wider text-white/50 mb-1">
                  Telefone / Setor
                </label>
                <input
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="bg-transparent border-0 outline-none w-full text-white font-alt text-sm"
                />
              </div>
            </div>

            {/* Empresa */}
            <div className="relative flex flex-col border-b border-white/10 focus-within:border-cyan-brand transition-colors duration-300 py-2">
              <label className="text-xs uppercase tracking-wider text-white/50 mb-1">
                Empresa / Organização
              </label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="bg-transparent border-0 outline-none w-full text-white font-alt text-sm"
              />
            </div>

            {/* Mensagem */}
            <div className="relative flex flex-col border-b border-white/10 focus-within:border-cyan-brand transition-colors duration-300 py-2">
              <label className="text-xs uppercase tracking-wider text-white/50 mb-1">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                rows={4}
                value={formData.mensagem}
                onChange={handleChange}
                className="bg-transparent border-0 outline-none w-full text-white font-alt text-sm resize-none"
              />
            </div>

            {/* Botão de Envio */}
            <div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-brand text-black rounded-lg overflow-hidden font-alt text-sm uppercase tracking-wider font-semibold hover:bg-cyan-brand-hover transition-colors duration-300 disabled:opacity-50"
              >
                <span className="flex items-center gap-2">
                  Enviar Mensagem
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {status === "loading" && (
              <p className="text-cyan-brand text-sm animate-pulse">Enviando seus dados para a mesa de produto...</p>
            )}
            {status === "success" && (
              <p className="text-green-400 text-sm">Sucesso! Entraremos em contato muito em breve.</p>
            )}
          </form>
        </div>

        {/* Coluna Direita: Informações e Estrela Animada */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-16">
          {/* Informações */}
          <div className="space-y-10">
            <h3 className="text-2xl font-sans font-light tracking-wide text-white">
              Canais diretos
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-cyan-brand">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-1 font-bold">Endereço</h4>
                  <p className="text-white/80 font-alt text-sm font-light leading-relaxed">
                    Rua Prates, 194 - Bom Retiro<br />
                    São Paulo - SP, 01121-000, Brasil
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-cyan-brand">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-1 font-bold">Email</h4>
                  <a href="mailto:info@nomedosite.com" className="text-white/80 hover:text-cyan-brand transition-colors duration-300 font-alt text-sm font-light">
                    info@nomedosite.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-cyan-brand">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-1 font-bold">Telefone</h4>
                  <p className="text-white/80 font-alt text-sm font-light">
                    (11) 3456-7890
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Estrela Geométrica Animada (Vetor original recriado) */}
          <div className="flex items-center justify-center lg:justify-start lg:pl-10 mt-auto">
            <svg
              ref={starRef}
              onMouseEnter={handleStarHover}
              onMouseLeave={handleStarLeave}
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-48 h-48 md:w-56 md:h-56 text-cyan-brand/30 hover:text-cyan-brand transition-colors duration-500 cursor-pointer pointer-events-auto"
            >
              {/* Pontas da Estrela Geométrica de 8 Pontas */}
              <path d="M100 10L125 75L190 100L125 125L100 190L75 125L10 100L75 75Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              {/* Linhas Internas Concêntricas */}
              <path d="M100 30L118 82L170 100L118 118L100 170L82 118L30 100L82 82Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.6" />
              <path d="M100 50L109 90L150 100L109 110L100 150L91 110L50 100L91 90Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" opacity="0.4" />
              {/* Círculo central decorativo */}
              <circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="1" opacity="0.8" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
