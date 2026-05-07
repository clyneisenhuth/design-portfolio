import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Product Reviews Redesign",
  description:
    "End-to-end redesign of the AE + Aerie mobile app reviews experience — rebuilding photo carousels, native submission flows, and review UI to drive purchase confidence and higher conversion.",
  openGraph: {
    title: "App Product Reviews Redesign | Courtney Eisenhuth",
    description:
      "End-to-end redesign of the AE + Aerie mobile app reviews experience — rebuilding photo carousels, native submission flows, and review UI to drive purchase confidence and higher conversion.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
