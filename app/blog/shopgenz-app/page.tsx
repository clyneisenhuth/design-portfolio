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

function BeforeAfter({
  before, after, beforeLabel = "Before", afterLabel = "After", caption,
}: {
  before: string; after: string; beforeLabel?: string; afterLabel?: string; caption?: string;
}) {
  return (
    <figure className="my-10">
      <div className="grid grid-cols-2 gap-4">
        {[{ src: before, label: beforeLabel }, { src: after, label: afterLabel }].map(({ src, label }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className="relative w-full">
              <img
                src={src}
                alt={`${label} screenshot`}
                className="w-full rounded-2xl border border-border shadow-sm object-cover"
              />
              <span className={`absolute top-3 left-3 font-sans text-xs font-bold px-2.5 py-1 rounded-full shadow-sm ${label === beforeLabel ? "bg-ink/80 text-white/70" : "bg-purple text-white"}`}>
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="font-sans text-xs text-muted text-center mt-3 italic">{caption}</figcaption>
      )}
    </figure>
  );
}

export default function ShopGenZPost() {
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
                {["iOS", "SwiftUI", "AI", "Experiment"].map((t) => (
                  <span key={t} className="font-sans text-xs font-semibold px-2.5 py-1 rounded-full bg-purple text-white">{t}</span>
                ))}
                <span className="font-sans text-xs font-semibold px-2.5 py-1 rounded-full bg-bg border border-border text-muted">May 2026 · 8 min read</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
                Designing an iOS app:<br />
                <span className="gradient-text">from idea to functional</span> 📱
              </h1>
              <p className="font-sans text-lg text-muted max-w-2xl leading-relaxed">
                An experiment in what a designer can build using Claude Code and SwiftUI, with zero prior Swift experience. Claude Code wrote the code. Xcode ran the builds. The simulator verified the design.
              </p>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-2xl mx-auto px-6 py-16 pb-28">

          {/* Intro */}
          <FadeInSection>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              I&apos;ve been designing mobile apps for years and every single one went through a handoff. I&apos;d write specs, engineers would build it, and that was that. I was curious what it would actually look like to be the one building: not writing Swift myself, but using <span className="font-bold text-ink">Claude Code</span> as the heavy lifting tool to generate the code, running builds in <span className="font-bold text-ink">Xcode</span>, and using the iOS Simulator to verify the design and interactions.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              ShopGenZ was the experiment. A shopping app gave me enough real complexity to actually test the workflow: multiple screens, navigation patterns, cart state, a product grid. I picked the concept, made all the design decisions, and described what I wanted. Claude Code handled the SwiftUI implementation. I ran the builds, checked the simulator, and iterated from there.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              This is what that process looked like.
            </p>
          </FadeInSection>

          {/* Key Takeaways */}
          <FadeInSection>
            <KeyTakeaways items={[
              "Claude Code handled all the SwiftUI implementation. My job was to describe what I wanted in design terms and evaluate what came back in the simulator.",
              "The simulator is a better design verification tool than I expected. Things that look fine in Figma feel wrong fast when you're actually tapping through them on a phone screen.",
              "The loop — describe a change to Claude Code, run the build, check the simulator — was faster and more intuitive than I anticipated.",
              "Owning the build process, even as a non-engineer, forces you to make decisions you'd normally leave in a spec. That changed how I write specs.",
            ]} />
          </FadeInSection>

          {/* Section 1 */}
          <FadeInSection>
            <SectionHeading>What I built and why</SectionHeading>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              I needed something with enough real complexity to stress-test the workflow. A shopping app made sense: multiple screens, meaningful navigation decisions, state that needed to persist across views (cart, favorites), different UI patterns, and a product grid. Enough moving parts that if the process broke down, I&apos;d know where.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              The app ended up with four screens: a home feed, a shop browse view with search and filters, a cart, and a profile page. I gave it a Gen Z aesthetic — dark background, hot pink to purple gradient, electric blue accent — because I wanted it to feel like a real app, not a generic test project. The design choices were still real design choices. There just wasn&apos;t a client brief behind them.
            </p>

            <Callout>
              The goal wasn&apos;t to ship something. It was to find out what you can actually build when Claude Code is doing the heavy lifting and you&apos;re focused purely on the design and the decisions.
            </Callout>
          </FadeInSection>

          {/* Section 2 — V1 */}
          <FadeInSection>
            <SectionHeading>V1: just get it running</SectionHeading>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              The first goal was simple: get something into the simulator. Not polished, not complete — just functional. I described what I wanted screen by screen to Claude Code, it generated the SwiftUI, I ran the build in Xcode and checked the result in the simulator. Getting all four screens navigating correctly with a working cart took a few rounds of back and forth, but it got there. Seeing it actually run for the first time was genuinely exciting.
            </p>

            <BeforeAfter
              before="/blog/shopgenz/home_v1.png"
              after="/blog/shopgenz/home_v2.png"
              beforeLabel="V1"
              afterLabel="V2"
              caption="Home screen — v1 (left) vs. v2 (right)"
            />

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              V1 used standard <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">NavigationStack</code> push navigation, which is the iOS default. The stories row worked. The flash sale banner with a countdown timer was there. Category filter chips were functional. Product cards used gradient backgrounds with emoji as stand-ins for photography, just to get the layout working without dealing with images yet.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              That first build in the simulator was a real milestone. It worked. It was navigable. I could tap through screens, add things to the cart, see the count update. I&apos;d never had that experience with something I&apos;d been involved in building, and it immediately surfaced everything I wanted to change.
            </p>

            <BeforeAfter
              before="/blog/shopgenz/shop_v1.png"
              after="/blog/shopgenz/shop_v2.png"
              beforeLabel="V1"
              afterLabel="V2"
              caption="Shop view — v1 with gradient backgrounds (left) vs. v2 with real photography (right)"
            />
          </FadeInSection>

          {/* Section 3 — What changed */}
          <FadeInSection>
            <SectionHeading>What the simulator showed me</SectionHeading>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              This is where the experiment got interesting. Using the simulator to verify the design surfaced things I never would have caught in Figma. The default back-arrow navigation felt generic the moment I was tapping through it on a phone-sized screen. The cart opening as a full page push felt wrong. I&apos;ve given feedback on both of those things in design reviews before — but there&apos;s a real difference between noting it on a frame and feeling it in an actual build.
            </p>

            {/* [PERSONAL EXPERIENCE] */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              The emoji thumbnails were the clearest example. I knew going in that I&apos;d swap them for real images eventually, but I didn&apos;t realize how much they were dragging down the whole aesthetic until I saw the build running. A dark, high-energy color palette with a sneaker emoji on a gradient square reads like a placeholder no matter how polished the rest of the layout is. Real photography wasn&apos;t optional — it was structural.
            </p>

            <PullQuote>
              &ldquo;Using the simulator to verify the design surfaced problems that no Figma preview ever would have.&rdquo;
            </PullQuote>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              That&apos;s the part of this workflow I didn&apos;t anticipate. The simulator isn&apos;t just a place to confirm things look right — it&apos;s where you find out what actually needs to change.
            </p>
          </FadeInSection>

          {/* Section 4 — V2 */}
          <FadeInSection>
            <SectionHeading>V2: iterating from what I saw</SectionHeading>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              V2 came directly from running v1 in the simulator and writing down everything that felt off. Four things made the list. I fixed all four and ran it again.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              <span className="font-bold text-ink">Real product photography.</span>{" "}I swapped in Unsplash images for every product: Nike, Adidas, New Balance, Jordan, Stüssy, SKIMS, Coach, Prada. The difference was immediate. Same card layout, same gradient background colors, but the entire visual register of the app changed. What read as prototype now read as polished.
            </p>

            <BeforeAfter
              before="/blog/shopgenz/cart_v1.png"
              after="/blog/shopgenz/cart_v2.png"
              beforeLabel="V1"
              afterLabel="V2"
              caption="Cart — v1 push navigation (left) vs. v2 bottom sheet with real photo thumbnails (right)"
            />

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              <span className="font-bold text-ink">Custom sticky headers.</span>{" "}I built a <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">StickyHeaderView</code> component that handles title, subtitle, and action buttons with its own scroll-offset logic. This replaced the default NavigationStack header across the shop and account views. The home screen got a personalized greeting (&ldquo;HEY THERE 👋 / Courtney&rdquo;) instead of a back arrow and app name.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              <span className="font-bold text-ink">Sheet-based cart.</span>{" "}Moving the cart from a navigation push to a <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">.sheet</code> presentation made it feel like a modal checkout rather than another page. Dismissible by gesture, closeable with an X. That pattern lines up with how apps like Depop and GOAT handle their cart.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              <span className="font-bold text-ink">&ldquo;Add to Cart&rdquo; button.</span>{" "}The v1 product cards had a small <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">+</code> icon in the corner. V2 replaced it with a full-width &ldquo;Add to Cart&rdquo; button at the bottom of each card. More tappable, clearer affordance, and it reinforces the transactional intent of the shop view. A toast notification animates up from the bottom when triggered.
            </p>

            <BeforeAfter
              before="/blog/shopgenz/account_v1.png"
              after="/blog/shopgenz/account_v2.png"
              beforeLabel="V1"
              afterLabel="V2"
              caption="Account — v1 push header (left) vs. v2 custom sticky header with subtitle (right)"
            />
          </FadeInSection>

          {/* Section 5 — Claude Code workflow */}
          <FadeInSection>
            <SectionHeading>What the workflow actually felt like</SectionHeading>

            {/* [PERSONAL EXPERIENCE] */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              I had zero Swift experience before this. The workflow was: describe what I wanted in design terms, Claude Code generated the SwiftUI implementation, I ran the build in Xcode, and checked the result in the simulator. If something looked off or felt wrong, I described the problem and ran the build again. That&apos;s the whole loop.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              SwiftUI was readable enough that I could follow along with what Claude Code was producing even without knowing Swift. The declarative structure — <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">VStack</code>, <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">HStack</code>, <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">ZStack</code>, <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">.padding()</code>, <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">.background()</code> — maps closely to how I already think about layout. A <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">VStack</code> is a vertical stack. A <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">ZStack</code> is layering. It clicked faster than React did.
            </p>

            <Callout>
              Describe what you want. Claude Code writes the SwiftUI. Run the build in Xcode. Check it in the simulator. Repeat. That&apos;s it.
            </Callout>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              The trickier parts were decisions I&apos;d normally have put in a spec and left for an engineer. Getting <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">CartStore</code>, <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">FavoritesStore</code>, and <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">ToastStore</code> set up as environment objects that persist across screens — I would&apos;ve written &ldquo;cart state should persist globally&rdquo; in a spec and moved on. Having to actually specify the behavior precisely enough for Claude Code to implement it correctly was a useful forcing function.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              The speed was the most surprising thing. Describe a change, run the build, see it in the simulator — that whole loop took minutes, not days. Coming from a world where design changes go through sprint planning and engineering queues, that felt genuinely different.
            </p>
          </FadeInSection>

          {/* Section 6 — Screen recording */}
          <FadeInSection>
            <SectionHeading>See it in motion</SectionHeading>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              Side by side: v1 was the first working build, v2 was the redesigned version with the sticky header, toast notifications, fixed cart logic, and real product images.
            </p>

            <div className="my-8 grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <div className="rounded-2xl overflow-hidden border border-border shadow-sm bg-surface flex items-center justify-center">
                  <video
                    src="/blog/shopgenz/ShopGenZ_v1.mov"
                    controls
                    playsInline
                    className="w-full rounded-xl"
                    aria-label="ShopGenZ v1 iOS app screen recording"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="font-sans text-xs text-muted text-center italic">v1 — initial build</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="rounded-2xl overflow-hidden border border-border shadow-sm bg-surface flex items-center justify-center">
                  <video
                    src="/blog/shopgenz/ShopGenZ_v2.mov"
                    controls
                    playsInline
                    className="w-full rounded-xl"
                    aria-label="ShopGenZ v2 iOS app screen recording"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="font-sans text-xs text-muted text-center italic">v2 — redesigned</p>
              </div>
            </div>
          </FadeInSection>

          {/* Section 7 — Design decisions */}
          <FadeInSection>
            <SectionHeading>Details that came from running it, not planning it</SectionHeading>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              Some of the things I&apos;m happiest with in the final version weren&apos;t planned. They came from looking at the simulator and reacting to what I saw:
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              <span className="font-bold text-ink">The stories row.</span>{" "}Brand stories with an Instagram-style gradient ring border felt right for this audience. Unseen brands get the gradient ring (hot pink to purple to electric blue). Seen brands get a dim ring. That single visual pattern does a lot of work: social platform familiarity, urgency about new content, and a clear sense of what you&apos;ve already seen — all without any text.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              <span className="font-bold text-ink">Per-product gradient backgrounds.</span>{" "}Each product card has its own background gradient pulled from the brand&apos;s color language: dark navy for Nike, forest green for Adidas, deep red for Jordan. The Unsplash product photo sits on top. This creates a visual identity per card that makes the grid feel curated rather than uniform.
            </p>

            {/* [ORIGINAL DATA] */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              <span className="font-bold text-ink">The scroll offset system.</span>{" "}Getting the header to respond to scroll required a <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">PreferenceKey</code> that measures the scroll container&apos;s position and passes it back up to the parent. It&apos;s a non-obvious SwiftUI pattern, but once I understood it, it was clean. It&apos;s the same approach used across the home, shop, and account views, all passing <code className="bg-surface border border-border rounded px-1.5 py-0.5 text-sm font-mono text-purple">scrollOffset</code> up to a shared header component.
            </p>

            <Callout>
              The stories row does the most design work per pixel of any element in the app. Gradient ring = unseen. Dim ring = seen. No text needed.
            </Callout>
          </FadeInSection>

          {/* Section 8 — Reflections */}
          <FadeInSection>
            <SectionHeading>What I actually got out of this</SectionHeading>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              The experiment worked. Claude Code handled all the SwiftUI — I never had to write Swift myself. Running builds in Xcode and verifying in the simulator gave me a feedback loop I&apos;d never had before as a designer. And it was fast. The gap between &ldquo;I want this to feel different&rdquo; and &ldquo;it actually does feel different&rdquo; was minutes, not weeks.
            </p>

            {/* [UNIQUE INSIGHT] */}
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              The bigger thing I took away: when you own the build process, you can&apos;t leave anything vague. I&apos;m used to writing specs that say things like &ldquo;cart state persists globally&rdquo; or &ldquo;navigation feels native.&rdquo; Claude Code needs to know exactly what that means to implement it correctly. That specificity made me realize how much ambiguity I&apos;d been handing off without noticing. A 2025 CollabSoft survey of 500 designers found 52% describe developer implementations as merely &ldquo;good enough,&rdquo; with only 21% arriving pixel-perfect (<Cite href="https://www.collabsoft.com/blog/designer-survey-2025">CollabSoft, 2025</Cite>). A lot of that gap starts in the spec.
            </p>

            <PullQuote>
              &ldquo;Navigation architecture is a design decision, not an engineering one. Running the builds myself made that obvious in a way ten years of handoffs hadn&apos;t.&rdquo;
            </PullQuote>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              That same survey found 39% of designers say the best fix for collaboration is mutual skill-building: designers learning code, developers learning design (<Cite href="https://www.collabsoft.com/blog/designer-survey-2025">CollabSoft, 2025</Cite>). This was one version of that.
            </p>

            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              ShopGenZ isn&apos;t a product. It&apos;s a working app that came out of an experiment in what&apos;s possible with Claude Code and SwiftUI. If you&apos;re a designer curious about this workflow, the honest answer is: it&apos;s more accessible than it looks, Claude Code does the heavy lifting, and the simulator is a much better design verification tool than I expected.
            </p>
          </FadeInSection>

          {/* FAQ */}
          <FadeInSection>
            <SectionHeading>Frequently asked questions</SectionHeading>
            <div className="space-y-6 mt-6">
              <FAQItem
                q="Do you need to know Swift or Xcode to do this?"
                a="No. I had zero Swift experience before starting this. Claude Code wrote all the SwiftUI. My role was to describe what I wanted, run the builds in Xcode, and use the simulator to verify the design. You don't need to write code — you need to be able to describe what you want clearly enough for Claude Code to implement it."
              />
              <FAQItem
                q="How long did v1 to v2 actually take?"
                a="V1 took a few sessions to get all four screens working with functional state. The v2 iteration — photography, navigation rebuild, sheet-based cart — was another couple of sessions. Short focused rounds with the simulator open the whole time were the right approach."
              />
              <FAQItem
                q="Is the simulator actually useful for verifying design?"
                a="Way more than I expected. Things that look fine in a Figma frame feel wrong immediately when you're tapping through them on a phone-sized screen. Navigation patterns especially. I caught issues in the simulator that I would have shipped in a handoff without noticing."
              />
              <FAQItem
                q="What was the hardest part of the process?"
                a={<>Getting the sticky header to respond to scroll. SwiftUI doesn&apos;t expose scroll position directly — Claude Code used a <code className="bg-surface border border-border rounded px-0.5 py-0.5 text-xs font-mono text-purple">PreferenceKey</code> with a <code className="bg-surface border border-border rounded px-0.5 py-0.5 text-xs font-mono text-purple">GeometryReader</code> to measure and pass the position up the view hierarchy. I had to verify the behavior in the simulator a few times before it felt right.</>}
              />
              <FAQItem
                q="Would you recommend this workflow to other designers?"
                a="Yes. You don't need to know how to code — Claude Code handles that. Pick something real enough to be worth building, describe it clearly, run the builds in Xcode, and use the simulator to verify. The loop is fast, the feedback is immediate, and you'll learn more about how your designs actually work than any amount of Figma prototyping."
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
