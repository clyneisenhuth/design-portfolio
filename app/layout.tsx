import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["300", "400", "500", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clyneisenhuth.com"),
  title: {
    default: "Courtney Eisenhuth — Senior Product Designer",
    template: "%s | Courtney Eisenhuth",
  },
  description:
    "Courtney Eisenhuth is a Senior Product Designer with 10 years of experience crafting mobile-first e-commerce UX. Specializing in iOS & Android design for retail, loyalty, and checkout flows.",
  keywords: [
    "product designer",
    "UX designer",
    "mobile designer",
    "e-commerce UX",
    "iOS design",
    "Android design",
    "retail UX",
    "design portfolio",
    "senior product designer",
    "American Eagle Outfitters",
    "PNC Bank",
    "checkout design",
    "loyalty UX",
  ],
  authors: [{ name: "Courtney Eisenhuth" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Courtney Eisenhuth — Portfolio",
    title: "Courtney Eisenhuth — Senior Product Designer",
    description:
      "Courtney Eisenhuth is a Senior Product Designer with 10 years of experience crafting mobile-first e-commerce UX. Specializing in iOS & Android design for retail, loyalty, and checkout flows.",
  },
  twitter: {
    card: "summary",
    title: "Courtney Eisenhuth — Senior Product Designer",
    description:
      "Senior Product Designer specializing in mobile e-commerce UX — iOS, Android, retail, loyalty, and checkout flows.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased min-h-screen">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
