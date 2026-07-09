"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  Zap,
  Eye,
  HelpCircle,
  Search,
  Smartphone,
  Target,
  Map,
  Building2,
  Scale,
  Lock,
  ShoppingBag,
  Lightbulb,
  BarChart2,
  RefreshCw,
  FlaskConical,
} from "lucide-react";

const testingResonated = [
  {
    Icon: CheckCircle2,
    label: "BOPIS-familiar customers clicked",
    desc: "Customers who were already familiar with BOPIS picked up the concept quickly and found it genuinely useful. Not a workaround, a real benefit.",
  },
  {
    Icon: Zap,
    label: "Speed + flexibility combination appealed",
    desc: "Getting certain items faster through pickup while having others shipped was framed as a real benefit, not a compromise.",
  },
  {
    Icon: Eye,
    label: "Visual separation felt intuitive",
    desc: "When the ship and pickup groups were clearly separated visually, the layout felt intuitive rather than confusing.",
  },
];

const testingChallenges = [
  {
    Icon: HelpCircle,
    label: "First-time exposure caused hesitation",
    desc: "First-time exposure to a split-order checkout caused hesitation. People slowed down, re-read, and sometimes backed out.",
  },
  {
    Icon: Search,
    label: "Fulfillment control discoverability",
    desc: "The per-item fulfillment control was easy to miss. Some participants did not realize they could change it at all.",
  },
  {
    Icon: Smartphone,
    label: "Cognitive overload at checkout",
    desc: "The checkout screen showing two separate fulfillment groups felt like a lot to process, especially on a small screen.",
  },
];

const researchProduced = [
  {
    Icon: Target,
    label: "A validated concept with a clear comprehension problem",
    desc: "The split in user reactions was not a sign that the idea was broken. It pointed to a viable feature that needed better communication design, not a fundamentally different approach. That is a meaningful finding even without a launch.",
  },
  {
    Icon: Map,
    label: "Specific design direction for a future attempt",
    desc: "The research surfaced exactly where the UI fell short: the per-item fulfillment control needed more visibility, and the split checkout screen needed a lighter cognitive load. That is a ready brief for Phase 2 if the backend work ever becomes feasible.",
  },
  {
    Icon: Building2,
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

export default function ItemFulfillmentCaseStudy() {
  return (
    <div className="min-h-screen bg-bg">

      {/* Hero */}
      <section className="border-t border-border px-6 pt-24 pb-16 bg-bg">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <a href="/" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors mb-12 group">
              <ArrowLeft size={12} /><span>Back</span>
            </a>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-6">Case Study · Mobile · 2022</p>
            <h1 className="font-heading font-bold text-ink mb-6" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>Item Level Fulfillment</h1>
            <p className="font-sans text-base text-muted leading-relaxed max-w-2xl mb-10">
              Designing flexible fulfillment for a feature that never shipped — and why that still matters.
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
              AE and Aerie app customers had one choice when it came to fulfillment: ship everything or pick everything up in store. There was no in-between. If you wanted one item delivered and another ready for pickup, you placed two separate orders. It was a clunky workaround for a genuinely common shopping scenario.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              I led the design effort to change that, working through multiple rounds of concept design, competitive analysis, and unmoderated usability research across iOS and Android. The project was complicated by <span className="font-extrabold text-purple">constantly shifting engineering constraints</span>, and it is one of the clearest examples I have of doing thorough design work under uncertainty.
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
            <h2 className="font-heading text-3xl font-bold text-ink mb-5">One order, one fulfillment option. Customers wanted more.</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              The limitation was straightforward: the order management system treated every order as a single fulfillment unit. Customers who wanted some items shipped and others picked up had no way to do it in one transaction. They either split the order manually or settled for one option.
            </p>

            <div className="border border-border rounded-md bg-bg p-5 mb-8">
              <p className="font-heading font-bold text-ink text-sm mb-1.5">Industry terminology: mixed cart fulfillment</p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                This scenario has an industry name. Mixed cart fulfillment refers specifically to orders where a customer wants part of their cart picked up in store and the rest delivered to their home. It requires the OMS to route a single transaction to two different fulfillment nodes simultaneously, which is where the complexity lives.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { Icon: Lock, label: "All-or-nothing fulfillment", desc: "Ship everything or pick everything up, with no middle ground for customers who wanted both in a single transaction." },
                { Icon: ShoppingBag, label: "High-value segment underserved", desc: "Omnichannel shoppers tend to have higher lifetime value. Competitors were beginning to offer more checkout flexibility." },
                { Icon: Lightbulb, label: "No predefined success metrics", desc: "Leadership identified this as a missed opportunity, not an active complaint. Figuring out what good looked like was part of the work." },
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
                &ldquo;How might we give AE + Aerie app shoppers the ability to choose different fulfillment methods for individual items in a single order — without introducing confusion or friction at a high-stakes moment in the purchase flow?&rdquo;
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Make the problem testable before committing to a direction.</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
            With undefined metrics and significant engineering unknowns on the backend, the priority was finding the fastest path to a meaningful signal rather than designing toward a fully specced solution.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              {
                Icon: Zap,
                title: "Signal over specification",
                desc: "Design enough to test the concept meaningfully, not enough to over-invest in an unvalidated direction.",
              },
              {
                Icon: ShoppingBag,
                title: "Per-item selection in cart",
                desc: "Customers choose fulfillment per item directly within the cart, where they already have full context about what they're buying.",
              },
              {
                Icon: CheckCircle2,
                title: "Split order clarity at checkout",
                desc: "Checkout presents two fulfillment groups with separate timing and totals, with no ambiguity about what's going where or what it costs.",
              },
            ].map((p) => (
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

          <div className="border border-border rounded-lg bg-surface p-6">
            <p className="font-heading font-bold text-purple text-sm mb-2">A known cost tradeoff, understood going in</p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Mixed cart fulfillment is a known cost pressure for retailers: splitting an order into multiple fulfillment streams can <span className="font-bold text-ink">double the cost of fulfillment per transaction</span>. That tradeoff was understood from the start. The intention was to validate customer value before the business committed to absorbing it at scale. Building a high-fidelity prototype, rather than the real backend, was the deliberate choice: polished enough to produce authentic reactions in unmoderated testing, without committing engineering to the OMS work before we knew if the idea held up.
            </p>
          </div>
        </motion.div>

        {/* Concept Prototype */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">The Concept</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">What customers actually saw in testing.</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
            Two different interaction patterns were prototyped for choosing fulfillment per item in the bag, then tested against each other. Checkout confirmed the split clearly either way, with pickup and delivery groups shown separately with their own timelines.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "/case-studies/item-fulfillment/image1.jpeg", label: "Option A: inline selection", caption: "Fulfillment choices shown inline in the bag: delivery and same-day store pickup as radio options directly under each item." },
              { src: "/case-studies/item-fulfillment/image2.jpeg", label: "Option B: bottom sheet selection", caption: "Fulfillment choices moved into a bottom sheet, tapped open per item, keeping the main bag list uncluttered." },
              { src: "/case-studies/item-fulfillment/image3.jpeg", label: "Split checkout confirmation", caption: "Checkout groups items by fulfillment method, showing pickup details and delivery timing as two distinct, clearly labeled groups." },
            ].map((s) => (
              <div key={s.label} className="bg-surface border border-border rounded-lg overflow-hidden">
                <img src={s.src} alt={s.label} className="w-full object-cover" />
                <p className="font-sans text-xs text-muted px-5 py-3 border-t border-border">{s.caption}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Design Process</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">Iterating toward something testable.</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
            What made this project genuinely difficult was that the constraints kept moving. Engineering discoveries were surfacing new limitations in the OMS, and product requirements shifted as the team learned more about what was technically feasible. Every design review had the potential to reframe what we were actually building.
          </p>

          <div className="border border-border rounded-lg bg-surface p-8 md:p-10 mb-6">
            <p className="font-heading font-bold text-ink text-base mb-1">Design work under shifting constraints</p>
            <p className="font-sans text-sm text-muted leading-relaxed mb-6">
              A significant portion of the design work was not about refining pixels. It was about adapting quickly, re-evaluating decisions that had already been made, and finding ways to preserve the core customer experience as the boundaries of the possible kept narrowing. Some solutions we had designed around became unavailable mid-process. Others required full rethinks of how the cart interaction worked.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Holding design reviews consistently with product managers and engineers was what kept the work from going sideways. When a constraint changed, we caught it early and adjusted rather than discovering it at the end.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                Icon: Search,
                title: "Competitive analysis",
                desc: "Analyzed best-in-class fulfillment experiences and how competitors handled per-item selection, split orders, and checkout communication.",
                tags: ["Benchmarking", "BOPIS", "Mobile"],
              },
              {
                Icon: BarChart2,
                title: "BOPIS usage pattern review",
                desc: "Reviewed existing Buy Online, Pick Up In Store data to understand how AE customers were already using partial fulfillment and where expectations were being set.",
                tags: ["Data Review", "Omnichannel", "Behavioral"],
              },
              {
                Icon: RefreshCw,
                title: "Iterative design reviews with product and engineering",
                desc: "Regular cycles with product managers and engineers as backend constraints shifted. Designs adapted continuously, never locked in before constraints were fully understood.",
                tags: ["Collaboration", "Engineering", "Iteration"],
              },
              {
                Icon: Smartphone,
                title: "iOS & Android prototype development",
                desc: "Built testable prototypes for both platforms in Axure and Sketch, updated after each review cycle to reflect the latest state of what was actually buildable.",
                tags: ["Axure", "Sketch", "Prototyping"],
              },
              {
                Icon: FlaskConical,
                title: "Unmoderated remote usability testing",
                desc: "Wrote a test script and ran unmoderated remote sessions. Participants were given tasks mirroring a real mixed-fulfillment scenario: some items available to ship, others only available for pickup nearby.",
                tags: ["Usability Research", "Remote", "Unmoderated"],
              },
            ].map((a) => (
              <div
                key={a.title}
                className="bg-surface border border-border rounded-lg p-6 md:p-8 flex gap-5 items-start transition-[opacity,transform] duration-300"
              >
                <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0">
                  <a.Icon size={16} strokeWidth={1.5} className="text-purple" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-xl font-bold text-ink mb-2">{a.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-4">{a.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {a.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testing Results */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Usability Research</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">What the research surfaced</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-4 max-w-2xl">
            Testing surfaced a clear split in how people responded to the concept. That split turned out to be one of the more useful findings of the whole project.
          </p>
          <div className="border border-border rounded-md bg-bg p-5 mb-8 max-w-2xl">
            <p className="font-sans text-xs text-muted leading-relaxed">
              <span className="font-bold text-ink">An industry-documented friction point:</span> Split fulfillment is widely considered one of the hardest checkout experiences to communicate clearly. First exposure to a split-order UI is a known friction point across retail, making it important to distinguish concept comprehension issues from fundamental concept rejection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg bg-surface p-6 md:p-8">
              <p className="font-heading font-bold text-ink text-base mb-5">What resonated</p>
              <div className="flex flex-col gap-4">
                {testingResonated.map((r) => (
                  <div key={r.label} className="bg-bg rounded-md p-4 border border-border">
                    <div className="flex items-center gap-2 mb-1.5">
                      <r.Icon size={14} strokeWidth={1.5} className="text-purple flex-shrink-0" />
                      <p className="font-heading font-bold text-ink text-sm">{r.label}</p>
                    </div>
                    <p className="font-sans text-xs text-muted leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border rounded-lg bg-surface p-6 md:p-8">
              <p className="font-heading font-bold text-ink text-base mb-5">What needed work</p>
              <div className="flex flex-col gap-4">
                {testingChallenges.map((c) => (
                  <div key={c.label} className="bg-bg rounded-md p-4 border border-border">
                    <div className="flex items-center gap-2 mb-1.5">
                      <c.Icon size={14} strokeWidth={1.5} className="text-purple flex-shrink-0" />
                      <p className="font-heading font-bold text-ink text-sm">{c.label}</p>
                    </div>
                    <p className="font-sans text-xs text-muted leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 border border-border rounded-lg bg-surface p-6">
            <p className="font-heading font-bold text-purple text-sm mb-2">Reading the results correctly</p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              The split in user reactions was not a sign that the idea was broken. <span className="font-bold text-ink">It pointed to a viable feature that needed better communication design, not a fundamentally different approach.</span> BOPIS-familiar customers got it immediately. First-timers needed more framing at the entry point. That gap was a map of what to fix next.
            </p>
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-4">A project that didn&apos;t ship, and what it produced.</h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl">
            The project was cancelled. The work mattered regardless. Here is a direct account of why.
          </p>

          <div className="border border-border rounded-lg bg-surface p-8 md:p-10 mb-6">
            <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0 mb-4">
              <Scale size={16} strokeWidth={1.5} className="text-purple" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-ink mb-3">Why the project was cancelled</h3>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              The project was cancelled due to backend complexity that substantially exceeded initial scoping estimates. Supporting item-level fulfillment required changes to the order management system that were significantly larger than anticipated when the project kicked off. Mixed cart fulfillment requires the OMS to route a single transaction to two separate fulfillment nodes, and doing that at scale compounds quickly.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Per-item routing required changes to the OMS far larger than initial estimates",
                "Each split order adds picking, packing, handling, and shipping costs, doubling per-order fulfillment cost",
                "Backend lift combined with the cost model made the business case harder to justify",
                "Organizational priorities shifted, and the feature was removed from the roadmap",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={14} strokeWidth={1.5} className="text-purple flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-sm text-muted leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {researchProduced.map((o) => (
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-8">What I carried forward</h2>
          <div className="flex flex-col gap-5">
            {carriedForward.map((r) => (
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
