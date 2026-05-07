"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover,   setHover]   = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top  = `${mouseY}px`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top  = `${ringY}px`;
      }
      raf = requestAnimationFrame(tick);
    };

    const enterInteractive = () => setHover(true);
    const leaveInteractive = () => setHover(false);
    const onDown = () => setClicked(true);
    const onUp   = () => setClicked(false);

    const bindInteractives = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", enterInteractive);
        el.addEventListener("mouseleave", leaveInteractive);
      });
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup",   onUp);
    bindInteractives();
    raf = requestAnimationFrame(tick);

    const observer = new MutationObserver(bindInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup",   onUp);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  if (typeof window !== "undefined" && (
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )) {
    return null;
  }

  const dotSize  = clicked ? 6  : 9;
  const ringSize = hover   ? 48 : clicked ? 22 : 34;
  const color    = hover   ? "#4B7BE5" : "#8059C4";

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width:        dotSize,
          height:       dotSize,
          borderRadius: "50%",
          background:   color,
          boxShadow:    `0 0 ${hover ? 14 : 8}px ${color}99`,
          transition:   "width 0.15s, height 0.15s, background 0.2s, box-shadow 0.2s",
        }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          width:        ringSize,
          height:       ringSize,
          borderRadius: "50%",
          border:       `2px solid ${color}`,
          opacity:      hover ? 0.65 : 0.38,
          background:   hover ? `${color}12` : "transparent",
          transition:   "width 0.25s cubic-bezier(0.34,1.56,0.64,1), height 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s, background 0.2s, border-color 0.2s",
        }}
      />
    </>
  );
}
