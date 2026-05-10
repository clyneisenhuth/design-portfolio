"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CustomCursor from "../components/CustomCursor";

// ── Code primitives ───────────────────────────────────────────────────────────

function CodeChip({ children }: { children: string }) {
  return (
    <code className="font-mono text-xs bg-ink/5 text-purple-deep border border-border px-1.5 py-0.5 rounded-md whitespace-nowrap">
      {children}
    </code>
  );
}

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="relative mt-3 rounded-xl overflow-hidden border border-border">
      <pre className="bg-ink text-sky font-mono text-xs leading-relaxed p-4 overflow-x-auto">
        <code>{code.trim()}</code>
      </pre>
      <button
        onClick={copy}
        className="absolute top-2 right-2 font-sans text-xs px-2 py-1 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-20">
      <h2 className="font-heading font-bold text-2xl text-ink mb-1">{title}</h2>
      <div className="w-12 h-1 bg-purple rounded-full mb-8" />
      {children}
    </section>
  );
}

function Token({ label, value, code }: { label: string; value: string; code?: string }) {
  return (
    <div className="flex flex-col gap-1.5 bg-surface border border-border rounded-xl p-4">
      <p className="font-sans text-xs text-muted uppercase tracking-widest">{label}</p>
      <p className="font-sans text-sm font-semibold text-ink">{value}</p>
      {code && <CodeChip>{code}</CodeChip>}
    </div>
  );
}

// ── Colour palette ─────────────────────────────────────────────────────────────

const palette = [
  { name: "Purple",       hex: "#8059C4", cls: "bg-[#8059C4]", role: "Primary actions, CTAs",        token: "bg-purple / text-purple",       cssVar: "--color-purple" },
  { name: "Purple Deep",  hex: "#5B3A8A", cls: "bg-[#5B3A8A]", role: "Hover / pressed states",       token: "bg-purple-deep",                cssVar: "--color-purple-deep" },
  { name: "Purple Light", hex: "#A07DD4", cls: "bg-[#A07DD4]", role: "Highlights, accents",          token: "bg-purple-light",               cssVar: "--color-purple-light" },
  { name: "Purple Pale",  hex: "#EDE7FF", cls: "bg-[#EDE7FF]", role: "Badge backgrounds, tints",     token: "bg-purple-pale",                cssVar: "--color-purple-pale" },
  { name: "Blue",         hex: "#4B7BE5", cls: "bg-[#4B7BE5]", role: "Secondary actions, links",     token: "bg-blue / text-blue",           cssVar: "--color-blue" },
  { name: "Blue Deep",    hex: "#2D5BC5", cls: "bg-[#2D5BC5]", role: "Blue hover states",            token: "bg-blue-deep",                  cssVar: "--color-blue-deep" },
  { name: "Blue Light",   hex: "#6B9DF5", cls: "bg-[#6B9DF5]", role: "Subtle blue accents",          token: "bg-blue-light",                 cssVar: "--color-blue-light" },
  { name: "Blue Pale",    hex: "#E3EEFF", cls: "bg-[#E3EEFF]", role: "Blue badge backgrounds",       token: "bg-blue-pale",                  cssVar: "--color-blue-pale" },
  { name: "Lavender",     hex: "#B8A0E0", cls: "bg-[#B8A0E0]", role: "Decorative, soft accents",     token: "bg-lavender",                   cssVar: "--color-lavender" },
  { name: "Accent",       hex: "#D4A8F0", cls: "bg-[#D4A8F0]", role: "Floating decorative blobs",    token: "bg-accent",                     cssVar: "--color-accent" },
  { name: "Ink",          hex: "#261A4A", cls: "bg-[#261A4A]", role: "Primary text, headings",       token: "text-ink / bg-ink",             cssVar: "--color-ink" },
  { name: "Muted",        hex: "#7566A0", cls: "bg-[#7566A0]", role: "Body copy, captions",          token: "text-muted",                    cssVar: "--color-muted" },
  { name: "Background",   hex: "#F8F6FF", cls: "bg-[#F8F6FF]", role: "Page background",              token: "bg-bg",                         cssVar: "--color-bg" },
  { name: "Surface",      hex: "#FFFFFF", cls: "bg-white",      role: "Cards, elevated surfaces",     token: "bg-surface",                    cssVar: "--color-surface" },
  { name: "Border",       hex: "#E2D8F5", cls: "bg-[#E2D8F5]", role: "Dividers, card borders",       token: "border-border",                 cssVar: "--color-border" },
];

function ColourPalette() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 1500);
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {palette.map((c) => (
        <button
          key={c.hex}
          onClick={() => copy(c.hex)}
          className="group text-left rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
          title={`Click to copy ${c.hex}`}
        >
          <div className={`${c.cls} h-16 w-full flex items-center justify-center`}>
            <AnimatePresence>
              {copied === c.hex && (
                <motion.span
                  className="font-sans text-xs font-bold text-white bg-black/30 px-2 py-0.5 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <div className="bg-surface px-3 py-2 flex flex-col gap-1">
            <p className="font-heading font-bold text-sm text-ink">{c.name}</p>
            <p className="font-sans text-xs text-muted">{c.hex}</p>
            <p className="font-sans text-xs text-muted/70">{c.role}</p>
            <code className="font-mono text-[10px] text-purple-deep bg-ink/5 border border-border px-1.5 py-0.5 rounded-md mt-0.5 truncate">
              {c.token}
            </code>
            <code className="font-mono text-[10px] text-muted bg-ink/5 border border-border px-1.5 py-0.5 rounded-md truncate">
              {c.cssVar}
            </code>
          </div>
        </button>
      ))}
    </div>
  );
}

// ── Gradients ─────────────────────────────────────────────────────────────────

function Gradients() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-col gap-2 max-w-xs">
        <div
          className="w-64 h-20 rounded-2xl"
          style={{ background: "linear-gradient(135deg, #8059C4, #4B7BE5, #B8A0E0, #4B7BE5, #8059C4)", backgroundSize: "300% auto" }}
        />
        <p className="font-heading font-bold text-2xl gradient-text">Courtney</p>
        <p className="font-sans text-xs text-muted">Animated shimmer — used on the hero name</p>
        <CodeBlock code={`.gradient-text {
  background: linear-gradient(135deg,
    #8059C4, #4B7BE5, #B8A0E0,
    #4B7BE5, #8059C4);
  background-size: 300% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer-bg 5s linear infinite;
}`} />
      </div>

      <div className="flex flex-col gap-2 max-w-xs">
        <div
          className="w-64 h-20 rounded-2xl"
          style={{ background: "linear-gradient(135deg, #8059C4, #4B7BE5)" }}
        />
        <p className="font-heading font-bold text-2xl gradient-text-static">Eisenhuth</p>
        <p className="font-sans text-xs text-muted">Static gradient — used on stat numbers</p>
        <CodeBlock code={`.gradient-text-static {
  background: linear-gradient(135deg,
    #8059C4, #4B7BE5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`} />
      </div>

      <div className="flex flex-col gap-2 max-w-xs">
        <div
          className="w-64 h-20 rounded-2xl opacity-20"
          style={{ background: "radial-gradient(circle, #8059C4, #4B7BE5)", filter: "blur(20px)" }}
        />
        <p className="font-sans text-xs text-muted">Hero background blob</p>
        <CodeBlock code={`style={{
  background: "radial-gradient(circle,
    #8059C4, #4B7BE5)",
  filter: "blur(90px)",
}}
className="opacity-20 pointer-events-none"`} />
      </div>
    </div>
  );
}

// ── Typography ────────────────────────────────────────────────────────────────

function Typography() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="font-sans text-xs text-muted uppercase tracking-widest mb-1">Fredoka — Headings</p>
        <CodeChip>{`font-heading: var(--font-fredoka)`}</CodeChip>
        <div className="flex flex-col gap-4 mt-6">
          {[
            { label: "text-8xl",   cls: "font-heading font-bold text-8xl leading-none",  sample: "Aa",               usage: "Hero display only" },
            { label: "text-7xl",   cls: "font-heading font-bold text-7xl leading-none",  sample: "Heading 1",        usage: "Hero name" },
            { label: "text-5xl",   cls: "font-heading font-bold text-5xl",               sample: "Heading 2",        usage: "Section titles" },
            { label: "text-4xl",   cls: "font-heading font-bold text-4xl",               sample: "Heading 3",        usage: "Sub-section titles" },
            { label: "text-2xl",   cls: "font-heading font-bold text-2xl",               sample: "Heading 4",        usage: "Card headings" },
            { label: "text-xl",    cls: "font-heading font-bold text-xl",                sample: "Heading 5",        usage: "Card values" },
            { label: "text-lg",    cls: "font-heading text-lg",                          sample: "Subheading",       usage: "\"hi, I'm\" label" },
          ].map((t) => (
            <div key={t.label} className="flex items-baseline gap-4 flex-wrap">
              <div className="flex flex-col gap-1 w-36 shrink-0">
                <CodeChip>{t.label}</CodeChip>
                <span className="font-sans text-xs text-muted">{t.usage}</span>
              </div>
              <span className={`${t.cls} text-ink`}>{t.sample}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-sans text-xs text-muted uppercase tracking-widest mb-1">Nunito — Body</p>
        <CodeChip>{`font-sans: var(--font-nunito)`}</CodeChip>
        <div className="flex flex-col gap-4 mt-6">
          {[
            { label: "font-extrabold", cls: "font-sans text-base font-extrabold", sample: "Extrabold — buttons, CTAs",         usage: "Buttons, CTAs" },
            { label: "font-semibold",  cls: "font-sans text-base font-semibold",  sample: "Semibold — emphasis copy",           usage: "Emphasis" },
            { label: "text-base",      cls: "font-sans text-base",                sample: "Regular — paragraph text and copy.", usage: "Body copy" },
            { label: "text-sm semibold",cls:"font-sans text-sm font-semibold",    sample: "Small semibold — labels, badges",    usage: "Labels, badges" },
            { label: "text-sm",        cls: "font-sans text-sm",                  sample: "Small — captions, metadata",         usage: "Captions" },
            { label: "text-xs upper",  cls: "font-sans text-xs uppercase tracking-widest", sample: "MICRO LABEL",              usage: "Section tags" },
          ].map((t) => (
            <div key={t.label} className="flex items-baseline gap-4 flex-wrap">
              <div className="flex flex-col gap-1 w-36 shrink-0">
                <CodeChip>{t.label}</CodeChip>
                <span className="font-sans text-xs text-muted">{t.usage}</span>
              </div>
              <span className={`${t.cls} text-ink`}>{t.sample}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Buttons ───────────────────────────────────────────────────────────────────

function Buttons() {
  const variants = [
    {
      label: "Primary",
      node: (
        <button
          className="font-sans font-extrabold px-8 py-4 bg-purple text-white rounded-2xl hover:bg-purple-deep transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
          style={{ boxShadow: "0 8px 30px #8059C440" }}
        >
          See my work ✦
        </button>
      ),
      code: `className="font-sans font-extrabold px-8 py-4
  bg-purple text-white rounded-2xl
  hover:bg-purple-deep transition-all duration-200
  hover:scale-105 active:scale-95 shadow-lg"
style={{ boxShadow: "0 8px 30px #8059C440" }}`,
    },
    {
      label: "Outline",
      node: (
        <button className="font-sans font-bold px-6 py-3 border-2 border-purple text-purple rounded-2xl hover:bg-purple hover:text-white transition-all duration-200 hover:scale-105 active:scale-95">
          Outline
        </button>
      ),
      code: `className="font-sans font-bold px-6 py-3
  border-2 border-purple text-purple rounded-2xl
  hover:bg-purple hover:text-white
  transition-all duration-200
  hover:scale-105 active:scale-95"`,
    },
    {
      label: "Ghost",
      node: (
        <button className="font-sans font-bold px-6 py-3 bg-surface border-2 border-border text-ink rounded-2xl hover:border-purple/40 hover:shadow-md transition-all duration-200">
          Ghost
        </button>
      ),
      code: `className="font-sans font-bold px-6 py-3
  bg-surface border-2 border-border text-ink
  rounded-2xl hover:border-purple/40
  hover:shadow-md transition-all duration-200"`,
    },
    {
      label: "Chip / pill",
      node: (
        <a href="#" className="inline-flex items-center gap-2 font-sans text-sm font-bold text-purple border-2 border-purple/30 bg-purple-pale px-4 py-2 rounded-full hover:bg-purple hover:text-white hover:border-purple transition-all duration-200 hover:scale-105 active:scale-95">
          <span>📬</span> Email chip
        </a>
      ),
      code: `className="inline-flex items-center gap-2
  font-sans text-sm font-bold
  text-purple border-2 border-purple/30
  bg-purple-pale px-4 py-2 rounded-full
  hover:bg-purple hover:text-white
  transition-all duration-200
  hover:scale-105 active:scale-95"`,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {variants.map((v) => (
        <div key={v.label} className="bg-surface border border-border rounded-2xl p-6 flex flex-col gap-4">
          <p className="font-sans text-xs text-muted uppercase tracking-widest">{v.label}</p>
          <div className="flex items-center justify-center py-2">{v.node}</div>
          <CodeBlock code={v.code} />
        </div>
      ))}
    </div>
  );
}

// ── Badges ────────────────────────────────────────────────────────────────────

function Badges() {
  const items = [
    { label: "Mobile Design", hue: "purple" },
    { label: "E-commerce",    hue: "blue"   },
    { label: "User Research", hue: "purple" },
    { label: "A/B Testing",   hue: "blue"   },
    { label: "Design Systems",hue: "purple" },
    { label: "WCAG",          hue: "blue"   },
  ];
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {items.map((b, i) => (
          <motion.span
            key={b.label}
            className={`font-sans text-sm font-semibold px-4 py-2 rounded-full border-2 ${
              b.hue === "purple"
                ? "bg-purple-pale text-purple border-purple/20"
                : "bg-blue-pale text-blue border-blue/20"
            }`}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 15, delay: i * 0.06 }}
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {b.label}
          </motion.span>
        ))}
      </div>
      <CodeBlock code={`<motion.button
  className="font-sans text-sm font-semibold
    px-4 py-2 rounded-full border-2
    bg-purple-pale text-purple border-purple/20"
  initial={{ scale: 0, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{
    type: "spring",
    stiffness: 400,
    damping: 15,
    delay: i * 0.06,
  }}
  whileHover={{ scale: 1.1, rotate: -2 }}
  whileTap={{ scale: 0.95 }}
/>`} />
    </div>
  );
}

// ── Cards ─────────────────────────────────────────────────────────────────────

function Cards() {
  const cards = [
    {
      label: "Stat card",
      node: (
        <div className="bg-surface rounded-2xl p-5 text-center border-2 border-border hover:border-purple/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group w-full">
          <p className="font-heading text-4xl font-bold gradient-text-static mb-1">10<span className="text-xl"> yrs</span></p>
          <p className="font-sans text-xs text-muted group-hover:text-ink transition-colors">of product design experience</p>
        </div>
      ),
      code: `className="bg-surface rounded-2xl p-5
  text-center border-2 border-border
  hover:border-purple/40 hover:shadow-xl
  transition-all duration-300
  hover:-translate-y-2 group"`,
    },
    {
      label: "Info card — purple",
      node: (
        <div className="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-sm border border-border bg-purple-pale text-purple bg-opacity-60 w-full">
          <span className="text-3xl">🎨</span>
          <div>
            <p className="font-sans text-xs uppercase tracking-widest opacity-60 mb-0.5">Product skills</p>
            <p className="font-heading font-bold text-xl">Strategy, Research, UX/UI</p>
          </div>
        </div>
      ),
      code: `className="flex items-center gap-4
  px-6 py-4 rounded-2xl shadow-sm
  border border-border
  bg-purple-pale text-purple bg-opacity-60"`,
    },
    {
      label: "Info card — blue",
      node: (
        <div className="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-sm border border-border bg-blue-pale text-blue-deep bg-opacity-60 w-full">
          <span className="text-3xl">🏦</span>
          <div>
            <p className="font-sans text-xs uppercase tracking-widest opacity-60 mb-0.5">Current role</p>
            <p className="font-heading font-bold text-xl">Design Systems @ PNC</p>
          </div>
        </div>
      ),
      code: `className="flex items-center gap-4
  px-6 py-4 rounded-2xl shadow-sm
  border border-border
  bg-blue-pale text-blue-deep bg-opacity-60"`,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((c) => (
        <div key={c.label} className="flex flex-col gap-3">
          <p className="font-sans text-xs text-muted uppercase tracking-widest">{c.label}</p>
          {c.node}
          <CodeBlock code={c.code} />
        </div>
      ))}
    </div>
  );
}

// ── Spacing ───────────────────────────────────────────────────────────────────

function Spacing() {
  const steps = [
    { token: "p-1",   px: "4px",   w: "w-1",  usage: "—" },
    { token: "p-2",   px: "8px",   w: "w-2",  usage: "gap between micro elements" },
    { token: "p-3",   px: "12px",  w: "w-3",  usage: "pb-3 on hero name" },
    { token: "p-4",   px: "16px",  w: "w-4",  usage: "px-4 badge padding" },
    { token: "p-6",   px: "24px",  w: "w-6",  usage: "px-6 card padding" },
    { token: "p-8",   px: "32px",  w: "w-8",  usage: "px-8 page margin" },
    { token: "p-10",  px: "40px",  w: "w-10", usage: "gap-10 bio grid" },
    { token: "p-16",  px: "64px",  w: "w-16", usage: "mb-16 section blocks" },
    { token: "p-24",  px: "96px",  w: "w-24", usage: "py-24 hero section" },
    { token: "p-28",  px: "112px", w: "w-28", usage: "py-28 content sections" },
  ];
  return (
    <div className="flex flex-col gap-3">
      {steps.map((s) => (
        <div key={s.token} className="flex items-center gap-4">
          <CodeChip>{s.token}</CodeChip>
          <div className={`${s.w} h-4 bg-purple rounded shrink-0`} />
          <span className="font-sans text-xs text-muted w-10 shrink-0">{s.px}</span>
          <span className="font-sans text-xs text-muted/70">{s.usage}</span>
        </div>
      ))}
    </div>
  );
}

// ── Border radius ─────────────────────────────────────────────────────────────

function Radii() {
  const items = [
    { label: "rounded-full", cls: "rounded-full", px: "9999px", desc: "Badges, pills, chips" },
    { label: "rounded-3xl",  cls: "rounded-3xl",  px: "24px",   desc: "Hero images, large cards" },
    { label: "rounded-2xl",  cls: "rounded-2xl",  px: "16px",   desc: "Buttons, info cards, stat cards" },
    { label: "rounded-xl",   cls: "rounded-xl",   px: "12px",   desc: "Small cards, inputs" },
  ];
  return (
    <div className="flex flex-wrap gap-8">
      {items.map((r) => (
        <div key={r.label} className="flex flex-col gap-2 items-center">
          <div className={`w-24 h-24 bg-purple-pale border-2 border-purple/20 ${r.cls}`} />
          <CodeChip>{r.label}</CodeChip>
          <p className="font-sans text-xs text-muted">{r.px}</p>
          <p className="font-sans text-xs text-muted/70 text-center max-w-[8rem]">{r.desc}</p>
        </div>
      ))}
    </div>
  );
}

// ── Shadows & elevation ───────────────────────────────────────────────────────

function Shadows() {
  const items = [
    { label: "shadow-sm",   cls: "shadow-sm",  desc: "Info cards, badges",    code: "shadow-sm" },
    { label: "shadow-md",   cls: "shadow-md",  desc: "Hovered ghost buttons", code: "shadow-md" },
    { label: "shadow-lg",   cls: "shadow-lg",  desc: "Primary button",        code: "shadow-lg" },
    { label: "shadow-xl",   cls: "shadow-xl",  desc: "Hovered stat cards",    code: "shadow-xl" },
    { label: "Purple glow", cls: "",           desc: "CTA button",
      style: { boxShadow: "0 8px 30px #8059C440" },                            code: `style={{ boxShadow: "0 8px 30px #8059C440" }}` },
  ];
  return (
    <div className="flex flex-wrap gap-8">
      {items.map((s) => (
        <div key={s.label} className="flex flex-col gap-2 items-center">
          <div className={`w-20 h-20 bg-surface rounded-2xl border border-border ${s.cls}`} style={s.style} />
          <p className="font-sans text-xs font-semibold text-ink">{s.label}</p>
          <p className="font-sans text-xs text-muted text-center max-w-[7rem]">{s.desc}</p>
          <CodeChip>{s.code}</CodeChip>
        </div>
      ))}
    </div>
  );
}

// ── Motion tokens ─────────────────────────────────────────────────────────────

function MotionTokens() {
  const [keys, setKeys] = useState([0, 0, 0, 0]);
  const replay = (i: number) => setKeys(k => k.map((v, idx) => idx === i ? v + 1 : v));

  const demos = [
    {
      label: "Fade up + bounce",
      desc: "Hero stat cards",
      code: `initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{
  type: "spring",
  bounce: 0.5,
  duration: 0.8,
  delay: 0.4 + i * 0.15,
}}`,
      node: (k: number) => (
        <motion.div key={k}
          className="px-5 py-3 bg-purple-pale text-purple rounded-2xl font-heading font-bold text-sm"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        >Stat card 🎨</motion.div>
      ),
    },
    {
      label: "Scale pop",
      desc: "Superpower badges",
      code: `initial={{ scale: 0, opacity: 0 }}
whileInView={{ scale: 1, opacity: 1 }}
viewport={{ once: true, margin: "-60px" }}
transition={{
  type: "spring",
  stiffness: 400,
  damping: 15,
  delay: i * 0.06,
}}`,
      node: (k: number) => (
        <motion.div key={k}
          className="px-5 py-3 bg-blue-pale text-blue rounded-2xl font-heading font-bold text-sm"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >Badge 🛍️</motion.div>
      ),
    },
    {
      label: "Page fade in",
      desc: "Section entrances",
      code: `// CSS (no Framer Motion)
className={\`transition-all duration-700
  \${inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8"
  }\`}`,
      node: (k: number) => (
        <motion.div key={k}
          className="px-5 py-3 bg-purple-pale text-purple rounded-2xl font-heading font-bold text-sm"
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >Section content</motion.div>
      ),
    },
    {
      label: "Hover lift",
      desc: "Cards and buttons",
      code: `whileHover={{
  y: -6,
  scale: 1.04,
  boxShadow: "0 12px 30px #8059C430",
}}
whileTap={{ scale: 0.97 }}
transition={{
  type: "spring",
  stiffness: 400,
  damping: 20,
}}`,
      node: (_k: number) => (
        <motion.div
          className="px-5 py-3 bg-surface border-2 border-border text-ink rounded-2xl font-heading font-bold text-sm shadow-sm"
          whileHover={{ y: -6, scale: 1.04, boxShadow: "0 12px 30px #8059C430" }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >Hover me</motion.div>
      ),
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {demos.map((d, i) => (
        <div key={d.label} className="bg-surface border border-border rounded-2xl p-6 flex flex-col gap-3">
          <div>
            <p className="font-heading font-bold text-base text-ink">{d.label}</p>
            <p className="font-sans text-xs text-muted">{d.desc}</p>
          </div>
          <div className="flex items-center justify-center min-h-[80px]">
            {d.node(keys[i])}
          </div>
          <CodeBlock code={d.code} />
          {i < 3 && (
            <button onClick={() => replay(i)} className="font-sans text-xs text-muted underline self-start">
              replay
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Design tokens summary ─────────────────────────────────────────────────────

function TokenSummary() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Token label="Heading font"      value="Fredoka"              code="font-heading" />
      <Token label="Body font"         value="Nunito"               code="font-sans" />
      <Token label="Primary colour"    value="Purple"               code="--color-purple: #8059C4" />
      <Token label="Secondary colour"  value="Blue"                 code="--color-blue: #4B7BE5" />
      <Token label="Background"        value="#F8F6FF"              code="bg-bg" />
      <Token label="Text primary"      value="Ink"                  code="text-ink" />
      <Token label="Text muted"        value="#7566A0"              code="text-muted" />
      <Token label="Border"            value="#E2D8F5"              code="border-border" />
      <Token label="Base radius"       value="16px"                 code="rounded-2xl" />
      <Token label="Large radius"      value="24px"                 code="rounded-3xl" />
      <Token label="Pill radius"       value="9999px"               code="rounded-full" />
      <Token label="Max content width" value="1024px / 1152px"      code="max-w-5xl / max-w-6xl" />
      <Token label="Section padding"   value="7rem vertical"        code="py-28" />
      <Token label="Card padding"      value="24px / 20px"          code="px-6 py-4 / p-5" />
      <Token label="Motion default"    value="Spring stiffness 400" code="type: spring" />
      <Token label="Transition speed"  value="200 / 300 / 700ms"    code="duration-200/300/700" />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-bg">
      <CustomCursor />

      <div className="border-b border-border bg-surface sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-sans text-sm text-muted hover:text-purple transition-colors">← Home</Link>
          <span className="text-border">|</span>
          <span className="font-heading font-bold text-lg text-ink">Design System</span>
        </div>
        <span className="font-sans text-xs text-muted">Courtney Eisenhuth Portfolio</span>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-16">

        <div className="mb-20">
          <p className="font-sans text-xs uppercase tracking-widest text-purple mb-3">Documentation</p>
          <h1 className="font-heading font-bold text-6xl text-ink mb-4">
            Design <span className="gradient-text">System</span>
          </h1>
          <p className="font-sans text-base text-muted max-w-lg">
            The visual language, tokens, and components that make up this portfolio. Built on Tailwind CSS with Framer Motion.
          </p>
        </div>

        <Section title="Token Summary"><TokenSummary /></Section>
        <Section title="Colour Palette">
          <p className="font-sans text-sm text-muted mb-6">Click any swatch to copy its hex value.</p>
          <ColourPalette />
        </Section>
        <Section title="Gradients"><Gradients /></Section>
        <Section title="Typography"><Typography /></Section>
        <Section title="Buttons"><Buttons /></Section>
        <Section title="Badges"><Badges /></Section>
        <Section title="Cards"><Cards /></Section>
        <Section title="Border Radius"><Radii /></Section>
        <Section title="Spacing Scale"><Spacing /></Section>
        <Section title="Shadows & Elevation"><Shadows /></Section>
        <Section title="Motion Tokens"><MotionTokens /></Section>

      </div>
    </div>
  );
}
