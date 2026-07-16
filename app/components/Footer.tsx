"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("courtneyeisenhuth@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer className="py-20 px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">

        {/* CTA block — whileInView entrance */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-purple mb-4">
            Contact
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">
            Let&apos;s work together.
          </h2>
          <p className="font-sans text-sm text-muted max-w-md mb-8 leading-relaxed">
            Open to senior product design and strategy roles.
          </p>

          {/* Spring-physics email button */}
          <motion.button
            onClick={copyEmail}
            className="inline-flex items-center gap-3 font-sans text-sm font-semibold px-5 py-3 border border-border rounded-md text-ink group"
            whileHover={{ scale: 1.03, borderColor: "#111118" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <span>courtneyeisenhuth@gmail.com</span>
            <span
              className={`font-mono text-xs transition-[opacity,color] duration-200 ${
                copied ? "text-purple opacity-100" : "text-muted opacity-40 group-hover:opacity-70"
              }`}
            >
              {copied ? "Copied" : "copy"}
            </span>
          </motion.button>
        </motion.div>

        <div className="border-t border-border mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <a href="/" className="hover:opacity-60 transition-opacity duration-200">
            <Logo className="text-sm" />
          </a>

          <p className="font-sans text-xs text-muted flex items-center gap-1.5">
            Created with Claude Code and <Heart size={12} strokeWidth={1.5} className="fill-purple text-purple" /> · 2026
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/courtney-eisenhuth-8750815b/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-muted hover:text-ink transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
