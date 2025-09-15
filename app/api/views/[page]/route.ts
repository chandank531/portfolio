import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ page: string }> } // Next.js 15 requires params as Promise
) {
  try {
    const { page } = await context.params; // await the promise
    const client = await clientPromise;
    const db = client.db("portfolio");
    const collection = db.collection("page_views");

    const result = await collection.findOneAndUpdate(
      { page_name: page },
      { $inc: { views: 1 }, $set: { updated_at: new Date() } },
      { upsert: true, returnDocument: "after" }
    );

    return NextResponse.json({ views: result?.value?.views ?? 1 });
  } catch (error) {
    console.error("Page Views API Error:", error);
    return NextResponse.json({ error: "Failed to fetch views" }, { status: 500 });
  }
}
