"use client";

import { useInView } from "../../hooks/useInView";

type Factor = { rank: string; factor: string; pct: string; note: string };

export default function PurchaseFactorsBarChart({ data }: { data: Factor[] }) {
  const { ref, inView } = useInView(0.3);
  const max = Math.max(...data.map((f) => parseInt(f.pct, 10)));

  return (
    <div ref={ref} className="border border-border rounded-lg bg-surface p-6 md:p-8">
      <div className="flex flex-col gap-4">
        {data.map((f) => {
          const value = parseInt(f.pct, 10);
          return (
            <div key={f.factor}>
              <div className="flex items-baseline justify-between mb-1.5">
                <p className="font-sans text-sm font-bold text-ink">
                  <span className="font-heading text-muted mr-2">{f.rank}</span>
                  {f.factor}
                </p>
                <p className="font-heading font-bold text-purple text-sm">{f.pct}</p>
              </div>
              <div className="h-2.5 rounded-full bg-bg border border-border overflow-hidden mb-1">
                <div
                  className="h-full rounded-full bg-purple transition-[width] duration-[1000ms] ease-out"
                  style={{ width: inView ? `${(value / max) * 100}%` : "0%" }}
                />
              </div>
              <p className="font-sans text-xs text-muted">{f.note}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
