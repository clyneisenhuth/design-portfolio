import { Playfair_Display, Lora } from "next/font/google";

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-l2-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const body = Lora({
  subsets: ["latin"],
  variable: "--font-l2-body",
  weight: ["400", "500", "600", "700"],
});

export default function Layout2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${heading.variable} ${body.variable}`}
      style={{
        "--font-fredoka": "var(--font-l2-heading)",
        "--font-nunito":  "var(--font-l2-body)",
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
