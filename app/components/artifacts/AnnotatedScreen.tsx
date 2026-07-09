"use client";

type Annotation = { x: number; y: number; label: string };

export default function AnnotatedScreen({
  src,
  alt,
  title,
  annotations,
}: {
  src: string;
  alt: string;
  title: string;
  annotations: Annotation[];
}) {
  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden">
      <div className="relative">
        <img src={src} alt={alt} className="w-full object-cover" />
        {annotations.map((a, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple text-white font-mono text-[11px] font-bold flex items-center justify-center shadow-lg ring-2 ring-white"
            style={{ left: `${a.x}%`, top: `${a.y}%` }}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="p-5">
        <p className="font-heading font-bold text-ink text-sm mb-3">{title}</p>
        <div className="flex flex-col gap-1.5">
          {annotations.map((a, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-purple-pale text-purple font-mono text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="font-sans text-xs text-muted leading-relaxed">{a.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
