import type { Metadata } from "next";
import ExpertiseCompleta from "@/sections/sobre/ExpertiseCompleta";

export const metadata: Metadata = {
  title: "Expertise | Vilu",
  description: "A nossa história, equipe, abordagem, números e destaques na mídia.",
};

export default function SobrePage() {
  return (
    <>
      <ExpertiseCompleta />
    </>
  );
}
