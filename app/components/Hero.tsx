"use client";

import { useState, useEffect, useRef } from "react";

const roles = [
  "Senior Product Designer",
  "Mobile Experience Maker ✨",
  "UX Strategist",
  "Problem Solver 💪",
  "E-commerce Obsessive 🛍️",
];

const floaters = [
  { e: "📱", cls: "top-28 right-[18%]  text-4xl animate-float" },
  { e: "✨", cls: "top-44 right-[7%]   text-3xl animate-float-1" },
  { e: "💜", cls: "bottom-36 right-[22%] text-3xl animate-float-2" },
  { e: "🎨", cls: "top-52 left-[7%]   text-4xl animate-float-r0" },
  { e: "⭐", cls: "bottom-44 left-[14%] text-3xl animate-float-r1" },
  { e: "🚀", cls: "top-36 left-[19%]  text-3xl animate-float" },
  { e: "💡", cls: "bottom-28 left-[32%] text-2xl animate-float-1" },
];

export default function Hero() {
  const [roleIdx,     setRoleIdx]     = useState(0);
  const [displayed,   setDisplayed]   = useState("");
  const [isDeleting,  setIsDeleting]  = useState(false);
  const [visible,     setVisible]     = useState(false);
  const [mousePos,    setMousePos]    = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  /* Entrance fade */
  useEffect(() => { setVisible(true); }, []);

  /* Typewriter */
  useEffect(() => {
    const current = roles[roleIdx];
    const speed   = isDeleting ? 35 : 75;
    const t = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
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
    return () => clearTimeout(t);
  }, [displayed, isDeleting, roleIdx]);

  /* Parallax on mouse move */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-25 animate-blob pointer-events-none"
        style={{
          background: "radial-gradient(circle, #8059C4, #B8A0E0)",
          filter: "blur(72px)",
          transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -18}px)`,
          transition: "transform 0.4s ease-out",
        }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[420px] h-[420px] opacity-20 animate-blob-delay pointer-events-none"
        style={{
          background: "radial-gradient(circle, #4B7BE5, #8BB8F8)",
          filter: "blur(72px)",
          transform: `translate(${mousePos.x * 22}px, ${mousePos.y * 22}px)`,
          transition: "transform 0.4s ease-out",
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-72 h-72 opacity-12 animate-blob-late pointer-events-none"
        style={{
          background: "radial-gradient(circle, #D4A8F0, #EDE7FF)",
          filter: "blur(90px)",
        }}
      />

      {/* Spinning dashed rings */}
      <div className="absolute top-20 right-[14%] w-28 h-28 rounded-full border-2 border-dashed border-purple/20 animate-spin-slow hidden lg:block pointer-events-none" />
      <div className="absolute bottom-28 left-[9%] w-20 h-20 rounded-full border-2 border-dashed border-blue/20 animate-spin-rev hidden lg:block pointer-events-none" />

      {/* Stars */}
      <div className="absolute top-32 left-[38%] text-xl animate-twinkle pointer-events-none hidden lg:block">✦</div>
      <div className="absolute bottom-52 right-[38%] text-sm animate-twinkle-2 pointer-events-none hidden lg:block text-purple/40">✦</div>

      {/* Floating emoji stickers */}
      {floaters.map((f, i) => (
        <div
          key={i}
          className={`absolute select-none hidden lg:block pointer-events-none ${f.cls}`}
          style={{
            transform: `translate(${mousePos.x * (i % 2 === 0 ? 10 : -10)}px, ${mousePos.y * (i % 2 === 0 ? 8 : -8)}px)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          {f.e}
        </div>
      ))}

      {/* Main content */}
      <div
        className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Availability badge */}
        <div
          className="inline-flex items-center gap-2 bg-purple-pale text-purple px-4 py-2 rounded-full text-sm font-sans font-semibold mb-8 animate-bounce-pop"
          style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
        >
          <span className="animate-wiggle inline-block">👋</span>
          <span>Open to new opportunities</span>
          <span className="w-2 h-2 rounded-full bg-purple animate-pulse" />
        </div>

        <p className="font-heading text-2xl text-muted mb-1">hi, I&apos;m</p>

        <h1 className="font-heading font-bold leading-tight mb-4">
          <span className="gradient-text text-6xl md:text-8xl">Courtney</span>
          <br />
          <span className="text-ink text-5xl md:text-7xl">Eisenhuth</span>
        </h1>

        {/* Typewriter role */}
        <div className="h-10 flex items-center justify-center mb-8">
          <p className="font-heading text-xl md:text-2xl text-blue-light font-medium">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-blue-light ml-0.5 align-middle animate-pulse" />
          </p>
        </div>

        <p className="font-sans text-base md:text-lg text-muted max-w-xl mx-auto mb-10 leading-relaxed">
          <span className="font-extrabold text-purple">10 years</span> in product design —
          with the last 5 focused exclusively on
          mobile apps and e-commerce, serving{" "}
          <span className="font-extrabold text-purple">10M+ customers</span> at{" "}
          a Fortune 500 retailer.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="font-sans font-extrabold px-8 py-4 bg-purple text-white rounded-2xl hover:bg-purple-deep transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            style={{ boxShadow: "0 8px 30px #8059C440" }}
          >
            See my work ✦
          </button>
          <a
            href="mailto:clyneisenhuth@gmail.com"
            className="font-sans font-extrabold px-8 py-4 border-2 border-purple text-purple rounded-2xl hover:bg-purple-pale transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Let&apos;s chat 💌
          </a>
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
