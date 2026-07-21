import type { Metadata } from "next";
import { Questrial, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/common/CustomCursor";
import PageTransition from "@/components/common/PageTransition";
import "./globals.css";

const questrial = Questrial({
  variable: "--font-questrial",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vilu | Consultoria e Soluções Digitais Robustas",
  description: "Oferecemos às empresas a experiência técnica e o suporte estratégico de que precisam para crescer. Construindo soluções robustas para desafios complexos.",
  keywords: ["Vilu", "Marcio Neves", "Estratégia de produto", "Engenharia de software", "Consultoria de dados", "Transformação digital"],
  icons: {
    icon: "/favicon-16x16.png",
    shortcut: "/favicon-16x16.png",
    apple: "/favicon-16x16.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${questrial.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-cyan-brand selection:text-black">
        <CustomCursor />
        <Header />
        <main className="flex-grow pt-24 md:pt-28">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}


