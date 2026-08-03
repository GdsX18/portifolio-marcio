import type { Metadata } from "next";
import HeroSolucoes from "@/sections/solucoes/HeroSolucoes";
import SolucoesScrollShowcase from "@/sections/solucoes/SolucoesScrollShowcase";

export const metadata: Metadata = {
  title: "Soluções | Studio Neves",
  description: "Ajudando você a tomar a decisão certa. Conheça nossos serviços de Estratégia, Execução técnica e Consultoria de dados para alavancar seu negócio.",
};

export default function SolucoesPage() {
  return (
    <>
      <HeroSolucoes />
      <SolucoesScrollShowcase />
    </>
  );
}

