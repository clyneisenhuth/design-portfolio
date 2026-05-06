"use client";

import { useRef, useEffect, useState } from "react";
import CustomCursor from "../../components/CustomCursor";

function useInView(threshold = 0.1) {
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

const strategicDecisions = [
  {
    icon: "✅",
    title: "Default loyalty opt-in",
    desc: "Made loyalty enrollment the default rather than an optional checkbox in the Create Account flow — maximizing enrollment without adding a single step of friction.",
    color: "blue",
  },
  {
    icon: "🔄",
    title: "Dedicated migration flows",
    desc: "Designed specialized experiences for existing ATG customers, honoring their established relationship with the brand through clear, low-friction transitions rather than forcing them through new account creation.",
    color: "purple",
  },
  {
    icon: "🏪",
    title: "In-store sign-up support",
    desc: "Extended account creation to support sign-ups initiated by store associates through the mobile app — closing an acquisition gap that had existed since the original app launch.",
    color: "blue",
  },
];

const designFlows = [
  {
    icon: "👤",
    title: "Create Account redesign",
    desc: "Rebuilt the account creation flow for iOS and Android from the ground up — default loyalty opt-in baked in, streamlined field structure, and consistent brand expression across AE and Aerie without flattening their distinct identities.",
    tags: ["iOS", "Android", "Default Opt-In"],
    color: "blue",
  },
  {
    icon: "🔄",
    title: "ATG migration enrollment",
    desc: "Purpose-built flows for the 10M+ existing ATG customers who needed a path into the new system. This was the most edge-case-dense work of the project — migration states, error handling, and duplicate account logic all had to be accounted for before a single customer hit the flow.",
    tags: ["Migration", "Error States", "Edge Cases"],
    color: "purple",
  },
  {
    icon: "🏪",
    title: "In-store account creation",
    desc: "Designed the handoff experience for store associate-led account creation — starting on the associate's device, transferring to the customer's phone, and completing enrollment without losing context or requiring the customer to start over.",
    tags: ["In-Store", "Device Handoff", "Associate-Led"],
    color: "blue",
  },
];

const edgeCases = [
  "Accounts existing in ATG without loyalty enrollment",
  "Failed migration error states",
  "Duplicate account detection and handling",
  "In-store to personal device handoff logic",
  "Cross-platform consistency across AE and Aerie brand identities",
  "Partial enrollment states and recovery paths",
];

const outcomes = [
  {
    icon: "📈",
    label: "Default opt-in drove enrollment at scale",
    desc: "Loyalty enrollment at account creation increased total program membership, bringing AEO Real Rewards to a significantly broader audience from the moment someone first engaged with the app.",
  },
  {
    icon: "🎯",
    label: "Improved data accuracy across the platform",
    desc: "Replacing optional enrollment and limited error handling with structured, validated flows improved the accuracy and reliability of customer data across the system.",
  },
  {
    icon: "📉",
    label: "Reduced customer care inquiries",
    desc: "Dedicated migration paths and clear error states meant fewer customers ended up in broken account states — directly reducing contact center volume related to account issues.",
  },
  {
    icon: "🏪",
    label: "In-store acquisition channel opened",
    desc: "Store associates could initiate account creation through the mobile app for the first time, closing a long-standing gap in how AEO acquired loyalty members in physical retail.",
  },
];

const learnings = [
  {
    label: "Engineering partnership from the start is non-negotiable in migration work",
    quote: "Migration projects surface edge cases that no amount of upfront design anticipation fully covers. Having engineering in the room from the beginning — not handed specs at the end — meant that when new states emerged mid-project, we already had the relationship and shared context to resolve them quickly.",
  },
  {
    label: "Default states carry measurable business consequences",
    quote: "Changing loyalty opt-in from optional to default was a single design decision. It had enrollment implications across millions of accounts. The lesson isn't that defaults are always the right call — it's that they deserve the same scrutiny as any high-stakes product decision, because they shape outcomes at a scale most UI choices never reach.",
  },
  {
    label: "A thorough audit upfront prevents expensive surprises mid-project",
    quote: "The gap audit we ran across iOS and Android before the project kicked off was one of the highest-leverage things I did on this engagement. It surfaced problems that would have been far more expensive to fix mid-sprint than they were to identify in advance.",
  },
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function SingleAccountCaseStudy() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-bg">

        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-pale via-bg to-purple-pale">
          <div className="absolute -top-20 -right-20 w-80 h-80 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #2D5BC5, #8BB8F8)", filter: "blur(72px)" }} />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #8059C4, #D4A8F0)", filter: "blur(60px)" }} />

          <div className="max-w-4xl mx-auto px-6 pt-10 pb-20">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-muted hover:text-purple transition-colors duration-200 mb-12 group"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to portfolio
            </a>

            <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-4">
                Case Study · Account & Loyalty · 2022
              </p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
                Single Account{" "}
                <span className="gradient-text-static">Initiative</span> 💳
              </h1>
              <p className="font-sans text-lg text-muted max-w-2xl leading-relaxed mb-10">
                Rebuilding account creation and loyalty enrollment for 10+ million customers during a full platform migration.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Role", value: "Product Designer" },
                  { label: "Company", value: "American Eagle Outfitters" },
                  { label: "Platform", value: "iOS & Android" },
                  { label: "Tools", value: "Axure · Sketch" },
                ].map((m) => (
                  <div key={m.label} className="bg-surface border-2 border-border rounded-2xl px-4 py-2.5">
                    <p className="font-sans text-xs text-muted">{m.label}</p>
                    <p className="font-sans text-sm font-bold text-ink">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-20">

          {/* Overview */}
          <Section>
            <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-3">Overview</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-6">The opportunity</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <p className="font-sans text-base text-muted leading-relaxed">
                AEO was replacing its entire loyalty engine. That is a big deal on the backend. It is an even bigger deal when you consider that millions of customers already have accounts, loyalty balances, and established habits tied to the old system.
              </p>
              <p className="font-sans text-base text-muted leading-relaxed">
                I led iOS and Android design for <span className="font-extrabold text-blue">account creation</span>, <span className="font-extrabold text-blue">existing customer migration paths</span>, and <span className="font-extrabold text-blue">in-store sign-up support</span> across both apps — navigating a migration that had 10+ million customers in the middle of it.
              </p>
            </div>
          </Section>

          {/* Problem */}
          <Section>
            <div className="bg-surface border-2 border-border rounded-3xl p-8 md:p-10">
              <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-3">The Problem</p>
              <h2 className="font-heading text-3xl font-bold text-ink mb-5">A loyalty engine replacement with 10 million customers in the middle of it.</h2>
              <p className="font-sans text-base text-muted leading-relaxed mb-8">
                The existing system was built on the ATG Commerce platform, which was being replaced entirely. That migration was complex enough on its own. What made it harder was the state of the existing mobile experience — a comprehensive audit revealed extensive gaps across both iOS and Android that had to be resolved before the new engine could launch.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🏚️", label: "Aging ATG platform", desc: "The entire loyalty engine was being replaced, requiring design to account for the old system's data structure and customer state." },
                  { icon: "📋", label: "Optional loyalty enrollment", desc: "Loyalty sign-up was opt-in, resulting in enrollment rates well below what the business needed from the new platform." },
                  { icon: "⚠️", label: "Limited error handling", desc: "The existing flows had minimal error states — a significant liability when migrating millions of accounts with varying data quality." },
                  { icon: "🏪", label: "No in-store sign-up path", desc: "Store associates had no way to initiate account creation through the mobile app, leaving a meaningful acquisition channel unused." },
                ].map((p) => (
                  <div key={p.label} className="bg-bg rounded-2xl p-4 border border-border">
                    <span className="text-2xl mb-2 block">{p.icon}</span>
                    <p className="font-heading font-bold text-ink text-sm mb-1">{p.label}</p>
                    <p className="font-sans text-xs text-muted leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-pale border-2 border-blue/20 rounded-2xl p-6">
                <p className="font-heading text-sm font-semibold text-blue mb-2">Problem Statement</p>
                <p className="font-sans text-sm text-ink leading-relaxed italic">
                  &ldquo;How might we migrate 10+ million existing customers into a new loyalty platform — and redesign account creation from the ground up — without breaking established customer relationships or losing enrollment momentum in the process?&rdquo;
                </p>
              </div>
            </div>
          </Section>

          {/* Strategy */}
          <Section>
            <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">Strategy</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Three calls that shaped the whole direction.</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
              Before any wireframes, the team aligned on three strategic decisions. Each one resolved a specific gap in the existing experience and set the scope for the design work that followed.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {strategicDecisions.map((d, i) => (
                <div
                  key={d.title}
                  className="bg-surface border-2 border-border rounded-3xl p-6 hover:border-blue/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="text-3xl mb-4 block">{d.icon}</span>
                  <h3 className="font-heading text-lg font-bold text-ink mb-2">{d.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Design */}
          <Section>
            <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-3">Design</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Three flows, a lot of edge cases, and close collaboration with engineering.</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
              The work covered three distinct flows, each with its own interaction logic, error states, and platform considerations. Cross-platform consistency was maintained throughout while preserving the distinct brand identities of AE and Aerie.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {designFlows.map((f, i) => (
                <div
                  key={f.title}
                  className={`bg-surface border-2 rounded-3xl p-6 md:p-8 flex gap-5 items-start hover:shadow-lg transition-all duration-300 ${
                    f.color === "blue" ? "border-blue/20 hover:border-blue/40" : "border-purple/20 hover:border-purple/40"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${
                    f.color === "blue" ? "bg-blue-pale" : "bg-purple-pale"
                  }`}>
                    {f.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-xl font-bold text-ink mb-2">{f.title}</h3>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-4">{f.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.tags.map((t) => (
                        <span
                          key={t}
                          className={`font-sans text-xs font-semibold px-2.5 py-1 rounded-full ${
                            f.color === "blue" ? "bg-blue text-white" : "bg-purple text-white"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-pale to-purple-pale border-2 border-blue/20 rounded-3xl p-8 md:p-10">
              <span className="text-3xl mb-3 block">🧩</span>
              <h3 className="font-heading text-xl font-bold text-ink mb-3">Edge cases were the real design work</h3>
              <p className="font-sans text-sm text-muted leading-relaxed mb-5">
                Migration projects don&apos;t fail at the happy path — they fail at the edge cases. A thorough audit before wireframes began surfaced the full scope of states that needed to be designed for.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {edgeCases.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-blue font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="font-sans text-sm text-muted leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Outcomes */}
          <Section>
            <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">Outcomes</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8">More customers enrolled. Better data. Less confusion.</h2>

            {/* Big stat */}
            <div className="bg-gradient-to-br from-blue-pale to-purple-pale border-2 border-blue/20 rounded-3xl p-8 md:p-10 mb-8 text-center">
              <p className="font-heading font-bold text-7xl md:text-8xl gradient-text-static mb-2">10M+</p>
              <p className="font-sans text-base text-muted max-w-sm mx-auto">existing ATG customers reached through dedicated migration flows</p>
            </div>

            <div className="flex flex-col gap-4">
              {outcomes.map((o) => (
                <div
                  key={o.label}
                  className="bg-surface border-2 border-border rounded-2xl p-5 flex items-start gap-4 hover:border-blue/30 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-2xl flex-shrink-0">{o.icon}</span>
                  <div>
                    <p className="font-heading font-bold text-ink text-base mb-0.5">{o.label}</p>
                    <p className="font-sans text-sm text-muted leading-snug">{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Reflection */}
          <Section>
            <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-3">Reflection</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8">Key learnings</h2>
            <div className="flex flex-col gap-5">
              {learnings.map((r) => (
                <div key={r.label} className="bg-surface border-2 border-border rounded-3xl p-6 md:p-8">
                  <p className="font-heading font-bold text-blue text-sm mb-3">{r.label}</p>
                  <p className="font-sans text-base text-muted leading-relaxed italic">&ldquo;{r.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Footer nav */}
          <div className="flex items-center justify-between pt-4 border-t-2 border-border">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-sans text-sm font-bold text-purple hover:text-purple-deep transition-colors duration-200 group"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to portfolio
            </a>
            <p className="font-heading text-sm font-semibold gradient-text-static">
              Courtney Eisenhuth ✦
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
