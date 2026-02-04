import { NextResponse } from "next/server";

const demoProfiles = ["lynx", "teo", "kira", "imani"];

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const { username } = params;

  if (!demoProfiles.includes(username)) {
    return NextResponse.json(
      { error: "Profile not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    username,
    bio: "Designing immersive product experiences.",
    widgets: [
      { id: "twitter", type: "social", size: "2x1" },
      { id: "youtube", type: "video", size: "2x2" },
      { id: "case-study", type: "link", size: "2x1" },
    ],
    exportedAt: new Date().toISOString(),
  });
}
