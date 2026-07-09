"use client";

import { useLightbox } from "./Lightbox";

export default function LightboxImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const { open } = useLightbox();
  return (
    <img
      src={src}
      alt={alt}
      className={`${className ?? ""} cursor-zoom-in`}
      onClick={() => open({ src, alt })}
    />
  );
}
