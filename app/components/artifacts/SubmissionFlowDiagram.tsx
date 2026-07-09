"use client";

import { PenLine, Camera, User, Star, Building2, Sparkles } from "lucide-react";

const before = [
  { Icon: PenLine, title: "1. Your Review" },
  { Icon: Camera, title: "2. Add Images" },
  { Icon: User, title: "3. Personal/Product Information" },
  { Icon: Star, title: "4. Product Rating" },
  { Icon: Building2, title: "5. Brand Details" },
];

const after = [
  { Icon: Sparkles, title: "Everything, one native screen", desc: "Rating, photo, title, body, and recommendation all live on a single screen." },
];

export default function SubmissionFlowDiagram() {
  return (
    <div className="border border-border rounded-lg bg-surface p-6 md:p-8 flex flex-col gap-6">
      <div>
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mb-3">Before · 5-step web form</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {before.map((s) => (
            <div key={s.title} className="bg-bg border border-border rounded-lg p-4 flex flex-col items-center text-center gap-2">
              <div className="w-8 h-8 rounded-md bg-surface border border-border flex items-center justify-center flex-shrink-0">
                <s.Icon size={15} strokeWidth={1.5} className="text-muted" />
              </div>
              <p className="font-sans text-xs font-bold text-ink leading-tight">{s.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-purple mb-3">After · 1 screen</p>
        {after.map((s) => (
          <div key={s.title} className="bg-purple-pale/40 border border-purple/20 rounded-lg p-5 flex items-start gap-4">
            <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0">
              <s.Icon size={16} strokeWidth={1.5} className="text-purple" />
            </div>
            <div>
              <p className="font-heading font-bold text-ink text-sm mb-1">{s.title}</p>
              <p className="font-sans text-xs text-muted leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
