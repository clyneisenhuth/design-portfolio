"use client";

import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [wiggle, setWiggle] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("clyneisenhuth@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const onWaveEnter = () => { setWiggle(true); };
  const onWaveLeave = () => { setWiggle(false); };

  return (
    <footer className="py-20 px-6 border-t-2 border-border bg-white/40">
      <div className="max-w-5xl mx-auto">

        {/* CTA block */}
        <div className="text-center mb-14">
          <div
            className="inline-block mb-4 text-5xl select-none"
            onMouseEnter={onWaveEnter}
            onMouseLeave={onWaveLeave}
          >
            <span className={wiggle ? "animate-wiggle inline-block" : "inline-block"}>👋</span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink mb-4">
            Have an idea? Let&apos;s chat!
          </h2>
          <p className="font-sans text-muted max-w-md mx-auto mb-10 leading-relaxed">
            I&apos;m open to senior product design and strategy roles. If you&apos;ve got something interesting, I&apos;d love to hear about it.
          </p>

          {/* Email copy button */}
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-3 font-sans font-bold text-base md:text-lg px-7 py-4 bg-surface border-2 border-purple text-purple rounded-2xl hover:bg-purple hover:text-white transition-all duration-250 hover:scale-105 active:scale-95 shadow-sm"
          >
            <span className="text-xl">{copied ? "✅" : "📬"}</span>
            <span>clyneisenhuth@gmail.com</span>
            <span
              className={`font-sans text-xs font-normal transition-all duration-300 ${
                copied ? "opacity-100 text-green-400 group-hover:text-green-300" : "opacity-0 group-hover:opacity-60"
              }`}
            >
              {copied ? "Copied!" : "click to copy"}
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-muted">
          <p className="font-heading text-xl font-semibold gradient-text-static">
            Courtney Eisenhuth ✦
          </p>

          <p className="font-sans text-xs text-center">
            Created with Claude Code &nbsp;·&nbsp; Made with ♥ &nbsp;·&nbsp; 2026
          </p>

          <div className="flex items-center gap-5">
            <a
              href="mailto:clyneisenhuth@gmail.com"
              className="font-sans font-semibold hover:text-purple transition-colors duration-200 hover:scale-105 inline-block"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/courtney-eisenhuth-8750815b/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-semibold hover:text-blue transition-colors duration-200 hover:scale-105 inline-block"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
