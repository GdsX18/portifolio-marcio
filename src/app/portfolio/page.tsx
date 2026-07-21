import type { Metadata } from "next";
import HeroPortfolio from "@/sections/portfolio/HeroPortfolio";
import PortfolioProjects from "@/sections/portfolio/PortfolioProjects";

export const metadata: Metadata = {
  title: "Portfólio | Vilu",
  description: "Conheça os projetos que definem nossa excelência em comunicação visual, endomarketing, marketing institucional e produção gráfica para grandes marcas.",
};

export default function PortfolioPage() {
  return (
    <>
      <HeroPortfolio />
      <PortfolioProjects />
    </>
  );
}
