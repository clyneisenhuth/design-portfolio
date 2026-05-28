"use client";

import Link from "next/link";
import FadeInSection from "./FadeInSection";
import { useInView } from "../hooks/useInView";

const posts = [
  {
    title: "Building this portfolio with Claude Code",
    date: "May 2025",
    tags: ["Process", "AI"],
    excerpt: "From zero to deployed: what it was actually like to build a design portfolio using an AI coding assistant when I'd never written production React before.",
    tagColor: "bg-purple text-white",
    emoji: "🤖",
    slug: "building-my-portfolio",
    href: "/blog/building-my-portfolio",
  },
];

type Post = typeof posts[0];

function PostCard({ post, index }: { post: Post; index: number }) {
  const inner = (
    <div
      className={`group bg-surface rounded-3xl border-2 border-border p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-purple/25 ${"href" in post && post.href ? "cursor-pointer" : "cursor-default"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className={`font-sans text-xs font-semibold px-2.5 py-1 rounded-full ${post.tagColor}`}>
              {t}
            </span>
          ))}
        </div>
        <span className="font-sans text-xs text-muted whitespace-nowrap flex-shrink-0 bg-bg border border-border px-2.5 py-1 rounded-full">
          {post.date}
        </span>
      </div>

      {/* Title */}
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0 mt-0.5">{post.emoji}</span>
        <h3 className="font-heading font-bold text-lg text-ink leading-snug group-hover:text-purple transition-colors duration-200">
          {post.title}
        </h3>
      </div>

      {/* Excerpt */}
      <p className="font-sans text-sm text-muted leading-relaxed">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-1 border-t border-border">
        {"href" in post && post.href ? (
          <span className="font-sans text-xs text-purple font-semibold">New post</span>
        ) : (
          <span className="font-sans text-xs text-muted italic">Coming soon</span>
        )}
        <span className={`font-sans text-sm font-bold text-purple flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200 ${"href" in post && post.href ? "" : "opacity-50"}`}>
          Read more <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </div>
  );

  return (
    <FadeInSection>
      {"href" in post && post.href ? (
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

        <div className="flex flex-col gap-5">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
