"use client";
import { useState, useEffect, useRef } from "react";

/* ── Data ── */
const projects = [
  { title: "Incentivized Reviews Strategy", year: "2025", tags: ["Strategy", "Loyalty"], link: "/case-studies/incentivized-reviews", image: "/pointsreviews_cover2.jpeg", accent: "#B47FFF" },
  { title: "App Product Reviews Redesign",  year: "2024", tags: ["Mobile", "UGC"],       link: "/case-studies/product-reviews",      image: "/appreviews_cover1.jpeg",        accent: "#00D4FF" },
  { title: "Item Level Fulfillment",         year: "2022", tags: ["Mobile", "BOPIS"],     link: "/case-studies/item-fulfillment",     image: "/ilf_cover2.jpeg",               accent: "#FF6B6B" },
  { title: "Single Account Initiative",      year: "2022", tags: ["Account", "Loyalty"],  link: "/case-studies/single-account",       image: "/singleaccount_cover1.jpeg",     accent: "#FFD93D" },
];

const skills = ["Mobile Design","E-commerce Strategy","User Research","A/B Testing","WCAG Accessibility","Conversion Optimization","Checkout Flows","Loyalty Programs","Design Systems","Navigation Design","Systems Thinking","Behavioral Data Analysis","Rapid Prototyping"];

const roles = ["Senior Product Designer","Mobile Experience Maker","UX Strategist","E-commerce Obsessive"];

/* ── Typewriter ── */
function Typewriter() {
  const [idx, setIdx]         = useState(0);
  const [text, setText]       = useState("");
  const [deleting, setDel]    = useState(false);

  useEffect(() => {
    const cur   = roles[idx];
    const speed = deleting ? 30 : 70;
    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < cur.length) setText(cur.slice(0, text.length + 1));
        else setTimeout(() => setDel(true), 1600);
      } else {
        if (text.length > 0) setText(text.slice(0, -1));
        else { setDel(false); setIdx(p => (p + 1) % roles.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span className="font-sans text-lg md:text-xl" style={{ color: "#B47FFF" }}>
      {text}<span className="animate-pulse ml-0.5" style={{ borderLeft: "2px solid #B47FFF", display: "inline-block", height: "1.2em", verticalAlign: "middle" }} />
    </span>
  );
}

/* ── Project card with tilt + glow ── */
function DarkCard({ p }: { p: typeof projects[0] }) {
  const ref               = useRef<HTMLDivElement>(null);
  const [tilt, setTilt]   = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setTilt({ x: 0, y: 0 }); }}
      onClick={() => window.location.href = p.link}
      role="link" tabIndex={0}
      onKeyDown={e => e.key === "Enter" && (window.location.href = p.link)}
      className="relative rounded-2xl overflow-hidden cursor-none group"
      style={{
        background: "#111118",
        border: `1px solid ${hover ? p.accent + "60" : "#ffffff15"}`,
        boxShadow: hover ? `0 0 40px ${p.accent}25, 0 0 80px ${p.accent}10` : "none",
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hover
          ? "transform 0.1s ease-out, box-shadow 0.3s, border-color 0.3s"
          : "transform 0.6s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s, border-color 0.4s",
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, #111118 5%, transparent 60%)` }} />
        <div className="absolute top-3 right-3 text-xs font-sans font-bold px-2.5 py-1 rounded-full" style={{ background: "#ffffff15", color: "#ffffff99", backdropFilter: "blur(8px)" }}>
          {p.year}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-lg text-white mb-2 transition-colors duration-200" style={{ color: hover ? p.accent : "white" }}>
          {p.title}
        </h3>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.map(t => (
            <span key={t} className="text-xs font-sans font-semibold px-2 py-0.5 rounded-full" style={{ background: p.accent + "20", color: p.accent }}>
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-sm font-sans font-bold transition-all duration-200" style={{ color: p.accent }}>
          View case study
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </div>
      </div>

      {/* Corner glow */}
      {hover && (
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none" style={{ background: p.accent, filter: "blur(40px)", opacity: 0.15 }} />
      )}
    </div>
  );
}

/* ── Marquee ── */
function Marquee() {
  const doubled = [...skills, ...skills];
  return (
    <div className="overflow-hidden py-5" style={{ borderTop: "1px solid #ffffff10", borderBottom: "1px solid #ffffff10" }}>
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {doubled.map((s, i) => (
          <span key={i} className="font-heading text-sm font-semibold flex-shrink-0 flex items-center gap-3" style={{ color: "#ffffff40" }}>
            <span style={{ color: "#B47FFF", fontSize: "6px" }}>◆</span>
            {s}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 28s linear infinite; }
      `}</style>
    </div>
  );
}

/* ── Main page ── */
export default function Layout1() {
  const [scrolled, setScrolled] = useState(false);
  const [visible,  setVisible]  = useState(false);

  useEffect(() => {
    setVisible(true);
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#0A0A0F", color: "#E0E0F0" }}>
      {/* Ambient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute" style={{ top: "-10%", right: "-5%", width: 600, height: 600, background: "radial-gradient(circle, #6B3FA015, transparent 70%)", borderRadius: "50%" }} />
        <div className="absolute" style={{ bottom: "10%", left: "-10%", width: 500, height: 500, background: "radial-gradient(circle, #003D5515, transparent 70%)", borderRadius: "50%" }} />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: scrolled ? "#0A0A0Fcc" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: scrolled ? "1px solid #ffffff10" : "none" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-heading font-bold text-lg" style={{ color: "#B47FFF" }}>CE ✦</span>
          <div className="hidden md:flex items-center gap-8">
            {["Work", "About", "Experience"].map(l => (
              <button key={l} onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                className="font-sans text-sm font-semibold transition-colors duration-200"
                style={{ color: "#ffffff60" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#B47FFF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#ffffff60")}
              >{l}</button>
            ))}
            <a href="mailto:courtneyeisenhuth@gmail.com" className="font-sans text-sm font-bold px-4 py-2 rounded-full transition-all duration-200"
              style={{ background: "#B47FFF20", color: "#B47FFF", border: "1px solid #B47FFF40" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#B47FFF"; (e.currentTarget as HTMLElement).style.color = "white"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#B47FFF20"; (e.currentTarget as HTMLElement).style.color = "#B47FFF"; }}
            >Say hi 👋</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-5 gap-16 items-center py-32">
          <div className={`md:col-span-3 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="font-sans text-sm font-semibold mb-4 tracking-widest uppercase" style={{ color: "#ffffff40" }}>hi, I'm</p>
            <h1 className="font-heading font-bold leading-[0.9] mb-6" style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}>
              <span style={{ background: "linear-gradient(135deg, #B47FFF, #00D4FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Court</span>
              <span style={{ color: "white" }}>ney</span>
              <br />
              <span style={{ color: "#ffffff30", fontSize: "0.65em" }}>Eisenhuth</span>
            </h1>
            <div className="mb-8 h-8">
              <Typewriter />
            </div>
            <p className="font-sans text-base leading-relaxed mb-10 max-w-lg" style={{ color: "#ffffff60" }}>
              A decade of designing digital products for how people actually shop, tap, swipe, and bail. Specializing in mobile e-commerce for retail.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                className="font-sans font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: "linear-gradient(135deg, #B47FFF, #7040CC)", color: "white", boxShadow: "0 8px 32px #B47FFF30" }}
              >See my work ✦</button>
              <a href="mailto:courtneyeisenhuth@gmail.com"
                className="font-sans font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105"
                style={{ background: "transparent", color: "#B47FFF", border: "1px solid #B47FFF40" }}
              >Get in touch</a>
            </div>
          </div>

          {/* Stats column */}
          <div className={`md:col-span-2 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex flex-col gap-4">
              {[
                { n: "10", unit: "yrs", label: "of product design", accent: "#B47FFF" },
                { n: "$20", unit: "M+", label: "revenue lift in 2025", accent: "#00D4FF" },
                { n: "15", unit: "M+", label: "customers served at AEO", accent: "#FF6B6B" },
              ].map(s => (
                <div key={s.label} className="rounded-2xl p-5 flex items-center gap-5" style={{ background: "#ffffff06", border: `1px solid ${s.accent}20` }}>
                  <p className="font-heading font-bold text-4xl flex-shrink-0" style={{ color: s.accent }}>{s.n}<span className="text-2xl">{s.unit}</span></p>
                  <p className="font-sans text-sm" style={{ color: "#ffffff50" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "#ffffff25" }}>
          <span className="font-sans text-xs tracking-widest uppercase">scroll</span>
          <div className="w-px h-12 animate-pulse" style={{ background: "linear-gradient(to bottom, #B47FFF, transparent)" }} />
        </div>
      </section>

      {/* Skills marquee */}
      <div className="relative z-10">
        <Marquee />
      </div>

      {/* Projects */}
      <section id="work" className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#B47FFF" }}>Work</p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">Selected projects</h2>
            </div>
            <p className="font-sans text-sm hidden md:block" style={{ color: "#ffffff30" }}>2022 – 2025</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map(p => <DarkCard key={p.title} p={p} />)}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl p-8 md:p-14" style={{ background: "#111118", border: "1px solid #ffffff10" }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B47FFF" }}>About</p>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">Hey, I'm Courtney 👋</h2>
                <p className="font-sans text-base leading-relaxed mb-4" style={{ color: "#ffffff60" }}>
                  I'm a <span style={{ color: "#B47FFF", fontWeight: 800 }}>Senior Product Designer</span> with 10 years of experience crafting mobile-first experiences people actually love. I specialize in e-commerce and retail.
                </p>
                <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "#ffffff60" }}>
                  I've spent 5+ years embedded in the <span style={{ color: "#00D4FF", fontWeight: 800 }}>American Eagle Outfitters</span> app, helping drive 40% of AEO's digital revenue through thoughtful design of navigation, checkout, loyalty, and discovery.
                </p>
                <a href="mailto:courtneyeisenhuth@gmail.com"
                  className="inline-flex items-center gap-2 font-sans text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
                  style={{ background: "#B47FFF20", color: "#B47FFF", border: "1px solid #B47FFF30" }}
                >
                  📬 courtneyeisenhuth@gmail.com
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <span key={s} className="font-sans text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 cursor-default hover:scale-105"
                    style={{ background: i % 3 === 0 ? "#B47FFF15" : i % 3 === 1 ? "#00D4FF15" : "#FF6B6B15", color: i % 3 === 0 ? "#B47FFF" : i % 3 === 1 ? "#00D4FF" : "#FF6B6B", border: `1px solid ${i % 3 === 0 ? "#B47FFF30" : i % 3 === 1 ? "#00D4FF30" : "#FF6B6B30"}` }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#B47FFF" }}>Experience</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-10">Where I've been</h2>
          <div className="flex flex-col gap-px" style={{ borderLeft: "1px solid #ffffff10" }}>
            {[
              { role: "Product Strategist", co: "American Eagle Outfitters", years: "2023 – 2026", color: "#B47FFF" },
              { role: "Product Designer",   co: "American Eagle Outfitters", years: "2020 – 2023", color: "#00D4FF" },
              { role: "Design Consultant",  co: "SDLC Partners",             years: "2018 – 2020", color: "#FF6B6B" },
              { role: "Product Designer",   co: "Learning Sciences Intl.",   years: "2016 – 2018", color: "#FFD93D" },
            ].map(j => (
              <div key={j.role + j.co} className="pl-8 pb-10 relative group">
                <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full -translate-x-[5px] transition-all duration-200 group-hover:scale-125" style={{ background: j.color }} />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-heading font-bold text-lg text-white mb-0.5">{j.role}</p>
                    <p className="font-sans text-sm font-semibold" style={{ color: j.color }}>{j.co}</p>
                  </div>
                  <span className="font-sans text-xs flex-shrink-0 mt-1 px-2.5 py-1 rounded-full" style={{ background: "#ffffff08", color: "#ffffff40" }}>{j.years}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6" style={{ borderTop: "1px solid #ffffff08" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-heading font-bold text-lg" style={{ color: "#B47FFF" }}>CE ✦</span>
          <p className="font-sans text-xs" style={{ color: "#ffffff25" }}>Created with Claude Code · Made with ♥ · 2026</p>
          <div className="flex gap-5">
            <a href="mailto:courtneyeisenhuth@gmail.com" className="font-sans text-sm font-semibold transition-colors duration-200" style={{ color: "#ffffff40" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#B47FFF")} onMouseLeave={e => (e.currentTarget.style.color = "#ffffff40")}>Email</a>
            <a href="https://www.linkedin.com/in/courtney-eisenhuth-8750815b/" target="_blank" rel="noopener noreferrer"
              className="font-sans text-sm font-semibold transition-colors duration-200" style={{ color: "#ffffff40" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00D4FF")} onMouseLeave={e => (e.currentTarget.style.color = "#ffffff40")}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
