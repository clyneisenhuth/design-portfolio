"use client";
import { useState, useEffect, useRef } from "react";

/* ── Soft Editorial — warm cream, big typography, alternating project rows ── */

const projects = [
  { title: "Incentivized Reviews Strategy", year: "2025", desc: "Driving review participation through loyalty without compromising authenticity. Grew daily review volume by 300% across the AE + Aerie catalog.", tags: ["Strategy", "Loyalty", "Research"], link: "/case-studies/incentivized-reviews", image: "/pointsreviews_cover2.jpeg", num: "01" },
  { title: "App Product Reviews Redesign",  year: "2024", desc: "End-to-end redesign of the AE + Aerie mobile reviews experience — photo carousels, submission flows, and review UI rebuilt from scratch.", tags: ["Mobile", "UI Design", "UGC"],       link: "/case-studies/product-reviews",      image: "/appreviews_cover1.jpeg",        num: "02" },
  { title: "Item Level Fulfillment",         year: "2022", desc: "Concept design and usability research for mixed-cart fulfillment — a feature that never shipped but moved organizational understanding forward.", tags: ["Mobile", "BOPIS", "Research"],     link: "/case-studies/item-fulfillment",     image: "/ilf_cover2.jpeg",               num: "03" },
  { title: "Single Account Initiative",      year: "2022", desc: "Rebuilt account creation and loyalty enrollment during a full platform migration, designing paths for 10M+ existing customers.", tags: ["Account", "Loyalty", "Mobile"],  link: "/case-studies/single-account",       image: "/singleaccount_cover1.jpeg",     num: "04" },
];

const skills = ["Mobile Design (iOS/Android)","E-commerce Strategy","User Research","A/B Testing","WCAG Accessibility","Conversion Optimization","Checkout Flows","Loyalty Programs","Design Systems","Navigation Design","Systems Thinking","Behavioral Data Analysis"];

/* ── Alternating project row ── */
function ProjectRow({ p, i }: { p: typeof projects[0]; i: number }) {
  const ref                 = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hover, setHover]   = useState(false);
  const flip                = i % 2 === 1;

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`grid md:grid-cols-2 gap-0 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ borderBottom: "1px solid #1A120720" }}>

      {/* Image — flips on odd rows */}
      <div className={`relative overflow-hidden ${flip ? "md:order-2" : ""}`} style={{ minHeight: 360 }}>
        <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hover ? "scale(1.05)" : "scale(1)" }} />
        <div className="absolute inset-0 transition-opacity duration-500" style={{ background: "#F7F4EF", opacity: hover ? 0 : 0.15 }} />
        <div className="absolute top-5 left-5 font-heading font-bold text-7xl leading-none select-none" style={{ color: "#ffffff30", mixBlendMode: "overlay" }}>{p.num}</div>
      </div>

      {/* Text */}
      <div className={`flex flex-col justify-center p-10 md:p-14 ${flip ? "md:order-1" : ""}`}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className="flex items-center gap-4 mb-5">
          <span className="font-sans text-xs font-bold tracking-widest uppercase" style={{ color: "#8B7355" }}>{p.year}</span>
          <div className="h-px flex-1" style={{ background: "#1A120715" }} />
        </div>
        <h3 className="font-heading font-bold text-3xl md:text-4xl mb-4 leading-tight" style={{ color: "#1A1207" }}>
          {p.title}
        </h3>
        <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#5C4A2A" }}>{p.desc}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {p.tags.map(t => (
            <span key={t} className="font-sans text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#1A120710", color: "#8B7355" }}>{t}</span>
          ))}
        </div>
        <a href={p.link}
          className="inline-flex items-center gap-3 font-sans font-bold text-sm self-start transition-all duration-200 group"
          style={{ color: "#1A1207" }}>
          <span className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-14"
            style={{ background: "#1A1207", color: "white" }}>→</span>
          View case study
        </a>
      </div>
    </div>
  );
}

/* ── Main ── */
export default function Layout2() {
  const [scrolled, setScrolled] = useState(false);
  const [visible,  setVisible]  = useState(false);

  useEffect(() => {
    setVisible(true);
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#F7F4EF", color: "#1A1207" }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ background: scrolled ? "#F7F4EFee" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid #1A120712" : "none" }}>
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <span className="font-heading font-bold text-xl" style={{ color: "#1A1207" }}>Courtney Eisenhuth</span>
          <div className="hidden md:flex items-center gap-10">
            {["Work", "About", "Experience"].map(l => (
              <button key={l} onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                className="font-sans text-sm font-semibold transition-opacity duration-200 hover:opacity-60" style={{ color: "#1A1207" }}>{l}</button>
            ))}
            <a href="mailto:courtneyeisenhuth@gmail.com"
              className="font-sans text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-80"
              style={{ background: "#1A1207", color: "#F7F4EF" }}>Say hi 👋</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="pt-32 pb-20 px-8 md:px-16" style={{ borderBottom: "1px solid #1A120715" }}>
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="font-sans text-sm font-semibold tracking-widest uppercase mb-8" style={{ color: "#8B7355" }}>Product Designer — 10 years</p>

            <h1 className="font-heading font-bold leading-[0.88] mb-10" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", color: "#1A1207" }}>
              Designing<br />
              <span style={{ WebkitTextStroke: "2px #1A1207", color: "transparent" }}>mobile</span>{" "}
              <span style={{ color: "#C4853A" }}>e-commerce</span><br />
              people love.
            </h1>

            <div className="grid md:grid-cols-3 gap-8 pt-10" style={{ borderTop: "1px solid #1A120715" }}>
              <p className="font-sans text-base leading-relaxed md:col-span-2" style={{ color: "#5C4A2A" }}>
                I'm <strong style={{ color: "#1A1207" }}>Courtney Eisenhuth</strong>, a Senior Product Designer with a decade of experience at the intersection of user behavior, business outcomes, and beautiful product. Currently: Mobile Design Systems at PNC Bank.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { n: "10 yrs", label: "Experience" },
                  { n: "$20M+", label: "Revenue lift (2025)" },
                  { n: "15M+", label: "Customers" },
                ].map(s => (
                  <div key={s.label} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid #1A120712" }}>
                    <span className="font-sans text-xs uppercase tracking-widest" style={{ color: "#8B7355" }}>{s.label}</span>
                    <span className="font-heading font-bold text-lg" style={{ color: "#1A1207" }}>{s.n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
          <p className="font-sans text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#8B7355" }}>Selected Work</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-12" style={{ color: "#1A1207" }}>Case studies</h2>
        </div>
        <div style={{ borderTop: "1px solid #1A120715" }}>
          {projects.map((p, i) => <ProjectRow key={p.title} p={p} i={i} />)}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-8 md:px-16" style={{ background: "#1A1207" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#C4853A" }}>About me</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight mb-8" style={{ color: "#F7F4EF" }}>
              Systems thinker.<br />
              <span style={{ color: "#C4853A" }}>Story</span> teller.<br />
              Problem solver.
            </h2>
            <p className="font-sans text-base leading-relaxed mb-4" style={{ color: "#F7F4EFaa" }}>
              I've spent the last 5+ years deeply embedded in the American Eagle Outfitters app, helping drive 40% of AEO's digital revenue through design of navigation, checkout, loyalty, and discovery.
            </p>
            <p className="font-sans text-base leading-relaxed mb-10" style={{ color: "#F7F4EFaa" }}>
              I'm a systems thinker who loves a good design challenge — and yes, I'll probably make it a little fun too ✨
            </p>
            <a href="mailto:courtneyeisenhuth@gmail.com"
              className="inline-flex items-center gap-2 font-sans text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
              style={{ background: "#C4853A", color: "white" }}>📬 Get in touch</a>
          </div>
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#F7F4EF50" }}>Skills & Expertise</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <span key={s} className="font-sans text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 cursor-default"
                  style={{ background: i % 2 === 0 ? "#F7F4EF10" : "#C4853A20", color: i % 2 === 0 ? "#F7F4EFcc" : "#C4853A", border: `1px solid ${i % 2 === 0 ? "#F7F4EF15" : "#C4853A30"}` }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-28 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#8B7355" }}>Experience</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-16" style={{ color: "#1A1207" }}>Where I've been 🗺️</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { role: "Product Strategist", co: "American Eagle Outfitters", years: "2023–2026", tags: ["Strategy", "Research", "A/B Testing"] },
              { role: "Product Designer",   co: "American Eagle Outfitters", years: "2020–2023", tags: ["Mobile Design", "E-commerce", "iOS/Android"] },
              { role: "Design Consultant",  co: "SDLC Partners LLC",         years: "2018–2020", tags: ["Consulting", "Healthcare", "UX/UI"] },
              { role: "Product Designer",   co: "Learning Sciences Intl.",   years: "2016–2018", tags: ["EdTech", "UX/UI", "SaaS"] },
            ].map(j => (
              <div key={j.role + j.co} className="rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "white", border: "1px solid #1A120710" }}>
                <p className="font-heading font-bold text-xl mb-1" style={{ color: "#1A1207" }}>{j.role}</p>
                <p className="font-sans text-sm font-semibold mb-4" style={{ color: "#8B7355" }}>{j.co} · {j.years}</p>
                <div className="flex flex-wrap gap-2">
                  {j.tags.map(t => <span key={t} className="font-sans text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#1A120708", color: "#5C4A2A" }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-20 px-8 md:px-16 text-center" style={{ borderTop: "1px solid #1A120715" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-6xl mb-4" style={{ color: "#1A1207" }}>Let's work together.</h2>
          <p className="font-sans text-base mb-10" style={{ color: "#8B7355" }}>Open to senior product design and strategy roles.</p>
          <a href="mailto:courtneyeisenhuth@gmail.com"
            className="inline-flex items-center gap-3 font-sans font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
            style={{ background: "#1A1207", color: "#F7F4EF" }}>📬 courtneyeisenhuth@gmail.com</a>
          <p className="font-sans text-xs mt-12" style={{ color: "#1A120730" }}>Created with Claude Code · Made with ♥ · 2026</p>
        </div>
      </footer>
    </div>
  );
}
