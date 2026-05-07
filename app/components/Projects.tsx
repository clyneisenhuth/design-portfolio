"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";

const projects = [
  {
    title:      "Incentivized Reviews Strategy",
    year:       "2025",
    description: "Driving review participation through loyalty without compromising authenticity. A cross-functional initiative that grew daily review volume by 300% across the AE + Aerie catalog.",
    tags:       ["Strategy", "Loyalty", "Research"],
    emoji:      "⭐",
    image:      "/pointsreviews_cover2.jpeg",
    gradient:   "linear-gradient(135deg, #8059C4, #A07DD4)",
    cardBg:     "bg-purple-pale",
    stat:       "300%",
    statLabel:  "increase in daily review volume",
    link:       "/case-studies/incentivized-reviews",
    tagColor:   "bg-purple text-white",
    shipped:    true,
  },
  {
    title:      "App Product Reviews Redesign",
    year:       "2024",
    description: "End-to-end redesign of the AE + Aerie mobile app reviews experience, rebuilding photo carousels, submission flows, and review UI to turn a fragmented section into a high-trust content engine.",
    tags:       ["Mobile", "UI Design", "UGC"],
    emoji:      "🖼️",
    image:      "/appreviews_cover1.jpeg",
    gradient:   "linear-gradient(135deg, #4B7BE5, #6B9DF5)",
    cardBg:     "bg-blue-pale",
    stat:       "Increased",
    statLabel:  "form submission rates",
    link:       "/case-studies/product-reviews",
    tagColor:   "bg-blue text-white",
    shipped:    true,
  },
  {
    title:      "Item Level Fulfillment",
    year:       "2022",
    description: "Designing flexible fulfillment for a feature that never shipped. Concept design, competitive analysis, and usability research that validated the idea and moved organizational understanding forward.",
    tags:       ["Mobile", "BOPIS", "Research"],
    emoji:      "📦",
    image:      "/ilf_cover2.jpeg",
    gradient:   "linear-gradient(135deg, #A07DD4, #B8A0E0)",
    cardBg:     "bg-purple-pale",
    stat:       "Concept",
    statLabel:  "validated through usability research",
    link:       "/case-studies/item-fulfillment",
    tagColor:   "bg-purple text-white",
    shipped:    true,
  },
  {
    title:      "Single Account Initiative",
    year:       "2022",
    description: "Rebuilt account creation and loyalty enrollment during a full platform migration, designing dedicated migration paths for 10M+ existing customers across iOS and Android.",
    tags:       ["Mobile", "Account", "Loyalty"],
    emoji:      "💳",
    image:      "/singleaccount_cover1.jpeg",
    gradient:   "linear-gradient(135deg, #2D5BC5, #4B7BE5)",
    cardBg:     "bg-blue-pale",
    stat:       "10M+",
    statLabel:  "customers reached through migration flows",
    link:       "/case-studies/single-account",
    tagColor:   "bg-blue text-white",
    shipped:    true,
  },
];


type Project = typeof projects[0];

function WorkCard({ project, index }: { project: Project; index: number }) {
  const cardRef              = useRef<HTMLDivElement>(null);
  const { ref, inView }      = useInView();
  const [tilt, setTilt]      = useState({ x: 0, y: 0 });
  const [hover, setHover]    = useState(false);
  const [popped, setPopped]  = useState(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const onEnter = () => setHover(true);
  const onLeave = () => { setHover(false); setTilt({ x: 0, y: 0 }); };

  const onCardClick = () => {
    setPopped(true);
    setTimeout(() => {
      setPopped(false);
      if (project.link) window.location.href = project.link;
    }, 150);
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={onCardClick}
        className={`relative bg-surface rounded-3xl overflow-hidden border-2 border-border transition-shadow duration-300 group ${
          hover ? "shadow-2xl border-purple/25" : "shadow-sm"
        } ${popped ? "scale-95" : ""}`}
        style={{
          transform:  `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hover ? 1.025 : 1}) ${popped ? "scale(0.97)" : ""}`,
          transition: hover
            ? "transform 0.1s ease-out, box-shadow 0.3s, border-color 0.3s"
            : "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s, border-color 0.3s",
        }}
      >
        {/* Gradient header */}
        <div
          className="relative h-44 flex items-center justify-center overflow-hidden"
          style={{ background: project.gradient }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={undefined}
            />
          ) : (
            <span className="text-6xl drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
              {project.emoji}
            </span>
          )}
          <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-sans font-bold px-2.5 py-1 rounded-full">
            {project.year}
          </div>
          {/* Decorative circles */}
          <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-white/10 rounded-full" />
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-white/10 rounded-full" />
          {/* Hover sparkle */}
          {hover && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-xl animate-bounce-pop opacity-80">✨</span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-ink mb-2 group-hover:text-purple transition-colors duration-200">
            {project.title}
          </h3>
          <p className="font-sans text-sm text-muted leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Stat chip */}
          <div className={`${project.cardBg} rounded-xl p-3 mb-4 flex items-center gap-3 border border-border`}>
            <span className="font-heading text-lg font-bold gradient-text-static">{project.stat}</span>
            <span className="font-sans text-xs text-muted">{project.statLabel}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((t) => (
              <span key={t} className={`font-sans text-xs font-semibold px-2.5 py-1 rounded-full ${project.tagColor}`}>
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="font-sans text-sm font-bold text-purple flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
              View case study <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
            {!project.shipped && (
              <span className="font-sans text-xs text-muted italic bg-bg px-2.5 py-1 rounded-full">
                Coming soon ✦
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="projects" className="py-28 px-6 bg-white/60">
      <div className="max-w-5xl mx-auto">

        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-2">
            Projects
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink">
            From brief to build 💻
          </h2>
          <p className="font-sans text-muted mt-4 max-w-md mx-auto text-sm">
            Take a look at some of my most recent work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <WorkCard key={p.title} project={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
