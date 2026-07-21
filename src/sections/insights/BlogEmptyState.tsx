"use strict";

"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FileText, Search, Calendar, Clock, ArrowRight, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Post {
  id: number;
  title: string;
  category: "Estratégia" | "Tecnologia";
  date: string;
  readTime: string;
  description: string;
  image: string;
  content: string[];
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: "O Poder do Endomarketing na Cultura Corporativa",
    category: "Estratégia",
    date: "28 Jun 2026",
    readTime: "5 min de leitura",
    description: "Como campanhas internas alinhadas à comunicação visual transformam colaboradores em embaixadores da marca.",
    image: "/pessoas 1.avif",
    content: [
      "Uma cultura corporativa forte não nasce por acaso. Ela é projetada, cultivada e comunicada diariamente. No cenário empresarial moderno, o endomarketing surge como uma das ferramentas mais potentes para alinhar equipes, fortalecer valores e impulsionar o engajamento.",
      "Muitas organizações focam seus esforços de comunicação exclusivamente no público externo, esquecendo-se de que os seus próprios colaboradores são os maiores porta-vozes da marca. Campanhas de endomarketing eficientes não se limitam a memorandos ou comunicados formais; elas utilizam o design e a comunicação visual estratégica para criar experiências memoráveis no ambiente de trabalho.",
      "Na nossa trajetória, participamos de projetos marcantes, incluindo campanhas premiadas no Prêmio Nacional da Qualidade (PNQ) para a Petrobras. O segredo do sucesso? Traduzir diretrizes complexas em peças visuais impactantes e humanas, com as quais a equipe consegue se identificar e se conectar de verdade."
    ]
  },
  {
    id: 2,
    title: "Inteligência Artificial no Design e Produção Gráfica",
    category: "Tecnologia",
    date: "22 Jun 2026",
    readTime: "6 min de leitura",
    description: "De ferramentas generativas ao fechamento de arquivos: como a tecnologia está otimizando o fluxo de trabalho criativo.",
    image: "/robo1.avif",
    content: [
      "A inteligência artificial está revolucionando a indústria criativa de forma sem precedentes. Longe de substituir o talento humano, as novas ferramentas de IA atuam como copilotos de alta performance, permitindo que designers e diretores de arte foquem na estratégia e na essência do conceito.",
      "Desde a geração rápida de mockups e referências visuais até a automação de tarefas repetitivas, como tratamento de imagens e fechamento de arquivos complexos, a IA reduz significativamente o tempo de produção. Isso significa ciclos de feedback mais rápidos e entregas mais ágeis para os clientes.",
      "Neste artigo, exploramos como integrar inteligência artificial de forma ética e eficiente na produção diária, garantindo consistência visual, otimização de custos e mantendo a sensibilidade humana que de fato diferencia uma marca no mercado."
    ]
  },
  {
    id: 3,
    title: "Comunicação Visual de Alto Impacto para o Varejo",
    category: "Estratégia",
    date: "15 Jun 2026",
    readTime: "4 min de leitura",
    description: "A psicologia das cores e a disposição de elementos no ponto de venda para guiar a jornada de decisão do cliente.",
    image: "/rua1.avif",
    content: [
      "No dinâmico mercado de varejo, a atenção é a moeda mais valiosa. Quem não chama atenção, simplesmente perde a venda. A comunicação visual no ponto de venda (PDV) é um dos fatores mais determinantes para orientar o fluxo de clientes e influenciar decisões de compra por impulso.",
      "A disposição estratégica de elementos, a escolha da paleta cromática e o ritmo visual da sinalização não são mero adorno estético; são baseados em profunda psicologia de consumo. Placas bem posicionadas e vitrines harmoniosas guiam o olhar do consumidor e reduzem a fricção no momento da escolha.",
      "Desenvolvemos projetos de sinalização e ambientação comercial para grandes marcas, sempre aliando a identidade institucional com as necessidades práticas de atração do varejo. O design inteligente se traduz diretamente em aumento de faturamento."
    ]
  },
  {
    id: 4,
    title: "Infraestrutura Urbana e Sinalização Inteligente",
    category: "Tecnologia",
    date: "08 Jun 2026",
    readTime: "7 min de leitura",
    description: "O futuro das cidades conectadas e o papel do design de sinalização na usabilidade dos espaços públicos modernos.",
    image: "/eletrica1.avif",
    content: [
      "À medida que as metrópoles crescem e se tornam mais complexas, a necessidade de orientar as pessoas de forma clara e inclusiva torna-se um desafio essencial. A sinalização urbana inteligente combina design de informação e tecnologias de ponta para melhorar a usabilidade das cidades.",
      "Desde totens integrados com dados em tempo real até sinalização física sustentável que resiste ao tempo e dialoga com a arquitetura local, o objetivo é um só: tornar o trânsito de pessoas simples e intuitivo.",
      "Exploramos as novas fronteiras do design ambiental (wayfinding) aplicado à infraestrutura de cidades inteligentes, analisando como a união de materiais duráveis, conceitos de acessibilidade universal e tecnologia criam ambientes urbanos mais amigáveis e eficientes."
    ]
  }
];

export default function BlogEmptyState() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalBgRef = useRef<HTMLDivElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>("Todos os posts");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activePost, setActivePost] = useState<Post | null>(null);

  // Filter posts based on category and search query
  const filteredPosts = mockPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "Todos os posts" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle body scroll locking
  useEffect(() => {
    if (activePost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePost]);

  // Initial enter animation
  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" }
    );
  }, { scope: containerRef });

  // Grid filter animation
  useGSAP(() => {
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll(".post-card");
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out" }
        );
      }
    }
  }, [selectedCategory, searchQuery]);

  // Modal open animation
  useGSAP(() => {
    if (activePost) {
      gsap.fromTo(modalBgRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(
        modalRef.current,
        { y: 40, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [activePost]);

  return (
    <section className="bg-transparent py-16 md:py-24 relative overflow-hidden flex flex-col items-center">
      <div
        ref={containerRef}
        className="max-w-[1850px] w-full mx-auto px-4 md:px-8 lg:px-10 relative z-10 opacity-0"
      >
        {/* Cabeçalho do Blog (Filtros e Busca) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-black/10 mb-12">
          <div className="flex items-center gap-6 text-sm font-alt text-black/50 w-full md:w-auto overflow-x-auto scrollbar-none pb-2 md:pb-0">
            {["Todos os posts", "Estratégia", "Tecnologia"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`pb-2 transition-all duration-300 cursor-pointer font-medium border-b-2 whitespace-nowrap text-base ${
                  selectedCategory === cat
                    ? "text-cyan-brand border-cyan-brand font-semibold"
                    : "text-black/50 border-transparent hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 border border-black/10 rounded-full px-4 py-2.5 bg-black/5 max-w-sm w-full">
            <Search className="w-4 h-4 text-black/40" />
            <input
              type="text"
              placeholder="Buscar por título ou assunto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-0 outline-none w-full text-xs text-black placeholder-black/30"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-black/40 hover:text-black cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Layout do Grid ou Empty State */}
        <div className="relative w-full min-h-[400px]">
          {filteredPosts.length > 0 ? (
            <div
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  data-cursor-text="Ler"
                  className="post-card group bg-white border border-black/5 rounded-[32px] p-6 flex flex-col gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer opacity-0"
                >
                  {/* Image Container */}
                  <div className="w-full aspect-[16/10] bg-black/5 rounded-[24px] overflow-hidden relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  {/* Tag & Spinning Starburst */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 text-xs font-alt bg-cyan-brand/10 text-cyan-brand rounded-full uppercase tracking-wider font-light">
                      {post.category}
                    </span>

                    {/* Mini spinning starburst icon */}
                    <svg
                      viewBox="0 0 100 100"
                      className="w-5 h-5 text-cyan-brand animate-[spin_12s_linear_infinite] fill-current stroke-current"
                    >
                      <g strokeWidth="2.5" strokeLinecap="round">
                        <line x1="50" y1="5" x2="50" y2="45" />
                        <line x1="50" y1="55" x2="50" y2="95" />
                        <line x1="5" y1="50" x2="45" y2="50" />
                        <line x1="55" y1="50" x2="95" y2="50" />
                        <line x1="18" y1="18" x2="46" y2="46" />
                        <line x1="82" y1="82" x2="54" y2="54" />
                        <line x1="18" y1="82" x2="46" y2="54" />
                        <line x1="82" y1="18" x2="54" y2="46" />
                      </g>
                      <circle cx="50" cy="50" r="14" fill="currentColor" stroke="none" />
                    </svg>
                  </div>

                  {/* Info: Date & Read Time */}
                  <div className="flex items-center gap-4 text-xs text-black/45 font-alt">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-2 flex-grow">
                    <h4 className="text-xl font-sans font-normal text-black leading-snug group-hover:text-cyan-brand transition-colors duration-300">
                      {post.title}
                    </h4>
                    <p className="text-black/60 font-alt text-sm font-light leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  {/* CTA Link */}
                  <div className="flex items-center gap-2 text-xs font-alt font-medium text-black group-hover:text-cyan-brand mt-auto pt-4 border-t border-black/5 transition-colors duration-300">
                    <span>Ler completo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Mensagem de Sem Resultados */
            <div className="w-full flex items-center justify-center py-16">
              <div className="bg-white/95 backdrop-blur-md border border-black/10 p-8 md:p-12 rounded-3xl max-w-md text-center flex flex-col items-center shadow-lg">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-brand/5 border border-cyan-brand/20 text-cyan-brand mb-6">
                  <FileText className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-sans font-light text-black tracking-wide mb-3">
                  Nenhum post encontrado
                </h3>
                <p className="text-black/60 font-alt text-sm font-light leading-relaxed">
                  Não encontramos artigos para a busca atual. Experimente alterar os termos de busca ou mudar a categoria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("Todos os posts");
                    setSearchQuery("");
                  }}
                  className="mt-6 px-6 py-2.5 bg-black hover:bg-black/85 text-cyan-brand rounded-full font-alt text-xs font-normal tracking-wide transition-all duration-300 cursor-pointer"
                >
                  Limpar filtros
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal Detalhado de Visualização do Post */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            ref={modalBgRef}
            onClick={() => setActivePost(null)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <div
            ref={modalRef}
            className="relative bg-white rounded-[32px] w-full max-w-3xl shadow-2xl z-10 overflow-hidden max-h-[85vh] flex flex-col opacity-0"
          >
            {/* Header / Top Image */}
            <div className="w-full h-64 md:h-80 bg-black/5 relative flex-shrink-0">
              <Image
                src={activePost.image}
                alt={activePost.title}
                fill
                className="object-cover"
              />
              {/* Close Button */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white hover:bg-black/85 hover:scale-105 p-2.5 rounded-full transition-all duration-300 shadow-md group cursor-pointer"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-10 overflow-y-auto space-y-6">
              {/* Category, Date, Read Time & Starburst */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-alt">
                <span className="px-3 py-1 bg-cyan-brand/10 text-cyan-brand rounded-full uppercase tracking-wider font-light">
                  {activePost.category}
                </span>
                <div className="flex items-center gap-1 text-black/45">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{activePost.date}</span>
                </div>
                <div className="flex items-center gap-1 text-black/45">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{activePost.readTime}</span>
                </div>
                <svg
                  viewBox="0 0 100 100"
                  className="w-4 h-4 ml-auto text-cyan-brand animate-[spin_10s_linear_infinite] fill-current stroke-current"
                >
                  <g strokeWidth="2.5" strokeLinecap="round">
                    <line x1="50" y1="5" x2="50" y2="45" />
                    <line x1="50" y1="55" x2="50" y2="95" />
                    <line x1="5" y1="50" x2="45" y2="50" />
                    <line x1="55" y1="50" x2="95" y2="50" />
                    <line x1="18" y1="18" x2="46" y2="46" />
                    <line x1="82" y1="82" x2="54" y2="54" />
                    <line x1="18" y1="82" x2="46" y2="54" />
                    <line x1="82" y1="18" x2="54" y2="46" />
                  </g>
                  <circle cx="50" cy="50" r="14" fill="currentColor" stroke="none" />
                </svg>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-black tracking-tight leading-tight">
                {activePost.title}
              </h2>

              {/* Divisor */}
              <div className="h-px bg-black/10 w-full" />

              {/* Body Text */}
              <div className="space-y-5 text-black/80 font-alt text-base md:text-lg font-light leading-relaxed">
                {activePost.content.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
