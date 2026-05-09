"use client";

const layouts = [
  {
    href: "/layout-1",
    label: "Layout 1",
    name: "Dark Studio",
    desc: "Dark background, glowing card borders, timeline experience, skills marquee, neon accent palette.",
    palette: ["#0A0A0F", "#B47FFF", "#00D4FF", "#FF6B6B"],
  },
  {
    href: "/layout-2",
    label: "Layout 2",
    name: "Soft Editorial",
    desc: "Warm cream, big outlined typography, alternating full-width project rows, amber & terracotta accents.",
    palette: ["#F7F4EF", "#1A1207", "#C4853A", "#8B7355"],
  },
  {
    href: "/layout-3",
    label: "Layout 3",
    name: "Bold Maximalist",
    desc: "White base, vivid bento grid, color-flood hover cards, coral footer, high-energy interactions.",
    palette: ["#F8F8F8", "#FF4757", "#2563EB", "#FBBF24"],
  },
  {
    href: "/layout-4",
    label: "Layout 4",
    name: "Quirky & Fun",
    desc: "Handwriting font, emoji cursor trail, magnetic button, polaroid project cards, sticker tags, blob SVGs.",
    palette: ["#FFFDF7", "#8B5CF6", "#FBBF24", "#10B981"],
  },
];

export default function LayoutsIndex() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-6 py-20">
      <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-2">Layout Exploration</p>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-ink text-center mb-2">Pick a layout to preview</h1>
      <p className="font-sans text-sm text-muted mb-12 text-center">4 distinct directions — click to open full-page preview</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-5xl">
        {layouts.map(l => (
          <a key={l.href} href={l.href}
            className="group block rounded-3xl border-2 border-border bg-surface hover:border-purple/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            {/* Palette swatch */}
            <div className="h-3 flex">
              {l.palette.map(c => <div key={c} className="flex-1" style={{ background: c }} />)}
            </div>
            <div className="p-6">
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-muted mb-1">{l.label}</p>
              <h2 className="font-heading text-xl font-bold text-ink mb-2 group-hover:text-purple transition-colors">{l.name}</h2>
              <p className="font-sans text-sm text-muted leading-relaxed">{l.desc}</p>
              <div className="flex items-center gap-1.5 mt-5 font-sans text-sm font-bold text-purple">
                Open preview <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
      <a href="/" className="mt-12 font-sans text-sm font-semibold text-muted hover:text-purple transition-colors">← Back to current site</a>
    </div>
  );
}
