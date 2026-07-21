"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);
  
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Detect mobile/touch devices
    const isTouchDevice = 
      window.matchMedia("(pointer: coarse)").matches || 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0;

    // Do absolutely nothing on mobile/touch devices to save 100% of CPU/memory resources
    if (isTouchDevice) {
      return;
    }

    // Hide default cursor on desktop
    document.documentElement.classList.add("custom-cursor-active");

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;

    if (!dot || !ring) return;

    // Direct mouse position tracker (instantly updates the dot)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      
      // Update dot position instantly (zero lag)
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    // Smooth animation loop for the outer ring (using fast interpolation)
    let animationFrameId: number;
    
    const updateRingPosition = () => {
      // Faster interpolation factor (0.2) for high responsiveness
      const speed = 0.2;
      ringX.current += (mouseX.current - ringX.current) * speed;
      ringY.current += (mouseY.current - ringY.current) * speed;

      ring.style.transform = `translate3d(${ringX.current}px, ${ringY.current}px, 0) translate(-50%, -50%)`;
      
      animationFrameId = requestAnimationFrame(updateRingPosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(updateRingPosition);

    // Hover event listeners
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if hovering interactive elements
      const isInteractive = 
        target.closest("a") || 
        target.closest("button") || 
        target.closest(".project-card") || 
        target.closest(".expertise-card") || 
        target.closest(".blog-card") || 
        target.closest("[role='button']") ||
        window.getComputedStyle(target).cursor === "pointer";

      if (isInteractive) {
        setIsPointer(true);
        
        // Check if there is specific custom text
        const cardElement = target.closest("[data-cursor-text]");
        if (cardElement) {
          const text = cardElement.getAttribute("data-cursor-text") || "";
          setCursorText(text);
          setIsHovering(true);
        } else {
          setCursorText("");
          setIsHovering(false);
        }
      } else {
        setIsPointer(false);
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* 
        Outer Ring - Mix Blend Difference makes it turn white on black and black on white.
        Only transition width, height, background-color, border-color, and opacity.
        NEVER transition transform because it's updated dynamically in requestAnimationFrame.
      */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 rounded-full border border-white mix-blend-difference pointer-events-none z-[9999] transition-[width,height,background-color,border-color,opacity] duration-200 ease-out hidden md:flex items-center justify-center text-[10px] font-alt font-medium tracking-wider uppercase text-white ${
          isHovering 
            ? "w-16 h-16 bg-white text-black" 
            : isPointer 
              ? "w-12 h-12 bg-white/10" 
              : "w-8 h-8"
        }`}
      >
        {cursorText}
      </div>

      {/* 
        Inner Dot - Bright Cyan.
        Do NOT transition transform (since it's updated on mousemove).
        We transition width, height, and opacity to fade out when hovering links.
      */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 bg-[#00c5e8] rounded-full pointer-events-none z-[9999] hidden md:block transition-[width,height,opacity] duration-150 ease-out ${
          isPointer ? "w-0 h-0 opacity-0" : "w-2 h-2 opacity-100"
        }`}
      />
    </>
  );
}
