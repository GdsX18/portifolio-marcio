"use strict";

import React from "react";

interface IsologoProps {
  className?: string;
}

/**
 * Logotipo oficial da marca Studio Neves (Isologo em SVG vetorizado do public/isologo.svg).
 * Aceita qualquer classe de cor do Tailwind via `text-...` utilizando `fill="currentColor"`.
 */
export const MonogramN: React.FC<IsologoProps> = ({ className = "w-12 h-12 text-current" }) => {
  return (
    <svg
      viewBox="0 0 107.33 106.43"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" d="M80.5,106.43c26.83,0,26.83-26.61,26.83-26.61l-26.83-26.61v53.21Z" />
      <path fillRule="evenodd" d="M107.33,26.61V0h-26.83v26.61L53.67,0h-26.83l26.83,26.61,26.83,26.61c26.83,0,26.83-26.61,26.83-26.61Z" />
      <path fillRule="evenodd" d="M26.83,53.21C0,53.21,0,79.82,0,79.82v26.61h26.83v-26.61l26.83,26.61h26.83l-26.83-26.61-26.83-26.61Z" />
      <path fillRule="evenodd" d="M26.83,0C0,0,0,26.61,0,26.61l26.83,26.61V0Z" />
    </svg>
  );
};

export const Isologo = MonogramN;

export const SimpleArrow: React.FC<IsologoProps> = ({ className = "w-6 h-6 text-current" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="3" x2="12" y2="21" />
      <polyline points="19,14 12,21 5,14" />
    </svg>
  );
};
