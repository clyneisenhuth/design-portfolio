"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Image,
  Search,
  Rocket,
  MessageSquare,
  Mail,
  Tag,
  Users,
  Eye,
  Building2,
  TrendingDown,
  ShoppingCart,
  Settings2,
  Scale,
  CheckCircle2,
} from "lucide-react";
import { useInView } from "../../hooks/useInView";
import CompetitiveMatrix from "../../components/artifacts/CompetitiveMatrix";
import ResultsBarChart from "../../components/artifacts/ResultsBarChart";

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

const strategyPrinciples = [
  {
    Icon: Image,
    title: "Framing matters",
    desc: "Points positioned as appreciation for sharing feedback drove meaningfully different behavior than points positioned as payment. Recognition felt genuine; transactional framing introduced authenticity risk.",
  },
  {
    Icon: Search,
    title: "Transparency builds trust",
    desc: "Incentivized reviews labeled visibly as such did not suppress readership. Shoppers expected disclosure and responded better to it than to unlabeled programs.",
  },
  {
    Icon: Rocket,
    title: "Launch lean and learn",
    desc: "Competitors consistently launched with minimal controls, used real behavioral data to understand what drove quality, and refined guardrails in subsequent phases. Overbuilding Phase 1 would delay the learning.",
  },
];

const competitiveInsights = [
  {
    brand: "Abercrombie",
    finding: "Loyalty-linked review program with visible reward labeling, email-matched verification, and post-moderation award logic.",
  },
  {
    brand: "Adidas",
    finding: "Loyalty-linked program with transparent incentive disclosure on published reviews and moderation-gated reward release.",
  },
  {
    brand: "Old Navy",
    finding: "Points-for-reviews program with email-matched verification and visible incentive labels on reviewer cards.",
  },
];

const researchStats = [
  { value: "73%", label: "of consumers say they'd be motivated to write a review if offered an incentive", source: "PowerReviews" },
  { value: "75%", label: "of consumers want to be rewarded for engagement beyond purchase", source: "Industry Research" },
];

const executionBehaviors = [
  {
    Icon: MessageSquare,
    title: "Loyalty prompt at point of submission",
    desc: "Customers were asked to confirm or join the loyalty program while submitting a review, reducing friction at the highest-intent moment.",
    tags: ["Submission Flow", "Loyalty", "Zero Friction"],
  },
  {
    Icon: Mail,
    title: "Email-matched points release",
    desc: "Loyalty accounts were matched by submitted email, triggering automated reward delivery after moderation approval. No forced sign-in. Reward was tied to approval, not sentiment.",
    tags: ["CrowdTwist", "BazaarVoice", "Automation"],
  },
  {
    Icon: Tag,
    title: "Visible incentive labeling",
    desc: "Published reviews that earned points carried a visible tag. Transparent by design, not buried in footnotes. Baked in from day one rather than treated as a legal checkbox.",
    tags: ["Disclosure", "Trust", "Compliance"],
  },
];

const whatWorked = [
  {
    Icon: Users,
    label: "Running a workshop that ended in decisions, not notes",
    desc: "Getting real cross-functional alignment on an ambiguous initiative is genuinely hard. This session produced a scoped MVP with buy-in across every function at the table.",
  },
  {
    Icon: Eye,
    label: "Naming the tradeoffs out loud before launch",
    desc: "The team went in with clear awareness of the tradeoffs, which meant quality issues were tracked from day one rather than discovered and explained post-launch.",
  },
  {
    Icon: Building2,
    label: "Keeping the build inside existing infrastructure",
    desc: "Using BazaarVoice and CrowdTwist rather than standing up new systems made Phase 1 achievable without a lengthy engineering cycle.",
  },
];

export default function IncentivizedReviewsCaseStudy() {
  return (
    <div className="min-h-screen bg-bg">

      {/* Hero */}
      <section className="border-t border-border px-6 pt-24 pb-16 bg-bg">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <a href="/" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors mb-12 group">
              <ArrowLeft size={12} /><span>Back</span>
            </a>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-6">Case Study · Strategy · 2025</p>
            <h1 className="font-heading font-bold text-ink mb-6" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>Incentivized Reviews Strategy</h1>
            <p className="font-sans text-base text-muted leading-relaxed max-w-2xl mb-10">
              Driving review participation through loyalty without compromising authenticity. A cross-functional initiative that grew daily review volume by 300% across the AE + Aerie catalog.
            </p>
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              {[
                { label: "Role", value: "Product Strategist" },
                { label: "Company", value: "American Eagle Outfitters" },
                { label: "Scope", value: "15M+ Loyalty Members" },
                { label: "Tools", value: "Miro · Figma" },
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
              Product pages across the AE and Aerie catalog were under-reviewed. Sparse coverage meant customers had limited peer input when making purchase decisions, and merchandising teams were flying blind on qualitative product feedback.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              Both problems pointed to the same root cause: customers had no clear reason to come back and write a review after purchase. I partnered with a fellow Product Strategist on a cross-functional initiative to introduce <span className="font-extrabold text-purple">loyalty-based review incentives</span>, using the AE + Aerie Real Rewards program's 15M+ members as the addressable audience, growing participation at scale without sacrificing the authenticity that makes review content worth reading.
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
            <h2 className="font-heading text-3xl font-bold text-ink mb-5">Not enough reviews to actually help anyone</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              PDPs with sparse review coverage create friction at one of the most critical decision points in the purchase journey. Without peer input, customers have less confidence buying, particularly for new or lower-awareness products.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { Icon: TrendingDown, label: "Low participation rate", desc: "The gap between customers who purchase and those who leave reviews was significant and growing." },
                { Icon: ShoppingCart, label: "Conversion impact", desc: "Reviews influence conversion, return rates, and the quality of feedback available to merchandising." },
                { Icon: Settings2, label: "Structural problem", desc: "Closing the gap required a structural change to the value exchange, not a messaging fix." },
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
                &ldquo;How might we increase review participation across the AE + Aerie catalog at scale, in a way that grows content volume without introducing authenticity risk or compromising shopper trust?&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Research stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Research</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">The motivation was already there. It just needed a door.</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
            Industry data backed the strategic direction. The question wasn&apos;t whether incentives would drive participation — research suggested they would. The question was how to structure the incentive so it motivated behavior without distorting it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {researchStats.map((s) => (
              <div key={s.value} className="bg-surface border border-border rounded-lg p-8 text-center">
                <StatItem raw={s.value} label={s.label} />
                <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mt-2">{s.source}</p>
              </div>
            ))}
          </div>

          <div className="border border-border rounded-lg bg-surface p-6">
            <p className="font-heading font-bold text-ink text-sm mb-2">Academic backing</p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              A 2021 Journal of Marketing Research study by Woolley and Sharif found that <span className="font-bold text-ink">&ldquo;incentives increase review volume primarily through a selection effect, motivating people who would not typically post to participate.&rdquo;</span> Importantly, the same study found incentives also increase the relative positivity of review content, which informed our decision to build transparent disclosure in from day one rather than treat it as a legal checkbox.
            </p>
          </div>
        </motion.div>

        {/* Competitive research */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Competitive Research</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">How others had solved it</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-6 max-w-2xl">
            We looked at how other retailers tackled incentivized review programs, focusing on three questions: how was the incentive framed, what eligibility and verification logic was in place, and what guardrails were protecting review quality?
          </p>

          <div className="mb-6">
            <CompetitiveMatrix />
          </div>

          <div className="flex flex-col gap-4 mb-6">
            {competitiveInsights.map((c) => (
              <div key={c.brand} className="bg-surface border border-border rounded-lg p-5 flex gap-4 items-start">
                <div className="bg-purple-pale rounded-md px-3 py-1.5 flex-shrink-0">
                  <p className="font-heading font-bold text-purple text-xs">{c.brand}</p>
                </div>
                <p className="font-sans text-sm text-muted leading-relaxed">{c.finding}</p>
              </div>
            ))}
          </div>

          <div className="border border-border rounded-lg bg-surface p-6">
            <p className="font-heading font-bold text-purple text-sm mb-2">Consistent finding across competitors</p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              <span className="font-bold text-ink">Incentives increase participation. Guardrails and framing determine whether the resulting content is useful.</span> The most durable insight: the primary motivation for leaving a review is wanting to help other shoppers. Incentives give people a nudge to act on it.
            </p>
          </div>
        </motion.div>

        {/* Strategy principles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Strategy</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Giving customers a reason to show up</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
            We approached this as a value exchange design problem. Three principles shaped the strategy, drawn from competitive research, behavioral science, and an honest look at platform constraints.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {strategyPrinciples.map((p) => (
              <div
                key={p.title}
                className="bg-surface border border-border rounded-lg p-6 transition-[opacity,transform] duration-300"
              >
                <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0 mb-4">
                  <p.Icon size={16} strokeWidth={1.5} className="text-purple" />
                </div>
                <h3 className="font-heading text-lg font-bold text-ink mb-2">{p.title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Execution */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Execution</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Getting everyone in the room before anyone made decisions</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
            My co-strategist and I facilitated a cross-functional workshop using MoSCoW prioritization, bringing product, engineering, marketing, legal, and UX into the same room before any design decisions were locked. The goal was to surface constraints early, align on scope, and bake legal requirements around incentivized review disclosure into the design from the start.
          </p>

          <div className="bg-surface border border-border rounded-lg overflow-hidden mb-6">
            <img
              src="/case-studies/incentivized-reviews/moscow-image1.avif"
              alt="MoSCoW prioritization board sorting review incentive requirements into Must Have, Should Have, Could Have, and Won't Have"
              className="w-full object-cover"
            />
            <div className="p-6 md:p-8">
              <p className="font-heading font-bold text-ink text-base mb-1">The MoSCoW board</p>
              <p className="font-sans text-xs text-muted mb-4">Requirements sorted live in the workshop · Product, Engineering, Marketing, Legal, UX</p>
              <div className="flex flex-wrap gap-3">
                {["Product", "Engineering", "Marketing", "Legal", "UX", "MoSCoW Framework", "Phase 1 Scoping"].map((tag) => (
                  <span key={tag} className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="font-sans text-sm font-semibold text-ink mb-4">Three designed behaviors anchored the build:</p>
          <div className="flex flex-col gap-5">
            {executionBehaviors.map((b) => (
              <div
                key={b.title}
                className="bg-surface border border-border rounded-lg p-6 md:p-8 flex gap-5 items-start transition-[opacity,transform] duration-300"
              >
                <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0">
                  <b.Icon size={16} strokeWidth={1.5} className="text-purple" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-xl font-bold text-ink mb-2">{b.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-4">{b.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {b.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border border-border rounded-lg bg-surface p-6">
            <p className="font-heading font-bold text-ink text-sm mb-2">Existing infrastructure, maximum leverage</p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              The existing <span className="font-bold text-ink">BazaarVoice</span> platform already supported incentivized review logic with no new platform or significant re-architecture required. <span className="font-bold text-ink">CrowdTwist</span> handled loyalty verification on the backend. Phase 1 was scoped to maximize impact within what already existed.
            </p>
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
            Two surfaces where the incentive program became visible to customers: the submission form and the published review list.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface border border-border rounded-lg overflow-hidden transition-[opacity,transform] duration-300">
              <img
                src="/case-studies/incentivized-reviews/points-image2.jpeg"
                alt="Write a Review screen showing Real Rewards loyalty prompt — earn 50 points per review"
                className="w-full object-cover"
              />
              <div className="p-5">
                <p className="font-heading font-bold text-ink text-sm mb-1">Loyalty prompt at submission</p>
                <p className="font-sans text-xs text-muted leading-relaxed">The Real Rewards points offer surfaced inline during review submission, at the highest-intent moment, with no extra steps.</p>
              </div>
            </div>
            <div className="bg-surface border border-border rounded-lg overflow-hidden transition-[opacity,transform] duration-300">
              <img
                src="/case-studies/incentivized-reviews/points-image1.jpeg"
                alt="All Reviews list screen showing Reward Points Awarded label on incentivized reviews"
                className="w-full object-cover"
              />
              <div className="p-5">
                <p className="font-heading font-bold text-ink text-sm mb-1">Visible incentive labeling</p>
                <p className="font-sans text-xs text-muted leading-relaxed">Published reviews that earned points carry a visible &ldquo;Reward Points Awarded&rdquo; label, transparent by design and not buried in footnotes.</p>
              </div>
            </div>
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8">The numbers moved. So did our thinking.</h2>

          {/* Big stat */}
          <div className="border border-border rounded-lg bg-surface p-8 md:p-10 mb-8 text-center">
            <StatItem raw="300%" label="increase in daily review volume" />
            <p className="font-sans text-base text-muted max-w-sm mx-auto mt-4">Reaching approximately <span className="font-bold text-ink">1,500 reviews per day</span></p>
          </div>

          <div className="mb-8">
            <ResultsBarChart />
          </div>

          <div className="flex flex-col gap-4 mb-6">
            {whatWorked.map((w) => (
              <div
                key={w.label}
                className="bg-surface border border-border rounded-lg p-5 flex items-start gap-4 transition-[opacity,transform] duration-300"
              >
                <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0">
                  <w.Icon size={16} strokeWidth={1.5} className="text-purple" />
                </div>
                <div>
                  <p className="font-heading font-bold text-ink text-base mb-0.5">{w.label}</p>
                  <p className="font-sans text-sm text-muted leading-snug">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-border rounded-lg bg-surface p-6">
            <p className="font-heading font-bold text-purple text-sm mb-2">Secondary benefit</p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              The review flow prompted <span className="font-bold text-ink">loyalty sign-ups from customers who had not previously enrolled</span>, giving the program an organic growth engine at a natural moment of brand engagement.
            </p>
          </div>
        </motion.div>

        {/* Quality tradeoff */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border border-border rounded-lg bg-surface p-8 md:p-10">
            <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0 mb-4">
              <Scale size={16} strokeWidth={1.5} className="text-purple" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-ink mb-3">Accepted tradeoffs, tracked from day one</h3>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              The program produced a measurable but expected quality tradeoff: both high-quality and lower-effort submissions increased. That was an accepted Phase 1 outcome, not a surprise. It gave us the real behavioral data needed to sharpen guardrails in a future phase.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Quality tradeoff anticipated and documented pre-launch",
                "Behavioral data collected to inform Phase 2 guardrails",
                "Moderation-gated reward release tied to approval, not sentiment",
                "Transparent labeling protected long-term review credibility",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={14} strokeWidth={1.5} className="text-purple flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-sm text-muted leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Longer-term impact */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Longer-Term Impact</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8">Beyond the feature</h2>
          <div className="flex flex-col gap-5">
            {[
              {
                label: "The workshop became a template",
                quote: "The cross-functional workshop model used here ended up becoming something of a reference point for how to run alignment sessions on ambiguous initiatives. The structure, the research-grounded framing, and the early legal involvement carried into subsequent loyalty and engagement work across the team.",
              },
              {
                label: "The strategic direction aged well",
                quote: "According to Antavo's Global Customer Loyalty Report, rewarding non-transactional activities like reviews is one of the most effective levers for reducing member churn, something 65% of loyalty program owners now actively track. The direction we chose in Phase 1 has only become more relevant.",
              },
              {
                label: "Tradeoffs named upfront, tracked throughout",
                quote: "Naming the tradeoffs out loud before launch meant the quality tradeoffs were tracked from day one rather than discovered and explained post-launch. That felt like the right way to run a program built on trust.",
              },
            ].map((r) => (
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
