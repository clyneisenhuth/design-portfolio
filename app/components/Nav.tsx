"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const links = ["Bio", "Projects", "Experience"];

export default function Nav() {
  const [scrolled,   setScrolled]   = useState(false);
  const [active,     setActive]     = useState("");
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled || menuOpen
          ? "bg-surface/80 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="hover:scale-110 transition-transform duration-200 active:scale-95"
        >
          <Logo className="h-10 w-auto" />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-xl hover:bg-purple-pale transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-ink rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-ink rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-ink rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4">
          {links.map((label) => (
            <button
              key={label}
              onClick={() => scrollTo(label)}
              className={`font-sans text-base font-semibold text-left transition-colors duration-200 ${
                active === label ? "text-purple" : "text-muted hover:text-purple"
              }`}
            >
              {label}
            </button>
          ))}
          <a
            href="mailto:clyneisenhuth@gmail.com"
            className="font-sans text-sm font-bold px-5 py-3 bg-purple text-white rounded-full hover:bg-purple-deep transition-all duration-200 text-center mt-2"
          >
            Say hi! 👋
          </a>
        </div>
      </div>
    </nav>
  );
}
