import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single Account Initiative",
  description:
    "Unifying American Eagle and Aerie into one seamless account — designing the migration flows, loyalty consolidation, and guest conversion that reached 10M+ customers.",
  openGraph: {
    title: "Single Account Initiative | Courtney Eisenhuth",
    description:
      "Unifying American Eagle and Aerie into one seamless account — designing the migration flows, loyalty consolidation, and guest conversion that reached 10M+ customers.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
