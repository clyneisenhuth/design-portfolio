"use client";

import { MessageSquare, Mail, ShieldCheck, Gift, ArrowRight } from "lucide-react";

const steps = [
  {
    Icon: MessageSquare,
    title: "Review submitted",
    desc: "Customer confirms or joins the loyalty program inline, no separate sign-in step.",
  },
  {
    Icon: Mail,
    title: "Email matched",
    desc: "Submitted email is matched to a loyalty account in CrowdTwist.",
  },
  {
    Icon: ShieldCheck,
    title: "Moderation review",
    desc: "Review enters the BazaarVoice queue. Reward is tied to approval, not sentiment.",
  },
  {
    Icon: Gift,
    title: "Points credited",
    desc: "Approved review triggers automated point delivery and a visible reward label.",
  },
];

export default function IncentiveFlowDiagram() {
  return (
    <div className="border border-border rounded-lg bg-surface p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-stretch gap-2">
        {steps.map((s, i) => (
          <div key={s.title} className="flex items-center flex-1 gap-2">
            <div className="flex-1 bg-bg border border-border rounded-lg p-5 flex flex-col gap-3">
              <div className="w-9 h-9 rounded-md bg-purple-pale flex items-center justify-center flex-shrink-0">
                <s.Icon size={16} strokeWidth={1.5} className="text-purple" />
              </div>
              <div>
                <p className="font-heading font-bold text-ink text-sm mb-1">{s.title}</p>
                <p className="font-sans text-xs text-muted leading-relaxed">{s.desc}</p>
              </div>
            </div>
            {i !== steps.length - 1 && (
              <ArrowRight size={16} strokeWidth={1.5} className="text-muted flex-shrink-0 hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
