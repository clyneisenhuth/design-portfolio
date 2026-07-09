"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const intro =
  "A decade in the digital design field, most recently specialized in e-commerce, delivering measurable gains in conversion, revenue, and customer loyalty. I think in systems — translating customer behavior and research insight into clear, actionable strategy that shapes product direction and drives measurable results.";

const stats: { raw: string; label: string }[] = [
  { raw: "10",    label: "yrs experience" },
  { raw: "15M+",  label: "customers reached" },
  { raw: "$20M+", label: "revenue lift"   },
];

function StatItem({ raw, label }: { raw: string; label: string }) {
  const { ref, inView } = useInView(0.4);
  const [count, setCount] = useState(0);

  const match  = raw.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = parseFloat(match?.[2] ?? "0");
  const suffix = match?.[3] ?? "";

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start    = performance.now();
    const tick     = (now: number) => {
      const p     = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <div ref={ref}>
      <p className="font-heading font-bold text-ink text-xl mb-0.5">
        {prefix}{count}{suffix}
      </p>
      <p className="font-mono text-[10px] tracking-[0.08em] uppercase text-muted leading-snug">
        {label}
      </p>
    </div>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  // Parallax refs
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -120]);
  const textY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0,  -60]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-bg px-8 pt-32 pb-12 overflow-hidden border-t border-border"
    >
      {/* ── Bloom gradient blob ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          style={{
            y: blobY,
            willChange: "transform",
            width: "min(90vw, 860px)",
            height: "min(90vw, 860px)",
            background:
              "radial-gradient(ellipse at center, rgba(158,123,80,0.32) 0%, rgba(212,190,168,0.16) 50%, transparent 75%)",
            filter: "blur(52px)",
          }}
        />
      </div>

      {/* ── Watermark ── */}
      <motion.p
        className="absolute inset-0 flex items-center justify-center font-heading font-bold text-white pointer-events-none select-none text-center leading-none"
        style={{
          fontSize: "clamp(3rem, 10vw, 9.5rem)",
          letterSpacing: "-0.04em",
          willChange: "transform",
          opacity: 0.20,
          y: textY,
        }}
        aria-hidden="true"
      >
        COURTNEY<br />EISENHUTH
      </motion.p>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div
          className={`grid md:grid-cols-[1fr_1px_1fr] items-center transition-[opacity,transform] duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Left: name + quote */}
          <div className="md:pr-16 pb-12 md:pb-0">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-purple mb-8">
              Product Designer
            </p>
            <h1
              className="font-heading font-bold text-ink"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.035em" }}
            >
              hi, I&apos;m courtney.
            </h1>

            <blockquote className="mt-8 pl-4 border-l-2 border-purple">
              <p className="font-sans text-sm text-muted leading-relaxed italic">
                &ldquo;Simple is hard. Easy is harder. Invisible is hardest.&rdquo;
              </p>
              <cite className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted not-italic mt-2 block">
                — Jean-Louis Gass&eacute;e
              </cite>
            </blockquote>
          </div>

          {/* Vertical rule */}
          <div className="hidden md:block w-px bg-border self-stretch" />

          {/* Right: bio + stats */}
          <div className="md:pl-16 pt-12 md:pt-0">
            <p className="font-sans text-sm text-muted leading-relaxed mb-10">{intro}</p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((s) => (
                <StatItem key={s.raw} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
