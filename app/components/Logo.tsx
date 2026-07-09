export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-heading font-semibold text-ink ${className}`}
      style={{ letterSpacing: "-0.03em" }}
      aria-label="Courtney Eisenhuth"
    >
      courtney.e
    </span>
  );
}
