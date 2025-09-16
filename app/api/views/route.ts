import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");

    const visitors = db.collection("visitors");

    // get IP (works on Vercel/Next.js edge too)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      "unknown";

    if (ip === "unknown") {
      return NextResponse.json({ error: "Could not detect IP" }, { status: 400 });
    }

    // insert only if not exists (unique IP tracking)
    await visitors.updateOne(
      { ip },
      { $setOnInsert: { ip, firstVisit: new Date() } },
      { upsert: true }
    );

    // count total unique IPs = total views
    const totalViews = await visitors.countDocuments();

    return NextResponse.json({ totalViews });
  } catch (error) {
    console.error("Views API Error:", error);
    return NextResponse.json({ error: "Failed to fetch views" }, { status: 500 });
  }
}
