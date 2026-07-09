"use client";

import { Check } from "lucide-react";

type Cell = boolean | null; // true = confirmed, null = not part of documented finding

const columns = ["Abercrombie", "Adidas", "Old Navy", "AE + Aerie"];

const rows: { label: string; cells: Cell[] }[] = [
  { label: "Loyalty-linked incentive", cells: [true, true, true, true] },
  { label: "Visible incentive disclosure", cells: [true, true, true, true] },
  { label: "Email-matched verification (no forced sign-in)", cells: [true, null, true, true] },
  { label: "Moderation-gated reward release", cells: [true, true, null, true] },
  { label: "Framed as appreciation, not payment", cells: [null, null, null, true] },
];

export default function CompetitiveMatrix() {
  return (
    <div className="border border-border rounded-lg bg-surface overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[560px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left font-sans text-xs text-muted font-normal p-4 pr-2 w-[40%]">Dimension</th>
              {columns.map((c) => (
                <th
                  key={c}
                  className={`font-heading text-sm font-bold p-4 text-center ${
                    c === "AE + Aerie" ? "text-purple bg-purple-pale" : "text-ink"
                  }`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.label} className={i !== rows.length - 1 ? "border-b border-border" : ""}>
                <td className="font-sans text-sm text-ink p-4 pr-2">{r.label}</td>
                {r.cells.map((cell, j) => (
                  <td
                    key={j}
                    className={`text-center p-4 ${columns[j] === "AE + Aerie" ? "bg-purple-pale/50" : ""}`}
                  >
                    {cell ? (
                      <Check size={16} strokeWidth={2} className="text-purple inline-block" />
                    ) : (
                      <span className="text-muted text-sm">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="font-sans text-xs text-muted leading-relaxed p-4 border-t border-border">
        Dashes mark dimensions that weren&apos;t part of the documented research finding for that program, not a confirmed absence.
      </p>
    </div>
  );
}
