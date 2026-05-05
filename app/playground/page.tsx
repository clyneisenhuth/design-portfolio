"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import CustomCursor from "../components/CustomCursor";

// ─── Shared wrapper ────────────────────────────────────────────────────────────

function Card({
  title,
  tag,
  desc,
  children,
  span2 = false,
}: {
  title: string;
  tag: string;
  desc: string;
  children: React.ReactNode;
  span2?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col gap-5 ${
        span2 ? "md:col-span-2" : ""
      }`}
    >
      <div>
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-white/30 bg-white/10 px-2 py-1 rounded-full mb-2">
          {tag}
        </span>
        <h2 className="text-white font-bold text-lg leading-tight">{title}</h2>
        <p className="text-white/40 text-sm mt-1">{desc}</p>
      </div>
      <div className="flex-1 flex items-center justify-center">{children}</div>
    </div>
  );
}

// ─── 1. Magnetic Button ────────────────────────────────────────────────────────

function MagneticButton() {
  const ref  = useRef<HTMLButtonElement>(null);
  const [pos, setPos]    = useState({ x: 0, y: 0 });
  const [near, setNear]  = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top  + r.height / 2);
    setPos({ x: x * 0.42, y: y * 0.42 });
  };

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setNear(true)}
      onMouseLeave={() => { setNear(false); setPos({ x: 0, y: 0 }); }}
      className="px-8 py-4 rounded-full font-bold text-white text-base select-none"
      style={{
        background: "linear-gradient(135deg, #7C3AED, #4F46E5)",
        boxShadow: near ? "0 12px 40px #7C3AED66" : "0 4px 16px #7C3AED33",
        transform: `translate(${pos.x}px, ${pos.y}px) scale(${near ? 1.1 : 1})`,
        transition: near
          ? "transform 0.08s ease-out, box-shadow 0.3s"
          : "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s",
      }}
    >
      🧲 Pull me
    </button>
  );
}

// ─── 2. Confetti Burst ────────────────────────────────────────────────────────

function ConfettiBurst() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const burst = () => {
    const btn = btnRef.current;
    if (!btn) return;

    // Create a temporary full-screen canvas directly on body —
    // avoids all backdrop-filter / stacking context containment issues
    const canvas = document.createElement("canvas");
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.cssText =
      "position:fixed;inset:0;pointer-events:none;z-index:9990;";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;

    const r  = btn.getBoundingClientRect();
    const cx = r.left + r.width  / 2;
    const cy = r.top  + r.height / 2;

    const palette = [
      "#FF6B9D","#FFD93D","#6BCB77","#4D96FF",
      "#C77DFF","#FF9E3D","#FF4D4D","#00D4FF",
    ];

    const particles = Array.from({ length: 50 }, (_, i) => {
      const angle = (i / 50) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      const speed = 5 + Math.random() * 7;
      return {
        x:    cx,
        y:    cy,
        vx:   Math.cos(angle) * speed,
        vy:   Math.sin(angle) * speed - 2.5,
        w:    5 + Math.random() * 8,
        h:    3 + Math.random() * 5,
        color: palette[Math.floor(Math.random() * palette.length)],
        rot:  Math.random() * Math.PI * 2,
        rotV: (Math.random() - 0.5) * 0.28,
        life: 1,
      };
    });

    cancelAnimationFrame(rafRef.current);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      for (const p of particles) {
        if (p.life <= 0) continue;
        alive = true;
        p.x   += p.vx;
        p.y   += p.vy;
        p.vy  += 0.22;   // gravity
        p.vx  *= 0.988;  // air drag
        p.rot += p.rotV;
        p.life -= 0.015;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }

      if (alive) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  };

  return (
    <button
      ref={btnRef}
      onClick={burst}
      className="px-8 py-4 rounded-full font-bold text-white text-base select-none hover:scale-105 active:scale-95 transition-transform"
      style={{
        background: "linear-gradient(135deg, #EC4899, #EF4444)",
        boxShadow:  "0 8px 24px #EC489966",
      }}
    >
      🎉 Explode!
    </button>
  );
}

// ─── 3. Text Scramble ────────────────────────────────────────────────────────

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*?";

function TextScramble({ text }: { text: string }) {
  const [out, setOut]   = useState(text);
  const timerRef        = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = () => {
    let step = 0;
    clearInterval(timerRef.current!);
    timerRef.current = setInterval(() => {
      setOut(
        text.split("").map((ch, i) => {
          if (ch === " ") return " ";
          if (i < step) return text[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      step += 0.6;
      if (step > text.length) {
        setOut(text);
        clearInterval(timerRef.current!);
      }
    }, 40);
  };

  return (
    <button
      onMouseEnter={scramble}
      className="font-mono font-black text-2xl tracking-widest select-none transition-colors"
      style={{ color: "#22D3EE", textShadow: "0 0 20px #22D3EE88" }}
    >
      {out}
    </button>
  );
}

// ─── 4. Wave Text ────────────────────────────────────────────────────────────

function WaveText({ text }: { text: string }) {
  const [t,      setT]      = useState(0);
  const [active, setActive] = useState(false);
  const raf                 = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    let start: number;
    const tick = (now: number) => {
      if (!start) start = now;
      setT((now - start) * 0.003);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [active]);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => { setActive(false); setT(0); }}
      className="flex items-end gap-px select-none"
    >
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="font-black text-3xl inline-block"
          style={{
            transform: `translateY(${active ? Math.sin(t + i * 0.55) * 14 : 0}px)`,
            transition: active ? "none" : "transform 0.5s ease-out",
            color: `hsl(${255 + i * 20}, 80%, 72%)`,
          }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </div>
  );
}

// ─── 5. Glitch Text ────────────────────────────────────────────────────────

function GlitchText({ text }: { text: string }) {
  const [on, setOn] = useState(false);

  return (
    <div
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
      className="relative select-none"
    >
      <span className="font-black text-3xl text-white tracking-tight relative z-10">{text}</span>
      {on && (
        <>
          <span
            className="absolute inset-0 font-black text-3xl tracking-tight text-red-400"
            style={{ animation: "glitch-1 0.25s steps(1) infinite" }}
          >
            {text}
          </span>
          <span
            className="absolute inset-0 font-black text-3xl tracking-tight text-cyan-400"
            style={{ animation: "glitch-2 0.25s steps(1) infinite" }}
          >
            {text}
          </span>
        </>
      )}
    </div>
  );
}

// ─── 6. Spotlight / Flashlight ────────────────────────────────────────────────

function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="relative w-full h-36 rounded-xl overflow-hidden flex items-center justify-center"
      style={{
        background: `radial-gradient(circle 70px at ${pos.x}% ${pos.y}%, #ffffff18 0%, transparent 70%), #0a0612`,
        boxShadow: "inset 0 0 40px #00000080",
      }}
    >
      <p className="text-white/20 font-bold text-base select-none pointer-events-none text-center">
        🔦 shine a light<br/>
        <span className="text-sm font-normal">move your cursor</span>
      </p>
    </div>
  );
}

// ─── 7. Bubble Pop ────────────────────────────────────────────────────────────

type Bubble = { id: number; x: number; y: number; r: number; color: string; popped: boolean };

const PALETTE = ["#C77DFF", "#4D96FF", "#6BCB77", "#FFD93D", "#FF6B9D", "#FF9E3D"];

function BubblePop() {
  const [bubbles, setBubbles] = useState<Bubble[]>(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id:     i,
      x:      8 + (i % 6) * 16,
      y:      i < 6 ? 18 : 62,
      r:      28 + (i * 7) % 18,
      color:  PALETTE[i % PALETTE.length],
      popped: false,
    }))
  );

  const pop = (id: number) => {
    setBubbles((bs) => bs.map((b) => b.id === id ? { ...b, popped: true } : b));
    setTimeout(() => {
      setBubbles((bs) =>
        bs.map((b) =>
          b.id === id
            ? { ...b, popped: false, x: 5 + Math.random() * 88, y: 10 + Math.random() * 78 }
            : b
        )
      );
    }, 500);
  };

  return (
    <div className="relative w-full h-32 overflow-visible">
      {bubbles.map((b) => (
        <button
          key={b.id}
          onClick={() => pop(b.id)}
          className="absolute rounded-full flex items-center justify-center"
          style={{
            left:       `${b.x}%`,
            top:        `${b.y}%`,
            width:      b.r,
            height:     b.r,
            background: b.popped ? "transparent" : `${b.color}30`,
            border:     `2px solid ${b.popped ? "transparent" : b.color}`,
            transform:  b.popped ? "scale(2.2)" : "scale(1)",
            opacity:    b.popped ? 0 : 1,
            transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow:  b.popped ? "none" : `0 0 10px ${b.color}55, inset 0 -3px 6px ${b.color}30`,
          }}
        />
      ))}
    </div>
  );
}

// ─── 8. Googly Eyes ────────────────────────────────────────────────────────────

function GooglyEye({ size = 56 }: { size?: number }) {
  const ref   = useRef<HTMLDivElement>(null);
  const [ang, setAng] = useState(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r  = ref.current.getBoundingClientRect();
      const cx = r.left + r.width  / 2;
      const cy = r.top  + r.height / 2;
      setAng(Math.atan2(e.clientY - cy, e.clientX - cx));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const pupilTravel = size * 0.18;
  const pupilSize   = size * 0.38;

  return (
    <div
      ref={ref}
      className="rounded-full bg-white relative flex items-center justify-center"
      style={{
        width:     size,
        height:    size,
        boxShadow: "inset 0 3px 6px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      <div
        className="absolute rounded-full bg-gray-900 flex items-start justify-start"
        style={{
          width:     pupilSize,
          height:    pupilSize,
          transform: `translate(${Math.cos(ang) * pupilTravel}px, ${Math.sin(ang) * pupilTravel}px)`,
          transition: "transform 0.04s linear",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white mt-1 ml-1" />
      </div>
    </div>
  );
}

function GooglyEyes() {
  return (
    <div className="flex items-center gap-5">
      <GooglyEye size={64} />
      <GooglyEye size={52} />
    </div>
  );
}

// ─── 9. Emoji Rain ────────────────────────────────────────────────────────────

type FallingEmoji = { id: number; x: number; emoji: string; dur: number; delay: number; rot: number };

const RAIN_EMOJIS = ["🌟","✨","💫","⭐","🌈","🎉","💜","🦋","🎊","💥","🌸","🍀"];

function EmojiRain() {
  const [drops, setDrops] = useState<FallingEmoji[]>([]);

  const rain = () => {
    const next: FallingEmoji[] = Array.from({ length: 18 }, (_, i) => ({
      id:    Date.now() + i,
      x:     Math.random() * 88,
      emoji: RAIN_EMOJIS[Math.floor(Math.random() * RAIN_EMOJIS.length)],
      dur:   1.0 + Math.random() * 0.9,
      delay: Math.random() * 0.6,
      rot:   Math.random() * 360,
    }));
    setDrops((d) => [...d, ...next]);
    setTimeout(() => setDrops((d) => d.filter((x) => !next.find((n) => n.id === x.id))), 2800);
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div className="relative w-full h-24 overflow-hidden rounded-xl bg-black/20 border border-white/10">
        {drops.map((d) => (
          <div
            key={d.id}
            className="absolute text-2xl pointer-events-none select-none"
            style={{
              left:      `${d.x}%`,
              top:       "-2rem",
              rotate:    `${d.rot}deg`,
              animation: `fall ${d.dur}s ease-in ${d.delay}s forwards`,
            }}
          >
            {d.emoji}
          </div>
        ))}
      </div>
      <button
        onClick={rain}
        className="px-6 py-3 rounded-full font-bold text-white text-sm hover:scale-105 active:scale-95 transition-transform select-none"
        style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)", boxShadow: "0 6px 20px #8B5CF666" }}
      >
        🌧️ Make it rain
      </button>
    </div>
  );
}

// ─── 10. Infinite Marquee ────────────────────────────────────────────────────

function Marquee({ items, speed = 14 }: { items: { text: string; emoji: string }[]; speed?: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex gap-8 w-max"
        style={{ animation: `marquee-scroll ${speed}s linear infinite` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-bold text-base whitespace-nowrap select-none flex items-center gap-2"
            style={{ color: `hsl(${255 + i * 25}, 70%, 72%)` }}
          >
            <span>{item.emoji}</span>
            <span>{item.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── 11. Elastic / Rubber Band Click ─────────────────────────────────────────

function RubberBand() {
  const [scale, setScale] = useState({ x: 1, y: 1 });

  const click = () => {
    // squash → stretch → settle — pure JS so it always restarts on repeat clicks
    setScale({ x: 1.45, y: 0.6 });
    setTimeout(() => setScale({ x: 0.78, y: 1.4  }), 110);
    setTimeout(() => setScale({ x: 1.12, y: 0.88 }), 230);
    setTimeout(() => setScale({ x: 0.96, y: 1.04 }), 340);
    setTimeout(() => setScale({ x: 1,    y: 1    }), 440);
  };

  return (
    <button
      onClick={click}
      className="px-8 py-4 rounded-full font-bold text-white text-base select-none"
      style={{
        background:      "linear-gradient(135deg, #10B981, #06B6D4)",
        boxShadow:       "0 8px 24px #10B98166",
        transform:       `scaleX(${scale.x}) scaleY(${scale.y})`,
        transition:      "transform 0.08s cubic-bezier(0.34,1.56,0.64,1)",
        transformOrigin: "center",
      }}
    >
      🟢 Squash me!
    </button>
  );
}

// ─── 12. Click Ripple ────────────────────────────────────────────────────────

type RipplePoint = { id: number; x: number; y: number; color: string };

function ClickRipple() {
  const ref = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<RipplePoint[]>([]);
  const colors = ["#C77DFF", "#4D96FF", "#FF6B9D", "#FFD93D", "#6BCB77"];

  const addRipple = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const next: RipplePoint = {
      id:    Date.now(),
      x:     e.clientX - r.left,
      y:     e.clientY - r.top,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setRipples((rs) => [...rs, next]);
    setTimeout(() => setRipples((rs) => rs.filter((r) => r.id !== next.id)), 700);
  };

  return (
    <div
      ref={ref}
      onClick={addRipple}
      className="relative w-full h-32 rounded-xl overflow-hidden flex items-center justify-center border border-white/10 bg-black/20"
    >
      <p className="text-white/30 text-sm select-none pointer-events-none">Click anywhere!</p>
      {ripples.map((rp) => (
        <div
          key={rp.id}
          className="absolute pointer-events-none rounded-full"
          style={{
            left:        rp.x,
            top:         rp.y,
            width:       80,
            height:      80,
            border:      `3px solid ${rp.color}`,
            animation:   "ripple-out 0.65s ease-out forwards",
            boxShadow:   `0 0 12px ${rp.color}88`,
          }}
        />
      ))}
    </div>
  );
}

// ─── 13. 3D Flip Card ────────────────────────────────────────────────────────

const FLIP_CARDS = [
  { front: { bg: "linear-gradient(135deg,#7C3AED,#4F46E5)", emoji: "🃏", label: "Hover me!" },
    back:  { bg: "linear-gradient(135deg,#EC4899,#EF4444)", emoji: "🎉", label: "Surprise!" } },
  { front: { bg: "linear-gradient(135deg,#0EA5E9,#2DD4BF)", emoji: "🌊", label: "What's here?" },
    back:  { bg: "linear-gradient(135deg,#F59E0B,#EF4444)", emoji: "🔥", label: "Hot take!" } },
];

function FlipCard({ front, back }: (typeof FLIP_CARDS)[0]) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      style={{ perspective: "700px", width: 140, height: 100 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="relative flex-shrink-0"
    >
      <div
        className="absolute inset-0 transition-transform duration-500"
        style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0)" }}
      >
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-1"
          style={{ backfaceVisibility: "hidden", background: front.bg }}
        >
          <span className="text-3xl">{front.emoji}</span>
          <p className="text-white text-xs font-bold">{front.label}</p>
        </div>
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-1"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: back.bg }}
        >
          <span className="text-3xl">{back.emoji}</span>
          <p className="text-white text-xs font-bold">{back.label}</p>
        </div>
      </div>
    </div>
  );
}

// ─── 14. Sticker Drag ────────────────────────────────────────────────────────

type StickerPos = { x: number; y: number };

function Sticker({
  emoji,
  init,
  rot,
}: {
  emoji: string;
  init: StickerPos;
  rot:  number;
}) {
  const [pos,      setPos]      = useState<StickerPos>(init);
  const [dragging, setDragging] = useState(false);
  const startRef = useRef({ mx: 0, my: 0, sx: 0, sy: 0 });

  const onDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    startRef.current = { mx: e.clientX, my: e.clientY, sx: pos.x, sy: pos.y };
  };

  useEffect(() => {
    if (!dragging) return;
    const move = (e: MouseEvent) => {
      setPos({
        x: startRef.current.sx + (e.clientX - startRef.current.mx),
        y: startRef.current.sy + (e.clientY - startRef.current.my),
      });
    };
    const up = () => setDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup",   up);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
  }, [dragging]);

  return (
    <div
      onMouseDown={onDown}
      className={`absolute text-4xl select-none transition-all duration-200 ${dragging ? "z-50 scale-125" : "z-10 scale-100"}`}
      style={{
        left:   pos.x,
        top:    pos.y,
        rotate: `${rot}deg`,
        filter: dragging ? "drop-shadow(0 12px 24px rgba(0,0,0,0.5))" : "drop-shadow(0 3px 6px rgba(0,0,0,0.2))",
        transition: dragging ? "transform 0.1s, filter 0.1s" : "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), filter 0.3s",
      }}
    >
      {emoji}
    </div>
  );
}

function StickerDrag() {
  const stickers = [
    { emoji: "⭐", init: { x: 16,  y: 16  }, rot: -15 },
    { emoji: "🎨", init: { x: 100, y: 8   }, rot:  12 },
    { emoji: "💜", init: { x: 60,  y: 38  }, rot:  -5 },
    { emoji: "🌈", init: { x: 10,  y: 56  }, rot:  20 },
    { emoji: "🚀", init: { x: 140, y: 42 }, rot: -10 },
  ];

  return (
    <div className="relative w-full h-36 rounded-xl bg-white/5 border border-white/10 overflow-visible">
      <p className="absolute inset-0 flex items-center justify-center text-white/15 text-xs select-none pointer-events-none">
        drag the stickers
      </p>
      {stickers.map((s, i) => (
        <Sticker key={i} emoji={s.emoji} init={s.init} rot={s.rot} />
      ))}
    </div>
  );
}

// ─── 15. Count-Up ────────────────────────────────────────────────────────────

function CountUp({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const [val,     setVal]     = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let cur = 0;
    const step = target / 55;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(Math.round(cur));
      if (cur >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [started, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-black text-4xl text-white leading-none">
        {val.toLocaleString()}{suffix}
      </p>
      <p className="text-white/40 text-xs mt-2">{label}</p>
    </div>
  );
}

// ─── 16. Neon Glow Toggle ────────────────────────────────────────────────────

const NEON_COLORS = [
  { label: "Purple", color: "#C77DFF" },
  { label: "Cyan",   color: "#22D3EE" },
  { label: "Pink",   color: "#FF6B9D" },
  { label: "Green",  color: "#6BCB77" },
];

function NeonGlow() {
  const [idx, setIdx] = useState(0);
  const col = NEON_COLORS[idx];

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl"
        style={{
          background:  `${col.color}22`,
          border:      `2px solid ${col.color}`,
          color:       col.color,
          boxShadow:   `0 0 20px ${col.color}88, inset 0 0 20px ${col.color}22`,
          animation:   "neon-pulse 2s ease-in-out infinite",
          transition:  "all 0.4s ease",
        }}
      >
        ✦
      </div>
      <button
        onClick={() => setIdx((i) => (i + 1) % NEON_COLORS.length)}
        className="px-5 py-2 rounded-full text-sm font-bold border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors"
      >
        Next color →
      </button>
    </div>
  );
}

// ─── 17. Cursor Sparkle Trail ────────────────────────────────────────────────

type Spark = { id: number; x: number; y: number; color: string; size: number };
const SPARK_PALETTE = ["#C77DFF","#4D96FF","#FF6B9D","#FFD93D","#6BCB77","#22D3EE"];

function CursorTrail() {
  const ref = useRef<HTMLDivElement>(null);
  const [sparks, setSparks] = useState<Spark[]>([]);

  const onMove = useCallback((e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    if (Math.random() > 0.6) return; // throttle
    const spark: Spark = {
      id:    Date.now() + Math.random(),
      x:     e.clientX - r.left,
      y:     e.clientY - r.top,
      color: SPARK_PALETTE[Math.floor(Math.random() * SPARK_PALETTE.length)],
      size:  4 + Math.random() * 8,
    };
    setSparks((s) => [...s.slice(-30), spark]);
    setTimeout(() => setSparks((s) => s.filter((x) => x.id !== spark.id)), 600);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="relative w-full h-32 rounded-xl overflow-hidden flex items-center justify-center border border-white/10 bg-black/20"
    >
      <p className="text-white/25 text-sm select-none pointer-events-none">✨ wave your cursor in here</p>
      {sparks.map((s, i) => (
        <div
          key={s.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left:      s.x - s.size / 2,
            top:       s.y - s.size / 2,
            width:     s.size,
            height:    s.size,
            background:s.color,
            boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
            opacity:   (i + 1) / sparks.length,
            transition:"opacity 0.5s ease-out",
          }}
        />
      ))}
    </div>
  );
}

// ─── 18. Tilt Card ────────────────────────────────────────────────────────────

function TiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt,  setTilt]  = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    setTilt({ x: y * -18, y: x * 18 });
  };

  return (
    <div style={{ perspective: "800px" }}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => { setHover(false); setTilt({ x: 0, y: 0 }); }}
        className="rounded-2xl p-6 flex flex-col items-center gap-2 select-none"
        style={{
          width:       180,
          height:      120,
          background:  "linear-gradient(135deg, #312E81, #1E3A5F)",
          border:      "1px solid rgba(255,255,255,0.15)",
          boxShadow:   hover ? "0 24px 60px rgba(0,0,0,0.5)" : "0 8px 24px rgba(0,0,0,0.3)",
          transform:   `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hover ? 1.06 : 1})`,
          transition:  hover ? "transform 0.08s ease-out, box-shadow 0.3s" : "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s",
        }}
      >
        <span className="text-4xl" style={{ transform: hover ? `translateZ(30px)` : "none", transition: "transform 0.3s" }}>
          🌌
        </span>
        <p className="text-white/60 text-xs font-bold">hover + move</p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Playground() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(145deg, #0F0A1E 0%, #130D28 40%, #0C1525 100%)" }}
    >
      <CustomCursor />
      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/35 hover:text-white/80 text-sm font-bold transition-colors"
        >
          ← Back to portfolio
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-16 text-center">
        <div className="inline-block bg-white/8 text-white/50 text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 mb-5 tracking-widest uppercase">
          Interaction Playground
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
          The Fun Stuff ✨
        </h1>
        <p className="text-white/40 text-lg max-w-md mx-auto">
          A collection of quirky, playful web interactions.<br />
          Hover, click, drag, and explore.
        </p>
      </header>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-6 pb-28 grid md:grid-cols-2 lg:grid-cols-3 gap-4">

        <Card tag="hover" title="🧲 Magnetic Button" desc="The button is attracted to your cursor. Move close and feel the pull.">
          <MagneticButton />
        </Card>

        <Card tag="click" title="🎉 Confetti Burst" desc="Click the button and watch 32 particles explode outward from the center.">
          <ConfettiBurst />
        </Card>

        <Card tag="hover" title="💬 Text Scramble" desc="Hover the text — it scrambles through random characters before resolving.">
          <TextScramble text="HOVER ME" />
        </Card>

        <Card tag="hover" title="🌊 Wave Text" desc="Hover to start a sine wave ripple through each character.">
          <WaveText text="WAVE HELLO" />
        </Card>

        <Card tag="hover" title="⚡ Glitch Text" desc="Hover for a retro data-corruption glitch effect with color channel splits.">
          <GlitchText text="SYSTEM ERROR" />
        </Card>

        <Card tag="move" title="🔦 Spotlight" desc="Move your cursor around to shine a flashlight into the darkness.">
          <Spotlight />
        </Card>

        <Card tag="click" title="🫧 Bubble Pop" desc="Click the bubbles to pop them — they respawn somewhere new each time.">
          <BubblePop />
        </Card>

        <Card tag="move" title="👀 Googly Eyes" desc="These unblinking eyes follow your cursor across the entire screen.">
          <GooglyEyes />
        </Card>

        <Card tag="click" title="🌧️ Emoji Rain" desc="Click the button to trigger a shower of random emojis.">
          <EmojiRain />
        </Card>

        <Card tag="scroll" title="📜 Infinite Marquee" desc="Content that scrolls forever. Great for logos, skills, or announcements." span2>
          <Marquee
            items={[
              { text: "Design",    emoji: "✦" },
              { text: "Mobile",    emoji: "📱" },
              { text: "Strategy",  emoji: "🎯" },
              { text: "UX",        emoji: "🧠" },
              { text: "Craft",     emoji: "🎨" },
              { text: "Systems",   emoji: "⚙️" },
              { text: "Research",  emoji: "🔍" },
              { text: "Delight",   emoji: "✨" },
            ]}
          />
        </Card>

        <Card tag="click" title="🟢 Rubber Band" desc="Click and watch the element squash, stretch, and settle back.">
          <RubberBand />
        </Card>

        <Card tag="click" title="💧 Click Ripple" desc="Click anywhere in the box to send a ripple expanding outward.">
          <ClickRipple />
        </Card>

        <Card tag="hover" title="🃏 3D Flip Cards" desc="Hover the cards to reveal what's hiding on the other side.">
          <div className="flex gap-4">
            {FLIP_CARDS.map((c, i) => <FlipCard key={i} {...c} />)}
          </div>
        </Card>

        <Card tag="drag" title="🏷️ Sticker Drag" desc="Drag these stickers anywhere around the canvas — they go wherever you want.">
          <StickerDrag />
        </Card>

        <Card tag="scroll" title="📊 Count-Up Numbers" desc="Scroll this card into view and the numbers animate up from zero.">
          <div className="flex gap-10">
            <CountUp target={10}  suffix="yrs" label="Experience" />
            <CountUp target={300} suffix="%" label="Reviews lift" />
            <CountUp target={20}  suffix="M+" label="Customers" />
          </div>
        </Card>

        <Card tag="click" title="💡 Neon Glow" desc="Click through the color palette — each one pulses with a different neon halo.">
          <NeonGlow />
        </Card>

        <Card tag="move" title="✨ Cursor Sparkle Trail" desc="Wave your cursor around in the box to leave a glowing particle trail.">
          <CursorTrail />
        </Card>

        <Card tag="hover" title="🌌 3D Tilt Card" desc="Hover the card and move your cursor around to tilt it in 3D perspective.">
          <TiltCard />
        </Card>

      </main>

      {/* Footer */}
      <div className="text-center pb-12 text-white/20 text-sm font-sans">
        <Link href="/" className="hover:text-white/60 transition-colors">
          ← Back to Courtney&apos;s portfolio
        </Link>
      </div>
    </div>
  );
}
