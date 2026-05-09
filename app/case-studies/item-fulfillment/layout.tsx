import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Item Level Fulfillment",
  description:
    "Designing flexible mixed-cart fulfillment for the AE mobile app — a concept validated through usability research that shaped the product direction even after the feature was cancelled.",
  openGraph: {
    title: "Item Level Fulfillment | Courtney Eisenhuth",
    description:
      "Designing flexible mixed-cart fulfillment for the AE mobile app — a concept validated through usability research that shaped the product direction even after the feature was cancelled.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
