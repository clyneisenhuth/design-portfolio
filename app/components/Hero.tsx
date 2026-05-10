"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Senior Product Designer",
  "Mobile Experience Maker ✨",
  "UX Strategist",
  "Problem Solver 💪",
  "E-commerce Obsessive 🛍️",
];

const reducedMotion =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  useEffect(() => {
    if (reducedMotion) { setDisplayed(roles[0]); return; }
    const current = roles[roleIdx];
    const speed = isDeleting ? 35 : 75;
    let inner: ReturnType<typeof setTimeout> | undefined;
    const t = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          inner = setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIdx((p) => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => { clearTimeout(t); clearTimeout(inner); };
  }, [displayed, isDeleting, roleIdx, reducedMotion]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      {/* Background blob */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8059C4, #4B7BE5)", filter: "blur(90px)" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center py-24">
        {/* Left: text */}
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <p className="font-heading text-lg text-muted mb-2">hi, I&apos;m</p>
          <h1 className="font-heading font-bold leading-none mb-4">
            <span className="gradient-text text-7xl md:text-8xl block pb-3">Courtney</span>
            <span className="text-ink text-4xl md:text-5xl block">Eisenhuth</span>
          </h1>

          <div className="h-8 flex items-center mb-6">
            <p className="font-heading text-lg text-blue font-medium">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-blue ml-0.5 align-middle animate-pulse" />
            </p>
          </div>

          <p className="font-sans text-base text-muted max-w-md mb-10 leading-relaxed">
            A decade of designing digital products, with five years living inside the small screen. I know how people shop, tap, swipe, and bail, and I design for all of it.
          </p>

          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="font-sans font-extrabold px-8 py-4 bg-purple text-white rounded-2xl hover:bg-purple-deep transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            style={{ boxShadow: "0 8px 30px #8059C440" }}
          >
            See my work ✦
          </button>
        </div>

        {/* Right: stat cards */}
        <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <div className="relative flex flex-col gap-5">
            <div className="absolute -top-8 -right-8 w-64 h-64 rounded-full border-2 border-dashed border-purple/20 animate-spin-slow pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 rounded-full border-2 border-dashed border-blue/20 animate-spin-rev pointer-events-none" />

            {[
              { label: "Product skills",       value: "Strategy, Research, UX/UI", emoji: "🎨", color: "bg-purple-pale text-purple" },
              { label: "Focus area",          value: "Mobile & E-comm",                        emoji: "🛍️", color: "bg-surface text-ink" },
              { label: "Current role",        value: "Mobile Design Systems Team @ PNC Bank",  emoji: "🏦", color: "bg-blue-pale text-blue-deep" },
              { label: "Working on",          value: "AI & Vibe-coding",                       emoji: "🚀", color: "bg-purple-pale text-purple-deep" },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl shadow-sm border border-border ${card.color} bg-opacity-60`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.4 + i * 0.15 }}
              >
                <span className="text-3xl">{card.emoji}</span>
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest opacity-60 mb-0.5">{card.label}</p>
                  <p className="font-heading font-bold text-xl">{card.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted/50 animate-bounce z-10">
        <span className="font-sans text-xs tracking-widest uppercase">scroll</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 3v12M3 11l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
