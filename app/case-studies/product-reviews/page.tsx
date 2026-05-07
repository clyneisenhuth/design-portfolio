"use client";

import { useRef, useEffect, useState } from "react";
import CustomCursor from "../../components/CustomCursor";
import CompAnalysisTable from "../../components/CompAnalysisTable";
import CountUpStat from "../../components/CountUpStat";
import Logo from "../../components/Logo";
import { useInView } from "../../hooks/useInView";

const purchaseFactors = [
  { rank: "1", factor: "Price", pct: "83%", note: "Reviews validate worth relative to cost" },
  { rank: "2", factor: "Ratings & Reviews", pct: "77%", note: "Central to apparel purchase decisions" },
  { rank: "3", factor: "Fit & Sizing Info", pct: "67%", note: "Top return reason; reviews address sizing accuracy" },
  { rank: "4", factor: "Customer Photos", pct: "59%", note: "Shows product on real people vs. studio photography" },
  { rank: "5", factor: "Personal Style", pct: "58%", note: "Shoppers verify expectations through reviews" },
  { rank: "6", factor: "Return Policy", pct: "80%", note: "Reviews mentioning returns influence purchase" },
];

const userTestingFindings = [
  {
    icon: "👤",
    title: "Size & body type discovery gap",
    desc: "No easy mechanism to locate reviews from similar body types or sizes, despite it being essential information for apparel purchase decisions.",
  },
  {
    icon: "📷",
    title: "Photo underutilization",
    desc: "Customer photos were underused because they were difficult to discover and browse. Shoppers didn't realize they existed.",
  },
  {
    icon: "📝",
    title: "Submission flow mismatch",
    desc: "The flow felt like a web form inside a native app. It didn't match expected swipe gestures or familiar device patterns.",
  },
  {
    icon: "🔀",
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
    icon: "🔍",
    title: "Discoverability",
    desc: "Relevant reviews should rise to the top. Filtering, sorting, and hierarchy should do the heavy lifting so shoppers don't have to.",
  },
  {
    icon: "🖼️",
    title: "Visual Richness",
    desc: "Customer photos are first-class content and should be treated that way: easy to find, easy to browse, and easy to submit.",
  },
  {
    icon: "✍️",
    title: "Submission Ease",
    desc: "Writing a review should feel native and fast. Every step of friction removed is a potential review gained.",
  },
];

const solutions = [
  {
    icon: "📸",
    title: "Enriched Photo Carousels",
    desc: "Customer photos elevated into a prominent, swipeable carousel on the PDP. No competitor had built a truly photo-forward experience, making this a clear differentiation opportunity. Submission flow updated to explicitly prompt photo uploads at the right moment.",
    tags: ["PDP", "UGC", "Mobile-first"],
    stat: "161%",
    statLabel: "higher conversion for shoppers who see UGC",
    color: "purple",
  },
  {
    icon: "📋",
    title: "Expanded Review Sheet",
    desc: "Individual reviews restructured with better typography, breathing room, and fit context metadata: size purchased, fit rating, and verified purchase status surfaced alongside the review body. Helps shoppers self-select without guesswork.",
    tags: ["Typography", "Fit Context", "Trust Signals"],
    stat: null,
    statLabel: null,
    color: "blue",
  },
  {
    icon: "📝",
    title: "Native Write a Review Flow",
    desc: "Rebuilt from scratch as a fully native iOS and Android flow with single-screen layouts, native input components, and gesture patterns that match device conventions. Replaced the multi-step web-form experience that was causing abandonment.",
    tags: ["iOS", "Android", "Native Patterns"],
    stat: null,
    statLabel: null,
    color: "purple",
  },
  {
    icon: "🔀",
    title: "Enhanced Filtering & Sorting",
    desc: "New controls for rating, recency, photo availability, and fit attributes. Directly addressing the Baymard finding that 78% of mobile e-commerce sites offer poor filtering. Well-implemented filters increase conversion by 26%, yet only 16% of major sites provide genuinely good filtering.",
    tags: ["Filtering", "Sorting", "Apparel-specific"],
    stat: "26%",
    statLabel: "conversion lift from well-implemented filters (Baymard)",
    color: "blue",
  },
];

const outcomes = [
  { icon: "📈", label: "Improved content discoverability", desc: "Restructured hierarchy surfaced relevant reviews and photos without deep navigation" },
  { icon: "✅", label: "Higher submission rates", desc: "Native flow replaced web-form patterns, directly reducing abandonment" },
  { icon: "📷", label: "Increased photo UGC volume", desc: "First-class photo prompts in submission drove more visual content" },
  { icon: "⏱️", label: "Greater session engagement", desc: "Richer content gave shoppers more reason to explore before purchase" },
  { icon: "♿", label: "WCAG 2.X AA compliance", desc: "Accessibility baked in from the start, not bolted on at QA" },
  { icon: "💪", label: "Stronger purchase confidence", desc: "Closed the gap between what shoppers needed and what the experience delivered" },
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

export default function ProductReviewsCaseStudy() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-bg">

        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-pale via-bg to-purple-pale">
          <div className="absolute -top-20 -right-20 w-80 h-80 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #4B7BE5, #8BB8F8)", filter: "blur(72px)" }} />
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
                Case Study · 2024
              </p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
                App Product Reviews{" "}
                <span className="gradient-text-static">Redesign</span> 🖼️
              </h1>
              <p className="font-sans text-lg text-muted max-w-2xl leading-relaxed mb-10">
                End-to-end redesign of the product reviews experience in the AE + Aerie mobile app, rebuilding photo carousels, submission flows, and review UI to turn a fragmented section into a high-trust content engine.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Role", value: "Product Designer" },
                  { label: "Company", value: "American Eagle Outfitters" },
                  { label: "Platform", value: "iOS & Android" },
                  { label: "Tools", value: "Figma · Axure · Miro" },
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

          {/* Context */}
          <Section>
            <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">Context</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-6">The opportunity</h2>
            <p className="font-sans text-base text-muted leading-relaxed max-w-2xl">
              A vendor API migration created a rare blank-slate opportunity: rebuild the entire AE + Aerie mobile app reviews experience from scratch rather than patch an aging system. I led design end-to-end, collaborating with product management on scoping, research execution, and handoff.
            </p>
          </Section>

          {/* Problem */}
          <Section>
            <div className="bg-surface border-2 border-border rounded-3xl p-8 md:p-10">
              <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">The Problem</p>
              <h2 className="font-heading text-3xl font-bold text-ink mb-5">Fragmented, friction-heavy, and visually flat</h2>
              <p className="font-sans text-base text-muted leading-relaxed mb-8">
                The existing reviews experience failed shoppers in three connected ways, each mapping to documented industry failure modes.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: "🧩", label: "Fragmented interactions", desc: "Inconsistent UX patterns across PDP, review detail, and submission" },
                  { icon: "🙈", label: "Hidden customer photos", desc: "UGC imagery buried below the fold with no surfacing strategy" },
                  { icon: "😤", label: "High submission friction", desc: "Multi-step web forms causing abandonment on mobile" },
                ].map((p) => (
                  <div key={p.label} className="bg-bg rounded-2xl p-4 border border-border">
                    <span className="text-2xl mb-2 block">{p.icon}</span>
                    <p className="font-heading font-bold text-ink text-sm mb-1">{p.label}</p>
                    <p className="font-sans text-xs text-muted leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
              {/* Problem statement */}
              <div className="bg-purple-pale border-2 border-purple/20 rounded-2xl p-6">
                <p className="font-heading text-sm font-semibold text-purple mb-2">Problem Statement</p>
                <p className="font-sans text-sm text-ink leading-relaxed italic">
                  &ldquo;How might we redesign the AE + Aerie reviews experience so that shoppers can quickly find relevant content, engage with real customer photos, and write reviews with as little friction as possible, building the kind of purchase confidence that drives conversion?&rdquo;
                </p>
              </div>
            </div>
          </Section>

          {/* Why reviews matter */}
          <Section>
            <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-3">Research</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Reviews aren&apos;t a nice-to-have</h2>
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
                <CountUpStat
                  key={s.value}
                  value={s.value}
                  label={s.label}
                  className="bg-surface border-2 border-border rounded-2xl p-5 text-center hover:border-blue/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                />
              ))}
            </div>

            {/* Purchase factors table */}
            <div className="bg-surface border-2 border-border rounded-3xl overflow-hidden mb-6">
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
                      <span className="font-heading font-bold text-sm gradient-text-static">{f.pct}</span>
                    </div>
                    <p className="font-sans text-xs text-muted">{f.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-pale border-2 border-blue/20 rounded-2xl p-6">
              <p className="font-heading font-bold text-blue text-sm mb-2">Industry gap: Baymard Institute</p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                <span className="font-bold text-ink">78% of mobile e-commerce sites</span> offer poor to mediocre review filtering. Fit context (height, size purchased, fit rating) was almost universally absent, despite being the top return driver in apparel.
              </p>
            </div>
          </Section>

          {/* Unmoderated User Testing */}
          <Section>
            <div className="bg-surface border-2 border-border rounded-3xl p-8 md:p-10">
              <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">User Research</p>
              <h2 className="font-heading text-3xl font-bold text-ink mb-3">Unmoderated remote user interviews</h2>
              <p className="font-sans text-base text-muted leading-relaxed mb-8">
                To study natural behavior rather than task completion, I ran unmoderated remote interviews with existing AE and Aerie app users, observing how they actually navigated the reviews surface, what they were looking for, and where they dropped off.
              </p>


              <p className="font-heading font-bold text-ink text-sm mb-4">What we observed</p>
              <div className="grid md:grid-cols-2 gap-4">
                {userTestingFindings.map((f) => (
                  <div key={f.title} className="bg-bg rounded-2xl p-5 border border-border">
                    <span className="text-2xl mb-3 block">{f.icon}</span>
                    <p className="font-heading font-bold text-ink text-sm mb-1.5">{f.title}</p>
                    <p className="font-sans text-xs text-muted leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-pale border border-blue/20 rounded-xl p-4">
                <p className="font-sans text-xs text-muted leading-relaxed">
                  <span className="font-bold text-ink">Aligned with industry research:</span> Findings matched closely with Baymard Institute&apos;s large-scale usability testing, which consistently identifies limited filtering, buried visual content, and non-native submission flows as the most common review UX failure modes in mobile e-commerce.
                </p>
              </div>
            </div>
          </Section>

          {/* Competitive Analysis */}
          <Section>
            <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-3">Competitive Analysis</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Benchmarking 11 retail apps</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-6 max-w-2xl">
              I analyzed reviews experiences across leading retail apps including Abercrombie & Fitch, Nordstrom, Urban Outfitters, Gap, Lululemon, Victoria&apos;s Secret, Macy&apos;s, Sephora, Target, and Walmart, benchmarking PDP display, filtering, photo UGC treatment, and submission flows.
            </p>

            <div className="flex flex-col gap-4 mb-6">
              {competitiveFindings.map((c) => (
                <div key={c.brand} className="bg-surface border-2 border-border rounded-2xl p-5 flex gap-4 items-start">
                  <div className="bg-purple-pale rounded-xl px-3 py-1.5 flex-shrink-0">
                    <p className="font-heading font-bold text-purple text-xs">{c.brand}</p>
                  </div>
                  <p className="font-sans text-sm text-muted leading-relaxed">{c.finding}</p>
                </div>
              ))}
            </div>

            <CompAnalysisTable />

            <div className="bg-purple-pale border-2 border-purple/20 rounded-2xl p-6 mt-6">
              <p className="font-heading font-bold text-purple text-sm mb-2">Clear opportunity identified</p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Only <span className="font-bold text-ink">2 of 11 competitors</span> offered review search. And no competitor had built a truly photo-forward carousel experience, making it a clear differentiation opportunity for AE + Aerie.
              </p>
            </div>
          </Section>

          {/* Principles */}
          <Section>
            <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">Design Principles</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8">Three north stars</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {principles.map((p, i) => (
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

          {/* Solutions */}
          <Section>
            <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-3">Solutions</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">What we built</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
              Four connected improvements, each grounded in user research findings and documented industry best practices.
            </p>
            <div className="flex flex-col gap-5">
              {solutions.map((s, i) => (
                <div
                  key={s.title}
                  className={`bg-surface border-2 rounded-3xl p-6 md:p-8 flex gap-5 items-start hover:shadow-lg transition-all duration-300 ${
                    s.color === "purple" ? "border-purple/20 hover:border-purple/40" : "border-blue/20 hover:border-blue/40"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${
                    s.color === "purple" ? "bg-purple-pale" : "bg-blue-pale"
                  }`}>
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-xl font-bold text-ink mb-2">{s.title}</h3>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-4">{s.desc}</p>
                    {s.stat && (
                      <div className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 mb-4 border border-border ${s.color === "purple" ? "bg-purple-pale" : "bg-blue-pale"}`}>
                        <span className="font-heading font-bold text-lg gradient-text-static">{s.stat}</span>
                        <span className="font-sans text-xs text-muted">{s.statLabel}</span>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className={`font-sans text-xs font-semibold px-2.5 py-1 rounded-full ${
                            s.color === "purple" ? "bg-purple text-white" : "bg-blue text-white"
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
          </Section>

          {/* Final Screens */}
          <Section>
            <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">Final Screens</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">What shipped</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
              Four connected surfaces, each addressing a distinct gap identified in research.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { src: "/app-reviews-image1.jpeg", title: "Enriched photo carousels on PDP", desc: "Customer photos elevated into a prominent carousel with star distribution, review count, and inline review cards, all within the product detail page." },
                { src: "/app-reviews-image2.jpeg", title: "Full-screen review sheet", desc: "Tapping a review card on the PDP opens a full-screen sheet with the complete review: star rating, fit context, body, and photos, giving shoppers all the detail they need without leaving the product page." },
                { src: "/app-reviews-image3.jpeg", title: "All Reviews list with sort & fit context", desc: "Dedicated reviews screen with sort controls, star breakdown, and individual review cards surfacing fit attributes and reward points disclosure." },
                { src: "/app-reviews-image4.jpeg", title: "Native Write a Review flow", desc: "Rebuilt as a fully native form with star rating, photo upload, title, body, and recommendation toggle, replacing the multi-step web form that was causing abandonment." },
              ].map((screen) => (
                <div key={screen.title} className="bg-surface border-2 border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <img src={screen.src} alt={screen.title} className="w-full object-cover" />
                  <div className="p-5">
                    <p className="font-heading font-bold text-ink text-sm mb-1">{screen.title}</p>
                    <p className="font-sans text-xs text-muted leading-relaxed">{screen.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Accessibility */}
          <Section>
            <div className="bg-gradient-to-br from-purple-pale to-blue-pale border-2 border-purple/20 rounded-3xl p-8 md:p-10">
              <span className="text-3xl mb-3 block">♿</span>
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
                    <span className="text-purple font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="font-sans text-sm text-muted leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Outcomes */}
          <Section>
            <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">Outcomes</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8">Results</h2>
            <div className="flex flex-col gap-4">
              {outcomes.map((o) => (
                <div
                  key={o.label}
                  className="bg-surface border-2 border-border rounded-2xl p-5 flex items-start gap-4 hover:border-purple/30 hover:shadow-md transition-all duration-300"
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
              {reflections.map((r) => (
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
            <Logo className="h-8 w-auto" />
          </div>

        </div>
      </div>
    </>
  );
}
