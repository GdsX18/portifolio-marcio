"use strict";

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MonogramN } from "@/components/common/MonogramN";

const menuItems = [
  { label: "Portfólio", href: "/portfolio" },
  { label: "Expertise", href: "/sobre" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Contato", href: "/contato" },
];

const socialLinks = [
  { label: "Linkedin", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar o menu ao mudar de rota
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen
          ? "bg-transparent border-b border-transparent"
          : scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-black/8 shadow-sm"
            : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-10 lg:px-16 flex items-center justify-between h-20 md:h-24">
        {/* Mobile Logo */}
        <Link href="/" className="flex md:hidden items-center flex-shrink-0 gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo1-dark.svg"
            alt="Studio Neves Logo"
            className="h-10 w-auto"
          />
          <MonogramN className="w-6 h-6 text-black" />
        </Link>

        {/* Esquerda: Navegação + Logo (Desktop) */}
        <div className="hidden md:flex items-center gap-10 lg:gap-14">
          <nav className="flex items-center gap-7 lg:gap-9">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-alt text-[13px] tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-cyan-brand font-normal"
                      : "text-black/60 hover:text-cyan-brand"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/" className="flex items-center flex-shrink-0 gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo1-dark.svg"
              alt="Studio Neves Logo"
              className="h-12 md:h-14 w-auto"
            />
          </Link>
        </div>

        {/* Direita: Redes sociais em texto + Monograma Studio Neves */}
        <div className="hidden md:flex items-center justify-end gap-6 lg:gap-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-alt text-[13px] text-black/60 hover:text-cyan-brand tracking-wide transition-colors duration-300"
            >
              {social.label}
            </a>
          ))}
          <MonogramN className="w-6 h-6 text-black/80 hover:text-cyan-brand transition-colors" />
        </div>

        {/* Mobile: Hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-cyan-brand transition-colors duration-300 z-50 p-2"
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden flex flex-col justify-start pt-28 pb-10 overflow-y-auto transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-center px-6">
          <ul className="flex flex-col gap-6">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-sans text-3xl font-light tracking-wide transition-all duration-300 block ${
                      isActive
                        ? "text-cyan-brand font-normal scale-105"
                        : "text-black/80 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="h-[1px] w-24 bg-black/10 my-4" />

          {/* Social Links (Mobile) */}
          <div className="flex items-center gap-6 text-black/60">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-alt text-base hover:text-cyan-brand transition-colors duration-300"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
