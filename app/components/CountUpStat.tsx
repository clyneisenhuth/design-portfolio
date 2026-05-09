"use client";

import { useRef, useEffect, useState } from "react";

function parseValue(val: string) {
  const match = val.match(/^([\d.]+)(.*)$/);
  if (!match) return { number: 0, suffix: val, decimals: 0 };
  const decimals = (match[1].split(".")[1] ?? "").length;
  return { number: parseFloat(match[1]), suffix: match[2], decimals };
}

interface Props {
  value: string;
  label: string;
  source?: string;
  className?: string;
  numberClassName?: string;
}

export default function CountUpStat({ value, label, source, className = "", numberClassName = "text-3xl" }: Props) {
  const ref  = useRef<HTMLDivElement>(null);
  const [count,   setCount]   = useState(0);
  const [started, setStarted] = useState(false);
  const { number, suffix, decimals } = parseValue(value);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(parseFloat((eased * number).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, number, decimals]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.round(count);

  return (
    <div ref={ref} className={className}>
      <p className={`font-heading font-bold gradient-text-static mb-2 ${numberClassName}`}>
        {display}{suffix}
      </p>
      <p className="font-sans text-xs text-muted leading-snug">{label}</p>
      {source && (
        <p className="font-sans text-[10px] text-border font-semibold uppercase tracking-wide mt-1">{source}</p>
      )}
    </div>
  );
}
