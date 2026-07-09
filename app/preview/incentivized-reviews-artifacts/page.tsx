"use client";

import { ArrowLeft } from "lucide-react";
import CompetitiveMatrix from "../../components/artifacts/CompetitiveMatrix";
import IncentiveFlowDiagram from "../../components/artifacts/IncentiveFlowDiagram";
import ResultsBarChart from "../../components/artifacts/ResultsBarChart";
import AnnotatedScreen from "../../components/artifacts/AnnotatedScreen";

export default function IncentivizedReviewsArtifactsPreview() {
  return (
    <div className="min-h-screen bg-bg">
      <section className="border-t border-border px-6 pt-24 pb-16 bg-bg">
        <div className="max-w-4xl mx-auto">
          <a href="/case-studies/incentivized-reviews" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors mb-12 group">
            <ArrowLeft size={12} /><span>Back to case study</span>
          </a>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-6">Preview · Not Linked From Nav</p>
          <h1 className="font-heading font-bold text-ink mb-6" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Incentivized Reviews — Artifact Options
          </h1>
          <p className="font-sans text-base text-muted leading-relaxed max-w-2xl">
            Four UX artifacts built from the existing Incentivized Reviews case study content, for review before deciding what (if anything) gets folded into the live page.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-20">

        {/* 1. Competitive matrix */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Option 1</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-3">Competitive comparison matrix</h2>
          <p className="font-sans text-sm text-muted leading-relaxed mb-6 max-w-2xl">
            Replaces the three plain-text competitor cards with a structured table across the dimensions the research was actually organized around: framing, verification, and guardrails. Would slot into the &ldquo;Competitive Research&rdquo; section.
          </p>
          <CompetitiveMatrix />
        </div>

        {/* 2. Flow diagram */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Option 2</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-3">Email-match reward flow</h2>
          <p className="font-sans text-sm text-muted leading-relaxed mb-6 max-w-2xl">
            Visualizes the most technical, least-obvious mechanic in the case study: how a review gets from submission to a credited reward without ever forcing a sign-in. Would slot into the &ldquo;Execution&rdquo; section, near the three designed behaviors.
          </p>
          <IncentiveFlowDiagram />
        </div>

        {/* 3. Before/after bar chart */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Option 3</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-3">Before / after volume</h2>
          <p className="font-sans text-sm text-muted leading-relaxed mb-6 max-w-2xl">
            Gives the 300% stat a visual anchor instead of a single animated number. Would sit alongside (or replace) the big stat card in &ldquo;Outcomes.&rdquo; Note: the baseline bar is a derived estimate, not a separately reported figure — worth confirming the real number if this one ships.
          </p>
          <ResultsBarChart />
        </div>

        {/* 4. Annotated screens */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Option 4</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-3">Annotated shipped screens</h2>
          <p className="font-sans text-sm text-muted leading-relaxed mb-6 max-w-2xl">
            Adds numbered callouts to the two existing screenshots so the caption copy ties directly to a specific spot on the screen, rather than the reader having to find it themselves. Would replace the plain screenshots in &ldquo;Final Screens.&rdquo;
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <AnnotatedScreen
              src="/case-studies/incentivized-reviews/points-image2.jpeg"
              alt="Write a Review screen showing Real Rewards loyalty prompt"
              title="Loyalty prompt at submission"
              annotations={[
                { x: 50, y: 63.5, label: "Offer copy: 50 points per posted review, no extra steps to claim it." },
                { x: 40, y: 69.5, label: "Yes/No control: confirms loyalty status inline, no forced sign-in." },
              ]}
            />
            <AnnotatedScreen
              src="/case-studies/incentivized-reviews/points-image1.jpeg"
              alt="All Reviews list screen showing Reward Points Awarded label"
              title="Visible incentive labeling"
              annotations={[
                { x: 44, y: 52.5, label: "“Reward Points Awarded” tag: visible disclosure, not a footnote." },
                { x: 50, y: 30, label: "Standard review card position: incentivized reviews aren't set apart or hidden." },
              ]}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
