"use client";

import { useState, useEffect } from "react";

const links = ["About", "Work", "Experience"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="font-heading text-xl font-semibold gradient-text-static hover:scale-110 transition-transform duration-200 active:scale-95"
        >
          CE ✦
        </button>

        {/* Links */}
        <div className="flex items-center gap-6">
          {links.map((label) => (
            <button
              key={label}
              onClick={() => scrollTo(label)}
              className={`font-sans text-sm font-semibold transition-colors duration-200 relative group ${
                active === label ? "text-purple" : "text-muted hover:text-purple"
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-purple rounded-full transition-all duration-300 ${
                  active === label ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}

          <a
            href="mailto:clyneisenhuth@gmail.com"
            className="font-sans text-sm font-bold px-5 py-2.5 bg-purple text-white rounded-full hover:bg-purple-deep transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
          >
            Say hi! 👋
          </a>
        </div>
      </div>
    </nav>
  );
}
