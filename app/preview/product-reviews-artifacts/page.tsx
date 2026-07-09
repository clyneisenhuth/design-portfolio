"use client";

import { ArrowLeft } from "lucide-react";
import PurchaseFactorsBarChart from "../../components/artifacts/PurchaseFactorsBarChart";
import SubmissionFlowDiagram from "../../components/artifacts/SubmissionFlowDiagram";
import SubmissionFlowArrows from "../../components/artifacts/SubmissionFlowArrows";
import SubmissionFlowSplitPanel from "../../components/artifacts/SubmissionFlowSplitPanel";
import SubmissionFlowFunnel from "../../components/artifacts/SubmissionFlowFunnel";
import AnnotatedScreen from "../../components/artifacts/AnnotatedScreen";

const purchaseFactors = [
  { rank: "1", factor: "Price", pct: "83%", note: "Reviews validate worth relative to cost" },
  { rank: "2", factor: "Return Policy", pct: "80%", note: "Reviews mentioning returns influence purchase" },
  { rank: "3", factor: "Ratings & Reviews", pct: "77%", note: "Central to apparel purchase decisions" },
  { rank: "4", factor: "Fit & Sizing Info", pct: "67%", note: "Top return reason; reviews address sizing accuracy" },
  { rank: "5", factor: "Customer Photos", pct: "59%", note: "Shows product on real people vs. studio photography" },
  { rank: "6", factor: "Personal Style", pct: "58%", note: "Shoppers verify expectations through reviews" },
];

export default function ProductReviewsArtifactsPreview() {
  return (
    <div className="min-h-screen bg-bg">
      <section className="border-t border-border px-6 pt-24 pb-16 bg-bg">
        <div className="max-w-4xl mx-auto">
          <a href="/case-studies/product-reviews" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors mb-12 group">
            <ArrowLeft size={12} /><span>Back to case study</span>
          </a>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-6">Preview · Not Linked From Nav</p>
          <h1 className="font-heading font-bold text-ink mb-6" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            App Product Reviews — Artifact Options
          </h1>
          <p className="font-sans text-base text-muted leading-relaxed max-w-2xl">
            Three UX artifacts built from the existing App Product Reviews case study content, for review before deciding what gets folded into the live page.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-20">

        {/* 1. Purchase factors bar chart */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Option 1</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-3">Purchase-factors bar chart</h2>
          <p className="font-sans text-sm text-muted leading-relaxed mb-6 max-w-2xl">
            Turns the ranked list in the &ldquo;Research&rdquo; section into a visual comparison so the drop-off between factors (83% down to 58%) is legible at a glance, not just read as six separate numbers.
          </p>
          <PurchaseFactorsBarChart data={purchaseFactors} />
        </div>

        {/* 2. Submission flow diagram — four treatments of the same content */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Option 2</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-3">Submission flow: before / after</h2>
          <p className="font-sans text-sm text-muted leading-relaxed mb-10 max-w-2xl">
            Four visual treatments of the same underlying content: the &ldquo;Native Write a Review Flow&rdquo; solution and the 2x submission-rate outcome, expressed as the old 5-step web form (Your Review, Add Images, Personal/Product Information, Product Rating, Brand Details) collapsing into one native screen. All illustrative, not screenshot comparisons, since no legacy screenshots exist. Pick whichever reads best, or none.
          </p>

          <div className="flex flex-col gap-10">
            <div>
              <p className="font-sans text-xs font-bold text-ink mb-3">2a · Stacked step cards</p>
              <SubmissionFlowDiagram />
            </div>

            <div>
              <p className="font-sans text-xs font-bold text-ink mb-3">2b · Connected arrows</p>
              <SubmissionFlowArrows />
            </div>

            <div>
              <p className="font-sans text-xs font-bold text-ink mb-3">2c · Split panel</p>
              <SubmissionFlowSplitPanel />
            </div>

            <div>
              <p className="font-sans text-xs font-bold text-ink mb-3">2d · Drop-off funnel</p>
              <SubmissionFlowFunnel />
            </div>
          </div>
        </div>

        {/* 3. Annotated final screens */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-purple mb-3">Option 3</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-3">Annotated shipped screens</h2>
          <p className="font-sans text-sm text-muted leading-relaxed mb-6 max-w-2xl">
            Each of the four shipped screenshots currently packs several distinct UI details into one caption sentence. Numbered callouts tie each detail directly to where it lives on the screen.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <AnnotatedScreen
              src="/case-studies/product-reviews/image1.jpeg"
              alt="Enriched photo carousels on PDP"
              title="Enriched photo carousels on PDP"
              annotations={[
                { x: 43, y: 30, label: "Rating summary and star distribution set expectations before scrolling." },
                { x: 50, y: 43, label: "Customer photo carousel, swipeable and prominent, not buried below the fold." },
              ]}
            />
            <AnnotatedScreen
              src="/case-studies/product-reviews/image2.jpeg"
              alt="Full-screen review sheet"
              title="Full-screen review sheet"
              annotations={[
                { x: 50, y: 40, label: "Full-screen photo viewer with swipeable thumbnails for that review's photos." },
                { x: 45, y: 85, label: "Rating and review text stay visible directly beneath the photo." },
              ]}
            />
            <AnnotatedScreen
              src="/case-studies/product-reviews/image3.jpeg"
              alt="All Reviews list with sort & fit context"
              title="All Reviews list with sort & fit context"
              annotations={[
                { x: 46, y: 46, label: "Dedicated sort control, one of the filtering gaps identified in competitive research." },
                { x: 44, y: 65, label: "Reviewer location and reward-points disclosure surfaced inline with each review." },
              ]}
            />
            <AnnotatedScreen
              src="/case-studies/product-reviews/image4.jpeg"
              alt="Native Write a Review flow"
              title="Native Write a Review flow"
              annotations={[
                { x: 41, y: 44, label: "Photo upload prompted early, first-class rather than an afterthought." },
                { x: 60, y: 78, label: "Native toggle and single-screen layout replace the old multi-step web form." },
              ]}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
