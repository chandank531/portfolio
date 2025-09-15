import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("portfolio"); // replace with your DB name
    const collection = db.collection("contact_messages");

    const result = await collection.insertOne({
      name,
      email,
      message,
      created_at: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
}
