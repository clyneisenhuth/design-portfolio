"use client";

import { useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

const jobs = [
  {
    role:      "Product Strategist",
    company:   "American Eagle Outfitters",
    years:     "2023 – 2026",
    emoji:     "🦅",
    featured:  true,
    desc:      "Lead strategist driving mobile commerce strategy for an app that represents 40% of digital revenue for a $5B+ retailer. Leveraged behavioral data, market analysis, and user research to identify high-impact opportunities across the full shopping funnel, from browse to checkout, while contributing to A/B testing strategies that drove an estimated $20.35 million in annual revenue lift in 2025. Partnered cross-functionally through experimentation, accessibility best practices, and workshop-led discovery to shape scalable, user-centered product solutions aligned with revenue growth and retention goals.",
    tags:      ["Strategy", "Research", "A/B Testing", "Accessibility"],
    stat:      "$20.35M",
    statLabel: "revenue lift (2025)",
  },
  {
    role:      "Product Designer",
    company:   "American Eagle Outfitters",
    years:     "2020 – 2023",
    emoji:     "📱",
    featured:  true,
    desc:      "One of two product designers supporting mobile app development across key commerce surfaces, designing mobile-first flows, wireframes, and high-fidelity prototypes tailored to native iOS and Android patterns. Bridged web-to-mobile feature parity while introducing app-exclusive enhancements, collaborating cross-functionally within Agile sprints to balance business objectives, technical constraints, and customer experience - while also supporting QA testing to ensure polished, accurate implementation.",
    tags:      ["Mobile Design", "E-commerce", "UX", "iOS/Android"],
    stat:      "40%",
    statLabel: "of AEO digital revenue",
  },
  {
    role:      "Product Design Consultant",
    company:   "SDLC Partners LLC",
    years:     "2018 – 2020",
    emoji:     "🔧",
    featured:  false,
    desc:      "Design consultant leading end-to-end design - guiding projects from discovery through implementation through research, prototyping, stakeholder alignment, and usability testing to deliver user-centered solutions that met business objectives for a large healthcare client.",
    tags:      ["Consulting", "Product Design", "Healthcare", "SaaS", "Dashboards", "UX/UI"],
    stat:      null,
    statLabel: null,
  },
  {
    role:      "Product Designer",
    company:   "Learning Sciences International",
    years:     "2016 – 2018",
    emoji:     "📚",
    featured:  false,
    desc:      "Product Designer collaborating within an Agile team to deliver mid-fidelity wireframes and interactive prototypes for a web application and mobile app, translating SaaS product requirements into intuitive, user-centered design solutions.",
    tags:      ["EdTech", "Product Design", "UX/UI", "SaaS", "Web Apps"],
    stat:      null,
    statLabel: null,
  },
];


type Job = typeof jobs[0];

function JobCard({ job, index }: { job: Job; index: number }) {
  const { ref, inView } = useInView();
  const [open,  setOpen]  = useState(index < 2);
  const [spark, setSpark] = useState(false);

  const toggle = () => {
    setOpen((p) => !p);
    setSpark(true);
    setTimeout(() => setSpark(false), 500);
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
      style={{ transitionDelay: `${index * 130}ms` }}
    >
      <div
        onClick={toggle}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } }}
        className={`relative rounded-2xl border-2 p-6 transition-all duration-300 ${
          job.featured
            ? open
              ? "border-purple/50 bg-gradient-to-br from-purple-pale/60 to-blue-pale/30 shadow-lg"
              : "border-purple/25 bg-gradient-to-br from-purple-pale/30 to-blue-pale/15 hover:border-purple/40 hover:shadow-md"
            : "border-border bg-surface hover:border-lavender hover:shadow-sm"
        }`}
      >
        {/* Featured badge */}
        {job.featured && (
          <div className="absolute -top-3.5 left-5 bg-purple text-white text-xs font-sans font-bold px-3 py-1 rounded-full shadow-sm">
            ✦ Featured
          </div>
        )}

        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className={`relative w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-200 ${
              job.featured ? "bg-surface shadow-md" : "bg-bg"
            } ${spark ? "animate-bounce-pop" : ""}`}
          >
            {job.emoji}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-heading text-lg font-bold text-ink">{job.role}</h3>
                <p className={`font-sans text-sm font-semibold ${job.featured ? "text-purple" : "text-muted"}`}>
                  {job.company}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="font-sans text-xs text-muted bg-bg px-2.5 py-1 rounded-full whitespace-nowrap border border-border">
                  {job.years}
                </span>
                <span
                  className={`text-muted transition-transform duration-300 text-lg ${open ? "rotate-180" : ""}`}
                >
                  ↓
                </span>
              </div>
            </div>

            {/* Expandable content */}
            <div
              className={`overflow-hidden transition-all duration-400 ${
                open ? "max-h-60 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">{job.desc}</p>

              {job.stat && (
                <div className="flex items-center gap-2 mb-4 bg-surface rounded-xl px-3 py-2 w-fit border border-border">
                  <span className="font-heading font-bold text-lg gradient-text-static">{job.stat}</span>
                  <span className="font-sans text-xs text-muted">{job.statLabel}</span>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className={`font-sans text-xs font-semibold px-2.5 py-1 rounded-full ${
                      job.featured ? "bg-purple text-white" : "bg-bg text-muted border border-border"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">

        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-2">
            Experience
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink">
            Where I&apos;ve been 🗺️
          </h2>
          <p className="font-sans text-sm text-muted mt-4 max-w-sm mx-auto">
            10 years across retail, e-commerce, healthcare, and edtech.
            <br />
            <span className="text-xs italic">(Click each card to expand)</span>
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {jobs.map((j, i) => (
            <JobCard key={j.role + j.company} job={j} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
