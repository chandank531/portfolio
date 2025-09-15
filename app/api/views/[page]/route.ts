import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET(req: Request, { params }: { params: { page: string } }) {
  const page = params.page;

  try {
    const client = await clientPromise;
    const db = client.db("portfolio"); // use your DB name
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
