"use client";

import { useState, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CustomCursor from "../components/CustomCursor";

function Card({ title, caption, children }: { title: string; caption: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl border border-border p-8 flex flex-col gap-6 shadow-sm">
      <div>
        <h2 className="font-heading font-bold text-xl text-ink mb-1">{title}</h2>
        <p className="font-sans text-sm text-muted">{caption}</p>
      </div>
      <div className="flex-1 flex items-center justify-center min-h-[180px]">
        {children}
      </div>
    </div>
  );
}

// ── 1. Fade up with bounce ─────────────────────────────────────────────────────
function FadeUpBounce() {
  const [key, setKey] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex gap-3">
        {["Product skills 🎨", "Focus area 🛍️", "Current role 🏦", "Working on 🚀"].map((label, i) => (
          <motion.div
            key={`${key}-${i}`}
            className="px-4 py-2 bg-purple-pale text-purple rounded-xl font-heading font-bold text-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: i * 0.15 }}
          >
            {label}
          </motion.div>
        ))}
      </div>
      <button onClick={() => setKey(k => k + 1)} className="font-sans text-xs text-muted underline">replay</button>
    </div>
  );
}

// ── 2. Scale pop ──────────────────────────────────────────────────────────────
function ScalePop() {
  const [key, setKey] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        {["🎨", "🛍️", "🏦", "🚀"].map((emoji, i) => (
          <motion.div
            key={`${key}-${i}`}
            className="w-14 h-14 rounded-2xl bg-purple-pale flex items-center justify-center text-2xl shadow-sm"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15, delay: i * 0.1 }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>
      <button onClick={() => setKey(k => k + 1)} className="font-sans text-xs text-muted underline">replay</button>
    </div>
  );
}

// ── 3. Slide in from right, staggered ─────────────────────────────────────────
function SlideFromRight() {
  const [key, setKey] = useState(0);
  const items = ["Strategy", "Research", "UX/UI", "Mobile"];
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex flex-col gap-2 w-full max-w-xs">
        {items.map((item, i) => (
          <motion.div
            key={`${key}-${i}`}
            className="flex items-center gap-3 px-4 py-3 bg-blue-pale text-blue-deep rounded-xl font-heading font-bold text-sm"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24, delay: i * 0.12 }}
          >
            <span className="w-2 h-2 rounded-full bg-blue inline-block" />
            {item}
          </motion.div>
        ))}
      </div>
      <button onClick={() => setKey(k => k + 1)} className="font-sans text-xs text-muted underline">replay</button>
    </div>
  );
}

// ── 4. Cascade flip ───────────────────────────────────────────────────────────
function CascadeFlip() {
  const [key, setKey] = useState(0);
  const cards = ["10+ years", "Mobile", "PNC Bank", "AI & Vibe-coding"];
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-3">
        {cards.map((label, i) => (
          <motion.div
            key={`${key}-${i}`}
            className="px-4 py-3 bg-purple-pale text-purple rounded-xl font-heading font-bold text-sm text-center"
            initial={{ opacity: 0, rotateX: 90, y: -20 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.15 }}
            style={{ transformPerspective: 600 }}
          >
            {label}
          </motion.div>
        ))}
      </div>
      <button onClick={() => setKey(k => k + 1)} className="font-sans text-xs text-muted underline">replay</button>
    </div>
  );
}

// ── 5. Hover lift ─────────────────────────────────────────────────────────────
function HoverLift() {
  return (
    <div className="flex gap-4">
      {["🎨 Design", "🛍️ E-comm", "📱 Mobile"].map((label) => (
        <motion.div
          key={label}
          className="px-5 py-3 bg-surface border border-border rounded-2xl font-heading font-bold text-sm text-ink shadow-sm cursor-pointer"
          whileHover={{ y: -6, scale: 1.04, boxShadow: "0 12px 30px #8059C430" }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
}

// ── 6. Scroll reveal ──────────────────────────────────────────────────────────
function ScrollReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} className="flex flex-col gap-3 w-full max-w-xs">
      {["Scroll down to reveal", "Each item fades in", "When it enters view"].map((text, i) => (
        <motion.div
          key={text}
          className="px-4 py-3 bg-purple-pale text-purple rounded-xl font-heading font-bold text-sm"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}

// ── 7. Drag ───────────────────────────────────────────────────────────────────
function DragExample() {
  return (
    <div className="relative w-full h-[140px] bg-purple-pale/40 rounded-2xl overflow-hidden flex items-center justify-center">
      <p className="font-sans text-xs text-muted absolute top-3 left-4">drag me around</p>
      <motion.div
        className="w-16 h-16 rounded-2xl bg-purple flex items-center justify-center text-white text-2xl shadow-lg cursor-grab active:cursor-grabbing"
        drag
        dragConstraints={{ left: -100, right: 100, top: -40, bottom: 40 }}
        whileDrag={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        🎨
      </motion.div>
    </div>
  );
}

// ── 8. Presence toggle ────────────────────────────────────────────────────────
function PresenceToggle() {
  const [show, setShow] = useState(true);
  return (
    <div className="flex flex-col items-center gap-4">
      <AnimatePresence>
        {show && (
          <motion.div
            className="px-6 py-4 bg-blue-pale text-blue-deep rounded-2xl font-heading font-bold text-base"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
          >
            I animate in & out ✨
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setShow(s => !s)}
        className="font-sans font-bold text-sm px-5 py-2 bg-purple text-white rounded-xl hover:bg-purple-deep transition-colors"
      >
        {show ? "hide" : "show"}
      </button>
    </div>
  );
}

// ── 9. Mouse follow tilt ──────────────────────────────────────────────────────
function MouseTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [12, -12]);
  const rotateY = useTransform(x, [-60, 60], [-12, 12]);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function reset() { x.set(0); y.set(0); }

  return (
    <motion.div
      className="w-44 h-28 bg-gradient-to-br from-purple to-blue rounded-2xl flex items-center justify-center text-white font-heading font-bold text-lg shadow-lg cursor-pointer select-none"
      style={{ rotateX, rotateY, transformPerspective: 600 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      Move mouse over me
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function FramerExamples() {
  return (
    <div className="min-h-screen bg-bg px-8 py-16">
      <CustomCursor />
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="font-sans text-sm text-muted hover:text-purple transition-colors mb-10 inline-block">← back home</Link>
        <h1 className="font-heading font-bold text-5xl text-ink mb-2">Framer Motion Examples</h1>
        <p className="font-sans text-base text-muted mb-12">9 motion patterns — click replay to re-run entrance animations.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Fade Up + Bounce" caption="Items rise from below with a springy overshoot. Great for card grids and stat rows.">
            <FadeUpBounce />
          </Card>

          <Card title="Scale Pop" caption="Elements snap in from scale 0 with a stiff spring. Works well for icons and badges.">
            <ScalePop />
          </Card>

          <Card title="Slide from Right, Staggered" caption="Each item slides in from the right with a delay. Good for lists and feature rows.">
            <SlideFromRight />
          </Card>

          <Card title="Cascade Flip" caption="Cards flip in on the X axis like tiles turning face-up. Dramatic and sequential.">
            <CascadeFlip />
          </Card>

          <Card title="Hover Lift" caption="Cards float up and cast a shadow on hover, snap back on release. Pure interaction — no replay needed.">
            <HoverLift />
          </Card>

          <Card title="Scroll Reveal" caption="Items animate in only when they scroll into the viewport. Fires once and stays.">
            <ScrollReveal />
          </Card>

          <Card title="Drag" caption="Element is freely draggable within constraints. Snaps back with spring physics on release.">
            <DragExample />
          </Card>

          <Card title="Presence Toggle" caption="AnimatePresence lets elements animate out of the DOM, not just in. Smooth mount/unmount.">
            <PresenceToggle />
          </Card>

          <Card title="Mouse Tilt" caption="Card tilts toward the cursor using motion values. Creates a 3D parallax feel without a library.">
            <MouseTilt />
          </Card>
        </div>
      </div>
    </div>
  );
}
