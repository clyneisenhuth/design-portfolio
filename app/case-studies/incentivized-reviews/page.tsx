"use client";

import { useRef, useEffect, useState } from "react";
import CustomCursor from "../../components/CustomCursor";
import CountUpStat from "../../components/CountUpStat";

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

const strategyPrinciples = [
  {
    icon: "🖼️",
    title: "Framing matters",
    desc: "Points positioned as appreciation for sharing feedback drove meaningfully different behavior than points positioned as payment. Recognition felt genuine; transactional framing introduced authenticity risk.",
  },
  {
    icon: "🔍",
    title: "Transparency builds trust",
    desc: "Incentivized reviews labeled visibly as such did not suppress readership. Shoppers expected disclosure and responded better to it than to unlabeled programs.",
  },
  {
    icon: "🚀",
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
    icon: "💬",
    title: "Loyalty prompt at point of submission",
    desc: "Customers were asked to confirm or join the loyalty program while submitting a review, reducing friction at the highest-intent moment.",
    tags: ["Submission Flow", "Loyalty", "Zero Friction"],
    color: "purple",
  },
  {
    icon: "📧",
    title: "Email-matched points release",
    desc: "Loyalty accounts were matched by submitted email, triggering automated reward delivery after moderation approval. No forced sign-in. Reward was tied to approval, not sentiment.",
    tags: ["CrowdTwist", "BazaarVoice", "Automation"],
    color: "blue",
  },
  {
    icon: "🏷️",
    title: "Visible incentive labeling",
    desc: "Published reviews that earned points carried a visible tag. Transparent by design, not buried in footnotes — baked in from day one rather than treated as a legal checkbox.",
    tags: ["Disclosure", "Trust", "Compliance"],
    color: "purple",
  },
];

const whatWorked = [
  {
    icon: "🤝",
    label: "Running a workshop that ended in decisions, not notes",
    desc: "Getting real cross-functional alignment on an ambiguous initiative is genuinely hard. This session produced a scoped MVP with buy-in across every function at the table.",
  },
  {
    icon: "👁️",
    label: "Naming the tradeoffs out loud before launch",
    desc: "The team went in with eyes open, which meant quality tradeoffs were tracked from day one rather than discovered and explained post-launch.",
  },
  {
    icon: "🏗️",
    label: "Keeping the build inside existing infrastructure",
    desc: "Using BazaarVoice and CrowdTwist rather than standing up new systems made Phase 1 achievable without a lengthy engineering cycle.",
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

export default function IncentivizedReviewsCaseStudy() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-bg">

        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-pale via-bg to-blue-pale">
          <div className="absolute -top-20 -right-20 w-80 h-80 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #8059C4, #D4A8F0)", filter: "blur(72px)" }} />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #4B7BE5, #8BB8F8)", filter: "blur(60px)" }} />

          <div className="max-w-4xl mx-auto px-6 pt-10 pb-20">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-muted hover:text-purple transition-colors duration-200 mb-12 group"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to portfolio
            </a>

            <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-4">
                Case Study · Strategy · 2025
              </p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
                Incentivized{" "}
                <span className="gradient-text">Reviews</span>{" "}
                Strategy ⭐
              </h1>
              <p className="font-sans text-lg text-muted max-w-2xl leading-relaxed mb-10">
                Driving review participation through loyalty without compromising authenticity — a cross-functional initiative that grew daily review volume by 300% across the AE + Aerie catalog.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Role", value: "Product Strategist" },
                  { label: "Company", value: "American Eagle Outfitters" },
                  { label: "Scope", value: "15M+ Loyalty Members" },
                  { label: "Tools", value: "Miro · Figma · Google Gemini" },
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
            <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">Overview</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-6">The opportunity</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <p className="font-sans text-base text-muted leading-relaxed">
                Product pages across the AE and Aerie catalog were under-reviewed. Sparse coverage meant customers had limited peer input when making purchase decisions, and merchandising teams were flying blind on qualitative product feedback.
              </p>
              <p className="font-sans text-base text-muted leading-relaxed">
                Both problems pointed to the same root cause: customers had no clear reason to come back and write a review after purchase. I partnered with a fellow Product Strategist on a cross-functional initiative to introduce <span className="font-extrabold text-purple">loyalty-based review incentives</span> — growing participation at scale without sacrificing the authenticity that makes review content worth reading.
              </p>
            </div>
          </Section>

          {/* Problem */}
          <Section>
            <div className="bg-surface border-2 border-border rounded-3xl p-8 md:p-10">
              <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">The Problem</p>
              <h2 className="font-heading text-3xl font-bold text-ink mb-5">Not enough reviews to actually help anyone</h2>
              <p className="font-sans text-base text-muted leading-relaxed mb-8">
                PDPs with sparse review coverage create friction at one of the most critical decision points in the purchase journey. Without peer input, customers have less confidence buying — particularly for new or lower-awareness products.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: "📉", label: "Low participation rate", desc: "The gap between customers who purchase and those who leave reviews was significant and growing." },
                  { icon: "🛒", label: "Conversion impact", desc: "Reviews influence conversion, return rates, and the quality of feedback available to merchandising." },
                  { icon: "🔧", label: "Structural problem", desc: "Closing the gap required a structural change to the value exchange — not a messaging fix." },
                ].map((p) => (
                  <div key={p.label} className="bg-bg rounded-2xl p-4 border border-border">
                    <span className="text-2xl mb-2 block">{p.icon}</span>
                    <p className="font-heading font-bold text-ink text-sm mb-1">{p.label}</p>
                    <p className="font-sans text-xs text-muted leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-purple-pale border-2 border-purple/20 rounded-2xl p-6">
                <p className="font-heading text-sm font-semibold text-purple mb-2">Problem Statement</p>
                <p className="font-sans text-sm text-ink leading-relaxed italic">
                  &ldquo;How might we increase review participation across the AE + Aerie catalog at scale, in a way that grows content volume without introducing authenticity risk or compromising shopper trust?&rdquo;
                </p>
              </div>
            </div>
          </Section>

          {/* Research stats */}
          <Section>
            <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-3">Research</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">The motivation was already there. It just needed a door.</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
              Industry data backed the strategic direction. The question wasn&apos;t whether incentives would drive participation — research suggested they would. The question was how to structure the incentive so it motivated behavior without distorting it.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {researchStats.map((s) => (
                <CountUpStat
                  key={s.value}
                  value={s.value}
                  label={s.label}
                  source={s.source}
                  className="bg-surface border-2 border-purple/20 rounded-3xl p-8 text-center hover:border-purple/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  numberClassName="text-5xl md:text-6xl"
                />
              ))}
            </div>

            <div className="bg-blue-pale border-2 border-blue/20 rounded-2xl p-6">
              <p className="font-heading font-bold text-blue text-sm mb-2">Academic backing</p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                A 2021 Journal of Marketing Research study by Woolley and Sharif found that <span className="font-bold text-ink">&ldquo;incentives increase review volume primarily through a selection effect, motivating people who would not typically post to participate.&rdquo;</span> Importantly, the same study found incentives also increase the relative positivity of review content — which informed our decision to build transparent disclosure in from day one rather than treat it as a legal checkbox.
              </p>
            </div>
          </Section>

          {/* Competitive research */}
          <Section>
            <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-3">Competitive Research</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">How others had solved it</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-6 max-w-2xl">
              We looked at how other retailers tackled incentivized review programs, focusing on three questions: how was the incentive framed, what eligibility and verification logic was in place, and what guardrails were protecting review quality?
            </p>

            <div className="flex flex-col gap-4 mb-6">
              {competitiveInsights.map((c) => (
                <div key={c.brand} className="bg-surface border-2 border-border rounded-2xl p-5 flex gap-4 items-start">
                  <div className="bg-purple-pale rounded-xl px-3 py-1.5 flex-shrink-0">
                    <p className="font-heading font-bold text-purple text-xs">{c.brand}</p>
                  </div>
                  <p className="font-sans text-sm text-muted leading-relaxed">{c.finding}</p>
                </div>
              ))}
            </div>

            <div className="bg-purple-pale border-2 border-purple/20 rounded-2xl p-6">
              <p className="font-heading font-bold text-purple text-sm mb-2">Consistent finding across competitors</p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                <span className="font-bold text-ink">Incentives increase participation. Guardrails and framing determine whether the resulting content is useful.</span> The most durable insight: the primary motivation for leaving a review is wanting to help other shoppers. Incentives don&apos;t replace that motivation — they give people a nudge to act on it.
              </p>
            </div>
          </Section>

          {/* Strategy principles */}
          <Section>
            <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">Strategy</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Giving customers a reason to show up</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
              We approached this as a value exchange design problem. Three principles shaped the strategy, drawn from competitive research, behavioral science, and an honest look at platform constraints.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {strategyPrinciples.map((p, i) => (
                <div
                  key={p.title}
                  className="bg-surface border-2 border-border rounded-3xl p-6 hover:border-purple/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="text-3xl mb-4 block">{p.icon}</span>
                  <h3 className="font-heading text-lg font-bold text-ink mb-2">{p.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Execution */}
          <Section>
            <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-3">Execution</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Getting everyone in the room before anyone made decisions</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
              My co-strategist and I facilitated a cross-functional workshop using MoSCoW prioritization — getting product, engineering, marketing, legal, and UX into the same room before any design decisions were locked. The goal was to surface constraints early, align on scope, and bake legal requirements around incentivized review disclosure into the design from the start.
            </p>

            <div className="bg-surface border-2 border-border rounded-3xl overflow-hidden mb-6">
              <img
                src="/moscow-image1.avif"
                alt="MoSCoW prioritization workshop with cross-functional team"
                className="w-full object-cover"
              />
              <div className="p-6 md:p-8">
                <p className="font-heading font-bold text-ink text-base mb-1">Cross-functional workshop</p>
                <p className="font-sans text-xs text-muted mb-5">MoSCoW prioritization · Product, Engineering, Marketing, Legal, UX</p>
                <div className="flex flex-wrap gap-2">
                  {["Product", "Engineering", "Marketing", "Legal", "UX", "MoSCoW Framework", "Phase 1 Scoping"].map((tag) => (
                    <span key={tag} className="font-sans text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-pale text-purple border border-purple/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="font-sans text-sm font-semibold text-ink mb-4">Three designed behaviors anchored the build:</p>
            <div className="flex flex-col gap-5">
              {executionBehaviors.map((b, i) => (
                <div
                  key={b.title}
                  className={`bg-surface border-2 rounded-3xl p-6 md:p-8 flex gap-5 items-start hover:shadow-lg transition-all duration-300 ${
                    b.color === "purple" ? "border-purple/20 hover:border-purple/40" : "border-blue/20 hover:border-blue/40"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${
                    b.color === "purple" ? "bg-purple-pale" : "bg-blue-pale"
                  }`}>
                    {b.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-xl font-bold text-ink mb-2">{b.title}</h3>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-4">{b.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {b.tags.map((t) => (
                        <span
                          key={t}
                          className={`font-sans text-xs font-semibold px-2.5 py-1 rounded-full ${
                            b.color === "purple" ? "bg-purple text-white" : "bg-blue text-white"
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

            <div className="mt-6 bg-blue-pale border-2 border-blue/20 rounded-2xl p-6">
              <p className="font-heading font-bold text-blue text-sm mb-2">Existing infrastructure, maximum leverage</p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                The existing <span className="font-bold text-ink">BazaarVoice</span> platform already supported incentivized review logic — no new platform or significant re-architecture required. <span className="font-bold text-ink">CrowdTwist</span> handled loyalty verification on the backend. Phase 1 was scoped to maximize impact within what already existed.
              </p>
            </div>
          </Section>

          {/* Final Screens */}
          <Section>
            <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">Final Screens</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">What shipped</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
              Two surfaces where the incentive program became visible to customers — the submission form and the published review list.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-surface border-2 border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img
                  src="/points-image2.jpeg"
                  alt="Write a Review screen showing Real Rewards loyalty prompt — earn 50 points per review"
                  className="w-full object-cover"
                />
                <div className="p-5">
                  <p className="font-heading font-bold text-ink text-sm mb-1">Loyalty prompt at submission</p>
                  <p className="font-sans text-xs text-muted leading-relaxed">The Real Rewards points offer surfaced inline during review submission — at the highest-intent moment, with no extra steps.</p>
                </div>
              </div>
              <div className="bg-surface border-2 border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img
                  src="/points-image1.jpeg"
                  alt="All Reviews list screen showing Reward Points Awarded label on incentivized reviews"
                  className="w-full object-cover"
                />
                <div className="p-5">
                  <p className="font-heading font-bold text-ink text-sm mb-1">Visible incentive labeling</p>
                  <p className="font-sans text-xs text-muted leading-relaxed">Published reviews that earned points carry a visible &ldquo;Reward Points Awarded&rdquo; label — transparent by design, not buried in footnotes.</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Outcomes */}
          <Section>
            <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">Outcomes</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8">The numbers moved. So did our thinking.</h2>

            {/* Big stat */}
            <div className="bg-gradient-to-br from-purple-pale to-blue-pale border-2 border-purple/20 rounded-3xl p-8 md:p-10 mb-8 text-center">
              <p className="font-heading font-bold text-7xl md:text-8xl gradient-text-static mb-2">300%</p>
              <p className="font-sans text-base text-muted max-w-sm mx-auto">Increase in daily review volume, reaching approximately <span className="font-bold text-ink">1,500 reviews per day</span></p>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              {whatWorked.map((w) => (
                <div
                  key={w.label}
                  className="bg-surface border-2 border-border rounded-2xl p-5 flex items-start gap-4 hover:border-purple/30 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-2xl flex-shrink-0">{w.icon}</span>
                  <div>
                    <p className="font-heading font-bold text-ink text-base mb-0.5">{w.label}</p>
                    <p className="font-sans text-sm text-muted leading-snug">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-purple-pale border-2 border-purple/20 rounded-2xl p-6">
              <p className="font-heading font-bold text-purple text-sm mb-2">Secondary benefit</p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                The review flow prompted <span className="font-bold text-ink">loyalty sign-ups from customers who had not previously enrolled</span>, giving the program an organic growth engine at a natural moment of brand engagement.
              </p>
            </div>
          </Section>

          {/* Quality tradeoff */}
          <Section>
            <div className="bg-surface border-2 border-border rounded-3xl p-8 md:p-10">
              <span className="text-3xl mb-3 block">⚖️</span>
              <h3 className="font-heading text-2xl font-bold text-ink mb-3">Accepted tradeoffs, tracked from day one</h3>
              <p className="font-sans text-base text-muted leading-relaxed mb-4">
                The program produced a measurable but expected quality tradeoff: both high-quality and lower-effort submissions increased. That was an accepted Phase 1 outcome, not a surprise — and it gave us the real behavioral data needed to sharpen guardrails in a future phase.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Quality tradeoff anticipated and documented pre-launch",
                  "Behavioral data collected to inform Phase 2 guardrails",
                  "Moderation-gated reward release tied to approval, not sentiment",
                  "Transparent labeling protected long-term review credibility",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-purple font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="font-sans text-sm text-muted leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Longer-term impact */}
          <Section>
            <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-3">Longer-Term Impact</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8">Beyond the feature</h2>
            <div className="flex flex-col gap-5">
              {[
                {
                  label: "The workshop became a template",
                  quote: "The cross-functional workshop model used here ended up becoming something of a reference point for how to run alignment sessions on ambiguous initiatives. The structure, the research-grounded framing, and the early legal involvement carried into subsequent loyalty and engagement work across the team.",
                },
                {
                  label: "The strategic direction aged well",
                  quote: "According to Antavo's Global Customer Loyalty Report, rewarding non-transactional activities like reviews is one of the most effective levers for reducing member churn — something 65% of loyalty program owners now actively track. The direction we chose in Phase 1 has only become more relevant.",
                },
                {
                  label: "Eyes open from the start",
                  quote: "Naming the tradeoffs out loud before launch meant the quality tradeoffs were tracked from day one rather than discovered and explained post-launch. That felt like the right way to run a program built on trust.",
                },
              ].map((r) => (
                <div key={r.label} className="bg-surface border-2 border-border rounded-3xl p-6 md:p-8">
                  <p className="font-heading font-bold text-purple text-sm mb-3">{r.label}</p>
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
