"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  RefreshCw,
  Store,
  User,
  Building,
  FileText,
  AlertCircle,
  TrendingUp,
  Target,
  TrendingDown,
  Layers,
} from "lucide-react";
import { useInView } from "../../hooks/useInView";

function StatItem({ raw, label }: { raw: string; label: string }) {
  const { ref, inView } = useInView(0.4);
  const [count, setCount] = useState(0);
  const match = raw.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = parseFloat(match?.[2] ?? "0");
  const suffix = match?.[3] ?? "";
  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);
  return (
    <div ref={ref}>
      <p className="font-heading font-bold text-ink" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}>
        {prefix}{count}{suffix}
      </p>
      <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mt-1">{label}</p>
    </div>
  );
}

const strategicDecisions = [
  {
    Icon: CheckCircle2,
    title: "Default loyalty opt-in",
    desc: "Made loyalty enrollment the default rather than an optional checkbox in the Create Account flow, maximizing enrollment without adding a single step of friction.",
    color: "blue",
  },
  {
    Icon: RefreshCw,
    title: "Dedicated migration flows",
    desc: "Designed specialized experiences for existing ATG customers, honoring their established relationship with the brand through clear, low-friction transitions rather than forcing them through new account creation.",
    color: "purple",
  },
  {
    Icon: Store,
    title: "In-store sign-up support",
    desc: "Extended account creation to support sign-ups initiated by store associates through the mobile app, closing an acquisition gap that had existed since the original app launch.",
    color: "blue",
  },
];

const designFlows = [
  {
    Icon: User,
    title: "Create Account redesign",
    desc: "Rebuilt the account creation flow for iOS and Android from the ground up, with default loyalty opt-in baked in, streamlined field structure, and consistent brand expression across AE and Aerie without flattening their distinct identities.",
    tags: ["iOS", "Android", "Default Opt-In"],
    color: "blue",
  },
  {
    Icon: RefreshCw,
    title: "ATG migration enrollment",
    desc: "Purpose-built flows for the 10M+ existing ATG customers who needed a path into the new system. This was the most edge-case-dense work of the project. Migration states, error handling, and duplicate account logic all had to be accounted for before a single customer hit the flow.",
    tags: ["Migration", "Error States", "Edge Cases"],
    color: "purple",
  },
  {
    Icon: Store,
    title: "In-store account creation",
    desc: "Designed the handoff experience for store associate-led account creation, starting on the associate's device, transferring to the customer's phone, and completing enrollment without losing context or requiring the customer to start over.",
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
    Icon: TrendingUp,
    label: "Default opt-in drove enrollment at scale",
    desc: "Loyalty enrollment at account creation increased total program membership, bringing AEO Real Rewards to a significantly broader audience from the moment someone first engaged with the app.",
  },
  {
    Icon: Target,
    label: "Improved data accuracy across the platform",
    desc: "Replacing optional enrollment and limited error handling with structured, validated flows improved the accuracy and reliability of customer data across the system.",
  },
  {
    Icon: TrendingDown,
    label: "Reduced customer care inquiries",
    desc: "Dedicated migration paths and clear error states meant fewer customers ended up in broken account states, directly reducing contact center volume related to account issues.",
  },
  {
    Icon: Store,
    label: "In-store acquisition channel opened",
    desc: "Store associates could initiate account creation through the mobile app for the first time, closing a long-standing gap in how AEO acquired loyalty members in physical retail.",
  },
];

const learnings = [
  {
    label: "Engineering partnership from the start is non-negotiable in migration work",
    quote: "Migration projects surface edge cases that no amount of upfront design anticipation fully covers. Having engineering in the room from the beginning, not handed specs at the end, meant that when new states emerged mid-project, we already had the relationship and shared context to resolve them quickly.",
  },
  {
    label: "Default states carry measurable business consequences",
    quote: "Changing loyalty opt-in from optional to default was a single design decision. It had enrollment implications across millions of accounts. The lesson isn't that defaults are always the right call. It's that they deserve the same scrutiny as any high-stakes product decision, because they shape outcomes at a scale most UI choices never reach.",
  },
  {
    label: "A thorough audit upfront prevents expensive surprises mid-project",
    quote: "The gap audit we ran across iOS and Android before the project kicked off was one of the highest-leverage things I did on this engagement. It surfaced problems that would have been far more expensive to fix mid-sprint than they were to identify in advance.",
  },
];

export default function SingleAccountCaseStudy() {
  return (
    <div className="min-h-screen bg-bg">

      {/* Hero */}
      <section className="border-t border-border px-6 pt-24 pb-16 bg-bg">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <a href="/" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors mb-12 group">
              <ArrowLeft size={12} /><span>Back</span>
            </a>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-6">Case Study · Account &amp; Loyalty · 2022</p>
            <h1 className="font-heading font-bold text-ink mb-6" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>Single Account Initiative</h1>
            <p className="font-sans text-base text-muted leading-relaxed max-w-2xl mb-10">
              Rebuilding account creation and loyalty enrollment for 10+ million customers during a full platform migration.
            </p>
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              {[
                { label: "Role", value: "Product Designer" },
                { label: "Company", value: "American Eagle Outfitters" },
                { label: "Platform", value: "iOS & Android" },
                { label: "Tools", value: "Axure · Sketch" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mb-1">{m.label}</p>
                  <p className="font-sans text-sm font-semibold text-ink">{m.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-20">

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Overview</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-6">The opportunity</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="font-sans text-base text-muted leading-relaxed">
              AEO was replacing its entire loyalty engine. That is a significant undertaking on the backend. It is an even bigger deal when you consider that millions of customers already have accounts, loyalty balances, and established habits tied to the old system.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              I led iOS and Android design for <span className="font-extrabold text-purple">account creation</span>, <span className="font-extrabold text-purple">existing customer migration paths</span>, and <span className="font-extrabold text-purple">in-store sign-up support</span> across both apps, navigating a migration that had 10+ million customers in the middle of it.
            </p>
          </div>
        </motion.div>

        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border border-border rounded-lg bg-surface p-8 md:p-10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">The Problem</p>
            <h2 className="font-heading text-3xl font-bold text-ink mb-5">A loyalty engine replacement with 10 million customers in the middle of it.</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              The existing system was built on the ATG Commerce platform, which was being replaced entirely. That migration was complex enough on its own. What made it harder was the state of the existing mobile experience — a comprehensive audit revealed extensive gaps across both iOS and Android that had to be resolved before the new engine could launch.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { Icon: Building, label: "Aging ATG platform", desc: "The entire loyalty engine was being replaced, requiring design to account for the old system's data structure and customer state." },
                { Icon: FileText, label: "Optional loyalty enrollment", desc: "Loyalty sign-up was opt-in, resulting in enrollment rates well below what the business needed from the new platform." },
                { Icon: AlertCircle, label: "Limited error handling", desc: "The existing flows had minimal error states, a significant liability when migrating millions of accounts with varying data quality." },
                { Icon: Store, label: "No in-store sign-up path", desc: "Store associates had no way to initiate account creation through the mobile app, leaving a meaningful acquisition channel unused." },
              ].map((p) => (
                <div key={p.label} className="bg-bg rounded-md p-4 border border-border">
                  <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0 mb-3">
                    <p.Icon size={16} strokeWidth={1.5} className="text-purple" />
                  </div>
                  <p className="font-heading font-bold text-ink text-sm mb-1">{p.label}</p>
                  <p className="font-sans text-xs text-muted leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="border border-border rounded-lg bg-surface p-6">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-2">Problem Statement</p>
              <p className="font-sans text-sm text-ink leading-relaxed italic">
                &ldquo;How might we migrate 10+ million existing customers into a new loyalty platform — and redesign account creation from the ground up — without breaking established customer relationships or losing enrollment momentum in the process?&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Strategy</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Three calls that shaped the whole direction.</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
            Before any wireframes, the team aligned on three strategic decisions. Each one resolved a specific gap in the existing experience and set the scope for the design work that followed.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {strategicDecisions.map((d) => (
              <div
                key={d.title}
                className="bg-surface border border-border rounded-lg p-6 transition-[opacity,transform] duration-300"
              >
                <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0 mb-4">
                  <d.Icon size={16} strokeWidth={1.5} className="text-purple" />
                </div>
                <h3 className="font-heading text-lg font-bold text-ink mb-2">{d.title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Design */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Design</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Three flows, a lot of edge cases, and close collaboration with engineering.</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
            The work covered three distinct flows, each with its own interaction logic, error states, and platform considerations. Cross-platform consistency was maintained throughout while preserving the distinct brand identities of AE and Aerie.
          </p>

          <div className="flex flex-col gap-5 mb-8">
            {designFlows.map((f) => (
              <div
                key={f.title}
                className="bg-surface border border-border rounded-lg p-6 md:p-8 flex gap-5 items-start transition-[opacity,transform] duration-300"
              >
                <div className={`w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0 ${
                  f.color === "blue" ? "bg-blue-pale" : "bg-purple-pale"
                }`}>
                  <f.Icon size={16} strokeWidth={1.5} className="text-purple" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-xl font-bold text-ink mb-2">{f.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-4">{f.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {f.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-border rounded-lg bg-surface p-8 md:p-10">
            <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0 mb-4">
              <Layers size={16} strokeWidth={1.5} className="text-purple" />
            </div>
            <h3 className="font-heading text-xl font-bold text-ink mb-3">Edge cases were the real design work</h3>
            <p className="font-sans text-sm text-muted leading-relaxed mb-5">
              Migration projects don&apos;t fail at the happy path. They fail at the edge cases. A thorough audit before wireframes began surfaced the full scope of states that needed to be designed for.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {edgeCases.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={14} strokeWidth={1.5} className="text-purple flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-sm text-muted leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final Screens */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Final Screens</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">What shipped</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
            A selection of final screens from the Single Account migration experience.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { src: "/case-studies/single-account/image1.jpeg", label: "Single Account Screen 1", caption: "Final screen from the Single Account migration flow, guiding existing customers through account consolidation." },
              { src: "/case-studies/single-account/image2.jpeg", label: "Single Account Screen 2", caption: "Final screen from the loyalty enrollment experience, surfacing AEO Real Rewards benefits at the point of account creation." },
            ].map((s) => (
              <div key={s.label} className="bg-surface border border-border rounded-lg overflow-hidden">
                <img src={s.src} alt={s.label} className="w-full object-cover" />
                <p className="font-sans text-xs text-muted px-5 py-3 border-t border-border">{s.caption}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Outcomes</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8">More customers enrolled. Better data. Less confusion.</h2>

          {/* Big stat */}
          <div className="border border-border rounded-lg bg-surface p-8 md:p-10 mb-8 text-center">
            <StatItem raw="10" label="million+ existing customers reached through migration flows" />
          </div>

          <div className="flex flex-col gap-4">
            {outcomes.map((o) => (
              <div
                key={o.label}
                className="bg-surface border border-border rounded-lg p-5 flex items-start gap-4 transition-[opacity,transform] duration-300"
              >
                <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0">
                  <o.Icon size={16} strokeWidth={1.5} className="text-purple" />
                </div>
                <div>
                  <p className="font-heading font-bold text-ink text-base mb-0.5">{o.label}</p>
                  <p className="font-sans text-sm text-muted leading-snug">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Reflection</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8">Key learnings</h2>
          <div className="flex flex-col gap-5">
            {learnings.map((r) => (
              <div key={r.label} className="bg-surface border border-border rounded-lg p-6 md:p-8">
                <p className="font-heading font-bold text-purple text-sm mb-3">{r.label}</p>
                <p className="font-sans text-base text-muted leading-relaxed italic">&ldquo;{r.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer nav */}
        <div className="flex items-center justify-between pt-8 border-t border-border">
          <a href="/" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors group">
            <ArrowLeft size={12} /><span>Back to portfolio</span>
          </a>
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted">courtneyeisenhuth.com</span>
        </div>

      </div>
    </div>
  );
}
