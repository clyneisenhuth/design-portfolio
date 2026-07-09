import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#9E7B50",
          borderRadius: 110,
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: 320,
            color: "#FFFFFF",
            lineHeight: 1,
          }}
        >
          C
        </span>
      </div>
    ),
    size
  );
}
