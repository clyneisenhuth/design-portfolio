import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incentivized Reviews Strategy",
  description:
    "How a loyalty-backed incentive program drove a 300% increase in daily review volume for the AE + Aerie app — balancing motivation, trust, and FTC compliance.",
  openGraph: {
    title: "Incentivized Reviews Strategy | Courtney Eisenhuth",
    description:
      "How a loyalty-backed incentive program drove a 300% increase in daily review volume for the AE + Aerie app — balancing motivation, trust, and FTC compliance.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
