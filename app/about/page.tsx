"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PhotoCarousel from "../components/PhotoCarousel";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
};


export default function About() {
  return (
    <>
      <Nav />
      <main id="main-content">

        {/* Page header */}
        <section className="pt-40 pb-16 px-8 bg-bg">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-purple mb-4">
                About
              </p>
              <h1 className="font-heading font-bold text-ink leading-[1.05] max-w-2xl"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
                Designer, strategist,<br />systems thinker.
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Bio */}
        <section className="py-20 px-8 border-t border-border">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

            {/* Photo */}
            <motion.div
              {...fadeUp}
              className="w-full overflow-hidden rounded-md border border-border"
              style={{ aspectRatio: "1/1", width: "80%" }}
            >
              <Image
                src="/images/profile_pic1.jpg"
                alt="Courtney Eisenhuth"
                width={500}
                height={500}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Bio text */}
            <motion.div
              className="space-y-5"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                initial: {},
                whileInView: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
              }}
            >
              {[
                "I’m a Senior Product Designer with 10 years of experience building intuitive digital products people love. My most recent experience covers e-commerce, crafting conversion-driving features at the intersection of user behavior and business outcomes.",
                "I’ve spent the last 5 years embedded in the native mobile app team at American Eagle Outfitters, working with iOS and Android — one of two designers supporting platforms responsible for 40% of AEO’s digital revenue. I’ve designed across navigation and search, product, cart and checkout, account, loyalty and rewards, personalization and recommendations, fulfillment, and notifications.",
                "I’m currently working with the Design Systems team at PNC Bank, restarting an initiative to build out a Mobile Design System for PNC iOS and Android apps.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="font-sans text-base text-muted leading-relaxed"
                  variants={{
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="py-20 px-8 bg-surface border-t border-border">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp}>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-purple mb-6">
                Design philosophy
              </p>
            </motion.div>
            <ol className="space-y-6">
              {[
                { n: "01", text: "Design for the whole system: every interface is one piece of a larger behavioral and business loop." },
                { n: "02", text: "My approach is subtraction: strip away what doesn’t serve the user or the outcome, and let clarity do the work." },
                { n: "03", text: "Always remember: design that doesn’t move something forward, for the customer or the business, is just decoration." },
              ].map(({ n, text }, i) => (
                <motion.li
                  key={n}
                  className="flex items-start gap-5"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                >
                  <span className="font-mono text-[11px] tracking-[0.2em] text-purple pt-1 flex-shrink-0">{n}</span>
                  <p className="font-heading text-xl md:text-2xl font-semibold text-ink leading-relaxed">{text}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* Personal */}
        <section className="py-20 border-t border-border overflow-hidden">
          <div className="max-w-5xl mx-auto px-8 mb-10">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-purple mb-2">
              Personal
            </p>
            <h2 className="font-heading text-2xl font-bold text-ink mb-6">Outside the work</h2>
            <p className="font-sans text-base text-muted leading-relaxed max-w-2xl">
              Outside of work, I try to live by the same principles that guide my design practice:
              simplicity and intention. My hobbies tend to be quiet ones — I spend a lot of my free
              time embroidering and knitting, slow crafts that reward patience over speed. I&apos;m also
              drawn to macro photography and photo editing, finding detail and structure in small,
              overlooked things. When I&apos;m not making something with my hands, I&apos;m usually reading
              nonfiction, always looking to learn something new.
            </p>
          </div>

          <PhotoCarousel />
        </section>

      </main>
      <Footer />
    </>
  );
}
