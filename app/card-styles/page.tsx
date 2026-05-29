import Link from "next/link";

const posts = [
  {
    title: "Designing an iOS app: from idea to functional",
    date: "May 2026",
    tags: ["iOS", "SwiftUI", "AI", "Experiment"],
    excerpt: "An experiment in what a designer can build using Claude Code and SwiftUI. Claude Code wrote the code, Xcode ran the builds, and the simulator verified the design.",
    emoji: "📱",
    slug: "shopgenz-app",
    href: "/blog/shopgenz-app",
    isNew: true,
    readTime: "8 min",
    gradientStyle: { background: "linear-gradient(135deg, #8059C4 0%, #D4A8F0 100%)" } as React.CSSProperties,
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
    readTime: "10 min",
    gradientStyle: { background: "linear-gradient(135deg, #4B7BE5 0%, #8BB8F8 100%)" } as React.CSSProperties,
  },
];

type Post = typeof posts[0];

// ─── Style 01: Structured ───────────────────────────────────────────────────
function CardStructured({ post }: { post: Post }) {
  return (
    <Link href={post.href} className="block group">
      <div className="bg-surface rounded-3xl border-2 border-border p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:border-purple/25 transition-all duration-300 h-full">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="font-sans text-xs font-semibold px-2.5 py-1 rounded-full bg-purple text-white">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {post.isNew && (
              <span className="inline-flex items-center gap-1.5 font-sans text-xs font-bold px-2.5 py-1 rounded-full bg-purple/25 border border-purple/50 text-purple-deep whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse" />
                New post
              </span>
            )}
            <span className="font-sans text-xs text-muted whitespace-nowrap bg-bg border border-border px-2.5 py-1 rounded-full">{post.date}</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0 mt-0.5">{post.emoji}</span>
          <h3 className="font-heading font-bold text-lg text-ink leading-snug group-hover:text-purple transition-colors duration-200">{post.title}</h3>
        </div>
        <p className="font-sans text-sm text-muted leading-relaxed flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-xs text-muted">{post.readTime} read</span>
          <span className="font-sans text-sm font-bold text-purple flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
            Read more <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Style 02: Editorial ────────────────────────────────────────────────────
function CardEditorial({ post }: { post: Post }) {
  return (
    <Link href={post.href} className="block group">
      <div className="relative pl-7 border-l-[3px] border-purple/40 group-hover:border-purple py-1 overflow-hidden transition-colors duration-300">
        <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-[110px] leading-none opacity-[0.06] pointer-events-none select-none">{post.emoji}</span>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="font-sans text-xs text-muted">{post.date}</span>
          <span className="w-0.5 h-0.5 rounded-full bg-muted/50" />
          <span className="font-sans text-xs text-muted">{post.readTime} read</span>
          {post.isNew && (
            <>
              <span className="w-0.5 h-0.5 rounded-full bg-muted/50" />
              <span className="font-sans text-xs font-bold text-purple tracking-wide">New</span>
            </>
          )}
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
        <span className="font-sans text-sm font-bold text-purple flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
          Read more <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}

// ─── Style 03: Feature ──────────────────────────────────────────────────────
function CardFeature({ post }: { post: Post }) {
  return (
    <Link href={post.href} className="block group">
      <div className="rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div className="relative px-6 pt-8 pb-10 flex flex-col items-center text-center" style={post.gradientStyle}>
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.4) 0%, transparent 70%)" }} />
          <div className="flex flex-wrap justify-center gap-2 mb-5 relative z-10">
            {post.isNew && (
              <span className="font-sans text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white border border-white/40 backdrop-blur-sm">
                New post
              </span>
            )}
            {post.tags.map((t) => (
              <span key={t} className="font-sans text-xs font-semibold px-2.5 py-1 rounded-full bg-white/15 text-white/90 border border-white/20 backdrop-blur-sm">{t}</span>
            ))}
          </div>
          <span className="text-5xl mb-3 relative z-10 drop-shadow-sm">{post.emoji}</span>
          <span className="font-sans text-xs text-white/65 relative z-10">{post.date} · {post.readTime} read</span>
        </div>
        <div className="bg-surface px-6 pt-5 pb-6 flex flex-col gap-3">
          <h3 className="font-heading font-bold text-lg text-ink leading-snug group-hover:text-purple transition-colors duration-200">{post.title}</h3>
          <p className="font-sans text-sm text-muted leading-relaxed">{post.excerpt}</p>
          <div className="flex justify-end pt-1">
            <span className="font-sans text-sm font-bold text-purple flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
              Read more <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── Style 04: Compact ──────────────────────────────────────────────────────
function CardCompact({ post }: { post: Post }) {
  return (
    <Link href={post.href} className="block group">
      <div className="bg-surface rounded-2xl border border-border flex overflow-hidden hover:shadow-lg hover:border-purple/30 hover:-translate-y-0.5 transition-all duration-300">
        <div
          className="w-[72px] flex-shrink-0 flex flex-col items-center justify-center gap-1 text-3xl"
          style={post.gradientStyle}
        >
          <span>{post.emoji}</span>
        </div>
        <div className="flex-1 px-4 py-4 flex flex-col gap-2 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-sans text-xs text-muted">{post.date}</span>
            {post.isNew && (
              <span className="inline-flex items-center gap-1 font-sans text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple/25 border border-purple/40 text-purple-deep">
                <span className="w-1 h-1 rounded-full bg-purple animate-pulse" />
                New
              </span>
            )}
          </div>
          <h3 className="font-heading font-bold text-base text-ink leading-snug group-hover:text-purple transition-colors duration-200 line-clamp-2">{post.title}</h3>
          <p className="font-sans text-xs text-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between pt-1 mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 2).map((t) => (
                <span key={t} className="font-sans text-[10px] text-muted border border-border px-1.5 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
            <span className="font-sans text-xs font-bold text-purple flex items-center gap-1 group-hover:gap-1.5 transition-all duration-200 flex-shrink-0 ml-2">
              Read <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── Section wrapper ────────────────────────────────────────────────────────
function StyleSection({
  number, label, description, children,
}: {
  number: string;
  label: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20">
      <div className="flex items-baseline gap-3 mb-1">
        <span className="font-sans text-xs font-bold text-muted/50 tabular-nums">{number}</span>
        <h2 className="font-heading font-bold text-2xl text-ink">{label}</h2>
      </div>
      <p className="font-sans text-sm text-muted mb-8 pl-9">{description}</p>
      <div className="bg-surface/60 rounded-3xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {children}
        </div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function CardStylesPage() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-28">

        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-muted hover:text-purple transition-colors duration-200 mb-12 group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to portfolio
        </Link>

        <div className="mb-16">
          <p className="font-heading text-sm font-semibold text-blue uppercase tracking-widest mb-2">Design exploration</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-ink mb-4">Blog card styles</h1>
          <p className="font-sans text-base text-muted max-w-lg leading-relaxed">
            Four distinct treatments for the same two posts. Each takes a different approach to hierarchy, density, and visual personality.
          </p>
        </div>

        <StyleSection
          number="01"
          label="Structured"
          description="Organized zones: tag header, emoji + title, excerpt, footer. Predictable and scannable."
        >
          {posts.map((p) => <CardStructured key={p.slug} post={p} />)}
        </StyleSection>

        <StyleSection
          number="02"
          label="Editorial"
          description="Left rule, watermark emoji, pure typography. Magazine and newspaper feel — no box, no background."
        >
          {posts.map((p) => <CardEditorial key={p.slug} post={p} />)}
        </StyleSection>

        <StyleSection
          number="03"
          label="Feature"
          description="Gradient splash header with centered emoji, white content section below. Immersive and visual-forward."
        >
          {posts.map((p) => <CardFeature key={p.slug} post={p} />)}
        </StyleSection>

        <StyleSection
          number="04"
          label="Compact"
          description="Horizontal layout with a colored emoji panel on the left. Dense and scannable for longer lists."
        >
          {posts.map((p) => <CardCompact key={p.slug} post={p} />)}
        </StyleSection>

      </div>
    </div>
  );
}
