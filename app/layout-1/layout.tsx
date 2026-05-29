import { Space_Grotesk, DM_Sans } from "next/font/google";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-l1-heading",
  weight: ["400", "500", "600", "700"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-l1-body",
  weight: ["300", "400", "500", "600", "700"],
});

export default function Layout1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${heading.variable} ${body.variable}`}
      style={{
        "--font-fredoka": "var(--font-l1-heading)",
        "--font-nunito":  "var(--font-l1-body)",
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
