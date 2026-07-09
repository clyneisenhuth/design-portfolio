"use client";

import { useInView } from "../../hooks/useInView";

const bars = [
  { label: "Before launch", value: 375, max: 1500 },
  { label: "After launch", value: 1500, max: 1500 },
];

export default function ResultsBarChart() {
  const { ref, inView } = useInView(0.3);

  return (
    <div ref={ref} className="border border-border rounded-lg bg-surface p-6 md:p-8">
      <div className="flex flex-col gap-5">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="flex items-baseline justify-between mb-1.5">
              <p className="font-sans text-sm text-muted">{b.label}</p>
              <p className="font-heading font-bold text-ink text-sm">~{b.value.toLocaleString()}/day</p>
            </div>
            <div className="h-3 rounded-full bg-bg border border-border overflow-hidden">
              <div
                className="h-full rounded-full bg-purple transition-[width] duration-[1200ms] ease-out"
                style={{ width: inView ? `${(b.value / b.max) * 100}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="font-sans text-xs text-muted leading-relaxed mt-5 pt-5 border-t border-border">
        Baseline of ~375/day is derived from the stated 300% increase reaching ~1,500/day — not an independently reported figure.
      </p>
    </div>
  );
}
