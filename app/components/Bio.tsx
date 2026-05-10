"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const skills = [
  { label: "Mobile Design (iOS/Android)", hue: "purple" },
  { label: "E-commerce Strategy",         hue: "blue"   },
  { label: "User Research",               hue: "purple" },
  { label: "A/B Testing",                 hue: "blue"   },
  { label: "WCAG Accessibility",          hue: "purple" },
  { label: "Conversion Optimization",     hue: "blue"   },
  { label: "Checkout Flows",              hue: "purple" },
  { label: "Loyalty Programs",            hue: "blue"   },
  { label: "Design Systems",              hue: "purple" },
  { label: "Navigation Design",           hue: "blue"   },
  { label: "Systems Thinking",            hue: "purple" },
  { label: "Behavioral Data Analysis",    hue: "blue"   },
  { label: "Rapid Prototyping",           hue: "purple" },
];

const stats = [
  { target: 10, prefix: "",  suffix: " yrs", desc: "of product design experience" },
  { target: 15, prefix: "",  suffix: "M+",   desc: "customers served through AEO"  },
  { target: 20, prefix: "$", suffix: "M+",   desc: "estimated revenue lift in 2025" },
];


function StatCard({
  target, prefix, suffix, desc,
}: {
  target: number; prefix: string; suffix: string; desc: string;
}) {
  const { ref, inView } = useInView(0.5);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = target / 60;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(Math.round(cur));
      if (cur >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [inView, target]);

  return (
    <div
      ref={ref}
      className="bg-surface rounded-2xl p-5 text-center border-2 border-border hover:border-purple/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
    >
      <p className="font-heading text-3xl md:text-4xl font-bold gradient-text-static mb-1">
        {prefix}{val}<span className="text-xl">{suffix}</span>
      </p>
      <p className="font-sans text-xs text-muted group-hover:text-ink transition-colors">{desc}</p>
    </div>
  );
}

export default function Bio() {
  const { ref, inView } = useInView();

  return (
    <section id="bio" className="py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">

        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-heading text-sm font-semibold text-purple uppercase tracking-widest mb-2">
            Bio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink">
            A little about me ✨
          </h2>
          <p className="font-sans text-muted mt-4 max-w-md mx-auto text-sm">The who behind the work.</p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-10 mb-16 transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative flex items-center justify-center">
            <div className="w-72 md:w-80 aspect-[3/4] rounded-3xl overflow-hidden border-2 border-purple/20 shadow-xl">
              <Image
                src="/profile_pic1.jpg"
                alt="Courtney Eisenhuth"
                width={320}
                height={427}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -top-5 -right-5 w-14 h-14 bg-purple rounded-2xl rotate-12 animate-float opacity-70 shadow-lg" />
            <div className="absolute -bottom-5 -left-5 w-10 h-10 bg-blue rounded-2xl -rotate-12 animate-float-2 opacity-70 shadow-lg" />
            <div className="absolute top-4 -left-8 w-7 h-7 bg-accent rounded-full animate-float-r0 opacity-80" />
          </div>

          <div className="flex flex-col justify-center gap-5">
            <h3 className="font-heading text-2xl font-bold text-ink">
              Hey, I&apos;m Courtney! 👋
            </h3>
            <p className="font-sans text-base text-muted leading-relaxed">
              I&apos;m a <span className="font-extrabold text-purple">Senior Product Designer</span> with
              10 years of experience crafting mobile-first experiences people actually love. I
              specialize in e-commerce and retail, balancing user needs with real business outcomes.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              I&apos;ve spent the last 5+ years deeply embedded in the{" "}
              <span className="font-extrabold text-blue">American Eagle Outfitters</span> app,
              helping drive <span className="font-extrabold text-purple">40% of AEO&apos;s digital revenue</span>{" "}
              through thoughtful design of navigation, checkout, loyalty, and discovery.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              I&apos;m a systems thinker who loves a good design challenge, and yes, I&apos;ll
              probably make it a little fun too ✨
            </p>

            <a
              href="mailto:courtneyeisenhuth@gmail.com"
              className="inline-flex items-center gap-2 self-start font-sans text-sm font-bold text-purple border-2 border-purple/30 bg-purple-pale px-4 py-2 rounded-full hover:bg-purple hover:text-white hover:border-purple transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <span>📬</span>
              courtneyeisenhuth@gmail.com
            </a>
          </div>
        </div>

        <div
          className={`grid grid-cols-3 gap-4 mb-16 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-heading text-2xl font-bold text-ink text-center mb-6">
            My superpowers 🦸‍♀️
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((sk, i) => (
              <motion.button
                key={i}
                className={`font-sans text-sm font-semibold px-4 py-2 rounded-full border-2 transition-colors duration-200 select-none ${
                  sk.hue === "purple"
                    ? "bg-purple-pale text-purple border-purple/20 hover:bg-purple hover:text-white hover:border-purple"
                    : "bg-blue-pale text-blue border-blue/20 hover:bg-blue hover:text-white hover:border-blue"
                }`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 400, damping: 15, delay: i * 0.06 }}
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {sk.label}
              </motion.button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
