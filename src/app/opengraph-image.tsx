import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "The Vibe Design";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #f012a4 0%, #8b1fc2 55%, #41209e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 100,
            fontWeight: "bold",
            letterSpacing: "-0.05em",
          }}
        >
          THE VIBE DESIGN
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            marginTop: 20,
            opacity: 0.9,
          }}
        >
          Scale your medspa from invisible to unstoppable.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
