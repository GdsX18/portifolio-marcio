import type { Metadata } from "next";
import ContatoCompleto from "@/sections/contato/ContatoCompleto";

export const metadata: Metadata = {
  title: "Contato | Vilu",
  description: "Entre em contato conosco. Tire suas dúvidas, solicite orçamentos ou marque uma conversa estratégica sobre produto, tecnologia e dados.",
};

export default function ContatoPage() {
  return (
    <>
      <ContatoCompleto />
    </>
  );
}
