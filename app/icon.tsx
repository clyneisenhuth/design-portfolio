import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
  const fontData = await fetch(
    "https://fonts.gstatic.com/s/fredoka/v14/X7nP4b87HvSqjb_WIi2yDCRwoQ.ttf"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#6B5BFF",
          borderRadius: 110,
        }}
      >
        <span
          style={{
            fontFamily: "Fredoka",
            fontWeight: 700,
            fontSize: 360,
            color: "#FFFFFF",
            lineHeight: 1,
            marginTop: 32,
          }}
        >
          C
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Fredoka", data: fontData, weight: 700, style: "normal" }],
    }
  );
}
