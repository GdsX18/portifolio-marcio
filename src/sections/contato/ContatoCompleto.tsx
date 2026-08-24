"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { OriginButton } from "@/components/ui/origin-button";

const countries = [
  { name: "Curaçao", code: "+599", flag: "🇨🇼" },
  { name: "França", code: "+33", flag: "🇫🇷" },
  { name: "Moçambique", code: "+258", flag: "🇲🇿" },
  { name: "Suíça", code: "+41", flag: "🇨🇭" },
  { name: "Brasil", code: "+55", flag: "🇧🇷" },
  { name: "Portugal", code: "+351", flag: "🇵🇹" },
  { name: "Angola", code: "+244", flag: "🇦🇴" },
  { name: "Estados Unidos", code: "+1", flag: "🇺🇸" },
  { name: "Alemanha", code: "+49", flag: "🇩🇪" },
  { name: "Espanha", code: "+34", flag: "🇪🇸" },
  { name: "Reino Unido", code: "+44", flag: "🇬🇧" },
  { name: "Japão", code: "+81", flag: "🇯🇵" },
  { name: "Itália", code: "+39", flag: "🇮🇹" },
];

export default function ContatoCompleto() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    setor: "",
    empresa: "",
    mensagem: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const starRef = useRef<SVGSVGElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<typeof countries[0] | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.code.includes(searchQuery)
  );

  useGSAP(() => {
    // Shuriken rotation
    gsap.to(starRef.current, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: "none",
    });
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        nome: "",
        sobrenome: "",
        email: "",
        setor: "",
        empresa: "",
        mensagem: "",
      });
      setTimeout(() => setStatus("idle"), 3000);
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
    <section className="bg-[#f4f4f4] text-black pt-32 pb-24 px-6 md:px-12 min-h-screen relative overflow-hidden z-20">
      <div className="max-w-[1500px] mx-auto">
        {/* Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-sans font-light tracking-tighter mb-16">
          Entre em contato
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
          {/* Form Black Box */}
          <div className="xl:col-span-8 bg-black rounded-[48px] p-8 md:p-16 lg:p-24 text-white">
            <form onSubmit={handleSubmit} className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Nome */}
                <div className="relative flex flex-col border-b border-white/20 focus-within:border-cyan-brand transition-colors duration-300 pb-2">
                  <label className="text-sm font-sans font-light mb-4">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="bg-transparent border-0 outline-none w-full text-white font-sans text-base"
                  />
                </div>

                {/* Sobrenome */}
                <div className="relative flex flex-col border-b border-white/20 focus-within:border-cyan-brand transition-colors duration-300 pb-2">
                  <label className="text-sm font-sans font-light mb-4">
                    Sobrenome *
                  </label>
                  <input
                    type="text"
                    name="sobrenome"
                    required
                    value={formData.sobrenome}
                    onChange={handleChange}
                    className="bg-transparent border-0 outline-none w-full text-white font-sans text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Email */}
                <div className="relative flex flex-col border-b border-white/20 focus-within:border-cyan-brand transition-colors duration-300 pb-2">
                  <label className="text-sm font-sans font-light mb-4">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent border-0 outline-none w-full text-white font-sans text-base"
                  />
                </div>

                {/* Setor */}
                <div ref={dropdownRef} className="relative flex flex-col border-b border-white/20 focus-within:border-cyan-brand transition-colors duration-300 pb-2">
                  <label className="text-sm font-sans font-light mb-4">
                    Setor
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-2 bg-transparent border-0 outline-none w-full text-white font-sans text-base text-left py-1 cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        {/* Globe Icon */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-white">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          <path d="M2 12h20" />
                        </svg>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 text-white/50">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                        {selectedCountry && (
                          <span className="flex items-center gap-2 ml-2">
                            <span className="text-xl leading-none">{selectedCountry.flag}</span>
                            <span className="text-white font-sans text-base">{selectedCountry.name} {selectedCountry.code}</span>
                          </span>
                        )}
                      </span>
                    </button>

                    <input type="hidden" name="setor" value={formData.setor} />

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute left-0 top-full mt-2 z-50 w-72 bg-black border border-white/20 rounded-xl overflow-hidden shadow-2xl p-4">
                        {/* Search Input */}
                        <div className="flex items-center gap-2 border-b border-white pb-2 mb-4">
                          {/* Magnifying Glass */}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-white">
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.3-4.3" />
                          </svg>
                          <input
                            type="text"
                            placeholder=""
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent border-0 outline-none w-full text-white font-sans text-base"
                            autoFocus
                          />
                        </div>

                        {/* List */}
                        <div className="max-h-60 overflow-y-auto space-y-1 pr-1">
                          {filteredCountries.map((c) => (
                            <button
                              key={c.code}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(c);
                                setFormData({ ...formData, setor: `${c.name} ${c.code}` });
                                setIsDropdownOpen(false);
                                setSearchQuery("");
                              }}
                              className="w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3 hover:bg-neutral-900 transition-colors duration-200 text-white font-sans text-base"
                            >
                              <span className="text-xl leading-none">{c.flag}</span>
                              <span className="flex-1 font-sans">{c.name} {c.code}</span>
                            </button>
                          ))}
                          {filteredCountries.length === 0 && (
                            <div className="px-3 py-2 text-white/40 font-sans text-sm text-center">
                              Nenhum país encontrado
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Empresa/Organizacao */}
              <div className="relative flex flex-col border-b border-white/20 focus-within:border-cyan-brand transition-colors duration-300 pb-2">
                <label className="text-sm font-sans font-light mb-4">
                  Empresa/Organização
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="bg-transparent border-0 outline-none w-full text-white font-sans text-base"
                />
              </div>

              {/* Mensagem */}
              <div className="relative flex flex-col border-b border-white/20 focus-within:border-cyan-brand transition-colors duration-300 pb-2">
                <label className="text-sm font-sans font-light mb-4">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  rows={2}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="bg-transparent border-0 outline-none w-full text-white font-sans text-base resize-none"
                />
              </div>

              {/* Enviar */}
              <div className="flex justify-center pt-8">
                <OriginButton
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full md:w-auto px-16 py-4 bg-[#00c5e8] text-black rounded-full font-sans text-lg tracking-tight hover:bg-cyan-400 transition-colors duration-300 disabled:opacity-50 h-auto"
                  rippleBg="bg-black"
                  hoverTextColor="!text-white"
                >
                  {status === "loading" ? "Enviando..." : status === "success" ? "Enviado!" : "Enviar"}
                </OriginButton>
              </div>
            </form>
          </div>

          {/* Cyan Info Box */}
          <div className="xl:col-span-4 flex flex-col gap-8">
            <div className="bg-[#00c5e8] rounded-[48px] p-12 lg:p-16 text-black flex flex-col justify-center h-full min-h-[400px]">
              <p className="font-sans font-light text-xl md:text-2xl leading-relaxed mb-16">
                Rua Prates, 194 - Bom Retiro<br />
                São Paulo - SP, 01121-000, Brasil
              </p>
              <div>
                <p className="font-sans font-light text-xl md:text-2xl mb-2">STUDIONEVES@gmail.com</p>
                <p className="font-sans font-light text-xl md:text-2xl">(11) 3456-7890</p>
              </div>
            </div>

            {/* Shuriken Animation Area */}
            <div className="flex justify-end items-center py-8 pl-8 pr-2">
              <svg
                ref={starRef}
                onMouseEnter={handleStarHover}
                onMouseLeave={handleStarLeave}
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-48 h-48 md:w-64 md:h-64 text-black hover:text-[#00c5e8] transition-colors duration-500 cursor-pointer pointer-events-auto"
              >
                {/* Pontas da Estrela Geométrica de 8 Pontas */}
                <path d="M100 10L125 75L190 100L125 125L100 190L75 125L10 100L75 75Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
                {/* Linhas Internas Concêntricas */}
                <path d="M100 30L118 82L170 100L118 118L100 170L82 118L30 100L82 82Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M100 50L109 90L150 100L109 110L100 150L91 110L50 100L91 90Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                {/* Círculo central decorativo */}
                <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
