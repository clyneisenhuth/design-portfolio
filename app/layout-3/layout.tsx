import { Bebas_Neue, Poppins } from "next/font/google";

const heading = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-l3-heading",
  weight: ["400"],
});

const body = Poppins({
  subsets: ["latin"],
  variable: "--font-l3-body",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Layout3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${heading.variable} ${body.variable}`}
      style={{
        "--font-heading": "var(--font-l3-heading), Impact, ui-sans-serif",
        "--font-sans":    "var(--font-l3-body), ui-sans-serif, system-ui",
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
