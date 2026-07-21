"use strict";

"use client";

import React from "react";

export default function HomeClientes() {
  return (
    <section className="bg-cyan-brand py-28 md:py-36 w-full px-6 md:px-10 lg:px-16 text-black">
      <div className="flex flex-col gap-10 md:gap-14 w-full">
        {/* Topo Esquerdo: Título Clientes */}
        <div className="w-full text-left">
          <h2 className="text-xl md:text-6xl font-sans font-light tracking-tight text-black">
            Clientes
          </h2>
        </div>

        {/* Abaixo: Grid de Logos Ampliado */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-black rounded-[40px] md:rounded-[48px] p-6 md:p-12 flex items-center justify-center aspect-[1.5/1] shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full max-h-[92%] max-w-[92%]">
                <path
                  d="M 38,30 C 38,10 62,10 62,30 Q 62,38 70,38 C 90,38 90,62 70,62 Q 62,62 62,70 C 62,90 38,90 38,70 Q 38,62 30,62 C 10,62 10,38 30,38 Q 38,38 38,30 Z"
                  fill="white"
                />
                <text
                  x="50"
                  y="57"
                  fontSize="20"
                  fontWeight="900"
                  fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
                  textAnchor="middle"
                  fill="black"
                  letterSpacing="-0.04em"
                >
                  ADDS
                </text>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
