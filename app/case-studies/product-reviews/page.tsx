"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  User,
  Camera,
  FileText,
  SlidersHorizontal,
  Search,
  Image,
  PenLine,
  TrendingUp,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  Layers,
} from "lucide-react";
import CompAnalysisTable from "../../components/CompAnalysisTable";
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

const purchaseFactors = [
  { rank: "1", factor: "Price", pct: "83%", note: "Reviews validate worth relative to cost" },
  { rank: "2", factor: "Return Policy", pct: "80%", note: "Reviews mentioning returns influence purchase" },
  { rank: "3", factor: "Ratings & Reviews", pct: "77%", note: "Central to apparel purchase decisions" },
  { rank: "4", factor: "Fit & Sizing Info", pct: "67%", note: "Top return reason; reviews address sizing accuracy" },
  { rank: "5", factor: "Customer Photos", pct: "59%", note: "Shows product on real people vs. studio photography" },
  { rank: "6", factor: "Personal Style", pct: "58%", note: "Shoppers verify expectations through reviews" },
];

const userTestingFindings = [
  {
    Icon: User,
    title: "Size & body type discovery gap",
    desc: "No easy mechanism to locate reviews from similar body types or sizes, despite it being essential information for apparel purchase decisions.",
  },
  {
    Icon: Camera,
    title: "Photo underutilization",
    desc: "Customer photos were underused because they were difficult to discover and browse. Shoppers didn't realize they existed.",
  },
  {
    Icon: FileText,
    title: "Submission flow mismatch",
    desc: "The flow felt like a web form inside a native app. It didn't match expected swipe gestures or familiar device patterns.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Filtering limitations",
    desc: "Sorting and filtering options were too limited to help users eliminate irrelevant reviews and surface what actually mattered to them.",
  },
];

const competitiveFindings = [
  { brand: "Nordstrom", finding: "Richest reviews surface: tappable star-tier bars, inline search, PROS/CONS topic chips" },
  { brand: "Macy's", finding: "Most multi-dimensional fit section with three separate sliders: silhouette, size, and length" },
  { brand: "Gap", finding: "AI-generated sentiment summary with structured Likes, Mixed, Dislikes tags. Since adopted by 6 of 11 competitors." },
];

const principles = [
  {
    Icon: Search,
    title: "Discoverability",
    desc: "Relevant reviews should rise to the top. Filtering, sorting, and hierarchy should do the heavy lifting so shoppers don't have to.",
  },
  {
    Icon: Image,
    title: "Visual Richness",
    desc: "Customer photos are first-class content and should be treated that way: easy to find, easy to browse, and easy to submit.",
  },
  {
    Icon: PenLine,
    title: "Submission Ease",
    desc: "Writing a review should feel native and fast. Every step of friction removed is a potential review gained.",
  },
];

const solutions = [
  {
    Icon: Camera,
    title: "Enriched Photo Carousels",
    desc: "Customer photos elevated into a prominent, swipeable carousel on the PDP. No competitor had built a truly photo-forward experience, making this a clear differentiation opportunity. Submission flow updated to explicitly prompt photo uploads at the right moment.",
    tags: ["PDP", "UGC", "Mobile-first"],
    stat: "161%",
    statLabel: "higher conversion for shoppers who see UGC",
    color: "purple",
  },
  {
    Icon: FileText,
    title: "Expanded Review Sheet",
    desc: "Individual reviews restructured with better typography, breathing room, and fit context metadata: size purchased, fit rating, and verified purchase status surfaced alongside the review body. Helps shoppers self-select without guesswork.",
    tags: ["Typography", "Fit Context", "Trust Signals"],
    stat: null,
    statLabel: null,
    color: "blue",
  },
  {
    Icon: PenLine,
    title: "Native Write a Review Flow",
    desc: "Rebuilt from scratch as a fully native iOS and Android flow with single-screen layouts, native input components, and gesture patterns that match device conventions. Replaced the multi-step web-form experience that was causing abandonment.",
    tags: ["iOS", "Android", "Native Patterns"],
    stat: null,
    statLabel: null,
    color: "purple",
  },
  {
    Icon: SlidersHorizontal,
    title: "Enhanced Filtering & Sorting",
    desc: "New controls for rating, recency, photo availability, and fit attributes. Directly addressing the Baymard finding that 78% of mobile e-commerce sites offer poor filtering. Well-implemented filters increase conversion by 26%, yet only 16% of major sites provide genuinely good filtering.",
    tags: ["Filtering", "Sorting", "Apparel-specific"],
    stat: "26%",
    statLabel: "conversion lift from well-implemented filters (Baymard)",
    color: "blue",
  },
];

const outcomes = [
  { Icon: TrendingUp, label: "Improved content discoverability", desc: "Restructured hierarchy surfaced relevant reviews and photos without deep navigation" },
  { Icon: CheckCircle2, label: "Higher submission rates", desc: "Native flow replaced web-form patterns, directly reducing abandonment" },
  { Icon: Camera, label: "Increased photo UGC volume", desc: "First-class photo prompts in submission drove more visual content" },
  { Icon: Clock, label: "Greater session engagement", desc: "Richer content gave shoppers more reason to explore before purchase" },
  { Icon: ShieldCheck, label: "WCAG 2.X AA compliance", desc: "Accessibility baked in from the start, not bolted on at QA" },
  { Icon: Zap, label: "Stronger purchase confidence", desc: "Closed the gap between what shoppers needed and what the experience delivered" },
];

const reflections = [
  {
    label: "On forced migrations",
    quote: "Forced migrations are rarely just migrations. The API update created alignment and urgency that can be hard to manufacture for experience improvements on their own, and the team made good use of that window to address debt that had been building for a while.",
  },
  {
    label: "On the research approach",
    quote: "The unmoderated research approach was the right call for this problem. Because we were studying navigation and discovery behavior rather than task completion, watching users in their natural context surfaced patterns that a moderated session might have smoothed over.",
  },
  {
    label: "On the submission flow",
    quote: "The biggest design challenge was the submission flow. Rebuilding it as a fully native experience required early, honest conversations with engineering about what was feasible. Those conversations shaped the scope in ways that made the final handoff much cleaner.",
  },
];

export default function ProductReviewsCaseStudy() {
  return (
    <div className="min-h-screen bg-bg">

      {/* Hero */}
      <section className="border-t border-border px-6 pt-24 pb-16 bg-bg">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <a href="/" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors mb-12 group">
              <ArrowLeft size={12} /><span>Back</span>
            </a>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-6">Case Study · Mobile Design · 2024</p>
            <h1 className="font-heading font-bold text-ink mb-6" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>App Product Reviews Redesign</h1>
            <p className="font-sans text-base text-muted leading-relaxed max-w-2xl mb-10">
              End-to-end redesign of the product reviews experience in the AE + Aerie mobile app, rebuilding photo carousels, submission flows, and review UI to turn a fragmented section into a high-trust content engine.
            </p>
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              {[
                { label: "Role", value: "Product Designer" },
                { label: "Company", value: "American Eagle Outfitters" },
                { label: "Platform", value: "iOS & Android" },
                { label: "Tools", value: "Figma · Axure · Miro" },
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

        {/* Context */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Context</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-6">The opportunity</h2>
          <p className="font-sans text-base text-muted leading-relaxed max-w-2xl">
            A vendor API migration created a rare blank-slate opportunity: rebuild the entire AE + Aerie mobile app reviews experience from scratch rather than patch an aging system. I led design end-to-end, collaborating with product management on scoping, research execution, and handoff.
          </p>
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
            <h2 className="font-heading text-3xl font-bold text-ink mb-5">Fragmented, friction-heavy, and visually flat</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              The existing reviews experience failed shoppers in three connected ways, each mapping to documented industry failure modes.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { Icon: Layers, label: "Fragmented interactions", desc: "Inconsistent UX patterns across PDP, review detail, and submission" },
                { Icon: Camera, label: "Hidden customer photos", desc: "UGC imagery buried below the fold with no surfacing strategy" },
                { Icon: FileText, label: "High submission friction", desc: "Multi-step web forms causing abandonment on mobile" },
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
                &ldquo;How might we redesign the AE + Aerie reviews experience so that shoppers can quickly find relevant content, engage with real customer photos, and write reviews with as little friction as possible, building the kind of purchase confidence that drives conversion?&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why reviews matter */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Research</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Reviews are a primary purchase driver</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
            User behavior data and industry benchmarking confirmed the stakes and revealed clear gaps worth closing.
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { value: "99%", label: "of clothing shoppers read reviews before buying" },
              { value: "77%", label: "consider reviews a key purchase factor" },
              { value: "59%", label: "specifically seek customer photos before buying" },
              { value: "270%", label: "higher conversion for products with reviews" },
            ].map((s) => (
              <div key={s.value} className="bg-surface border border-border rounded-lg p-5 text-center">
                <StatItem raw={s.value} label={s.label} />
              </div>
            ))}
          </div>

          {/* Purchase factors table */}
          <div className="bg-surface border border-border rounded-lg overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-border">
              <p className="font-heading font-bold text-ink text-sm">Top considerations when purchasing clothing</p>
              <p className="font-sans text-xs text-muted">Sources: PowerReviews 2023, SHEIN Global Survey, FitSmallBusiness 2025</p>
            </div>
            {purchaseFactors.map((f, i) => (
              <div key={f.factor} className={`flex items-start gap-4 px-6 py-4 ${i < purchaseFactors.length - 1 ? "border-b border-border" : ""}`}>
                <span className="font-heading font-bold text-muted text-sm w-4 flex-shrink-0">{f.rank}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-0.5">
                    <p className="font-sans font-bold text-ink text-sm">{f.factor}</p>
                    <span className="font-heading font-bold text-sm text-purple">{f.pct}</span>
                  </div>
                  <p className="font-sans text-xs text-muted">{f.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-border rounded-lg bg-surface p-6">
            <p className="font-heading font-bold text-ink text-sm mb-2">Industry gap: Baymard Institute</p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              <span className="font-bold text-ink">78% of mobile e-commerce sites</span> offer poor to mediocre review filtering. Fit context (height, size purchased, fit rating) was almost universally absent, despite being the top return driver in apparel.
            </p>
          </div>
        </motion.div>

        {/* Unmoderated User Testing */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border border-border rounded-lg bg-surface p-8 md:p-10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">User Research</p>
            <h2 className="font-heading text-3xl font-bold text-ink mb-3">Unmoderated remote user interviews</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              To study natural behavior rather than task completion, I ran unmoderated remote interviews with existing AE and Aerie app users, observing how they actually navigated the reviews surface, what they were looking for, and where they dropped off.
            </p>

            <p className="font-heading font-bold text-ink text-sm mb-4">What we observed</p>
            <div className="grid md:grid-cols-2 gap-4">
              {userTestingFindings.map((f) => (
                <div key={f.title} className="bg-bg rounded-md p-5 border border-border">
                  <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0 mb-3">
                    <f.Icon size={16} strokeWidth={1.5} className="text-purple" />
                  </div>
                  <p className="font-heading font-bold text-ink text-sm mb-1.5">{f.title}</p>
                  <p className="font-sans text-xs text-muted leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border border-border rounded-md bg-bg p-4">
              <p className="font-sans text-xs text-muted leading-relaxed">
                <span className="font-bold text-ink">Aligned with industry research:</span> Findings matched closely with Baymard Institute&apos;s large-scale usability testing, which consistently identifies limited filtering, buried visual content, and non-native submission flows as the most common review UX failure modes in mobile e-commerce.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Competitive Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Competitive Analysis</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Benchmarking 11 retail apps</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-6 max-w-2xl">
            I analyzed reviews experiences across leading retail apps including Abercrombie & Fitch, Nordstrom, Urban Outfitters, Gap, Lululemon, Nike, Victoria&apos;s Secret, Macy&apos;s, Sephora, Target, and Walmart, benchmarking PDP display, filtering, photo UGC treatment, and submission flows.
          </p>

          <div className="flex flex-col gap-4 mb-6">
            {competitiveFindings.map((c) => (
              <div key={c.brand} className="bg-surface border border-border rounded-lg p-5 flex gap-4 items-start">
                <div className="bg-purple-pale rounded-md px-3 py-1.5 flex-shrink-0">
                  <p className="font-heading font-bold text-purple text-xs">{c.brand}</p>
                </div>
                <p className="font-sans text-sm text-muted leading-relaxed">{c.finding}</p>
              </div>
            ))}
          </div>

          <CompAnalysisTable />

          <div className="border border-border rounded-lg bg-surface p-6 mt-6">
            <p className="font-heading font-bold text-purple text-sm mb-2">Clear opportunity identified</p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Only <span className="font-bold text-ink">2 of 11 competitors</span> offered review search. And no competitor had built a truly photo-forward carousel experience, making it a clear differentiation opportunity for AE + Aerie.
            </p>
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Design Principles</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8">Three north stars</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {principles.map((p) => (
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

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Solutions</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">What we built</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
            Four connected improvements, each grounded in user research findings and documented industry best practices.
          </p>
          <div className="flex flex-col gap-5">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="bg-surface border border-border rounded-lg p-6 md:p-8 flex gap-5 items-start transition-[opacity,transform] duration-300"
              >
                <div className={`w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0 ${
                  s.color === "purple" ? "bg-purple-pale" : "bg-blue-pale"
                }`}>
                  <s.Icon size={16} strokeWidth={1.5} className="text-purple" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-xl font-bold text-ink mb-2">{s.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-4">{s.desc}</p>
                  {s.stat && (
                    <div className="inline-flex items-center gap-2 rounded-md px-3 py-2 mb-4 border border-border bg-surface">
                      <span className="font-heading font-bold text-lg text-purple">{s.stat}</span>
                      <span className="font-sans text-xs text-muted">{s.statLabel}</span>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-3">
                    {s.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
            Four connected surfaces, each addressing a distinct gap identified in research.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { src: "/case-studies/product-reviews/image1.jpeg", title: "Enriched photo carousels on PDP", desc: "Customer photos elevated into a prominent carousel with star distribution, review count, and inline review cards, all within the product detail page." },
              { src: "/case-studies/product-reviews/image2.jpeg", title: "Full-screen review sheet", desc: "Tapping a review card on the PDP opens a full-screen sheet with the complete review: star rating, fit context, body, and photos, giving shoppers all the detail they need without leaving the product page." },
              { src: "/case-studies/product-reviews/image3.jpeg", title: "All Reviews list with sort & fit context", desc: "Dedicated reviews screen with sort controls, star breakdown, and individual review cards surfacing fit attributes and reward points disclosure." },
              { src: "/case-studies/product-reviews/image4.jpeg", title: "Native Write a Review flow", desc: "Rebuilt as a fully native form with star rating, photo upload, title, body, and recommendation toggle, replacing the multi-step web form that was causing abandonment." },
            ].map((screen) => (
              <div key={screen.title} className="bg-surface border border-border rounded-lg overflow-hidden transition-[opacity,transform] duration-300">
                <img src={screen.src} alt={screen.title} className="w-full object-cover" />
                <div className="p-5">
                  <p className="font-heading font-bold text-ink text-sm mb-1">{screen.title}</p>
                  <p className="font-sans text-xs text-muted leading-relaxed">{screen.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Accessibility */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border border-border rounded-lg bg-surface p-8 md:p-10">
            <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0 mb-4">
              <ShieldCheck size={16} strokeWidth={1.5} className="text-purple" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-ink mb-3">Accessibility — built in, not bolted on</h3>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              WCAG 2.X AA compliance was a first-class requirement from the first wireframe, not a final QA checklist item. Every touch target, color contrast pairing, and screen reader interaction was considered throughout the process.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Touch target sizing requirements met throughout",
                "Color contrast specifications followed across all states",
                "Screen reader-compatible component patterns",
                "Focus management within review sheet and submission flow",
                "Star rating displays readable by screen readers, not purely visual",
                "Interactive elements meet minimum touch target sizing",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={14} strokeWidth={1.5} className="text-purple flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-sm text-muted leading-snug">{item}</p>
                </div>
              ))}
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8">Results</h2>
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
            {reflections.map((r) => (
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
