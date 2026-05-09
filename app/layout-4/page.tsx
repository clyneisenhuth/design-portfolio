"use client";
import { useState, useEffect, useRef, useCallback } from "react";

/* ─────────────────────────────────────────────
   Constants
───────────────────────────────────────────── */
const TRAIL_EMOJIS  = ["✨","🎨","💡","📱","🛍️","🦋","⭐","🎯","💜","🚀","🌈","🎪"];
const SCRAMBLE_CHARS = "!@#$%^&*<>?+=—[]{}~";
const SKILL_COLORS  = [
  { bg: "#FEF3C7", text: "#92400E", border: "#FCD34D" },
  { bg: "#EDE9FE", text: "#4C1D95", border: "#C4B5FD" },
  { bg: "#FCE7F3", text: "#831843", border: "#F9A8D4" },
  { bg: "#DCFCE7", text: "#14532D", border: "#86EFAC" },
  { bg: "#DBEAFE", text: "#1E3A8A", border: "#93C5FD" },
  { bg: "#FFE4E6", text: "#881337", border: "#FDA4AF" },
];
const ROTS = ["-3deg","2.5deg","-1.5deg","3deg","1deg","-2.5deg","2deg","-0.5deg","1.5deg","-3.5deg","0.5deg","-2deg","3.5deg"];
const CARD_ROTS = [-2.5, 1.8, -1.3, 2.2];

const projects = [
  { title: "Incentivized Reviews", year: "2025", emoji: "⭐", link: "/case-studies/incentivized-reviews", image: "/pointsreviews_cover2.jpeg", tape: "#FCD34D" },
  { title: "Product Reviews Redesign", year: "2024", emoji: "🖼️", link: "/case-studies/product-reviews",      image: "/appreviews_cover1.jpeg",        tape: "#F9A8D4" },
  { title: "Item Fulfillment",          year: "2022", emoji: "📦", link: "/case-studies/item-fulfillment",     image: "/ilf_cover2.jpeg",               tape: "#93C5FD" },
  { title: "Single Account",            year: "2022", emoji: "💳", link: "/case-studies/single-account",       image: "/singleaccount_cover1.jpeg",     tape: "#86EFAC" },
];

const skills = ["Mobile Design","E-commerce Strategy","User Research","A/B Testing","WCAG Accessibility","Conversion Optimization","Checkout Flows","Loyalty Programs","Design Systems","Navigation Design","Systems Thinking","Behavioral Data Analysis","Rapid Prototyping"];

/* ─────────────────────────────────────────────
   Hooks
───────────────────────────────────────────── */
function useScramble(original: string) {
  const [text, setText] = useState(original);

  const scramble = useCallback(() => {
    let iter = 0;
    const id = setInterval(() => {
      setText(
        original.split("").map((ch, i) =>
          i < iter ? original[i] : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        ).join("")
      );
      iter += 0.35;
      if (iter > original.length) { clearInterval(id); setText(original); }
    }, 28);
  }, [original]);

  return { text, scramble };
}

/* ─────────────────────────────────────────────
   Emoji cursor trail
───────────────────────────────────────────── */
function EmojiTrail() {
  const [drops, setDrops] = useState<{ id: number; x: number; y: number; emoji: string }[]>([]);
  const counter = useRef(0);
  const lastMs  = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMs.current < 130) return;
      lastMs.current = now;
      const emoji = TRAIL_EMOJIS[Math.floor(Math.random() * TRAIL_EMOJIS.length)];
      const id    = counter.current++;
      setDrops(d => [...d.slice(-10), { id, x: e.clientX, y: e.clientY, emoji }]);
      setTimeout(() => setDrops(d => d.filter(p => p.id !== id)), 1100);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      {drops.map(d => (
        <span key={d.id} className="absolute text-xl select-none" style={{
          left: d.x - 12, top: d.y - 12,
          animation: "trail-float 1.1s ease-out forwards",
        }}>{d.emoji}</span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Magnetic button
───────────────────────────────────────────── */
function MagneticBtn({ children, onClick, className, style }: {
  children: React.ReactNode; onClick?: () => void;
  className?: string; style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const isHover = useRef(false);

  const onMove = (e: React.MouseEvent) => {
    const r  = ref.current!.getBoundingClientRect();
    const cx = r.left + r.width  / 2;
    const cy = r.top  + r.height / 2;
    setXY({ x: (e.clientX - cx) * 0.3, y: (e.clientY - cy) * 0.3 });
  };
  const onLeave = () => { isHover.current = false; setXY({ x: 0, y: 0 }); };

  return (
    <button ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} onClick={onClick}
      className={className}
      style={{
        ...style,
        transform: `translate(${xy.x}px, ${xy.y}px)`,
        transition: xy.x === 0 && xy.y === 0
          ? "transform 0.55s cubic-bezier(0.34,1.56,0.64,1)"
          : "transform 0.08s linear",
      }}>
      {children}
    </button>
  );
}

/* ─────────────────────────────────────────────
   SVG blob (CSS animated)
───────────────────────────────────────────── */
function Blob({ color, className }: { color: string; className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} style={{ animation: "blob-shape 9s ease-in-out infinite" }}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path fill={color}
          d="M47,-62.3C59.9,-53.4,68.5,-37.5,72.1,-20.7C75.7,-3.9,74.3,13.8,67.2,28.6C60.2,43.4,47.5,55.4,33,63.3C18.5,71.2,2.1,74.9,-14.2,72.5C-30.5,70,-46.7,61.2,-57.3,48C-67.9,34.8,-72.9,17.4,-71.6,1C-70.3,-15.4,-62.6,-30.8,-51.7,-40.5C-40.8,-50.2,-26.7,-54.2,-12.4,-59.4C1.9,-64.6,34.1,-71.2,47,-62.3Z"
          transform="translate(100 100)" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Polaroid project card
───────────────────────────────────────────── */
function PolaroidCard({ p, i }: { p: typeof projects[0]; i: number }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={() => { window.location.href = p.link; }}
      role="link" tabIndex={0} onKeyDown={e => e.key === "Enter" && (window.location.href = p.link)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="cursor-none relative"
      style={{
        transform: hover
          ? "rotate(0deg) translateY(-18px) scale(1.04)"
          : `rotate(${CARD_ROTS[i]}deg)`,
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        zIndex: hover ? 10 : 1,
      }}
    >
      {/* Tape strip */}
      <div className="absolute -top-4 left-1/2 z-10 rounded-sm opacity-85"
        style={{ width: 52, height: 22, background: p.tape, transform: "translateX(-50%) rotate(-1.5deg)", backdropFilter: "blur(2px)" }} />

      {/* Polaroid */}
      <div className="bg-white rounded-sm"
        style={{ padding: "10px 10px 44px", boxShadow: hover ? "0 24px 64px #00000022" : "0 6px 20px #00000015" }}>
        <div className="overflow-hidden rounded-sm" style={{ height: 200, background: "#f0f0f0" }}>
          <img src={p.image} alt={p.title} className="w-full h-full object-cover"
            style={{ transform: hover ? "scale(1.08)" : "scale(1)", transition: "transform 0.5s ease" }} />
        </div>
        <div className="pt-3 text-center">
          <p style={{ fontFamily: "var(--font-caveat, cursive)", fontSize: "1.15rem", color: "#374151", lineHeight: 1.3 }}>
            {p.title}
          </p>
          <p className="mt-1" style={{ fontFamily: "var(--font-caveat, cursive)", fontSize: "0.9rem", color: "#9CA3AF" }}>
            {p.emoji} {p.year}
          </p>
        </div>
      </div>

      {/* Hover arrow */}
      {hover && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-sans text-xs font-bold text-gray-400 flex items-center gap-1">
          view <span>→</span>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Sticker skill tag
───────────────────────────────────────────── */
function StickerTag({ label, i }: { label: string; i: number }) {
  const c = SKILL_COLORS[i % SKILL_COLORS.length];
  const [hover, setHover] = useState(false);
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="inline-block font-sans text-sm font-bold px-4 py-2 rounded-lg select-none cursor-default"
      style={{
        background: c.bg, color: c.text,
        border: `2px solid ${c.border}`,
        boxShadow: hover ? `3px 3px 0 ${c.border}` : `2px 2px 0 ${c.border}90`,
        transform: hover ? "rotate(0deg) scale(1.1)" : `rotate(${ROTS[i % ROTS.length]})`,
        transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s",
      }}
    >{label}</span>
  );
}

/* ─────────────────────────────────────────────
   SVG helpers
───────────────────────────────────────────── */
function WavyDivider({ topColor, bottomColor }: { topColor: string; bottomColor: string }) {
  return (
    <div style={{ background: bottomColor, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", height: 56 }}>
        <path d="M0,35 C180,70 360,0 540,35 C720,70 900,0 1080,35 C1260,70 1380,14 1440,35 L1440,0 L0,0 Z" fill={topColor} />
      </svg>
    </div>
  );
}

function DoodleUnderline({ width = 300, color = "#8B5CF6" }: { width?: number; color?: string }) {
  return (
    <svg width={width} height={14} viewBox={`0 0 ${width} 14`} fill="none" style={{ display: "block" }}>
      <path
        d={`M6,9 Q${width * 0.25},3 ${width * 0.5},9 Q${width * 0.75},15 ${width - 6},7`}
        stroke={color} strokeWidth={3} strokeLinecap="round" fill="none"
        style={{ strokeDasharray: width * 1.1, strokeDashoffset: 0 }}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Scrolling stat counter
───────────────────────────────────────────── */
function CounterStat({ n, unit, label, color }: { n: number; unit: string; label: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) { setStarted(true); obs.disconnect(); } }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let cur = 0;
    const step = n / 55;
    const id = setInterval(() => {
      cur = Math.min(cur + step, n);
      setVal(Math.round(cur));
      if (cur >= n) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [started, n]);

  return (
    <div ref={ref} className="text-center rounded-3xl p-7 hover:-translate-y-2 transition-transform duration-300"
      style={{ background: "white", boxShadow: `0 4px 28px ${color}18`, border: `2px solid ${color}25` }}>
      <p className="font-heading font-bold text-5xl mb-1" style={{ color }}>
        {val}<span className="text-3xl">{unit}</span>
      </p>
      <p className="font-sans text-xs text-gray-400">{label}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main page
───────────────────────────────────────────── */
export default function Layout4() {
  const [visible, setVisible] = useState(false);
  const { text: nameText, scramble: scrambleName } = useScramble("Courtney");

  useEffect(() => { setVisible(true); }, []);

  return (
    <div className="min-h-screen bg-white" style={{ cursor: "none" }}>
      <EmojiTrail />

      {/* Keyframes */}
      <style>{`
        @keyframes trail-float {
          from { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
          to   { opacity: 0; transform: translateY(-55px) scale(0.5) rotate(15deg); }
        }
        @keyframes blob-shape {
          0%,100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25%      { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50%      { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
          75%      { border-radius: 60% 40% 60% 30% / 70% 30% 40% 60%; }
        }
        @keyframes marquee-l4 {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes wiggle-slow {
          0%,100% { transform: rotate(-2deg); }
          50%     { transform: rotate(2deg); }
        }
        @keyframes bob {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-10px); }
        }
      `}</style>

      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between"
        style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: "2px dashed #E5E7EB" }}>
        <span className="font-heading font-bold text-xl" style={{ color: "#1A1207" }}>✦ CE</span>
        <div className="hidden md:flex items-center gap-8">
          {[["Work","work"],["About","about"],["Experience","exp"]].map(([label, id]) => (
            <button key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
              className="font-sans text-sm font-bold transition-transform hover:scale-110"
              style={{ color: "#6B7280" }}>
              {label}
            </button>
          ))}
          <a href="mailto:courtneyeisenhuth@gmail.com"
            className="font-sans text-sm font-bold px-5 py-2.5 rounded-full hover:scale-105 transition-transform"
            style={{ background: "#1A1207", color: "white" }}>
            Say hi! 👋
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">

        {/* Blobs */}
        <Blob color="#EDE9FE" className="absolute w-80 h-80 opacity-70" style={{ top: "5%", right: "3%" } as any} />
        <Blob color="#DBEAFE" className="absolute w-56 h-56 opacity-50" style={{ bottom: "10%", left: "2%" } as any} />

        {/* Floating emoji stickers */}
        {([
          { e: "📱", t: "22%", l: "7%",  rot: "-12deg", dur: "4s" },
          { e: "🎨", t: "18%", r: "9%",  rot: "9deg",   dur: "5s" },
          { e: "✨", t: "68%", l: "5%",  rot: "6deg",   dur: "4.5s" },
          { e: "💡", t: "72%", r: "7%",  rot: "-7deg",  dur: "5.5s" },
          { e: "🛍️", t: "44%", l: "2%", rot: "14deg",  dur: "6s" },
          { e: "🚀", t: "35%", r: "4%",  rot: "-10deg", dur: "4.8s" },
        ] as any[]).map(s => (
          <div key={s.e} className="absolute text-4xl pointer-events-none select-none hidden md:block"
            style={{ top: s.t, left: s.l, right: s.r, transform: `rotate(${s.rot})`, animation: `bob ${s.dur} ease-in-out infinite` }}>
            {s.e}
          </div>
        ))}

        {/* Main content */}
        <div className={`text-center relative z-10 max-w-4xl transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          <p className="font-sans text-sm font-bold uppercase tracking-[0.25em] mb-6" style={{ color: "#9CA3AF" }}>
            hey there 👋 — I'm
          </p>

          {/* Scramble name */}
          <h1
            onMouseEnter={scrambleName}
            className="font-heading font-bold leading-none mb-1 relative inline-block select-none"
            style={{ fontSize: "clamp(5rem, 16vw, 11rem)", color: "#1A1207", letterSpacing: "-0.02em" }}
          >
            {nameText}
            {/* Wobbly SVG underline */}
            <span className="absolute left-0 -bottom-3 w-full flex justify-center">
              <DoodleUnderline width={420} color="#8B5CF6" />
            </span>
          </h1>

          <h2 className="font-heading font-bold mt-5 mb-8" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#9CA3AF", letterSpacing: "-0.01em" }}>
            Eisenhuth
          </h2>

          {/* Role pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {[
              { label: "Senior Product Designer", bg: "#8B5CF6", color: "white" },
              { label: "Mobile E-commerce",       bg: "#1A1207", color: "white" },
              { label: "10 Years Experience",      bg: "#FEF3C7", color: "#92400E" },
            ].map(tag => (
              <span key={tag.label} className="font-sans text-sm font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform"
                style={{ background: tag.bg, color: tag.color }}>
                {tag.label}
              </span>
            ))}
          </div>

          <p className="font-sans text-lg leading-relaxed max-w-lg mx-auto mb-10" style={{ color: "#6B7280" }}>
            A decade of designing digital products for how people <em>actually</em> shop, tap, swipe, and bail.
          </p>

          {/* Magnetic CTA */}
          <MagneticBtn
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="font-sans font-bold text-lg px-10 py-5 rounded-2xl text-white hover:shadow-2xl active:scale-95"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)", boxShadow: "0 8px 40px #8B5CF650" }}
          >
            See my work ✦
          </MagneticBtn>

          {/* Hover hint */}
          <p className="font-sans text-xs mt-4" style={{ color: "#D1D5DB" }}>
            ↑ hover the button · hover my name ↑
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "#D1D5DB" }}>
          <span className="font-sans text-xs uppercase tracking-widest">scroll</span>
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="9" r="2.5" fill="currentColor" style={{ animation: "bob 1.5s ease-in-out infinite" }} />
          </svg>
        </div>
      </section>

      {/* ── Marquee band ── */}
      <div className="overflow-hidden py-4" style={{ background: "#1A1207" }}>
        <div className="flex gap-10 whitespace-nowrap" style={{ animation: "marquee-l4 22s linear infinite" }}>
          {[...Array(2)].flatMap(() =>
            ["Mobile Design ✦","E-commerce ✦","User Research ✦","iOS & Android ✦","Loyalty UX ✦","Checkout Flows ✦","A/B Testing ✦","Design Systems ✦"]
              .map((s, i) => <span key={s + i} className="font-heading text-sm font-semibold flex-shrink-0" style={{ color: "#ffffff70" }}>{s}</span>)
          )}
        </div>
      </div>

      {/* ── Work ── */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-sans text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#9CA3AF" }}>Selected Work</p>
            <div className="inline-block relative">
              <h2 className="font-heading font-bold text-5xl md:text-6xl" style={{ color: "#1A1207" }}>
                From brief to build 💻
              </h2>
              <div className="mt-1 flex justify-center">
                <DoodleUnderline width={500} color="#FBBF24" />
              </div>
            </div>
            <p className="font-sans text-sm mt-4" style={{ color: "#9CA3AF" }}>hover the cards</p>
          </div>

          {/* Polaroid grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 pb-8">
            {projects.map((p, i) => <PolaroidCard key={p.title} p={p} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── Wavy transition ── */}
      <WavyDivider topColor="white" bottomColor="#F5F3FF" />

      {/* ── About ── */}
      <section id="about" className="py-24 px-6" style={{ background: "#F5F3FF" }}>
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-8xl block mb-5 select-none" style={{ animation: "wiggle-slow 4s ease-in-out infinite" }}>👩‍💻</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: "#1A1207" }}>
              A little about me ✨
            </h2>
            <p className="font-sans text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#6B7280" }}>
              I'm a <strong style={{ color: "#8B5CF6" }}>Senior Product Designer</strong> with 10 years of experience
              crafting mobile-first e-commerce experiences. 5+ years embedded in the AEO app, helping drive 40% of
              digital revenue through checkout, loyalty, navigation, and discovery.
            </p>
          </div>

          {/* Stat counters */}
          <div className="grid grid-cols-3 gap-5 mb-14">
            <CounterStat n={10}  unit=" yrs" label="of product design"        color="#8B5CF6" />
            <CounterStat n={20}  unit="M+"   label="revenue lift in 2025"     color="#F59E0B" />
            <CounterStat n={15}  unit="M+"   label="customers reached at AEO" color="#10B981" />
          </div>

          {/* Sticker skills corkboard */}
          <div className="rounded-3xl p-8 md:p-10" style={{ background: "#FAF7F0", border: "2px dashed #E5E7EB" }}>
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-center mb-6" style={{ color: "#9CA3AF" }}>
              superpowers 🦸‍♀️ — hover them
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((s, i) => <StickerTag key={s} label={s} i={i} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── Wavy transition ── */}
      <WavyDivider topColor="#F5F3FF" bottomColor="white" />

      {/* ── Experience ── */}
      <section id="exp" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="font-sans text-xs font-bold uppercase tracking-widest mb-2 text-center" style={{ color: "#9CA3AF" }}>Experience</p>
            <div className="relative inline-block w-full text-center">
              <h2 className="font-heading font-bold text-4xl md:text-5xl" style={{ color: "#1A1207" }}>
                Where I've been 🗺️
              </h2>
            </div>
          </div>

          {/* Dashed timeline */}
          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-0" style={{
              borderLeft: "2.5px dashed #C4B5FD",
            }} />
            {[
              { role: "Product Strategist", co: "American Eagle Outfitters", years: "2023–2026", emoji: "🦅", color: "#8B5CF6" },
              { role: "Product Designer",   co: "American Eagle Outfitters", years: "2020–2023", emoji: "📱", color: "#3B82F6" },
              { role: "Design Consultant",  co: "SDLC Partners",             years: "2018–2020", emoji: "🔧", color: "#10B981" },
              { role: "Product Designer",   co: "Learning Sciences Intl.",   years: "2016–2018", emoji: "📚", color: "#F59E0B" },
            ].map((j, i) => (
              <div key={i} className="pl-16 pb-9 relative group">
                {/* Node */}
                <div className="absolute left-3.5 top-0 w-7 h-7 rounded-full flex items-center justify-center text-sm -translate-x-1/2 transition-transform duration-200 group-hover:scale-125 group-hover:-rotate-12"
                  style={{ background: "white", border: `2.5px solid ${j.color}`, boxShadow: `0 0 0 5px ${j.color}18` }}>
                  {j.emoji}
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  style={{ border: "2px solid #F3F4F6" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = j.color + "50"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#F3F4F6"; }}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-heading font-bold text-lg" style={{ color: "#1A1207" }}>{j.role}</p>
                      <p className="font-sans text-sm font-semibold mt-0.5" style={{ color: j.color }}>{j.co}</p>
                    </div>
                    <span className="font-sans text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0"
                      style={{ background: j.color + "15", color: j.color }}>{j.years}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <footer className="relative overflow-hidden py-24 px-6 text-center" style={{ background: "#1A1207" }}>
        {/* Background stars */}
        {([
          { t: "12%", l: "7%",  sz: 28, c: "#FBBF24", dur: "9s"  },
          { t: "72%", l: "4%",  sz: 18, c: "#A78BFA", dur: "13s" },
          { t: "18%", r: "6%",  sz: 22, c: "#F9A8D4", dur: "11s" },
          { t: "68%", r: "5%",  sz: 32, c: "#6EE7B7", dur: "15s" },
          { t: "45%", l: "14%", sz: 14, c: "#93C5FD", dur: "8s"  },
          { t: "38%", r: "14%", sz: 16, c: "#FCA5A5", dur: "10s" },
        ] as any[]).map((s, i) => (
          <svg key={i} width={s.sz} height={s.sz} viewBox="0 0 24 24" fill={s.c}
            className="absolute pointer-events-none"
            style={{ top: s.t, left: s.l, right: s.r, opacity: 0.7, animation: `wiggle-slow ${s.dur} ease-in-out infinite alternate` }}>
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
        ))}

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: "#6B7280" }}>
            Let's collaborate ✦
          </p>

          {/* Big quirky heading in Caveat */}
          <h2 className="font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-caveat, cursive)", fontSize: "clamp(3rem, 9vw, 6rem)", color: "white" }}>
            Let's make something{" "}
            <span style={{ color: "#FBBF24", textDecoration: "underline wavy #FBBF24" }}>great.</span>
          </h2>

          {/* Hand-drawn arrow pointing down to button */}
          <div className="flex justify-center mb-4">
            <svg width="50" height="52" viewBox="0 0 50 52" fill="none">
              <path d="M8,6 Q12,28 36,40" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M28,44 L36,40 L31,32" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>

          <a href="mailto:courtneyeisenhuth@gmail.com"
            className="inline-flex items-center gap-3 font-sans font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: "#8B5CF6", color: "white", boxShadow: "0 8px 40px #8B5CF650" }}>
            📬 courtneyeisenhuth@gmail.com
          </a>

          <p className="font-sans text-xs mt-14" style={{ color: "#374151" }}>
            Created with Claude Code · Made with ♥ · 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
