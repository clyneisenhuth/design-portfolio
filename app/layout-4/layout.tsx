import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

export default function Layout4Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={caveat.variable}>
      {children}
    </div>
  );
}
