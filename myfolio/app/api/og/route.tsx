import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Myfolio";
  const subtitle = searchParams.get("subtitle") ?? "Bento profile builder";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #111827, #0f172a)",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <p style={{ fontSize: 32, opacity: 0.7 }}>Myfolio</p>
        <h1 style={{ fontSize: 64, margin: "24px 0 16px" }}>{title}</h1>
        <p style={{ fontSize: 28, opacity: 0.8 }}>{subtitle}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
