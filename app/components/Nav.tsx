"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const pillStyle = scrolled
    ? "bg-white/95 shadow-lg shadow-black/[0.08] border-border"
    : "bg-white/80 shadow-md shadow-black/[0.05] border-white/50";

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-max max-w-[calc(100vw-2rem)]">

      {/* Floating pill */}
      <nav
        className={`flex items-center px-2 py-1.5 rounded-full border backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ${pillStyle}`}
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 px-2 py-1 hover:opacity-80 transition-opacity duration-200"
        >
          <img
            src="/images/profile_pic1.jpg"
            alt="Courtney Eisenhuth"
            className="w-7 h-7 rounded-full object-cover object-top flex-shrink-0"
          />
          <span
            className="font-heading font-semibold text-sm text-ink whitespace-nowrap"
            style={{ letterSpacing: "-0.03em" }}
          >
            courtney.e
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center">
          <div className="w-px h-3.5 bg-border mx-1.5" />

          {[
            { label: "Work", id: "work" },
            { label: "Experience", id: "experience" },
          ].map(({ label, id }) => (
            <button
              key={label}
              onClick={() => scrollTo(id)}
              className="px-3 py-1.5 font-sans text-sm text-muted hover:text-ink rounded-full hover:bg-surface transition-all duration-200 whitespace-nowrap"
            >
              {label}
            </button>
          ))}

          <a
            href="/about"
            className={`px-3 py-1.5 font-sans text-sm rounded-full hover:bg-surface transition-all duration-200 whitespace-nowrap ${
              pathname === "/about" ? "text-ink font-semibold" : "text-muted hover:text-ink"
            }`}
          >
            About
          </a>

          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 font-sans text-sm text-muted hover:text-ink transition-colors duration-200 whitespace-nowrap"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden ml-2 mr-1 w-8 h-8 flex flex-col justify-center items-center gap-[5px]"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-4 h-px bg-ink rounded-full transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block w-4 h-px bg-ink rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-4 h-px bg-ink rounded-full transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-72 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`flex flex-col gap-1 p-2 rounded-2xl border backdrop-blur-md ${pillStyle}`}
        >
          <button
            onClick={() => scrollTo("work")}
            className="px-3 py-2 font-sans text-sm text-muted text-left rounded-xl hover:bg-surface transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className="px-3 py-2 font-sans text-sm text-muted text-left rounded-xl hover:bg-surface transition-colors"
          >
            Experience
          </button>
          <a
            href="/about"
            className="px-3 py-2 font-sans text-sm text-muted rounded-xl hover:bg-surface transition-colors"
          >
            About
          </a>
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 font-sans text-sm text-muted text-left rounded-xl hover:bg-surface transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
