"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import { TrendingUp, BarChart2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useInView } from "../hooks/useInView";

const jobs: {
  role: string; company: string; years: string; desc: string;
  skills: string; stat: string | null; statLabel: string | null; icon?: LucideIcon;
}[] = [
  {
    role: "Product Strategist",
    company: "American Eagle Outfitters",
    years: "2023 – 2026",
    desc: "Lead strategist driving mobile commerce strategy for an app that represents 40% of digital revenue for a $5B+ retailer. Leveraged behavioral data, market analysis, and user research to identify high-impact opportunities across the full shopping funnel — browse to checkout — while contributing to A/B testing strategies that drove an estimated $20.35 million in annual revenue lift in 2025. Partnered cross-functionally through experimentation, accessibility best practices, and workshop-led discovery to shape scalable, user-centered product solutions aligned with revenue growth and retention goals.",
    skills: "Strategy · Research · A/B Testing · Accessibility",
    stat: "$20.35M",
    statLabel: "revenue lift (2025)",
    icon: TrendingUp,
  },
  {
    role: "Product Designer",
    company: "American Eagle Outfitters",
    years: "2020 – 2023",
    desc: "One of two product designers supporting mobile app development across key commerce surfaces, designing mobile-first flows, wireframes, and high-fidelity prototypes tailored to native iOS and Android patterns. Bridged web-to-mobile feature parity while introducing app-exclusive enhancements, collaborating cross-functionally within Agile sprints to balance business objectives, technical constraints, and customer experience.",
    skills: "Mobile Design · E-commerce · UX · iOS/Android",
    stat: "40%",
    statLabel: "of AEO digital revenue",
    icon: BarChart2,
  },
  {
    role: "Product Design Consultant",
    company: "SDLC Partners LLC",
    years: "2018 – 2020",
    desc: "Design consultant leading end-to-end design — guiding projects from discovery through implementation via research, prototyping, stakeholder alignment, and usability testing to deliver user-centered solutions that met business objectives for a large healthcare client.",
    skills: "Consulting · Product Design · Healthcare · SaaS",
    stat: null,
    statLabel: null,
  },
  {
    role: "Product Designer",
    company: "Learning Sciences International",
    years: "2016 – 2018",
    desc: "Product Designer collaborating within an Agile team to deliver mid-fidelity wireframes and interactive prototypes for a web application and mobile app, translating SaaS product requirements into intuitive, user-centered design solutions.",
    skills: "EdTech · Product Design · UX/UI · SaaS",
    stat: null,
    statLabel: null,
  },
];

type Job = typeof jobs[0];

function JobRow({ job, index, defaultOpen }: { job: Job; index: number; defaultOpen?: boolean }) {
  const { ref, inView } = useInView();
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-600 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="border-t border-border pt-6 pb-6">
        <button
          onClick={() => setOpen((p) => !p)}
          className="w-full flex items-start justify-between gap-4 text-left group"
          aria-expanded={open}
        >
          <div>
            <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-purple transition-colors duration-200">
              {job.role}
            </h3>
            <p className="font-sans text-sm text-muted mt-0.5">{job.company}</p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0 mt-0.5">
            <span className="font-mono text-[11px] tracking-[0.1em] text-muted">{job.years}</span>
            <motion.span
              className="text-muted text-sm"
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              ↓
            </motion.span>
          </div>
        </button>

        {/* AnimatePresence accordion — GPU-safe height animation */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
              className="mt-5"
            >
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">{job.desc}</p>

              {job.stat && job.icon && (
                <div className="flex items-center gap-4 mb-4 py-3 border-t border-b border-border">
                  <div className="flex items-center gap-1.5 text-purple flex-shrink-0">
                    <job.icon size={15} strokeWidth={1.8} />
                    <span className="font-heading font-bold text-2xl text-ink">{job.stat}</span>
                  </div>
                  <div className="w-px h-8 bg-border flex-shrink-0" />
                  <p className="font-sans text-xs text-muted leading-snug">{job.statLabel}</p>
                </div>
              )}

              <p className="font-mono text-[11px] tracking-[0.1em] text-muted">{job.skills}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView(0.2);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [70, -70]);

  return (
    <section id="experience" ref={sectionRef} className="py-28 px-8 bg-surface border-t border-border">
      <motion.div className="max-w-5xl mx-auto" style={{ y: contentY }}>
        <div
          ref={ref}
          className={`mb-16 transition-[opacity,transform] duration-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-purple mb-3">
            Background
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">Experience</h2>
          <p className="font-sans text-sm text-muted mt-3">10 years in the UX/UI space.</p>
        </div>

        <div>
          {jobs.map((j, i) => (
            <JobRow key={j.role + j.company} job={j} index={i} defaultOpen={i < 2} />
          ))}
          <div className="border-t border-border" />
        </div>
      </motion.div>
    </section>
  );
}
