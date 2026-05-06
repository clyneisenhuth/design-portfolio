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

const testingResonated = [
  {
    icon: "✅",
    label: "BOPIS-familiar customers clicked",
    desc: "Customers who were already familiar with BOPIS picked up the concept quickly and found it genuinely useful — not a workaround, a real benefit.",
  },
  {
    icon: "⚡",
    label: "Speed + flexibility combination appealed",
    desc: "Getting certain items faster through pickup while having others shipped was framed as a real benefit, not a compromise.",
  },
  {
    icon: "👁️",
    label: "Visual separation felt intuitive",
    desc: "When the ship and pickup groups were clearly separated visually, the layout felt intuitive rather than confusing.",
  },
];

const testingChallenges = [
  {
    icon: "❓",
    label: "First-time exposure caused hesitation",
    desc: "First-time exposure to a split-order checkout caused hesitation. People slowed down, re-read, and sometimes backed out.",
  },
  {
    icon: "🔎",
    label: "Toggle discoverability",
    desc: "The per-item fulfillment toggle was easy to miss. Some participants did not realize they could change it at all.",
  },
  {
    icon: "📱",
    label: "Cognitive overload at checkout",
    desc: "The checkout screen showing two separate fulfillment groups felt like a lot to process, especially on a small screen.",
  },
];

const researchProduced = [
  {
    icon: "🎯",
    label: "A validated concept with a clear comprehension problem",
    desc: "The split in user reactions was not a sign that the idea was broken. It pointed to a viable feature that needed better communication design, not a fundamentally different approach. That is a meaningful finding even without a launch.",
  },
  {
    icon: "🗺️",
    label: "Specific design direction for a future attempt",
    desc: "The research surfaced exactly where the UI fell short: the per-item toggle needed more visibility, and the split checkout screen needed a lighter cognitive load. That is a ready brief for Phase 2 if the backend work ever becomes feasible.",
  },
  {
    icon: "🏗️",
    label: "Real organizational knowledge",
    desc: "The project surfaced how much backend lift mixed fulfillment actually required. That information changed how engineering and product evaluated similar features going forward.",
  },
];

const carriedForward = [
  {
    label: "Not all good design gets built",
    quote: "That is worth saying out loud rather than treating as a failure. Good research in a cancelled project still moves the organization's understanding forward.",
  },
  {
    label: "Engineering needs to be in the room earlier",
    quote: "If engineering had been involved in discovery, the team would have had a clearer picture of the backend lift before significant design investment was made. That is a process lesson I brought into every subsequent project.",
  },
  {
    label: "Mixed test results are still results",
    quote: "The split in comprehension was informative, not ambiguous. Knowing that the concept worked for some users and caused hesitation in others is directionally useful. It tells you what to fix, not that you should stop.",
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

export default function ItemFulfillmentCaseStudy() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-bg">

        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-pale via-bg to-blue-pale">
          <div className="absolute -top-20 -right-20 w-80 h-80 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #A07DD4, #D4A8F0)", filter: "blur(72px)" }} />
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
                Case Study · Mobile · 2022
              </p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
                Item Level{" "}
                <span className="gradient-text-static">Fulfillment</span> 📦
              </h1>
              <p className="font-sans text-lg text-muted max-w-2xl leading-relaxed mb-10">
                Designing flexible fulfillment for a feature that never shipped — and why that still matters.
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
            <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">Overview</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-6">The opportunity</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <p className="font-sans text-base text-muted leading-relaxed">
                AE and Aerie app customers had one choice when it came to fulfillment: ship everything or pick everything up in store. There was no in-between. If you wanted one item delivered and another ready for pickup, you placed two separate orders. It was a clunky workaround for a genuinely common shopping scenario.
              </p>
              <p className="font-sans text-base text-muted leading-relaxed">
                I led the design effort to change that, working through multiple rounds of concept design, competitive analysis, and unmoderated usability research across iOS and Android. The project was complicated by <span className="font-extrabold text-purple">constantly shifting engineering constraints</span> — and it is one of the clearest examples I have of doing thorough design work under uncertainty.
              </p>
            </div>
          </Section>

          {/* Problem */}
          <Section>
            <div className="bg-surface border-2 border-border rounded-3xl p-8 md:p-10">
              <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">The Problem</p>
              <h2 className="font-heading text-3xl font-bold text-ink mb-5">One order, one fulfillment option. Customers wanted more.</h2>
              <p className="font-sans text-base text-muted leading-relaxed mb-6">
                The limitation was straightforward: the order management system treated every order as a single fulfillment unit. Customers who wanted some items shipped and others picked up had no way to do it in one transaction. They either split the order manually or settled for one option.
              </p>

              <div className="bg-blue-pale border border-blue/20 rounded-2xl p-5 mb-8">
                <p className="font-heading font-bold text-blue text-sm mb-1.5">Industry terminology: mixed cart fulfillment</p>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  This scenario has an industry name. Mixed cart fulfillment refers specifically to orders where a customer wants part of their cart picked up in store and the rest delivered to their home. It requires the OMS to route a single transaction to two different fulfillment nodes simultaneously — which is where the complexity lives.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: "🔒", label: "All-or-nothing fulfillment", desc: "Ship everything or pick everything up — no middle ground for customers who wanted both in a single transaction." },
                  { icon: "🛍️", label: "High-value segment underserved", desc: "Omnichannel shoppers tend to have higher lifetime value. Competitors were beginning to offer more checkout flexibility." },
                  { icon: "💡", label: "No predefined success metrics", desc: "Leadership identified this as a missed opportunity, not an active complaint. Figuring out what good looked like was part of the work." },
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
                  &ldquo;How might we give AE + Aerie app shoppers the ability to choose different fulfillment methods for individual items in a single order — without introducing confusion or friction at a high-stakes moment in the purchase flow?&rdquo;
                </p>
              </div>
            </div>
          </Section>

          {/* Strategy */}
          <Section>
            <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-3">Strategy</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Make the problem testable before committing to a direction.</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
              With undefined metrics and significant engineering unknowns on the backend, the priority was finding the fastest path to a meaningful signal rather than designing toward a fully specced solution.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {[
                {
                  icon: "⚡",
                  title: "Signal over specification",
                  desc: "Design enough to test the concept meaningfully — not enough to over-invest in an unvalidated direction.",
                },
                {
                  icon: "🛒",
                  title: "Per-item selection in cart",
                  desc: "Customers choose fulfillment per item directly within the cart, where they already have full context about what they're buying.",
                },
                {
                  icon: "📋",
                  title: "Split order clarity at checkout",
                  desc: "Checkout presents two fulfillment groups with separate timing and totals — no ambiguity about what's going where or what it costs.",
                },
              ].map((p, i) => (
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

            <div className="bg-purple-pale border-2 border-purple/20 rounded-2xl p-6">
              <p className="font-heading font-bold text-purple text-sm mb-2">A known cost tradeoff, understood going in</p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Mixed cart fulfillment is a known cost pressure for retailers: splitting an order into multiple fulfillment streams can <span className="font-bold text-ink">double the cost of fulfillment per transaction</span>. That tradeoff was understood from the start. The intention was to validate customer value before the business committed to absorbing it at scale. Keeping fidelity at concept level was a deliberate choice — it let us communicate the mechanic clearly enough to get real reactions without committing to a full UI build before we knew if the idea held up.
              </p>
            </div>
          </Section>

          {/* Design Process */}
          <Section>
            <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">Design Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Iterating toward something testable.</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
              What made this project genuinely difficult was that the constraints kept moving. Engineering discoveries were surfacing new limitations in the OMS, and product requirements shifted as the team learned more about what was technically feasible. Every design review had the potential to reframe what we were actually building.
            </p>

            <div className="bg-surface border-2 border-border rounded-3xl p-8 md:p-10 mb-6">
              <p className="font-heading font-bold text-ink text-base mb-1">Design work under shifting constraints</p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                A significant portion of the design work was not about refining pixels. It was about adapting quickly, re-evaluating decisions that had already been made, and finding ways to preserve the core customer experience as the boundaries of the possible kept narrowing. Some solutions we had designed around became unavailable mid-process. Others required full rethinks of how the cart interaction worked.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Holding design reviews consistently with product managers and engineers was what kept the work from going sideways — it meant that when a constraint changed, we caught it early and adjusted rather than discovering it at the end.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: "🔍",
                  title: "Competitive analysis",
                  desc: "Analyzed best-in-class fulfillment experiences and how competitors handled per-item selection, split orders, and checkout communication.",
                  tags: ["Benchmarking", "BOPIS", "Mobile"],
                  color: "purple",
                },
                {
                  icon: "📊",
                  title: "BOPIS usage pattern review",
                  desc: "Reviewed existing Buy Online, Pick Up In Store data to understand how AE customers were already using partial fulfillment and where expectations were being set.",
                  tags: ["Data Review", "Omnichannel", "Behavioral"],
                  color: "blue",
                },
                {
                  icon: "🔄",
                  title: "Iterative design reviews with product and engineering",
                  desc: "Regular cycles with product managers and engineers as backend constraints shifted. Designs adapted continuously — not locked in before constraints were fully understood.",
                  tags: ["Collaboration", "Engineering", "Iteration"],
                  color: "purple",
                },
                {
                  icon: "📱",
                  title: "iOS & Android prototype development",
                  desc: "Built testable prototypes for both platforms in Axure and Sketch, updated after each review cycle to reflect the latest state of what was actually buildable.",
                  tags: ["Axure", "Sketch", "Prototyping"],
                  color: "blue",
                },
                {
                  icon: "🧪",
                  title: "Unmoderated remote usability testing",
                  desc: "Wrote a test script and ran unmoderated remote sessions. Participants were given tasks mirroring a real mixed-fulfillment scenario: some items available to ship, others only available for pickup nearby.",
                  tags: ["Usability Research", "Remote", "Unmoderated"],
                  color: "purple",
                },
              ].map((a, i) => (
                <div
                  key={a.title}
                  className={`bg-surface border-2 rounded-3xl p-6 md:p-8 flex gap-5 items-start hover:shadow-lg transition-all duration-300 ${
                    a.color === "purple" ? "border-purple/20 hover:border-purple/40" : "border-blue/20 hover:border-blue/40"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${
                    a.color === "purple" ? "bg-purple-pale" : "bg-blue-pale"
                  }`}>
                    {a.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-xl font-bold text-ink mb-2">{a.title}</h3>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-4">{a.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {a.tags.map((t) => (
                        <span
                          key={t}
                          className={`font-sans text-xs font-semibold px-2.5 py-1 rounded-full ${
                            a.color === "purple" ? "bg-purple text-white" : "bg-blue text-white"
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

          {/* Testing Results */}
          <Section>
            <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-3">Usability Research</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">What the research surfaced</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4 max-w-2xl">
              Testing surfaced a clear split in how people responded to the concept — and that split turned out to be one of the more useful findings of the whole project.
            </p>
            <div className="bg-blue-pale border border-blue/20 rounded-2xl p-5 mb-8 max-w-2xl">
              <p className="font-sans text-xs text-muted leading-relaxed">
                <span className="font-bold text-ink">An industry-documented friction point:</span> Split fulfillment is widely considered one of the hardest checkout experiences to communicate clearly. First exposure to a split-order UI is a known friction point across retail — which made it important to distinguish concept comprehension issues from fundamental concept rejection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-surface border-2 border-border rounded-3xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xl">✨</span>
                  <p className="font-heading font-bold text-ink text-base">What resonated</p>
                </div>
                <div className="flex flex-col gap-4">
                  {testingResonated.map((r) => (
                    <div key={r.label} className="bg-bg rounded-2xl p-4 border border-border">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-lg">{r.icon}</span>
                        <p className="font-heading font-bold text-ink text-sm">{r.label}</p>
                      </div>
                      <p className="font-sans text-xs text-muted leading-relaxed">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface border-2 border-border rounded-3xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xl">🔧</span>
                  <p className="font-heading font-bold text-ink text-base">What needed work</p>
                </div>
                <div className="flex flex-col gap-4">
                  {testingChallenges.map((c) => (
                    <div key={c.label} className="bg-bg rounded-2xl p-4 border border-border">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-lg">{c.icon}</span>
                        <p className="font-heading font-bold text-ink text-sm">{c.label}</p>
                      </div>
                      <p className="font-sans text-xs text-muted leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 bg-purple-pale border-2 border-purple/20 rounded-2xl p-6">
              <p className="font-heading font-bold text-purple text-sm mb-2">Reading the results correctly</p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                The split in user reactions was not a sign that the idea was broken. <span className="font-bold text-ink">It pointed to a viable feature that needed better communication design — not a fundamentally different approach.</span> BOPIS-familiar customers got it immediately. First-timers needed more framing at the entry point. That gap was a map of what to fix next.
              </p>
            </div>
          </Section>

          {/* Outcomes */}
          <Section>
            <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-3">Outcomes</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Cancelled. And still worth talking about.</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
              It did not ship. But the work mattered anyway — and it is worth being direct about why.
            </p>

            <div className="bg-surface border-2 border-border rounded-3xl p-8 md:p-10 mb-6">
              <span className="text-3xl mb-3 block">⚖️</span>
              <h3 className="font-heading text-2xl font-bold text-ink mb-3">Why the project was cancelled</h3>
              <p className="font-sans text-base text-muted leading-relaxed mb-6">
                The project was cancelled due to backend complexity that substantially exceeded initial scoping estimates. Supporting item-level fulfillment required changes to the order management system that were significantly larger than anticipated when the project kicked off. Mixed cart fulfillment requires the OMS to route a single transaction to two separate fulfillment nodes — and doing that at scale compounds quickly.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Per-item routing required changes to the OMS far larger than initial estimates",
                  "Each split order adds picking, packing, handling, and shipping costs — doubling per-order fulfillment cost",
                  "Backend lift combined with the cost model made the business case harder to justify",
                  "Organizational priorities shifted, and the feature was removed from the roadmap",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-purple font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="font-sans text-sm text-muted leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {researchProduced.map((o) => (
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8">What I carried forward</h2>
            <div className="flex flex-col gap-5">
              {carriedForward.map((r) => (
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
