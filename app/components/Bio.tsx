"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CONFETTI_PALETTE = [
  "#8059C4","#4B7BE5","#D4A8F0","#8BB8F8",
  "#FF6B9D","#FFD93D","#6BCB77","#FF9E3D",
];

function burstConfetti(origin: HTMLElement, rafRef: React.MutableRefObject<number>) {
  const canvas = document.createElement("canvas");
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:9990;";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d")!;

  const r  = origin.getBoundingClientRect();
  const cx = r.left + r.width  / 2;
  const cy = r.top  + r.height / 2;

  const particles = Array.from({ length: 40 }, (_, i) => {
    const angle = (i / 40) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const speed = 4 + Math.random() * 6;
    return {
      x: cx, y: cy,
      vx:   Math.cos(angle) * speed,
      vy:   Math.sin(angle) * speed - 2,
      w:    4 + Math.random() * 7,
      h:    3 + Math.random() * 4,
      color: CONFETTI_PALETTE[Math.floor(Math.random() * CONFETTI_PALETTE.length)],
      rot:  Math.random() * Math.PI * 2,
      rotV: (Math.random() - 0.5) * 0.28,
      life: 1,
    };
  });

  cancelAnimationFrame(rafRef.current);

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    for (const p of particles) {
      if (p.life <= 0) continue;
      alive = true;
      p.x   += p.vx;
      p.y   += p.vy;
      p.vy  += 0.2;
      p.vx  *= 0.989;
      p.rot += p.rotV;
      p.life -= 0.016;
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (alive) { rafRef.current = requestAnimationFrame(animate); }
    else        { canvas.remove(); }
  };

  rafRef.current = requestAnimationFrame(animate);
}

const skills = [
  { label: "Mobile Design (iOS/Android)", hue: "purple" },
  { label: "E-commerce Strategy",         hue: "blue"   },
  { label: "User Research",               hue: "purple" },
  { label: "A/B Testing",                 hue: "blue"   },
  { label: "WCAG Accessibility",          hue: "purple" },
  { label: "Conversion Optimization",     hue: "blue"   },
  { label: "Checkout Flows",              hue: "purple" },
  { label: "Loyalty Programs",            hue: "blue"   },
  { label: "Design Systems",              hue: "purple" },
  { label: "Navigation Design",           hue: "blue"   },
  { label: "Systems Thinking",            hue: "purple" },
  { label: "Behavioral Data Analysis",    hue: "blue"   },
  { label: "Rapid Prototyping",           hue: "purple" },
];

const stats = [
  { target: 10, prefix: "",  suffix: " yrs", desc: "of product design experience" },
  { target: 10, prefix: "",  suffix: "M+",   desc: "customers served through AEO"  },
  { target: 20, prefix: "$", suffix: "M+",   desc: "estimated revenue lift in 2025" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function StatCard({
  target, prefix, suffix, desc,
}: {
  target: number; prefix: string; suffix: string; desc: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [val,     setVal]     = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let cur = 0;
    const step = target / 60;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(Math.round(cur));
      if (cur >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [started, target]);

  return (
    <div
      ref={ref}
      className="bg-surface rounded-2xl p-5 text-center border-2 border-border hover:border-purple/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
    >
      <p className="font-heading text-3xl md:text-4xl font-bold gradient-text-static mb-1">
        {prefix}{val}<span className="text-xl">{suffix}</span>
      </p>
      <p className="font-sans text-xs text-muted group-hover:text-ink transition-colors">{desc}</p>
    </div>
  );
}

export default function Bio() {
  const { ref, inView } = useInView();
  const [hovered,  setHovered]  = useState<number | null>(null);
  const [jiggling, setJiggling] = useState<number | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const onSkillClick = (i: number, btn: HTMLElement) => {
    setJiggling(i);
    setTimeout(() => setJiggling(null), 600);
    burstConfetti(btn, rafRef);
  };

  return (
    <section id="bio" className="py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-2">
            Bio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink">
            A little about me ✨
          </h2>
          <p className="font-sans text-base text-muted mt-3">Good solutions are obvious in hindsight. Getting there is the fun part.</p>
        </div>

        {/* Bio row */}
        <div
          className={`grid md:grid-cols-2 gap-10 mb-16 transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Headshot */}
          <div className="relative flex items-center justify-center">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border-2 border-purple/20 shadow-xl">
              <Image
                src="/headshot.jpg"
                alt="Courtney Eisenhuth"
                width={288}
                height={288}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative bubbles */}
            <div className="absolute -top-5 -right-5 w-14 h-14 bg-purple rounded-2xl rotate-12 animate-float opacity-70 shadow-lg" />
            <div className="absolute -bottom-5 -left-5 w-10 h-10 bg-blue rounded-2xl -rotate-12 animate-float-2 opacity-70 shadow-lg" />
            <div className="absolute top-4 -left-8 w-7 h-7 bg-accent rounded-full animate-float-r0 opacity-80" />
          </div>

          {/* Bio text */}
          <div className="flex flex-col justify-center gap-5">
            <h3 className="font-heading text-2xl font-bold text-ink">
              Hey, I&apos;m Courtney! 👋
            </h3>
            <p className="font-sans text-base text-muted leading-relaxed">
              I&apos;m a <span className="font-extrabold text-purple">Senior Product Designer</span> with
              10 years of experience crafting mobile-first experiences people actually love. I
              specialize in e-commerce and retail — balancing user needs with real business outcomes.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              I&apos;ve spent the last 5+ years deeply embedded in the{" "}
              <span className="font-extrabold text-blue">American Eagle Outfitters</span> app,
              helping drive <span className="font-extrabold text-purple">40% of AEO&apos;s digital revenue</span>{" "}
              through thoughtful design of navigation, checkout, loyalty, and discovery.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              I&apos;m a systems thinker who loves a good design challenge — and yes, I&apos;ll
              probably make it a little fun too ✨
            </p>

            {/* Email chip */}
            <a
              href="mailto:clyneisenhuth@gmail.com"
              className="inline-flex items-center gap-2 self-start font-sans text-sm font-bold text-purple border-2 border-purple/30 bg-purple-pale px-4 py-2 rounded-full hover:bg-purple hover:text-white hover:border-purple transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <span>📬</span>
              clyneisenhuth@gmail.com
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-4 mb-16 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>

        {/* Skills */}
        <div
          className={`transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-heading text-2xl font-bold text-ink text-center mb-2">
            My superpowers 🦸‍♀️
          </h3>
          <p className="font-sans text-sm text-muted text-center mb-6">
            (Click them — they like it)
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((sk, i) => (
              <button
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={(e) => onSkillClick(i, e.currentTarget)}
                className={`font-sans text-sm font-semibold px-4 py-2 rounded-full border-2 transition-all duration-200 select-none ${
                  sk.hue === "purple"
                    ? "bg-purple-pale text-purple border-purple/20 hover:bg-purple hover:text-white hover:border-purple"
                    : "bg-blue-pale text-blue border-blue/20 hover:bg-blue hover:text-white hover:border-blue"
                } ${hovered === i ? "scale-110 -rotate-2 shadow-md" : "scale-100"} ${
                  jiggling === i ? "animate-wiggle" : ""
                }`}
              >
                {sk.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
