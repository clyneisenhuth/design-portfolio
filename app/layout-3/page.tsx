"use client";
import { useState, useEffect, useRef } from "react";

/* ── Bold Maximalist — white bg, vivid color blocks, bento grid, big energy ── */

const CORAL  = "#FF4757";
const BLUE   = "#2563EB";
const YELLOW = "#FBBF24";
const LIME   = "#22C55E";
const INK    = "#0A0A14";

const projects = [
  { title: "Incentivized Reviews Strategy", year: "2025", stat: "300%",  statLabel: "daily review volume",        tags: ["Strategy", "Loyalty"],  link: "/case-studies/incentivized-reviews", image: "/pointsreviews_cover2.jpeg", bg: CORAL,  textDark: false },
  { title: "App Product Reviews Redesign",  year: "2024", stat: "↑",     statLabel: "form submission rates",      tags: ["Mobile", "UGC"],         link: "/case-studies/product-reviews",      image: "/appreviews_cover1.jpeg",        bg: BLUE,   textDark: false },
  { title: "Item Level Fulfillment",         year: "2022", stat: "✓",     statLabel: "validated via usability",    tags: ["BOPIS", "Research"],     link: "/case-studies/item-fulfillment",     image: "/ilf_cover2.jpeg",               bg: YELLOW, textDark: true },
  { title: "Single Account Initiative",      year: "2022", stat: "10M+",  statLabel: "customers migrated",         tags: ["Account", "Loyalty"],    link: "/case-studies/single-account",       image: "/singleaccount_cover1.jpeg",     bg: INK,    textDark: false },
];

/* ── Bento card ── */
function BentoCard({ p, large = false }: { p: typeof projects[0]; large?: boolean }) {
  const [hover, setHover] = useState(false);
  const textColor = p.textDark ? INK : "white";

  return (
    <div
      className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${large ? "md:col-span-2" : ""}`}
      style={{ background: hover ? p.bg : "white", border: `2px solid ${p.bg}`, minHeight: large ? 400 : 320, cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.location.href = p.link}
      role="link" tabIndex={0}
      onKeyDown={e => e.key === "Enter" && (window.location.href = p.link)}
    >
      {/* Image — visible on hover */}
      <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: hover ? 0.15 : 0 }}>
        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-7 h-full flex flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <span className="font-sans text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full transition-colors duration-300"
            style={{ background: hover ? (p.textDark ? "#00000015" : "#ffffff20") : p.bg + "20", color: hover ? textColor : p.bg }}>
            {p.year}
          </span>
          <div className="flex flex-wrap gap-1.5 justify-end">
            {p.tags.map(t => (
              <span key={t} className="font-sans text-xs font-semibold px-2 py-0.5 rounded-full transition-colors duration-300"
                style={{ background: hover ? (p.textDark ? "#00000015" : "#ffffff20") : "#00000008", color: hover ? textColor : INK }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-heading font-bold text-5xl md:text-6xl mb-1 transition-colors duration-300"
            style={{ color: hover ? textColor : p.bg }}>
            {p.stat}
          </p>
          <p className="font-sans text-xs font-semibold mb-4 transition-colors duration-300"
            style={{ color: hover ? (p.textDark ? "#00000070" : "#ffffff70") : "#00000050" }}>
            {p.statLabel}
          </p>
          <h3 className="font-heading font-bold text-xl leading-tight transition-colors duration-300"
            style={{ color: hover ? textColor : INK }}>
            {p.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 font-sans font-bold text-sm transition-colors duration-300"
          style={{ color: hover ? textColor : p.bg }}>
          View case study
          <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs transition-all duration-300"
            style={{ background: hover ? (p.textDark ? "#00000020" : "#ffffff25") : p.bg, color: hover ? textColor : "white" }}>→</span>
        </div>
      </div>
    </div>
  );
}

/* ── Skill pill with color pop ── */
function SkillPill({ label, i }: { label: string; i: number }) {
  const colors = [CORAL, BLUE, YELLOW, LIME];
  const c = colors[i % 4];
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      className="font-sans text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
      style={{ background: hover ? c : "white", color: hover ? (c === YELLOW ? INK : "white") : INK, border: `2px solid ${hover ? c : "#0000001A"}`, boxShadow: hover ? `0 4px 20px ${c}40` : "none" }}
    >
      {label}
    </button>
  );
}

/* ── Main ── */
export default function Layout3() {
  const [scrolled, setScrolled] = useState(false);
  const [visible,  setVisible]  = useState(false);
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  useEffect(() => {
    setVisible(true);
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const skills = ["Mobile Design","E-commerce Strategy","User Research","A/B Testing","WCAG Accessibility","Conversion Optimization","Checkout Flows","Loyalty Programs","Design Systems","Navigation Design","Systems Thinking","Behavioral Data Analysis","Rapid Prototyping"];

  return (
    <div className="min-h-screen" style={{ background: "#F8F8F8" }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ background: scrolled ? "white" : "transparent", boxShadow: scrolled ? "0 1px 0 #0000000D" : "none" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-heading font-bold text-sm text-white" style={{ background: CORAL }}>C</div>
            <span className="font-heading font-bold text-lg" style={{ color: INK }}>Courtney E.</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Work", "About", "Experience"].map(l => (
              <button key={l} onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                className="font-sans text-sm font-bold transition-colors duration-200 hover:text-[#FF4757]" style={{ color: INK }}>{l}</button>
            ))}
            <a href="mailto:courtneyeisenhuth@gmail.com"
              className="font-sans text-sm font-bold px-5 py-2.5 rounded-full text-white transition-all duration-200 hover:scale-105"
              style={{ background: CORAL }}>Say hi 👋</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="pt-28 pb-0 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Top row: big name + intro */}
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex flex-wrap items-end gap-6 mb-0">
              <h1 className="font-heading font-bold leading-none" style={{ fontSize: "clamp(4rem, 12vw, 10rem)", color: INK }}>
                Courtney
              </h1>
              <div className="mb-4 flex flex-col gap-3">
                <span className="font-sans text-sm font-bold px-4 py-2 rounded-full text-white" style={{ background: CORAL }}>Senior Product Designer</span>
                <span className="font-sans text-sm font-bold px-4 py-2 rounded-full text-white" style={{ background: BLUE }}>Mobile E-commerce</span>
              </div>
            </div>

            {/* Color bar + tagline */}
            <div className="flex gap-1 mb-8" style={{ height: 8 }}>
              {[CORAL, BLUE, YELLOW, LIME, CORAL, BLUE].map((c, i) => (
                <div key={i} className="flex-1 rounded-full" style={{ background: c }} />
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 pb-20">
              <p className="font-sans text-lg leading-relaxed md:col-span-2" style={{ color: "#0A0A1470" }}>
                10 years of designing digital products for how people <em>actually</em> shop, tap, swipe, and bail. Specializing in mobile e-commerce for retail — checkout, loyalty, navigation, and discovery.
              </p>
              <div className="flex flex-col gap-3">
                <button onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                  className="font-sans font-bold py-3.5 rounded-2xl text-white transition-all duration-200 hover:scale-105 active:scale-95 text-center"
                  style={{ background: INK }}>See my work ✦</button>
                <a href="mailto:courtneyeisenhuth@gmail.com"
                  className="font-sans font-bold py-3.5 rounded-2xl transition-all duration-200 hover:scale-105 text-center"
                  style={{ background: "white", color: INK, border: `2px solid #0000001A` }}>Get in touch 📬</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div style={{ background: INK }}>
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-3 divide-x" style={{ divideColor: "#ffffff15" }}>
          {[
            { n: "10", unit: " yrs", label: "Experience", accent: CORAL },
            { n: "$20", unit: "M+", label: "Revenue lift in 2025", accent: YELLOW },
            { n: "15", unit: "M+", label: "Customers at AEO", accent: LIME },
          ].map(s => (
            <div key={s.label} className="text-center px-6">
              <p className="font-heading font-bold text-4xl md:text-5xl mb-1" style={{ color: s.accent }}>{s.n}<span className="text-2xl">{s.unit}</span></p>
              <p className="font-sans text-xs" style={{ color: "#ffffff60" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects bento */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-widest mb-1" style={{ color: CORAL }}>Work</p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl" style={{ color: INK }}>From brief to build 💻</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <BentoCard p={projects[0]} large />
            <BentoCard p={projects[1]} />
            <BentoCard p={projects[2]} />
            <BentoCard p={projects[3]} />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Bio card */}
            <div className="rounded-3xl p-8 md:p-10" style={{ background: BLUE, color: "white" }}>
              <p className="font-sans text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#ffffff70" }}>About me</p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl leading-tight mb-5">Hey, I'm Courtney! 👋</h2>
              <p className="font-sans text-base leading-relaxed mb-4" style={{ color: "#ffffffcc" }}>
                Senior Product Designer with 10 years of experience crafting mobile-first experiences people actually love. I specialize in e-commerce and retail, balancing user needs with real business outcomes.
              </p>
              <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "#ffffffcc" }}>
                I've spent 5+ years embedded in the <strong>American Eagle Outfitters</strong> app, helping drive 40% of AEO's digital revenue through thoughtful design of navigation, checkout, loyalty, and discovery.
              </p>
              <a href="mailto:courtneyeisenhuth@gmail.com"
                className="inline-flex items-center gap-2 font-sans text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
                style={{ background: "white", color: BLUE }}>📬 Get in touch</a>
            </div>

            {/* Skills card */}
            <div className="rounded-3xl p-8 md:p-10" style={{ background: "white" }}>
              <p className="font-sans text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#00000050" }}>Skills</p>
              <h3 className="font-heading font-bold text-2xl mb-6" style={{ color: INK }}>Superpowers 🦸‍♀️</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s, i) => <SkillPill key={s} label={s} i={i} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold uppercase tracking-widest mb-1" style={{ color: CORAL }}>Experience</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-10" style={{ color: INK }}>Where I've been 🗺️</h2>
          <div className="flex flex-col gap-3">
            {[
              { role: "Product Strategist", co: "American Eagle Outfitters", years: "2023–2026", color: CORAL,  tags: ["Strategy", "Research", "A/B Testing"] },
              { role: "Product Designer",   co: "American Eagle Outfitters", years: "2020–2023", color: BLUE,   tags: ["Mobile Design", "E-commerce", "iOS/Android"] },
              { role: "Design Consultant",  co: "SDLC Partners LLC",         years: "2018–2020", color: LIME,   tags: ["Consulting", "Healthcare", "UX/UI"] },
              { role: "Product Designer",   co: "Learning Sciences Intl.",   years: "2016–2018", color: YELLOW, tags: ["EdTech", "UX/UI", "SaaS"] },
            ].map(j => (
              <div key={j.role + j.co}
                className="rounded-2xl p-5 flex flex-wrap items-center gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: "#F8F8F8", border: "2px solid #0000000A" }}>
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: j.color }} />
                <div className="flex-1 min-w-0">
                  <span className="font-heading font-bold text-lg mr-2" style={{ color: INK }}>{j.role}</span>
                  <span className="font-sans text-sm font-semibold" style={{ color: j.color }}>{j.co}</span>
                </div>
                <span className="font-sans text-xs font-bold px-3 py-1 rounded-full" style={{ background: "white", color: "#00000060", border: "1px solid #0000001A" }}>{j.years}</span>
                <div className="flex flex-wrap gap-1.5 w-full pl-7">
                  {j.tags.map(t => <span key={t} className="font-sans text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: j.color + "20", color: j.color }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-20 px-6 text-center" style={{ background: CORAL }}>
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-sm font-bold uppercase tracking-widest mb-4 text-white opacity-70">Ready to work together?</p>
          <h2 className="font-heading font-bold text-5xl md:text-7xl text-white mb-8 leading-tight">Let's make something great.</h2>
          <a href="mailto:courtneyeisenhuth@gmail.com"
            className="inline-flex items-center gap-3 font-sans font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
            style={{ background: "white", color: CORAL }}>📬 courtneyeisenhuth@gmail.com</a>
          <p className="font-sans text-xs mt-10 text-white opacity-40">Created with Claude Code · Made with ♥ · 2026</p>
        </div>
      </footer>
    </div>
  );
}
