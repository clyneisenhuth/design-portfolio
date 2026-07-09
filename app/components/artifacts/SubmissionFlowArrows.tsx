"use client";

import { PenLine, Camera, User, Star, Building2, Sparkles, ArrowRight } from "lucide-react";

const before = [
  { Icon: PenLine, title: "Your Review" },
  { Icon: Camera, title: "Add Images" },
  { Icon: User, title: "Personal/Product Info" },
  { Icon: Star, title: "Product Rating" },
  { Icon: Building2, title: "Brand Details" },
];

export default function SubmissionFlowArrows() {
  return (
    <div className="border border-border rounded-lg bg-surface p-6 md:p-8 flex flex-col gap-6">
      <div>
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mb-3">Before · 5-step web form</p>
        <div className="flex flex-wrap items-center gap-2">
          {before.map((s, i) => (
            <div key={s.title} className="flex items-center gap-2">
              <div className="bg-bg border border-border rounded-lg p-3 flex flex-col items-center text-center gap-1.5 w-[104px]">
                <div className="w-7 h-7 rounded-md bg-surface border border-border flex items-center justify-center flex-shrink-0">
                  <s.Icon size={13} strokeWidth={1.5} className="text-muted" />
                </div>
                <p className="font-sans text-[11px] font-bold text-ink leading-tight">{s.title}</p>
              </div>
              {i !== before.length - 1 && (
                <ArrowRight size={13} strokeWidth={1.5} className="text-muted flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-purple mb-3">After · 1 screen</p>
        <div className="bg-purple-pale/40 border border-purple/20 rounded-lg p-4 flex items-center gap-3 w-fit">
          <div className="w-8 h-8 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0">
            <Sparkles size={15} strokeWidth={1.5} className="text-purple" />
          </div>
          <p className="font-sans text-xs font-bold text-ink">Everything, one native screen</p>
        </div>
      </div>
    </div>
  );
}
