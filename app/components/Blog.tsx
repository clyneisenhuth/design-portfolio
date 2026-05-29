"use client";

import Link from "next/link";
import FadeInSection from "./FadeInSection";
import { useInView } from "../hooks/useInView";

const posts = [
  {
    title: "Designing an iOS app: from idea to functional",
    date: "May 2026",
    tags: ["iOS", "SwiftUI", "AI", "Case Study"],
    excerpt: "An experiment in what a designer can build using Claude Code and SwiftUI. Claude Code wrote the code, Xcode ran the builds, and the simulator verified the design.",
    emoji: "📱",
    slug: "shopgenz-app",
    href: "/blog/shopgenz-app",
    isNew: true,
  },
  {
    title: "Building this portfolio with Claude Code",
    date: "May 2026",
    tags: ["Process", "AI"],
    excerpt: "From zero to deployed: what it was actually like to build a design portfolio using an AI coding assistant when I'd never written production React before.",
    emoji: "🤖",
    slug: "building-my-portfolio",
    href: "/blog/building-my-portfolio",
    isNew: false,
  },
];

type Post = typeof posts[0];

function PostCard({ post }: { post: Post }) {
  const inner = (
    <div className={`group relative pl-7 border-l-[3px] border-purple/40 group-hover:border-purple py-1 overflow-hidden transition-colors duration-300 ${post.href ? "cursor-pointer" : "cursor-default"}`}>
      <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-[110px] leading-none opacity-[0.06] pointer-events-none select-none">{post.emoji}</span>

      <div className="flex items-center gap-2.5 mb-3">
        <span className="font-sans text-xs text-muted">{post.date}</span>
        <span className="w-0.5 h-0.5 rounded-full bg-muted/50" />
        {post.isNew && (
          <>
            <span className="font-sans text-xs font-bold text-purple tracking-wide">New</span>
            <span className="w-0.5 h-0.5 rounded-full bg-muted/50" />
          </>
        )}
        {!post.href && <span className="font-sans text-xs text-muted italic">Coming soon</span>}
      </div>

      <h3 className="font-heading font-bold text-2xl text-ink leading-tight mb-3 group-hover:text-purple transition-colors duration-200 pr-12">
        {post.title}
      </h3>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {post.tags.map((t) => (
          <span key={t} className="font-sans text-xs text-muted/70 border border-border px-2 py-0.5 rounded-full">{t}</span>
        ))}
      </div>

      <p className="font-sans text-sm text-muted leading-relaxed mb-4 pr-12">{post.excerpt}</p>

      {post.href && (
        <span className="font-sans text-sm font-bold text-purple flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
          Read more <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      )}
    </div>
  );

  return (
    <FadeInSection>
      {post.href ? (
        <Link href={post.href} className="block">
          {inner}
        </Link>
      ) : inner}
    </FadeInSection>
  );
}

export default function Blog() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="blog" className="py-28 px-6 bg-white/60">
      <div className="max-w-4xl mx-auto">

        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-2">
            Blog
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink">
            What I&apos;m thinking about ✍️
          </h2>
          <p className="font-sans text-sm text-muted mt-4 max-w-sm mx-auto">
            Design process, strategy, and lessons from the work.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
}
