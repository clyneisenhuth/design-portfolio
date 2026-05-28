"use client";

import { useEffect, useState } from "react";
import FadeInSection from "../../components/FadeInSection";
import CustomCursor from "../../components/CustomCursor";

function Cite({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-purple/80 underline decoration-purple/30 underline-offset-2 text-xs whitespace-nowrap">
      {children}
    </a>
  );
}

function KeyTakeaways({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="bg-blue-pale border border-blue/20 rounded-2xl px-6 py-5 my-8">
      <p className="font-sans text-xs font-semibold text-blue uppercase tracking-widest mb-3">Key Takeaways</p>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="font-sans text-sm text-muted leading-relaxed flex gap-2.5">
            <span className="text-blue font-bold flex-shrink-0 mt-0.5">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-purple-pale border-l-4 border-purple rounded-r-2xl px-6 py-5 my-8">
      <p className="font-sans text-base text-purple-deep leading-relaxed">{children}</p>
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-blue/40 pl-6 my-8">
      <p className="font-heading font-bold text-2xl text-ink leading-snug">{children}</p>
    </blockquote>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading font-bold text-2xl md:text-3xl text-ink mt-14 mb-4">{children}</h2>
  );
}

function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <div className="pb-6 border-b border-border last:border-0">
      <h3 className="font-heading font-bold text-lg text-ink mb-2">{q}</h3>
      <p className="font-sans text-sm text-muted leading-relaxed">{a}</p>
    </div>
  );
}

export default function BuildingMyPortfolio() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-bg">

        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-pale via-bg to-blue-pale">
          <div className="absolute -top-20 -right-20 w-80 h-80 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #8059C4, #D4A8F0)", filter: "blur(72px)" }} />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #4B7BE5, #8BB8F8)", filter: "blur(60px)" }} />

          <div className="max-w-4xl mx-auto px-6 pt-10 pb-20">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-muted hover:text-purple transition-colors duration-200 mb-12 group"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to portfolio
            </a>

            <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Process", "AI", "Code"].map((t) => (
                  <span key={t} className="font-sans text-xs font-semibold px-2.5 py-1 rounded-full bg-purple text-white">{t}</span>
                ))}
                <span className="font-sans text-xs font-semibold px-2.5 py-1 rounded-full bg-bg border border-border text-muted">May 2025 · Updated May 2026 · 10 min read</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
                Building my portfolio<br />with{" "}
                <span className="gradient-text">Claude Code</span> 🤖
              </h1>
              <p className="font-sans text-lg text-muted max-w-2xl leading-relaxed">
                What happens when a designer decides to build her own site from scratch, using AI as a coding partner and not a shortcut.
              </p>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-2xl mx-auto px-6 py-16 pb-28">

          {/* Intro */}
          <FadeInSection>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              I&apos;ve been a product designer for ten years. I&apos;ve handed off hundreds of specs to engineers, written more Jira tickets than I can count, and sat through more sprint ceremonies than I&apos;d like to admit. But until this project, I had never shipped a single line of production code on my own.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              This portfolio changed that. Not because I suddenly became a developer (I didn&apos;t), but because I found a way to work alongside AI that actually felt collaborative. Less like delegating, more like pairing with someone who knew the code while I knew what I wanted it to do. That tool was <span className="font-bold text-ink">Claude Code</span>, and building this site taught me more about the gap between design and engineering than any sprint I&apos;ve ever sat through.
            </p>
          </FadeInSection>

          {/* Key Takeaways */}
          <FadeInSection>
            <KeyTakeaways items={[
              <>63% of vibe coding tool users in 2026 are non-developers (designers, founders, marketers), meaning the barrier to shipping has genuinely shifted for people with design intent (<Cite href="https://www.secondtalent.com/resources/vibe-coding-statistics/">Second Talent, 2026</Cite>)</>,
              <>Tailwind CSS v4&apos;s <code className="bg-surface border border-border rounded px-1 py-0.5 text-xs font-mono text-purple">@theme</code> block works like a real enforced design system: define color tokens once and use them across the entire codebase</>,
              "Git branches are the code equivalent of Figma artboards. Keep main clean, explore freely on a separate branch without risking what already works.",
              "The biggest design lesson from building your own site isn't about code. It's that your current specs are probably vaguer than you think.",
            ]} />
          </FadeInSection>

          {/* Section 1 */}
          <FadeInSection>
            <SectionHeading>Starting from zero (and I mean zero)</SectionHeading>

            {/* Answer-first: stat opens the section */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              68% of designers think they should know how to code, but actually doing it is a different story (<Cite href="https://www.collabsoft.com/blog/designer-survey-2025">CollabSoft, 2025</Cite>). Here&apos;s what I knew when I started this site: HTML basics, how to read a selector, how not to be scared of inspect element. Here&apos;s what I didn&apos;t know: anything meaningful about package managers, build systems, or why Node.js was supposed to matter.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              My first conversation with Claude Code was a bit awkward, honestly. I said something like: &quot;I want to build a portfolio site. I&apos;m a product designer. I want it to feel like me, not a template.&quot; Claude asked me a few follow-up questions about stack, hosting, animations, and I realized I had no answers to any of them yet.
            </p>

            <Callout>
              The questions I couldn&apos;t answer at the start turned out to be exactly the things I needed to make decisions about. Getting them surfaced early was more useful than I expected.
            </Callout>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              We landed on <span className="font-bold text-ink">Next.js</span> with the App Router, <span className="font-bold text-ink">Tailwind CSS v4</span>, and deployment through <span className="font-bold text-ink">GitHub</span>. I had no strong opinions on any of it. I just wanted something modern that I could iterate on fast, without having to reconfigure a build system I didn&apos;t understand every time I wanted to change a font.
            </p>

            {/* Citation capsule */}
            <Callout>
              {/* [UNIQUE INSIGHT] */}
              Only 39% of designers say cross-discipline learning is the best fix for designer-developer friction (<Cite href="https://www.collabsoft.com/blog/designer-survey-2025">CollabSoft, 2025</Cite>). Starting this project, I understood why that number is low. The gap between &quot;I should learn to code&quot; and &quot;I&apos;m setting up a Node project from scratch&quot; is bigger than most design think-pieces acknowledge.
            </Callout>
          </FadeInSection>

          {/* Section 2 */}
          <FadeInSection>
            <SectionHeading>What &quot;vibe-coding&quot; actually means in practice</SectionHeading>

            {/* Answer-first: stat opens the section */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              63% of people using AI-assisted coding tools in 2026 are non-developers: designers, marketers, founders, according to <Cite href="https://www.secondtalent.com/resources/vibe-coding-statistics/">Second Talent&apos;s 2026 vibe coding report</Cite>. There&apos;s a reason the term spread so fast. It describes something real: building through intent rather than technical command.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              There&apos;s a version of AI-assisted coding that&apos;s basically just copy-pasting answers from a chat window. This wasn&apos;t that. Claude Code runs in the terminal, reads your actual files, makes edits directly, and tracks what&apos;s changed. It&apos;s much closer to working with a very fast, very thorough junior dev who can also explain exactly what they just did and why.
            </p>

            <PullQuote>
              &ldquo;I stopped thinking of it as AI writing code for me and started thinking of it as me making design decisions with someone who could implement them immediately.&rdquo;
            </PullQuote>

            {/* [PERSONAL EXPERIENCE] */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              The shift I noticed over the first few sessions: I stopped thinking of it as AI writing code for me and started thinking of it as me making design decisions that someone could implement right away. When I said &quot;the heading feels too cramped, the Y in Courtney is getting clipped,&quot; that&apos;s a design observation. Figuring out the fix was <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">padding-bottom: 0.75rem</code> on the gradient text span because background-clip: text clips descenders? That&apos;s engineering knowledge I didn&apos;t have. Having both in the same loop, in real time, was genuinely different from any handoff I&apos;ve been part of.
            </p>
          </FadeInSection>

          {/* Section 3 */}
          <FadeInSection>
            <SectionHeading>Learning React without sitting down to learn React</SectionHeading>

            {/* Answer-first: stat opens the section */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              69% of developers spent part of 2025 actively learning new coding techniques or a new language, according to the <Cite href="https://survey.stackoverflow.co/2025/">Stack Overflow Developer Survey</Cite>. What&apos;s different about learning React as a designer, in 2025, with an AI pair-programming partner in your terminal: you skip the theory-first phase entirely.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              I didn&apos;t do a course. I didn&apos;t read the docs front to back. I just started making things and asked questions when they broke.
            </p>

            {/* [PERSONAL EXPERIENCE] */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              After a few weeks on this site, I actually understand components now. Not because someone explained them abstractly, but because I kept hitting the same problem: I was copying the same <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">Section</code> component with the same scroll-fade logic across four case study pages. Extracting it into a shared <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">FadeInSection.tsx</code> made it click. I get why it matters now because I felt the cost of not doing it first.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              State clicked for me when I was working on the typewriter effect in the hero. There are three things that have to stay in sync: which role is displayed, whether it&apos;s typing or deleting, and what characters are currently showing. Seeing that as three <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">useState</code> hooks, then watching what happened when one changed, made it tangible in a way no abstract explanation would have.
            </p>

            <Callout>
              {/* [UNIQUE INSIGHT] */}
              Making things break and then understanding why they broke turned out to be a faster learning path than reading about them first. I&apos;m not sure that&apos;s universally true, but it was true for me.
            </Callout>
          </FadeInSection>

          {/* Section 4 */}
          <FadeInSection>
            <SectionHeading>Tailwind CSS: a designer&apos;s native language</SectionHeading>

            {/* Answer-first: stat opens the section */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              Tailwind CSS now exceeds 75 million npm downloads per month, the most of any CSS framework, and 51% of developers use it daily according to the <Cite href="https://dev.to/andriy_ovcharov_312ead391/css-architecture-2025-is-tailwind-a-must-have-or-just-hype-jed">State of CSS 2025 survey</Cite>. That dominance isn&apos;t an accident. From a designer&apos;s perspective, it makes complete sense.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              If React was the foreign part, Tailwind was the part that clicked immediately. The utility-class model (describe exactly what you want, right in the element, no separate stylesheet) maps almost directly to how I think in design tools. In Figma I&apos;m looking at a frame and setting properties on it. Tailwind feels like that.
            </p>

            {/* [PERSONAL EXPERIENCE] */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              Tailwind v4 has an <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">@theme</code> block where you define your design tokens (colors, spacing, fonts) and they become available as utility classes everywhere in the codebase. Setting up <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">--color-purple: #8059C4</code> and then using <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">text-purple</code>, <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">bg-purple</code>, <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">border-purple</code> anywhere felt like a design system that was actually enforced by the tooling. Not just documented in a Figma library that slowly drifts from what&apos;s in production.
            </p>

            {/* Citation capsule */}
            <Callout>
              {/* [UNIQUE INSIGHT] */}
              Figma variables and Tailwind&apos;s <code className="bg-surface/70 border border-border rounded px-1 py-0.5 text-xs font-mono text-purple-deep">@theme</code> tokens solve the same problem from opposite sides of the handoff. If you&apos;ve used one, you already understand the other.
            </Callout>
          </FadeInSection>

          {/* Section 5 */}
          <FadeInSection>
            <SectionHeading>Branching and iterating: the layout-exploration phase</SectionHeading>

            {/* Answer-first: stat opens the section */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              Teams using AI-assisted development report 51% faster task completion on average, according to <Cite href="https://www.secondtalent.com/resources/vibe-coding-statistics/">Second Talent&apos;s 2026 vibe coding report</Cite>. For me the speed gain wasn&apos;t about writing code quickly. It was about layout exploration: running five structural hypotheses in parallel without any of them touching the live site.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              I kept a <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">main</code> branch for the live site and a <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">layout-exploration</code> branch for experiments. At one point I had five different homepage layouts as separate routes (<code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">/layout-1</code> through <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">/layout-v2</code>), each testing a different structural hypothesis. Two-column hero vs. bento grid. 2x2 card grid vs. featured-first layout.
            </p>

            <PullQuote>
              &ldquo;Having five layout variations living simultaneously in routes I could just navigate to felt closer to having an artboard-per-concept in Figma than anything else I&apos;d tried in a browser.&rdquo;
            </PullQuote>

            {/* [PERSONAL EXPERIENCE] */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              Holding multiple options open, navigating between them in a real browser, seeing how they felt at different viewport sizes: it changed how I think about layout exploration in code. It&apos;s slower to set up than Figma. The fidelity of what you&apos;re evaluating is so much higher though.
            </p>
          </FadeInSection>

          {/* Section 6 */}
          <FadeInSection>
            <SectionHeading>Adding life: Framer Motion and SVG animations</SectionHeading>

            {/* Answer-first: stat opens the section */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              44% of non-developer vibe coding users are building UIs as their primary output, the largest single use case in the category (<Cite href="https://www.secondtalent.com/resources/vibe-coding-statistics/">Second Talent, 2026</Cite>). That tracks with my experience. Once you have actual control over the code, making the UI feel alive becomes a design problem you can finally solve end to end.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              Animation was the part I was most intimidated by going in. It ended up being the most fun. Installing <span className="font-bold text-ink">Framer Motion</span> unlocked a level of expressiveness I hadn&apos;t been able to get anywhere close to before. Spring physics, stagger delays, viewport-triggered entrance animations. Stuff that takes careful choreography in After Effects or Principle. Suddenly achievable with a <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">transition</code> prop.
            </p>

            {/* [PERSONAL EXPERIENCE] */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              The SVG animation work was a whole separate rabbit hole. Morphing blobs, orbiting rings, radial stat arcs, spark bursts on the CTA hover. I built an entire examples page just to see what was possible before deciding what to actually use. That felt like a very natural design process: explore broadly, then select deliberately.
            </p>
          </FadeInSection>

          {/* Section 7 */}
          <FadeInSection>
            <SectionHeading>What building this site taught me about design</SectionHeading>

            {/* Answer-first: stat opens the section */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              39% of designers name cross-discipline learning as the single most effective fix for designer-developer friction, according to the <Cite href="https://www.collabsoft.com/blog/designer-survey-2025">CollabSoft 2025 designer survey</Cite>. I used to nod at that stat. I believe it differently now.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              I expected to learn about code. The more interesting thing I learned was about design decisions I&apos;d been making for years without fully understanding what they meant downstream.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              When you&apos;re writing the component yourself, &quot;make the cards responsive&quot; stops being a note in a spec and becomes a concrete question you have to answer right now: at what breakpoint? What does the grid collapse to? What happens to the image ratio? Those decisions exist in design tools too, but they get deferred or left implicit in a way that code just doesn&apos;t allow.
            </p>

            <Callout>
              {/* [PERSONAL EXPERIENCE] */}
              I stopped writing specs that said &quot;responsive&quot; and started having much more specific opinions about exactly how things should behave at 375px. Code made me a more precise designer.
            </Callout>

            {/* [UNIQUE INSIGHT] */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              I also came out with a different kind of empathy for engineers. Not the generic &quot;devs have it hard&quot; take you hear in design communities. Something more specific. I now get why a spec comment like &quot;subtle animation on hover&quot; can turn into a 45-minute conversation. What I mean by subtle and what&apos;s actually achievable in a sprint are often two different things. Having to make those calls myself changed how I write specs for others.
            </p>
          </FadeInSection>

          {/* Section 8 */}
          <FadeInSection>
            <SectionHeading>Where this goes next</SectionHeading>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              The site is live and still evolving. This blog is new. I want to write about design process, strategy, and whatever I&apos;m currently messing around with. There are three more case studies to write, animations I built examples for but haven&apos;t applied yet, and probably a refactor I haven&apos;t thought of yet that&apos;ll seem obvious in six months.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              If you&apos;re a designer who&apos;s been curious about coding but keep putting it off: the curve is real, and it&apos;s worth it anyway. Not because every designer needs to code, but because building something yourself has a way of making you better at designing things for other people to build. That alone was worth the awkward early sessions where I had no idea what I was doing.
            </p>
          </FadeInSection>

          {/* FAQ */}
          <FadeInSection>
            <SectionHeading>Frequently asked questions</SectionHeading>
            <div className="space-y-6 mt-6">
              <FAQItem
                q="Can a non-developer really build a production portfolio site with Claude Code?"
                a={<>Yes. 63% of vibe coding tool users in 2026 are non-developers (<Cite href="https://www.secondtalent.com/resources/vibe-coding-statistics/">Second Talent, 2026</Cite>). Claude Code is particularly suited to this because it runs in your terminal and edits files directly. Less like a chatbot, more like pair programming with someone who can implement what you describe.</>}
              />
              <FAQItem
                q="Do you need to know how to code before starting?"
                a="Basic HTML and CSS literacy helps (knowing what a div is, being comfortable in inspect element), but it's not a hard requirement. The bigger thing is having clear design intent. Claude Code handles implementation; you need to know what you're building and why."
              />
              <FAQItem
                q="Is Next.js a good choice for a designer's first portfolio site?"
                a={<>For a designer comfortable in Figma and curious about code, Next.js with Tailwind CSS v4 is a solid starting point. Tailwind&apos;s utility-class model maps closely to how designers set properties in design tools, and it&apos;s now the world&apos;s most downloaded CSS framework at 75M+ npm downloads per month (<Cite href="https://dev.to/andriy_ovcharov_312ead391/css-architecture-2025-is-tailwind-a-must-have-or-just-hype-jed">State of CSS 2025</Cite>). Next.js handles routing and deployment cleanly without needing to configure a build system from scratch.</>}
              />
              <FAQItem
                q="How does building in code change the design process?"
                a="The biggest shift is fidelity. Evaluating a layout in a real browser at actual viewport sizes is a fundamentally different experience from a Figma prototype. You catch things — text overflow, grid collapse behavior, touch target sizing — that prototype tools paper over. The cost is setup time; the gain is accuracy."
              />
              <FAQItem
                q="What's the hardest part of building your own site as a designer?"
                a="Writing precise specs for yourself. When you're both the designer and the implementer, 'make it feel right' isn't a spec. You learn quickly that every visual decision is a set of concrete choices about breakpoints, spacing values, and timing functions. That specificity turns out to make you a better designer for everyone else too."
              />
            </div>
          </FadeInSection>

          {/* Footer nav */}
          <FadeInSection>
            <div className="mt-20 pt-10 border-t-2 border-border flex items-center justify-between">
              <a
                href="/"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-muted hover:text-purple transition-colors duration-200 group"
              >
                <span className="transition-transform group-hover:-translate-x-1">←</span>
                Back to portfolio
              </a>
              <a
                href="mailto:courtneyeisenhuth@gmail.com"
                className="font-sans text-sm font-semibold text-purple hover:text-purple-deep transition-colors duration-200"
              >
                Get in touch →
              </a>
            </div>
          </FadeInSection>

        </div>
      </div>
    </>
  );
}
