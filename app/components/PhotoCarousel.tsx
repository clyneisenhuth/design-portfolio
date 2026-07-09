"use client";

import { useRef } from "react";

const photos = [
  "IMG_1744.jpg", "IMG_1745.jpg", "IMG_1746.jpg",
  "IMG_1747.jpg", "IMG_1748.jpg", "IMG_1749.jpg",
  "IMG_1750.jpg", "IMG_1751.jpg", "IMG_1752.jpg",
];

export default function PhotoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const pause  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "paused";  };
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "running"; };

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={trackRef}
        className="flex gap-4"
        style={{
          width: "max-content",
          animation: "marquee-scroll 80s linear infinite",
        }}
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        {/* Duplicate the set so the loop is seamless */}
        {[0, 1].map((pass) =>
          photos.map((file) => (
            <div
              key={`${pass}-${file}`}
              className="flex-shrink-0 rounded-md overflow-hidden border border-border bg-surface"
              style={{ width: 300, height: 225 }}
            >
              <img
                src={`/images/photography/${file}`}
                alt=""
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
