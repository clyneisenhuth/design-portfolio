"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUp, Plus, Lightbulb, Users } from "lucide-react";
import { useInView } from "../hooks/useInView";
import type { LucideIcon } from "lucide-react";

const projects: {
  title: string; year: string; category: string; description: string;
  stat: string; statLabel: string; image: string; link: string; icon: LucideIcon;
}[] = [
  {
    title: "Incentivized Reviews Strategy",
    year: "2025",
    category: "Strategy · Loyalty · Research",
    description:
      "Driving review participation through loyalty without compromising authenticity. A cross-functional initiative that grew daily review volume by 300% across the AE + Aerie catalog.",
    stat: "300%",
    statLabel: "increase in daily review volume",
    image: "/case-studies/incentivized-reviews/cover.jpeg",
    link: "/case-studies/incentivized-reviews",
    icon: ArrowUp,
  },
  {
    title: "App Product Reviews Redesign",
    year: "2024",
    category: "Mobile · UI Design · UGC",
    description:
      "End-to-end redesign of the AE + Aerie mobile app reviews experience, rebuilding photo carousels, submission flows, and review UI to turn a fragmented section into a high-trust content engine.",
    stat: "2x",
    statLabel: "increase in form submission rates",
    image: "/case-studies/product-reviews/cover.jpeg",
    link: "/case-studies/product-reviews",
    icon: Plus,
  },
  {
    title: "Item Level Fulfillment",
    year: "2022",
    category: "Mobile · BOPIS · Research",
    description:
      "Designing flexible fulfillment for a feature that never shipped. Concept design, competitive analysis, and usability research that validated the idea and moved organizational understanding forward.",
    stat: "Concept",
    statLabel: "validated through usability research",
    image: "/case-studies/item-fulfillment/cover.jpeg",
    link: "/case-studies/item-fulfillment",
    icon: Lightbulb,
  },
  {
    title: "Single Account Initiative",
    year: "2022",
    category: "Mobile · Account · Loyalty",
    description:
      "Rebuilt account creation and loyalty enrollment during a full platform migration, designing dedicated migration paths for 10M+ existing customers across iOS and Android.",
    stat: "10M+",
    statLabel: "customers reached through migration flows",
    image: "/case-studies/single-account/cover.jpeg",
    link: "/case-studies/single-account",
    icon: Users,
  },
];

type Project = typeof projects[0];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView();
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [isHoverDevice, setIsHoverDevice] = useState(false);
  const prefersReduced = useReducedMotion();
  useEffect(() => {
    setMounted(true);
    setIsHoverDevice(window.matchMedia("(hover: hover)").matches);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-600 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: prefersReduced ? "0ms" : `${index * 100}ms` }}
    >
      <a
        href={project.link}
        className="block"
        style={{ cursor: hover && isHoverDevice ? "none" : "auto" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={onMouseMove}
      >
        <div
          className="relative w-full overflow-hidden rounded-md bg-surface mb-5"
          style={{ aspectRatio: "16/10" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted mb-2">
          {project.category} · {project.year}
        </p>

        <h3
          className={`font-heading text-xl font-semibold mb-2 transition-colors duration-200 ${
            hover ? "text-purple" : "text-ink"
          }`}
        >
          {project.title}
        </h3>

        <p className="font-sans text-sm text-muted leading-relaxed mb-3">
          {project.description}
        </p>

        {/* Outcome — style 4: icon + metric */}
        <div className="flex items-center gap-4 mb-5 py-3 border-t border-b border-border">
          <div className="flex items-center gap-1.5 text-purple flex-shrink-0">
            <project.icon size={15} strokeWidth={1.8} />
            <span className="font-heading font-bold text-2xl text-ink">{project.stat}</span>
          </div>
          <div className="w-px h-8 bg-border flex-shrink-0" />
          <p className="font-sans text-xs text-muted leading-snug">{project.statLabel}</p>
        </div>
      </a>

      {/* Custom cursor chip — hover devices only */}
      {mounted && isHoverDevice && createPortal(
        <div
          className="fixed pointer-events-none z-[9999] flex items-center gap-1.5 px-4 py-2 bg-ink text-white text-xs font-semibold rounded-full whitespace-nowrap select-none"
          style={{
            left: pos.x,
            top: pos.y,
            transform: `translate(-50%, -50%) scale(${hover ? 1 : 0.8})`,
            opacity: hover ? 1 : 0,
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
        >
          View Case Study
          <span className="text-[10px]">›</span>
        </div>,
        document.body
      )}
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView(0.2);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedSection = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], prefersReducedSection ? [0, 0] : [70, -70]);

  return (
    <section id="work" ref={sectionRef} className="pt-12 pb-28 px-8 border-t border-border">
      <motion.div className="max-w-5xl mx-auto" style={{ y: contentY }}>
        <div
          ref={ref}
          className={`mb-16 transition-[opacity,transform] duration-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-purple mb-3">
            Selected work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">
            Case Studies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
