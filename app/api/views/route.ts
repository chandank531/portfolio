import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const collection = db.collection("page_views");

    // Increment global views
    const result = await collection.findOneAndUpdate(
      { page_name: "global" },
      { $inc: { views: 1 }, $set: { updated_at: new Date() } },
      { upsert: true, returnDocument: "after" }
    );

    return NextResponse.json({ globalViews: result?.value?.views ?? 1 });
  } catch (error) {
    console.error("Global Views API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch global views" },
      { status: 500 }
    );
  }
}
