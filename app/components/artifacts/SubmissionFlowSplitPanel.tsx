"use client";

import { PenLine, Camera, User, Star, Building2, Sparkles, ArrowRight } from "lucide-react";

const before = [
  { Icon: PenLine, title: "1. Your Review" },
  { Icon: Camera, title: "2. Add Images" },
  { Icon: User, title: "3. Personal/Product Information" },
  { Icon: Star, title: "4. Product Rating" },
  { Icon: Building2, title: "5. Brand Details" },
];

export default function SubmissionFlowSplitPanel() {
  return (
    <div className="border border-border rounded-lg bg-surface overflow-hidden">
      <div className="grid md:grid-cols-2 relative">
        <div className="p-6 md:p-8 md:border-r border-border">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mb-4">Before · 5-step web form</p>
          <div className="flex flex-col gap-2">
            {before.map((s) => (
              <div key={s.title} className="flex items-center gap-3 bg-bg border border-border rounded-md p-3">
                <div className="w-8 h-8 rounded-md bg-surface border border-border flex items-center justify-center flex-shrink-0">
                  <s.Icon size={14} strokeWidth={1.5} className="text-muted" />
                </div>
                <p className="font-sans text-xs font-bold text-ink">{s.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-purple text-white z-10 shadow-lg">
          <ArrowRight size={16} strokeWidth={2} />
        </div>

        <div className="p-6 md:p-8 bg-purple-pale/30">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-purple mb-4">After · 1 screen</p>
          <div className="flex items-center gap-3 bg-bg border border-purple/20 rounded-md p-4">
            <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0">
              <Sparkles size={16} strokeWidth={1.5} className="text-purple" />
            </div>
            <div>
              <p className="font-sans text-xs font-bold text-ink">Rating, photo, title, body & recommendation</p>
              <p className="font-sans text-[11px] text-muted">All five steps collapsed into one native screen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
