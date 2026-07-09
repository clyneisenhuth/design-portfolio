"use client";

import { useInView } from "../../hooks/useInView";

const beforeSteps = [
  "1. Your Review",
  "2. Add Images",
  "3. Personal/Product Information",
  "4. Product Rating",
  "5. Brand Details",
];
const beforeWidths = [100, 84, 68, 52, 36];

export default function SubmissionFlowFunnel() {
  const { ref, inView } = useInView(0.3);

  return (
    <div ref={ref} className="border border-border rounded-lg bg-surface p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mb-4">Before · 5-step web form</p>
          <div className="flex flex-col gap-2">
            {beforeSteps.map((label, i) => (
              <div key={label}>
                <div className="h-8 rounded-md bg-bg border border-border overflow-hidden">
                  <div
                    className="h-full rounded-md bg-muted/40 transition-[width] duration-[900ms] ease-out flex items-center px-3"
                    style={{ width: inView ? `${beforeWidths[i]}%` : "0%", transitionDelay: `${i * 150}ms` }}
                  >
                    <span className="font-sans text-[11px] text-ink whitespace-nowrap">{label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-purple mb-4">After · single screen</p>
          <div className="h-8 rounded-md bg-bg border border-purple/20 overflow-hidden">
            <div
              className="h-full rounded-md bg-purple transition-[width] duration-[900ms] ease-out flex items-center px-3"
              style={{ width: inView ? "100%" : "0%" }}
            >
              <span className="font-sans text-[11px] text-white whitespace-nowrap">Everything, one screen</span>
            </div>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 rounded-md px-3 py-2 border border-border bg-bg">
            <span className="font-heading font-bold text-purple text-lg">2x</span>
            <span className="font-sans text-xs text-muted">submission rate vs. the old flow</span>
          </div>
        </div>
      </div>

      <p className="font-sans text-xs text-muted leading-relaxed mt-6 pt-6 border-t border-border">
        The narrowing bars illustrate the abandonment dynamic across the old form's five steps (Your Review, Add Images, Personal/Product Information, Product Rating, Brand Details) — exact per-step drop-off wasn&apos;t independently measured, only the net 2x submission-rate outcome.
      </p>
    </div>
  );
}
